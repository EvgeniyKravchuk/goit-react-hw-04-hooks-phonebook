import { useState, useEffect } from "react";
import "./App.module.css";
import { Wrapper, Title } from "./components/General.styled";
import ContactForm from "./components/contactForm/ContactForm";
import ContactsList from "./components/contactsList/ContactsList";
import Filter from "./components/filter/Filter";

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem("contacts")) ?? []
  );
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const deleteContact = (evt) => {
    const newContacts = contacts.filter(
      (item) => item.id !== evt.currentTarget.id
    );

    setContacts(newContacts);
  };

  const filterElements = () => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });

    return filteredContacts;
  };

  const notification = "В данный момент нет сохраненных контактов ;=(";

  return (
    <Wrapper>
      <Title>Телефонная книга:</Title>
      <ContactForm addContact={addContact} contacts={contacts} />
      <Filter
        filter={filterValue}
        onChange={(evt) => {
          setFilterValue(evt.target.value);
        }}
      />
      {contacts.length < 1 ? (
        notification
      ) : (
        <ContactsList
          contacts={filterElements}
          deleteContact={(evt) => deleteContact(evt)}
        />
      )}
    </Wrapper>
  );
}
