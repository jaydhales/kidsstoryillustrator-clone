import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [userStories, setUserStories] = useState([]);
  const [storyContent, setStoryContent] = useState();

  // console.log(myAuth)
  const myAuth = JSON.parse(localStorage.getItem("authInfo"));

  const fetchProfile = () => {
    if (myAuth) {
      axios
        .get(`https://api.magicbookwriter.hng.tech/users/${myAuth.id}`)
        .then((res) => {
          setUserData(res.data.data);
        });
    }
  };

  const fetchStories = () => {
    if (myAuth) {
      axios.get(`https://api.magicbookwriter.hng.tech/story`).then((res) => {
        const newData = res.data.data.filter(({ author }) => {
          if (author) {
            if (author._id) {
              return author._id === myAuth.id;
            }
          }
        });

        setUserStories(newData);
      });
    }
  };

  const fetchStory = (id) => {
    axios
      .get(`https://api.magicbookwriter.hng.tech/story/${id}`)
      .then((res) => {
        setStoryContent(res.data.data);
      });
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        userStories,
        fetchStories,
        fetchProfile,
        setStoryContent,
        storyContent,
        fetchStory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
