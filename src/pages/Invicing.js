import Box from "@mui/material/Box";
import {
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DownloadIcon from "@mui/icons-material/Download";
import ListAltIcon from "@mui/icons-material/ListAlt";

import * as React from "react";

import { Link } from "react-router-dom";

import Sidenav from "../components/Sidenav";

const StyledSelect = styled(Select)(({ theme }) => ({
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#b3b9c5", // Light gray border
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#25293f", // Blue border on focus
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#1070C9", // Blue text color
}));

export default function Invicing() {
  // table

  const [orderBy, setOrderBy] = React.useState("First Name");
  const [itemsPerPage, setItemsPerPage] = React.useState(20);

  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  return (
    <div>
      <div className="bgcolor" style={{ backgroundColor: "#fff" }}>
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3, mb: 10 }}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              marginTop="-80px"
            >
              <Grid item>
                <h2 style={{ fontWeight: "600", color: "#25293f" }}>
                  Invicing
                </h2>
              </Grid>

              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    color: "#12aed2",
                  }}
                >
                  <FileCopyIcon />
                  <ListAltIcon />
                  <DownloadIcon />
                </Box>
              </Grid>
              <Divider style={{ width: "100%", margin: "20px -25px" }} />
            </Grid>

            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  placeholder="Search child's name"
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ color: "#12aed2" }} />,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel>2024</InputLabel>

                  <StyledSelect
                    label="2024"
                    defaultValue="2024"
                    renderValue={(selected) => selected}
                  >
                    <MenuItem value="2024">2024</MenuItem>
                    <MenuItem value="2025">2025</MenuItem>
                  </StyledSelect>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel>All</InputLabel>
                  <StyledSelect
                    label="All"
                    defaultValue="All"
                    renderValue={(selected) => selected}
                  >
                    <MenuItem value="All">All</MenuItem>
                  </StyledSelect>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Invoice Status</InputLabel>
                  <StyledSelect
                    label="Invoice Status"
                    defaultValue="Invoice Status"
                    renderValue={(selected) => selected}
                  >
                    <MenuItem value="Invoice Status">Invoice Status</MenuItem>
                    <MenuItem value="Draft">Draft</MenuItem>
                    <MenuItem value="Sent">Sent</MenuItem>
                    <MenuItem value="Paid">Paid</MenuItem>
                    <MenuItem value="Overdue">Overdue</MenuItem>
                    <MenuItem value="Refunded">Refunded</MenuItem>
                    <MenuItem value="Void">Void</MenuItem>
                  </StyledSelect>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* table */}

        <TableContainer
          style={{
            width: "80%",
            marginLeft: "250px",
            height: "500px",
            marginTop: "-100px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px",
            }}
          >
            <h3>Order By</h3>
            <FormControl variant="standard" style={{ marginRight: "800px" }}>
              <Select value={orderBy} onChange={handleOrderByChange}>
                <MenuItem value="First Name">First Name</MenuItem>
                <MenuItem value="Last Name">Last Name</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>

            <FormControl variant="standard">
              <Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Table style={{ border: "2px solid grey" }}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell>Children</TableCell>
                <TableCell>Total Attendance</TableCell>
                <TableCell>Total Extras</TableCell>
                <TableCell>Funding</TableCell>
                <TableCell>Payments</TableCell>
                <TableCell>Outstanding</TableCell>
                <TableCell>Next Due Date</TableCell>
                <TableCell>Account Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Add TableRow components with TableCell components here */}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ padding: 2, margin: 2 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            style={{
              marginTop: "-350px",
              marginLeft: "300px",
              color: "rgb(180 180 180)",
            }}
          >
            Create your first invoice
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ marginLeft: "300px" }}
          >
            Once you start creating your children’s booking patterns, the booked
            charges will show up in this page.
          </Typography>
          <Typography variant="body1" style={{ marginLeft: "300px" }}>
            Visit our knowledge base to{" "}
            <Link
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              learn more
            </Link>
          </Typography>
        </Box>
        {/* </Box> */}
      </div>
    </div>
  );
}
