import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Card, CardContent, TextField, makeStyles, Button} from "@material-ui/core";

function AboutPage() {

    const useStyles = makeStyles(theme => {
        return {
            card: {
                minHeight: 300
            },
            button: {
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 16,
                backgroundColor: "purple",
                color: "white"
            },

        }
    })

    const classes = useStyles();

    const [contact, setContact] = useState({});
    const [error, setError] = useState({});

    function handleMessageChange(event) {
        setContact({...contact, [event.target.name]: event.target.value});
    }

    const {name, email, subject, message, phone} = contact;

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) {
            setError({...error, name: "Name required"});
            return;
        } else {
            setError({...error, name: null});
        }

        if (!email) {
            setError({...error, email: "Email required"});
            return;
        } else {
            setError({...error, email: null});
        }

        if (!subject) {
            setError({...error, subject: "Subject required"});
            return;
        } else {
            setError({...error, subject: null});
        }

        if (!message) {
            setError({...error, message: "Message required"});
            return;
        } else {
            setError({...error, message: null});
        }
        console.log(contact);
    }

    return (
        <Layout>
            <section>
                <div className="about-header">
                    <p className="white-text responsive-text uppercase">
                        Get to Know US
                    </p>
                </div>
            </section>
            <section className="light-background section padding-vertical-huge">
                <Container>
                    <p className="text-align-center font-weight-bold font-size-huge">Who We Are</p>
                    <Grid container={true} justify="center">
                        <Grid item={true} xs={12} md={8}>
                            <p className="text font-size-small text-align-justify">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                            </p>
                            <p className="text font-size-small text-align-justify">
                                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto
                                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut
                                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                nesciunt.
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit,
                                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                                quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                suscipit
                                laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                reprehenderit qui
                                in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                                fugiat
                                quo voluptas nulla pariatur?"
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="section padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={4} justify="center">
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
                                        <p className="text-align-center font-weight-bold font-size-large">Our Vibe</p>
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

                        <Grid item={true} xs={12} md={5}>
                            <div className="shadow">
                                <Card elevation={0} variant="outlined" raised={false}>
                                    <CardContent>
                                        <p className="text-align-center font-weight-bold font-size-large">Our
                                            Strategy</p>
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

            <section className="padding-vertical-huge light-background">
                <Container>
                    <p className="text-align-center font-weight-bold font-size-large">Connect With Us</p>
                    <Grid container={true} spacing={4} justify="center">
                        <Grid item={true} xs={12} md={4}>
                            <div className="shadow">
                                <Card elevation={0} variant="outlined" raised={false}>
                                    <CardContent>
                                        <div className="text-align-center">
                                            <img width={25} height={25} src={`${process.env.PUBLIC_URL}/images/pin.svg`}
                                                 alt="Location Logo"/>
                                        </div>
                                        <p className="text-align-center font-weight-bold font-size-small uppercase">Visit
                                            Us</p>
                                        <p className="font-size-medium font-weight-bold text-align-center">
                                            East Legon, Accra Ghana
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <div className="shadow">
                                <Card elevation={0} variant="outlined" raised={false}>
                                    <CardContent>
                                        <div className="text-align-center">
                                            <img width={25} height={25}
                                                 src={`${process.env.PUBLIC_URL}/images/mail.svg`} alt="Email Logo"/>
                                        </div>
                                        <p className="text-align-center font-weight-bold font-size-small uppercase">Email
                                            Us</p>
                                        <p className="font-size-medium font-weight-bold text-align-center">
                                            info@icerock.org
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <div className="shadow">
                                <Card elevation={0} variant="outlined" raised={false}>
                                    <CardContent>
                                        <div className="text-align-center">
                                            <img width={25} height={25}
                                                 src={`${process.env.PUBLIC_URL}/images/phone.svg`} alt="Phone Logo"/>
                                        </div>
                                        <p className="text-align-center font-weight-bold font-size-small uppercase">Call
                                            Us</p>
                                        <p className="font-size-medium font-weight-bold text-align-center">
                                            +2332777777
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            </section>

            <section className="padding-vertical-huge">
                <Container>
                    <Grid container={true} justify="center">
                        <Grid item={true} xs={12}>
                            <p className="font-weight-bold font-size-large center-align">Follow us on social media</p>
                        </Grid>
                        <Grid item={true} xs={2} md={1}>

                            <a href="https://" target="_blank" rel="noreferrer noopener">
                                <img width={50} height={50}
                                     src={`${process.env.PUBLIC_URL}/images/linkedin.svg`}
                                     alt="Linkedin logo"/>
                            </a>

                        </Grid>
                        <Grid item={true} xs={2} md={1}>
                            <a href="https://" target="_blank" rel="noreferrer noopener">
                                <img width={50} height={50}
                                     src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
                                     alt="Facebook logo"/>
                            </a>
                        </Grid>
                        <Grid item={true} xs={2} md={1}>
                            <a href="https://" target="_blank" rel="noreferrer noopener">
                                <img width={50} height={50} src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
                                     alt="Twitter logo"/>
                            </a>
                        </Grid>
                        <Grid item={true} xs={2} md={1}>
                            <a href="https://" target="_blank" rel="noreferrer noopener">
                                <img width={50} height={50}
                                     src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                                     alt="Instagram logo"/>
                            </a>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="light-background padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={2} justify="center">
                        <Grid item={true} xs={12}>
                            <p className="font-weight-bold font-size-large text-align-center">Send us a
                                message</p>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <div className="shadow">
                                <Card elevation={0} raised={false} variant={"outlined"}>
                                    <CardContent>
                                        <p>Send us a message</p>
                                        <TextField
                                            fullWidth={true}
                                            type="name"
                                            required={true}
                                            name="name"
                                            margin="dense"
                                            onChange={handleMessageChange}
                                            label="Name"
                                            error={Boolean(error.name)}
                                            helperText={error.name}
                                            value={name}
                                            variant="outlined"
                                        />

                                        <TextField
                                            fullWidth={true}
                                            type="email"
                                            required={true}
                                            name="email"
                                            margin="dense"
                                            onChange={handleMessageChange}
                                            label="Email"
                                            error={Boolean(error.email)}
                                            helperText={error.email}
                                            value={email}
                                            variant="outlined"
                                        />

                                        <TextField
                                            fullWidth={true}
                                            type="text"
                                            required={true}
                                            name="subject"
                                            margin="dense"
                                            onChange={handleMessageChange}
                                            label="Subject"
                                            error={Boolean(error.subject)}
                                            helperText={error.subject}
                                            value={subject}
                                            variant="outlined"
                                        />

                                        <TextField
                                            fullWidth={true}
                                            type="phone"
                                            name="phone"
                                            margin="dense"
                                            onChange={handleMessageChange}
                                            label="Phone"
                                            value={phone}
                                            variant="outlined"
                                        />

                                        <TextField
                                            fullWidth={true}
                                            type="text"
                                            required={true}
                                            name="message"
                                            margin="dense"
                                            onChange={handleMessageChange}
                                            label="Message"
                                            multiline={true}
                                            rows={5}
                                            error={Boolean(error.message)}
                                            helperText={error.message}
                                            value={message}
                                            variant="outlined"
                                        />

                                        <Button
                                            fullWidth={true}
                                            className={classes.button}
                                            onClick={handleSubmit}
                                            variant="outlined"
                                            size="large">
                                            Send Message
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </Layout>
    )
}

export default AboutPage;
