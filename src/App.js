import { Router } from './routes/router'

function App() {
  console.error = function () { };
  console.warn = function () { };
  return <Router />
}

export default App;