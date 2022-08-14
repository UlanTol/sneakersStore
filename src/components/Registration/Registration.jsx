import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";

const Registration = () => {
  const { handleRegistration, error, loading, setError } =
    useContext(authContext);
  // console.log(loading);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSave() {
    if (!name || !email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Please complete all the fields");
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegistration(formData, navigate);
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="overlays">
      <div class="login-box">
        <h2>Login</h2>

        <form>
          <div class="user-box">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              name=""
              required=""
            />
            <label>Name</label>
          </div>
          <div class="user-box">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              name=""
              required=""
            />
            <label>Email</label>
          </div>
          <div class="user-box">
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              name=""
              required=""
            />
            <label>Password</label>
          </div>
          <div class="user-box">
            <input
              value={passwordConfirm}
              onChange={e => setPasswordConfirm(e.target.value)}
              type="password"
              name=""
              required=""
            />
            <label>Password</label>
          </div>

          <a onClick={handleSave} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </a>
          <h4 onClick={() => navigate("/login")} style={{ marginTop: "20px" }}>
            Login
          </h4>
        </form>
      </div>
    </div>
  );
};

//     <div className="overlays">
//       <div className="login-box">
//         <h2>Login</h2>

//     <Container maxWidth="sm" sx={{ marginTop: "90px" }}>
//       <Box
//         display={"flex"}
//         flexDirection={"column"}
//         margin={"50px"}
//         alignItems={"center"}>
//         <Typography variant="h5" color="gold">
//           Sign-up
//         </Typography>

//         {error ? (
//           <Box>
//             {error.map((item, index) => (
//               <Alert severity="error" key={item + index}>
//                 {" "}
//                 {item}
//               </Alert>
//             ))}
//           </Box>
//         ) : null}
//         <Box>
//         <form>
//           <div class="user-box">
//             <input
//               value={name}
//               onChange={e => setName(e.target.value)}
//               type="text"
//               name=""
//               required=""
//             />
//             <label>Name</label>
//           </div>
//           <div class="user-box">
//             <input
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               type="text"
//               name=""
//               required=""
//             />
//             <label>Email</label>
//           </div>
//           <div class="user-box">
//             <input
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               type="password"
//               name=""
//               required=""
//             />
//             <label>Password</label>
//           </div>
//           <div class="user-box">
//             <input
//               value={passwordConfirm}
//               onChange={e => setPasswordConfirm(e.target.value)}
//               type="password"
//               name=""
//               required=""
//             />
//             <label>Password</label>
//           </div>

//           <a onClick={handleSave} href="#">
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//             Sign Up
//           </a>
//           <h4 onClick={() => navigate("/login")} style={{ marginTop: "20px" }}>
//             Login
//           </h4>
//         </form>
//       </div>
//     </div>
//     <Box>
//         <TextField
//           value={name}
//           onChange={e => setName(e.target.value)}
//           variant="outlined"
//           label="Name"
//           sx={{ marginTop: "20px" }}
//         />
//         <TextField
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           variant="outlined"
//           label="Email"
//         />
//         <TextField
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           variant="outlined"
//           label="Password"
//         />
//         <TextField
//           value={passwordConfirm}
//           onChange={e => setPasswordConfirm(e.target.value)}
//           variant="outlined"
//           label="Password confirmation"
//         />
//         <Button
//           sx={{ marginTop: "20px" }}
//           onClick={handleSave}
//           variant="contained"
//           color="warning">
//           Sign-up now
//         </Button>

//       </Box>
//     </Container>

//   );
// };

export default Registration;
