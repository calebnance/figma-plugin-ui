import { Button, Checkbox } from 'figma-plugin-ui';

import './App.css';

function App() {
  return (
    <div className="app">
        <h1>figma-plugin-ui components</h1>

        <h2>Buttons</h2>
        <Button />
        <Button type="primary" />

        <h2>Checkbox</h2>
        <Checkbox checked />
        <Checkbox checked={false} label="Label" />
    </div>
  );
}

export default App;
