import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt="logo"
        className="w-44"
      />

      {user && (
        <div className="flex gap-3">
          <img
            className="w-12 h-12"
            alt="userIcon"
            src="https://res.cloudinary.com/djpplkd1b/image/upload/v1725593989/Netflix_Sign_Icon_tyloui.jpg"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white text-lg"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
