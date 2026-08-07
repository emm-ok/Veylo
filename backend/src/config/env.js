import "dotenv/config"

export const env = {
    PORT: process.env.PORT,
    CLIENT_URL: process.env.CLIENT_URL,
    MONGO_URI: process.env.MONGO_URI,
}