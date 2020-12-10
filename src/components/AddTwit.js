import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../store/actions/post";

const AddTwit = (props) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const userId = useSelector((state) => state.currentUser.user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(userId, { text }));
  };

  return (
    <form onSubmit={handleSubmit}>
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
        onClick={handleSubmit}
        className="btn btn-primary"
      ></button>
    </form>
  );
};

export default AddTwit;
