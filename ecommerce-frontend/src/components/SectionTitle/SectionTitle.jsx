import { useEffect, useRef, useState } from 'react';
import './SectionTitle.css'
const SectionTitle = (props) => {
    const refWidth=useRef(null)
    var [width,setWidth]=useState(130);

    useEffect(() => {
        if (refWidth.current) {
          setWidth(refWidth.current.offsetWidth - (refWidth.current.offsetWidth/3));
        }
      });
    return ( 
    <div className='section-title'>
        <div style={{ width: `calc(50% - ${width}px)` }}></div>
        <span ref={refWidth} id='title'>{props.title}</span>
        <div style={{ width: `calc(50% - ${width}px)` }}></div>
    </div>
     );
}
 
export default SectionTitle;