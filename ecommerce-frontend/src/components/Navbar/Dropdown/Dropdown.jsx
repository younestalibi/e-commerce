import { useState } from "react";
import './Dropdown.css'
import {GrFormDown,GrFormUp} from 'react-icons/gr'

const Dropdown = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(props.options[0]);
    const handleChange = (e) => {
        setSelected(e.target.textContent);
        setIsOpen(false)
    }
    return (
        <div className="language-dropdown">
            <div className="language-icon" onClick={() => setIsOpen(!isOpen)}>
                <span>{selected}</span>
                {isOpen?<GrFormUp/>:<GrFormDown/>}
            </div>
            {isOpen && (
                <div className="language-options">
                    {props.options.map((e,i)=>(
                        <div key={i} value={e} className="language-option"
                        // onClick={()=>{handleChange(e)}}
                        onClick={handleChange}
                        >
                        {e}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
 
export default Dropdown;