import { useState } from "react";

export default function Form() {
  // I need to store my formValues --> state!
  // Each input value is going to be stored in a different state variable
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  // I need a tool to track the changes in the input data --> the onChange event
  //we need an event listener --> onChange
  //we need an event handler --> handleChange
  function handleChangeUsername(event) {
    //this is tracking the changes in the username input value
    setUsername(event.target.value); //value = "Manny"
    console.log(event.target.value);
  }

  function handleChangeComment(event) {
    //this is tracking the changes in the comment input value
    setComment(event.target.value); //value = "m@gmail.com"
    console.log(event.target.value);
  }
  //we need to add an event to our form to submit it --> onSubmit
  //we need the event listener and the event handler

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     console.log("Submitted Data:", { username, comment }); // console only logs when the form is submitted. Chat gpt offered this option
  //   }
  //=============================================================================================
  function handleSubmit(event) {
    event.preventDefault();
    let newData = { client_name: username, comment: comment };
    fetch("http://localhost:8080/add-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    console.log("Submitted data: ", newData);
    setUsername("");
    setComment("");
  }

  //=============================================================================================

  return (
    <>
      <h2>Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Write your username"
          required
          onChange={handleChangeUsername}
          value={username} //this is our state variable
        />
        <label htmlFor="comment">Email: </label>
        <input
          type="text"
          id="comment"
          name="comment"
          placeholder="Write your comment"
          required
          onChange={handleChangeComment}
          value={comment} //this is our state variable
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
