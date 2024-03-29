import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { db, auth } from "../../Firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Divider from "@mui/material/Divider";
import { useUserAuth } from "../../context/AuthContext";
function UserSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const { setUserSignupPage } = useUserAuth();
  const handleSubmit = () => {};
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
      }}
    >
      <div className="signup-box" style={{ padding: "0" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            height: "20px",
          }}
        >
          <h3 style={{ padding: "0" }}>User Signin</h3>
        </div>
        <TextField
          required
          id="email"
          // name="email"
          label="Email"
          type="email"
          value={email}
          fullWidth
          variant="standard"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          id="password"
          // name="password"
          label="password"
          type="password"
          value={password}
          fullWidth
          variant="standard"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          style={{
            marginTop: "20px",
            border: "none",
            color: "white",
            background: "#154f22",
            width: "100%",
          }}
          onClick={handleSubmit}
          variant="outlined"
        >
          Signin
        </Button>

        <Divider />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <span>
            Did'nt have account??{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                setUserSignupPage(false);
              }}
            >
              Signup
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserSignin;
