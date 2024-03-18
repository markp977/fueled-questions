import React, { useState } from "react";
import Question from "../Question/default";

const EditableHeader = ({ initialText }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(initialText);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleKeyPress = (event) => {
        if(event.keyCode === 13){
            setIsEditing(false);
        }
    };

    return (
        <div className="container">
            <div className="editable-header" onDoubleClick={handleDoubleClick}>
            <img src="./images/FueledEmblem.png" alt="Fueled Emblem"/>
                {isEditing ? (
                    <input
                        type="text"
                        value={text}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyPress} />
                ) : (
                    <p>{text}</p>
                )}
            </div>
            <Question />
        </div>
      );
  }
  
  export default EditableHeader;