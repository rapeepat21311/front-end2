import React, { useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { listUser } from "../../../../../route/function/user";
import {
  avisorCreate,
  listTeachers,
} from "../../../../../route/function/teacher";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

function AddTeacherManageStudent() {
  const { user } = useSelector((state) => ({ ...state }));

  const navigate = useNavigate();

  const [component, setComponent] = useState(0);
  const [userData, setUserData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [searchDataTeacher, setSearchDataTeacher] = useState("");

  const [data, setData] = useState({
    teacher_id: "",
    user_id: [],
    user_fullname_th: [],
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDataUser(user.token);
    loadDataTeacher(user.token);
  }, [search]);

  let student = [];

  const loadDataUser = (authtoken) => {
    listUser(authtoken)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadDataTeacher = (authtoken) => {
    listTeachers(authtoken)
      .then((res) => {
        setTeacherData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const searchTeacherId = (e) => {
    e?.preventDefault();
    setSearchDataTeacher(e.target.value);
  };
  const searchValue = (e) => {
    e?.preventDefault();
    setSearch(e.target.value);
  };

  const handleEdit = (e) => {
    e?.preventDefault();
    avisorCreate(user.token, data).then((res) => {
      Swal.fire({
        icon: "success",
        titleText: "Create Success",
      })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/admin-page/manage-teacher");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const onClicksetUserId = (_id, fullname) => {
    const newUserId = [...data.user_id, _id];
    const newUserfullname = [...data.user_fullname_th, fullname];
    setData({ ...data, user_id: newUserId, user_fullname_th: newUserfullname });
    console.log("data onClick", data);
  };

  useEffect(() => {
    if (searchDataTeacher.length > 6) {
      const result = teacherData.filter((item) => {
        return item["teacher_id"].toString().includes(searchDataTeacher);
      });
      setData((prev) => ({ ...prev, teacher_id: result[0]?._id.toString() }));
      setTeacher(result);
    } else {
      setTeacher([]);
    }
    // console.log("check --->", teacher);
  }, [search, searchDataTeacher, data.teacher_id]);

  useEffect(() => {
    if (component < 0) {
      setComponent(0);
    }
    // console.log("teacher_id", data);
  }, [component, data.teacher_id]);

  // function filteredDataUser(data, field, searchText) {
  //   data.filter((item) => {
  //     return item[field].toString().includes(searchText);
  //   });
  // }

  let add_component = [];
  for (let i = 0; i <= component; i++) {
    add_component.push(
      <div className="box_add_student_in_teacher">
        <div
          className="close_add_student"
          onClick={() => setComponent(component - 1)}
        >
          <p>
            <CloseIcon />
          </p>
        </div>
        <div className="box_add_student">
          <div className="box_add_student_in_teacher_id_student">
            <div className="box_id_student">
              <label>รหัสนักศึกษา</label>
              <input
                type="text"
                placeholder="Placeholder"
                value={search}
                onChange={searchValue}
              />
              <div
                className={
                  search === ""
                    ? "search_list_data_user"
                    : "search_list_data_user_active"
                }
              >
                {userData
                  .filter((data) => {
                    return search === ""
                      ? null
                      : data["student_id"].toString().indexOf(search) != -1;
                  })
                  .map((item) => {
                    return (
                      <div
                        onClick={() =>
                          onClicksetUserId(item._id, item.user_fullname_th)
                        }
                      >
                        {item.student_id}
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="box_name_student">
              <label>ชื่อ-นามสกุล</label>
              <input placeholder="Placeholder" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">เพิ่มอาจารย์ที่ปรึกษา</div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">ข้อมูลอาจารย์</div>
        <div className="box_create_admin">
          <div className="student_id">
            <label>รหัสอาจารย์</label>
            <input
              type="text"
              placeholder="ค้นหารหัสอาจารย์"
              value={searchDataTeacher}
              onChange={searchTeacherId}
            />
            {teacherData
              .filter((item) => {
                if (searchDataTeacher === "") return "";
                if (searchDataTeacher !== item.teacher_id)
                  return item["teacher_id"]
                    .toString()
                    .includes(searchDataTeacher);
              })
              .map((item) => {
                return <p>{item.teacher_id}</p>;
              })}
          </div>
          <div className="student_number_id">
            <label>ชื่อ-นามสกุล</label>
            <input type="text" defaultValue={teacher[0]?.teacher_name_th} />
          </div>
        </div>
        <div className="box_create_admin">
          <div className="student_id">
            <label>คณะ</label>
            <input type="text" defaultValue={teacher[0]?.teacher_faculty} />
          </div>
          <div className="student_number_id">
            <label>สาขา</label>
            <input type="text" defaultValue={teacher[0]?.teacher_major} />
          </div>
        </div>
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">นักศึกษาในการดูแล</div>
        <div className="select_item_user_fullname_th">
          {data.user_fullname_th.length > 0
            ? data.user_fullname_th.map((item) => {
                return (
                  // <div className="user_fullname_th_container_class">
                  <p>{item} , </p>
                  // </div>
                );
              })
            : null}
        </div>
        {add_component}
      </div>
      <div
        className="report_student"
        onClick={() => {
          setComponent(component + 1);
        }}
      >
        <div className="button_report_student">
          <p>
            <AddIcon />
          </p>
          <h3>เพิ่มการประเมิน</h3>
        </div>
      </div>
      {/* BUTTON */}
      <div className="button_onsubmit_unsubmit_container">
        <div className="button_unsubmit_container">
          <button
            className="button_unsubmit"
            onClick={() => navigate("/admin-page/manage-teacher")}
          >
            ยกเลิก
          </button>
        </div>
        <div className="button_onsubmit_container">
          <button className="button_onsubmit" onClick={() => handleEdit()}>
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTeacherManageStudent;
