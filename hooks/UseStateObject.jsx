import React from "react";
import { useState } from "react";

function UseStateObject() {
  const [name, setName] = useState({ Fname: "", Lname: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.Fname}
          onChange={(e) => setName({ ...name, Fname: e.target.value })}
        />
        <input
          type="text"
          value={name.Lname}
          onChange={(e) => setName({ ...name, Lname: e.target.value })}
        />
        <h1>Your First Name is:{name.Fname}</h1>
        <h1>Your First Name is:{name.Lname}</h1>
      </form>
    </div>
  );
}

export default UseStateObject;
