import Props from './Props.js'
import Clock from './State'
import State2 from './State2'
import List from "./list"
import Form from "./form"


function App() {
  return (
    <div>
      <Props name="Anthony" age="26" />
      <Clock />
      <State2 />
      <List />
      <Form />
    </div>
  );
}

export default App;
