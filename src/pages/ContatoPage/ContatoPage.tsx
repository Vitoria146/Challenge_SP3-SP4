import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  assunto: string;
  descricao: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    descricao: ''
  });
  
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simula o envio do formulário
    console.log('Dados do formulário:', formData);
    
    // Limpa os campos
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      assunto: '',
      descricao: ''
    });
    
    // Mostra a notificação
    setShowNotification(true);
    
    // Esconde a notificação após 3 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Notificação */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Formulário enviado com sucesso!
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Entre em Contato
        </h2>
        <p className="text-gray-600">
          Estamos aqui para ajudar. Preencha o formulário abaixo e retornaremos em breve.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
              placeholder="Seu nome completo"
            />
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
              Telefone *
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="seu@email.com"
          />
        </div>

        {/* Assunto */}
        <div className="mb-6">
          <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
            Assunto *
          </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
              placeholder="Assunto da mensagem"
            />
        </div>

        {/* Descrição */}
        <div className="mb-6">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-2">
            Descrição *
          </label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-vertical"
            placeholder="Descreva sua necessidade..."
          />
        </div>

        {/* Botão Enviar */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;