# E1 Implementation of Lexical Analysis

## Description


## Models


## Implementation
In order to develop the chatbot and implement its logic based on the DFA (Deterministic Finite Automaton) model, I utilized several programming languages. 

The initial step involved building the chatbot interface using HTML, which provided the structure of the application, including the elements necessary for user interaction.  On the other hand,  CSS was used to enhance the visuals and user experience.  This ensured a more engaging design by styling all of the chatbot components, including its toggler. Additionally,  a background picture was added  to simulate the webpage look.  

For the functionality and logic of the chatbot, my first approach was to include only the interaction logic in JavaScript and the core automaton logic in Prolog, as Prolog excels at handling logical operations.  However, I later realized that integrating the automaton logic directly into the JavaScript code would streamline the development process.  Therefore, the JavaScript code defines the states and transitions of the DFA, determining how the chatbot responds to user inputs based on predefined phrases and state transitions.

Below is a snippet of the JavaScript code demonstrating the automaton logic implementation:

// Define automaton starting state
const startState = 'a';

// Define transitions between states
const transitions = {
    a: { 0: 'b', 1: 'c', 2: 'd', 3: 'e', _: 'l' },
    b: { 0: 'f', 1: 'i', 2: 'a', 3: 'e', _: 'l' },
    c: { 0: 'a', 1: 'e', _: 'l' },
    d: { 0: 'a', 1: 'e', _: 'l' },
    f: { 0: 'g', 1: 'h', 2: 'b', 3: 'e', _: 'l' },
    // Additional state transitions...
};

// Define phrases mapped to transition numbers
const phraseToNumber = {
    "rental experience": 0,
    "rental properties" : 0,
    "property owners" : 1,
    // Additional phrases...


// Functionality to handle user inputs and transition states
function handleInput(input) {
    let currentState = startState;
    let transitionNumber = phraseToNumber[input] || '_';
    currentState = transitions[currentState][transitionNumber];
    // Additional logic...
}

This integration allowed me to maintain the chatbot's interaction logic and DFA logic in a single language and environment, making error handling more efficient while improving the processing of the chatbot's responses to ultimately deliver a functional and easy-to-use application.


## Tests


## Analysis


### Conclusion


## References
