import "./style.css";
import { Component } from "react";
import { Header } from "../../components/header";

class Home extends Component {
  render() {
    return (
      <section className="principal">
          <Header></Header>
      </section>
    );
  }
}

export default Home;
