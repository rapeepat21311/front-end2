import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../component/navbar/Footer/Footer";
import Header from "../../../component/navbar/Header/Header";
import CVimg from "../../../image/Content.png"
import FileDownload from "../../../svgimage/fileDownload"
import "./CurriculumVitae.scss";

function CurriculumVitae() {
  const navigate = useNavigate;

  return (
    <div>
      <Header />
      <div className="curriculumvitae">
        <div className="curriculumvitae_body">
          <div className="curriculumvitae_header">
            <p onClick={() => navigate("/dashboard")}>หน้าหลัก</p> {" > "}
            <p>Curriculum Vitae</p>
          </div>
          <div className="curriculumvitae_title">
            <div className="curriculumvitae_button">
                <div className="curriculumvitae_button_dl">
                <Button>
                    <p>
                        <FileDownload/>
                    </p>
                    <p>Download</p>
                </Button>
                </div>
            </div>
          </div>
          <div className="curriculumvitae_container">
                <img src={CVimg}/>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default CurriculumVitae;
