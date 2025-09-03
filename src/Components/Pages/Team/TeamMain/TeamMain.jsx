import React from "react";
import "./TeamMain.css";
import TeamMember from "../TeamMemberCard/TeamMember";
import TeamData from '../../../../data/TeamData';
import TeamHome from "../TeamHome/TeamHome";
import Team_MUN_2023 from "../../../../Assets/Team/Team_Mun_2023.png"

export default function TeamMain() {
    const [selectedYear, setSelectedYear] = React.useState(2025);
    const currentYear = new Date().getFullYear();
    
    // Get data for the selected year
    const yearData = TeamData[selectedYear];
    
    function nextYear() {
        if (selectedYear < currentYear) {
            setSelectedYear(selectedYear + 1);
        }
    }

    function previousYear() {
        if (selectedYear > 2023) {
            setSelectedYear(selectedYear - 1);
        }
    }

    return (
        <div>
            <TeamHome year={selectedYear} previousYear={previousYear} nextYear={nextYear} />
            <div className="team-main">
                {/* LEADS Section */}
                {yearData && yearData.Generals && yearData.Generals.length > 0 && (
                    <div className="category">
                        <div className="team-heading">LEADS</div>
                        <div className="team" style={{ flexDirection: "column" }}>
                            {yearData.Generals.map((member, index) => (
                                <TeamMember
                                    key={index}
                                    name={member.name}
                                    post={member.post}
                                    image={member.img}
                                    linkedin={member.linkedin}
                                    insta={member.insta}
                                />
                            ))}
                        </div>
                    </div>
                )}
                
                {/* CORE TEAM Section */}
                {yearData && yearData.core && yearData.core.length > 0 && (
                    <div className="category">
                        <div className="team-heading">CORE TEAM</div>
                        <div className="team">
                            {yearData.core.map((member, index) => (
                                <TeamMember
                                    key={index}
                                    name={member.name}
                                    post={member.post}
                                    image={member.img}
                                    linkedin={member.linkedin}
                                />
                            ))}
                        </div>
                    </div>
                )}
                
                {/* SENIOR TEAM Section */}
                {yearData && yearData.senior_team && yearData.senior_team.length > 0 && (
                    <div className="category">
                        <div className="team-heading">SENIOR TEAM</div>
                        <div className="team">
                            {yearData.senior_team.map((member, index) => (
                                <TeamMember
                                    key={index}
                                    name={member.name}
                                    post={member.post}
                                    image={member.img}
                                    linkedin={member.linkedin}
                                />
                            ))}
                        </div>
                    </div>
                )}
                
                {/* WEBSITE TEAM Section */}
                {yearData && yearData.Website_team && yearData.Website_team.length > 0 && (
                    <div className="category">
                        <div className="team-heading">Website Team</div>
                        <div className="team">
                            {yearData.Website_team.map((member, index) => (
                                <TeamMember
                                    key={index}
                                    name={member.name}
                                    post={member.post}
                                    image={member.img}
                                    linkedin={member.linkedin}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/*Team*/}
                {selectedYear===2023 && (
                    <div className="category">
                        <div className="team-heading">Our Team</div>
                        <div className="team">
                       <img src={Team_MUN_2023} alt="" className="team-image-mun"/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
