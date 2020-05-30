import React from "react";
// import makeStyles from "@material-ui/core/styles";
import {Typography,Avatar,Grid,Box} from "@material-ui/core";
import avatar from "../portfolio-project-files/ninja-computer-programming-learning-study-skills-png-clipart-ninja-avatar-png-728_724.jpg";
import ReactTyped from "react-typed";
import {makeStyles} from "@material-ui/core/styles";

//CSS STYLES
 const useStyles = makeStyles(theme => ({
     avatar: {
         width: theme.spacing(15),
         height: theme.spacing(15),
         margin: theme.spacing(1),
     },
     title: {
         color: "tomato"
     },
     subtitle: {
         color: "tan",
         marginBottom: "3rem"
     },
     typeContainer: {
         position: "absolute",
         top: "50%",
         left: "50%",
         transform: "translate(-50%, -50%)",
         width: "100vw",
         textAlign: "center",
         zIndex: 1
     }
 }))

const Header = () => {
     const classes = useStyles();
    return (
        <Box className={classes.typeContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Ninja"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <ReactTyped strings={["Artem Eliseev"]}
                            typeSpeed={100}
                />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <ReactTyped strings={["Web Development", "Web Design"]}
                            typeSpeed={100}
                            backSpeed={100}
                            loop
                />
            </Typography>
        </Box>
    );
};

export default Header;