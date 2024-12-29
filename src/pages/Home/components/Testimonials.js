export const Testimonials = () => {
    return (
      <section className='my-20'>
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Opiniones sobre Relatos de Papel</h1>    
          <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">El mejor lugar para encontrar libros</h3>
                      <p className="my-4 font-light">"Relatos de Papel tiene una colección increíble. Encontré un libro que llevaba años buscando."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Sofía Martínez</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Estudiante de literatura en México</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Un servicio excelente</h3>
                      <p className="my-4 font-light">"Los envíos son rápidos y los libros llegan en perfectas condiciones. ¡Muy recomendado!"</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Carlos Gómez</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Maestro de secundaria en España</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Variedad de géneros</h3>
                      <p className="my-4 font-light">"Relatos de Papel tiene de todo, desde clásicos hasta las últimas novedades. Siempre encuentro algo interesante."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Emily Johnson</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lectora apasionada en Estados Unidos</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Perfecto para regalar</h3>
                      <p className="my-4 font-light">"Compré varios libros como regalo y a todos les encantaron. ¡Una experiencia de compra maravillosa!"</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Ana López</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Ama de casa en Argentina</div>
                      </div>
                  </figcaption>    
              </figure>
          </div>
      </section>
    )
  }
  