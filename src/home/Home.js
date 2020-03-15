import React from "react";
// import {Pager} from "react-bootstrap";

import ReactPageScroller from "react-page-scroller";
import Welcome from "../welcome/Welcome";
import Starter from "../starter/Starter";
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





export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currentPage: null };
    }

    handlePageChange = number => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };
    firstPage = () => {
        this.setState({ currentPage: 0 }); // set currentPage number, to reset it from the previous selected.
    };
    secondPage = () => {
        this.setState({ currentPage: 1 }); // set currentPage number, to reset it from the previous selected.
    };
    thirdPage = () => {
        this.setState({ currentPage: 2 }); // set currentPage number, to reset it from the previous selected.
    };

    render() {
        return (
            <React.Fragment >
                <CssBaseline />
                <AppBar position="absolute" color={"transparent"}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            <Button onClick={this.firstPage} size={'large'}><b>Clique</b> &nbsp;</Button>
                        </Typography>

                        <Button color="disabled" eventKey={1} onClick={this.secondPage}>Our Mission</Button>
                        <Button color="disabled" eventKey={2} onClick={this.thirdPage}>Why Clique</Button>
                    </Toolbar>
                </AppBar>
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    customPageNumber={this.state.currentPage}
                >
                    <Starter />
                    <Mision />
                    <Registrar />
                </ReactPageScroller>

            </React.Fragment>
        );
    }
}
