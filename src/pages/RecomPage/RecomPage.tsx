import { useState } from "react";
import "./RecomPage.css"


const RecomPage = () => {

    interface Profissional {
  id: number;
  area: string;
  dica: string;
}

  const [dicas] = useState<Profissional[]>([
    {
      id: 1,
      area: "Fisioterapeuta",
      dica: "Alongamento suave diário: braços, pernas, pescoço e coluna, por cerca de 10 minutos.",
    },
    {
      id: 2,
      area: "Nutricionista",
      dica: "Hidratação é fundamental: A ingestão de água ao longo do dia é essencial, contendo inúmeros  benefícios para a saúde da pele, energia e funcionamento dos órgãos.",
    },
    {
      id: 3,
      area: "Psicologa",
      dica: "Respiração consciente: dedicar 5 minutos para inspirar profundamente pelo nariz e expirar lentamente pela boca, reduzindo a ansiedade."
    },
    {
      id: 4,
      area: "Fisioterapeuta",
      dica: "Ficar de pé segurando em uma cadeira e levantar uma perna por alguns segundos."
    },
    {
      id: 5,
      area: "Nutricionista",
      dica: "Cálcio e vitamina D: leite, queijos magros, iogurte, além da exposição moderada ao sol, ajudam na saúde óssea.",
    },
    {
      id: 6,
      area: "Fisioterapeuta",
      dica: "Mobilidade articular: movimentos circulares com tornozelos, punhos e ombros.",
    },
    {
      id: 7,
      area: "Nutricionista",
      dica: "Proteínas em todas as refeições: ovos, peixes, frango, leguminosas (feijão, lentilha, grão-de-bico) ajudam a preservar a massa muscular.",
    },
    {
      id: 8,
      area: "Psicologa",
      dica: "Mindfulness: observar sons, cheiros e sensações do ambiente presente, sem julgamentos.",
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Dicas dos Profissionais
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça recomendações especializadas de nossos profissionais para cuidar da sua saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dicas.map((profissional) => (
            <div
              key={profissional.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {profissional.area}
                  </h3>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {profissional.dica}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-medium">
                  Dica profissional
                </span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};



export default RecomPage