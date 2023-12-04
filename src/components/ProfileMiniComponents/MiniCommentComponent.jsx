import { Link } from "react-router-dom";
import "./MiniCommentComponent.css";
import { DeleteComment } from "../Delete/DeleteComment/DeleteComment";
import { useState } from "react";



export const MiniCommentComponent = ({ data, setIsDeleted }) => {





  return (
    <div className="miniCommentComponent">
      <Link to={`/users/${data.creator}`}>
        <img className="miniCommentComponentImage" src={data.image} />
      </Link>

      <div className="miniCommentComponentText">
        <h2>{data.name}</h2>
        <h3>{data.createdAt.slice(0, 10)}</h3>
        <p>{data.comment}</p>
      </div>
      <div className="miniCommentComponentLikes">
        Liked by {data.likes.length}
      </div>
      <div className="deleteComment">
      <DeleteComment  commentId={data._id} setIsDeleted={setIsDeleted} />

      </div>
    </div>
  );
};
