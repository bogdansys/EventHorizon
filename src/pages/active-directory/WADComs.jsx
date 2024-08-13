import React from 'react';
import WikiTemplate from '../WikiTemplate';

const WADComs = () => {
  return (
    <WikiTemplate
      title="WADComs"
      description="Interactive cheat sheet for Windows/AD environments."
      sections={[
        {
          title: "Overview",
          description: "An interactive cheat sheet for Windows/AD environments.",
          link: "https://wadcoms.github.io/"
        },
        {
          title: "Common Commands",
          description: "Frequently used commands for Windows/AD penetration testing.",
          link: "#common-commands"
        },
        {
          title: "Advanced Techniques",
          description: "Advanced techniques for Windows/AD exploitation.",
          link: "#advanced-techniques"
        },
        {
          title: "Tools and Resources",
          description: "Useful tools and resources for Windows/AD penetration testing.",
          link: "#tools-and-resources"
        }
      ]}
    />
  );
};

export default WADComs;
