import React from 'react';

const Greetings = (props) => {
  let greeting;
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'hello';
  }

  return (
    <div className="Greetings">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
