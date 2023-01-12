import axios from "axios";
import React, { createContext, useReducer } from "react";

export const contactContext = createContext();

const INIT_STATE = {
  contacts: [],
  oneContact: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
}

const ContactContextProvider = ({ children }) => {
  const API = "http://localhost:8000/contacts";
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addContact(newContact) {
    await axios.post(API, newContact);
  }

  async function getContacts() {
    const { data } = await axios.get(API);
    const action = {
      type: "GET_CONTACTS",
      payload: data,
    };
    dispatch(action);
  }
  async function deleteContacts(id) {
    const { data } = await axios.delete(API + `/${id}`);
  }

  const values = {
    addContact,
    getContacts,
    deleteContacts,
    contacts: state.contacts,
  };

  return (
    <contactContext.Provider value={values}>{children}</contactContext.Provider>
  );
};

export default ContactContextProvider;
