import "dotenv/config"

export const env = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    CLIENT_URL: process.env.CLIENT_URL,
    MONGO_URI: process.env.MONGO_URI,
}