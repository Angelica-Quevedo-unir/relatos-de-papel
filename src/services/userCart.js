

  export const fetchUserCart = async (userId, token) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST}/orders?user.id=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Error al obtener el carrito");
      }
  
      const orders = await response.json();
      return orders.length ? orders[0] : null; // Devuelve el primer pedido (carrito activo)
    } catch (error) {
      console.error("Error en fetchUserCart:", error.message);
      throw error;
    }
  };
  
  export const saveUserCart = async (userId, cartList, token, orderId) => {
    try {
      const orderData = {
        cartList,
        user: { id: userId },
      };
  
      const method = orderId ? "PUT" : "POST";
      const url = orderId ? `${process.env.REACT_APP_HOST}/orders/${orderId}` : "/orders";
  
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error("Error al guardar el carrito");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error en saveUserCart:", error.message);
      throw error;
    }
  };
  