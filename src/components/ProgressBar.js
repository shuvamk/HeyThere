import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import "./ProgressBar.css";

export default function ProgressBar({
  profileImage,
  setProfileImage,
  name,
  username,
  email,
  bio,
  setImageUrl,
}) {
  const { url, progress } = useStorage({
    profileImage,
    name,
    username,
    email,
    bio,
  });
  useEffect(() => {
    if (url) {
      console.log(url);
      setImageUrl(url);
    }
  }, [url, setProfileImage]);
  return <div className="progressBar" style={{ width: progress + "%" }}></div>;
}
