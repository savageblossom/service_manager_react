import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AccordionData from '../AccordionData';
import {UIStoreContext} from '../../../index';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "42px",
    },
    services__accordion: {
      maxWidth: "800px",
      minHeight: "56px",
      cursor: "pointer",
      boxShadow: "0 4px 8px 0 rgba(0,0,0, 0.1)",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginBottom: "15px",
      position: "static"
    },
    label: {
      fontFamily: "RalewayBold",
      textTransform: "uppercase",
      fontSize: "15px",
      marginLeft: "13px",
      "& span": {
        marginRight: "27px"
      }
    },
    content: {
      padding: "8px 25px 25px 25px",
    },
    contentImg : {
      flexShrink: 0,
      maxHeight: "155px"
    },
    contentText: {
      fontFamily: "RalewayRegular",
      fontSize: "15px",
      textAlign: "left",
      marginLeft: "25px",
      lineHeight: "25px"
    }
}));

export default function ControlledAccordions() {
  const {isMobileView} = useContext(UIStoreContext);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
        {AccordionData.map((item, index) => (

            <Accordion 
               expanded={expanded === `panel${index}`} 
               onChange={handleChange(`panel${index}`)}
               key={index}
               className={classes.services__accordion}
            >

                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                    <Typography className={classes.label}>
                        <span>
                            <i className={item.icon}></i>
                        </span>
                        {item.label}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails 
                  className={classes.content} 
                  style={{
                    flexWrap: isMobileView ? "wrap" : "nowrap",
                    justifyContent: isMobileView ? "center" : "flex-start"
                  }}
                >
                    <img 
                      className={classes.contentImg}
                      src={item.content.image} 
                    />
                    <Typography
                      className={classes.contentText}
                    >
                      {item.content.text}
                    </Typography>
                </AccordionDetails>

            </Accordion>

        ))}
    </div>
  );
}