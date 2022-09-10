import React, { useState } from "react";
import "./TodoItem.scss";

export const TodoItem = ({
  index,
  item,
  removeToDo,
  editTodo,
  handleCheck,
}) => {
  const [titleValue, setTitle] = useState(item.title);
  const [descriptionValue, setDescription] = useState(item.description);
  const [date, setDate] = useState(item.date);
  const [isEdit, setIsEdit] = useState(false);

  const editItem = () => {
    setIsEdit(true);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleCompliteTask = (event) => {
    handleCheck(index, event.target.checked);
  };

  const handleSave = () => {
    const newDate = new Date().toLocaleString();
    setDate(newDate);
    editTodo(index, {
      title: titleValue,
      description: descriptionValue,
      date: newDate,
    });
    setIsEdit(false);
  };

  return (
    <li key={index} className="TodoItem">
      <label className={isEdit ? "TodoItem__check-edit" : "TodoItem__check"}>
        <input
          className={
            item.complited
              ? "TodoItem__check__box-checked"
              : "TodoItem__check__box-unchected"
          }
          onChange={handleCompliteTask}
          type="checkbox"
          readOnly
        />
        <div className="TodoItem__check__task">
          <p className="TodoItem__check__title">{item.title}</p>
          <p className="TodoItem__check__description">{item.description}</p>
          <p className="TodoItem__check__time">{date}</p>
        </div>
      </label>
      <div className={isEdit ? "TodoItem__form-edit" : "TodoItem__form"}>
        <div className="TodoItem__form__edit">
          <input
            className="TodoItem__form__edit-form TodoItem__form__edit-title"
            type="text"
            value={titleValue}
            onChange={handleChangeTitle}
            required
          />
          <input
            className="TodoItem__form__edit-form TodoItem__form__edit-description"
            type="text"
            value={descriptionValue}
            onChange={handleChangeDescription}
          />
        </div>
        <button
          onClick={() => handleSave()}
          className="
              TodoItem__form__edit-button
              button
            "
          type="submit"
        >
          Save
        </button>
      </div>

      <div className={isEdit ? "TodoItem__button-is-edit" : "TodoItem__button"}>
        <button
          onClick={() => editItem()}
          className="
              TodoItem__button-all
              TodoItem__button-edit
              TodoItem__button-edit--selected
              button
            "
          type="button"
        >
          &#9998;
        </button>
        <button
          onClick={() => removeToDo(index)}
          className="
              TodoItem__button-all
              TodoItem__button-delete
              TodoItem__button-delete--selected
              button
            "
          type="button"
        >
          &#10006;
        </button>
      </div>
    </li>
  );
};
