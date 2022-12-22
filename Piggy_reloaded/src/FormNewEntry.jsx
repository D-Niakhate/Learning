import React, { useState } from "react";

function FormNewEntry(props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const nouvOp = { name: name, desc: desc, price: price };
  return (
    <form
      method="GET"
      action="/"
      onSubmit={(event) => {
        props.handleSubmit(event, nouvOp);
        setName("");
        setDesc("");
        setPrice("");
      }}
    >
      <label>name</label>
      <input
        required
        type={"text"}
        value={name}
        name={"name"}
        onChange={(event) => setName(event.currentTarget.value)}
      ></input>
      <label>desc</label>
      <input
        required
        type={"text"}
        value={desc}
        name={"desc"}
        onChange={(event) => setDesc(event.currentTarget.value)}
      ></input>
      <label>price</label>
      <input
        required
        type={"text"}
        value={price}
        name={"price"}
        onChange={(event) => setPrice(event.currentTarget.value)}
      ></input>
      <button className="submit">Submit</button>
    </form>
  );
}

export default FormNewEntry;
