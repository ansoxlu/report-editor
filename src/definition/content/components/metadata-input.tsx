import React, { useState, useRef } from 'react'
import { Metadata, MetadataItem } from '../../types'
import styled from 'styled-components'
import { Input, Popover as AntdPopover, Tag, message } from 'antd'
import { TextAreaRef } from 'antd/lib/input/TextArea'
import { EditTwoTone } from '@ant-design/icons'

const Container = styled.div`
`

const InputArea = styled.div<{ focus: boolean }>`
  position: relative;
  ${props => !props.focus ? '' : 'z-index: 3;'}
`

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const MetadataContainer = styled.div`
  width: 400px;
  height: calc(100vh - 60px);
  top: 60px;
  right: 300px;
  background-color: #fff;
  border: 1px solid #ddd;
  position: fixed;
  overflow: auto;
`
const Title = styled.div`
  font-size: 16px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Items = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #aaa;
  cursor: pointer;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }

  > div:nth-child(1) {
    display: flex;
    margin-bottom: 10px;

    > p:nth-child(2) {
      flex: auto;
    }

    > p:nth-child(3) {
      min-width: 70px;
      text-align: right;
    }
  }
`

export type Type = 'text' | 'object'

const MetadataInput = (props: { metadata: Metadata, value: string, onChange:(value: string) => void, getData: (value: string | string[]) => any, type?: Type }) => {
  const [focus, setFocus] = useState(false)
  const [search, setSearch] = useState<{ value: string, items: MetadataItem[] }>({ value: '', items: [] })
  const ref = useRef<TextAreaRef | null>(null)

  const changeInput = (value: string) => {
    if (props.type === 'object') {
      return message.warn('请点击数据源进行输入')
    }
    props.onChange(value)
  }

  const changeSearch = (value: string) => {
    const items = props.metadata.items.filter(it => it.path.includes(value) || it.alias?.includes(value))

    setSearch({
      value,
      items
    })
  }

  const onFocus = () => {
    setFocus(true)
  }

  const entryMetadata = (item: MetadataItem) => {
    if (props.type === 'object') {
      return props.onChange(item.path)
    }

    const selectionStart = ref.current?.resizableTextArea?.textArea.selectionStart ?? 0
    const val = `\${${item.alias ? `${item.alias}[${item.id}]` : item.path}}`
    if (selectionStart === 0) {
      props.onChange(`${val}${props.value}`)
      ref.current!.resizableTextArea!.textArea.selectionStart = 0
    } else if (selectionStart === props.value.length) {
      props.onChange(`${props.value}${val}`)
    } else {
      const before = props.value.substring(0, selectionStart)
      const after = props.value.substring(selectionStart)
      const start = /\${[^}]+$/g.exec(before)
      const end = /((?!\${).)}/.exec(after)
      // 判断光标是否处于${占面符中}，是则替换当前值
      if (start && end) {
        props.onChange(`${before.substring(0, start.index)}${val}${after.substring(end.index + 2)}`)
      } else {
        props.onChange(`${before}${val}${after}`)
      }
    }
  }

  return (
    <Container>
      <InputArea focus={focus}>
        <Input.TextArea
          ref={value => { ref.current = value }}
          style={{ height: props.type === 'object' ? 60 : 150 }}
          placeholder="请输入内容" value={props.value}
          onChange={(ev) => changeInput(ev.target.value)}
          onFocus={onFocus}
        />
      </InputArea>
      {focus && (
        <Popover>
          <Cover onClick={() => setFocus(false)}/>
          <MetadataContainer>
            <Title onClick={() => window.open(`/metadata/${props.metadata.id}`)}>
              数据源
              <EditTwoTone />
            </Title>
            <Input allowClear value={search.value} onChange={ev => changeSearch(ev.target.value)} placeholder="请输入搜索内容" />
            {(props.metadata.items.length === 0 || (search.value && search.items.length === 0)) && (<div>无内容</div>)}
            {props.metadata.items.map((it, index) => (
              <Items key={index} onClick={() => entryMetadata(it)}>
                <div>
                  <AntdPopover content={it.path} trigger="hover" placement="left">
                    <p><Tag color="blue">{it?.alias ?? it.path}</Tag></p>
                  </AntdPopover>
                  <p/>
                  <p>
                    {it.required && (<Tag color="cyan">必填</Tag>)}
                    {!it.required && (<Tag color="red">选填</Tag>)}
                  </p>
                </div>
                <div>
                  <p>{props.getData(`\${${it.path}}`)}</p>
                </div>
              </Items>
            ))}
          </MetadataContainer>
        </Popover>
      )}
    </Container>
  )
}

export default MetadataInput
