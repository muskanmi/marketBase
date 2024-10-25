import React from "react";
import logo_image from "../public/images/Side_Image.png";
import Image from "next/image";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="flex flex-col items-center justify-between w-full md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src={logo_image}
            alt="login image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
              maxWidth: "100%",
              overflow: "hidden",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField
              id="standard-basic"
              label="Email or Phone Number"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </Box>
          <div className="w-full pt-3 text-center">
            <Button variant="contained" color="error">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
