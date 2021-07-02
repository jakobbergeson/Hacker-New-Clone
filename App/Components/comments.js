import * as React from "react";
import MetaData from "./metaData";

export default function Comments({ comments }) {
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index} className="comment">
          <MetaData by={comment.by} time={comment.time} descendants={null} />
          <p dangerouslySetInnerHTML={{ __html: comment.text }} />
        </li>
      ))}
    </ul>
  );
}
