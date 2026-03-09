// import express from "express";
// import {
//   createBlog,
//   deleteBlog,
//   getBlogBySlug,
//   getBlogs,
//   updateBlog,
// } from "../controllers/blogController.js";
// import { protect } from "../middleware/admin.Middleware.js";
// import upload from "../middleware/multer.js";

// const router = express.Router();

// /* ========= PUBLIC ========= */
// router.get("/", getBlogs);
// router.get("/:slug", getBlogBySlug);

// /* ========= ADMIN ========= */
// router.post("/", protect, upload.single("featuredImage"), createBlog);
// router.put("/:id", protect, upload.single("featuredImage"), updateBlog);
// router.delete("/:id", protect, deleteBlog);

// export default router;
