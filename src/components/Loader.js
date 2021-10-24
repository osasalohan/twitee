import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const Loader = (props) => {
  const override = css`
    border-color: #ffffff;
    position: relative;
    // top: -20px;
    // left: -10px;
  `;

  return <ClipLoader css={override} size={35} color={"#ffffff"} />;
};

export default Loader;
