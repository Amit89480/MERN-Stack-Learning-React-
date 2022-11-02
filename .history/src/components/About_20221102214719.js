import React from 'react'
import { useContext } from 'react'
import noteContext from '../ContextApi/notes/noteContext'


export const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
    
  }, [third])
  
  return (
    <div>This is about page {a.name} and he is in class  { a.class}</div>
  )
}
