import React from "react";
import "./App.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      itemList: {
        updatedList:JSON.parse(localStorage.getItem("itemList")) || []
      }
    };
    this.doneItem = this.doneItem.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  addItem() {
    if (this.state.input) {
      
      this.setState(
        (state) => ({
          itemList:{
            ...state.itemList,
              updatedList: [...state.itemList.updatedList, { text: state.input, done: false }]
          },
          input: "",
        }));
    } else {
      alert("Please enter an item");
    }
  }

  doneItem(index) {
    this.setState(
      (state) => {
        const updatedList = state.itemList.updatedList.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              done: !item.done,
            };
          }
          return item;
        });
        return {
          itemList: {
            ...state.itemList,
            updatedList,
          },
        };
      },
    );
  }
  deleteItem(index) {
    this.setState(
      (state) => ({
        itemList: {
          ...state.itemList,
          updatedList: state.itemList.updatedList.filter((_, i) => i !== index),
        },
      }),
      () => localStorage.setItem("itemList", JSON.stringify(this.state.itemList.updatedList))
    );
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.addItem();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.itemList.updatedList !== this.state.itemList.updatedList) {
      localStorage.setItem("itemList", JSON.stringify(this.state.itemList.updatedList));
    }
  }

  render() {
    const itemListrend = this.state.itemList.updatedList.map((item, index) => {
      return (
        <div className="items" key={index}>
          <p className={item.done ? "done-item" : ""}>
            {index + 1}. {item.text}
          </p>
          <div className="buttons">
            <button className="delete-btn done" onClick={() => this.doneItem(index)}>
              Done
            </button>
            <button className="delete-btn" onClick={() => this.deleteItem(index)}>
              Delete
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className="main-div">
        <div className="head">
          <h1>GROCERY ITEMS</h1>
        </div>
        <div className="add-items">
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button onClick={() => this.addItem()} className="add-btn">
            Add Item
          </button>
        </div>
        <div className="items-cont">
          <ol>{itemListrend}</ol>
        </div>
      </div>
    );
  }
}

export default Welcome;
