import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer/Footer";
import LOGO from "./WordMark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Profile from "../components/Profile/Profile";
import ProfileSkeleton from "../components/ProfileSkeleton/ProfileSkeleton";
import filenames from "../ProfilesList.json";
import { ArrowLeft, Search, BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[rgba(20,47,33,0.1)] bg-transparent text-white shadow-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 transition-colors hover:bg-[#0a291e]">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline">Back</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero-section flex flex-col items-center justify-center bg-secondaryColor bg-transparent pb-5 text-white">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <img
          src={LOGO}
          alt="RGVerse"
          className="my-4 h-auto w-full max-w-[600px] text-5xl font-bold"
        />
        <h1 className="custom-font my-4 text-2xl tracking-widest text-gray-300 md:text-xl">
          One Central Hub for RGIPT Students to Discover Resources,
          <br /> Connect with Seniors, and Grow Together.
        </h1>
      </div>
      <p className="text-md bg-[rgba(255, 255, 255, 0.14)] group relative mx-auto mb-6 w-fit overflow-hidden rounded-full border border-gray-300 p-2 text-center">
        <a
          href="https://github.com/Piyush-t24/rgverse"
          target="_blank"
          rel="noreferrer"
          className="custom-font relative z-10 flex items-center gap-2 text-white transition-all duration-300 hover:text-textSecondary"
        >
          <FontAwesomeIcon icon={faGithub} />
          Star on GitHub
        </a>
      </p>
      <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');

            .custom-font {
              font-family: 'Merriweather Sans', sans-serif;
            }
            
            .group {
              transition: all 0.3s ease;
              box-shadow: 0 0 10px rgba(0, 251, 105, 0.3);
            }
            
            .group:hover {
              box-shadow: 0 0 20px rgba(0, 251, 105, 0.6);
              transform: scale(1.05);
            }
          `}
      </style>
    </section>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  padding: 1px;
  background: radial-gradient(circle 80px at 80% -10%, #ffffff, #092413);
  position: relative;
  transition:
    background 0.3s,
    transform 0.3s;
  animation: zoom 3s ease-in-out infinite;
  margin-top: 16px;

  &:hover {
    transform: scale(0.98);
    animation-play-state: paused;
  }

  .inner {
    padding: 10px 20px;
    border-radius: 12px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #092413);
    transition: background 0.3s;
  }

  &:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0a1e12);
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

const FeatureCard = ({ title, description, image, link }) => {
  return (
    <div className="feature-card group relative h-full rounded-lg border border-gray-700 bg-white p-4 p-6 shadow shadow-lg transition duration-300 hover:scale-[1.02] dark:bg-textPrimary">
      <div className="mb-4 h-40 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-textSecondary">
            {title}
          </h3>
          <p className="text-gray-400">{description}</p>
        </div>
        <StyledButton onClick={() => (window.location.href = link)}>
          <div className="inner">Explore more</div>
        </StyledButton>
      </div>
    </div>
  );
};

const TechFeatures = () => {
  const features = [
    {
      title: "Notes",
      description:
        "Handwritten Notes, PYQs, Must watch yt playlist, E-books, and many more",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Ok7D1Mqvv3kf8HFyj19Yu_wN06JVjk4rSDyRSryZbVsIzQsSIQ&s=10&ec=72940544",
      link: "/Notes",
    },
    {
      title: "Resume Builder",
      description:
        "Create an impactful and ATS-friendly resume with tips, templates, and real examples.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqO8dPAdjkGX3wA58ty45DNpxz1sQ-fRN_UQ&s",
      link: "https://rgverse-resume-builder.vercel.app/",
    },
    {
      title: "Resources",
      description:
        "Access a wide range of learning resources, tools, and libraries to boost your skills.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2070&q=80",
      link: "/ResourcesHub",
    },
    {
      title: "Project Showcase",
      description:
        "Showcase your projects, get feedback, and inspire others to collaborate.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHTVp3QcnqNb0TIdBGAr9Vq0d7ztWRdCDSy0Z7E5gdINoqzP8Bw&s=10&ec=72940544",
      link: "/ProjectShowcase",
    },
    {
      title: "Opportunities",
      description:
        "Explore various career and learning opportunities in the tech industry.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ijqoWoPj5GXXP1WNAyp5C12DzyDGd0t_7zRkH9CBRA&s&ec=72940544",
      link: "/OpportunitiesHub",
    },
    {
      title: "Roadmaps",
      description:
        "Explore the best roadmaps provided by your seniors to become pro in each field",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp6B8_-JqwvXk9wQv__lxKTB8xIJqI4aveQ5KricXT9wgnY1mpQ&s=10&ec=72940544",
      link: "/Roadmaps",
    },
    {
      title: "OpenSource Programs",
      description:
        "Explore $ PArticipate in various Global OpenSource Programs.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmHkbgMwherDEFpY0Ygp5ydUKx1cS1r-GzPhZ91mLkP2arLgXAw&s=10&ec=72940544",
      link: "/OpenSourceProgram",
    },
    {
      title: "Discussion",
      description:
        "Join topic-wise channels to discuss projects, internships, courses, and more with fellow RGIPTians.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJspDoThOWNTMehvRMbOvmhjOaFVi5v8IIb5ph18iENvxMGZRAg&s=10&ec=72940544",
      link: "https://discussion-kd0q.onrender.com/",
    },
    // {
    //   title: "Ai/ Developer Tools",
    //   description:
    //     "Explore powerful AI tools, dev utilities, and resources to boost your productivity and build smarter, faster.",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYIHISJnOSNPhu8FId8YQfHbNm7rPcolEK1oiMBUCljGXcDm0TQ&s=10&ec=72940544",
    //   link: "aitools",
    // },
  ];

  return (
    <section className="tech-features-section bg-transparent py-16 pt-0 text-white">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="custom-font mb-6 text-4xl font-bold text-textSecondary">
          Dive into RGVerse
        </h2>
        <p className="text-lg text-gray-400">
          Everything an RGIPTian needs, all in one place.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AuthorSection = () => {
  const [loading, setLoading] = useState(true);
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const response = await fetch("/data/Piyush23.json");
        const data = await response.json();
        setAuthorData(data);
      } catch (error) {
        console.error("Error fetching author data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorData();
  }, []);

  return (
    <section className="author-section bg-transparent py-16 text-white">
      <div className="container mx-auto px-2 xs:px-4">
        <h2 className="custom-font mb-6 text-center text-2xl font-bold text-textSecondary xs:text-3xl">
          Meet the Creator
        </h2>
        <div className="mx-auto w-full max-w-[95vw] px-1 xs:max-w-[500px] xs:px-2 sm:max-w-[700px] sm:px-4 md:max-w-[900px] lg:max-w-[1100px] lg:px-8">
          <div className="rounded-xl bg-[#072b16] p-2 shadow-md xs:p-4 sm:p-6">
            {loading ? (
              <ProfileSkeleton />
            ) : (
              authorData && <Profile data={authorData} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <TechFeatures />
      <AuthorSection />
      <Footer />
    </div>
  );
};

export default Home;
