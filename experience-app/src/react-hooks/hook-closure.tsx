import * as React from 'react';
import { Button } from 'antd';
import ReactMarkdown from 'react-markdown';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [num, setNum] = React.useState(0);

  const log = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(count);
      setNum(count);
    },         1000);
  };

  const input = `
   \`\`\`jsx
    const [count, setCount] = React.useState(0);

    const log = () => {
        setCount(count + 1);
        setTimeout(() => {
        console.log(count);
        },         3000);
    };

    <div>
        <p>You clicked {count} times</p>
        <Button onClick={log}>Click me</Button>
    </div>
   \`\`\`
  `;

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>clicked {num} times</p>

      <Button onClick={log}>Click me</Button>
      <ReactMarkdown source={input} />
    </div>
  );
};

class CounterClass extends React.Component {
  state = { count: 0, setTimeoutCount: 0 };

  log = () => {
    this.setState({
      count: this.state.count + 1,
    });
    setTimeout(() => {
      this.setState({ setTimeoutCount: this.state.count });
      // console.log(this.state.count);
    },         3000);
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <p>setTimeout trigger {this.state.setTimeoutCount} times</p>
        <Button onClick={this.log}>Click me</Button>
      </div>
    );
  }
}

const HookClosure = () => {
  return (
    <>
      <Counter />
      <CounterClass />
    </>
  );
};

export { HookClosure };
