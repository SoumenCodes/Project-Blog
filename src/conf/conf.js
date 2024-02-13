const conf = {
  appwriteUrl: String(import.meta.env.VITE_AppWrite_URL),
  appwriteProjectId: String(import.meta.env.VITE_AppWrite_Project_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_AppWrite_Database_ID),
  appwriteCollectionId: String(import.meta.env.VITE_AppWrite_Collection_ID),
  appwriteBucketId: String(import.meta.env.VITE_AppWrite_Bucket_ID),
};
export default conf;
