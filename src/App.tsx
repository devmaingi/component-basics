import Section from "./components/Section";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <h1 className="text-4xl">Welcome to the Components Library</h1>
      <Section title="Section 1">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </Section>

      <Section title="Section 2">
        <h3>Subtitle</h3>
        <p>
          {" "}
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Section>

      <Section title="Section 3">
        <p>
          {" "}
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </Section>
      <Section title="Button Example">
        <p>This is an example of a button component:</p>
        <div className="grid grid-cols-2 gap-4">
      
        <Button
          type="button"
          text="Click Me"
          onClick={() => alert("Button Clicked!")}
        />
        <Button
          type="button"
          text="Submit"
          onClick={() => alert("Button Clicked!")}
        />
        </div>
      </Section>
    </main>
  );
}

export default App;
