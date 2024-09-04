import React from "react";

const LayoutBottom = () => {
  return (
    <div
      className="-z-1 absolute bottom-0 left-0"
      aria-label="shape"
      style={{
        position: "absolute",
        bottom: "0rem",
        left: "0rem",
      }}
    >
      <svg
        width="143"
        height="138"
        viewBox="0 0 143 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="118"
          r="101"
          stroke="url(#paint0_linear_52:83)"
          stroke-width="34"
        ></circle>
        <defs>
          <linearGradient
            id="paint0_linear_52:83"
            x1="-12.7969"
            y1="-37.3359"
            x2="99.2109"
            y2="173.773"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#008080"></stop>
            <stop offset="1" stop-color="#006666" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LayoutBottom;
