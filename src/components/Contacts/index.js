import {useState,useEffect} from 'react'
import Form from './Form'
import List from './List'
import "./styles.css"

const Contacts = () => {
    const [contacts, setContacts] = useState([
        {
            fullname:"Faruk",
            phone_number:"12346"
        },{
            fullname:"Mehmet",
            phone_number:"356587451"
        },{
            fullname:"Tarık",
            phone_number:"58171215"
        },

    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])
    
  return (
    <div id='container'>
        <h1>Contacts</h1>
    <List contacts={contacts}/>
    <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts