import React from "react";



// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: "lightgrey",
    
  
      
    
  
  },
  headingStyle: {
    fontSize: "100px",
  },
  
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    
    <header style={styles.headerStyle} className="header">
      <h3 style={styles.headingStyle}>Jose Orozco</h3>
    </header>
      
  );
}
{/* <img src={process.env.PUBLIC_URL + "/images/blue.jpeg"} alt=""></img> */}

export default Header;
