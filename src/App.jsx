import { useState } from 'react'
import ReactRouter from '../src/routes/AppRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReactRouter />
    </>
  );
}

export default App;
