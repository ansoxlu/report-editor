import React, { useState } from 'react'
import { Metadata } from '../../types'
import styled from 'styled-components'
import { Input } from 'antd'

const Container = styled.div`
  width: 300px;
`

const Popover = styled.div`
  position: absolute;
  z-index: 2;
  left: -80px;
  top: -271px
`

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const MetadataInput = (props: { metadata: Metadata, value: string, onChange:(value: string) => void }) => {
  const [display, setDisplay] = useState(false)

  return (
    <Container>
      <Input placeholder="请输入内容" value={props.value} onChange={(ev) => props.onChange(ev.target.value)} onFocus={() => setDisplay(true)} />
      {display && (
        <Popover>
          <Cover onClick={() => setDisplay(false)}/>
          <div>
            {props.metadata.items.map((it, index) => (
              <div key={index}>
                {it?.alias ?? it.path}
              </div>
            ))}
          </div>
        </Popover>
      )}
    </Container>
  )
}

export default MetadataInput
