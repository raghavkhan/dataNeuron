import React, { useState } from "react";
import UpdateData from "../services/UpdateData";

const Modal = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [refetch, setRefetch] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      userId: props.updaterId.toString(),
      name,
      age: Number(age),
    };
    console.log(updatedFormData);
    await UpdateData(updatedFormData);
    setName("");
    setAge("");
  };

  return (
    <div className='modal'>
      <span className='close-button' onClick={props.closeModal}>
        X
      </span>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'>Name:</label>
        <br />
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />

        <label htmlFor='age'>Age:</label>
        <br />
        <input
          type='number'
          name='age'
          id='age'
          value={age}
          required
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />

        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Modal;
