import { v2 } from "cloudinary";

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUpload = async (localFilePath) => {
   try {
      if (!localFilePath) return null;
      // upload file on cloudinary
      response = await cloudinary.uploader.upload(localFilePath, {
         resource_type: "auto",
      });
      console.log("File is uploaded on Cloudinary", response.url);
      return response;
   } catch (error) {
      fs.unlinkSync(localFilePath); // remove temporary saved file if
      // error occurs
      return null;
   }
};
export { cloudinaryUpload };
