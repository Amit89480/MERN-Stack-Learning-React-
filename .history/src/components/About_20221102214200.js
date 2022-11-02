import React from 'react'
import { useContext } from 'react'
import noteContext from '../ContextApi/notes/noteContext'


export const About = () => {
  const a=useContext(noteContext)
  return (
    <div>This is about page</div>
  )
}
