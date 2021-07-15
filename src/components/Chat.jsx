import React, {useContext, useState} from 'react'
import {Context} from '..'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Container, Grid, TextField, Button } from '@material-ui/core'

function Chat() {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')

    const send = async () => {
        // TODO
        console.log(value)

        setValue('')
    }

    return (
        <Container>
            <Grid style={{height: window.innerHeight - 64, marginTop: "32px"}} 
                container
                alignItems={"center"} 
                justifyContent={"center"}>

            <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
            </div>
            <Grid container
                alignItems="flex-end"
                style={{width: '80%'}}
                direction={"column"}>
                <TextField variant={"outlined"} fullWidth rowsMax={2} value={value} onChange={e => setValue(e.target.value)}></TextField>
                <Button variant={"outlined"} style={{marginTop: "4px"}} fullWidth>Send</Button>
            </Grid>
            </Grid>
        </Container>
    )
}

export default Chat
