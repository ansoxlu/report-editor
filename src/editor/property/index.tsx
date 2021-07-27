import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import Style from './style'
import styled from 'styled-components'
import { Content, Layout } from '../index'

const useStyles = makeStyles({
  tabs: {
    height: 45
  }
})

const PropertyContainer = styled.aside`
  width: 300px;
  display: flex;
  flex-direction: column;
`

function Property (props: {
  value: Layout | Content | null
  onChange: (key: string, val: boolean | string[] | string | number) => void
}) {
  const [current, setCurrent] = useState<number>(0)

  const changeTab = (ev: React.ChangeEvent<{}>, val: number) => {
    setCurrent(val)
  }

  const classes = useStyles()
  return (
    <PropertyContainer>
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
      <div hidden={current !== 0 && !!props.value} className="f-auto">
        <Style value={props.value!} onChange={props.onChange}/>
      </div>
      <div hidden={current! !== 1 && !!props.value} className="f-auto">
        属性
      </div>
    </PropertyContainer>
  )
}

export default Property
