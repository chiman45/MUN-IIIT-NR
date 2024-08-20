import React from "react";
import "./TeamMain.css";
import TeamMember from "../TeamMemberCard/TeamMember";
import TeamData from '../../../../data/TeamData';
import TeamHome from "../TeamHome/TeamHome";

export default function TeamMain() {
    const [selectedYear, setSelectedYear] = React.useState(2024)
    const date=new Date();
    const n = date.getFullYear();
    // Get data for the selected year
    const yearData = TeamData[selectedYear];
    function nextYear(){
        if(selectedYear !== n){
            setSelectedYear(selectedYear+1)
        }
    }

    function previousYear(){
        if(selectedYear!==2023){
            setSelectedYear(selectedYear-1)
        }
    }

    return (
        <div>
            <TeamHome year={selectedYear} previousYear={previousYear} nextYear={nextYear} />
<div className="team-main">
            <div className="category">
                <div className="team-heading">GENERALS</div>
                <div className="team">
                    {/* Check if yearData exists and if Generals category is present */}
                    {yearData && yearData.Generals && yearData.Generals.map((member, index) => (
                        <TeamMember key={index} name={member.name} post={member.post} image={member.img}/>
                    ))}
                </div>
            </div>
            {/* Add sections for other categories if needed */}
            {/*Core Team*/}
            <div className="category">
                <div className="team-heading">CORE TEAM</div>
                <div className="team">
                    {/* Check if yearData exists and if Generals category is present */}
                    {yearData && yearData.core && yearData.core.map((member, index) => (
                        <TeamMember key={index} name={member.name} post={member.post} image={member.img}/>
                    ))}
                </div>
            </div>
           {/*Senior Team*/}
            <div className="category">
                <div className="team-heading">SENIOR TEAM</div>
                <div className="team">
                    {/* Check if yearData exists and if Generals category is present */}
                    {yearData && yearData.senior_team && yearData.senior_team.map((member, index) => (
                        <TeamMember key={index} name={member.name} post={member.post} image={member.img}/>
                    ))}
                </div>
            </div>
        </div>
        </div>
    
    );
}
