import React from 'react'
import {Box, Button, Container, Grid} from '@material-ui/core'

function Login() {
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
                        <Button variant={"outlined"}>Enter with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
