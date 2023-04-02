import React from "react";
import '../topbar/topbar.css';
import Arrow from '../../images/arrow.svg'

function workflow() {
  return (
      <div className="workflow">
        <div className="container">
            <div className="top-bar">
                <div className="arrow"><img src={Arrow} /></div>
                <div className="heading">
                    <h1>
                        Procurement Workflow
                        <span>Step 2: Workflow Creation</span>
                    </h1>
                </div>
                <div className="button-box">
                    <a href="#" className="btn">Cancel</a>
                    <a href="#" className="btn">Save Draft</a>
                    <a href="#" className="btn active">Finish</a>
                </div>
            </div>
        </div>   
      </div>      
  );
}
export default workflow;