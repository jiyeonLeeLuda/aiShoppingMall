import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import Layout from '../components/layout/Layout';

export default function LoginPage() {
  const [login, setLogin] = useState({
    id: '',
    pw: '',
  });
  const { id, pw } = login;
  function handleOnChange(e) {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }
  function handleClickLogin() {
    console.log('서버연결', id, pw);
  }
  function handleClickSignUp() {
    console.log('회원가입 페이지로 이동');
  }
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& .loginInput': {
            width: '300px',
            marginTop: '25px',
          },
        }}
      >
        <TextField
          className="loginInput"
          label="아이디"
          name="id"
          variant="standard"
          value={id}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />

        <TextField
          className="loginInput"
          label="비밀번호"
          variant="standard"
          type="password"
          name="pw"
          value={pw}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <Button
          variant="contained"
          className="loginInput"
          onClick={handleClickLogin}
        >
          로그인
        </Button>
        <Button className="loginInput" onClick={handleClickSignUp}>
          회원 가입
        </Button>
      </Box>
    </Layout>
  );
}
