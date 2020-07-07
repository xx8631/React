import React, { Component } from 'react'
import { ThemeProvider, UserProvider } from "../../../Context";
import ConSumerPage from './ConSumerPage';
/*context-provider 的使用方法*/
export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      },
      user: {
        name: "小明"
      }
    };
  }
  changeColor = () => {
    const { themeColor } = this.state.theme;
    this.setState({ theme: { themeColor: themeColor === 'red' ? "blue" : "red" } })

  }
  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <p>ContextPage</p>
        {/*更改主题色*/}
        <button onClick={this.changeColor}>change color</button>
        {/*提供参数 */}
        <ThemeProvider value={theme}>
          <UserProvider value={user}>
            <ConSumerPage /> {/* 可以接受参数 */}
          </UserProvider>
        </ThemeProvider>
      </div>
    );
  }
}
