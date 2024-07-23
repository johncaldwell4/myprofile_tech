import React, { useState } from 'react';

const links = [
  { id: 1, name: "Basic Computer Skills", content: [
    "Operating Systems: Windows, macOS, Linux",
    "Office Suites: Microsoft Office (Word, Excel, PowerPoint)", "Google Workspace (Docs, Sheets, Slides)",
    "Internet Browsing: Efficient use of web browsers (Chrome, Firefox, Safari)",
    "Email Management: Using email clients (Outlook, Gmail)"
  ] },
  { id: 2, name: "Intermediate Computer Skills", content: [
    "File Management: Organizing and managing files and folders",
    "Basic Troubleshooting: Resolving common computer issues",
    "Basic Networking: Understanding of network setup and basic troubleshooting",
    "Cloud Services: Familiarity with cloud storage (Google Drive, Dropbox, OneDrive)"
  ] },
  { id: 3, name: "Advanced Computer Skills", content: [
    "Programming Languages: Python, Java, C++, JavaScript",
    "Database Management: SQL, MySQL",
    "Web Development: HTML, CSS, JavaScript, frameworks like React",
    "Data Analysis: Using tools like Excel, R, Python (Pandas, NumPy), data visualization tools (Tableau, Power BI)",
    "Cybersecurity: Knowledge of network security, encryption, ethical hacking",
    "Systems Administration: Managing servers, network infrastructure, and IT services",
    "Automation and Scripting: Using scripts to automate tasks (Bash, PowerShell)",
    "Version Control Systems: Git, GitHub, GitLab"
  ] },
  { id: 4, name: "Specialized Computer Skills", content: [
  "Graphic Design: Knowledge in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
  "3D Modeling: Using software like Blender, AutoCAD",
  "Cloud Computing: AWS, Google Cloud Platform, Microsoft Azure",
  "Virtualization: Using tools like VMware, VirtualBox",
  "Project Management Tools: Using tools like JIRA, Trello, Asana",
  "Customer Relationship Management (CRM): Using software like Salesforce, HubSpot",
  "Enterprise Resource Planning (ERP): Using software like SAP, Oracle ERP",
  ] },
  { id: 5, name: "Soft Skills Related to Computer Usage", content: [
  "Technical Communication: Ability to explain technical concepts clearly",
  "Problem-Solving: Troubleshooting and resolving technical issues",
  "Adaptability: Keeping up with new technologies and tools",
  "Attention to Detail: Ensuring accuracy in technical tasks",
  "Time Management: Efficiently managing time while working on computer-related tasks"
  ] },
  { id: 6, name: "Industry-Specific Computer Skills", content: [
  "Healthcare IT: Knowledge of Electronic Health Records (EHR) systems",
  "Financial Software: Using tools like QuickBooks, SAP for financial management",
  "Engineering Software: Proficiency in CAD software, MATLAB",
  "Education Technology: Using Learning Management Systems (LMS) like Moodle, Blackboard",
  ] },
];

function TwoColumnLayout() {
  const [selectedContent, setSelectedContent] = useState('Click a link to see the content');

  const handleLinkClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className='container'>
      <div className='skillContainer skillCategory'>
        <h2>Skills</h2>
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <button className='btnSkills' onClick={(e) => { e.preventDefault(); handleLinkClick(link.content); }}>
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='skillContainer skillList'>
        <h2>Content</h2>
          <ul>
          {selectedContent.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TwoColumnLayout
