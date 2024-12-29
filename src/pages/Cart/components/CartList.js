import { useState, useEffect } from "react";
import { useCart } from "../../../context";
import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { fetchUserCart, saveUserCart} from "../../../services/userCart";


export const CartList = () => {
  const [checkout, setCheckout] = useState(false);
  const { cartList, setCartList, total } = useCart();
  const { currentUser, isGuestUser } = useCurrentUser();
  const [orderId, setOrderId] = useState(null);

  // Cargar el carrito del usuario actual
  useEffect(() => {
    const loadCart = async () => {
      if (currentUser && !isGuestUser) {
        try {
          const token = localStorage.getItem("authToken");
          const userCart = await fetchUserCart(currentUser.id, token);

          if (userCart) {
            setOrderId(userCart.id);
            setCartList(userCart.cartList);
          } else {
            // Si no hay carrito, se inicializa vacío
            setCartList([]);
          }
        } catch (error) {
          console.error("Error al cargar el carrito:", error.message);
        }
      } else {
        // Limpia el carrito para usuarios invitados
        setCartList([]);
      }
    };

    loadCart();
  }, [currentUser, isGuestUser, setCartList]);

  // Guardar el carrito del usuario actual
  useEffect(() => {
    const saveCart = async () => {
      if (currentUser && !isGuestUser) {
        try {
          const token = localStorage.getItem("authToken");
          await saveUserCart(currentUser.id, cartList, token, orderId);
        } catch (error) {
          console.error("Error al guardar el carrito:", error.message);
        }
      }
    };

    saveCart();
  }, [cartList, currentUser, isGuestUser, orderId]);

  const handleCheckoutClick = () => {
    if (isGuestUser) {
      alert("Debes autenticarte para completar tu compra.");
    } else {
      setCheckout(true);
    }
  };

  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Mi Carrito ({cartList.length})
        </p>
      </section>

      <section>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Costo total:</span>
            <span>${total}</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button
            onClick={handleCheckoutClick}
            type="button"
            className={`text-white font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 ${
              isGuestUser
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
            }`}
            disabled={isGuestUser}
          >
            Pagar <i className="ml-2 bi bi-arrow-right"></i>
          </button>
          {isGuestUser && (
            <p className="text-red-500 mt-2">
              Debes autenticarte para completar tu compra.
            </p>
          )}
        </div>
      </section>
      {checkout && <Checkout setCheckout={setCheckout} />}
    </>
  );
};