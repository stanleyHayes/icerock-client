import React from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Button} from "@material-ui/core";
import "./Index.css";
import {makeStyles} from "@material-ui/styles";

function HomePage() {

    const useStyles = makeStyles(theme => {
        return {
            button: {
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: "green",
                color: "white",
                fontWeight: "bold",
                fontFamily: "Poppins",
                paddingLeft: 16,
                paddingRight: 16
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <div className="header">
                <section className="header-content">
                    <img
                        height="200"
                        width="200"
                        className="logo animate-pop-in"
                        src={`${process.env.PUBLIC_URL}/logo512.png`}
                        alt="Background Hero"/>
                    <h1 className="header-title animate-pop-in responsive-text">Ice Rock</h1>
                    <div className="animate-pop-in center-horizontal action-button">
                        <Button variant="outlined" size="large" className={`${classes.button} animate-pop-in`}>Shop Now</Button>
                    </div>
                </section>
                <section className="header-down-arrow">
                    <img src={`${process.env.PUBLIC_URL}/images/downarrow.png`} width="50" alt="Down Arrow"/>
                </section>
            </div>
            <section className="section padding-vertical-huge">
                <Container>
                    <Grid container={true}>
                        <Grid item={true}>
                            <p className="sub-header text uppercase">What's New</p>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="section padding-vertical-huge light-background">
                <Container>
                    <Grid container={true}>
                        <Grid item={true}>
                            <p className="sub-header text uppercase">Mission & Vision</p>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="section padding-vertical-huge">
                <Container>
                    <Grid container={true}>
                        <Grid item={true}>
                            <p className="sub-header text uppercase">Services</p>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="section padding-vertical-huge light-background">
                <Container>
                    <Grid container={true}>
                        <Grid item={true}>
                            <p className="sub-header text uppercase">Products</p>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="section padding-vertical-huge">
                <Container>
                    <Grid container={true}>
                        <Grid item={true}>
                            <p className="sub-header text uppercase">Gallery</p>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="section padding-vertical-huge light-background">
                <Container>
                    <Grid container={true}>
                        <Grid item={true}>
                            <p className="sub-header text uppercase">Reviews</p>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </Layout>
    )
}

export default HomePage;
