import React from "react";


function TableGpa({dataList=[]}) {

    return (
      <div className="result-vertical-table" style={{display:"flex",flexDirection:"row",width:"475px"}}>
        
          {dataList.map((val, i) => {
            return (
              <div key={i +''} style={{display:"flex",flexDirection:"column",width:"20%"}}>
                <div className="vertical_table_cell" >{val.label}</div>
                <div className="vertical_table_cell">{val.value}</div>
              </div>
            )
          })}
      </div>
    );
  }
    
  export default TableGpa;