import React from 'react';
import WikiTemplate from '../WikiTemplate';

const HackersChoice = () => {
  return (
    <WikiTemplate
      title="The Hackers' Choice Tips & Tricks"
      description="Essential tips and tricks for hackers, compiled by The Hackers' Choice."
      sections={[
        {
          title: "Overview",
          description: "A comprehensive collection of hacking techniques and tools.",
          link: "https://github.com/hackerschoice/thc-tips-tricks-hacks-cheat-sheet"
        },
        {
          title: "Network Hacking",
          description: "Tips for network penetration and exploitation.",
          link: "#network-hacking"
        },
        {
          title: "Web Application Hacking",
          description: "Techniques for exploiting web applications.",
          link: "#web-app-hacking"
        },
        {
          title: "Social Engineering",
          description: "Psychological manipulation techniques for gathering information.",
          link: "#social-engineering"
        }
      ]}
    />
  );
};

export default HackersChoice;
