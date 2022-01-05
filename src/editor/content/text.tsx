import React, { CSSProperties } from 'react'
import { Content } from './index'
import { Input } from 'antd'
import { StyleAll } from '../styles'

const Text: Content<string, string> = {
  key: 'Text',
  defaultValue: '',
  styles: StyleAll,
  describe: '单独的文本.用于医院标题,提示信息等内容',
  title: '文本',
  Blueprint (props: { value: string; onChange: (value: string) => void }) {
    return (
      <Input placeholder={Text.title} value={props.value} onChange={(ev) => props.onChange(ev.target.value)} />
    )
  },
  Render (props: { result?: string; style: CSSProperties}) {
    const direction = props.style.flexDirection
    if (!direction || direction === 'row') {
      return (<div style={props.style}>{props.result}</div>)
    }
    // 文字竖向排列
    return (
      <div style={props.style}>{
        Array.from(props.result ?? '').map((it, index) => { return (<div key={index}>{it}</div>) })
      }</div>
    )
  },
  Building (props: { result?: string; style:CSSProperties; onChangeActive: () => void }) {
    const direction = props.style.flexDirection
    if (!direction || direction === 'row') {
      return (<div style={props.style} onClick={() => props.onChangeActive()}>{props.result}</div>)
    }
    // 文字竖向排列
    return (
      <div style={props.style} onClick={() => props.onChangeActive()}>{
        Array.from(props.result ?? '').map((it, index) => { return (<div key={index}>{it}</div>) })
      }</div>
    )
  }
}
export default Text
