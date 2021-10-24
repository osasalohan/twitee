import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Twit from "./Twit";
import { fetchPosts } from "../store/actions/post";

const Twits = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.currentUser.user);
  const twits = useSelector((state) => state.posts);

  const initialRender = useRef(true);

  let renderTwits = twits.map((twit) => <Twit key={twit._id} twit={twit} />);

  useEffect(() => {
    if (initialRender.current) {
      dispatch(fetchPosts(user.id));
      initialRender.current = false;
    }
  });

  return <div>{renderTwits}</div>;
};

export default Twits;
