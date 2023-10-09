import React from "react";

export interface BlogProps {
  id: number;
  imageSrc: string;
  heading: string;
  description: string;
  commentsCount: number;
}

export const Blogcomponent = ({
  id,
  imageSrc,
  heading,
  description,
  commentsCount,
}: BlogProps) => {
  return (
    <div className="blog">
      <img src={imageSrc} alt={heading} />
      <h2>{heading}</h2>
      <p>{description}</p>
      <div className="comments">
        <span>{commentsCount} Comments</span>
      </div>
    </div>
  );
};
