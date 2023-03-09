import axios from "axios";

export const readAdmins = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/admins", {
    headers: authtoken,
  });
};

export const readAdmin = async (authtoken, ID) => {
  return await axios.get(`${process.env.REACT_APP_API}/admin/${ID}`, {
    headers: authtoken,
  });
};

export const creatAdmin = async (authtoken, values) => {
  return await axios.post(`${process.env.REACT_APP_API}/createAdmin`, values, {
    headers: { authtoken },
  });
};

export const editAdmin = async (authtoken, ID, values) => {
  return await axios.put(`${process.env.REACT_APP_API}/admin/${ID}`, values, {
    headers: authtoken,
  });
};

export const deleteAdmin = async (authtoken, ID) => {
  return await axios.delete(`${process.env.REACT_APP_API}/admin/${ID}`, {
    headers: authtoken,
  });
};
