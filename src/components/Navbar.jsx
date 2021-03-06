import React, { useContext } from 'react'
import {AppBar, Toolbar, Typography, Grid, Button} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import {LOGIN_ROUTE} from '../utils/consts'
import { Context } from '..'
import { useAuthState } from 'react-firebase-hooks/auth'

function Navbar() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const exit = () => {
        auth.signOut()
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Messanger
                </Typography>
                <Grid container justifyContent={"flex-end"}>
                    {
                        user ?
                            <div>
                                <Button onClick={exit} variant={"contained"}>Exit</Button>
                            </div>
                        :
                            <NavLink to={LOGIN_ROUTE} style={{textDecoration: "none"}}>
                                <Button variant={"contained"}>Login</Button>
                            </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
