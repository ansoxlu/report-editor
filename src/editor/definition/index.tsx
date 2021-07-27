import React, { useState } from 'react'
import config from '../config.json'
import { mapValues } from 'lodash'
import {
  createStyles,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Switch,
  Theme
} from '@material-ui/core'
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided
} from 'react-beautiful-dnd'
import styled from 'styled-components'
import { Page } from '../index'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 230,
      padding: 0
    }
  })
)
const DefinitionContainer = styled.aside`
  width: 250px;
  color: #333;

  .MuiInputLabel-outlined {
    transform: translate(14px, 10px) scale(1);
  }
  .MuiOutlinedInput-input {
   padding: 10px 14px;
  }

  .MuiFormControlLabel-root {
    margin-left: 11px;
    justify-content: space-between;
    display: flex;
    padding-right: 10px;

  }
  .MuiFormControlLabel-label {
    font-size: 14px;
  }
`
const Title = styled.div`
  padding: 0 12px;
  display: flex;
  height: 40px;
  align-items: center;
  font-size: 14px;
`

const SwitchBox = styled.div`
  margin: 0 12px 8px 8px;
  border-radius: 5px;
  height: 38px;
  border: 1px solid rgba(0, 0, 0, 0.23);
`

const Items = styled.ul`
  padding: 0 10px 10px;
  font-size: 12px;
  flex-wrap: wrap;
  display: flex;
`

const Item = styled.li<{isDragging?: boolean}>`
  display: flex;
  height: 30px;
  width: 48%;
  margin: 1%;
  align-items: center;
  background: #f3f3f3;
  padding-left: 5px;
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  user-select: none;
`

const Clone = styled(Item)`
  + div {
      display: none !important;
  }
`

function Definition (props: {
  onChangePage: (page: Page) => void
  page: Page
}) {
  const [size, setSize] = useState<string>('')

  const changeSize = (ev: React.ChangeEvent<{ value: string | unknown }>) => {
    const size = config.page.sizes.find(it => it.title === ev.target.value)
    setSize(size?.title ?? '')
    props.onChangePage({
      ...props.page,
      width: size?.width ?? '0',
      height: size?.height ?? '0'
    })
  }

  const changePageSwitch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangePage({
      ...props.page,
      pageable: ev.target.name === 'pageable' ? ev.target.checked : props.page.pageable,
      landscape: ev.target.name === 'landscape' ? ev.target.checked : props.page.landscape
    })
  }

  const PageSizes = () => {
    const sizes = config.page.sizes.map(it =>
      <MenuItem key={it.title} value={it.title}>{it.title}</MenuItem>
    )
    const classes = useStyles()
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="page-sizes-input">尺寸</InputLabel>
        <Select
          labelId="page-sizes-input"
          id="page-sizes"
          label="尺寸"
          value={size}
          onChange={changeSize}
        >
          {sizes}
        </Select>
      </FormControl>
    )
  }

  const ItemsBox = (props: { data: object}) => {
    const list = Object.values(mapValues(props.data, (val: any, key) => ({
      ...val,
      key
    }))).filter(it => it.key !== 'readme')

    return (
      <Items>
        {list.map((it, idx) =>
          <Draggable key={it.key} draggableId={it.key} index={idx}>
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
              <React.Fragment>
                <Item
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    style={snapshot.isDragging ? provided.draggableProps.style : {}}
                >
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-bar-code"/>
                  </svg>
                  {it.readme}
                </Item>
                {snapshot.isDragging && (
                  <Clone>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-bar-code"/>
                    </svg>
                    {it.readme}
                  </Clone>
                )}
              </React.Fragment>
            )}
          </Draggable>
        )}
      </Items>
    )
  }
  return (
    <Droppable droppableId="definition">
      {(provided: DroppableProvided) => (
        <DefinitionContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Title>{config.page.readme}</Title>
          <PageSizes/>
          <SwitchBox>
            <FormControlLabel
              label="页头页尾"
              labelPlacement="start"
              control={
                <Switch
                  checked={props.page.pageable}
                  onChange={changePageSwitch}
                  name="pageable"
                />
              }
            />
          </SwitchBox>
          <SwitchBox>
            <FormControlLabel
              label="使用横向"
              labelPlacement="start"
              control={
                <Switch
                  checked={props.page.landscape}
                  onChange={changePageSwitch}
                  name="landscape"
                />
              }
            />
          </SwitchBox>
          <Title>{config.content.readme}</Title>
          <ItemsBox data={config.content}/>
          <Title>{config.layout.readme}</Title>
          <ItemsBox data={config.layout}/>
        </DefinitionContainer>
      )}
    </Droppable>
  )
}

export default Definition
