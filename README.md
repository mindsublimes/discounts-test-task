## Project Steup 
-- npm install
-- npm run dev 
## node version 20
 --  v20.12.1
## Introduction
Briefly introduce the project and its purpose.

## Folder Structure
src/
│
├── components/
│   ├── RadioButtons.tsx
│   ├── DiscountCodeInput.tsx
│   ├── GenerateCodeButton.tsx
│   └── NoteField.tsx
│
├── store/
│   ├── index.ts
│   └── slices/
│       ├── discountSlice.ts
│       └── notesSlice.ts
│
├── App.tsx
├── index.tsx
├── App.css
├── tailwind.css
└── ...

Purpose of each folder:

- `src/`: Contains all the source code for the project.
  - `components/`: Holds React components.
    - `RadioButtons.tsx`: Component for implementing radio selection buttons.
    - `DiscountCodeInput.tsx`: Component for inputting and validating discount codes.
    - `GenerateCodeButton.tsx`: Component for generating random discount codes.
    - `NoteField.tsx`: Component for entering notes or comments.
  - `store/`: Contains Redux-related files.
    - `index.ts`: Index file for configuring the Redux store.
    - `slices/`: Holds Redux slice files.
      - `discountSlice.ts`: Redux slice for managing discount code state.
      - `notesSlice.ts`: Redux slice for managing notes or comments state.
- `App.tsx`: Main application component.
- `index.tsx`: Entry point of the application.
- `tailwind.css`: Tailwind CSS file for styling the components.
- `...`: Other files and folders specific to the project.

## Project Functionality

### DiscountCodeInput Component
- Allows users to input discount codes.
- Validates the input based on specific criteria (e.g., length, format).
  - ### Discount Code Rules

1. **Format**:
   - The discount code should consist of both uppercase letters and numbers.
   - It should start with one or more uppercase letters followed by one or more numbers.

2. **Length**:
   - The length of the discount code should be between a minimum of 6 characters and a maximum of 12 characters.

3. **No Spaces**:
   - There should be no spaces at the beginning, in between, or at the end of the discount code.

4. **Uppercase Letters First**:
   - The discount code should start with uppercase letters.

5. **Allowed Characters**:
   - Only uppercase letters (A-Z) and numbers (0-9) are allowed in the discount code. No special characters or symbols are allowed.

6. **Uniqueness**:
   - Each discount code should be unique within the system to ensure that no duplicate codes are generated.
- Displays error messages for invalid codes.
- Shows success message upon successful validation.
- Dispatches valid discount codes to the Redux store.

### GenerateCodeButton Component
- Generates random discount codes based on specified criteria.
- Displays the generated discount code to the user.

### RadioButtonComponent  
### Notes Component

The Notes component allows users to enter notes or comments. Here's its functionality:

1. **Input Field**:
   - Provides a text input field where users can enter notes or comments.
   - Allows users to type and edit text freely.

2. **State Management**:
   - Manages the state of the entered notes or comments internally.
   - Updates the state in real-time as the user types or edits the text.

3. **Accessibility**:
   - Ensures accessibility features are implemented, such as proper labeling and focus management.

4. **Integration with Redux**:
   - Optionally integrates with Redux store to manage the state globally if needed.
   - Dispatches actions to update the Redux store when the text is changed.

### Radio Button Component

The Radio Button component allows users to select options from a predefined set of choices. Here's its functionality:

1. **Options**:
   - Displays a set of radio buttons representing different options.
   - Each radio button corresponds to a specific option.

2. **Selection**:
   - Allows users to select one option from the available choices.
   - Highlights the selected option visually.

3. **State Management**:
   - Manages the state of the selected option internally.
   - Updates the state when a different option is selected.

4. **Accessibility**:
   - Ensures accessibility features are implemented, such as proper labeling and keyboard navigation.

5. **Integration with Redux**:
   - Optionally integrates with Redux store to manage the state globally if needed.
   - Dispatches actions to update the Redux store when the selection changes.

These components provide essential functionality for users to interact with the application, input data, and make selections based on their preferences. They enhance the user experience by enabling easy input and selection mechanisms.
