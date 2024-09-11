// components/AdminLogin.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  background-image: url('path/to/background-image.jpg'); // Add your background image path here
  background-size: cover;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 400px;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 10px;
  font-size: 24px;
`;

const Subtitle = styled.h2`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: #ffcb05;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #e5b800;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  color: #fff;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Icon = styled.span`
  margin-left: 10px;
  color: #ffcb05;
`;

const AdminLogin = () => {
  return (
    <Container>
      <LoginBox>
        <Logo src="path/to/logo.png" alt="Logo" /> {/* Add your logo image path here */}
        <Title>SCOPE CINEMAS</Title>
        <Subtitle>ADMIN LOGIN</Subtitle>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <CheckboxContainer>
          <CheckboxLabel>
            <Checkbox type="checkbox" />
            Remember me
          </CheckboxLabel>
          <a href="#" style={{ color: '#fff' }}>Forgot Password</a>
        </CheckboxContainer>
        <Button>Login</Button>
      </LoginBox>
    </Container>
  );
};

export default AdminLogin;
