### Redux

#### State management

- Store:

  - holds the state
  - made from reducer function
  - when an action id dispatched, a new state is calculated

- Change the state: dispatch an "action"
- Action: Object with `type` and (optionally) `payload`

  `{ type: 'ADD_NUMBER', payload: 4 }`

  `{ type: 'UPDATE_USER', payload: { username: 'Rein' } }`

- Reducer:

  - (**pure**) function
  - parameters are `state` & `action`
  - returns a new state

- `store.getState()` to get the current state of the store
- in React we use `useSelector` to get stat <span style="font-size:2em;">&darr;</span>

- Selector:

  - (**pure**) function
  - when given the global Redux state object, selects some data from it
  - `useSelector` for getting information from the state, to your component

#### React & Redux

react-redux: integrates react and redux
How to set up a store
Hot to use state of the store in a React component
How to dispatch an action to the store
Hot to change the state in the store (reducer logic)

Redux devtools

---

# Plan

## Data model

- user:
- pizzas:

```js
state = {
  user: {
    name: 'Rein'
    likes: [1]
  },
  pizzas: [
    { id: 1, name: 'Margherita', ingredients: []},
    { id: 2, name: 'Tonno', ingredients: []}],
    { id: 3, name: 'Pineapple', ingredients: []}],
}
```

## Setup Redux (1)

- Setup the redux store
  - `createStore()`
  - `reducer` with initialState
  - export your `store`
  - use the Provider in index.js
  - test: Redux DevTools

## Make Components: (2)

- Profile
- PizzaCard
- Add Pizza Form

## Get the data from the redux store, and use it in the components

- import `useSelector`
- write a selector function (returns part of the state)
- pass your selector into useSelector
- display data

## Implement behaviour

- Liking

  - event listeners / handlers
  - dispatch an action

- Handle action in the reducer
  - write "case" in our reducer
  - do reducer logic... {...state, something}

## Strategy

- Go with the flow (don't miss steps by being all over the place)

  - hardcode some information
  - put the information in your component using a `selector`
  - display the info
  - make some event listeners so the user can interact
  - dispatch an action
  - change the state

- Check yourself

  - `console.log`
  - redux devtools

---

## **STEPS**:

**(1) Setup store**

- create react app

  `create-react-app pizza-redux-hooks`

- install the dependencies

  `npm install redux react-redux`

- create folder `src/store`, place an `index.js` in it

  ```js
  // src/store/index.js
  import { createStore } from "redux";
  import reducer from "./reducer"; //we didn't create this yet

  const store = createStore(reducer);

  export default store;
  ```

- add the importer reducer in `src/store/reducer.jss`

  ```js
  // src/store/reducer.js
  const initialState = {
    user: {
      name: "Helva",
    },
    pizzas: [
      {
        id: 161235,
        name: "Pizza Margherita",
        description: "The typical Neapolitan pizza, etc",
        bought: 5,
      },
    ],
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_PIZZA": {
        // => Ask yourself: what is action.payload?
        return {
          ...state,
          pizzas: [
            ...state.pizzas,
            {
              id: action.payload.id,
              name: action.payload.name,
              description: action.payload.description,
              bought: 0,
            },
          ],
        };
      }
      default: {
        return state;
      }
    }
  }
  ```

- make the redux store available everywhere in the app with the `provider` component

  ```js
  //src/index.js
  import { Provider } from "react-redux";
  import store from "./store";

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  ```

- **Redux DevTools**

  connect your store with the devtools by adjusting `store/index.js`:

  ```js
  //src/store/index.js:
  const enhancer =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(reducer, enhancer);
  ```

  this makes the store visible in the browser

- run the app `npm run start`

**(2) Make components**

- create folder `src/components`, place an `PizzaList.js` in it

  (export/import in App.js etc etc)

- import `useSelector` for getting information from the state, to your component

  ```js
  //src/components/PizzaList.js
  import { useSelector } from "react-redux";

  function selectUser(reduxState) {
    console.log("State in selector", reduxState);
    return reduxState.user;
  }

  export default function PizzaList() {
    const user = useSelector(selectUser);
    console.log("User in component", user);
    return (
      <div>
        <h1>Hello {user.name}</h1>
      </div>
    );
  }
  ```
