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
      <div>
        <h2>{this.props.name}</h2>

        <p><strong>Species:</strong> {this.props.species}</p>
        <p><strong>Breed:</strong> {this.props.breed}</p>
        <p><strong>Age:</strong> {this.props.age}</p>
        <p><strong>Life Expectancy:</strong> {this.props.lifeExpectancy}</p>
        <p><strong>Mood:</strong> {moodText}</p>

        console.log("petImg:", this.props.petImg);
        <img
          src={this.props.petImg[this.props.curImg]}
          alt={this.props.name}
          width="250"
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


