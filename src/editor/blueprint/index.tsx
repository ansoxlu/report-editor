import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import StyleBlueprint from './style-blueprint'
import styled from 'styled-components'
import { Content, Layout, Style } from '../enum'

const useStyles = makeStyles({
  tabs: {
    height: 45
  }
})

const BlueprintContainer = styled.aside`
  width: 300px;
  display: flex;
  flex-direction: column;
`

function Blueprint (props: {
  value: Layout | Content | undefined
  onChange: (style: Style, data: {[key: string]: string}) => void
}) {
  const [current, setCurrent] = useState<number>(0)

  const changeTab = (ev: React.ChangeEvent<{}>, val: number) => {
    setCurrent(val)
  }

  const classes = useStyles()
  return (
    <BlueprintContainer>
      <Paper square className={classes.tabs}>
        <Tabs
          value={current}
          indicatorColor="primary"
          textColor="primary"
          onChange={changeTab}
          aria-label="disabled tabs example"
        >
          <Tab label="样式"/>
          <Tab label="属性"/>
        </Tabs>
      </Paper>
      <div hidden={current !== 0}>
        {!!props.value && (<StyleBlueprint value={props.value!} onChange={style => { props.onChange(style, props.value!.data) }}/>)}
      </div>
      <div hidden={current !== 1}>
        {!!props.value && (<span>属性</span>)}
      </div>
    </BlueprintContainer>
  )
}

export default Blueprint
