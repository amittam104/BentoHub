import { Client, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_ENDPOINT_URL)
  .setProject(import.meta.env.VITE_PROJECT_ID);

const storage = new Storage(client);

export { storage };
