import React from 'react'
import styled from 'styled-components'
import Header from './header'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { BUILD_DROP_ID, BUILD_IDS, BUILD_TYPE, Content, DEFINITIONS, Layout, Page } from '../enum'
import { toReactStyle } from '../utils'

const BuildContainer = styled.section`
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  flex: auto;
`

const Main = styled.div`
  background: #f3f3f3;
  flex: auto;
  display: flex;
  justify-content: center;
`

const PageContainer = styled.article<{isDraggingOver: boolean}>`
  background: #fff;
  box-shadow: 0 4px 12px #ebedf0;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  border: 1px ${props => (props.isDraggingOver ? 'dashed #4099ff' : 'solid #ddd')};
`

const LayoutContainer = styled.div<{ isDragging: boolean }>`
  display: flex;
  ${props => props.isDragging ? 'border: 1px dashed #4099ff;' : ''}
  position: relative;
`
const LayoutHandle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  user-select: none;
  margin: -0.5rem 0.5rem -0.5rem -0.5rem;
  padding: 0.5rem;
  line-height: 1.5;
  border-radius: 3px 0 0 3px;
  background: #fff;
  border-right: 1px solid #ddd;
  color: #000;
  position: absolute;
  left: -36px;
`

const ContentContainer = styled(LayoutContainer)`
  flex: 1;
`

const SimpleLayout = styled.div<{isDraggingOver: boolean}>`
  display: flex;
  flex: auto;
  flex-direction: row;
  ${props => props.isDraggingOver ? 'border: 1px dashed #4099ff;' : ''}
`

const Notice = styled.div`
  display: flex;
  padding: 6px;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #aaa;
`

function Build (props: {
  page: Page,
  layouts: Layout[], active: Layout | Content | undefined,
  onChangeActive: (active: Layout | Content) => void
}) {
  const width = props.page.width ? `${props.page.width}mm` : ''
  const height = props.page.height ? `${props.page.height}mm` : ''

  const TextContent = (props: {
    content: Content,
    onChangeActive: (active: Layout | Content) => void
  }) => {
    let value = props.content.data.value
    if (props.content.style.flexDirection === 'column') {
      value = Array.from(value).map((it, idx) => (<div key={idx}>{it}</div>)).join()
    }
    return (
      <div style={{ ...toReactStyle(props.content.style) }} onClick={() => props.onChangeActive(props.content)}>
        {value || <Notice>请设置属性({DEFINITIONS.find(it => it.buildId === props.content.buildId)?.readme})</Notice>}
      </div>
    )
  }

  const ContentComp = (props: {
    content: Content,
    onChangeActive: (active: Layout | Content) => void
  }) => {
    switch (props.content.buildId) {
      case BUILD_IDS.TEXT:
        return (<TextContent content={props.content} onChangeActive={props.onChangeActive} />)
      default:
        return null
    }
  }

  const Layout = (props: {
    layout: Layout,
    onChangeActive: (active: Layout | Content) => void
  }) => {
    const layoutStyle = toReactStyle(props.layout.style)

    switch (props.layout.buildId) {
      case BUILD_IDS.SIMPLE:
        return (
          <Droppable
            droppableId={props.layout.id}
            direction={ 'horizontal' }
          >
            {(provided, dropSnapshot) => (
              <SimpleLayout
                ref={provided.innerRef}
                         isDraggingOver={dropSnapshot.isDraggingOver}
                         style={layoutStyle}
              >
                {props.layout.contents.length
                  ? props.layout.contents.map((it, index) => (
                    <Draggable
                      key={it.id}
                      draggableId={it.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <ContentContainer
                          ref={provided.innerRef}
                          isDragging={snapshot.isDragging}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={provided.draggableProps.style}
                        >
                          <ContentComp content={it} onChangeActive={props.onChangeActive} />
                        </ContentContainer>
                      )}
                    </Draggable>
                  ))
                  : <Notice>请设置属性({DEFINITIONS.find(it => it.buildId === props.layout.buildId)?.readme})</Notice>
                }
                {provided.placeholder}
              </SimpleLayout>
            )}
          </Droppable>
        )
      default:
        return null
    }
  }

  console.log('layouts', props.layouts)

  return (
    <BuildContainer>
      <Header/>
      <Main>
        {!width && !height
          ? null
          : (
            <Droppable droppableId={BUILD_DROP_ID}>
              {(provided, dropSnapshot) => (
                <PageContainer
                  ref={provided.innerRef}
                  isDraggingOver={dropSnapshot.isDraggingOver}
                  {...provided.droppableProps}
                  style={{
                    width: props.page.landscape ? height : width,
                    height: props.page.landscape ? width : height
                  }}
                >
                  {props.layouts.length
                    ? props.layouts.map((it, idx) => (
                      <Draggable
                        key={it.id}
                        draggableId={it.id}
                        index={idx}>
                        {(provided, snapshot) => (
                          <LayoutContainer
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            isDragging={snapshot.isDragging}
                            style={dropSnapshot.draggingOverWith?.startsWith(BUILD_TYPE.CONTENT)
                              ? { transform: 'none' }
                              : provided.draggableProps.style}
                          >
                            <LayoutHandle
                              {...provided.dragHandleProps}
                              onClick={() => props.onChangeActive(it)}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                />
                              </svg>
                            </LayoutHandle>
                            <Layout layout={it} onChangeActive={props.onChangeActive} />
                          </LayoutContainer>
                        )}
                      </Draggable>
                    ))
                    : (<Notice>请添加内容</Notice>)
                  }
                  {provided.placeholder}
                </PageContainer>
              )}
            </Droppable>
            )
        }
      </Main>
    </BuildContainer>
  )
}

export default Build
