import React from "react";
import logo_image from "../public/images/Side_Image.png";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="flex flex-col items-center justify-between w-full md:flex-row mb-28 pt-10">
        <div className="w-full md:w-1/2">
          <Image
            src={logo_image}
            alt="login image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2">
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "70%",
              padding: 2,
              "& > :not(style)": { mb: 2, width: "80%" },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h1" component="h2" align="left">
              Log in to MarketBase
            </Typography>
            <Typography variant="body1" align="left" sx={{ width: "100%" }}>
              Enter your details below
            </Typography>
            <TextField
              id="email"
              label="Email or Phone Number"
              variant="standard"
            />
            <TextField
              id="password"
              label="Password"
              variant="standard"
              type="password"
            />

            <Button
              variant="contained"
              color="error"
              sx={{ mt: 2, width: "80%" }}
            >
              Log In
            </Button>
            <Box
              display="flex"
              justifyContent="right"
              alignItems="right"
              sx={{ width: "100%" }}
            >
              <Typography variant="body1">Forgot Password?</Typography>
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
