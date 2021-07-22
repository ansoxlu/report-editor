import React from 'react'
import { Definition } from './definition'

export class Editor extends React.Component {
  render () {
    const pageSelector = () => {
      return (<div/>)
    }

    return (
      <div>
        {pageSelector()}
        <Definition/>
      </div>
    )
  }
}
