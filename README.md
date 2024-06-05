# E1 Implementation of Lexical Analysis

## Description


## Models


## Implementation
In order to develop the chatbot and implement its logic based on the DFA (Deterministic Finite Automaton) model, I utilized several programming languages. 

The initial step involved building the chatbot interface using HTML, which provided the structure of the application, including the elements necessary for user interaction.  On the other hand,  CSS was used to enhance the visuals and user experience.  This ensured a more engaging design by styling all of the chatbot components, including its toggler. Additionally,  a background picture was added  to simulate the webpage look.  

For the functionality and logic of the chatbot, my first approach was to include only the interaction logic in JavaScript and the core automaton logic in Prolog (code file: automata.pl), as Prolog excels at handling logical operations.  However, I later realized that integrating the automaton logic directly into the JavaScript code would streamline the development process.  Therefore, the JavaScript code defines the states and transitions of the DFA, determining how the chatbot responds to user inputs based on predefined phrases and state transitions.

Below is a snippet of the JavaScript code demonstrating the automaton logic implementation:

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/c844d021-ffeb-46db-8e81-8eccdd139590)

This integration allowed me to maintain the chatbot's interaction logic and DFA logic in a single language and environment, making error handling more efficient while improving the processing of the chatbot's responses to ultimately deliver a functional and easy-to-use application.

Note: It is important to mention that the HTML section and interaction logic in JavaScript are based in the basic concepts described in the following video tutorial https://youtube.com/watch?v=a37BL0stIuM&si=oww3-NymACNW26ye.


## Tests

To test the application, please download a zip of this repository.

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/811f898e-a110-4924-8375-196fcdc65bd7)

Next, open the HTML file and click on the chatbot icon located at the bottom left corner.

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/401e8ddd-66ed-4f73-b90b-0e8a7554aa9a)

Then, open the chatInputs.pdf file and choose one of the test inputs and send it to begin the conversation with the chatbot. 

![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/513904a1-a6a2-4a53-83fc-87f41159d783) 
![image](https://github.com/paolamgarrido/E4_Paradigm/assets/111533069/0024c715-6080-4011-89f5-f4629aca8e03)



You will be guided by the chatbot menu, so there is no need to worry about typing an input in some place other than the main menu, as shown below:


## Analysis


### Conclusion


## References
