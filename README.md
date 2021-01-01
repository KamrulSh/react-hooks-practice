This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Implementing React Hooks
1. <b>useState</b>: Returns a stateful value, and a function to update it. 
1. <b>useEffect</b>: To perform side effects in functional components. It helps to avoid redundant code in different lifecycle methods of a class component. It helps to group related code.
1. <b>useContext</b>: Accepts a context object (the value returned from React.createContext) and returns the current context value for that context.
1. <b>useReducer</b>: An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.
1. <b>useCallback</b>: Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).
1. <b>useMemo</b>: Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
1. <b>useRef</b>: Returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
1. <b>use...(Custom hooks)</b>: Used to avoid code duplication.



