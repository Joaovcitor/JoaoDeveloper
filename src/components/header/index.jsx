import "./style.css";

export const Header = () => {
  return (
    <section className="container">
      <nav className="links">
        <h1 className="namePrincipal">JV_byte</h1>
        <a href="" className="redeSocial">
          E-mail
        </a>
        <a href="" className="redeSocial">
          WhatsApp
        </a>
        <a href="" className="redeSocial">
          YouTube
        </a>
      </nav>
      <nav className="content">
        <p className="description">
          Somos uma empresa especializada em mercados digitais, com experiências
          em vários setores do mercado, desde pequenas páginas de captura, até
          sistemas inteiros de marktplace.
        </p>
      </nav>
    </section>
  );
};
