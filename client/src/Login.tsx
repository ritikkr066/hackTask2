import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const history=useNavigate();
  const [formData, setFormData] = useState({
    // name: '',
    email: '',
    password: '',

  });
  let name,value;
  const handleChange = (e) => {
    name= e.target.name;
    value=e.target.value;

    // setUser({...user,[name]:value})
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to submit the form data to your backend here
    // try {
    //   const response = await axios.post('https://localhost:3001/register', formData);
    //   console.log('Login successful. Response:', response.data);
    //   // You can perform additional actions here, such as redirecting the user.
    // } catch (error) {
    //   console.error('Login failed. Error:', error);
    //   // Handle error, e.g., display an error message to the user.
    // }
    axios.post('http://localhost:3001/login', formData)
    .then(result => {
      console.log(result);
      if(result.data==="Success"){
      history("/Home");
      }else{
        alert("Plz Enter correct email or Password");
      }
    })
    .catch(error => {
      console.error('Axios Error:', error);
      if (error.response) {
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        console.error('Response Headers:', error.response.headers);
      }
    });
  
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="p-8 bg-white rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-2xl">Login</h2>
        {/* <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div> */}
        
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
         Login
        </button>
        <div className='my-2'>Don't Have an Account.</div>
        <Link to ="/register"><button
        
          className="w-full p-2 text-black rounded bg-slate-500 "
        >
        Sign Up
        </button></Link>
      </form>
    </div>
  );
};

export default Login;


