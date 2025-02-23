import React, { useState } from 'react';
import "./help.css"
import guide from "./assets/cheatsheet.pdf"


function Help(){

    return(

        <>
        <div class="help">
        <div class="iframe_content">
      <iframe
          src={guide}
          width="54%"
          height="100%"
        ></iframe>
    </div>

        </div>
        </>


    );
}

export default Help