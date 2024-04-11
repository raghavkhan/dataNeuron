import React, { useState, useEffect } from "react";
import AddData from "../services/AddData.js";

const Component1 = () => {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  // const [formData, setFormData] = useState({});
  useEffect(() => {}, []);

  
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit handler");
    console.log(userId, name, age);
    const formData = { userId: Number(userId), name, age: Number(age) };
    await AddData(formData);
    setUserId("");
    setName("");
    setAge("");
    // setFormData((prev) => {
    //   return { ...prev, userId, name, age };
    // });
  };

  return (
    <div className='container1'>
      <form className='form' onSubmit={submitHandler}>
        <label htmlFor='userId'>userId</label>
        <br />
        <input
          type='number'
          name='userId'
          userId='userId'
          value={userId}
          required
          onChange={(e) => {
            console.log(e.target.value);
            setUserId(e.target.value);
          }}
        />
        <br />

        <label htmlFor='name'>Name:</label>
        <br />
        <input
          type='text'
          name='name'
          userId='name'
          value={name}
          required
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        />
        <br />

        <label htmlFor='age'>Age:</label>
        <br />
        <input
          type='number'
          name='age'
          userId='age'
          value={age}
          required
          onChange={(e) => {
            console.log(e.target.value);
            setAge(e.target.value);
          }}
        />
        <br />

        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Component1;
