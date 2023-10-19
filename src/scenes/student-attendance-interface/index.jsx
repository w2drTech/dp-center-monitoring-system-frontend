import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import "./style.css";
import FormHelperText from "@mui/material/FormHelperText";
import studentAttendanceService from "../../services/studentAttendanceService";
import Modal from "@mui/material/Modal";

const validationSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  pcId: yup
    .string()
    //.matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
});

const initialValues = {
  email: "",
  pcId: "",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const handleFormSubmit = async (values, { setSubmitting }) => {};

function Carousel({ images }) {
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

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
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
                <Button
                          variant="contained"
                          type="submit"
                          style={{
                            top:0,
                            position:"absolute",
                            backgroundColor: "red",
                            fontSize: "15px",
                            marginBottom: "10px",
                            margin:'10px',
                            width:"100px"
                          }}
                        >Login</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h2"
                      component="h2"
                    >
                      HELLO.. User
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      variant="h3"
                      sx={{ mt: 2 }}
                    >
                      Welcome to DP Coding Center - 01
                    </Typography>
                    <Box display="flex" justifyContent="space-between" marginTop="10px">
                      <Button
                        variant="contained"
                        type="submit"
                        style={{
                          backgroundColor: "red",
                          fontSize: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        It's me
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        style={{
                          backgroundColor: "white",
                          fontSize: "15px",
                          marginBottom: "10px",
                          color:"red"
                        }}
                        onClick={handleClose}
                      >
                        Not me
                      </Button>
                    </Box>
                  </Box>
                </Modal>
                <Formik
                  onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(values);
                    try {
                      // await studentAttendanceService.getStudent(
                      //   values.email,
                      //   values.pcId
                      // );
                      console.log(values);
                      handleOpen();
                    } catch (ex) {}
                  }}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Box
                        display="-ms-flexbox"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ backgroundColor: "rgba(211, 205, 208, 0.36)" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "20px",
                            textAlign: "center",
                            paddingTop: "15px",
                          }}
                        >
                          Attendance Marking Form
                        </Typography>
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Enter your outlook email address"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          name="email"
                          error={!!touched.email && !!errors.email}
                          helperText={touched.email && errors.email}
                          sx={{
                            mt: "15px",
                            mb: "15px",
                            color: "black",
                            fontSize: "50px",
                            padding: "10px",
                          }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Enter your pc id"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.pcId}
                          name="pcId"
                          error={!!touched.pcId && !!errors.pcId}
                          helperText={touched.pcId && errors.pcId}
                          sx={{ padding: "10px" }}
                        />
                        <Box
                          marginTop="10px"
                          display="flex"
                          justifyContent="center"
                        >
                          <Button
                            variant="contained"
                            type="submit"
                            style={{
                              backgroundColor: "red",
                              fontSize: "15px",
                              marginBottom: "10px",
                            }}
                          >
                            Let's Code
                          </Button>
                        </Box>
                      </Box>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
