import React from 'react'

export default function Header_props(props) {
  return (
    <div>From Header Functional-Component
        <br/>
        Welcome {props.username}
        <hr/>
    </div>
  )
}
