import React, { useState } from "react";
import "./Form.scss";

const Form = ({ addToDo, todos }) => {
  const [titleValue, setTitle] = useState();
  const [descriptionValue, setdescription] = useState();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setdescription(event.target.value);
  };

  const handleSubmit = (event) => {
    setTitle("");
    setdescription("");
    addToDo({
      title: titleValue,
      description: descriptionValue,
      date: new Date().toLocaleString(),
      complited: false,
    });
    event.preventDefault();
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label className="Form__new-task">
        <div className="Form__new-task__label">New task:</div>
        <div className="Form__new-task__texts">
          <input
            className="Form__new-task__text"
            type="text"
            value={titleValue}
            placeholder="Title of the task"
            onChange={handleChangeTitle}
            required
          />
          <input
            className="Form__new-task__text"
            type="text"
            value={descriptionValue}
            placeholder="Description of the task"
            onChange={handleChangeDescription}
          />
        </div>
      </label>
      <input className="Form__button" type="submit" value="Submit" />
    </form>
  );
};

export default Form;
