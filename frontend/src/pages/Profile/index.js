import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import "./styles.css";
import logoImage from "../../assets/logo.svg";
import api from "../../services/api.js";

export default function Profile() {
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((_response) => {
        setIncidents(_response.data);
      });
  }, [ongId]);

  const handleDeletIncident = async (id) => {
    try {
    await api.delete(`incidents/${id}`, {
        headers: {
            Authorization: ongId
        }
    });
    setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
        alert('Erro ao deletar caso');
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadatrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) }</p>

            <button onClick={() => handleDeletIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="a8a8b3"></FiTrash2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}