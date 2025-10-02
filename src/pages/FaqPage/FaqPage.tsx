import { useState } from 'react';

interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItemData[] = [
  {
    id: 1,
    question: 'Como sei o dia e a hora da minha consulta?',
    answer:
      'Enviaremos lembretes com todas as informações por SMS ou WhatsApp próximo à data da sua consulta. Você também pode verificar os detalhes no aplicativo. Se tiver dúvidas, ligue para nós.',
  },
  {
    id: 2,
    question: 'Como faço para entrar na minha consulta online?',
    answer:
      'No dia da consulta, você receberá um link simples por SMS ou WhatsApp. Basta clicar neste link alguns minutos antes do horário agendado. Ele te levará direto para a sala de consulta, sem precisar navegar pelo aplicativo.',
  },
  {
    id: 3,
    question: 'Preciso instalar algum aplicativo para a consulta online?',
    answer:
      'Para algumas funcionalidades completas, nosso aplicativo é recomendado. No entanto, para acessar a sua consulta, estamos criando uma forma de você receber um link direto, onde basta clicar para participar, simplificando o processo.',
  },
  {
    id: 4,
    question: 'O que preciso ter para fazer a consulta online?',
    answer:
      'Você precisará de um celular ou computador com câmera e microfone funcionando, e acesso à internet. Escolha um local tranquilo para a consulta.',
  },
  {
    id: 5,
    question: 'E se eu tiver problemas de internet ou com o meu aparelho na hora da consulta?',
    answer:
      'Se você tiver dificuldades para entrar na consulta, tente reiniciar seu aparelho ou verificar sua conexão. Se ainda assim não conseguir, por favor, entre em contato com a nossa central de atendimento o mais rápido possível para que possamos tentar ajudar ou reagendar.',
  },
];

const FaqPage = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">

        <div className="bg-white rounded-xl shadow-lg p-8">
          
          <div className="bg-blue-600 rounded-lg p-6 mb-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
              Nosso FAQ
            </h2>
            <p className="text-blue-100 text-lg">Saiba como se preparar e acessar sua consulta</p>
          </div>

          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                >
                  <span className="font-semibold text-gray-800 text-lg">{item.question}</span>

                </button>

                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openItemId === item.id ? 'max-h-96 pb-4' : 'max-h-0 overflow-hidden pb-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed mt-2.5">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FaqPage;