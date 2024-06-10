import React, { useState } from "react";
import "./Navbar.css";
import Cookies from "js-cookie";

function Navbar({ name }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-left">
          <div className="nav-text">
            <span>Upgrade Course</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clipPath="url(#clip0_198_292)">
                <path
                  d="M9.75 8.25L16.5 1.5M16.5 1.5H12.4922M16.5 1.5V5.50781"
                  stroke="#992E9D"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 9C16.5 12.5355 16.5 14.3033 15.4017 15.4017C14.3033 16.5 12.5355 16.5 9 16.5C5.46447 16.5 3.6967 16.5 2.59835 15.4017C1.5 14.3033 1.5 12.5355 1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5"
                  stroke="#992E9D"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_198_292">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            style={{ background: "var(--Woodsmoke-50, #F5F5F6)", width: "3px" }}
          ></div>
          <div className="nav-text">
            <span>Pro pack bundle</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clipPath="url(#clip0_198_292)">
                <path
                  d="M9.75 8.25L16.5 1.5M16.5 1.5H12.4922M16.5 1.5V5.50781"
                  stroke="#992E9D"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 9C16.5 12.5355 16.5 14.3033 15.4017 15.4017C14.3033 16.5 12.5355 16.5 9 16.5C5.46447 16.5 3.6967 16.5 2.59835 15.4017C1.5 14.3033 1.5 12.5355 1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5"
                  stroke="#992E9D"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_198_292">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="nav-right">
          <button className="nav-upload-btn">
            <span>Upload Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.43209 1.4085L6.43112 1.40948L6.43111 1.40948L4.29602 3.54457C4.20319 3.64403 4.20691 3.79994 4.30515 3.89484L6.43209 1.4085ZM6.43209 1.4085C7.31082 0.530825 8.73465 0.531153 9.61295 1.40947L9.61296 1.40948L11.7542 3.55073L11.7541 3.55081L11.7634 3.55978L11.7696 3.566C11.7697 3.56604 11.7697 3.56607 11.7697 3.56611C11.8655 3.66541 11.8628 3.82356 11.7635 3.91944C11.6642 4.01535 11.506 4.0126 11.4101 3.9133L11.4101 3.91322L11.4009 3.90401L9.55766 2.06075L8.27454 0.777618L8.27733 2.59223L8.29133 11.6673C8.29133 11.6675 8.29133 11.6676 8.29133 11.6677C8.29114 11.8056 8.1793 11.9173 8.04138 11.9173C7.90333 11.9173 7.79142 11.8054 7.79142 11.6673L7.79142 11.6662L7.77742 2.57858L7.77464 0.771405L6.497 2.0495L4.64927 3.89787C4.55225 3.98838 4.40098 3.98738 4.30516 3.89485L6.43209 1.4085Z"
                stroke="#992E9D"
                strokeWidth="1.5"
              />
              <path
                d="M14.7497 13.7288V13.727V10.6665C14.7497 10.5284 14.8616 10.4165 14.9997 10.4165C15.1377 10.4165 15.2496 10.5284 15.2496 10.6664V10.6665L15.2496 13.7261C15.2496 13.7263 15.2496 13.7266 15.2496 13.7268C15.2483 14.5673 14.5671 15.2484 13.7265 15.2495C13.7264 15.2495 13.7263 15.2495 13.7262 15.2495H2.27377C2.27365 15.2495 2.27353 15.2495 2.2734 15.2495C1.43275 15.2484 0.751542 14.5672 0.750336 13.7265V10.6665C0.750336 10.5284 0.862248 10.4165 1.00029 10.4165C1.13834 10.4165 1.25025 10.5284 1.25025 10.6665L1.25025 13.727L1.25025 13.7287C1.25154 14.2921 1.70798 14.7482 2.27102 14.7496H2.27289L13.7271 14.7496L13.7288 14.7496C14.2923 14.7483 14.7483 14.2919 14.7497 13.7288Z"
                fill="#7F2781"
                stroke="#992E9D"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <div className="nav-user-menu">
            <div className="name-prefix">{name[0].toUpperCase()}</div>
            <span>{name[0].toUpperCase() + name.slice(1)}</span>

            <svg 
            onClick={toggleDropdown}
             xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path d="M9.2778 12.3764L14.1001 7.4035C14.401 7.0932 14.2186 6.5 13.8223 6.5H4.17773C3.78142 6.5 3.59902 7.0932 3.89992 7.4035L8.72219 12.3764C8.88205 12.5412 9.11795 12.5412 9.2778 12.3764Z" fill="#3B3B3E"/>
</svg>
            {dropdownOpen && (
              <div className="nav-dropdown-menu">
                <a onClick={() => {
                            Cookies.remove('user_email');
                        window.location.href = 'https://tutedude.com/byebye.php'
                    }}>Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
