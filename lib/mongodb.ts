import mongoose from 'mongoose'

/**
 * Cached connection.
 *
 * Serverless invocations reuse the module scope between warm starts, so without
 * caching every request opens a new pool and the cluster runs out of
 * connections under load.
 */
declare global {
  // eslint-disable-next-line no-var
  var _mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined
}

const cached = global._mongoose ?? (global._mongoose = { conn: null, promise: null })

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('MONGODB_URI is not set')

  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}
