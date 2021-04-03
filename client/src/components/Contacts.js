import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

export default function Contacts() {
    const {contacts} = useContacts(

    )
    return (
        <div style={{height:'85vh'}}>
            <ListGroup variant="flush">
                {contacts.map(contact=>(
                    <ListGroup.Item key={contact.id}>
                        {contact.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
