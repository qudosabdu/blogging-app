import Link from "next/link";
import path from "path";
import fs from "fs";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useSession } from "next-auth/react";

import elonmusk from "/public/elonmusk.jpg";

export default function Home({ blogPosts }) {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePublish = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("/api/publishBlog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("Blog published successfully");
        // Refresh the page to display the new blog
        window.location.reload();
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
    }
  };

  return (
    <div>
      <header>
        <h1 className=" py-8 ml-10 text-2xl font-extrabold text-gray-900 dark:text-black sm:text-xl sm:tracking-tight lg:text-2xl ">
          All Blogs
        </h1>
      </header>

      <main className="bg-slate-50 dark:g-slate-50">
        <div className="max-w-screen-xl mx-auto py-6 px-4 sm:py-12 sm:px-3 lg:px-4">
          <div className="mt-6 space-y-4">
            {session && (
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Publish a Blog
                </h2>
                <label>
                  Title:
                  <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                </label>
                <label className="block mt-4">
                  Content:
                  <textarea
                    value={content}
                    onChange={handleContentChange}
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                </label>
                <label className="block mt-4">
                  Image:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
                <button
                  onClick={handlePublish}
                  className="mt-4 p-2 bg-blue-500 text-white rounded-md"
                >
                  Publish
                </button>
              </div>
            )}

            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 shadow-md rounded-lg flex"
              >
                <div className="flex-shrink-0 mr-4">
                  <Image
                    width={50} // Adjust the width as needed
                    height={50} // Adjust the height as needed
                    src={elonmusk} // Use the correct image path from your data
                    alt="Blog Image"
                    className="h-20 w-20 object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-black">
                      {post.title}
                    </h2>
                    <span className="text-sm font-normal text-gray-500">
                      {post.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-black mt-2">
                    {post.content}...
                  </p>
                  <div className="mt-4">
                    <Link
                      className="text-blue-500 hover:underline"
                      href={`/blogs/${post.slug}`}
                    >
                      Read More
                    </Link>
                    <button className="ml-2 text-gray-500 hover:text-gray-700">
                      Edit
                    </button>
                    <button className="ml-2 text-red-500 hover:text-red-700">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src", "data", "blogPosts.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const blogPosts = JSON.parse(jsonData);

  return {
    props: {
      blogPosts,
    },
  };
}
