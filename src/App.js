import Props from './Props.js'
import Clock from './State'
import State2 from './State2'

function App() {
  return (
    <div>
      <Props name="Anthony" age="26" />
      <Clock />
      <State2 />
    </div>
  );
}

export default App;
