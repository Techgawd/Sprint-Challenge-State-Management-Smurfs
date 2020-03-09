1. What problem does the context API help solve?

Prop drilling. Having to specifically pass each prop through every level lowers readability and code isn’t as clean

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is the single source of truth for all state in the application that might need to be used by other components. Actions are to update the state. Reducers are used to process the incoming actions or replace the state with a new one.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is local to a single component and won't need to affect the rest of the app. Application state is where all information relevant to presenting the App to the user is kept. It's better to keep state in each component probably in a larger scale app. Where there is less state, maybe state can be handled as "application state".

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to make Action calls asynchronously by returning a function from a function. It requires action creators to follow the different states the promise can be in, from attempting, to success or failure.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

If there's only a few values to pass around, I'd use Context and props for a quick and easy setup. For any bigger scale application, it would have to be Redux for best organization once the framework is set up.

