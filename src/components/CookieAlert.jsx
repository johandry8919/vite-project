import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './cookie-alert.css'

const CookieAlert = ({ onAccept, onReject }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cookies, setCookie] = useCookies(['cookieAccepted']);

  useEffect(() => {
    // Verificar si la cookie está presente y si el usuario ya ha aceptado o rechazado
    const cookieAccepted = cookies.cookieAccepted;
    setIsVisible(!cookieAccepted);
  }, [cookies.cookieAccepted]);

  const handleAccept = () => {
    setIsVisible(false);
    onAccept();
    // Establecer la cookie para recordar la elección del usuario
    setCookie('cookieAccepted', true, { path: '/' });
  };

  const handleReject = () => {
    setIsVisible(false);
    onReject();
    // Establecer la cookie para recordar la elección del usuario
    setCookie('cookieAccepted', false, { path: '/' });
  };

  return (
    isVisible && (
      <div className="cookie-alert ">
        <p className='text-dark fs-3'>Este sitio web utiliza cookies. ¿Aceptar o rechazar?</p>
        <button onClick={handleAccept}>Aceptar</button>
        <button onClick={handleReject}>Rechazar</button>
      </div>
    )
  );
};

export default CookieAlert;