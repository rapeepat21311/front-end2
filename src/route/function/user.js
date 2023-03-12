import axios from "axios";



export const listUser = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/users", {
    headers: {
      authtoken,
    },
  });
};

export const updateUser = async (authtoken, id, values) => {
  return await axios.put(
    process.env.REACT_APP_API + "/edituser/" + id,
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const readUser = async (authtoken, id) => {
  return await axios.get(process.env.REACT_APP_API + "/user/" + id, {
    headers: {
      authtoken,
    },
  });
};

export const createUser = async (authtoken, values) => {
  return await axios.post(process.env.REACT_APP_API + "/create_user", values, {
    headers: {
      authtoken,
    },
  });
};

export const deleteUser = async (authtoken, id) => {
  return await axios.delete(process.env.REACT_APP_API + "/remove_user/" + id, {
    headers: {
      authtoken,
    },
  });
};

// export const updateUser = async (authtoken, id, values) => {
//   return await axios.put(
//     process.env.REACT_APP_API + "/edit_user/" + id,
//     values,
//     {
//       headers: {
//         authtoken,
//       },
//     }
//   );
// };
