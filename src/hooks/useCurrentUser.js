import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isGuestUser, setIsGuestUser] = useState(false);

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token")); // El token JWT del usuario
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decodifica el token
        setCurrentUser(decodedToken); // Guarda los datos del usuario decodificados
        setIsGuestUser(decodedToken.email === "invitado@gmail.com");
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }
  }, []);

  return { currentUser, isGuestUser };
};
