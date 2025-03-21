import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/lucas1108" },
    { icon: <FaGithub />, url: "https://github.com/lucasevangelistaa" },
    { icon: <FaInstagram />, url: "https://instagram.com/lucassss.lc" },
    { icon: <FaWhatsapp />, url: "https://wa.me/+5598984986243" },
  ];

  return (
    <div className="flex gap-4 mt-4 justify-center">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 text-3xl hover:scale-110 transition-transform"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
