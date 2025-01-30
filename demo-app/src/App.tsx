import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './App.css';

const App: React.FC = () => {
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
        </section>
      </main>
    </div>
  );
};

export default App;
