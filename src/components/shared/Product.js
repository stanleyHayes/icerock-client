import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Divider} from "@material-ui/core";
import {Info} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

const Product = ({product}) => {

    const useStyles = makeStyles(theme => {
        return {
            button: {
                fontWeight: "bold",
                fontFamily: "Poppins",
                color: "darkblue"
            },
            icon: {
                color: "darkblue"
            }
        }
    });

    const classes = useStyles();

    const {price, summary, name, image, status} = product;
    return (
        <Card raised={true} elevation={1} variant="elevation">
            <CardMedia component="img" src={image} />
            <CardContent>
                <p className="font-size-small grey-text uppercase font-weight-bold">{status}</p>
                <p className="uppercase font-weight-bold grey-text font-size-large">{name}</p>
                <p className="uppercase font-weight-bold grey-text font-size-medium">{price}GHS</p>
                <p className="font-size-small grey-text">{summary}</p>
            </CardContent>
            <Divider variant="fullWidth" />
            <CardActions>
                <Button className={classes.button} fullWidth={true} endIcon={<Info />} size="small">
                    <Link className="nav-link" to={`/products/${name}`}>
                        View Product Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default Product;
