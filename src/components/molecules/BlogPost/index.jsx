import React from "react";
import BlogPostCard from "../../atoms/BlogPostCard";
import "./BlogPost.scss";


const postCardDetails = [
  {
    id:"1",
    heading: "Kids Learning Culture",
    date: "Nov 15, 2022",
    image: "pic3",
    title: "Fun Ways To Improve Your Kid Learning Culture",
    content: "It can be hard trying to get kids to read and focus at the same time. I know hard it is because I have been there.Being ...",
  },
  {
    id:"2",
    heading: "Coming soon",
    date: "Nov 15, 2022",
    image: "pic6",
    title: "More Fun With 3d Illustrations",
    content: "With a well thought inspiration on including 3d illustration generator upcoming. We are trilled about what the future holds...",
  },
]

const cardDetails = [
  {
    id:"1",
    heading: "Illustrations",
    date: "Nov 12, 2022",
    image: "pic5",
    title: "Realistic Illustrations",
    content: "Story.ai have integrated realistic looking illustrations to perfectly march the scene and improve usability...",
  },
  {
    id:"2",
    heading: "Team heads",
    date: "Nov 12, 2022",
    image: "pic4",
    title: "Brainstorming",
    content: "Team heads have been challenge on improving general usability of story.ai by implementing robust coopo....",
  },
  {
    id:"3",
    heading: "Plans",
    date: "Nov 12, 2022",
    image: "pic7",
    title: "subscriptions",
    content: "Subscriptions has been added to the functionalities of story.ai to perfectly balance the company’s regular...",
  },

]

const BlogPost = () => {
  return (
    <div className="BlogPost">
      <p className="BlogPost__heading">Recent blog post</p>
      <span className="BlogPost__heading-div"></span>
      <div className="BlogPost__card">
        {postCardDetails.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
      <div>
      <p className="BlogPost__heading">All blog post</p>
      <span className="BlogPost__heading-div"></span>
      <div className="BlogPost__card-main">
        {cardDetails.map((card) => (
          <BlogPostCard key={card.id} {...card} />
        ))}
      </div>

      </div>
    </div>
  );
};

export default BlogPost;
