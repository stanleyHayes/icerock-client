import React from "react";
import {Container, Grid, Hidden} from "@material-ui/core";
import {Link} from "react-router-dom";
import "../../App.css";

function Footer() {
    return (
        <div>
            <div className="black padding-vertical-huge">
                <Hidden mdDown={true}>
                    <Container>
                        <Grid container={true} spacing={5} justify="center" alignItems="center" direction="column">
                            <Grid container={true} spacing={4} justify="center">
                                <Grid item={true}>

                                    <p>
                                        <Link to="/"
                                              className={`nav-link dark-grey-text margin-vertical-small font-size-small uppercase`}>
                                            Home
                                        </Link>
                                    </p>
                                </Grid>
                                <Grid item={true}>
                                    <p>
                                        <a
                                            href="https://shop.icerock.com"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className={` center-align margin-vertical-small font-size-small nav-link dark-grey-text uppercase`}>
                                            Shop
                                        </a>
                                    </p>
                                </Grid>
                                <Grid item={true}>
                                    <p>
                                        <Link to="/whatsnew"
                                              className={` dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                            What's New
                                        </Link>
                                    </p>
                                </Grid>
                                <Grid item={true}>
                                    <p>
                                        <Link to="/products"
                                              className={`nav-link dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                            Products
                                        </Link>
                                    </p>
                                </Grid>
                                <Grid item={true}>
                                    <p>
                                        <Link to="/operations"
                                              className={`nav-link dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                            Operations
                                        </Link>
                                    </p>
                                </Grid>
                            </Grid>
                            <Grid container={true} spacing={4} justify="center">
                                <Grid item={true}>
                                    <div className="social-links-container">
                                        <div className="margin-vertical-medium social-link-container">
                                            <a className="social-link uppercase padding-vertical-small"
                                               href="https://linkedin.com/stanleyhayford" target="_blank"
                                               rel="noreferrer noopener">
                                                <img width={30} height={30}
                                                     src={`${process.env.PUBLIC_URL}/images/linkedin.svg`}
                                                     alt="Linkedin logo"/>
                                            </a>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item={true}>
                                    <div className="margin-vertical-medium social-link-container">
                                        <a className="social-link uppercase padding-vertical-small" href="https://"
                                           target="_blank"
                                           rel="noreferrer noopener">
                                            <img width={30} height={30}
                                                 src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
                                                 alt="Facebook logo"/>
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item={true}>

                                    <div className="margin-vertical-medium social-link-container">
                                        <a className="social-link uppercase padding-vertical-small" href="https://"
                                           target="_blank"
                                           rel="noreferrer noopener">
                                            <img width={30} height={30}
                                                 src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
                                                 alt="Twitter logo"/>
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item={true}>

                                    <div className="margin-vertical-medium social-link-container">
                                        <a className="social-link uppercase padding-vertical-small" href="https://"
                                           target="_blank"
                                           rel="noreferrer noopener">
                                            <img width={30} height={30}
                                                 src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                                                 alt="Instagram logo"/>
                                        </a>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Hidden>

                <Hidden lgUp={true}>
                    <Container>
                        <Grid container={true} spacing={4} justify="center">
                            <Grid item={true} xs={12} md={4}>
                                <div>
                                    <p className="uppercase grey-text-light">Main Links</p>

                                    <p>
                                        <Link to="/"
                                              className={`nav-link dark-grey-text margin-vertical-small font-size-small uppercase`}>
                                            Home
                                        </Link>
                                    </p>

                                    <p>
                                        <a
                                            href="https://shop.icerock.com"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className={` center-align margin-vertical-small font-size-small nav-link dark-grey-text uppercase`}>
                                            Shop
                                        </a>
                                    </p>

                                    <p>
                                        <Link to="/whats-new"
                                              className={` dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                            What's New
                                        </Link>
                                    </p>

                                    <p>
                                        <Link to="/products"
                                              className={`nav-link dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                            Products
                                        </Link>
                                    </p>

                                    <p>
                                        <Link to="/operations"
                                              className={`nav-link dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                            Operations
                                        </Link>
                                    </p>

                                    <p>
                                        <Link to="/about"
                                              className={`nav-link dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                            About
                                        </Link>
                                    </p>
                                </div>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <p className="uppercase grey-text-light">Follow us on social media</p>

                                <div className="social-links-container">
                                    <div className="margin-vertical-medium social-link-container">
                                        <a className="social-link uppercase padding-vertical-small"
                                           href="https://linkedin.com/stanleyhayford" target="_blank"
                                           rel="noreferrer noopener">
                                            <img width={30} height={30}
                                                 src={`${process.env.PUBLIC_URL}/images/linkedin.svg`}
                                                 alt="Linkedin logo"/>
                                            <span className="platform dark-grey-text font-size-small">LinkedIn</span>
                                        </a>
                                    </div>

                                    <div className="margin-vertical-medium social-link-container">
                                        <a className="social-link uppercase padding-vertical-small" href="https://"
                                           target="_blank"
                                           rel="noreferrer noopener">
                                            <img width={30} height={30}
                                                 src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
                                                 alt="Facebook logo"/>
                                            <span className="platform dark-grey-text font-size-small">Facebook</span>
                                        </a>
                                    </div>

                                    <div className="margin-vertical-medium social-link-container">
                                        <a className="social-link uppercase padding-vertical-small" href="https://"
                                           target="_blank"
                                           rel="noreferrer noopener">
                                            <img width={30} height={30}
                                                 src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
                                                 alt="Twitter logo"/>
                                            <span className="platform dark-grey-text font-size-small">Twitter</span>
                                        </a>
                                    </div>

                                    <div className="margin-vertical-medium social-link-container">
                                        <a className="social-link uppercase padding-vertical-small" href="https://"
                                           target="_blank"
                                           rel="noreferrer noopener">
                                            <img width={30} height={30}
                                                 src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                                                 alt="Instagram logo"/>
                                            <span className="platform dark-grey-text font-size-small">Instagram</span>
                                        </a>
                                    </div>
                                </div>

                            </Grid>
                        </Grid>
                    </Container>
                </Hidden>
            </div>

            <div className="padding-vertical-large black">
                <Container>
                    <p className="text-align-center footer-info font-size-tiny grey-light-text">
                        For more information contact Ice Rock.
                        <span className="separator">|</span>
                        <span className="email">info@icerock.org</span>
                        <span className="separator">|</span>
                        <span className="contact">+233270048319</span>
                    </p>
                    <p className="text-align-center grey-light-text developer font-size-tiny">
                        All Rights Reserved &copy; 2020 Developed and Managed by Olympus
                    </p>
                    <p className="text-align-center grey-light-text developer font-size-small">
                        Icons made by
                        <a
                            className="nav-link blue-text padding-horizontal-medium"
                            href="http://www.freepik.com/"
                            title="Freepik">Freepik</a> from
                        <a
                            className="nav-link blue-text padding-horizontal-medium"
                            href="https://www.flaticon.com/"
                            title="Flaticon"> www.flaticon.com</a>
                    </p>
                </Container>
            </div>
        </div>
    )
}

export default Footer;
