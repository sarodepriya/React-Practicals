 import React from 'react'
 
 export default function Header({title, description}) {
   return (
     
  <div className="jumbotron">
  <h1 className="display-4">{title}</h1>
  <p className="lead">{description}</p>
  </div>
   )
 }
 