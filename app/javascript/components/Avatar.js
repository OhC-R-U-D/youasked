import React, { Component } from "react";
import { useState } from "react-router-dom";

export default class Avatar extends Component {
  render() {
    function (){  
    const [preview, setPreview] = useState(null);
    function onClose() {
      setPreview(null);
    }
    function onCrop(pv) {
      setPreview(pv);
    }
    function onBeforeFileLoad(elem) {
      if (elem.target.files[0].size > 2000000) {
        alert("File is too big!");
        elem.target.value = "";
      }
    }
    return (
      <div>
        <Avatar
          width={600}
          height={300}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          src={null}
        />
        <br />
        {preview && (
          <>
            <img src={preview} alt="Preview" />
            <a href={preview} download="avatar">
              Download image
            </a>
          </>
        )}
      </div>
    );
  }
}
