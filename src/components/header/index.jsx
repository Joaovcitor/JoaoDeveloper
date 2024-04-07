import "./style.css";

export const Header = () => {
  return (
    <header className="container">
      <nav>
      <h1 className="namePrincipal">João Victor, seu desenvolvedor Web!</h1>
      </nav>
      <h1>Olá</h1>
      <nav>
      <a className="linksOfSocialMidia" href="https://github.com/Joaovcitor">
        GitHub
      </a>
      <a className="linksOfSocialMidia" href="">
        Linkedin
      </a>
      <a href="">Solicite seu Orçamento</a>

      </nav>
    </header>
  );
};
