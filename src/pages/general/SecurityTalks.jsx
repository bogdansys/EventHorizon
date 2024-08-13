import React from 'react';
import WikiTemplate from '../WikiTemplate';

const SecurityTalks = () => {
  return (
    <WikiTemplate
      title="Security Talks and Videos"
      description="Curated list of security talks, videos, and conference archives."
      sections={[
        {
          title: "Cybersecurity Conference Directory",
          description: "Comprehensive list of cybersecurity conferences worldwide.",
          link: "https://infosec-conferences.com/site-map/#allevents"
        },
        {
          title: "Confsec - List of Security Events 2024",
          description: "Upcoming security events and conferences for 2024.",
          link: "https://github.com/cryptax/confsec"
        },
        {
          title: "InfoCon - The Hacking Conference Archive",
          description: "Archive of past hacking conference materials.",
          link: "https://infocon.org/cons/"
        },
        {
          title: "Awesome Security Talks",
          description: "Curated list of notable security talks from various conferences.",
          link: "https://github.com/PaulSec/awesome-sec-talks"
        }
      ]}
    />
  );
};

export default SecurityTalks;
