import React, { useContext } from "react";
import { useState } from "react";
import { contactContext } from "../context/ContactContextProvider";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", lastName: "", phone: "" });

  const { addContact } = useContext(contactContext);

  const handleChange = (e) => {
    let obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
  };

  return (
    <div>
      <input
        value={contact.name}
        placeholder="name"
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <input
        value={contact.lastName}
        placeholder="lastName"
        name="lastName"
        onChange={(e) => handleChange(e)}
      />
      <input
        value={contact.phone}
        placeholder="phone"
        name="phone"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => addContact(contact)}>Add</button>
    </div>
  );
};

export default AddContact;
