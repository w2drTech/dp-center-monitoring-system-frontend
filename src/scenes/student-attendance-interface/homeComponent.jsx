import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PhotoIcon from "@mui/icons-material/Photo"; // Replace with your desired icon

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const socialMediaIcons = [
  {
    name: "Facebook",
    icon: `${faCoffee}`,
    link: "https://www.facebook.com",
  },
  { name: "Twitter", icon: "fab fa-twitter", link: "https://www.twitter.com" },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com",
  },
];

const HomeComponent = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 10000);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index == current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt="" />
              <div className="card_overlay">
              <Typography
                          variant="contained"
                          style={{
                            top:0,
                            position:"absolute",
                            fontSize: "15px",
                            marginBottom: "10px",
                            margin:'10px',
                            width:"100px"
                          }}
                        >Haritha</Typography>
                <Card
                  sx={{
                    minWidth: 500,
                    backgroundColor: "rgba(211, 205, 208, 0.36)",
                  }}
                >
                  <CardContent>
                    <Button
                          variant="contained"
                          type="submit"
                          style={{
                            display:"flex",
                            position:"absolute",
                            right:"30px",
                            backgroundColor: "black",
                            fontSize: "15px",
                            marginBottom: "10px",
                            margin:'10px',
                            width:"100px"
                          }}
                        >Logout</Button>
                    <Typography
                      sx={{ textAlign: "center" }}
                      color="text.secondary"
                      gutterBottom
                      variant="h1"
                    >
                      Useful links
                    </Typography>
                  </CardContent>
                  <Box>
                    <CardActions sx={{ justifyContent: "center" }}>
                      <Box display="grid" >
                        <Box marginBottom="10px" >
                          <Button variant="contained" color="error" sx={{width:"300px", height:"70px"}}>
                            
                            <IconButton sx={{display:"flex"}}>
                              <img
                                src="../../../assets/dpcoding.png"
                                alt="DP coding logo"
                                width="100"
                                height="50"
                              />
                            </IconButton>
                            <Typography variant="h4">
                              To DP Coding 
                            </Typography>
                          </Button>
                        </Box>
                        <Box marginBottom="10px">
                          <Button variant="contained" color="error" sx={{width:"300px", height:"70px"}}>
                            <IconButton>
                              <img
                                src="../../../assets/outlooklogo.png"
                                alt="Your Image"
                                width="50"
                                height="50"
                              />
                            </IconButton>
                            <Typography variant="h4">
                              To Outlook Website
                            </Typography>
                          </Button>
                        </Box>
                        <Box>
                          <Button variant="contained" color="error" sx={{width:"300px", height:"70px"}}>
                            <IconButton>
                              <img
                                src="../../../assets/code.png"
                                alt="Your Image"
                                width="50"
                                height="50"
                              />
                            </IconButton>
                            <Typography variant="h4">
                              To code.org website 
                            </Typography>
                          </Button>
                        </Box>
                      </Box>
                    </CardActions>
                  </Box>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeComponent;
