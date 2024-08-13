import React from 'react';
import WikiTemplate from '../WikiTemplate';

const AwesomeK8sSecurity = () => {
  return (
    <WikiTemplate
      title="Awesome Kubernetes Security"
      description="Collection of Kubernetes security resources."
      sections={[
        {
          title: "Overview",
          description: "Introduction to Kubernetes security concepts.",
          link: "https://github.com/magnologan/awesome-k8s-security"
        },
        {
          title: "Tools",
          description: "Useful tools for Kubernetes security.",
          link: "#tools"
        },
        {
          title: "Best Practices",
          description: "Best practices for securing Kubernetes clusters.",
          link: "#best-practices"
        },
        {
          title: "Vulnerabilities",
          description: "Common Kubernetes vulnerabilities and exploits.",
          link: "#vulnerabilities"
        }
      ]}
    />
  );
};

export default AwesomeK8sSecurity;
