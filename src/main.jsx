import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Plugin from './plugin';

export default function renderBoomiPlugin() {
  const container = document.getElementById('dropin-ui');
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <Plugin />
      </React.StrictMode>
    );
  } else {
      console.error(`Container with ID 'dropin-ui' not found.`);
  }
}

renderBoomiPlugin();