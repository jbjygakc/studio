import React, { useState } from "react";
import "./Bar.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

export default function Bar(props) {
    const [progress, setProgress] = useState();
   
   
   
    function handle(data) {
 setProgress(data);
 setTimeout(function(){
    setProgress(0);
    setProgress();
  }, 400);
    }
    
    return (
      <div className="Bar">
     { (props.lastq) ? <ProgressBar percent ={progress} ></ProgressBar> :
        <ProgressBar percent={progress}>
          <Step>
            {({ accomplished, index }) => (
              <>
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  }`}
                  onClick={() => {handle(0) }}
                >
                 
                </div>
                <div className={"test"} > Strongly Disagree</div>
              </>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <>
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  }`}
                  onClick={() => {handle(25) }             }
                >
                  
                </div>
                <div className={"test"}     >Disagree</div>
              </>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <>
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  }`}
                  onClick={() => {handle(50) }}
                >
                  
                </div>
                <div className={"test"}>Neutral</div>
              </>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <>
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  }`}
                  onClick={() => {handle(75) }}
                >
                 
                </div>
                <div className={"test"}>Agree</div>
              </>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <>
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  }`}
                  onClick={() => {handle(100) }}
                >
                  
                </div>
                <div className={"test"}>Strongly Agree</div>
              </>
            )}
          </Step>
        </ProgressBar>
     }
       
        
      </div>
    );
  }
  