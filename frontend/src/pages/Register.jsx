import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { URL } from "../url";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const googleAuth = () => {
    window.open(
      "http://localhost:5000/api/auth/google/callback",
      "_self"
    );
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link
            to="/"
            className="no-underline text-white hover:text-gray-300 bg-black px-4 py-2"
          >
            BlogVerse
          </Link>
        </h1>
        <h3>
          <Link
            to="/login"
            className="border-1 border-solid px-5 rounded-full py-1 no-underline text-black hover:text-gray-800"
          >
            Login
          </Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="password"
            placeholder="Enter your Password"
          />
          <button
            onClick={handleRegister}
            className="w-full px-4 py-2 text-base font-bold text-white bg-black rounded-lg hover:bg-gray-700 hover:text-white "
          >
            Register
          </button>
          {error && (
            <h3 className="text-red-500 text-sm ">Something went wrong</h3>
          )}

          <div className="flex justify-center items-center space-x-3">
            <p>Already have an account?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>

          <button
            onClick={googleAuth}
            className="w-full px-4 py-2 text-base font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 hover:text-white "
          >
            Sign in with Google
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
