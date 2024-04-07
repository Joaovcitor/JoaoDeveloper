import "./style.css";
import { Component } from "react";
import { Header } from "../../components/header";
import {Projects} from "../../components/projects/index"

class Home extends Component {
  render() {
    return (
      <section className="principal">
          <Header></Header>
          <Projects></Projects>
      </section>
    );
  }
}

export default Home;
