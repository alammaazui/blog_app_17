const AUTHOR = require("../models/author.model");

const getAuthors = async (req, res) => {
  try {
    
    const authorsData = await AUTHOR.findAll();
    res.status(200).json({ data: authorsData, status: "success" });

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const authorData = await AUTHOR.findOne({ where: { id } });

    res.status(200).json({ status: "success", data: authorData });
  } catch (error) {
    res.status(500).json({ status: "error", msg: error.message });
  }
};

const postAuthor = async (req, res) => {
  try {
    const { experience, qualification } = req.body;
    
    if(!experience || !qualification){
        res.status(400).json({msg:"please provide author experience and qualification ..."})
    }

    const data = await AUTHOR.create({experience,qualification})

    res.status(200).json({msg:"author has been created successfully..."});
} catch (error) {
    res.status(500).json({msg:error.message});
  }
};

const updateAuthor = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(500).json();
  }
};
const deleteAuthor = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(500).json();
  }
};
module.exports = {
  getAuthors,
  getAuthor,
  postAuthor,
  updateAuthor,
  deleteAuthor,
};
