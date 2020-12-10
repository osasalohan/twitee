import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Twit from "./Twit";
import { fetchPosts } from "../store/actions/post";

const Twits = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.currentUser.user);
  const twits = useSelector((state) => state.posts);

  let renderTwits = twits.map((twit) => <Twit key={twit._id} twit={twit} />);

  useEffect(() => {
    dispatch(fetchPosts(user.id));
  });

  return <div>{renderTwits}</div>;
};

export default Twits;
