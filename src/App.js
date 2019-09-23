import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListMovies from "./components/listMovies/ListMovies";
import WithLoading from "./components/withLoading/WithLoading";

let movies = [
  {
    name: "inception",
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/e8/01/39/e8013988-4dad-2282-8d04-3767b35879da/pr_source.lsr/268x0w.png",
    rating: 4,
    year: "2512"
  },
  {
    name: "harry potter",
    image: "",
    rating: 5,
    year: "2365"
  },
  {
    name: "insolate",
    image: "",
    rating: 3,
    year: "06636"
  },
  {
    name: "pirates of the caraibes",
    image: "",
    rating: 2,
    year: "2626548"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 5000);
  };

  render() {
    return (
      <div className="App">
        <ListMovies movies={movies} isLoading={this.state.loading} />
      </div>
    );
  }
}

export default App;
