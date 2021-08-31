# Bank-account-manager-react
The purpose of this project is to test your understanding on all the concepts we've covered so far in the React and Redux classes.
It will also put your git skills to test as you'll be collaborating with a partner using git.

## project summary
Bank account manager app bootstraped with Create React App that has full CRUD functionality for
- Adding accounts
- Seeing all accounts added
- Editing accounts
- Deleting accounts

This repository already has all the boilerplate with the UI developed. However none of the full functionalities are working yet. Your job is to complete 
all the CRUD functionality using react redux for shared state management.

## instructions
- Fork your own copy of the repo
- Clone the repo locally
- Run yarn install (or npm install) to install project dependencies
- Open project in your text editor
- Create a new branch where you'll commit your changes
- Go through the codebase to get familiar with the code and how each component is connected together
- Make sure that you have a clear idea of the flow and how the app is supposed to work. Ask questions to get clarity.
- Complete the CRUD features using React and Redux.
- Commit your changes each step of the way.
- Test your work to confirm that it works as expected.
- Deploy your work and add the link to the ReadMe.
- Update the ReadMe to outline the steps you took to make the app work.
- Push your work to Github.
 CRUD
- Submit a pull request to the main repo: https://github.com/codetrainafrica/contact-manager-react/

##steps
- Fork the repository and clone it onto local computer.
- Install dependencies for the project using yarn install.
- Add a Reducer folder and in it create a AccountReducer.js file.
- Add an Action folder and in it create an AccountsAction.js file.
- Add a Store folder and in it create a store.js file.
- Wrap the Router in the index.js with Provider from react-redux. With store as props from the store js file.
- Inside the reducer create a data(state) call it initialState. 
- And create the AccountsReducer function which returns a switch statement with cases(addAccount, deleteAccount and editAccount).
- In the AccountsAction.js file create the action for the cases.
- In the BankAccount component create a mapStateToProps function to read the data from the store
- In the addAccount component create a dispatch function to write new account onto the store.
- Create a dispatch and a mapStateToProps to be able to read and update the data in the store using id.
- add a build command in package.json.
- Commit is done after any change in each components or file.

