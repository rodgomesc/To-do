import React, { Fragment } from "react";
import "./styles.css";

export default class Todo extends React.Component {
  state = {
    todos: [],
    inputValue: []
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ todos: [...this.state.todos, this.state.inputValue] });
  };

  handleInput = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="wrapper">
            <ul className="list">
              {this.state.todos.map(todo => (
                <li className="listItem">
                  {todo}
                  <div>x</div>
                </li>
              ))}
            </ul>
            <form onSubmit={this.onSubmit}>
              <input
                placeholder="adicione alguma tarefa aqui..."
                onChange={this.handleInput}
              />
              <button>+</button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
