import React from 'react'
import { useNavigate } from "react-router-dom";


function MenuCard({ name, image, link }) {
  const navigate = useNavigate();
  return (
    <div
      className="card_container"
      onClick={() => {
        navigate(`/${link}`);
      }}
    >
      <h3>{name}</h3>
      
      <img src={image} alt={name} style={{width:"100px",height:"100pxd"}}/>
    </div>
  );
}

export default MenuCard