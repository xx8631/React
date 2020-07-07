import React, { Component } from 'react'
import { ThemeConsumer, UserConsumer } from '../../../Context'
/*context-consumer 的使用方法*/
export default class ConSumerPage extends Component {
  render() {
    return (
      <div>
        <h3>ConSumerPage</h3>
        <ThemeConsumer>
          {context => (
            <div className={context.themeColor}>
              omg
              <UserConsumer>
                {user => <p>{user.name}</p>}
              </UserConsumer>
            </div>
          )}
        </ThemeConsumer>
      </div>
    )
  }
}
