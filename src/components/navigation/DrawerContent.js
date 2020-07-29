import React from "react";
import {
    Divider,
    Grid,
    Container,
    Avatar, Button
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import "../../App.css";

function DrawerContent({handleDrawerClose}) {


    const useStyles = makeStyles(theme => {
        return {
            link: {
                color: "#777777",
                textDecoration: "none",
                fontFamily: 'Poppins'
            },
            avatar: {
                width: 150,
                height: 150,
            },
            avatarContainer: {
                display: "flex",
                justifyContent: "center",
                marginBottom: 32
            },
            gridContainer: {
                paddingTop: 32,
                paddingBottom: 32
            },
            root: {
                backgroundColor: "white",
                minHeight: "100vh",
                width: '90vw'
            },
            expandPanel: {
                backgroundColor: "white"
            },
            content: {
                paddingLeft: 32,
                paddingRight: 32
            },
            grid: {
                marginTop: 16
            },
            icon: {
                fontSize: 24
            },
            button: {
                backgroundColor: "green",
                color: "white",
                fontWeight: "bold",
                fontFamily: "Poppins",
                paddingTop: 4,
                paddingBottom: 4
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid className={classes.grid} container={true} justify="flex-end" alignItems="center">
                    <Grid item={true} xs={1}>
                        <Close className={classes.icon} onClick={() => handleDrawerClose()}/>
                    </Grid>
                </Grid>
                <Grid
                    container={true}
                    justify="center"
                    alignItems="flex-start">
                    <Grid item={true}>
                        <Avatar className={classes.avatar} src={`${process.env.PUBLIC_URL}/logo512.png`}/>
                        <p className="text-align-center text font-size-medium uppercase font-weight-bold">Ice Rock</p>
                    </Grid>

                </Grid>

                <Grid className={classes.gridContainer} container={true} justify="flex-start">
                    <Grid item={true} xs={12}>
                        <div className={classes.content}>
                            <p>
                                <Link to="/"
                                      className={` ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Home
                                </Link>
                            </p>

                            <Divider variant="fullWidth"/>

                            <p>
                                <Button className={classes.button} variant="outlined" size="small">
                                    <a
                                        href="https://shop.icerock.com"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className={`${classes.button}  ${classes.link} center-align uppercase font-weight-bold`}>
                                        Shop
                                    </a>
                                </Button>
                            </p>
                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/whatsnew"
                                      className={`  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    What's new
                                </Link>
                            </p>

                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/products"
                                      className={`  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Products
                                </Link>
                            </p>
                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/reviews"
                                      className={`  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Reviews
                                </Link>
                            </p>
                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/contact"
                                      className={`  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Contact Us
                                </Link>
                            </p>

                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/about"
                                      className={`  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    About Us
                                </Link>
                            </p>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default DrawerContent;
