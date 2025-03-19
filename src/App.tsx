// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {Card, Button, DatePicker} from "antd";
import 'antd/dist/reset.css';
import Hello from './components/Hello';
import Goodbye from './components/Goodbye';

let counter = 0
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
 console.log(date, dateString);
};
const onClick = (event: any) => {
 console.log(counter++)
}


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Hello name="World XD"/>

       <div>
        <Card title="Default card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content 123</p>
        </Card>
        <br/>
        <Button type="primary" onClick={onClick}>Button1</Button>
        <Button type="primary" danger>Button2</Button>
        <br/>
        <DatePicker onChange={onChange} />
      </div>
      <Goodbye name="World"/>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Hello World111</p>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
