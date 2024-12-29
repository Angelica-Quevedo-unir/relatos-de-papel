import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="text my-5">
            <h1 className="text-5xl font-bold">Relatos de Papel - Tienda de Libros Online</h1>
            <p className="text-2xl my-7 px-1 dark:text-slate-300">Descubre los mejores libros en todos los géneros, desde clásicos hasta novedades. Encuentra tu próxima gran historia y disfruta de la lectura en cualquier momento. ¡Haz que cada página cuente!.</p>
            <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explora nuestros libros</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src="https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero Section" />
        </div>
    </section>
  )
}
