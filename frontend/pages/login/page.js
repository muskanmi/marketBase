import React from "react";
import logo_image from "../../public/images/Side_Image.png";
import Image from "next/image";
const LoginPage = () => {
  return (
    <section>
      <div>
        <div>
          <Image src={logo_image} alt="login image" />
          <h1>welcome login page</h1>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default LoginPage;
