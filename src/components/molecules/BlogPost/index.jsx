import React from "react";
import BlogPostCard from "../../atoms/BlogPostCard";
import "./BlogPost.css";


const postCardDetails = [
  {
    id:"1",
    heading: "Kids Learning Culture",
    date: "Nov 15, 2022",
    image: "pic3",
    title: "Fun ways to improve your kid learning",
    content: "It can be hard trying to get kids to read and focus at the same time. I know hard it is because I have been there.Being ...",
  },
  {
    id:"2",
    heading: "Kids Learning Culture",
    date: "Nov 15, 2022",
    image: "pic4",
    title: "Fun ways to improve your kid learning",
    content: "It can be hard trying to get kids to read and focus at the same time. I know hard it is because I have been there.Being ...",
  },
]
const BlogPost = () => {
  return (
    <div className="BlogPost">
      <h3 className="BlogPost__heading">Recent Blog Post</h3>
      <div className="BlogPost__card">
        {postCardDetails.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
