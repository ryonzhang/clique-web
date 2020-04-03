import React from "react";
// import {Pager} from "react-bootstrap";

import ReactPageScroller from "react-page-scroller";
import Welcome from "../welcome/Welcome";
import Starter from "../starter/Starter";
import StarterMobile from "../starter_mobile/StarterMobile";
import Button from "@material-ui/core/Button";
import "./home.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Mision from "../vision/Vision";
import Registrar from "../registrar/Registrar";
import {ButtonGroup} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";
import mission from "../assets/mission.png";
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}



const useStyles = makeStyles(theme => ({
    white:{
        color:'white',
        transition:'color 1s'
    },
    black:{
        transition:'color 1s',
        color:'black',
    }
}));


export  default function Home(){
    const [currentPage, setCurrrentPage] = React.useState(0);
    const [fontStyle, setFontStyle] = React.useState('black');

    const handlePageChange = number => {
       setCurrrentPage( number ); // set currentPage number, to reset it from the previous selected.
        if(number==1){
            setFontStyle('white');
        }else{
            setFontStyle('black');
        }
    };
    const firstPage = () => {
        setCurrrentPage( 0 ); // set currentPage number, to reset it from the previous selected.
    };
    const secondPage = () => {
        setCurrrentPage( 1 );// set currentPage number, to reset it from the previous selected.
    };
    const thirdPage = () => {
        setCurrrentPage( 2 ); // set currentPage number, to reset it from the previous selected.
    };

    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="absolute" color={"transparent"}>
                <Toolbar >
                    <Typography variant="h6" color="inherit" noWrap>
                        <Button onClick={firstPage} size={'large'}  className={classes[fontStyle]}><b>Clique</b> &nbsp;</Button>
                    </Typography>

                    <Button color="disabled" eventKey={1} onClick={secondPage} className={classes[fontStyle]}>Our Mission</Button>
                    <Button color="disabled" eventKey={2} onClick={thirdPage}  className={classes[fontStyle]}>Why Clique</Button>
                </Toolbar>
            </AppBar>
            <ReactPageScroller
                pageOnChange={handlePageChange}
                customPageNumber={currentPage}
            >
                <Starter />
                <Mision />
                <Registrar />
            </ReactPageScroller>
        </React.Fragment>
    );
}
