import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import React from "react";
//=================================================
import MyComponent from "./components/MyComponent";

class App extends React.Component {
  state = {
    name: "Haven nguyen",
    address: "distric 9",
    age: 21,
  };

  handleClick() {
    console.log("you clicked me");
  }
  handleOnMoveOver() {
    console.log("Heyy");
  }

  render() {
    return (
      <div>
        <p>My name is Haven</p>
        <MyComponent />
        <h1>
          Hello {this.state.name} in {this.state.address}
        </h1>

        <button onClick={this.handleClick}>click me</button>
        <button onMouseOver={this.handleOnMoveOver}>havor me</button>
      </div>
    );
  }
}
// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <p>My name is Haven</p>
//       <MyComponent />
//     </div>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>My name is Haven</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
