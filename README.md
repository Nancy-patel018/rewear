# ReWear

A community clothing exchange platform built with React, Node.js, and MongoDB.

## Features
- User authentication (user/admin roles)
- Add, browse, and swap clothing items
- Admin moderation for item approval
- Image uploads with Cloudinary

## Image Storage with Cloudinary

This project uses [Cloudinary](https://cloudinary.com/) for image storage and delivery. When users upload images, they are stored in your Cloudinary account and served via CDN for fast, reliable access.

### Setup Cloudinary
1. **Create a Cloudinary account:**
   - Go to [cloudinary.com](https://cloudinary.com/) and sign up for a free account.
2. **Get your Cloudinary credentials:**
   - Log in and go to your dashboard.
   - Note your `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
3. **Configure your backend:**
   - In your backend `.env` file, add:
  
   - The backend uses these credentials to upload images to Cloudinary.
4. **Image URLs:**
   - Uploaded images are stored in Cloudinary and their URLs are saved in the database.
   - The frontend displays images using these URLs.

## Running the Project
1. Install dependencies:
   ```bash
   npm install
   cd server && npm install
   ```
2. Set up your `.env` files (see above for Cloudinary).
3. Start the backend:
   ```bash
   cd server
   npm start
   ```
4. Start the frontend:
   ```bash
   npm start
   ```

## License
MIT 
