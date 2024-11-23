import { HeadFC } from "gatsby";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import styled from "styled-components";
import Layout from "../components-layout/layout";
import { Seo } from "../components-layout/seo";

const Contact = () => {
  return (
    <Layout>
      <ContactContainer>
        <Title>Contact Us</Title>
        <Description>
          We'd love to hear from you! Please reach out to us through any of the
          methods below.
        </Description>
        <ContactMethods>
          <Method>
            <h3>Phone</h3>
            <p>+84347785311</p>
          </Method>
          <Method>
            <h3>Address</h3>
            <p>10 Lý Tự Trọng, Thị trấn Liên Nghĩa, Đức Trọng, Lâm Đồng</p>
          </Method>
        </ContactMethods>
        <ContactMethods>
          <a href="https://www.facebook.com/notestudioo" target="_blank">
            <Method>
              <h3>
                <FaFacebook size="8vh" />
              </h3>
              <p>Facebook</p>
            </Method>
          </a>
          <a href="https://www.instagram.com/notestudio.dalat/" target="_blank">
            <Method>
              <h3>
                <FaInstagram size="8vh" />
              </h3>
              <p>Facebook</p>
            </Method>
          </a>
          <a href="https://www.tiktok.com/@note1306" target="_blank">
            <Method>
              <h3>
                <FaTiktok size="8vh" />
              </h3>
              <p>Tiktok</p>
            </Method>
          </a>
        </ContactMethods>
        <ContactForm>
          <FormTitle>Send Us a Message</FormTitle>
          <Form>
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </Form>
        </ContactForm>
      </ContactContainer>
    </Layout>
  );
};

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const ContactMethods = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Method = styled.div`
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: gray;
  }
`;

const ContactForm = styled.div`
  margin-top: 20px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 5px;
  resize: none;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export default Contact;
export const Head: HeadFC = () => <Seo subTitle="Contact"></Seo>;
