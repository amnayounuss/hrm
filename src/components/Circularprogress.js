import { Circle } from 'rc-progress'
import React from 'react'

export default function Circularprogress() {
  return (
    <div style={{height: 146, width: 146,marginTop: 40, marginBottom: 40}}>
      
        <Circle
            percent={75}
            strokeColor="#97C121"
            strokeWidth={10}
            trailColor='#0E0F12'
            trailWidth={10}
            strokeLinecap='round'
         />
         
    </div>
  )
}
