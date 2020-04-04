import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import "./styles.css";

import logoImage from "../../assets/logo.svg";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be The Hero" />
        <span>Bem vinda, APAD</span>

        <Link className="button" to="/incidentes/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
    </div>
  );
}
