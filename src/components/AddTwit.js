import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../store/actions/post";
import Loader from "./Loader";

const AddTwit = (props) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const userId = useSelector((state) => state.currentUser.user.id);
  const loading = useSelector((state) => state.currentUser.loading);

  const handleTwitSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(userId, { text }));
    setText("");
  };

  return (
    <form onSubmit={handleTwitSubmit}>
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
        onClick={handleTwitSubmit}
        className="btn btn-primary"
      >
        {loading ? <Loader /> : "Add twit"}
      </button>
    </form>
  );
};

export default AddTwit;
