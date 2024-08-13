import React from 'react';
import WikiTemplate from '../WikiTemplate';

const Docker = () => {
  return (
    <WikiTemplate
      title="Docker Cheat Sheet"
      description="Comprehensive guide for Docker commands and best practices."
      sections={[
        {
          title: "Basic Commands",
          description: "Essential Docker commands for beginners.",
          link: "#basic-commands"
        },
        {
          title: "Container Management",
          description: "Commands for managing Docker containers.",
          link: "#container-management"
        },
        {
          title: "Image Management",
          description: "Commands for working with Docker images.",
          link: "#image-management"
        },
        {
          title: "Docker Compose",
          description: "Guide to using Docker Compose for multi-container applications.",
          link: "#docker-compose"
        }
      ]}
    />
  );
};

export default Docker;
