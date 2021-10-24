import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { deletePost, likePost } from "../store/actions/post";
import AddComment from "./AddComment";
import Loader from "./Loader";

const Twit = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.currentUser.user);
  const loading = useSelector((state) => state.currentUser.loading);

  const { twit } = props;

  const handleDeleteTwit = () => {
    dispatch(deletePost(user.id, twit._id));
  };

  const handleLike = () => {
    dispatch(likePost(user.id, twit._id));
  };

  return (
    <div>
      <p>
        {twit.text}{" "}
        <small className="muted-text">
          by {twit.user.name} at <Moment date={twit.createdAt} />
        </small>
      </p>
      {twit.user._id === user.id ? (
        <button onClick={handleDeleteTwit} className="btn btn-danger">
          {loading ? <Loader /> : "Delete twit"}
        </button>
      ) : (
        ""
      )}

      <h6>Comments</h6>
      {twit.comments.map((comment) => (
        <div key={comment._id}>
          <p>
            {comment.text}{" "}
            <small className="muted-text">by {comment.user.name}</small>
          </p>
        </div>
      ))}
      <h6>Add Comment</h6>
      <AddComment postId={twit._id} />
      <h6>Likes</h6>
      <button onClick={handleLike} className="btn btn-primary">
        Like
      </button>
      <p>
        Liked by {twit.likeCount} user{twit.likeCount === 1 ? "" : "s"}
      </p>
      <hr className="mb-3" />
    </div>
  );
};

export default Twit;
