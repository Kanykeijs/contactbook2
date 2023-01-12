import React, { useContext } from "react";
import { useEffect } from "react";
import { contactContext } from "../context/ContactContextProvider";

const ListContact = () => {
  const { contacts, getContacts, deleteContacts } = useContext(contactContext);
  console.log(contacts);
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      {contacts.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <h5>{item.phone}</h5>
          <button onClick={() => deleteContacts(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListContact;
