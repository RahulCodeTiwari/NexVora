// import Category from "../models/Category.model.js";
// import HomeTopProduct from "../models/HomeTopProduct.model.js";
// import Product from "../models/Product.model.js";
// import Contact from "../models/Contact.model.js";
// import Blog from "../models/Blog.model.js";
// import Review from "../models/Review.model.js";

// export const getDashboardCounts = async (req, res) => {
//   try {
//     const data = {
//       categories: await Category.countDocuments(),
//       products: await Product.countDocuments(),
//       homeTopProducts: await HomeTopProduct.countDocuments(),
//       contacts: await Contact.countDocuments(),
//       blogs: await Blog.countDocuments(),
    
//       pendingReviews: await Review.countDocuments({ status: "pending" }),
//     };

//     res.json({ success: true, data });
//   } catch {
//     res.status(500).json({ success: false });
//   }
// };
