import React from 'react'
import config from '../config.json'
import { FormControl, Grid, InputLabel, MenuItem, Switch, TextField, Typography, Select } from '@material-ui/core'
import { Content, Layout } from '../index'

type Item = {
  key?: string,
  title: string,
  value?: Item[] | number[] | string[] | { title: string, value: string }[],
  type?: string
}

function Style (props: {
  value: Layout | Content,
  onChange: (key: string, val: boolean | string[] | string | number) => void
}) {
  const Items = (props: {item : Item, value: Layout | Content, onChange: (val: boolean | string[] | string | number) => void}) => {
    const value = props.value.data[props.item.key!]

    switch (props.item.type) {
      case 'switch':
        return (
          <li>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Off</Grid>
                <Grid item>
                  <Switch checked={value as boolean || false} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => props.onChange(ev.target.checked)} name="checkedC" />
                </Grid>
                <Grid item>On</Grid>
              </Grid>
            </Typography>
          </li>
        )
      case 'select': {
        const selectValue = props.item.value!.map((it) => {
          if (typeof it === 'object') {
            return (<MenuItem key={it.value as string} value={it.value as string}>{it.title}</MenuItem>)
          }
          return (<MenuItem key={it} value={it}>{it}</MenuItem>)
        })

        return (
          <li>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={(ev: React.ChangeEvent<{value: string | unknown}>) => props.onChange(ev.target.value as string)}
              >
                {selectValue}
              </Select>
            </FormControl>
          </li>
        )
      }
      case 'input':
        return (
          <li>
            <TextField label={props.item.title} value={value} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => props.onChange(ev.target.value)} />
          </li>
        )
      case 'group':
        return <div/>
      default:
        return <div/>
    }
  }

  const items = (props.value.css).map(key => {
    const css: {[key: string]: string | Item} = config.css
    const it = css[key]
    if (!it) {
      return null
    }
    if (typeof it === 'string') {
      return { key, type: 'input', title: it, value: [] }
    }
    return { ...it, key }
  })
    .filter(it => it)
    .map((it) => <Items key={it!.key} item={it!} value={props.value} onChange={val => props.onChange(it!!.key, val)} />)
  return (
    <div className="Style">
      <ul>
        {items}
      </ul>
    </div>
  )
}

export default Style
