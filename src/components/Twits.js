import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  deletePost,
  createComment,
  likePost,
} from "../store/actions/post";

const AddComment = (props) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const userId = useSelector((state) => state.currentUser.user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(userId, props.postId, { text }));
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

const Twits = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.currentUser.user);
  const twits = useSelector((state) => state.posts);

  const handleDeleteTwit = (id, postId) => {
    dispatch(deletePost(id, postId));
  };

  const handleLike = (id, postId) => {
    dispatch(likePost(id, postId));
  };

  let renderTwits = twits.map((twit) => (
    <div key={twit}>
      <p>
        {twit.text} <small class="muted-text">by {twit.user.name}</small>
      </p>
      {twit.user.id === user.id ? (
        <button
          onClick={handleDeleteTwit(user.id, twit.id)}
          className="btn btn-danger"
        >
          Delete twit
        </button>
      ) : (
        ""
      )}

      <h6>Comments</h6>
      {twit.comments.map((comment) => (
        <div key={comment}>
          <p>
            {comment.text}{" "}
            <small class="muted-text">by {comment.user.name}</small>
          </p>
        </div>
      ))}
      <h6>Add Comment</h6>
      <AddComment postId={twit.id} />
      <h6>Likes</h6>
      <button
        onClick={handleLike(user.id, twit.id)}
        className="btn btn-primary"
      >
        Like
      </button>
      <p>Liked by {twit.likeCount} people</p>
      <p></p>
    </div>
  ));

  useEffect(() => {
    dispatch(fetchPosts(user.id));
  });

  return <div>{renderTwits}</div>;
};

export default Twits;
