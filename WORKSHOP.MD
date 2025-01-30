# GitHub Copilot Workshop

## Code Completion

### Demonstrating Code Completion and Suggestion Feature

To demonstrate the Code Completion and Suggestion feature of Copilot, follow these steps:

1. Open the `App.tsx` file located in the `src` directory.
2. Inside the `App` component, start typing the following code snippet:

```tsx
useEffect(() => fetch(
```
Explain to the participants: "Copilot understands what I’m trying to do. When I start typing `useEffect(() => fetch(`, Copilot understands the context and suggests a full API call, including error handling!"

Copilot will provide a suggestion in ghost text. You can accept the suggestion by hitting the `TAB` key.

Expected Code Example
Here is the code example that Copilot is expected to suggest:
```tsx
  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
```
State management is highly efficient. Copilot intelligently identifies when `useState` is required and even suggests appropriate default values for state variables.

To demonstrate this, follow these steps:

1. Open the `App.tsx` file located in the `src` directory.
2. Inside the `App` component, start typing the following code snippet:

```tsx
const [data, setData] = useState(
```
Explain to the participants: "Copilot understands that I’m trying to manage state. When I start typing `const [data, setData] = useState(`, Copilot suggests a default value for my state variable!"

Copilot will provide a suggestion in ghost text. You can accept the suggestion by hitting the `TAB` key.

Expected Code Example
Here is the code example that Copilot is expected to suggest:
```tsx
const [data, setData] = useState(null);
```
It’s great for writing React components. If I create a button, Copilot suggests the JSX and even an event handler like `onClick`.

To demonstrate this, follow these steps:

1. Open the `App.tsx` file located in the `src` directory.
2. Inside the `App` component, start typing the following code snippet:

```tsx
<button onClick={
```
Explain to the participants: "Copilot understands that I’m trying to create a button with an event handler. When I start typing `<button onClick={`, Copilot suggests the complete JSX for the button and the `onClick` event handler!"

Copilot will provide a suggestion in ghost text. You can accept the suggestion by hitting the `TAB` key.

Expected Code Example
Here is the code example that Copilot is expected to suggest:
```tsx
<button onClick={() => alert('Button clicked!')}>
  Click me
</button>
```
Finally, debugging! If I get an error about type mismatches, Copilot suggests the correct type fixes automatically.

To demonstrate this, follow these steps:

1. Open the `App.tsx` file located in the `src` directory.
2. Inside the `App` component, introduce a type mismatch error by adding the following code snippet:

```tsx
const fetchData = (): string => {
  return "This is a string";
};

const App: React.FC = () => {
  const [data, setData] = useState<number | null>(null);

  useEffect(() => {
    const result = fetchData();
    setData(result); // This will cause a type error
  }, []);

  return (
    <div className="app">
      <NavBar />
      <main>
        <Header />
        <Sidebar />
        <section className="content">
          <h2>Welcome to the GitHub Copilot Workshop</h2>
          <p>This is a demo application to showcase the capabilities of GitHub Copilot.</p>
          <p>Explore the features and see how Copilot can assist you in writing code efficiently.</p>
          <p>Data: {data}</p>
        </section>
      </main>
    </div>
  );
};
```

3. Save the file and observe the TypeScript error in the console. You should see an error about the type mismatch.

4. Explain to the participants: "Copilot understands that there is a type mismatch error.
Then use copilot inline chat /fix command 

Copilot will provide a suggestion. Acept it.

Expected Code Example
Here is the code example that Copilot is expected to suggest:

```tsx
setData(Number(result)); // Correct fix: Converting the string to a number
```

This will fix the type mismatch error and demonstrate how Copilot can help with TypeScript errors.

That is conlude our demo part