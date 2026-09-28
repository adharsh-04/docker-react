import React from "react";
import "./App.css";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Sample React App</h1>
          <p>This is a static homepage for practicing CI/CD pipelines.</p>
          <button className="primary-btn">Click Me</button>
        </header>
        <section className="App-section">
          <h2>About</h2>
          <p>
            This sample React application is designed to help you test build,
            Dockerization, and deployment workflows.
          </p>
        </section>
        <footer className="App-footer">
          <p>© 2026 My Sample React App</p>
        </footer>
      </div>
  );
}

export default App;
