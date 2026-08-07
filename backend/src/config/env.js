import "dotenv/config"

export const env = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    CLIENT_URL: process.env.CLIENT_URL,
    MONGO_URI: process.env.MONGO_URI,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
    CLERK_WEBHOOK_SIGNING_SECRET: process.env.CLERK_WEBHOOK_SIGNING_SECRET,
}