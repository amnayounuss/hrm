import { Circle } from 'rc-progress';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";  

export default function Circularprogress() {
  
  return (
    <>
      <div style={{ height: 146, width: 146, marginTop: 40, marginBottom: 40 }}>
        
          <Circle
            percent={75}
            strokeColor="#97C121"
            strokeWidth={10}
            trailColor='#0E0F12'
            trailWidth={10}
            strokeLinecap='round'
          />
          <div style={{ textAlign: 'center', marginTop: "-70%" }}>
            <p style={{ fontSize: 24, color: '#ffffff', margin: 0 }}>7:12 hrs</p>
            <p style={{ fontSize: 16, color: 'grey', margin: 0 }}>9 hrs</p>
          </div>
      </div>
      </>
  )
}
