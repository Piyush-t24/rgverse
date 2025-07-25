import { useState, useEffect, useRef } from "react";
import Profile from "./components/Profile/Profile";
import ProfileSkeleton from "./components/ProfileSkeleton/ProfileSkeleton";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import NoResultFound from "./components/NoResultFound/NoResultFound";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";
import filenames from "./ProfilesList.json";
// import GTranslateLoader from './components/GTranslateLoader';

function App() {
  const profilesRef = useRef();
  const [profiles, setProfiles] = useState([]);
  const [searching, setSearching] = useState(false);
  const [combinedData, setCombinedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledProfiles, setShuffledProfiles] = useState([]);
  const [loadingProfiles, setLoadingProfiles] = useState(false);

  const recordsPerPage = 20;

  const currentUrl = window.location.pathname;
  useEffect(() => {
    const fetchData = async (file) => {
      try {
        const response = await fetch(file);
        if (!response.ok) {
          console.error("Error fetching data:", response.statusText);
          return [];
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    };

    const combineData = async () => {
      setLoadingProfiles(true);
      try {
        const promises = filenames.map((file, index) =>
          fetchData(`/data/${file}`).then((data) => ({
            ...data,
            id: index + 1,
            fileName: file.replace(".json", ""),
          })),
        );
        const combinedData = await Promise.all(promises);
        const flattenedData = combinedData.flat();
        setCombinedData(flattenedData);
        setShuffledProfiles(shuffleProfiles(flattenedData));
      } catch (error) {
        console.error("Error combining data:", error);
        setCombinedData([]);
        setShuffledProfiles([]);
      }
      setLoadingProfiles(false);
    };

    combineData();
  }, []);

  const shuffleProfiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const normalizeString = (str) => {
    if (typeof str !== "string") return "";
    return str
      .toLowerCase()
      .replace(/\s*,\s*/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  };

  const handleSearch = ({ value, criteria }) => {
    const normalizedValue =
      typeof value === "string" ? normalizeString(value) : "";

    if (criteria !== "skill") {
      const filteredResults = combinedData.filter((user) => {
        if (criteria === "name") {
          return normalizeString(user.name).includes(normalizedValue);
        } else if (criteria === "location") {
          return (
            user.location &&
            normalizeString(user.location).includes(normalizedValue)
          );
        } else if (criteria === "branch") {
          return (
            user.branch &&
            normalizeString(user.branch).includes(normalizedValue)
          );
        }
        return false;
      });

      setProfiles(filteredResults);
    } else if (criteria === "skill") {
      if (Array.isArray(value) && value.length > 0) {
        const setOfSearchSkills = new Set(
          value.map((skill) =>
            typeof skill === "string" ? skill.toLowerCase() : "",
          ),
        );
        const filteredUsers = shuffledProfiles.filter(
          (user) =>
            Array.isArray(user.skills) &&
            user.skills.some(
              (skill) =>
                typeof skill === "string" &&
                setOfSearchSkills.has(skill.toLowerCase()),
            ),
        );
        setProfiles(filteredUsers);
      } else {
        setProfiles(shuffledProfiles);
      }
    } else {
      setProfiles([]);
    }

    setSearching(true);
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(
      (searching ? profiles.length : combinedData.length) / recordsPerPage,
    );
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    profilesRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const getPaginatedData = () => {
    const data = searching ? profiles : shuffledProfiles;
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const renderProfiles = () => {
    if (loadingProfiles) {
      return (
        <>
          {Array(5)
            .fill("profile-skeleton")
            .map((item, index) => (
              <ProfileSkeleton key={index} />
            ))}
        </>
      );
    }
    const paginatedData = getPaginatedData();
    return paginatedData.map((currentRecord, index) => (
      <Profile data={currentRecord} key={index} />
    ));
  };

  return currentUrl === "/" ? (
    <div className="App flex flex-col bg-primaryColor dark:bg-secondaryColor md:flex-row">
      <Sidebar />
      <div
        className="w-full pl-5 pr-4 md:h-screen md:w-[77%] md:overflow-y-scroll md:py-7"
        ref={profilesRef}
      >
        <Search onSearch={handleSearch} />
        {profiles.length === 0 && searching ? (
          <NoResultFound />
        ) : (
          renderProfiles()
        )}
        {combinedData.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              (searching ? profiles.length : shuffledProfiles.length) /
                recordsPerPage,
            )}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        )}
      </div>
      {/* <GTranslateLoader /> */}
    </div>
  ) : (
    <ErrorPage />
  );
}

export default App;
