import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
    return (
        <div className="mt-[20px]">
            <NavLink to={`/blog/${post.id}`}>
                <span className="font-bold text-lg">{post.title}</span>
            </NavLink>
            <p>
                By
                <span>{post.author}</span>
                on{" "}
                <NavLink
                    to={`/categories/${post.category.replaceAll(" ", "-")}`}
                >
                    <span>{post.category}</span>
                </NavLink>
            </p>
            <p> Posted on {post.date} </p>
            <p> {post.content}</p>
            <div>
                {post.tags.map((tag, index) => (
                    <NavLink
                        key={index}
                        to={`/tags/${tag.replaceAll(" ", "-")}`}
                    >
                        <span className="mr-2 text-blue-600 font-bold">{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default BlogDetails;
