import React, {useState, useContext, useEffect} from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core/styles';
import CarouselData from '../CarouselData';
import { Button, Typography, Paper } from '@material-ui/core';
import {UIStoreContext} from '../../../index';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
    root: {
        overflowY: 'hidden',
        maxWidth: 760,
        height: 550,
        position: "relative"
    },
    slide: {
        height: 760,
        minWidth: 360,
        
    },
    card: {
        minHeight: 160,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 50,
        "& h1": {
            fontSize: 18,
            color: "#061e37",
            fontFamily: "RalewayBold"
        },
        "& p": {
            fontSize: 15,
            color: "#78909c",
            fontFamily: "RalewayItalic",
            lineHeight: "25px",
            marginTop: 11
        }
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        overflow: "hidden"
    },
    textField: {
        minHeight: "100%",
        maxWidth: 650,
        padding: 30,
        boxShadow: "0px 3px 9px 0px rgba(0, 0, 0, 0.2)",
    },
    nextSlide: {
        top: 32
    },
    prevSlide: {
        bottom: 32
    },
    controls: {
        "& Button": {
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            background: "none",
            border: "none",
            fontSize: 30,
            color: "#fff"
        }
    }
}));

const Carousel = props => {
    const [index, setIndex] = useState(0);
    const {isMobileView} = useContext(UIStoreContext);

    const classes = useStyles();
    const carouselBodyReference = React.createRef();

    const nextSlide = () => {
        index == carouselBodyReference.current.props.children.length - 1 
        ? setIndex(0)
        : setIndex(index + 1)
    }
    const prevSlide = () => {
        index == 0
        ? setIndex(carouselBodyReference.current.props.children.length - 1)
        : setIndex(index - 1)
    }

    

    return(
        <div className={classes.root}>
            <AutoPlaySwipeableViews
              ref={carouselBodyReference}
              containerStyle={{
                height: 760,
                marginTop: 85,
              }}
              axis='y'
              index={index}
            >
                {CarouselData.map((item, index) => (
                    <div key={index} className={classes.slide}>
                        {item.map((item, index) => (
                            <div 
                              key={item.id} 
                              className={classes.card}
                              style={{
                                  width: isMobileView ? "100%" : 760
                              }}
                            >
                                <div 
                                  className={classes.avatar}
                                  style={{display: isMobileView ? "none" : "block"}}
                                >
                                    <img src={item.avatar} alt=""/>
                                </div>
                                <Paper className={classes.textField}>
                                    <Typography
                                      variant="h1"
                                    >
                                        {item.username}
                                    </Typography>
                                    <Typography>
                                        {item.text}
                                    </Typography>
                                </Paper>
                            </div>
                        ))}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <div className={classes.controls}>
                <Button
                  className={classes.nextSlide} 
                  onClick={e => nextSlide()}
                >
                        <i className="fas fa-angle-up"></i>
                    </Button>
                <Button 
                  className={classes.prevSlide} 
                  onClick={e => prevSlide()}
                >
                    <i className="fas fa-angle-down"></i>
                </Button>
            </div>
        </div>
    )
}

export default Carousel;