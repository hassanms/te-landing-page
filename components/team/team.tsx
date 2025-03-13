import { Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const Teams = ({ image, name, role }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        className="relative aspect-[149/182] overflow-hidden rounded-lg"
        sx={{
          marginLeft: "0.5rem",
          paddingBottom: {
            base: "80%",
            md: "140%",
            lg: "140%",
            xl: "120%",
          },
          paddingTop: "0px",
          height: "0",
          width: {
            base: "80%",
            md: "100%",
            lg: "100%",
            xl: "90%",
          },
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          alt="Jackie Sanders"
          className="w-full object-cover object-center"
          style={{
            position: "absolute",
            width: "100%",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            objectFit: "cover",
            color: "transparent",
          }}
          src={image}
        />
        <Box
          sx={{
            top: {
              base: "60%",
              md: "70%",
            },
            bottom: "10rem",
            width: "90%",
            textAlign: "center",
            backgroundColor: "#d3f0f0",
            position: "absolute",
            borderRadius: "0.5rem",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              borderRadius: "0.5rem",
              position: "relative",
              padding: "0.5rem",
              backgroundColor: "#e1f0f0",
            }}
          >
            <h3
              className="text-base font-semibold text-dark"
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#004c4c",
              }}
            >
              {name}
            </h3>
            <p
              className="text-sm text-body-color"
              style={{ fontSize: "0.875rem", color: "#333" }}
            >
              {role}
            </p>
            <div>
              <span
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                }}
              >
                <svg
                  width="61"
                  height="30"
                  viewBox="0 0 61 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="45"
                    r="45"
                    fill="#13C296"
                    fill-opacity="0.11"
                  ></circle>
                </svg>
              </span>
              <span
                className="absolute right-0 top-0"
                style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                }}
              >
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="0.706257"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 0.706257 24.3533)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="6.39669"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 6.39669 24.3533)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="12.0881"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 12.0881 24.3533)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="17.7785"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 17.7785 24.3533)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="0.706257"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 0.706257 18.6624)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="6.39669"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 6.39669 18.6624)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="12.0881"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 12.0881 18.6624)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="17.7785"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 17.7785 18.6624)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="0.706257"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 0.706257 12.9717)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="6.39669"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 6.39669 12.9717)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="12.0881"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 12.0881 12.9717)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="17.7785"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 17.7785 12.9717)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="0.706257"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 0.706257 7.28077)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="6.39669"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 6.39669 7.28077)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="12.0881"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 12.0881 7.28077)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="17.7785"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 17.7785 7.28077)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="0.706257"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 0.706257 1.58989)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="6.39669"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 6.39669 1.58989)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="12.0881"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 12.0881 1.58989)"
                    fill="#3056D3"
                  ></circle>
                  <circle
                    cx="17.7785"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 17.7785 1.58989)"
                    fill="#3056D3"
                  ></circle>
                </svg>
              </span>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Teams;
