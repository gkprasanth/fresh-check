// appwrite.js
import { Client, Account, Databases, ID } from "appwrite";

// Initialize the Appwrite client
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('674993f7003b303b070f'); // Replace with your Appwrite project ID

// Export Account instance for authentication
export const account = new Account(client);
export const databases = new Databases(client);
 export { ID };

export default client;