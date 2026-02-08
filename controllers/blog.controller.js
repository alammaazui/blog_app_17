const BLOG = require("../models/blog.model");

const getBlogs = async (req, res) => {
  try {
    const blogs = await BLOG.findAll();

    res.status(200).json({ status: "success", data: blogs });
  } catch (error) {
    res.status(500).json({ staus: "error", msg: error.message });
  }
};
const getBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await BLOG.findOne({ where: { id } });

    res.status(200).json({ status: "success", data: blog });
  } catch (error) {
    res.status(500).json({ staus: "error", msg: error.message });
  }
};
const postBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ status: "error", msg: "title and description is required" });
    }

    const blog = await BLOG.create({ title, description });

    return res
      .status(200)
      .json({ status: "success", msg: "blog has been posted successfully" });
  } catch (error) {
    res.status(500).json({ staus: "error", msg: error.message });
  }
};
const updateBlog = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ staus: "error", msg: error.message });
  }
};
const deleteBlog = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ staus: "error", msg: error.message });
  }
};

module.exports = { getBlogs, getBlog, postBlog, updateBlog, deleteBlog };
