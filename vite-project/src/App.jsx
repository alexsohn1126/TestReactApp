import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as Sentry from '@sentry/react';

function ErrorButton() {
  return (
    <button onClick={() => {
      new Array(2 ** 40);
      new Array(-1);
      new ArrayBuffer(2 ** 32); // 32-bit system
      new ArrayBuffer(-1);

      const a = [];
      a.length -= 1; // set the length property to -1

      const b = new Array(2 ** 32 - 1);
      b.length += 1; // set the length property to 2^32
      b.length = 2.5; // set the length property to a floating-point number

      const c = new Array(2.5); // pass a floating-point number

      // Concurrent modification that accidentally grows the array infinitely
      const arr = [1, 2, 3];
      for (const e of arr) {
        arr.push(e * 10);
      }
    }}>
      Break the world
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ErrorButton/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
