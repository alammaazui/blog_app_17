import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getblogs = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/blog", {
        method: "GET",
        headers: { Authorization: `bearer ${localStorage.getItem("token")}` },
      });
      if (!response.ok) {
        throw `error => ${response.status}`;
      }

      const data = await response.json();
      setBlogs(data.data);
    } catch (error) {}
  };
  useEffect(()=>{
      
      getblogs();
  },[])

  const delete_blog = async (blog_id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blog/${blog_id}`,
        {
          method: "DELETE",
          headers: { Authorization: `bearer ${localStorage.getItem("token")}` },
        },
      );

      if (!response.ok) {
        throw `error => ${response.status}`
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <table>
        <tr>
          <td>id</td>
          <td>title</td>
          <td>description</td>
          <td>author name</td>
          <td>Actions</td>
        </tr>
        {blogs.map((blog) => (
          <tr>
            <td>{blog.id}</td>
            <td>{blog.title}</td>
            <td>{blog.description}</td>
            <td>author name</td>
            <td>
              <button>Edit</button>
              <button
                onClick={(e) => {
                  delete_blog(blog.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Blogs;
