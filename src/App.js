import React from "react";
import Board from "./Board";

const winningCombos = [
  [0, 1, 2], // 1st row
  [3, 4, 5], // 2nd row
  [6, 7, 8], // 3rd row
  [0, 3, 6], // 1st column
  [1, 4, 7], // 2nd column
  [2, 5, 8], // 3rd column
  [0, 4, 8], // Diagonal
  [2, 4, 6] // Diagonal
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boardState: ["", "", "", "", "", "", "", "", ""],
      turns: 0
    };
  }

  handleClick = e => {
    let boardCopy = [...this.state.boardState];
    let { turns } = this.state;
    boardCopy[e.target.getAttribute("data-index")] =
      turns % 2 === 0 ? "x" : "o";
    this.setState({
      boardState: boardCopy,
      turns: this.state.turns + 1
    });
  };

  // componentDidUpdate() {
  //   this.checkWin(winningCombos);
  // }

  checkWin = (winningCombos, boardState) => {
    // winningCombos.forEach(combo => {
    for (let i = 0; i < winningCombos.length; i++) {
      let posWin = winningCombos[i]
        .map(position => boardState[position])
        .join("");

      if (posWin === "xxx" || posWin === "ooo") {
        return true;
      }
    }
  };

  render() {
    const { boardState } = this.state;
    const hasWinner = this.checkWin(winningCombos, boardState);
    console.log(hasWinner);
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        {hasWinner ? (
          <div>Game</div>
        ) : (
          <Board boardState={boardState} handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default App;
