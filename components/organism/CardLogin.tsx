import { useState } from 'react';

import { Card } from '@/app/styledComponents/Card'

import axios from 'axios';
import { API_URL, TOKEN_KEY } from '../../config';

import { Title } from '../atoms/Title'
import { Button } from '../molecules/Button'
import { Inputs } from '../atoms/Inputs';
import { Text } from '../atoms/Text';

export const CardLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log({ email, password });
    event.preventDefault();
    validateEmail();
    validatePassword();
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });

      localStorage.setItem(TOKEN_KEY, response.data.token);
      window.location.href = '/users';
    } catch (error) {
      console.error(error);
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Por favor, ingrese un correo electrónico válido.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres.");
    } else {
      setPasswordError("");
    }
  };



  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Title
          type='h1'
          text='Login'
          style='text-3xl text-center mb-4'
        />

        <div className='m-2'>
          <div>
            <Text
              content='email'
              type='label'
              style='text-gray-500'
            />
          </div>
          <div>
            <Inputs
              tag='input'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
          </div>
        </div>
        <div className='m-2'>
          <div>
            <Text
              content='password'
              type='label'
              style='text-gray-500'
            />
          </div>
          <div>
            <Inputs
              tag='input'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <Button
            text="Login"
            type="primary"
          />
          <Button
            text="Register"
            type="secondary"
          />
        </div>
      </form>
    </Card>
  )
}
