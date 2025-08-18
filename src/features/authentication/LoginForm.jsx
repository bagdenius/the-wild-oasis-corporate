import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRowVertical from '../../ui/FormRowVertical';
import { useLogin } from './useLogin';
import SpinnerMini from '../../ui/SpinnerMini';

function LoginForm() {
  const [email, setEmail] = useState('bagdenius@gmail.com');
  const [password, setPassword] = useState('pass1337');
  const { login, isLogging } = useLogin();

  function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label='Email address'>
        <Input
          type='email'
          id='email'
          // This makes this form better for password managers
          autoComplete='username'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isLogging}
        />
      </FormRowVertical>

      <FormRowVertical label='Password'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={isLogging}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size='large' disabled={isLogging}>
          {!isLogging ? 'Login' : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
