// Variable to track whether the chat has ended (initialized as ongoing by default)
let chatEnded = false; 

// Define automaton starting state
const startState = 'a';

// Define transitions between states
const transitions = {
    a: { 0: 'b', 1: 'c', 2: 'd', 3: 'e', _: 'l' },
    b: { 0: 'f', 1: 'i', 2: 'a', 3: 'e', _: 'l' },
    c: { 0: 'a', 1: 'e', _: 'l' },
    d: { 0: 'a', 1: 'e', _: 'l' },
    f: { 0: 'g', 1: 'h', 2: 'b', 3: 'e', _: 'l' },
    g: { 0: 'a', 1: 'e', _: 'l' },
    h: { 0: 'a', 1: 'e', _: 'l' },
    i: { 0: 'j', 1: 'k', 2: 'b', 3: 'e', _: 'l' },
    j: { 0: 'a', 1: 'e', _: 'l' },
    k: { 0: 'a', 1: 'e', _: 'l' },
    l: { 0: 'a', 1: 'e', _: 'l' }
};

// Define phrases mapped to transition numbers
const phraseToNumber = {
    // Rental experience section
    "rental experience": 0,
    "rental properties" : 0,
    "property owners" : 1,
    "available locations" : 0,
    "rental process" : 1,
    "how to contact the property owner?" : 0,
    "contact property owner":0,
    "property rules" : 1,
    "renting in italy": 0,
    "italy rental experience": 0,
    "renting process in italy": 0,
    "finding rental properties in italy": 0,
    "finding rental listings in italy": 0, 
    "renting a house in italy": 0,
    "renting an apartment in italy": 0,
    "renting a villa in italy": 0,
    "renting a flat in italy": 0,
    "renting a property in italy": 0,
    "first-time renting in italy": 0,
    "long-term rental experience in italy": 0,
    "short-term rental experience in italy": 0,
    "renting in italy as a foreigner": 0,
    "italy rental guide": 0,
    "how to rent in italy": 0,
    "rental process overview italy": 0,
    "steps to rent a home in italy": 0,
    "guide to renting in italy": 0,
    "rental property rules in italy": 0, 
    "experience with rental property owners in italy": 0, 
    // Rental costs section
    "rental costs": 1,
    "cost of renting": 1,
    "rental prices": 1,
    "how much is rent": 1,
    "rent prices": 1,
    "apartment rental costs": 1,
    "house rental costs": 1,
    "average rent": 1,
    "cost of rent in italy": 1,
    "rent expense": 1,
    "monthly rent": 1,
    "yearly rental cost": 1,
    "renting cost breakdown": 1,
    "rental fees": 1,
    "rental charges": 1,
    "rent cost guide": 1,
    "cost to lease": 1,
    "rental price range": 1,
    "cost of living rent": 1,
    "rent cost estimation": 1,
    "price of renting": 1,
    "rent cost details": 1,
    "rent price information": 1,
    "rent budgeting": 1,
    "rental expense": 1,
    // Legal requirements section
    "legal requirements": 2,
    "rental regulations": 2,
    "rental legalities": 2,
    "rental legal requirements": 2,
    "legal aspects of renting": 2,
    "rental legal info": 2,
    "lease legal requirements": 2,
    "rental contract laws": 2,
    "renting legal guide": 2,
    "rental legal guide": 2,
    "rental legal standards": 2,
    "renting legal framework": 2,
    "tenant legal information": 2,
    "legal rental terms": 2,
    // Main menu
    "main menu" : 0,
    // Exit chat 
    "exit" : 3,
    "exit chat" : 1,
};

// Functions to print information 
function getInfoCosts() {
    return `
    Renting a property in Italy involves various costs, including rent, utilities, and potential additional expenses. Here are some considerations to help you understand the typical rental costs in Italy:
    <br>
    <strong>1. Average Rent Prices</strong>
    On average, a one-bedroom apartment in a city center can range from €600 to €1,500 per month, while a similar apartment outside the city center may cost €400 to €1,000 per month.
    <br>
    <strong>2.  Additional Costs</strong>
    - Utilities: In addition to rent, tenants typically pay for utilities such as electricity, water, gas, and internet. These costs can vary depending on usage and location.
    - Condominium Fees:If you're renting an apartment in a building, you may need to pay monthly condominium fees (spese condominiali) for shared expenses like maintenance and cleaning of common areas.
    - Security Deposit: Landlords often require a security deposit, usually equivalent to one to three months' rent, which is refundable at the end of the tenancy if there are no damages or unpaid bills.
    - Insurance: While not mandatory, renters may choose to purchase renter’s insurance to protect personal belongings and liability.
    <br>
    <strong>3. Payment Schedule:</strong>
    Rent is usually paid monthly in advance, although some landlords may prefer quarterly or biannual payments.
    <br>
    <strong>4. Factors Affecting Rent Prices</strong>
    - City vs. Rural: Rental prices vary significantly between cities and rural areas. Cities like Rome, Milan, and Florence generally have higher rents compared to smaller towns. Plus properties located in prime neighborhoods or tourist areas tend to have higher rents.
    - Property Type: The type of property (apartment, house, villa) and its location within the city or region also affect rental prices.
    <br>
    We sincerely hope these rental costs and factors can help you budget effectively and make informed decisions when searching for rental accommodation in Italy.

    `;
}

function getInfoLegal() {
    return `
    Renting a property in Italy involves adhering to several legal requirements to ensure a smooth and lawful tenancy. Below are the key legal aspects you need to be aware of:
    <br>
    <strong>1. Codice Fiscale (Tax Code)</strong>
    - What It Is: A Codice Fiscale is an Italian tax code, similar to a Social Security Number in the United States.
    - Why You Need It: It's required for signing lease agreements, opening utility accounts, and other legal and financial transactions.
    - How to Get It: You can obtain a Codice Fiscale from the Agenzia delle Entrate (Italian Revenue Agency) or through the Italian consulate in your home country.
    <br>
    <strong>2. Residence Permit (Permesso di Soggiorno)</strong>
    - Who Needs It:Non-EU citizens staying in Italy for more than 90 days need a residence permit.
    - Application: Apply at the local police station (Questura) within eight days of arriving in Italy. You’ll need your visa, passport, proof of health insurance, and a completed application form.
    - Renewal: Permits must be renewed based on the length of your stay.
    <br>
    <strong>3. Lease Agreement Registration</strong>
    - Requirement: Lease agreements for rental periods over 30 days must be registered with the Agenzia delle Entrate.
    - Responsibility: This is typically done by the landlord, but ensure it’s completed to avoid any legal issues.
    - Registration Fee: There is a registration fee, which is usually split between the landlord and tenant.
    <br>
    <strong>4. Deposit and Rent Payments</strong>
    - Security Deposit:Typically equivalent to 1-3 months' rent. It is refundable at the end of the tenancy, provided there are no damages or unpaid bills.
    - Rent Payments: Usually paid monthly in advance. Ensure you understand the payment schedule and method.
    <br>
    <strong>5. Utilities and Maintenance</strong>
    - Utility Bills: Confirm who is responsible for utility bills (electricity, water, gas, internet). These are often the tenant's responsibility.
    - Maintenance: Understand the division of maintenance responsibilities. Tenants usually handle minor repairs, while landlords cover major structural repairs.
    <br>
    <strong>6. Tenant Rights and Responsibilities</strong>
    - Habitability: The property must be habitable, meaning it must meet basic living standards and safety regulations.
    - Privacy: Tenants have the right to privacy. Landlords cannot enter the property without prior notice and a valid reason.
    - Subletting: Check if subletting is allowed under your lease agreement. It generally requires the landlord's permission.
    <br>
    <strong>7. Insurance</strong>
    - Renter’s Insurance: While not mandatory, it’s advisable to have renter’s insurance to cover personal belongings and liability.
    <br>
    <strong>8. Dispute Resolution</strong>
    - Rental Disputes: Disputes between tenants and landlords can be resolved through conciliation boards (Commissione di Conciliazione) or by taking legal action in local courts.
    - Legal Advice: Consider consulting a lawyer or a tenant association (such as Sunia or Unione Inquilini) for advice and assistance.
    <br>
    <strong>9. Local Registration</strong>
    - Municipal Registration: Register your address with the local municipal office (Anagrafe) if you’re staying long-term. This is important for accessing local services and for tax purposes.
    <br>
    Understanding these legal requirements ensures that you are well-prepared for renting a property in Italy. Always read and understand your lease agreement fully and seek legal advice if needed to protect your rights and interests.
    `;
}

function getInfoLocations() {
    return `
    These are our various locations for rental properties in Italy:
    <br>
    <strong>1.  Tuscany</strong>
    Lease: Available for short-term rentals.
    <br>
    <strong>2.  Rome</strong>
    Lease:  Available for short-term and long-term rentals.
    <br>
    <strong>3. Amalfi Coast</strong>
    Lease: Available for weekly and monthly rentals.
    <br>
    <strong>4. Casa Firenze</strong>
    Lease: Available for short-term rentals.
    <br>
    <strong>5. Milan</strong>
    Lease: Available for short-term and long-term rentals.
    <br>
    <strong>6.  Sorrento</strong>
    Lease: Available for weekly rentals.
    <br>
    <strong>7. Venice</strong>
    Lease: Available for long-term rentals.
    <br>
    <strong>8. Naples</strong>
    Lease: Available for short-term rentals.
    <br>
    <strong>9. Sicily</strong>
    Lease: Available for seasonal rentals.
    <br>
    <strong>10. Lake Como</strong>
    Lease: Available for short-term rentals.
    `;
}

function getInfoProcess() {
    return `
    Renting a property in Italy can be an exciting experience, whether you're moving for work, study, or simply to enjoy the Italian lifestyle. Here’s a step-by-step guide to help you navigate the rental process:
    <br>
    <strong>1. Determine Your Needs and Budget</strong>
       - Property Type:Decide whether you want an apartment, house, or villa. Consider the size, number of bedrooms, and amenities.
       - Location: Choose a location that suits your lifestyle. Popular choices include Rome, Milan, Florence, Venice, and the Amalfi Coast.
       - Budget: Determine your budget for rent and additional expenses like utilities, maintenance, and agent fees.
    <br>
    <strong>2. Search and View Properties</strong>
    Inquire about the lease terms, including utilities, maintenance responsibilities, and any additional costs in our website. Also if possible, feel free to arrange visits to shortlisted properties. Inspect the condition, amenities, and neighborhood.
    <br>
    <strong>3. Understand the Lease Agreement</strong>
       - Lease Duration For Long Stays:Typical lease terms are 4+4 years (four years with an automatic renewal for another four years) or 3+2 years (three years with an option to renew for two more years).
       - Security Deposit: Typically, a deposit equivalent to 1-3 months' rent is required. This is refundable at the end of the lease, provided there are no damages.
    <br>
    <strong>5. Legal Requirements</strong>
       - Codice Fiscale: Obtain an Italian tax code (Codice Fiscale), necessary for signing the lease and setting up utilities.
       - Residence Permit: If you're a non-EU citizen, ensure you have the appropriate visa and residence permit.
       - Contract Registration: Leases over 30 days must be registered with the Italian Revenue Agency (Agenzia delle Entrate). This is usually done by the landlord, but confirm it’s completed.
    <br>
       For more information visit our legal requirements section found in the Main Menu.  
    <br>
    <strong>6. Sign the Lease Agreement</strong>
       - Review Terms: Carefully read the lease agreement. Ensure all terms discussed are included.
       - Sign and Exchange: Sign the lease and exchange copies with the landlord. Pay the security deposit and any initial rent as agreed.
    <br>
    <strong>7. Ending the Lease</strong>
       - Notice Period: Provide the required notice period if you decide to terminate the lease early. This is usually 6 months in advance.
       - Final Inspection: Arrange a final inspection with the landlord to agree on the condition of the property and the return of the security deposit.
       - Return Keys: Return the keys to the landlord and ensure all outstanding bills are paid.
    <br>
    Renting in Italy involves several steps, but with careful planning and understanding of the local rental market, you can find a property that suits your needs and enjoy your stay in this beautiful country.
    `;
}

function getInfoContact() {
    return `
    Communicating with the property owner is essential for tenants in Italy to address any concerns, report maintenance issues, or seek approval for specific requests. Here are some steps to effectively contact the property owner:
    <br>
    <strong>1. Access the contact information symbol found in the right corner of our app.</strong>
    <br>
    <strong>2. Choose "Contact the Property Owner."</strong>
    <br>
    <strong>3. Review all the official contact information provided by the owner or property management company. This may include phone numbers, email addresses, or mailing addresses listed in the lease agreement or rental documents.</strong>
    <br>
    If you need to reach the property owner urgently, consider calling the provided phone number. Be polite and concise when explaining the purpose of your call, whether it's to report an emergency, request maintenance, or discuss lease-related matters.For non-urgent inquiries or requests, sending an email or text message to the property owner can be an effective communication method.
    <br>
    Please don’t forget to clearly state your name, address, and the nature of your inquiry or request in the email subject line. Provide detailed information and any relevant documentation to support your message.In case you encounter difficulties contacting the property owner or resolving issues, seek assistance by calling client support directly for guidance.
    `;
}

function getInfoRules() {
    return `
    When renting a property in Italy, tenants are expected to adhere to certain rules and regulations set by landlords or property management. These  vary among locations and properties, nevertheless here's a guide outlining the most common ones: 
    <br>
    <strong>1. Payment of Rent and Utilities</strong>
    Tenants are responsible for paying rent and utilities on time as outlined in the lease agreement.
    <br>  
    <strong>2. Property Maintenance</strong>
    Tenants are expected to maintain the property in good condition and promptly report any damages or maintenance issues to the landlord.
    <br>
    <strong>3.  Noise and Disturbance</strong>
    Tenants must respect quiet hours and avoid causing excessive noise or disturbance that may disrupt neighbors.
    <br>
    <strong>4. Pets</strong>
    Some rental properties may have restrictions or guidelines regarding keeping pets. If pets are allowed, tenants are responsible for ensuring they don't cause damage to the property or inconvenience to neighbors.
    <br>
    <strong>5. Subletting</strong>
    Subletting the property without the landlord's permission is prohibited. 
    <br>
    <strong>6. Use of Common Areas</strong>
    Tenants residing in apartment buildings or condominiums should respect rules governing the use of common areas. Also, proper disposal of garbage and recycling according to local regulations is expected.
    <br>
    <strong>7. Guests and Visitors</strong>
    Tenants are responsible for the behavior of their guests and registering  visitors while they are on the premises.
    <br>  
    Adhering to these property rules helps foster a positive landlord-tenant relationship and ensures a pleasant experience.
    `;
}

// Functions to print menus 
function printMainMenu() {
    const finalMenuHTML = `
        <button class="menu-option" data-value="Rental Experience">Rental Experience</button>
        <button class="menu-option" data-value="Rental Costs">Rental Costs</button>
        <button class="menu-option" data-value="Legal Requirements">Legal Requirements</button>
        <button class="menu-option" data-value="Exit">Exit</button>
    `;
    // Create a temporary container element to hold the final menu HTML
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = finalMenuHTML;

    // Select the buttons from the temporary container
    const buttons = tempContainer.querySelectorAll('.menu-option');

    // Attach event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', handleMenuOptionClick);
    });

    // Return the final menu HTML
    return tempContainer.innerHTML;
}

function printRentalMenu() {
    const finalMenuHTML = `
        <button class="menu-option" data-value="Rental Properties">Rental Properties</button>
        <button class="menu-option" data-value="Property Owners">Property Owners</button>
    `;
    
    // Create a temporary container element to hold the final menu HTML
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = finalMenuHTML;

    // Select the buttons from the temporary container
    const buttons = tempContainer.querySelectorAll('.menu-option');

    // Attach event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', handleMenuOptionClick);
    });

    // Return the final menu HTML
    return tempContainer.innerHTML;
}

function printRentalPropertiesMenu() {
    const finalMenuHTML = `
        <button class="menu-option" data-value="Available Locations">Available Locations</button>
        <button class="menu-option" data-value="Rental process">Rental process</button>
    `;
    
    // Create a temporary container element to hold the final menu HTML
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = finalMenuHTML;

    // Select the buttons from the temporary container
    const buttons = tempContainer.querySelectorAll('.menu-option');

    // Attach event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', handleMenuOptionClick);
    });

    // Return the final menu HTML
    return tempContainer.innerHTML;
}

function printOwnersMenu() {
    const finalMenuHTML = `
        <button class="menu-option" data-value="Contact property owner">Contact property owner</button>
        <button class="menu-option" data-value="Property Rules">Property Rules</button>
    `;

    // Create a temporary container element to hold the final menu HTML
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = finalMenuHTML;

    // Select the buttons from the temporary container
    const buttons = tempContainer.querySelectorAll('.menu-option');

    // Attach event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', handleMenuOptionClick);
    });

    // Return the final menu HTML
    return tempContainer.innerHTML;
}

function printFinalMenu() {
    const finalMenuHTML = `
        <button class="menu-option" data-value="Main Menu">Main Menu</button>
        <button class="menu-option" data-value="Exit Chat">Exit</button>
    `;
    
    // Create a temporary container element to hold the final menu HTML
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = finalMenuHTML;

    // Select the buttons from the temporary container
    const buttons = tempContainer.querySelectorAll('.menu-option');

    // Attach event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', handleMenuOptionClick);
    });

    // Return the final menu HTML
    return tempContainer.innerHTML;
}


// Function to handle user clicks on menu options
function handleMenuOptionClick(event) {
    // Element that triggered the event
    const button = event.target;

    // Get the value of the data-value attribute
    const buttonValue = button.getAttribute("data-value"); 

    if (buttonValue) {
        // Send the button value to the chat
        handleChat(buttonValue);
    }
}

// Function to map a user's message to a number based on predefined phrases
function messageToNumber(message) {
    // Check if the message is in the phraseToNumber
    const normalizedMessage = message.toLowerCase();
    if (phraseToNumber.hasOwnProperty(normalizedMessage)) {
        return phraseToNumber[normalizedMessage];
    }

    // If the message doesn't match any predefined phrases, return null
    return null;
}

// Function to process the current state and return the corresponding output
function processState(currentState) {
    let output = '';
    switch (currentState) {
        case 'a':
            output = printMainMenu();
            break;
        case 'b':
            output = printRentalMenu();
            break;
        case 'c':
            output = getInfoCosts() + printFinalMenu();
            break;
        case 'd':
            output = getInfoLegal() + printFinalMenu();
            break;
        case 'e':
            output = 'Thank you for using our services. Feel free to return anytime if you have more questions or need assistance. Have a great day!';
            setTimeout(() => {
                // Hide the chat interface after a short delay
                document.body.classList.remove("show-chatbot");
            }, 8000);
            chatEnded = true;
            break; 
        case 'f':
            output = printRentalPropertiesMenu();
            break;
        case 'g':
            output = getInfoLocations() + printFinalMenu();
            break;
        case 'h':
            output = getInfoProcess() + printFinalMenu();
            break;
        case 'i':
            output = printOwnersMenu();
            break;
        case 'j':
            output = getInfoContact() + printFinalMenu();
            break;
        case 'k':
            output = getInfoRules() + printFinalMenu();
            break;
        case 'l':
            output = 'Sorry, I did not understand that.\n' + printFinalMenu();
            break;
    }
    return output;
}

// Function to get the next state based on the current state and user input
function getNextState(currentState, input) {
    return transitions[currentState][input] !== undefined ? transitions[currentState][input] : transitions[currentState]['_'];
}

// Select necessary elements from the DOM
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");

// Variable to store the user's message
let userMessage;

// Variable to store the initial height of the textarea
const inputInitHeight = chatInput.scrollHeight;

// Function to create a chat <li> element with the given message and className
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    // Add the 'chat' and the given className (either 'outgoing' or 'incoming')
    chatLi.classList.add("chat", className); 
    
    // Determine the inner content based on the message type
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    
    return chatLi;
}

// Variable to store the current state in the automata 
let currentState = startState;

// Function to handle sending a chat message
const handleChat = (input) => {

    if (chatEnded) return;
    
    // Determine whether the input is from a button click or typing
    if (typeof input === 'string') {
        // Button click: input is the button value
        const buttonValue = input;
        userMessage = buttonValue; // Set the userMessage directly from the button value
    } else {
        // Typing input: input is an event object, extract the input value
        userMessage = chatInput.value.trim(); // Get and trim the user's message
    }

    // If the message is empty, do nothing
    if (!userMessage) return;

    // Clear the textarea and reset its height if input is typing
    if (typeof input !== 'string') {
        chatInput.value = "";
        chatInput.style.height = `${inputInitHeight}px`;
    }

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Map user message to a number
    const userChoice = messageToNumber(userMessage, currentState) !== null ? messageToNumber(userMessage, currentState) : null;

    // Go to the next state corresponding to the user's input
    const nextState = getNextState(currentState, userChoice);
    currentState = nextState;

    // Append the ellipsis to simulate the chatbot "thinking"
    const ellipsisLi = createChatLi("...", "incoming");
    chatbox.appendChild(ellipsisLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Simulate a delay for the chatbot's response
    setTimeout(() => {
        // Remove the ellipsis
        chatbox.removeChild(ellipsisLi);

        // Generate the actual chatbot response
        const chatbotResponse = processState(currentState);

        // Append the actual chatbot response
        chatbox.appendChild(createChatLi(chatbotResponse, "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight); // Scroll to the bottom of the chatbox
    }, 600); // 600ms delay time
}

// Adjust the height of the textarea based on its content
chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`; // Reset height to initial height
    chatInput.style.height = `${chatInput.scrollHeight}px`; // Set height to match actual content height
});

// Toggle the chatbot visibility when the toggler is clicked
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// Add a click event listener to the send button to handle sending the chat message
sendChatBtn.addEventListener("click", handleChat);

// Add a click event listener to the document to handle clicks on menu options
document.addEventListener("click", handleMenuOptionClick);