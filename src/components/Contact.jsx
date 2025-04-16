import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaFileAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact({ darkMode }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSend = () => {
    setIsSending(true);
    const whatsappLink = `https://wa.me/+5598984986243?text=Olá, meu nome é ${encodeURIComponent(
      name
    )}. ${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    setTimeout(() => setIsSending(false), 2000);
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/lucas1108",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/lucasevangelistaa",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/lucassss.lc",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:lucasevangelistadra@gmail.com",
      label: "Email",
    },
    {
      icon: <FaFileAlt />,
      url: "https://lattes.cnpq.br/9348021323581366",
      label: "Currículo Lattes",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 px-4 md:px-8 lg:px-16 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Vamos <span className="text-blue-600">Conversar</span>
        </Motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <Motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {socialLinks.map((link, index) => (
                <Motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center p-6 rounded-xl transition-all ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-100"
                  } shadow-md hover:shadow-lg`}
                  aria-label={link.label}
                >
                  <span className="text-3xl mb-2 text-blue-600">
                    {link.icon}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </span>
                </Motion.a>
              ))}
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className={`w-full lg:w-1/2 p-8 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-xl`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Envie uma mensagem
            </h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Seu Nome
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Como posso te chamar?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-4 rounded-lg border-2 focus:outline-none focus:border-blue-600 transition-colors ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  placeholder="No que posso te ajudar?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full p-4 rounded-lg border-2 focus:outline-none focus:border-blue-600 transition-colors h-40 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                />
              </div>

              <Motion.button
                onClick={handleSend}
                disabled={isSending || !name || !message}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors ${
                  isSending || !name || !message
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                } text-white shadow-md`}
              >
                <FaWhatsapp className="text-xl" />
                {isSending ? "Enviando..." : "Enviar via WhatsApp"}
              </Motion.button>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
