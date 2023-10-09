import React from "react";
import { blogdata } from "./blogdata";
import { Blogcomponent, BlogProps } from "./Blogcomponent";

export const BlogList = () => {
  const bd = blogdata.blogs;

  return (
    <div className="blist">
      <h1>My Own Blog</h1>
      {bd.map((blogs:BlogProps) => (
        <Blogcomponent
          id={blogs.id}
          imageSrc={blogs.imageSrc}
          heading={blogs.heading}
          description={blogs.description}
          commentsCount={blogs.commentsCount}
        />
      ))}
    </div>
  );
};
