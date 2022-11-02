import React from 'react'
import { useContext ,useEffect} from 'react'
import noteContext from '../ContextApi/notes/noteContext'


export const About = () => {
  const a= useContext(noteContext)
  // useEffect(() => {
  //   // eslint-disable-next-line
  //   a.update()
  // }, [])
  
  return (
    <div>This is about page {a.state.name} and he is in class  { a.state.class}</div>
  )
}
