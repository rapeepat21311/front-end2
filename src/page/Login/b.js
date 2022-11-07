// import React, {
//     useCallback,
//     useContext,
//     useEffect,
//     useRef,
//     useState,
//   } from "react";
//   import userContext from "../../context/userContext";
//   import { userData } from "./user";
//   import { useNavigate } from "react-router-dom";

//   const mockSuccessUser = {
//     username: "test11",
//     studentId: "ยังไม่ได้เข้าเรียน",
//     passport: "ยังไม่ได้เข้าเรียน",
//     nameThai: "ยังไม่ได้เข้าเรียน",
//     nameEng: "ยังไม่ได้เข้าเรียน",
//     kana: "ยังไม่ได้เข้าเรียน",
//     saka: "ยังไม่ได้เข้าเรียน",
//     Email: "ยังไม่ได้เข้าเรียน",
//     class: "ยังไม่ได้เข้าเรียน",
//     year: "ยังไม่ได้เข้าเรียน",
//     oldSchool: "ยังไม่ได้เข้าเรียน",
//     status: "ยังไม่ได้เข้าเรียน",
//   };

//   const defaultLoginData = {
//     username: "",
//     password: "",
//   };

//   function Login() {
//     const navigate = useNavigate();

//     const [user, setUser] = useContext(userContext);

//     // const userRef = useRef(null);
//     // const passRef = useRef(null);
//     // const errRef = useRef();

//     const [loginData, setLoginData] = useState(defaultLoginData);
//     const [errMsg, setErrMsg] = useState("");
//     // const [success, setSuccess] = useState(false);

//     // useEffect(() => {
//     //   userRef.current.focus();
//     // }, []);

//     useEffect(() => {
//       if (user.username) {
//         navigate("/grade");
//         console.log(user);
//       }
//     }, [user]);

//     // const chageHandler = useCallback(
//     //   (e) => {
//     //     setUser({ ...user, [e.target.name]: e.target.value });
//     //   },
//     //   [setUser, user]
//     // );

//     const chageHandler = (e) => {
//       const { name, value } = e.target;
//       setLoginData({ ...loginData, [name]: value });
//     };

//     const handleClick = () => {
//       const userCheck = userData.find(
//         (item) =>
//           item.username === user.username && item.password === user.password
//       );
//       if (userCheck !== undefined) {
//         const newUserObjectData = { ...userCheck };
//         setUser(newUserObjectData);
//         navigate("/");
//         // setSuccess(true);
//       } else {
//         setErrMsg("wrong username or password");
//       }
//     };

//     // const checkBlackLogInInput = () => {
//     //   const errMsg = [
//     //     {
//     //       name: "username",
//     //       msg: "username is wrong",
//     //     },
//     //     {
//     //       name: "password",
//     //       msg: "password is wrong",
//     //     },
//     //   ];

//     //   const isNotFiled = errMsg.some((field) => {
//     //     if (field.value.trim() === "") {
//     //       setErrMsg(field.msg);
//     //       field.name === "username"
//     //         ? userRef.current.focus()
//     //         : passRef.current.focus();
//     //     }
//     //     setErrMsg("");
//     //     return false;
//     //   });
//     //   return isNotFiled;
//     // };

//     // เปลี่ยนตรงนี้ถ้าจะเปลี่ยนตัวหลังบ้าน
//     const handleClick = useCallback(
//       (e) => {
//         if (e) {
//           console.log(e);
//           e.prevenDefault();
//         }
//         console.log("loginData--->", loginData);
//         // setUserData ?? API check username password
//         // const userCheck = userData.find(
//         //   (item) =>
//         //     item.username === loginData.username &&
//         //     item.password === loginData.password
//         // );
//         // console.log(userCheck);
//         // if (userCheck !== undefined) {
//         //   setUser(userCheck);
//         // } else {
//         //   // ส่งค่า Error เข้ามา
//         // }
//       },
//       [setUser, loginData.password, loginData.username]
//     );

//     return (
//       <div>
//         <form onSubmit={handleClick}>
//           <label>
//             Username :
//             <input
//               type="text"
//               name="username"
//               value={loginData.username}
//               // ref={userRef}
//               autoComplete="off"
//               placeholder="In put you username"
//               onChange={chageHandler}
//               required
//             />
//           </label>
//           <label>
//             Password :
//             <input
//               type="password"
//               name="password"
//               value={loginData.password}
//               // ref={passRef}
//               autoComplete="off"
//               placeholder="In put you password"
//               onChange={chageHandler}
//             />
//           </label>
//           <button type="submit">Login</button>

//           <p>{errMsg}</p>
//         </form>
//       </div>
//     );
//   }

//   export default Login;

//   // import React, { useState, useRef, useEffect, useContext } from "react";

//   // import { Link } from "react-router-dom";

//   // import "./login.css";
//   // import AuthContext from "../../context/AuthProvider";
//   // import axios from "../../api/axios.js";
//   // const LOGIN_URL = "/auth";

//   // function Login({ setToken }) {
//   //   const { setAuth } = useContext(AuthContext);
//   //   const userRef = useRef();
//   //   const errRef = useRef();

//   //   const [username, setUsername] = useState("");
//   //   const [password, setPassword] = useState("");
//   //   const [errMsg, setErrMsg] = useState("");
//   //   const [success, setSuccess] = useState(false);

//   //   useEffect(() => {
//   //     userRef.current.focus();
//   //   }, []);

//   //   useEffect(() => {
//   //     setErrMsg("");
//   //   }, [username, password]);

//   //   const handleSubmit = async (e) => {
//   //     e.preventDefault();

//   //     try {
//   //       const response = await axios.post(LOGIN_URL);
//   //       JSON.stringify(
//   //         { username, password },
//   //         {
//   //           headers: { "Content-Type": "application/json" },
//   //           withCredentials: true,
//   //         }
//   //       );
//   //       console.log(JSON.stringify(response?.data));
//   //       // console.log(JSON.stringify(response));
//   //       const accessToken = response?.data?.accessToken;
//   //       const roles = response?.data?.roles;

//   //       setAuth({ username, password, roles, accessToken });
//   //       setUsername("");
//   //       setPassword("");
//   //       setSuccess(true);
//   //     } catch (err) {
//   //       if (!err?.response) {
//   //         setErrMsg("No Server Response");
//   //       } else if (err.response?.status === 400) {
//   //         setErrMsg("Missing Username or Password");
//   //       } else if (err.response?.status === 401) {
//   //         setErrMsg("Unauthorized");
//   //       } else if (err.response?.status === 404) {
//   //         setErrMsg("Server Cant connect");
//   //       } else {
//   //         setErrMsg("Login Failed");
//   //       }
//   //       errRef.current.focus();
//   //     }
//   //   };

//   //   return (
//   //     <>
//   //       {success ? (
//   //         <section>
//   //           <h1>Login success !</h1>
//   //           <br />
//   //           <Link to="/">
//   //             <p>Go to home page</p>
//   //           </Link>
//   //         </section>
//   //       ) : (
//   //         <div className="box">
//   //           <div className="form">
//   //             <p
//   //               ref={errRef}
//   //               className={errMsg ? "errmsg" : "offscreen"}
//   //               aria-live="assertive"
//   //             ></p>
//   //             <h2>Sign in</h2>
//   //             <form onSubmit={handleSubmit}>
//   //               <div className="inputBox">
//   //                 <input
//   //                   type="text"
//   //                   id="username"
//   //                   ref={userRef}
//   //                   autoComplete="off"
//   //                   onChange={(e) => setUsername(e.target.value)}
//   //                   value={username}
//   //                   required
//   //                 />
//   //                 <span>Username</span>
//   //                 <i></i>
//   //               </div>
//   //               <div className="inputBox">
//   //                 <input
//   //                   type="password"
//   //                   id="password"
//   //                   onChange={(e) => setPassword(e.target.value)}
//   //                   value={password}
//   //                   required
//   //                 />
//   //                 <span>Password</span>
//   //                 <i></i>
//   //               </div>

//   //               <div className="links">
//   //                 <Link to="#">Forget Password</Link>
//   //               </div>
//   //               <button className="submit" value="login">
//   //                 Sign In
//   //               </button>
//   //             </form>
//   //           </div>
//   //         </div>
//   //       )}
//   //     </>
//   //   );
//   // }

//   // export default Login;
