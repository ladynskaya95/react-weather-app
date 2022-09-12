import "./App.css"
import Weather from "./components/Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kiev" />
      <small>
        <a
          href="https://github.com/ladynskaya95/Vanilla-weather-app"
          target="blank"
        >
          Open-source code{" "}
        </a>{" "}
        by Nastya Ladynskaya
      </small>
    </div>
  );
}
