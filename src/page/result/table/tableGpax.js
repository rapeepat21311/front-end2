import React from "react";
import { TableGpaxList } from "../../../tableList";

function TableGpax() {

    return (
      <div className="Table">
        
          {TableGpaxList.map((val, i) => {
            return (
              <div key={i +''} style={{display:"flex",flexDirection:"column",width:"20%"}}>
                <div className="vertical_table_cell" >{val.subject}</div>
                <div className="vertical_table_cell">{val.credit}</div>
              </div>
            )
          })}
      </div>
    );
  }
    
  export default TableGpax;