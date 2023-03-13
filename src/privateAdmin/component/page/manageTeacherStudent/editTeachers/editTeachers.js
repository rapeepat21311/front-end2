import React, { useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import {
  avisorEdit,
  avisorId,
  avisorRemove,
  editTeacher,
} from "../../../../../route/function/teacher";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

function EditTeachersManageStudent() {
  const { id } = useParams();

  const { user } = useSelector((state) => ({ ...state }));
  const naviagete = useNavigate();

  const [mapSearchStudent, setMapSearchStudent] = useState(1);
  const [data, setData] = useState({});
  const [remove, setRemove] = useState(
    { user_id: [] }
    // []
  );
  const [studentLength, setStudentLength] = useState();

  const loadData = (token, id) => {
    avisorId(token, id)
      .then((res) => {
        setData(res.data.data.data_teacher);
        setStudentLength(res.data.data.data_teacher.students.length);
        // console.log(res.data.data.data_teacher);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadData(user.token, id);
  }, [remove]);

  // const length = (data) => {
  //   if (data !== undefined) {
  //     setStudentLength(data.length);
  //   }
  // };

  const removeItem = (id) => {
    const removeId = [...remove.user_id, id];
    setRemove({ ...remove, user_id: removeId });
    console.log(remove, studentLength);
  };

  const onClickEdit = (e) => {
    e?.preventDefault();
    avisorRemove(user.token, id, remove)
      .then((res) => {
        Swal.fire({
          titleText: "Edit Success",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            naviagete("/admin-page/manage-teacher");
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          titleText: err.response.data,
        });
      });
  };

  let ComponentmapSearchStudent = [];

  // for (let i = 0; i <= studentLength; i++) {
  ComponentmapSearchStudent.push(
    data.students?.map((item) => {
      return (
        <div className="box_add_student">
          <div
            className="button_click_remove_item"
            onClick={() => removeItem(item._id)}
          >
            X
          </div>
          <div className="box_add_student_in_teacher_id_student">
            <div className="box_id_student">
              <label>รหัสนักศึกษา</label>
              <input placeholder="Placeholder" defaultValue={item.student_id} />
            </div>
            <div className="box_name_student">
              <label>ชื่อ-นามสกุล</label>
              <input
                placeholder="Placeholder"
                defaultValue={item.user_fullname}
              />
            </div>
          </div>
        </div>
      );
    })
    // }
  );
  // }

  useEffect(() => {
    console.log("mapSearchStudent", mapSearchStudent);
  }, [mapSearchStudent]);

  return (
    <div className="create_profile_student_container">
      <div className="create_profile_student_header">เพิ่มอาจารย์ที่ปรึกษา</div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">ข้อมูลอาจารย์</div>
        <div className="box_create_admin">
          <div className="student_id">
            <label>รหัสอาจารย์</label>
            <input
              type="number"
              // name="student_id"
              // placeholder="Placeholder"
              defaultValue={data.teacher_id}
              // onChange={handleChangeEditUserData}
            />
          </div>
          <div className="student_number_id">
            <label>ชื่อ-นามสกุล</label>
            <input
              type="text"
              // name="id_number"
              // placeholder="Placeholder"
              defaultValue={data.teacher_firstname}
              // onChange={handleChangeEditUserData}
            />
          </div>
        </div>
        <div className="box_create_admin">
          <div className="student_id">
            <label>คณะ</label>
            <input
              type="text"
              // name="student_id"
              // placeholder="Placeholder"
              defaultValue={data.teacher_faculty}
              // onChange={handleChangeEditUserData}
            />
          </div>
          <div className="student_number_id">
            <label>สาขา</label>
            <input
              type="text"
              // name="id_number"
              // placeholder="Placeholder"
              defaultValue={data.teacher_major}
              // onChange={handleChangeEditUserData}
            />
          </div>
        </div>
      </div>
      <div className="create_profile_student">
        <div className="title_create_profile_student">นักศึกษาในการดูแล</div>
        <div className="box_add_student_in_teacher">
          <div className="close_add_student">
            <p onClick={() => setMapSearchStudent(mapSearchStudent - 1)}>
              <CloseIcon />
            </p>
          </div>
          {ComponentmapSearchStudent}
        </div>
      </div>
      <div
        className="report_student"
        onClick={() => setMapSearchStudent(mapSearchStudent + 1)}
      >
        <div className="button_report_student">
          <p>
            <AddIcon />
          </p>
          <h3>เพิ่มการประเมิน</h3>
        </div>
      </div>
      <div className="button_onsubmit_unsubmit_container">
        <div className="button_unsubmit_container">
          <button
            className="button_unsubmit"
            onClick={() => naviagete("/admin-page/manage-teacher")}
          >
            ยกเลิก
          </button>
        </div>
        <div className="button_onsubmit_container">
          <button className="button_onsubmit" onClick={onClickEdit}>
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTeachersManageStudent;
