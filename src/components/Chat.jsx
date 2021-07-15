import React, {useContext, useState} from 'react'
import {Context} from '..'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Container, Grid, TextField, Button, Avatar } from '@material-ui/core'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Loader from './Loader/Loader'
import firebase from 'firebase'

function Chat() {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const send = () => {
        // TODO
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })

        setValue('')
    }

    return (
        <Container>
            <Grid style={{height: window.innerHeight - 64, marginTop: "12px"}} 
                container
                justifyContent={"center"}>

            <div style={{width: '80%', height: '500px', border: '1px solid gray', overflowY: 'auto'}}>
                {
                    loading || !user ?
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <Loader />
                    </div>
                    : 
                    messages.map((message, index) => (
                        <div key={index} style={{
                            margin: 10, 
                            border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5,
                        }}>
                            <Grid container>
                                <Avatar src={message.photoURL}/>
                                <div style={{paddingLeft: '10px', marginTop: '10px'}}>{message.displayName}</div>
                            </Grid>
                            <div style={{marginTop: '10px', paddingLeft: '5px'}}>{message.text}</div>
                        </div>
                    ))
                }
            </div>
            <Grid container
                alignItems="flex-end"
                style={{width: '80%'}}
                direction={"column"}>
                <TextField variant={"outlined"} fullWidth rowsMax={2} value={value} onChange={e => setValue(e.target.value)}></TextField>
                <Button onClick={send} variant={"outlined"} style={{marginTop: "4px"}} fullWidth>Send</Button>
            </Grid>
            </Grid>
        </Container>
    )
}

export default Chat
