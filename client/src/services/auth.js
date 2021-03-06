import React from 'react'
import api from './api-config';
import { Link } from "react-router-dom"


export const loginUser = async (loginData) => {
  
  try {
    const resp = await api.post('/auth/login', { authentication: loginData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  }
  
  catch (error) {
  
    alert("you need to register!")
    
    
}}
   


export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
    return null
  
}




export const removeToken = () => {
  api.defaults.headers.common.authorization = null
}