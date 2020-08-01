import React from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Button, Card, CardContent} from "@material-ui/core";
import "./Index.css";
import {makeStyles} from "@material-ui/styles";
import {connect} from "react-redux";
import Information from "../../components/shared/Information";
import {ArrowForward} from "@material-ui/icons";
import {Link} from "react-router-dom";
import Product from "../../components/shared/Product";
import Review from "../../components/shared/Review";
import Slider from "react-slick";

function HomePage({reviews, products, news}) {

    const useStyles = makeStyles(theme => {
        return {
            textButton: {
                color: "darkblue",
                fontWeight: "bold",
                fontFamily: "Poppins"
            },
            icon: {
                color: "darkblue"
            },
            button: {
                color: "white",
                fontWeight: "bold",
                fontFamily: "Poppins",
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: "green"
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
                        <Button variant="outlined" size="large" className={`${classes.button} animate-pop-in`}>Shop
                            Now</Button>
                    </div>
                </section>
                <section className="header-down-arrow">
                    <img src={`${process.env.PUBLIC_URL}/images/downarrow.png`} width="50" alt="Down Arrow"/>
                </section>
            </div>
            <section className="section padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} justify="center">
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">What's New</p>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={3}>
                        {
                            (!news.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="">No Information Available</p>
                                    </Grid>
                                </Grid>
                            ) : (
                                news.slice(3).map((info, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Information info={info}/>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>

                    <div className="margin-top-large">
                        <Grid container={true} spacing={3} justify="flex-end">
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Button
                                    variant="text"
                                    className={classes.textButton}
                                    size="large"
                                    endIcon={<ArrowForward className={classes.icon}/>}>
                                    <Link
                                        className="font-weight-bold text-decoration-none uppercase font-size-tiny blue-text"
                                        to="/whats-new">
                                        View All Information
                                    </Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </div>

                </Container>
            </section>
            <section className="section padding-vertical-huge light-background">
                <Container>
                    <Grid container={true} justify="center" spacing={3}>
                        <Grid item={true} xs={12}>
                            <p className="sub-header text uppercase">Mission & Vision</p>
                        </Grid>
                        <Grid item={true} xs={12} md={5}>
                            <div className="shadow">
                                <Card elevation={0} variant="outlined" raised={false}>
                                    <CardContent>
                                        <p className="text-align-center font-weight-bold font-size-large">Our
                                            Mission</p>
                                        <p className="font-size-medium text-align-center">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut
                                            labore et dolore magna aliqua.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} md={5}>
                            <div className="shadow">
                                <Card elevation={0} variant="outlined" raised={false}>
                                    <CardContent>
                                        <p className="text-align-center font-weight-bold font-size-large">Our Vision</p>
                                        <p className="font-size-medium text-align-center">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut
                                            labore et dolore magna aliqua.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="section padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">services</p>
                        </Grid>

                        <Grid item={true} xs={12} md={6} lg={4}>

                            <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                <CardContent>
                                    <div>
                                        <div className="center-align">
                                            <img
                                                height="70"
                                                width="70"
                                                className=""
                                                src={`${process.env.PUBLIC_URL}/images/youtube.svg`}
                                                alt="Mission logo"/>
                                        </div>
                                        <p className="title center-align uppercase grey-text font-size-small font-weight-bold">Lorem
                                            Ipsum</p>
                                        <p className="summary center-align">
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                <CardContent>
                                    <div>
                                        <div className="center-align">
                                            <img
                                                height="70"
                                                width="70"
                                                className=""
                                                src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                                                alt="Mission logo"/>
                                        </div>
                                        <p className="title center-align uppercase grey-text font-size-small font-weight-bold">Lorem
                                            Ipsum</p>
                                        <p className="summary center-align">
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Card className={classes.card} raised={true} elevation={1} variant="elevation">
                                <CardContent>
                                    <div>
                                        <div className="center-align">
                                            <img
                                                height="70"
                                                width="70"
                                                className=""
                                                src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
                                                alt="Mission logo"/>
                                        </div>
                                        <p className="title center-align uppercase grey-text font-size-small font-weight-bold">Lorem
                                            Ipsum</p>
                                        <p className="summary center-align">
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Container>
            </section>
            <section className="section padding-vertical-huge light-background">
                <Container>
                    <p className="uppercase margin-vertical-large sub-header">Gallery</p>
                    <div className="carousel-size">
                        <Slider
                            autoplay={5000}
                            fade={true}
                            speed={2000}
                            dots={true}
                            arrows={false}
                            slidesToShow={1}
                            slidesToScroll={1}
                            infinite={true}>

                            <div className="slider-container">
                                <img
                                    className="responsive-image"
                                    src={`${process.env.PUBLIC_URL}/images/hero-image-big.jpg`}
                                    alt="Mission logo"/>
                            </div>

                            <div className="slider-container">
                                <img
                                    className="responsive-image"
                                    src={`${process.env.PUBLIC_URL}/images/hero-image-big.jpg`}
                                    alt="Mission logo"/>
                            </div>

                            <div className="slider-container">
                                <img
                                    className="responsive-image"
                                    src={`${process.env.PUBLIC_URL}/images/hero-image-big.jpg`}
                                    alt="Mission logo"/>
                            </div>

                        </Slider>
                    </div>
                </Container>
            </section>
            <section className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} justify="center">
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">Products</p>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={3}>
                        {
                            (!products.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="">No Products Available</p>
                                    </Grid>
                                </Grid>
                            ) : (
                                products.map((product, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Product product={product}/>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>

                    <div className="margin-top-large">
                        <Grid container={true} spacing={3} justify="flex-end">
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Button
                                    className={classes.textButton}
                                    size="large"
                                    variant="text"
                                    endIcon={<ArrowForward className={classes.icon}/>}>
                                    <Link
                                        className="font-weight-bold text-decoration-none uppercase font-size-tiny blue-text"
                                        to="/products">
                                        View All Products
                                    </Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </div>

                </Container>
            </section>

            <section className="section padding-vertical-huge light-background">
                <Container>
                    <Grid container={true} spacing={3} justify="center">
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">Customer Reviews</p>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={3}>
                        {
                            (!reviews.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="">No Reviews Available</p>
                                    </Grid>
                                </Grid>
                            ) : (
                                reviews.slice(5).map((review, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Review review={review}/>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>

                    <div className="margin-top-large">
                        <Grid container={true} spacing={3} justify="flex-end">
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Button
                                    variant="text"
                                    className={classes.textButton}
                                    size="large"
                                    endIcon={<ArrowForward className={classes.icon}/>}>
                                    <Link
                                        className="font-weight-bold text-decoration-none uppercase font-size-tiny blue-text"
                                        to="/reviews">
                                        View All Reviews
                                    </Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </div>

                </Container>
            </section>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        news: state.news.news,
        reviews: state.reviews.reviews
    }
}

export default connect(mapStateToProps)(HomePage);
