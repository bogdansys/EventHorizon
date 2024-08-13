import React from 'react';
import WikiTemplate from '../WikiTemplate';

const KubernetesGoat = () => {
  return (
    <WikiTemplate
      title="Kubernetes Goat"
      description="Vulnerable-by-Design Kubernetes cluster for training."
      sections={[
        {
          title: "Overview",
          description: "Introduction to Kubernetes Goat and its purpose.",
          link: "https://madhuakula.com/kubernetes-goat/"
        },
        {
          title: "Setup",
          description: "Instructions for setting up Kubernetes Goat.",
          link: "#setup"
        },
        {
          title: "Scenarios",
          description: "Various security scenarios to practice with Kubernetes Goat.",
          link: "#scenarios"
        },
        {
          title: "Best Practices",
          description: "Security best practices learned from Kubernetes Goat.",
          link: "#best-practices"
        }
      ]}
    />
  );
};

export default KubernetesGoat;
