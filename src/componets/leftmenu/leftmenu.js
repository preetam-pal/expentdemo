import React from "react";
import '../leftmenu/leftmenu.css';
import Formicon from '../../images/forms.svg'
import Questionnaire from '../../images/questionnaire.svg'
import Workflow from '../../images/workflow.svg'
import Summary from '../../images/summary.svg'
import Approved from '../../images/approved.svg'
import Options from '../../images/options.svg'

function Leftmenu() {
  return (
    <div className="flow-menu">
        <ul>
            <li><a href="#"><span className="icon"><img src={Formicon} /></span> Form</a></li>
            <li><a href="#"><span className="icon"><img src={Questionnaire} /></span> Questionnaire</a></li>
            <li><a href="#"><span className="icon"><img src={Workflow} /></span> Workflow</a></li>
            <li><a href="#"><span className="icon"><img src={Summary} /></span> Summary</a></li>
            <li><a href="#"><span className="icon"><img src={Approved} /></span> Approval</a></li>
            <li><a href="#"><span className="icon"><img src={Options} /></span> More</a></li>
        </ul>
    </div>
  );
}
export default Leftmenu;