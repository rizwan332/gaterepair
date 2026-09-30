# -*- coding: utf-8 -*-
"""
Pulls the photographs and their captions out of the client's case-study Word
documents.

WHY IN DOCUMENT ORDER
---------------------
A .docx is a zip, and the images inside are named image1.jpg, image2.jpg and so
on in whatever order Word stored them - which is NOT the order they appear on
the page. These documents group their photos deliberately (before / during /
after) and caption each one, so extracting by filename would silently move a
"before" shot into the "after" section.

So this walks word/document.xml paragraph by paragraph, resolves each drawing's
relationship id through word/_rels/document.xml.rels, and keeps the running
text. A caption is the first following text paragraph that is not one of the
section headings the documents use.

WHY PYTHON AND NOT tsx
----------------------
Every other script here is tsx. Reading a zip in Node needs a dependency, and a
one-off extraction of client source material does not justify adding one to a
site that serves 251 pages. Python's zipfile is in the standard library.

    python scripts/extract-case-studies.py
"""
import io, json, os, re, sys, zipfile

SOURCE = os.path.join('case-studies', 'Case studies-20260929T162135Z-1-001', 'Case studies')
OUT = os.path.join('client-assets', 'case-studies')

NOT_A_CAPTION = re.compile(
    r'^(project photos?|job photos?|photo \d+ of \d+|before|after|repair in progress|'
    r'gate views during repair|before /|after /|project video|job video|website|suggested|'
    r'photo organization|before and diagnosis|work completed|result|location:|gate type:|'
    r'operator:|service:|customer:|warranty:|system)', re.I)


def slugify(s):
    s = s.lower().replace('\u2013', '-').replace('\u2014', '-')
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')


def flow_of(xml):
    """Ordered sequence of images and text paragraphs."""
    out = []
    for para in xml.split('</w:p>'):
        for m in re.finditer(r'r:embed="([^"]+)"', para):
            out.append(('image', m.group(1)))
        text = re.sub(r'<[^>]+>', '', para)
        for a, b in (('&amp;', '&'), ('&lt;', '<'), ('&gt;', '>'), ('&quot;', '"'), ('&#39;', "'")):
            text = text.replace(a, b)
        text = text.replace('\uf0b7', '').strip()
        if text:
            out.append(('text', text))
    return out


def main():
    files = sorted(f for f in os.listdir(SOURCE) if f.endswith('.docx') and not f.startswith('~$'))
    results = []

    for f in files:
        z = zipfile.ZipFile(os.path.join(SOURCE, f))
        xml = z.read('word/document.xml').decode('utf-8', 'ignore')
        rels_xml = z.read('word/_rels/document.xml.rels').decode('utf-8', 'ignore')

        rels = {}
        for m in re.finditer(r'Id="([^"]+)"[^>]*Target="([^"]+)"', rels_xml):
            if m.group(2).startswith('media/'):
                rels[m.group(1)] = 'word/' + m.group(2)

        flow = flow_of(xml)
        slug = slugify(re.sub(r'^case study\s*[-\u2013]\s*', '', os.path.splitext(f)[0], flags=re.I))
        out_dir = os.path.join(OUT, slug)
        os.makedirs(out_dir, exist_ok=True)

        photos = []
        for i, (kind, val) in enumerate(flow):
            if kind != 'image':
                continue
            media = rels.get(val)
            if not media or media not in z.namelist():
                continue

            n = len(photos) + 1
            ext = os.path.splitext(media)[1] or '.jpg'
            name = '%02d%s' % (n, ext)
            with open(os.path.join(out_dir, name), 'wb') as fh:
                fh.write(z.read(media))

            caption = ''
            for j in range(i + 1, min(i + 6, len(flow))):
                k2, t2 = flow[j]
                if k2 == 'image':
                    break
                if NOT_A_CAPTION.match(t2):
                    continue
                if len(t2) > 8:
                    caption = t2
                    break
            photos.append({'file': name, 'caption': caption})

        results.append({'slug': slug, 'docx': f, 'photos': photos})
        print('%-62s %2d photos, %2d captioned' % (slug[:62], len(photos),
                                                   sum(1 for p in photos if p['caption'])))

    os.makedirs(OUT, exist_ok=True)
    io.open(os.path.join(OUT, 'extracted.json'), 'w', encoding='utf-8').write(
        json.dumps(results, indent=1, ensure_ascii=False))
    print('\n%d case studies, %d photos -> %s' % (
        len(results), sum(len(r['photos']) for r in results), OUT))


if __name__ == '__main__':
    main()
