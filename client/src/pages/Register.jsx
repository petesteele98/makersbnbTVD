import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  //   const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleUpdateFormData = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:5002/register', formData);
        if(response.data.succcess){
          // console.log('Registration successful:', response.data);
          alert("Registration Successful!")
        }

      } catch (error) {
        console.error('Registration error:', error);
      }
  };

  return (
    <div>
      {/* use registerHanlder that sumbits the form and if response is succeful then navigate to login page */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => handleUpdateFormData("username", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleUpdateFormData("password", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleUpdateFormData("confirmPassword", e.target.value)
            }
          />
        </div>
        <button type="submit">Register</button>
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      </form>

      {/* <button onClick={() => navigateTo("/login")}>Register</button> */}
    </div>
  );
};

export default Register;