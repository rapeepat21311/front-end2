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
import "./login.css";
import { Checkbox } from "@mui/material";
import BannerNBU from "../../image/banner.png";
import PasswordIcon from "../../svgimage/password_icon"
import UserIcon from "../../svgimage/user_icon"

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
      navigate("/dashboard");
    }
  };

  // useEffect(() => {
  //   if (user.username) {
  //     navigate("/grade");
  //     console.log(user);
  //   }
  // }, [user, navigate]);

  function handleSubmit(e) {
    e?.preventDefault();
    console.log(loginData);

    login(loginData)
      .then((res) => {
        JSON.stringify((loginData.username, loginData.password), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log("data ===> ",res.data);
        // console.log(JSON.stringify(res?.data));
        alert(`Login Success ${res.data.payload.user.nameTh}`);
        dispatch({
          type: userReducerConst.LOG_IN,
          payload: {
            token: res.data.token,
          _id: res.data.payload.user._id,
          username: res.data.payload.user.username,
          role: res.data.payload.user.role,
          student_id: res.data.payload.user.student_id,
          id_number: res.data.payload.user.id_number,
          prefix_code : res.data.payload.user.prefix_code,
          prefix_name : res.data.payload.user.prefix_name,
          name_th: res.data.payload.user.user_fullname_th,
          name_eng: res.data.payload.user.user_fullname_eng,
          faculty: res.data.payload.user.faculty,
          major: res.data.payload.user.major,
          year: res.data.payload.user.year,
          model_name : res.data.payload.user.model_name,
          class_year_student : res.data.payload.user.class_year_student,
          student_status : res.data.payload.user.student_status,
          phone_number: res.data.payload.user.phone_number,
          phone_number_home : res.data.payload.user.phone_number_home,
          last_address : res.data.payload.user.last_address,
          last_level_student : res.data.payload.user.last_level_student,
          old_school: res.data.payload.user.old_school,
          last_major : res.data.payload.user.last_major,
          year_end_old_school : res.data.payload.user.year_end_old_school,
          gpx_hight_school : res.data.payload.user.gpx_hight_school,
          student_status: res.data.payload.user.student_status,
          user_status : res.data.payload.user.user_status,
          user_image: res.data.payload.user.user_image,
          email_education : res.data.payload.user.student_email_education,

          // user_fullname_th : findUser.user_fullname_th,
          
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
    <div className="box_body">
      <div className="box_card">
        <div className="box_banner">
          <img src={BannerNBU} />
        </div>

        <div className="box">
          <div className="box_header_login">
            <p>เข้าสู่ระบบ</p>
          </div>
          <div className="box_input">
            <div className="box_icon">
                <UserIcon/>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                id="username"
                type="text"
                name="username"
                value={loginData.username}
                // ref={userRef}
                autoComplete="off"
                placeholder= "ชื่อผู้ใช้งาน"
                onChange={chageHandler}
                required
                />
        
              {/* <label htmlFor="password">Password :</label> */}
              <div className="box_icon_pass">     
                  <PasswordIcon/>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                value={loginData.password}
                // ref={passRef}
                autoComplete="off"
                placeholder="รหัสผ่าน"
                onChange={chageHandler}
                />
              <div className="check_box">
                <Checkbox />
                <p>จดจำรหัสผ่าน</p>
                <div className="box_forget">
                  <p>ลืมรหัสผ่าน?</p>
                </div>
              </div>
              <div className="submit">
                <button type="submit">เข้าสู่ระบบ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
