import React, { useState } from "react";

const Question = () => {
  const div = `   <label>Question<br/></label>
                    <input
                        type="text"
                        placeholder="Question"
                        value="TEST"
                        class="question-input"
                        name="question{index}"
                        id="question{index}" />
                    <label>Answer<br/></label>
                    <select name="anwser-type" id="anwser-type">
                        <option value="short">Short Anwser</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Answer"
                        value="LOREM"
                        class="answer-input"
                        name="answer{index}"
                        id="answer{index}" />
                `;
  const [divs, setDivs] = useState([div]);
  const [divsLength, setDivsLength] = useState(1);

  const handleAddDiv = (e) => {
    e.preventDefault(e);
    setDivs([...divs, div]);
    setDivsLength(divsLength + 1);
  };
  const handleRemoveDiv = (index) => {
    const newQuestions = divs.filter((_, i) => {
      return i !== index;
    });
    setDivs(newQuestions);
    setDivsLength(divsLength - 1);
  };

  const handleSaveForm = (e) => {
    e.preventDefault(e);
    const form = document.getElementById('questions');
    const formData = new FormData(form);
    const jsonObject = Object.fromEntries(formData.entries());
    const jsonString = JSON.stringify(jsonObject);
    console.log("jsonString sent to server to be saved", jsonString);
}
  return (
    <>
      <form className="question-form" name="questions" id="questions">
        {divs.map((div, index) => {
          const newDiv = div.replace(/{index}/g, index+1);
          return (
            <div id={`question-${index}`} key={index} className="question">
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: newDiv }}
                className="question-field"
              />
              {divsLength > 1 && (
                <>
                  <p>
                    {index + 1} of {divsLength}
                  </p>
                  <button
                    onClick={(e) => handleRemoveDiv(index)}
                    className="delete"
                  />
                </>
              )}
            </div>
          );
        })}
        <div className="add-question">
          <button onClick={handleAddDiv}>Add Question</button>
        </div>
      </form>
      <div className="save-questions">
        <button onClick={handleSaveForm}>Save & Share</button>
      </div>
    </>
  );
};

export default Question;
