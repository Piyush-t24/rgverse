import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faGlobe,
  faBook,
  faSearch,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub as fabGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

// Responsive hook to get window width
// import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

// StyledButton copied from Roadmaps.jsx
const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  padding: 1px;
  background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b19);
  position: relative;
  transition:
    background 0.3s,
    transform 0.3s;
  animation: zoom 3s ease-in-out infinite;
  margin-top: 0;

  &:hover {
    transform: scale(0.98);
    animation-play-state: paused;
  }

  &::after {
    content: "";
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
    transition: box-shadow 0.3s;
  }

  &:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }

  .blob1 {
    position: absolute;
    width: 50px;
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #00ff91,
      #228504,
      transparent
    );
    box-shadow: -10px 10px 30px #00ff482d;
    transition:
      background 0.3s,
      box-shadow 0.3s;
  }

  &:hover .blob1 {
    box-shadow: -5px 5px 20px #000;
  }

  .inner {
    padding: 10px 20px;
    border-radius: 12px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f110f);
    transition: background 0.3s;
  }

  &:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }

  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #33ff001a,
      #00ff2f11,
      transparent
    );
    position: absolute;
    transition: opacity 0.3s;
  }

  &:hover .inner::before {
    opacity: 0;
  }

  @keyframes zoom {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

const Navbar = ({ onOpenModal }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[rgba(20,47,33,0.1)] bg-[#0d3528] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/home">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-[#092413]">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline">Back</span>
          </button>
        </a>
        <div className="flex flex-1 items-center justify-center">
          <StyledButton onClick={onOpenModal}>
            <div className="blob1" />
            <div className="inner">Add Resource</div>
          </StyledButton>
        </div>
        <div className="text-2xl font-bold">
          <img
            src="./RGVerse ICON.png"
            alt="RGVerse"
            className="h-12 w-12"
            loading="lazy"
          />
        </div>
      </div>
    </nav>
  );
};

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: "Check out this Open Source opportunity!",
        text: "Join the Open Source Program and contribute to amazing projects.",
        url: url,
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  } else {
    alert("Web Share API is not supported in your browser.");
  }
};

const Hero = () => {
  return (
    <section className="hero-section mb-0 flex min-h-[10vh] flex-col items-center justify-center text-white">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <div className="my-6"></div>
        <StyledWrapper>
          <div className="modgp relative inline-block w-full py-3">
            <div className="relative">
              <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                <div className="flex w-full items-center justify-center">
                  Resources Hub
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0">
              <div
                id="style-AQliM"
                className="animate-magic-sparkle style-AQliM pointer-events-none absolute z-10"
              >
                <svg
                  style={{
                    filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                  }}
                  fill="none"
                  viewBox="0 0 68 68"
                  height={8}
                  width={8}
                  className="animate-spin-slow"
                >
                  <path
                    fill="white"
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                  />
                </svg>
              </div>
              <div
                id="style-WCb99"
                className="animate-magic-sparkle style-WCb99 pointer-events-none absolute z-10"
              >
                <svg
                  style={{
                    filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                  }}
                  fill="none"
                  viewBox="0 0 68 68"
                  height={11}
                  width={11}
                  className="animate-spin-slow"
                >
                  <path
                    fill="white"
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                  />
                </svg>
              </div>
              <div
                id="style-dBNZV"
                className="animate-magic-sparkle style-dBNZV pointer-events-none absolute z-10"
              >
                <svg
                  style={{
                    filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                  }}
                  fill="none"
                  viewBox="0 0 68 68"
                  height={9}
                  width={9}
                  className="animate-spin-slow"
                >
                  <path
                    fill="white"
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                  />
                </svg>
              </div>
              <div
                id="style-tiisO"
                className="animate-magic-sparkle style-tiisO pointer-events-none absolute z-10"
              >
                <svg
                  style={{
                    filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                  }}
                  fill="none"
                  viewBox="0 0 68 68"
                  height={8}
                  width={8}
                  className="animate-spin-slow"
                >
                  <path
                    fill="white"
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                  />
                </svg>
              </div>
              <div
                id="style-re9B7"
                className="animate-magic-sparkle style-re9B7 pointer-events-none absolute z-10"
              >
                <svg
                  style={{
                    filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                  }}
                  fill="none"
                  viewBox="0 0 68 68"
                  height={11}
                  width={11}
                  className="animate-spin-slow"
                >
                  <path
                    fill="white"
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                  />
                </svg>
              </div>
              <div
                id="style-BKG4G"
                className="animate-magic-sparkle style-BKG4G pointer-events-none absolute z-10"
              >
                <svg
                  style={{
                    filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                  }}
                  fill="none"
                  viewBox="0 0 68 68"
                  height={7}
                  width={7}
                  className="animate-spin-slow"
                >
                  <path
                    fill="white"
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                  />
                </svg>
              </div>
              <div
                id="style-NaoVe"
                className="animate-magic-sparkle style-NaoVe pointer-events-none absolute z-10"
              >
                <svg
                  style={{
                    filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                  }}
                  fill="none"
                  viewBox="0 0 68 68"
                  height={8}
                  width={8}
                  className="animate-spin-slow"
                >
                  <path
                    fill="white"
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                  />
                </svg>
              </div>
              <div
                id="style-pwIlv"
                className="animate-magic-sparkle style-pwIlv pointer-events-none absolute z-10"
              >
                <svg
                  style={{
                    filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                  }}
                  fill="none"
                  viewBox="0 0 68 68"
                  height={11}
                  width={11}
                  className="animate-spin-slow"
                >
                  <path
                    fill="white"
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                  />
                </svg>
              </div>
              <div
                id="style-QmcAd"
                className="animate-magic-sparkle style-QmcAd pointer-events-none absolute z-10"
              >
                <svg
                  style={{
                    filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                  }}
                  fill="none"
                  viewBox="0 0 68 68"
                  height={7}
                  width={7}
                  className="animate-spin-slow"
                >
                  <path
                    fill="white"
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                  />
                </svg>
              </div>
              <div
                id="style-VG2eL"
                className="animate-magic-sparkle style-VG2eL pointer-events-none absolute z-10"
              >
                <svg
                  style={{
                    filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                  }}
                  fill="none"
                  viewBox="0 0 68 68"
                  height={11}
                  width={11}
                  className="animate-spin-slow"
                >
                  <path
                    fill="white"
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </StyledWrapper>
      </div>
    </section>
  );
};

const Tags = () => {
  const tags = [
    "DSA Resources",
    "Best Courses",
    "Documentation",
    "Research Papers",
    "GATE Resources",
    "Useful APIs",
    "Coding Resources",
    "Placement Material",
    "Aptitude Material",
    "Cold Emailing Templates",
    "Company Projects",
    "Interview Preparation",
    "System Design",
    "Frontend Resources",
    "Backend Resources",
    "DevOps Resources",
    "Cloud Computing",
    "Machine Learning",
    "Data Science",
    "Blockchain",
    "Cyber Security",
    "UI/UX Design",
    "Product Management",
    "Startup Resources",
    "Freelancing Guides",
    "Resume Templates",
    "Portfolio Ideas",
    "Tech Blogs",
    "Programming Books",
    "Online Learning",
  ];

  return (
    <section id="tags" className="mb-0 w-full pt-12 sm:py-16">
      <h4 className="text-md text-primary font-lg mb-8 text-center text-[#00fb69] lg:text-2xl">
        Explore Our Comprehensive Resource Collection!
      </h4>

      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={true}
        loop={0}
        className="w-full"
      >
        <div className="flex w-full flex-nowrap items-center">
          {[...tags, ...tags, ...tags].map((text, index) => (
            <span key={index} className="tag-item mr-6">
              {text}
            </span>
          ))}
        </div>
      </Marquee>

      <div className="my-2"></div>

      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={true}
        loop={0}
        direction="right"
        className="w-full"
      >
        <div className="flex w-full flex-nowrap items-center">
          {[...tags, ...tags, ...tags].map((text, index) => (
            <span key={index} className="tag-item mr-6">
              {text}
            </span>
          ))}
        </div>
      </Marquee>

      <style jsx>{`
        .tag-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid #00fb69;
          background-color: rgba(13, 53, 40, 0.6);
          color: #e2e8f0;
          font-size: 0.915rem;
          text-align: center;
          min-width: max-content;
        }
      `}</style>
    </section>
  );
};

const StyledWrapper = styled.div`
  .relative {
    position: relative;
  }

  .inline-block {
    display: inline-block;
  }

  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  :backdrop {
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
  }

  .pointer-events-none {
    pointer-events: none;
  }

  .absolute {
    position: absolute;
  }

  .inset-0 {
    inset: 0;
  }

  button {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    width: 300px !important;
  }

  button {
    text-transform: none;
  }

  button {
    cursor: pointer;
  }

  .inline-flex {
    display: inline-flex;
  }

  .justify-center {
    justify-content: center;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .bg-primary {
    --tw-bg-opacity: 1;
    background-color: rgba(15, 53, 19, 0);
  }

  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .py-2\.5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .font-medium {
    font-weight: 500;
  }

  .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  #style-AQliM.style-AQliM {
    top: 1%;
    left: 99%;
  }
  #style-WCb99.style-WCb99 {
    top: 7%;
    left: 1%;
  }
  #style-dBNZV.style-dBNZV {
    top: 93%;
    left: 23%;
  }
  #style-tiisO.style-tiisO {
    top: 43%;
    left: 15%;
  }
  #style-re9B7.style-re9B7 {
    top: 93%;
    left: 9%;
  }
  #style-BKG4G.style-BKG4G {
    top: 21%;
    left: 88%;
  }
  #style-NaoVe.style-NaoVe {
    top: 99%;
    left: 95%;
  }
  #style-pwIlv.style-pwIlv {
    top: 64%;
    left: 99%;
  }
  #style-QmcAd.style-QmcAd {
    top: 14%;
    left: 45%;
  }
  #style-VG2eL.style-VG2eL {
    top: 2%;
    left: 48%;
  }

  /* Keyframes for sparkle animation */
  @keyframes sparkle {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  /* Add animation to sparkle elements */
  .animate-magic-sparkle {
    animation: sparkle 2s infinite;
  }

  .style-AQliM {
    animation-delay: 0.5s;
  }
  .style-WCb99 {
    animation-delay: 0.33s;
  }
  .style-dBNZV {
    animation-delay: 0.6s;
  }
  .style-tiisO {
    animation-delay: 0.9s;
  }
  .style-re9B7 {
    animation-delay: 1.2s;
  }
  .style-BKG4G {
    animation-delay: 1.5s;
  }
  .style-NaoVe {
    animation-delay: 1.8s;
  }
  .style-pwIlv {
    animation-delay: 1.9s;
  }
  .style-QmcAd {
    animation-delay: 1.4s;
  }
  .style-VG2eL {
    animation-delay: 1.7s;
  }
`;

// Resource Card Styles
const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(10rem, auto);
  gap: 18px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(9rem, auto);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 8px;
    padding: 10px;
  }
`;

const ResourceCard = styled.div`
  background: #162e1a;
  border-radius: 0.75rem;
  border: none;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0.25rem 0.94rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  &:hover {
    transform: translateY(-0.31rem);
    box-shadow: 0 0.5rem 1.56rem rgba(0, 251, 105, 0.3);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: transparent;
  border-bottom: none;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ color }) => color || "rgba(0, 251, 105, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 18px;
  color: ${({ iconColor }) => iconColor || "#00fb69"};
`;

const ResourceType = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #e2e8f0;
`;

const CardBody = styled.div`
  padding: 0 1.25rem;
  flex-grow: 1;
`;

const ResourceTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const ResourceDescription = styled.p`
  font-size: 14px;
  color: #c5e3bf;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const CardFooter = styled.div`
  padding: 0.3125rem 1.25rem 0.9375rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  background: transparent;
  border-top: none;
`;

const Tag = styled.span`
  background: rgba(46, 152, 90, 0.15);
  color: #c5e3bf;
  padding: 0.3125rem 0.75rem;
  border-radius: 1.25rem;
  font-size: 0.85rem;
  font-weight: 500;
`;

// Resource Data
const resourceData = [
  {
    id: 1,
    type: "Google Drive",
    title: "DSA Resources Collection",
    description:
      "Comprehensive collection of DSA problems, solutions, and company-specific question banks.",
    tags: ["#DSA", "#Interview", "#FAANG"],
    icon: faGoogleDrive,
    iconColor: "#00fb69",
    iconBg: "rgba(0, 251, 105, 0.1)",
    links: [
      {
        url: "https://drive.google.com/drive/folders/1Da_v5uHIvBscWcRRgMsYGq-hJ00dQL9Y",
        label: "Main Drive Folder",
        icon: faGoogleDrive,
      },
      {
        url: "https://docs.google.com/spreadsheets/d/1SB9SudeHrS729P38isNxwBIuB09p7wxa/edit?gid=367540931#gid=367540931",
        label: "Extra DSA Sheets",
        icon: faGoogleDrive,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 2,
    type: "Google Drive",
    title: "GATE Resources",
    description:
      "GATE preparation resources for all branches at one place – notes, PYQs, strategies, and drives.",
    tags: ["#GATE", "#Preparation", "#AllBranches"],
    icon: faGoogleDrive,
    iconColor: "#00fb69",
    iconBg: "rgba(0, 251, 105, 0.1)",
    links: [
      {
        url: "https://drive.google.com/drive/u/3/folders/1cizSKoqU8ihukDjUMPz7iSZUHkxfjHa7",
        label: "GATE CSE I",
        icon: faGoogleDrive,
      },
      {
        url: "https://github.com/baquer/GATE-and-CSE-Resources-for-Students",
        label: "GATE CSE II",
        icon: faGoogleDrive,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 3,
    type: "Google Drive",
    title: "Programming Language Notes",
    description:
      "Handpicked notes and resources for C, C++, Python, Java, and more – from basics to advanced topics.",
    tags: ["#Programming", "#Notes", "#Languages"],
    icon: faGoogleDrive,
    iconColor: "#00fb69",
    iconBg: "rgba(0, 251, 105, 0.1)",
    links: [
      {
        url: "https://drive.google.com/drive/folders/1gFCtzasHnOOdixNGY3IpPhcl9iDS9Gfx?usp=sharing",
        label: "View Drive Folder",
        icon: faGoogleDrive,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 4,
    type: "Document",
    title: "Top Certified Courses & Certifications",
    description:
      "Curated list of in‑demand certification programs—Google Career Certificates, freeCodeCamp, and more—with global recognition and practical learning.",
    tags: ["#Certification", "#Career", "#SkillUp"],
    icon: faBook,
    iconColor: "#ffd166",
    iconBg: "rgba(255, 209, 102, 0.1)",
    links: [
      {
        url: "https://docs.google.com/document/d/1cKz8SqUOqOZ2h9u_xe1wDfV0G4142dLdMWdDrAZC9HM/edit?tab=t.0",
        label: "Google Career Certificates",
        icon: faBook,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 5,
    type: "Web",
    title: "Open‑Access Research Papers",
    description:
      "Curated collection of research papers across engineering and tech—accessible via public Google Drive from CORE open‑access repository.",
    tags: ["#Research", "#Papers", "#AllBranches"],
    icon: faGlobe,
    iconColor: "#4cc9f0",
    iconBg: "rgba(76, 201, 240, 0.1)",
    links: [
      {
        url: "https://core.ac.uk/",
        label: "Browse CORE Papers",
        icon: faGlobe,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 6,
    type: "GitHub",
    title: "Projects with Source Code",
    description:
      "Explore a curated list of beginner to advanced-level projects from various domains with complete open-source code on GitHub.",
    tags: ["#Projects", "#OpenSource", "#GitHub"],
    icon: fabGithub,
    iconColor: "#f8f9fa",
    iconBg: "rgba(24, 24, 35, 0.7)",
    links: [
      {
        url: "https://github.com/topics/engineering-projects",
        label: "Explore GitHub Projects",
        icon: fabGithub,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 7,
    type: "GitHub",
    title: "Full Stack Development Resources",
    description:
      "Comprehensive GitHub repositories covering frontend, backend, databases, authentication, and deployment. Ideal for mastering full stack development.",
    tags: ["#FullStack", "#GitHub", "#Resources"],
    icon: fabGithub,
    iconColor: "#f8f9fa",
    iconBg: "rgba(24, 24, 35, 0.7)",
    links: [
      {
        url: "https://github.com/iamismile/web-dev-resources?tab=readme-ov-file#-html-and-css",
        label: "Explore Repository",
        icon: fabGithub,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 8,
    type: "GitHub",
    title: "Best Youtube Resources",
    description:
      "Top YouTube channels and playlists for coding, CS, and dev—curated in a GitHub repo.",
    tags: ["#YouTube", "#Learning", "#GitHub"],
    icon: fabGithub,
    iconColor: "#f8f9fa",
    iconBg: "rgba(24, 24, 35, 0.7)",
    links: [
      {
        url: "https://github.com/Rohith2201/Coding-Resources/blob/main/youtube.md",
        label: "Explore GitHub List",
        icon: fabGithub,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 9,
    type: "Web",
    title: "Data Science Resources",
    description:
      "Handpicked tutorials, datasets, ML guides, and notebooks to kickstart your data science journey.",
    tags: ["#MachineLearning", "#DataScience", "#AI"],
    icon: faGlobe,
    iconColor: "#4cc9f0",
    iconBg: "rgba(76, 201, 240, 0.1)",
    links: [
      {
        url: "https://github.com/ossu/data-science",
        label: "Open Source Data Science Path",
        icon: faGlobe,
      },
      {
        url: "https://www.kaggle.com/learn",
        label: "Kaggle Learning Tracks",
        icon: faGlobe,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 10,
    type: "Google Drive",
    title: "Aptitude Material Drive",
    description: "A comprehensive Material With Important Topics in Aptitude",
    tags: ["#Aptitude", "#Placement", "#Reasoning"],
    icon: faGoogleDrive,
    iconColor: "#00fb69",
    iconBg: "rgba(0, 251, 105, 0.1)",
    links: [
      {
        url: "https://drive.google.com/drive/folders/1Ks8MWfWahrVwOQ4qFRQiSdS32TcbBXGR",
        label: "Access Drive Folder",
        icon: faGoogleDrive,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 11,
    type: "Web",
    title: "AI Tools Collection",
    description:
      "Explore top AI tools for productivity, coding, content creation, design, and more—all in one place.",
    tags: ["#AI", "#Productivity", "#Tools"],
    icon: faGlobe,
    iconColor: "#4cc9f0",
    iconBg: "rgba(76, 201, 240, 0.1)",
    links: [
      {
        url: "https://www.toolify.ai/",
        label: "Visit Collection",
        icon: faGlobe,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 12,
    type: "Web",
    title: "Algorithm Visualizer Tools",
    description:
      "Interactive platforms to visualize and understand data structures and algorithms in real-time.",
    tags: ["#DSA", "#Algorithms", "#Visualizer"],
    icon: faGlobe,
    iconColor: "#4cc9f0",
    iconBg: "rgba(76, 201, 240, 0.1)",
    links: [
      {
        url: "https://visualgo.net/en",
        label: "VisuAlgo",
        icon: faGlobe,
      },
      {
        url: "https://algorithm-visualizer.org",
        label: "Algorithm Visualizer",
        icon: faGlobe,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
  {
    id: 13,
    type: "Google Drive",
    title: "Notes by Apna College",
    description:
      "Comprehensive notes and study materials from Apna College covering various engineering subjects and programming concepts.",
    tags: ["#Notes", "#ApnaCollege", "#AllBranches"],
    icon: faGoogleDrive,
    iconColor: "#00fb69",
    iconBg: "rgba(0, 251, 105, 0.1)",
    links: [
      {
        url: "https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl",
        label: "Access Apna College Notes",
        icon: faGoogleDrive,
      },
    ],
    contributors: [
      { name: "@Piyush", profileUrl: "/profile/Piyush23" },
      { name: "@Name", profileUrl: "/profile/Name" },
      { name: "@Name", profileUrl: "/profile/Name" },
    ],
  },
];

// Search bar and filter logic

// Helper: Assign grid span pattern for brick wall style
const gridSpans = [
  { col: 2, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
];

// Modal for multiple resource links
const ResourceModal = ({ open, onClose, title, links }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-full max-w-md rounded-xl border border-white bg-gradient-to-b from-[#162e1a] to-[#092413] p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-xl font-bold text-[#00fb69] hover:text-white"
        >
          &times;
        </button>
        <h3 className="mb-4 text-center text-xl font-bold text-white">
          {title}
        </h3>
        <div className="flex flex-col gap-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#00fb69] bg-[#162e1a] px-4 py-3 text-center font-medium text-[#00fb69] transition-colors hover:bg-[#0a291e] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ResourceCardComponent = ({ resource, gridSpan }) => {
  const width = useWindowWidth();
  const span = width <= 700 ? { col: 1, row: 1 } : gridSpan;
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (e) => {
    // Prevent link clicks inside card from triggering card click
    if (e.target.tagName === "A") return;
    if (Array.isArray(resource.links) && resource.links.length === 1) {
      window.open(resource.links[0].url, "_blank");
    } else if (Array.isArray(resource.links) && resource.links.length > 1) {
      setModalOpen(true);
    }
  };

  return (
    <>
      <ResourceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={resource.title}
        links={resource.links || []}
      />
      <ResourceCard
        style={{
          gridColumn: `span ${span?.col || 1}`,
          gridRow: `span ${span?.row || 1}`,
        }}
        onClick={handleCardClick}
      >
        <CardHeader>
          <IconContainer color={resource.iconBg} iconColor={resource.iconColor}>
            <FontAwesomeIcon icon={resource.icon} />
          </IconContainer>
          <ResourceType>{resource.type}</ResourceType>
        </CardHeader>
        <CardBody>
          <ResourceTitle>{resource.title}</ResourceTitle>
          <ResourceDescription>{resource.description}</ResourceDescription>
        </CardBody>
        {Array.isArray(resource.contributors) &&
          resource.contributors.length > 0 && (
            <div
              style={{
                background: "inherit",
                color: "#00fb69",
                padding: "0.4rem 0.8rem",
                borderRadius: "0.5rem",
                margin: "0 1rem 0.5rem 1rem",
                fontSize: "0.95em",
                fontWeight: 500,
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "0.7em",
                flexWrap: "wrap",
              }}
            >
              <span style={{ marginRight: "0.5em" }}>Contributed by:</span>
              {resource.contributors.map((contrib, idx) =>
                contrib.profileUrl ? (
                  <a
                    key={contrib.name + idx}
                    href={contrib.profileUrl}
                    style={{
                      color: "#c5e3bf",
                      fontWeight: 700,
                      textDecoration: "none",
                      marginRight: "0.5em",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {contrib.name}
                  </a>
                ) : (
                  <span
                    key={contrib.name + idx}
                    style={{ fontWeight: 700, marginRight: "0.5em" }}
                  >
                    {contrib.name}
                  </span>
                ),
              )}
            </div>
          )}
        <CardFooter>
          {resource.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </CardFooter>
      </ResourceCard>
    </>
  );
};

const ResourcesHub = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Filter resources by title or tags
  const filteredResources = resourceData.filter((resource) => {
    const searchLower = search.toLowerCase();
    return (
      resource.title.toLowerCase().includes(searchLower) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="background-wrapper min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <Navbar onOpenModal={handleOpenModal} />
      <Hero />
      <Tags />
      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-4 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c5e3bf]">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                placeholder="Search  resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-transparent bg-[#162e1a] py-3 pl-10 pr-4 text-white placeholder:text-[#c5e3bf] focus:border-[#c5e3bf] focus:outline-none"
              />
            </div>
          </div>
          <ResourceGrid>
            {filteredResources.map((resource, idx) => (
              <ResourceCardComponent
                key={resource.id}
                resource={resource}
                gridSpan={gridSpans[idx % gridSpans.length]}
              />
            ))}
          </ResourceGrid>
        </div>
      </div>
      <Footer />
      {/* Modal for Add Resource */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-[#092413] p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#cffab6]">
                Contribute a Valuable Resource!
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-[#cffab6] hover:text-white"
              >
                X
              </button>
            </div>
            <iframe
              src="https://tally.so/r/w40JQO"
              width="100%"
              height="500px"
              frameBorder="0"
              title="Tally Form"
              className="rounded-lg"
            ></iframe>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleCloseModal}
                className="rounded-lg bg-[#00fb69] px-4 py-2 text-black transition-colors hover:bg-[#4c6d4a]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesHub;
