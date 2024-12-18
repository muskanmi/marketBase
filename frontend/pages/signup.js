"use client";

import React from "react";
import logo_image from "../public/images/Side_Image.png";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();

  return (
    <section className="overflow-x-hidden">
      <div className="flex flex-col items-center justify-between w-full mb-28 md:flex-row pt-10">
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
              Create an account
            </Typography>
            <Typography variant="body1" align="left" sx={{ width: "100%" }}>
              Enter your details below
            </Typography>
            <TextField id="name" label="Name" variant="standard" />
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
              Create Account
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2, width: "80%" }}
            >
              <FcGoogle size="1.5rem" />
              &nbsp;&nbsp; Sign up with Google
            </Button>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ width: "100%", mt: 2 }}
            >
              <Typography variant="body1">Already have an account?</Typography>
              <Button
                variant="text"
                color="primary"
                onClick={() => router.push("/login")}
                sx={{
                  ml: 1,
                  textTransform: "none",
                  textDecoration: "underline",
                  color: "#000",
                }}
              >
                Log in
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
