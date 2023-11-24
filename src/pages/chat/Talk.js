import React,{useState,useEffect} from 'react'
import query from "query-string"
import { useLocation } from 'react-router-dom'
import io from "socket.io-client"

let socket;
const Talk = () => {
  const [name,setname]=useState(' ');
  const [room,setroom]=useState(' ');
  const [message,setmessage]=useState(' ');
  const [messages,setmessages]=useState([]);
  const location=useLocation();
  const Endpoint='localhost:5000';

  useEffect(() => {
    const {name,room}=query.parse(location.search);

    socket =io(Endpoint);

    setname(name);
    setroom(room);
    // console.log(info);
    // yeh jo hai sara paramter or valrbules part of ulr 
    // console.log(location.search);
    // yeh to hai unko ko object ke form mein bana dega a:b c:d

    socket.emit("meet",{name,room});


    // return()=>{
    //   socket.emit("disconnect");

    //   socket.off();

    // }
  
    
  },[Endpoint,location.search])

  useEffect(() => {
    socket.on("message",(message)=>{
      setmessages({...messages,message});
    })
    
  

  }, [messages])
  

  
  return (
    <div>first chat
    </div>
  )
}

export default Talk