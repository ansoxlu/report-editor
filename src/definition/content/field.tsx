// import React, { CSSProperties } from 'react'
// import { Styles } from '../../styles'
// import { Content } from '../index'
//
// class Field implements Content<string[], string[]> {
//   styles: Styles<any>[] = [];
//   title: string = '文本';
//   value = ['', ''];
//   describe: string = '单独的文本.用于医院标题,提示信息等内容'
//
//   blueprint (props: { value: string[]; change: (value: (string | string[])) => void }) {
//     return (
//       <div>
//         <div>{props.value[0]}:</div>
//         <div>{props.value[1]}</div>
//       </div>
//     )
//   }
//
//   render (props: { result: string[]; styles: Styles<any>[] }) {
//     const style = props.styles.reduce<CSSProperties>((pv, it) => {
//       return Object.assign(pv, it.render(it.value)) as CSSProperties
//     }, {})
//     return (<div style={style}>{props.result}</div>)
//   }
// }
//
// // const Field: Content<string[]> = {
// //   title: '文本',
// //   describe: ,
// //   id: 'text',
// //   value: ,
// //   styles: [],
// //   render (props: { result: string[]; styles: Styles<any>[] }) {
// //
// //   },
// //   blueprint (props: { value: string | string[]; change: (value: (string | string[])) => void }) {
// //     return undefined
// //   }
// //
// // }
export default {}
