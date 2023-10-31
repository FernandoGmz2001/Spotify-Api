import React from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpotifyLogo } from "../../components";

function Login({ onTokenGenerated }) {
  const notify = () => toast.success("Token generated successfully");
  const errorNotify = () => toast.error("Something went wrong");

  async function generateToken (){
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials&client_id=0eb35f0815b84ac28cebe39013f289e6&client_secret=288e8458a3f245cfa194e786944a5524",
      });

      const data = await response.json();
      onTokenGenerated(data.access_token);
      notify();
    } catch (err) {
      errorNotify();
      throw new Error(err);
    }
  }

  return (
    <div className="login">
      <div className="login__header">
        <SpotifyLogo height={60} />
      </div>
      <div className="login__body">
        <div className="body__header">
          <h3>Enjoy Listening To Music</h3>
          <p>
            Spotify is a proprietary Swedish audio streaming and media services
            provider{" "}
          </p>
        </div>
        <div className="body__token">
          <button className="btn btn--token" onClick={generateToken}>
            Generate token
          </button>
          <ToastContainer position="top-right" autoClose={2200} theme="light" />
        </div>
      </div>
    </div>
  );
}

export default Login;