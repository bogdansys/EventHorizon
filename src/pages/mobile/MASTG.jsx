import React from 'react';
import WikiTemplate from '../WikiTemplate';

const MASTG = () => {
  return (
    <WikiTemplate
      title="MASTG (Mobile Application Security Testing Guide)"
      description="OWASP Mobile Application Security Testing Guide for Android and iOS."
      sections={[
        {
          title: "Overview",
          description: "Introduction to MASTG and its importance in mobile app security.",
          link: "https://mas.owasp.org/MASTG/"
        },
        {
          title: "Android Testing",
          description: "Specific guidelines for testing Android applications.",
          link: "#android-testing"
        },
        {
          title: "iOS Testing",
          description: "Specific guidelines for testing iOS applications.",
          link: "#ios-testing"
        },
        {
          title: "General Mobile App Testing",
          description: "General principles and techniques for mobile app security testing.",
          link: "#general-testing"
        }
      ]}
    />
  );
};

export default MASTG;
