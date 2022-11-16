import { usermicroservice } from "@services/api";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


export const UserContext = createContext({});

export const UserProvider = (props: any) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await usermicroservice.get("/myuser");
        setUser(user.data);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ setUser, user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
