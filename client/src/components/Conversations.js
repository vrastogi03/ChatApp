import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Conversations() {
    const {conversations,selectConversationIndex} = useConversations()
    
    return (
        <div style={{height:'85vh'}}>
        <ListGroup variant="flush">
            {conversations.map((conversation,index)=>(
                <ListGroup.Item 
                    key={index}
                    action
                    onClick={()=>selectConversationIndex(index)}
                    active={conversation.seleted}
                >
                    {conversation.recipients.map(r=>r.name).join(', ')}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    )
}
