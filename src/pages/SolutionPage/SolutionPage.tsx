import { Link } from "react-router";
import "./SolutionPage.css"

const SolutionPage = () => {
    return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nossa Solução</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolucionando o atendimento médico através da tecnologia e cuidado humanizado
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
    <div className="grid md:grid-cols-2 gap-12 items-start">
        
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sistema de Gerenciamento de Consultas Online
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
                Desenvolvemos uma plataforma completa que simplifica e otimiza todo o processo 
                de agendamento e acompanhamento médico, proporcionando uma experiência 
                seamless para pacientes e profissionais.
            </p>
        </div>
        
        <div className="space-y-8">
            
            <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-4 flex-shrink-0"></div> 
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Agendamento Inteligente</h3>
                    <p className="text-gray-600">Sistema de marcação de consultas 24/7 com confirmação automática</p>
                </div>
            </div>
            
            <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Consultas Online</h3>
                    <p className="text-gray-600">Plataforma integrada para telemedicina com qualidade HD</p>
                </div>
            </div>
            
            <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Prontuário Digital</h3>
                    <p className="text-gray-600">Armazenamento seguro e organizado de históricos médicos</p>
                </div>
            </div>
            
            </div>
        </div>
    </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Dicas dos Profissionais</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Em nosso site, disponibilizamos uma seção exclusiva onde nossos profissionais 
                compartilham dicas valiosas e orientações especializadas para o cuidado da sua saúde.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Conteúdo atualizado regularmente com informações relevantes para diferentes 
                áreas da medicina, sempre com o cuidado e expertise da nossa equipe.
              </p>
              <Link to="/Recomendation" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors duration-300">
                Acessar Dicas
              </Link>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Conhecimento que Transforma</h3>
              <p className="text-gray-600">
                Acesso a orientações profissionais para cuidar melhor da sua saúde no dia a dia
              </p>
            </div>
          </div>
        </div>
        </div>

    </div>
  );
}

export default SolutionPage;