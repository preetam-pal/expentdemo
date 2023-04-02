import React from "react";
import '../flowchart/chartflow.css';
import Leftmenu from '../leftmenu/leftmenu';
import Sideicon from '../sideicon/sideicon';

function Chartflow() {
  return (
    <div className="chartflow">
        <div className="container">
            <div className="flow-box">
                <Leftmenu />
                <div className="flow-chart">
                    <div className="start-box">Start</div>
                    <div className="arrow-box"></div>
                    <div className="chart-detail-box">
                        <h4>Requirement Selection</h4>
                        <span className="text">Permission, form type and +1</span>
                    </div>
                    <div className="arrow-box large-arrow"></div>
                    <div className="chart-detail-box">
                        <h4 className="two">Questionnaire</h4>
                        <span className="text">Permission, form type and +1</span>
                    </div>
                    <div className="arrow-box large-arrow"></div>
                    <div className="add-con-main">
                        <div className="add-con-box"></div>
                        <div className="arrow-down one"></div>
                        <div className="arrow-down two"></div>
                        <div className="add-condition">Add Condition</div>                        
                    </div>
                    <div className="three-chart-detail">
                        <div className="chart-detail-box">
                            <h4 className="three">Collaborator Feedback_1</h4>
                            <span className="text">Permission, form type and +1</span>
                        </div>
                        <div className="chart-detail-box">
                            <h4 className="three">Collaborator Feedback_2</h4>
                            <span className="text">Permission, form type and +1</span>
                        </div>
                        <div className="chart-detail-box">
                            <h4 className="three">Collaborator Feedback_3</h4>
                            <span className="text">Permission, form type and +1</span>
                        </div>
                    </div>
                </div>
                <Sideicon /> 
            </div>
        </div>   
    </div>      
  );
}
export default Chartflow;