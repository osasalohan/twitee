import React from "react";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const user = useSelector((state) => state.currentUser.user);

  return (
    <div className="d-flex justify-content-center">
      <p>
        Hi {user.name}, you have {user.posts.length} twits
      </p>
    </div>
  );
};

export default Profile;