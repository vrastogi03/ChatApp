import React, {useRef} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {v4 as uuidv4} from 'uuid'

export default function Login({onIdSubmit}) {
    const idRef=useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewid(){
        onIdSubmit(uuidv4())
    }

    return (
        <Container className="align-items-center d-flex" style={{height:'100vh'}}>
            <Form onSubmit={handleSubmit} classname="w-100">
                <Form.Group>
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required/>
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewid} variant="secondary">Create a new ID</Button>

            </Form>
        </Container>
    )
}
