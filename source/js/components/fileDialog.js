import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

let FileDialog = () => {

   let handleFileSelect = (v) => {
     console.log('Hello file contents')
     console.log(v[0].preview) 
    }

    return (<Dropzone onDrop={(event) => handleFileSelect(event)}>
    <p>Drag a marc file (.mrc, .dat) file here to import.</p>
    </Dropzone>
  )
}

export default FileDialog;