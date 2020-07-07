/*Context：组价跨层级通信： 类似vue的provider和inject*/  
import React from 'react';

//用createContext创建context
export const ThemeContext=React.createContext({themeColor:"pink"});//创建
export const ThemeProvider=ThemeContext.Provider;//提供者
export const ThemeConsumer=ThemeContext.Consumer;//消费者


export const UserContext=React.createContext();
export const UserProvider=UserContext.Provider;
export const UserConsumer=UserContext.Consumer;

