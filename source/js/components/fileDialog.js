import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

let FileDialog = () => {

   let handleFileSelect = (v) => {
    const reader = new FileReader();
    reader.onload = () => {
        const fileAsBinaryString = reader.result;
    };
    }

    return (<Dropzone onDrop={(event) => handleFileSelect(event)}>
    <p>Drag a marc file (.mrc, .dat) file here to import it.</p>
    </Dropzone>
  )
}

export default FileDialog;