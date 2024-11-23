import React from "react";
import { Footer, FooterContent } from "../css/footer.css";

const FooterLayout = () => {
  return (
    <Footer>
      <FooterContent>
        <p>
          &copy; {new Date().getFullYear()} Note's Studio. Website By Doan Phan
        </p>
      </FooterContent>
    </Footer>
  );
};

export default FooterLayout;
