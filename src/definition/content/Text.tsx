import React, { CSSProperties } from 'react'
import { ContentDefinition } from './types'
import { Metadata } from '../types'
import MetadataInput from './components/MetadataInput'

const Text: ContentDefinition<string, string> = {
  key: 'Text',
  defaultValue: '',
  description: '单独的文本.用于医院标题,提示信息等内容',
  title: '文本',
  Blueprint(props: {
    value: string
    onChange: (value: string) => void,
    metadata: Metadata,
    getData: (value: string | string[]) => any
  }) {
    return (
      <MetadataInput
        metadata={props.metadata}
        value={props.value}
        onChange={props.onChange}
        getData={props.getData}
      />
    )
  },
  Render(props: { result?: string; style: CSSProperties}) {
    if (!props.result) {
      // 不显示，用于通过编译
      return (<span style={{ display: 'none' }} />)
    }

    const direction = props.style.flexDirection
    // 判断换行符进行方法切换， 如无换行符且方向为 column 进行单字符换行
    const lines = props.result.split('\n').filter((it) => it)
    if (direction === 'column') {
      return (
        <div style={props.style}>
          {(lines.length > 1
            ? lines
            : Array.from(props.result)).map((it, index) => (
            // eslint-disable-next-line react/no-array-index-key
              <div key={index}>{it}</div>
          ))}
        </div>
      )
    }
    return (
      <div style={props.style}>
        {lines.map((it, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            {it}
            <br />
          </React.Fragment>
        ))}
      </div>
    )
  },
  Building(props: {
    value: string, result?: string; style:CSSProperties; onChangeActive: () => void
  }) {
    if (!props.result) {
      return (<div>{props.value}</div>)
    }
    const direction = props.style.flexDirection
    // 判断换行符进行方法切换， 如无换行符且方向为 column 进行单字符换行
    const lines = props.result.split('\n').filter((it) => it)
    if (direction === 'column') {
      return (
        <div style={props.style} onClick={() => props.onChangeActive()}>
          {(lines.length > 1
            ? lines
            : Array.from(props.result)).map((it, index) => (
            // eslint-disable-next-line react/no-array-index-key
              <div key={index}>{it}</div>
          ))}
        </div>
      )
    }
    return (
      <div style={props.style} onClick={() => props.onChangeActive()}>
        {lines.map((it, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            {it}
            <br />
          </React.Fragment>
        ))}
      </div>
    )
  },
}
export default Text
