import axios from "axios";

export const listTeachers = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/getTeachers", {
    headers: {
      authtoken,
    },
  });
};
export const getTeacher = async (authtoken, id) => {
  return await axios.get(process.env.REACT_APP_API + "/getTeacher/:id", {
    headers: {
      authtoken,
    },
  });
};
export const createTeacher = async (authtoken, values) => {
  return await axios.post(
    process.env.REACT_APP_API + "/createTeacher",
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const editTeacher = async (authtoken, id, values) => {
  return await axios.put(
    process.env.REACT_APP_API + "/editTeacher/:id",
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const deleteTeacher = async (authtoken, id, values) => {
  return await axios.get(process.env.REACT_APP_API + "/deleteTeacher/:id", {
    headers: {
      authtoken,
    },
  });
};
