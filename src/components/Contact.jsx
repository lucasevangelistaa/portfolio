import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaFileAlt } from 'react-icons/fa';

export default function Contact({ darkMode }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSend = () => {
    setIsSending(true);
    const whatsappLink = `https://wa.me/+5598984986243?text=Olá, meu nome é ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setTimeout(() => setIsSending(false), 2000);
  };

  return (
    <section id='contact' className={`py-10 flex flex-col md:flex-row items-center justify-center gap-10 px-5 border ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"}`}>
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Contato</h2>
        <div className="flex gap-4 text-3xl mb-8 justify-center md:justify-start">
          <a className='hover:scale-110 transition-transform' href="https://www.linkedin.com/in/lucas1108" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='hover:scale-110 transition-transform' href="https://github.com/lucasevangelistaa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a className='hover:scale-110 transition-transform' href="https://www.instagram.com/lucassss.lc" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className='hover:scale-110 transition-transform' href="mailto:lucasevangelistadra@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a className='hover:scale-110 transition-transform' href="https://lattes.cnpq.br/9348021323581366" target="_blank" rel="noopener noreferrer"><FaFileAlt /></a>
        </div>
      </div>

      <div className={`w-full md:w-1/2 p-6 rounded-2xl shadow-xl border ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-gray-200"}`}>
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full p-3 mb-4 border-b-2 focus:outline-none bg-transparent ${darkMode ? "border-gray-500 text-white" : "border-gray-700 text-gray-900"}`}
        />
        <textarea
          placeholder="Mensagem ou Assunto"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`w-full p-3 mb-4 border-b-2 focus:outline-none bg-transparent h-32 ${darkMode ? "border-gray-500 text-white" : "border-gray-700 text-gray-900"}`}
        />
        <button
          onClick={handleSend}
          disabled={isSending || !name || !message}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          {isSending ? 'Enviando...' : 'Enviar via WhatsApp'}
        </button>
      </div>
    </section>
  );
}
