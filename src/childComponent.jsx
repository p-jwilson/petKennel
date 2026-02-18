import React from 'react';

class ChildComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.onAction(this.props.id);
  }

  render() {

    let btnText = "";

    switch (this.props.curImg) {
      case 0:
        btnText = "Make Angry";
        break;
      case 1:
        btnText = "Feed Treat";
        break;
      case 2:
        btnText = "Give Hug";
        break;
      default:
        btnText = "Make Angry";
        break;
    }

    const moodText =
      this.props.curMood === 0 ? "Happy" :
      this.props.curMood === 1 ? "Angry" :
      "Lonely";

    return (
      <div style={{ width: "100%", maxWidth: "280px", textAlign: "center" }}>
        <h2>{this.props.name}</h2>

        <p><strong>Species:</strong> {this.props.species}</p>
        <p><strong>Breed:</strong> {this.props.breed}</p>
        <p><strong>Age:</strong> {this.props.age}</p>
        <p><strong>Gender:</strong> {this.props.gender}</p>
        <p><strong>Life Expectancy:</strong> {this.props.lifeExpectancy}</p>
        <p><strong>Mood:</strong> {moodText}</p>
        <img
          src={this.props.petImg[this.props.curImg]}
          alt={this.props.name}
          style={{ width: "250px", maxWidth: "100%", display: "block", margin: "0 auto" }}
        />

        <br />

        <button onClick={this.handleButtonClick}>
          {btnText}
        </button>
      </div>
    );
  }
}

export default ChildComponent;


