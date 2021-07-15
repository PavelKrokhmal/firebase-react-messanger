import React, { useContext } from 'react'
import {Box, Button, Container, Grid} from '@material-ui/core'
import { Context } from '..'
import firebase from 'firebase'

function Login() {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }

    return (
        <Container>
            <Grid style={{height: window.innerHeight - 64}} 
                container
                alignItems={"center"} 
                justifyContent={"center"}>
                <Grid style={{width: 400, background: "lightgray"}}
                    container
                    alignItems={"center"}
                    direction={"column"}
                    >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Enter with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
