/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-unused-prop-types */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button } from "antd"
import ContactCard from "./ContactCard"
import "./ContactList.css"
import AddContactModal from "./AddContactModal"

function ContactList(props) {
  // Required props: contacts (currently placeholder), editable

  const editing = props.editing
  const contacts = props.contacts
  const setContacts = props.setContacts
  const isUser = Object.keys(contacts).includes("user")
  const [addContactModalVisible, setAddContactModalVisible] = useState(false)
  const setVisible = (v) => {
    setAddContactModalVisible(v)
  }
  const updateSocial = (key, newSocial) => {
    // eslint-disable-next-line prefer-template
    setContacts({ ...contacts, [key]: newSocial })
  }
  const deleteSocial = (key) => {
    // eslint-disable-next-line prefer-template
    const updatedArr = {}
    Object.assign(updatedArr, contacts)
    updatedArr[key] = null
    setContacts(updatedArr)
  }
  const contactsArr = []
  // console.log(contacts)
  Object.entries(contacts).forEach(([key, value]) => {
    if (key !== "user" && key !== "community" && value !== null)
      contactsArr.push(
        <ContactCard
          key={key}
          type={key}
          name={value}
          editable={key === "email" && isUser ? false : editing}
          updateSocial={(k, s) => updateSocial(k, s)}
          deleteSocial={(k) => deleteSocial(k)}
        />
      )
  })
  return (
    <div className="contact-list-container">
      <div className="contact-list-contacts-container">
        {contactsArr.length ? contactsArr : <ContactCard key="empty-contact" editable={false} />}
      </div>
      {editing && (
        <div className="contact-list-edit-button-container">
          <Button
            className="contact-list-edit-button"
            type="primary"
            onClick={() => setVisible(true)}
          >
            Add Contact
          </Button>
        </div>
      )}
      <AddContactModal
        isVisible={addContactModalVisible}
        setVisible={setVisible}
        contactList={contacts}
        setContactList={setContacts}
      />
    </div>
  )
}

ContactList.propTypes = {
  editing: PropTypes.bool.isRequired,
}

export default ContactList
