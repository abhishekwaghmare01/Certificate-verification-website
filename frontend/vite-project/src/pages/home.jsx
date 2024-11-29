import React from "react";
import { Container } from "react-bootstrap";
import AppNavbar from "./navbar";

// Corrected the relative path for the image
import HomeImage from '../assets/Home-image.png';

const Home = () => {
  return (
    <>
      <AppNavbar />
      <Container className="mt-4 text-center">
        <div className="heading" style={{ marginTop: "0.5rem" }}>
          <h1 style={{ color: "#364bc5", fontSize: "2rem" }}>
            Welcome to the Certificate Verification System
          </h1>
          <p>
            This system helps you to verify and manage certificates easily and
            efficiently.
          </p>
        </div>

        <div>
          <img
            src={HomeImage}
            alt="Home"
            style={{
              width: "60%",
              maxWidth: "600px",
              height: "auto",
              border: "2px solid black",
              marginTop: "1rem",
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
