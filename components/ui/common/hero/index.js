import CarouselComponent from '../CarouselComponent'

export default function Hero() {
  return (
    <section className="lg:2/6 text-left my-28">
      <div
        className="text-6xl font-semibold text-white-900 leading-none justify-center "
        style={{ color: 'white' }}
      >
        Cursos de Marketing e empreendedorismo
      </div>
      <div
        className="mt-6 text-xl font-light  antialiased"
        style={{ color: 'white' }}
      >
        Veja todos nossos cursos e desenvolva novas habilidades para todas novas
        habilidades, agora pagamento em criptomoedas.
      </div>
      <div className="mt-5 sm:mt-8 flex lg:justify-center ">
        <div
          className="rounded-md "
          style={{ width: '1830px', height: '400px' }}
        >
          <a
            href="#"
            className="w-full flex items-center justify-center px- py-12 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
          <CarouselComponent />
        </div>
      </div>
    </section>
  )
}
