import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faBook,
  faFileAlt,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[rgba(20,47,33,0.1)] bg-[#0d3528] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/Notes">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-[#092413]">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline">Back</span>
          </button>
        </a>

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
    background-color: rgba(15, 27, 53, 0);
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
                  Notes Hub
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
                    filter: "drop-shadow(rgb(0, 251, 105) 0px 0px 2px)",
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
                    filter: "drop-shadow(rgb(0, 251, 105) 0px 0px 2px)",
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
                    filter: "drop-shadow(rgb(0, 251, 105) 0px 0px 2px)",
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
                    filter: "drop-shadow(rgb(0, 251, 105) 0px 0px 2px)",
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
                    filter: "drop-shadow(rgb(0, 251, 105) 0px 0px 2px)",
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
                    filter: "drop-shadow(rgb(0, 251, 105) 0px 0px 2px)",
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
                    filter: "drop-shadow(rgb(0, 251, 105) 0px 0px 2px)",
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
                    filter: "drop-shadow(rgb(0, 251, 105) 0px 0px 2px)",
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
                    filter: "drop-shadow(rgb(0, 251, 105) 0px 0px 2px)",
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
                    filter: "drop-shadow(rgb(0, 251, 105) 0px 0px 2px)",
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
    "Physics",
    "IPC",
    "RAC",
    "Biology",
    "Algorithms",
    "Electronics",
    "CSEP",
    "Thermodynamics",
    "IOC",
    "Fluid Mechanism",
    "OOPs",
    "LACA",
    "CET",
    "FFO",
    "SFMMO",
    "DBMS",
    "COA",
    "Statistical",
    "CPT",
    "CRE",
    "HTO",
    "MTO",
    "PRE",
    "Operating System",
    "DAA",
    "Data Mining",
    "Linear Optimization",
    "Mobile Computing",
    "Computer Networks",
    "Theory of Computation",
    "Compiler Design",
    "Digital Electronics",
    "Microprocessors",
    "Handwritten Notes",
    "Lecture Slides",
    "Previous Year Papers",
    "Lab Manuals",
  ];

  return (
    <section id="tags" className="mb-0 w-full pt-12 sm:py-16">
      <h1 className="text-md mb-8 text-center font-bold text-[#00fb69] lg:text-2xl">
        Explore Academic Resources by Branch
      </h1>

      {/* Right to Left Scrolling */}
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

      <div className="my-4"></div>

      {/* Left to Right Scrolling */}
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

// Modal component styled like a card
const Modal = ({ open, onClose, title, links }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-full max-w-md rounded-xl border border-white bg-gradient-to-b from-[#0d3528] to-[#092413] p-6 shadow-xl">
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
              className="rounded-lg border border-[#00fb69] bg-[#0d3528] px-4 py-3 text-center font-medium text-[#00fb69] transition-colors hover:bg-[#0a291e] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Update BranchCard to support modal for Handwritten Notes
const BranchCard = ({
  branch,
  image,
  contributors,
  handwrittenLinks,
  link2,
  link3,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleHandwrittenClick = (e) => {
    if (handwrittenLinks.length === 1) {
      // Direct to the only link
      window.open(handwrittenLinks[0].url, "_blank");
    } else {
      // Open modal
      setModalOpen(true);
    }
  };

  const shareContent = () => {
    if (navigator.share) {
      navigator.share({
        title: `${branch} Notes`,
        text: `Check out these academic resources for ${branch}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="branch-card overflow-hidden rounded-xl border border-white bg-gradient-to-b from-[#0d3528] to-[#092413] shadow-xl transition duration-300 hover:border-[#00fb69]">
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Handwritten Notes"
        links={handwrittenLinks}
      />
      <div className="p-6">
        <h3 className="mb-4 text-xl font-bold text-white">{branch}</h3>
        <div className="branch-image mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={`${branch} representation`}
            className="h-52 w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="contributors mb-4">
          <p className="mb-2 text-sm font-medium text-[#00fb69]">
            Contributed By:
          </p>
          <div className="flex flex-wrap gap-2">
            {contributors.map((contributor, index) => (
              <a
                key={index}
                href={contributor.profileUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-full bg-[#092413] px-3 py-1 text-xs text-[#c8e6d5] transition-colors hover:bg-[#0a291e] hover:text-[#00fb69]"
              >
                {contributor.name}
              </a>
            ))}
          </div>
        </div>
        <div className="mb-6 flex gap-3">
          <button
            onClick={shareContent}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#00fb69] bg-[#0d3528] py-2 text-[#00fb69] transition-colors hover:bg-[#0a291e]"
          >
            <FontAwesomeIcon icon={faShareAlt} />
            <span>Share</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#00fb69] bg-[#0d3528] py-2 text-[#00fb69] transition-colors hover:bg-[#0a291e]">
            <FontAwesomeIcon icon={faDownload} />
            <span>Extra Materials</span>
          </button>
        </div>
      </div>
      <div className="resource-buttons grid grid-cols-3 gap-0 border-t border-[rgba(20,47,33,0.3)]">
        {/* Handwritten Notes button triggers modal if multiple links */}
        <button
          className="flex flex-col items-center justify-center gap-1 border-r border-[rgba(20,47,33,0.3)] bg-[#092413] p-4 text-[#c8e6d5] transition-colors hover:bg-[#0a291e]"
          onClick={handleHandwrittenClick}
        >
          <FontAwesomeIcon
            icon={faFileAlt}
            className="text-xl text-[#00fb69]"
          />
          <span>Handwritten Notes</span>
        </button>
        {/* PYQs direct link */}
        <a
          className="flex flex-col items-center justify-center gap-1 border-r border-[rgba(20,47,33,0.3)] bg-[#092413] p-4 text-[#c8e6d5] transition-colors hover:bg-[#0a291e]"
          href={link2}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBook} className="text-xl text-[#00fb69]" />
          <span>PYQs</span>
        </a>
        {/* E-Books direct link */}
        <a
          className="flex flex-col items-center justify-center gap-1 bg-[#092413] p-4 text-[#c8e6d5] transition-colors hover:bg-[#0a291e]"
          href={link3}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBook} className="text-xl text-[#00fb69]" />
          <span>E-Books</span>
        </a>
      </div>
    </div>
  );
};

const SemesterFilter = () => {
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="semester-filter px-4 py-6">
      <div className="mx-auto max-w-6xl">
        <h4 className="mb-4 text-center text-lg font-bold text-[#00fb69]">
          Filter by Semester
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          {semesters.map((semester) => (
            <button
              key={semester}
              className="rounded-lg border border-[#00fb69] bg-[#0d3528] px-4 py-2 text-white transition-colors hover:bg-[#00fb69] hover:text-[#092413]"
            >
              <a href={`Sem${semester}`}>SEM-{semester}</a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Notes = () => {
  const location = useLocation();
  const branchList = [
    {
      branch: "Computer Science Engineering",
      image: "/assets/branches/CSE2.webp",
      contributors: [
        { name: "@Md Ashhar", profileUrl: "/profile/Ashhar21" },
        // { name: "@Vivek", profileUrl: "/profile/VivekThakur23" },
      ],
      handwrittenLinks: [
        {
          label: "Handwritten Notes (2021)",
          url: "https://drive.google.com/drive/folders/1zCB6TSCy3UqphO6_at9Q3YXaH14LDJfL",
        },
        // {
        //   label: "Handwritten Notes (2021)",
        //   url: "https://drive.google.com/drive/folders/1qoySTI02_RIlAVad1hTDJzFam04cPP32",
        // },
      ],
      link2: "#",
      link3: "#",
    },
    {
      branch: "Chemical Engineering",
      image: "/assets/branches/chem.webp",
      contributors: [
        { name: "@Arik", profileUrl: "/profile/Arik22" },
        { name: "@Aditya", profileUrl: "/profile/Aditya22" },
        { name: "@Harshit", profileUrl: "/profile/Harshit23" },
        { name: "@Om", profileUrl: "/profile/Omkar23" },
      ],
      handwrittenLinks: [
        {
          label: "Handwritten Notes ChE",
          url: "https://drive.google.com/drive/folders/1hNwEiPoiVaHlpt_ip97voAMXqsUzai_z",
        },
        {
          label: "Handwritten Notes RE",
          url: "https://drive.google.com/drive/folders/1uOUKEXnhdc9ZaL5uEOm5_n7PyjIJCmgH",
        },
      ],
      link2: "#",
      link3: "#",
    },
    {
      branch: "Petroleum Engineering",
      image: "/assets/branches/petro2.jpeg",
      contributors: [
        { name: "@Name", profileUrl: "/profile/Name23" },
        { name: "@Name", profileUrl: "/profile/Name23" },
        { name: "@Name", profileUrl: "/profile/Name23" },
        { name: "@Name", profileUrl: "/profile/Name23" },
      ],
      handwrittenLinks: [
        {
          label: "Handwritten Notes (2021)",
          url: "#",
        },
      ],
      link2: "#",
      link3: "#",
    },
    {
      branch: "Mathematics and Computing",
      image: "/assets/branches/mnc2.webp",
      contributors: [
        { name: "@Md Ashhar", profileUrl: "/profile/Ashhar21" },
        { name: "@Vivek", profileUrl: "/profile/VivekThakur23" },
      ],
      handwrittenLinks: [
        {
          label: "Handwritten Notes (2021)",
          url: "https://drive.google.com/drive/folders/1zCB6TSCy3UqphO6_at9Q3YXaH14LDJfL",
        },
        {
          label: "Handwritten Notes (2021)",
          url: "https://drive.google.com/drive/folders/1qoySTI02_RIlAVad1hTDJzFam04cPP32",
        },
      ],
      link2: "#",
      link3: "#",
    },
    {
      branch: "Electrical and Electronics Engineering",
      image: "/assets/branches/EEE.webp",
      contributors: [
        { name: "@Name", profileUrl: "/profile/Name23" },
        { name: "@Name", profileUrl: "/profile/Name23" },
        { name: "@Name", profileUrl: "/profile/Name23" },
        { name: "@Name", profileUrl: "/profile/Name23" },
      ],
      handwrittenLinks: [
        {
          label: "Handwritten Notes (2021)",
          url: "#",
        },
      ],
      link2: "#",
      link3: "#",
    },
    {
      branch: "Mechanical Engineering",
      image: "/assets/branches/mech2.webp",
      contributors: [
        { name: "@Name", profileUrl: "/profile/Name23" },
        { name: "@Name", profileUrl: "/profile/Name23" },
        { name: "@Name", profileUrl: "/profile/Name23" },
        { name: "@Name", profileUrl: "/profile/Name23" },
      ],
      handwrittenLinks: [
        {
          label: "Handwritten Notes (2021)",
          url: "#",
        },
      ],
      link2: "#",
      link3: "#",
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="background-wrapper min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Tags />
      <div className="my-4"></div>
      <div className="max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branchList.map((branch, index) => (
            <BranchCard
              key={index}
              branch={branch.branch}
              image={branch.image}
              contributors={branch.contributors}
              handwrittenLinks={branch.handwrittenLinks}
              link2={branch.link2}
              link3={branch.link3}
            />
          ))}
        </div>
      </div>
      <SemesterFilter />
      <div className="my-8"></div>
      <Footer />
    </div>
  );
};

export default Notes;
