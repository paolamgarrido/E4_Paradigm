# E4 Demonstration of a Programming Paradigm

## Description

Programming paradigms are fundamental approaches to writing computer programs because they provide various frameworks that guide developers in structuring and implementing their code. Common programming paradigms include Automata Theory, Regular Expressions, Languages/Grammars, Lambda Calculus, Threads and Processes, among others. Each paradigm offers unique concepts and methodologies that can be leveraged to solve specific types of problems effectively.

In this project, we developed a chatbot application utilizing the Automata Theory paradigm. Automata Theory is a branch of computer science that deals with the design and analysis of algorithms for processing and recognizing patterns. By applying the concept of Deterministic Finite Automata (DFA), we structured our chatbot to manage conversations through a series of states and transitions, ensuring predictable and reliable interactions with users.

Our chatbot application is embedded in a webpage designed to help users find rental properties in Italy. It assists users in navigating rental information, such as rental properties, costs, legal requirements, and more. This chatbot is useful because it provides a guided and interactive way for users to obtain relevant information quickly and efficiently. The chatbot can handle various scenarios, including invalid inputs, by redirecting users to appropriate states to maintain the flow of conversation.

The use of Automata Theory in our application ensures that each possible user input is properly managed, making the chatbot highly user-friendly. The deterministic nature of DFA also allows the chatbot to transition smoothly between different states, ensuring a coherent and seamless user experience. The following sections will delve deeper into the implementation details and the advantages of using the chosen paradigm for this application.


## Model

To start building the logic of our chatbot's inputs and menu, we chose to employ the concept of Deterministic Finite Automata (DFA). This model begins in a designated state and reads symbols from an input string, with the objective of transitioning between states according to the transition function, continuing until there is no input left. It is important to note that there must be exactly one transition exiting every state for each possible input symbol (Sipser, 2013). This is useful because each state can represent a section of the main menu, scenarios where invalid input is entered or the end of the conversation, while each transition can represent the user input in the conversation.

The DFA is comprised of the following five components:

1. **Q**: A finite set of states.
2. **Σ**: A finite set of input symbols, known as the alphabet.
3. **δ**: The transition function, which, given a state and an input symbol, returns the next state. Formally, δ: Q × Σ → Q.
4. **q0**: The start state (an element of Q).
5. **F**: A set of accepting states (a subset of Q).

To identify these components, we first created a flow diagram of the menu:

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/a0d6e60a-3ef3-424f-90e3-3d136e123150)

Next, we began constructing the diagram by building the branches of the menu that can be classified as the smallest subexpressions. According to Michael Sipser, starting with the smallest subexpressions is the most effective approach because it ensures a clear and manageable structure. This method allows us to focus on the fundamental components before integrating them into a more complex overall system.

![automata drawio (4)](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/a33da73f-9159-4047-bd59-04d38598e8dd)

We then completed the diagram by adding the transitions that allowed all possible combinations established in our flow diagram.

![automata drawio (2)](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/38e55ccd-2585-4c6a-b5ec-e0b41740d2e9)

Finally, we considered the possibility of invalid inputs in the chat and added Sink Table (ST) transitions. Sink Tables are used to handle invalid or unrecognized inputs by redirecting the conversation to a designated state that prompts the user for a valid input. This ensures the chatbot can manage unexpected inputs gracefully. In other words, there can be states that have no outgoing transitions for certain symbols. Therefore, we assume these transitions exist but lead to a non-accepting state where the user cannot proceed unless a valid input is entered (University of Groningen, 1998). The following table represents the main invalid inputs:

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/b00c1e5c-c237-4f73-93cb-8cca4f6d7bce)

This resulted in our final automaton, shown in the diagram below:

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

To test the application, please download a zip of this repository. Next, open the HTML file and click on the chatbot icon located at the bottom right corner.

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

Once you choose to exit the program, the next message will be returned and the chatbot window is going to close after a couple of seconds. Following this, if you open the chatbot window, you won't be able to send any messages in the chat.

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

Therefore, by induction, the overall time complexity of the program is O(n), where 𝑛 is the number of user inputs processed, as each input involves a series of O(1) operations that are repeated for every input.


### Conclusion


## References

Sipser, M. (2013). Introduction to the Theory of Computation. En SIGACT news (Vol. 3, pp. 35-37, 64-66). Cengage Learning. http://debracollege.dspaces.org/bitstream/123456789/671/1/Introduction%20to%20the%20Theory%20of%20Computation_2013%20Sipser.pdf

University of Groningen. (1998). Finite-state automata. https://www.let.rug.nl/~vannoord/papers/fsa/node3.html
