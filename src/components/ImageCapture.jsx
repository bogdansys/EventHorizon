import React from 'react';
import { toPng } from 'html-to-image';

const ImageCapture = ({ elementId }) => {
  const captureImage = () => {
    const element = document.getElementById(elementId);
    if (element) {
      toPng(element)
        .then((dataUrl) => {
          // Use the dataUrl, e.g., open in a new tab
          const tab = window.open();
          tab.document.write('<img src="' + dataUrl + '" alt="captured image"/>');
        })
        .catch((error) => {
          console.error('Error capturing image:', error);
        });
    } else {
      console.error('Element to capture not found');
    }
  };

  return (
    <button onClick={captureImage}>Capture Image</button>
  );
};

export default ImageCapture;
