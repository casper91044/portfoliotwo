import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps
} from "@material-ui/icons";
import avatar from "../portfolio-project-files/ninja-computer-programming-learning-study-skills-png-clipart-ninja-avatar-png-728_724.jpg"
import {Theme as theme} from "@material-ui/core/styles/createMuiTheme";
//CSS STYLES
const useStyles = makeStyles(theme =>({
    menuSliderContainer: {
        width: 250,
        background:"#511",
        height:"30rem"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    }
}));
const Navbar = () => {
    const classes = useStyles()
    return (
        <>
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="Ninja"/>
        </Box>
        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style={{color:"tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}}>
                        Portfolio
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar