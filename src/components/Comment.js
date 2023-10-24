import React from "react";
import "./Comment.css";
import { useState, useRef, useEffect } from "react";
import { ReactComponent as DownArrow } from "react";
import { ReactComponent as UpArrow } from "react";
import Action from "./Action";

const Comment = ({ comment }) => {
  const [input, setInput] = useState("");

  const onAddComment = () => {};

  return (
    <div>
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              className="inputContainer__input first_input"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type..."
            />
            <Action
              className="reply comment"
              type="COMMENT"
              handleClick={onAddComment}
            />
          </>
        ) : (
          <>
            <span style={{ wordWrap: "break-word" }}>{comment.name}</span>

            <div style={{ display: "flex", marginTop: "5px"}}>
              <Action className="reply" type="REPLY" />
              <Action className="reply" type="EDIT" />
              <Action className="reply" type="DELETE" />
            </div>
          </>
        )}
      </div>

      <div style={{ paddingLeft: 25 }}>
        {comment?.items?.map((cmnt) => {
          return <Comment key={cmnt.id} comment={cmnt} />;
        })}
      </div>
    </div>
  );
};

export default Comment;
