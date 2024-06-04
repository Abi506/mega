import React,{useEffect, useState,useRef} from 'react'
import {v4 as uuid} from 'uuid'

import Home from '../japanese/japanese'
const data=[
    {name:"Abinandhna",
    age:20
    },
    {name:"Vimanthan",
    age:22
    },
    {name:"Ashwanth",
    age:10
    },
    {name:"Santhi",
    age:40
    },
]

const Section = () => {
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[counter,setCounter]=useState(0)
    const [fetchedData,setData]=useState([])

    useEffect(()=>{
        setData(data)
    },[])

    let user_name=useRef();
    let user_age=useRef();

    let fiteredData=data.filter((each)=>{
        if(each.age > 20){
            return each.age
        }
    })
    
    const clickFunction=(id)=>{
        setCounter((prev)=>prev+1)
        console.log(counter,'counter counter')
    }

    const SubmitFunc=(e)=>{
        e.preventDefault()
        const newData={
            id:uuid(),
            name:user_name.current.value,
            age:user_age.current.value
        }
        console.log(newData)
        setData((prev)=>[...prev,newData])
    }

  return (
    <div>
      <h1>This is section page</h1>
      <form>
        <input type='text' ref={user_name} />
        <input type='number' ref={user_age} />
        <button onClick={SubmitFunc}>Submit</button>
      </form>
      
    </div>
  )
}

export default Section
