import axios from "axios";

export const listTeachers = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/getTeachers", {
    headers: {
      authtoken,
    },
  });
};
export const getTeacher = async (authtoken, id) => {
  return await axios.get(process.env.REACT_APP_API + "/getTeacher/" + id, {
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
    process.env.REACT_APP_API + "/editTeacher/" + id,
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const deleteTeacher = async (authtoken, id, values) => {
  return await axios.delete(
    process.env.REACT_APP_API + "/deleteTeacher/" + id,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const avisorList = async (authtoken) => {
  return await axios.get(`${process.env.REACT_APP_API}/list_teacher_re_users`, {
    headers: {
      authtoken,
    },
  });
};

export const avisorId = async (authtoken, id) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/list_teacher_re_user/${id}`,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const avisorCreate = async (authtoken, values) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/create_teacher_re_users`,
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const avisorEdit = async (authtoken, id, values) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/edit_teacher_re_users/${id}`,
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const avisorRemove = async (authtoken, id, values) => {
  console.log(values);
  return await axios.put(
    `${process.env.REACT_APP_API}/remove_users/${id}`,
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const avisorDelete = async (authtoken, id) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/delete_avisor/${id}`,

    {
      headers: {
        authtoken,
      },
    }
  );
};
