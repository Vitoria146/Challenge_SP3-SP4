interface CardProps {
  title: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ title, paragraph }) => (
  <div className="bg-white p-5 rounded-lg shadow-md max-w-[300px] text-left transition-transform duration-300 hover:-translate-y-1">
    <h2 className="text-blue-600 mt-0 text-lg font-semibold mb-3">{title}</h2>
    <p className="text-gray-600 leading-6 mb-4">{paragraph}</p>
    
  </div>
);

const CardSection: React.FC = () => {
  const cardsData: CardProps[] = [
    {
      title: 'Celeridade no atendimento',
      paragraph: 'Reduzimos o tempo de espera com um sistema de agendamento e triagem eficiente.'
    },
    {
      title: 'Especialistas',
      paragraph: 'Corpo clínico altamente qualificado nas diversas áreas da medicina.'
    },
    {
      title: 'Priorização na Satisfação',
      paragraph: 'Equipamentos modernos e prontuários digitais para maior segurança e precisão.'
    }
  ];

  return (
    <section className="py-12 px-8 text-center bg-gray-50">
      <h2 className="text-3xl text-gray-800 mb-8 font-bold">Nossos Diferenciais</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} paragraph={card.paragraph} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;