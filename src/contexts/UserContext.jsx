import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [userStories, setUserStories] = useState([])

  // console.log(myAuth)
  const myAuth = JSON.parse(localStorage.getItem("authInfo"));

  useEffect(() => {
    if (myAuth) {
      axios
        .get(`https://api.magicbookwriter.hng.tech/users/${myAuth.id}`)
        .then((res) => {
          setUserData(res.data.data);
        });
      axios
        .get(`https://api.magicbookwriter.hng.tech/story`)
        .then((res) => {
          const newData = res.data.data.filter(({ author }) => {
            if (author) {
              if (author._id) {
                return author._id === myAuth.id;
              }
            }
          });
          
          setUserStories(newData)
          console.log(newData)

        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        userStories
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
