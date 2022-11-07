import axios from "axios";
// from("dotenv");

export const login = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/login", value);

export const currentUser = async (authtoken) => {
  return await axios.post(
    process.env.REACT_APP_API + "/currentuser",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post(
    process.env.REACT_APP_API + "/admin-page",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
