import * as React from 'react';
import { Button } from 'antd';
// import ReactMarkdown from 'react-markdown';

const CounterRef = () => {
  const count = React.useRef(0);
  const [num, setNum] = React.useState(0);

  const log = () => {
    count.current++;
    setTimeout(() => {
      console.log(count.current);
      setNum(count.current);
    },         1000);
  };

  return (
    <div>
      <p>You clicked {count.current} times</p>
      <p>setTimeout trigger {num} times</p>

      <Button onClick={log}>Click me</Button>
      {/* <ReactMarkdown source={input}/> */}
    </div>
  );
};

export { CounterRef };
