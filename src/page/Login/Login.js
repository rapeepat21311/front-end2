import React, {
  useState,
  // useEffect,
  // , useCallback
  // useContext,
} from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

// import userContext from "../../context/userContext";
// import { payloadDocUser } from "./user";
import { userReducerConst } from "../../component/reducer/consUserRed";
import { login } from "../../route/function/auth";

const defaultLoginData = {
  username: "",
  password: "",
};
// history render page
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [user, setUser] = useContext(userContext);

  const [loginData, setLoginData] = useState(defaultLoginData);

  // Check Role
  const roleBaseRedirect = (role) => {
    if (role === "admin") {
      navigate("/admin-page");
    } else {
      navigate("/");
    }
  };

<<<<<<< HEAD
  // useEffect(() => {
  //   if (user.username) {
  //     navigate("/grade");
  //     console.log(user);
  //   }
  // }, [user, navigate]);
=======
  useEffect(() => {
    if (user.username) {
      navigate("/");
      // console.log(user);
    }
  }, [user]);
>>>>>>> main

  function handleSubmit(e) {
    e?.preventDefault();
    // console.log(loginData);

    login(loginData)
      .then((res) => {
        JSON.stringify((loginData.username, loginData.password), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        // console.log(JSON.stringify(res?.data));
<<<<<<< HEAD
        alert(`Login Success ${res.data.payload.user.nameTh}`);
=======
        alert(res.data);
>>>>>>> main
        dispatch({
          type: userReducerConst.LOG_IN,
          payload: {
            token: res.data.token,
            _id: res.data.payload.user._id,
            username: res.data.payload.user.username,
            role: res.data.payload.user.role,
            studentId: res.data.payload.user.studentId,
            idNumber: res.data.payload.user.idNumber,
            nameTh: res.data.payload.user.nameTh,
            nameEng: res.data.payload.user.nameEng,
            faculty: res.data.payload.user.faculty,
            major: res.data.payload.user.major,
            email: res.data.payload.user.email,
            phoneNumber: res.data.payload.user.phoneNumber,
            educationLevel: res.data.payload.user.educationLevel,
            year: res.data.payload.user.year,
            oldSchool: res.data.payload.user.oldSchool,
            status: res.data.payload.user.status,
            advisor: res.data.payload.user.advisor,
            aa: res.data.payload.user.aa,
            phone_number_advisor: res.data.payload.user.phone_number_advisor,
            email_advisor: res.data.payload.user.email_advisor,
          },
        });
        // เก็บ Token ไว้ที่ Application จนกว่า Token จะหมดอายุ
        localStorage.setItem("token", res.data.token);
        roleBaseRedirect(res.data.payload.user.role);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
        dispatch({ type: userReducerConst.LOG_OUT });
        // console.log(err);
      });
  }

  function chageHandler(e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input
          id="username"
          type="text"
          name="username"
          value={loginData.username}
          // ref={userRef}
          autoComplete="off"
          placeholder="In put you username"
          onChange={chageHandler}
          required
        />
        <label htmlFor="password">Password :</label>
        <input
          id="password"
          type="password"
          name="password"
          value={loginData.password}
          // ref={passRef}
          autoComplete="off"
          placeholder="In put you password"
          onChange={chageHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
