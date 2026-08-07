import ImageKit, { toFile } from "@imagekit/nodejs";
import { env } from "./env.js";

const imagekit = new ImageKit({ privateKey: env.IMAGEKIT_PRIVATE_KEY });


function hasImageKitConfig() {
  return Boolean(env.IMAGEKIT_PRIVATE_KEY);
}


function createFileName(originalName = "upload") {
  const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
  return `chat-${Date.now()}-${safeName}`;
  // if originalName= "My Photo (1).png" 
  // result: "chat-1749300000000-My_Image__1_.png"
}

async function uploadChatMedia(file) {
  const fileName = createFileName(file.originalname);

  const result = await imagekit.files.upload({
    file: await toFile(file.buffer, fileName, { type: file.mimetype }),
    fileName,
    folder: "/veylo-chat-app",
  });

  return result.url;
}

export { uploadChatMedia, hasImageKitConfig };