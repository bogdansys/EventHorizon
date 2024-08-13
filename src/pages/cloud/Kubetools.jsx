import React from 'react';
import WikiTemplate from '../WikiTemplate';

const Kubetools = () => {
  return (
    <WikiTemplate
      title="Kubetools"
      description="Kubernetes security tools collection."
      sections={[
        {
          title: "Overview",
          description: "Introduction to Kubetools and its purpose.",
          link: "https://github.com/collabnix/kubetools"
        },
        {
          title: "Security Tools",
          description: "Kubernetes-specific security tools.",
          link: "#security-tools"
        },
        {
          title: "Monitoring Tools",
          description: "Tools for monitoring Kubernetes clusters.",
          link: "#monitoring-tools"
        },
        {
          title: "Best Practices",
          description: "Best practices for using Kubetools.",
          link: "#best-practices"
        }
      ]}
    />
  );
};

export default Kubetools;
