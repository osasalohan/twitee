import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../store/actions/post";
import Loader from "./Loader";

const AddComment = (props) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const userId = useSelector((state) => state.currentUser.user.id);
  const loading = useSelector((state) => state.currentUser.loading);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(userId, props.postId, { text }));
    setText("");
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <input
        className="form-control"
        type="text"
        name="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={handleCommentSubmit}
        className="btn btn-primary"
      >
        {loading ? <Loader /> : "Add comment"}
      </button>
    </form>
  );
};

export default AddComment;
