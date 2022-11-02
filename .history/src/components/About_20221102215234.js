import React from 'react'
import { useContext ,useEffect} from 'react'
import noteContext from '../ContextApi/notes/noteContext'


export const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
    // eslint-disable-next-line
    a.update()
  }, [])
  
  return (
    <div>This is about page {s1.name} and he is in class  { s1.class}</div>
  )
}
