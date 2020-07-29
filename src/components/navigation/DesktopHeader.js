import React from "react";
import {Grid, Toolbar, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

import "../../App.css";


function DesktopHeader() {

    const useStyles = makeStyles(theme => {
        return {
            logo: {
                height: 50
            },
            logoContainer: {
                textAlign: "center"
            },
            owner: {
                fontWeight: 900
            },
            icon: {
                color: "#777777"
            },
            link: {
                textDecoration: "none"
            },
            button: {
                backgroundColor: "green",
                color: "white",
                fontWeight: "bold",
                fontFamily: "Poppins",
                borderRadius: 24
            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar variant="regular">
            <Grid container={true} justify="center" alignItems="center">

                <Grid item={true} lg={2} container={true}>
                    <Grid item={true}>
                        <Link to="/">
                            <img
                                height="100"
                                width="50"
                                className={`${classes.logo} brand-name`}
                                src={`${process.env.PUBLIC_URL}/logo512.png`}
                                alt="Ice Rock"
                            />
                        </Link>
                    </Grid>
                </Grid>

                <Grid item={true} container={true} lg={8} justify="center" spacing={4} alignItems="center">
                    <Grid item={true}>
                        <Link to="/" className="nav-link uppercase font-size-small font-weight-bold text">
                            Home
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Button className={classes.button} variant="outlined" size="small">
                            <a
                                href="https://shop.icerock.com"
                                target="_blank"
                                rel="noreferrer noopener"
                                className={`${classes.link} white-text font-size-small center-align uppercase font-weight-bold`}>
                                Shop
                            </a>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/whatsnew" className="nav-link uppercase font-size-small  font-weight-bold text">
                            What's New
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/products" className="nav-link uppercase font-size-small font-weight-bold text">
                            products
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/contact" className="nav-link uppercase font-size-small font-weight-bold text">
                            Contact us
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/about" className="nav-link uppercase font-size-small font-weight-bold text">
                            About
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/reviews" className="nav-link uppercase font-size-small font-weight-bold text">
                            Reviews
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;
