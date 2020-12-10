import React from "react";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const user = useSelector((state) => state.currentUser.user);
  const posts = useSelector((state) =>
    state.posts.filter((post) => post.user._id === user.id)
  );

  return (
    <div className="d-flex justify-content-center">
      <p>
        Hi {user.name}, you have {posts.length} twit
        {posts.length === 1 ? "" : "s"}
      </p>
    </div>
  );
};

export default Profile;
