import { FC, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login: FC = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = useCallback((prop: string) => (event: { target: { value: string; }; }) => {
    setValues(prevState => ({ ...prevState, [prop]: event.target.value }));
  }, [setValues]);

  const handleClick = useCallback((prop: string) => () => {
    console.log(prop);
    console.log(values);
  }, [values]);

  return (
    <Box
      display="flex"
      height="100vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width={500}
      component="form"
      autoComplete="off"
    >
      <TextField
        required
        onChange={handleChange('username')}
        margin="normal"
        fullWidth
        label="Username"
        variant="outlined"
        value={values.username}
      />
      <TextField
        required
        onChange={handleChange('password')}
        type="password"
        margin="normal"
        fullWidth
        label="Password"
        variant="outlined"
        value={values.password}
      />
      <Stack
        spacing={2}
        width={500}
        mt={3}
      >
        <Button onClick={handleClick('login')} size="large" variant="contained">Login</Button>
        <Button onClick={handleClick('signup')} variant="outlined">Sign Up</Button>
      </Stack>
      </Box>
    </Box>
  );
};

export default Login;
