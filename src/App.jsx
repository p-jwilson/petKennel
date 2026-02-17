import React, { Component } from 'react';
import ChildComponent from './childComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: initialData.map((a) => ({
        ...a,
        curImg: 0,
        curMood: 0,
      })),
    };
  }

  handleUpdate = (id) => {
    console.log("Parent received event for ID:", id);

    const updatedCharacters = this.state.characters.map((pet) => {
      if (pet.id === id) {
        return {
          ...pet,

          curImg:
            pet.curImg === 0 ? 1 :
            pet.curImg === 1 ? 2 :
            0,

          curMood:
            pet.curMood === 0 ? 1 :
            pet.curMood === 1 ? 2 :
            0
        };
      }
      return pet;
    });

    this.setState({ characters: updatedCharacters });
  };

  render() {

    const pageStyle = {
      minHeight: "100vh",
      background: "#f7d6e6",
      padding: "32px 20px 44px",
      color: "#1f1f1f",
    
      display: "flex",
      flexDirection: "column",
      alignItems: "center",        
    };
    

    const titleStyle = {
      margin: 0,
      textAlign: "center",
      fontFamily: '"Hanalei", system-ui',
      fontSize: "48px",
    };

    const gridStyle = {
      width: "100%",
      maxWidth: "1100px",     
      marginTop: "26px",
    
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "40px",           
    
      justifyItems: "center",
    };
    

    return (
      <div style={pageStyle}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Hanalei&display=swap');
        `}</style>

        <h1 style={titleStyle}>Paul&apos;s Exotic Animal Menagerie</h1>

        <div style={gridStyle}>
          {this.state.characters.map((char) => (
            <ChildComponent
              key={char.id}
              id={char.id}
              name={char.name}
              age={char.age}
              gender={char.gender}
              lifeExpectancy={char.lifeExpectancy}
              species={char.species}
              breed={char.breed}
              petImg={char.petImg}
              curImg={char.curImg}
              curMood={char.curMood}
              onAction={this.handleUpdate}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

