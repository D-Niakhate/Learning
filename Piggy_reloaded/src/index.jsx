import React from "react";
import ReactDOM from "react-dom";
import Table from "./Table";
import FormNewEntry from "./FormNewEntry";
import Total from "./Total";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { id: 1, name: "Loto ticket", desc: "", price: 20 },
        { id: 2, name: "Beers", desc: "Party night \\o/", price: -15 },
        { id: 3, name: "Phone Bill", desc: "January", price: -29.99 },
      ],
      Total: 0,
    };
  }

  componentDidMount() {
    const needUpD = [...this.state.entries];
    needUpD.map((chaqObj) => (chaqObj[" "] = <button>X</button>));
    //console.log(needUpD);
    this.setState({ entries: needUpD });
    this.updateTotal();
  }
  handleDelete = (chaqueObjet) => {
    this.updateTotal();
    const needUpD = [...this.state.entries];
    const index = needUpD.indexOf(chaqueObjet);
    needUpD.splice(index, 1);
    this.setState({ entries: needUpD });
    //console.log(needUpD);
  };
  handleSubmit = (event, nouvOp) => {
    event.preventDefault();
    const needUpD = [...this.state.entries];
    nouvOp["id"] = needUpD.length + 1;

    needUpD.push(nouvOp);
    needUpD.map((chaqObj) => (chaqObj[" "] = <button>X</button>));

    this.setState({ entries: needUpD });
    this.updateTotal();
  };
  updateTotal = () => {
    // const tabPrices = this.state.entries.map((chaqObj) =>
    //   parseFloat(chaqObj.price)
    // );
    // const totalPrice = tabPrices.reduce((partialSum, a) => partialSum + a, 0);
    this.setState({}, () => {
      this.setTotal();
    });
    // console.log(lTota);
  };
  setTotal = () => {
    const tabPrices = this.state.entries.map((chaqObj) =>
      parseFloat(chaqObj.price)
    );
    const totalPrice = tabPrices.reduce((partialSum, a) => partialSum + a, 0);
    this.setState({
      Total: totalPrice,
    });
  };
  //
  // handleChange = (event) => {
  //   //console.log(event.currentTarget.value);
  //   // const nouvOp = {};
  //   // nouvOp[event.currentTarget.name] = event.currentTarget.value;
  //   // console.log({ nouvOp });
  // };
  //eventTarget.firstChild.nodeValue  eventTarget.innerHTML
  render() {
    return (
      <div>
        <Table entries={this.state.entries} handleDelete={this.handleDelete} />
        <Total lTot={this.state.Total} />
        <FormNewEntry
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
