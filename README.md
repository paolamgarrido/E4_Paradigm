# E1 Implementation of Lexical Analysis

## Description


## Models

![automata drawio (1)](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/8fc8a229-c07e-4d73-ad94-5536bf079748)


## Implementation
In order to develop the chatbot and implement its logic based on the DFA (Deterministic Finite Automaton) model, I utilized several programming languages. 

The initial step involved building the chatbot interface using HTML, which provided the structure of the application, including the elements necessary for user interaction.  On the other hand,  CSS was used to enhance the visuals and user experience.  This ensured a more engaging design by styling all of the chatbot components, including its toggler. Additionally,  a background picture was added  to simulate the webpage look.  

For the functionality and logic of the chatbot, my first approach was to include only the interaction logic in JavaScript and the core automaton logic in Prolog (code file: automata.pl), as Prolog excels at handling logical operations.  However, I later realized that integrating the automaton logic directly into the JavaScript code would streamline the development process.  Therefore, the JavaScript code defines the states and transitions of the DFA, determining how the chatbot responds to user inputs based on predefined phrases and state transitions.

Below is a snippet of the JavaScript code demonstrating the automaton logic implementation:

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/c844d021-ffeb-46db-8e81-8eccdd139590)

This integration allowed me to maintain the chatbot's interaction logic and DFA logic in a single language and environment, making error handling more efficient while improving the processing of the chatbot's responses to ultimately deliver a functional and easy-to-use application.

Note: It is important to mention that the HTML section and interaction logic in JavaScript are based on the basic concepts described in the following video tutorial: https://youtube.com/watch?v=a37BL0stIuM&si=oww3-NymACNW26ye.


## Tests

To test the application, please download a zip of this repository. Next, open the HTML file and click on the chatbot icon located at the bottom left corner.

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/811f898e-a110-4924-8375-196fcdc65bd7)

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/401e8ddd-66ed-4f73-b90b-0e8a7554aa9a)

Then, open the chatInputs.pdf file, choose one of the test inputs and send it to begin the conversation with the chatbot.

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/0024c715-6080-4011-89f5-f4629aca8e03)

You will be guided by the chatbot menus, so there is no need to type an input. However, if you prefer, you can still type an input, but only in the main menu section to keep the application functioning properly. As shown below, simply click on the button that corresponds to your choice:

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/e48eddbe-bffd-4f3f-96ab-e3e0f86473bb)

The information output once you reach the answer to your questions will most likely look something like this, but text format can vary depending on the answer:

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/aaf34abe-20b2-4eb6-bfb5-075320755d16)

If you enter an invalid input during the chat, the output will be as follows:

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/d9938d4c-8a5c-4080-9dda-9b077994baa5)

Once you choose to exit the program, the chatbot will return the next message and close the window after a couple of seconds. Following this, if you open the chatbot window, you won't be able to send any messages in the chat.

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/0ce65d15-b8c5-49e4-86d5-c7be08148111)

Note: Documented tests that follow the previous guidelines can be found in the tests.pdf file.


## Analysis

To determine the overall time complexity of our program, let’s first outline its steps and key operations.

### Steps

- Variable Initialization
- Define Transitions
- Define Functions to Print Information and Menus
- Handle User Input:
  - Determine if the input is from a button or text
  - Update the chatbox with user input and chatbot response
  - Map user message to a number
  - Transition to the next state
  - Process the current state to generate the chatbot response

Each of these steps in the code has a constant time complexity of O(1).

### Key Operations

The key operations also have a constant time complexity of O(1) due to the following reasons:
- **Printing Menus**: Each menu is a predefined set of buttons.
- **Mapping User Input to a Number**: Uses a dictionary lookup.
- **State Transitions**: Each state transition and the associated response generation are O(1).
- **Appending Messages to the Chatbox**: Involves DOM manipulation of one element at a time.

### Proof by Induction

**Base Case**: For an input sequence of length 1, all operations are O(1). Thus, the complexity is O(1).

**Inductive Step**: Assume that for an input sequence of length \( k \), the operations take O(k) time. Now, consider an input sequence of length
\( k+1 \). Handling the additional input involves the same set of O(1) operations as described above. This results in the following operation:

O(k) + O(1) = O(k+1)

Therefore, by induction, the overall time complexity of your program is O(n), where 𝑛 is the number of user inputs processed, as each input involves a series of O(1) operations that are repeated for every input.


### Conclusion


## References
