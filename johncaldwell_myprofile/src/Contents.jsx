import { useState } from "react";
import MyTable from "./Mytable";



function Contents() {

    let skill=0;

    const [computerSkills, setComputerSkills]  = useState([
            {
              category: "Basic Computer Skills",
              skills: [
                <li>Operating Systems: Windows, macOS, Linux</li>,
                <li>Office Suites: Microsoft Office (Word, Excel, PowerPoint), Google Workspace (Docs, Sheets, Slides)</li>,
                <li>Internet Browsing: Efficient use of web browsers (Chrome, Firefox, Safari)</li>,
                <li>Email Management: Using email clients (Outlook, Gmail)</li>,
              ]
            },
            {
              category: "Intermediate Computer Skills",
              skills: [
                <li>File Management: Organizing and managing files and folders</li>,
                <li>Basic Troubleshooting: Resolving common computer issues</li>,
                <li>Basic Networking: Understanding of network setup and basic troubleshooting</li>,
                <li>Cloud Services: Familiarity with cloud storage (Google Drive, Dropbox, OneDrive)</li>
              ]
            },
            {
              category: "Advanced Computer Skills",
              skills: [
                <li>Programming Languages: Python, Java, C++, JavaScript</li>,
                <li>Database Management: SQL, MySQL</li>,
                <li>Web Development: HTML, CSS, JavaScript, frameworks like React</li>,
                <li>Data Analysis: Using tools like Excel, R, Python (Pandas, NumPy), data visualization tools (Tableau, Power BI)</li>,
                <li>Cybersecurity: Knowledge of network security, encryption, ethical hacking</li>,
                <li>Systems Administration: Managing servers, network infrastructure, and IT services</li>,
                <li>Automation and Scripting: Using scripts to automate tasks (Bash, PowerShell)</li>,
                <li>Version Control Systems: Git, GitHub, GitLab</li>
              ]
            },
            {
              category: <li>Specialized Computer Skills</li>,
              skills: [
                <li>Graphic Design: Knowledge in Adobe Creative Suite (Photoshop, Illustrator, InDesign)</li>,
                <li>3D Modeling: Using software like Blender, AutoCAD</li>,
                <li>Cloud Computing: AWS, Google Cloud Platform, Microsoft Azure</li>,
                <li>Virtualization: Using tools like VMware, VirtualBox</li>,
                <li>Project Management Tools: Using tools like JIRA, Trello, Asana</li>,
                <li>Customer Relationship Management (CRM): Using software like Salesforce, HubSpot</li>,
                <li>Enterprise Resource Planning (ERP): Using software like SAP, Oracle ERP</li>,
              ]
            },
            {
              category: "Soft Skills Related to Computer Usage",
              skills: [
                <li>Technical Communication: Ability to explain technical concepts clearly</li>,
                <li>Problem-Solving: Troubleshooting and resolving technical issues</li>,
                <li>Adaptability: Keeping up with new technologies and tools</li>,
                <li>Attention to Detail: Ensuring accuracy in technical tasks</li>,
                <li>Time Management: Efficiently managing time while working on computer-related tasks</li>
              ]
            },
            {
              category: "Industry-Specific Computer Skills",
              skills: [
                <li>Healthcare IT: Knowledge of Electronic Health Records (EHR) systems</li>,
                <li>Financial Software: Using tools like QuickBooks, SAP for financial management</li>,
                <li>Engineering Software: Proficiency in CAD software, MATLAB</li>,
                <li>Education Technology: Using Learning Management Systems (LMS) like Moodle, Blackboard</li>,
              ]
            },
          ]);
     
 
          

    return (
    <>    
    <div className="container">
        <div id="summary">
            <span className="subTitle">Summary</span>
            
                <div id="summary-doc">
                    <p>
                    Results-oriented and detail-driven Python Programmer 
                with a solid foundation in Python programming and a 
                keen interest in solving complex problems through 
                efficient coding. Adept at adhering to coding best practices,
                 collaborating effectively within team environments, 
                 and demonstrating a strong commitment to continuous 
                 learning. Possessing proficiency in web development 
                 concepts, database management, and API integration, 
                 I am eager to contribute my technical skills and passion 
                 for innovation to a dynamic entry-level role. 
                 Strong analytical and problem-solving abilities, 
                 combined with excellent communication skills, 
                 make me an asset in contributing to the success of 
                 software development projects.
                    </p>
                </div>
                             
        </div>
        <div className="skills">

                <div className="skill-title">Skills
                <div className="skill-row">
                    <div className="skill-column">
                        
                        <ul>
                          {computerSkills.map(())}
                            <li>
                            
                               <a href="#" onClick={(e) => {
                                e.preventDefault();
                               }}>{computerSkills[skill]["category"]}</a> 
                            

                            </li>

                        </ul>
                        
                    </div>
                    <div className="skill-column">
                        <ol>
                            <li>{computerSkills[skill]["skills"]}</li>
                        </ol>
                    </div>
                </div>
                <div className="employeeHistory-title">Employee History
                    <div className="employeeHistory-row">
                        <div className="employeeHistory-column">
                        
                            <ul>                  
                                <li>DizerCorp - Contractor for Progressive IT Service Desk Specialist</li>
                                <li>Dimex Corporation </li>
                                <li>Mountain River Physical Therapy </li>
                                <li>Kinetic Networking</li>
                                <li>Simonton Windows</li>
                                <li>Washington State Community College</li>

                            </ul>
                        
                        </div>
                        <div className="employeeHistory-column">
                            <ol>
                                
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Contents