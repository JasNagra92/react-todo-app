import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoContainer from './functionBased/components/TodoContainer';

import "./functionBased/App.css"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TodoContainer />);