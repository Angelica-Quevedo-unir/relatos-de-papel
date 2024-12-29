import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      "id": 1,
      "question": "¿Por qué debería usar Relatos de Papel?",
      "answer": "Relatos de Papel es tu tienda en línea para encontrar una amplia variedad de libros de calidad. Ofrecemos una experiencia personalizada, fácil acceso a tus libros favoritos y descuentos exclusivos para nuestros lectores."
    },
    {
      "id": 2,
      "question": "¿Puedo acceder a mi eBook desde el móvil?",
      "answer": "¡Sí! Todos los eBooks comprados en Relatos de Papel están disponibles para su lectura en dispositivos móviles, tabletas y computadoras. Solo necesitas iniciar sesión en tu cuenta para disfrutar de tus libros."
    },
    {
      "id": 3,
      "question": "¿Ofrecen reembolsos?",
      "answer": "Ofrecemos reembolsos dentro de los primeros 14 días posteriores a la compra, siempre que no hayas descargado el eBook. Si necesitas ayuda, contacta a nuestro equipo de soporte."
    },
    {
      "id": 4,
      "question": "¿Aceptan pagos internacionales?",
      "answer": "Sí, aceptamos pagos internacionales a través de tarjetas de crédito y débito, así como otras plataformas de pago seguras como PayPal. Queremos que nuestros libros lleguen a lectores de todo el mundo."
    },
    {
      "id": 5,
      "question": "¿Realizan envíos internacionales para libros físicos?",
      "answer": "Sí, ofrecemos envíos internacionales para libros físicos. Los costos de envío varían según el destino, y puedes calcularlos al momento de realizar tu compra."
    },
    {
      "id": 6,
      "question": "¿Qué hago si mi libro físico llega en mal estado?",
      "answer": "Si tu libro llega dañado, puedes contactarnos dentro de los primeros 7 días tras recibirlo. Nos aseguraremos de enviarte un reemplazo sin costo adicional o emitir un reembolso."
    }
    
];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Preguntas Frecuentes</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}
