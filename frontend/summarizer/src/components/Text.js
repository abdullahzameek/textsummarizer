import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';


import axios from 'axios';

const styles = theme => ({

    inputbox: {
        width: "100%",
        maxWidth: "50vw",
        position : "absolute",

    },
    preview: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background: '#2E3B55',
        color: 'white',
        '&:hover': {
            background: '#586481',
        },
    },
    deleteB: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background: '#93160d',
        color: 'white',
        '&:hover': {
            background: '#ca4b35',
        }


    },
    container: {
        margin: 'auto',
        maxWidth: '1400px'
    },
})


class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review : '',
            summary : ''
        }
      
}

    
    allProvided = () => {
        const missing = []
        if (this.state.review=== ' ' && this.props.location.state.id.info.review === " ") {
            missing.push('Review')
        }
        
        if (missing.length !== 0) {
            var string = ''
            var i
            for (i = 0; i < missing.length; i++) {
                string = string + ' ' + missing[i]
            }
            alert(`This cannot be blank!: ${string}`)
        }
        else {
            return true
        }

    }
    handlePost = () => {
        console.log("here is the review")
        console.log(this.state.review)
        let reviewJSON = {
            "text": this.state.review,
        };


        axios.post(`https://summarizeruwu.herokuapp.com/summarize`,reviewJSON)
        .then(response => {
            console.log(response)
            console.log(response.data)
            this.setState({
                summary: response.data
            })
            sessionStorage.setItem("summary", response.data) 
        })
        .catch(error => {
            console.log("ERROR in Category loading ", error)
        }) //update with correct string
    console.log(this.state.summary)
    }

    getPublishButton = (classes) => {
        return <Button onClick={this.handlePost} className={classes.preview}> Get Summary </Button>
    }

    returnTheme = () => {
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#2E3B55',
                },
            },
        });
        return theme
    }

    showButtons = (classes) => {
            return <div>
                {this.getPublishButton(classes)}
            </div>

    }

    uploadFile = () => {

    }

    showTitle = () => {
            return <Typography variant='h5' style={{ marginBottom: '0%', marginTop: '1%' }}> Enter Text to Summarize Here! </Typography>
        }
    
    showUpload = () => {
            return <Typography variant='h5' style={{ marginBottom: '0%', marginTop: '1%' }}> Upload a file </Typography>
    }

    handleChange = (e) => {
        this.setState({
            review: e.target.value
        })
    }
    render() {
        const { classes } = this.props
        // if (this.state.redirect && (!this.state.is_admin_window)) {
        //     return (<Redirect to={`/my-articles`} />)
        // }
        return (
            <div >
                {this.showTitle()}
                <Container className={classes.container}>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={5}>
                            <ThemeProvider theme={this.returnTheme()}>
                                <TextField
                                    id="review"
                                    label="Text"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    //defaultValue={(this.state.is_edit_window || this.state.is_admin_window) ? this.showDefault().articleTitle : ''}
                                />                               
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                </Container>
                <br/>
                <br/>
                <br/>
                {this.showButtons(classes)}
            </div >
        );
    }
}

export default withStyles(styles)(Text); 
