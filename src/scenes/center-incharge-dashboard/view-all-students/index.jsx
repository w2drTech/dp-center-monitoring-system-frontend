import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { mockDataTeam } from "../../../data/mockData";
import Modal from "@mui/material/Modal";
import { useState } from "react";

import * as Yup from "yup";
import { Formik } from "formik";
const ViewAllStudents = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const initialValues = {
    email: "",
    name: "",
    phone: "",
    guardianPhone: "",
    province: "",
    district: "",
    center: "",
    address: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format: Enter a valid specific email address"
      )
      .required("*Required field"),
    name: Yup.string().required("Name is required").trim(),
    center: Yup.string().required("Center name is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^0\d{9}$/, "Invalid phone number. 0xxxxxxxxx")
      .trim(),
    guardianPhone: Yup.string()
      .required("Guardian phone number is required")
      .matches(/^0\d{9}$/, "Invalid phone number. 0xxxxxxxxx")
      .trim(),
    district: Yup.string().required("District is required"),
    province: Yup.string().required("Province is required"),
    address: Yup.string().required("Address is required").trim(),
  });
  const handleUpdate = (id) => {
    // Handle update logic here
    const data = mockDataTeam[id];
    setData(data)
    handleOpen();
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };
  const columns = [
    { field: "name", headerName: "Name", flex: 4 },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 3,
      cellClassName: "name-column--cell",
    },
    {
      field: "guardianPhone",
      headerName: "Guardian Phone Number",
      flex: 3,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "last",
      headerName: "Last Active Date",
      flex: 4,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "action",
      headerName: "Action",
      flex: 2,
      headerAlign: "left",
      align: "left",
      renderCell: (params) => (
        <Box>
          <Button
            onClick={() => handleUpdate(params.id)}
            variant="contained"
            style={{ backgroundColor: "#4cceac", color: "black" }}
          >
            Update
          </Button>
        </Box>
      ),
    },
  ];
  return (
    <Box m="0 20px">
      <Box
        display="grid"
        height="78vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize:"15px"
          },
          "& .name-column--cell": {
            color: colors.primary[100],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            border: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.redAccent[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              // try {
              //   console.log()
              //   const response = await registerStudent(values);
              //   if (response.data.o_sql_msg === "success") {
              //     toast.success(
              //       "You are successfully registered for DP education"
              //     );
              //     navigate('/');
              //   } else if (
              //     response.data.o_sql_msg === "STUDENT ALREADY INSERT"
              //   ) {
              //     toast.error("This email is already in use");
              //   }
              // } catch (ex) {
              //   toast.error("Error fetching data");
              // }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              isValid,
              handleBlur,
              handleChange,
              resetForm,
            }) => (
              <Box noValidate sx={{ mt: 1 }}>
                <form onSubmit={handleSubmit}>
                  <InputLabel htmlFor="email">Email address</InputLabel>
                  <TextField
                    margin="normal"
                    fullWidth
                    variant="filled"
                    id="email"
                    label={data.name}
                    name="email"
                    autoComplete="none"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email.toLocaleLowerCase()}
                  />
                  <InputLabel margin="0px" htmlFor="name">
                    Name
                  </InputLabel>
                  <TextField
                    margin="normal"
                    variant="filled"
                    fullWidth
                    name="name"
                    label="Name"
                    type="text"
                    id="name"
                    autoComplete="none"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <InputLabel htmlFor="phone">Phone Number</InputLabel>
                      <TextField
                        margin="normal"
                        variant="filled"
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        type="text"
                        id="phone"
                        autoComplete="none"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel htmlFor="guardianPhone">
                        Guardian Phone Number
                      </InputLabel>
                      <TextField
                        margin="normal"
                        variant="filled"
                        fullWidth
                        name="guardianPhone"
                        label="Guardian Phone Number"
                        type="text"
                        id="guardianPhone"
                        autoComplete="none"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.guardianPhone}

                      />
                    </Grid>
                  </Grid>
                  <InputLabel htmlFor="address">
                    Address
                  </InputLabel>
                  <TextField
                    margin="normal"
                    variant="filled"
                    fullWidth
                    name="address"
                    label="Address"
                    type="address"
                    id="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}

                  />
                  <Box display="flex" justifyContent="center" marginTop="10px">
                    <Button
                      variant="contained"
                      type="submit"
                      style={{
                        backgroundColor: "red",
                        fontSize: "15px",
                        margin: "10px",
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      style={{
                        backgroundColor: "white",
                        fontSize: "15px",
                        margin: "10px",
                        color: "red",
                      }}
                      onClick={resetForm}
                    >
                      Reset
                    </Button>
                  </Box>
                </form>
              </Box>
            )}
          </Formik>
        </Box>
      </Modal>
    </Box>
  );
};

export default ViewAllStudents;
