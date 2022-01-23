/// <reference types="react-scripts" />
declare module 'react-json-editor-ajrm/locale/zh-cn'
declare module '!!raw-loader!*' {
  const content: string
  export default content
}

declare module '*.json' {
  const jsonValue: any
  export default jsonValue
}

declare module '*.png' {
  const value: any
  export = value;
}
