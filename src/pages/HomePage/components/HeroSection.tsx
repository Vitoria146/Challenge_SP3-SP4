import HeroImg from './HeroSection/assets/HeroImg2.png'

const HeroSection = () => {

  return (
    <div 
      className="relative bg-cover bg-center h-96 flex items-center justify-start text-white"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="relative z-20 pl-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-2.5">
          Sua Saúde em Primeiro Lugar
        </h1>
        <p className="text-xl mb-5">
          Tecnologia e humanização para um atendimento médico de excelência. Agende sua consulta hoje.
        </p>
        <button 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Agendar Consulta
        </button>
      </div>
    </div>
  )
}

export default HeroSection;