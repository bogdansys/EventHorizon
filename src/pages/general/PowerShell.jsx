import React from 'react';
import WikiTemplate from '../WikiTemplate';

const PowerShell = () => {
  return (
    <WikiTemplate
      title="PowerShell Cheat Sheet"
      description="Quick reference guide for PowerShell commands and scripting."
      sections={[
        {
          title: "Basic Commands",
          description: "Essential PowerShell commands for beginners.",
          link: "#basic-commands"
        },
        {
          title: "Scripting Basics",
          description: "Introduction to PowerShell scripting.",
          link: "#scripting-basics"
        },
        {
          title: "Advanced Techniques",
          description: "Advanced PowerShell techniques and best practices.",
          link: "#advanced-techniques"
        },
        {
          title: "Security Considerations",
          description: "Security best practices when using PowerShell.",
          link: "#security-considerations"
        }
      ]}
    />
  );
};

export default PowerShell;
