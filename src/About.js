
import React,{useState,useEffect} from 'react'

function About() {
    const [data,setData] = useState([])
    const apiGet = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then((json) => {
        console.log(json);
        setData(json);
       });
    };
    useEffect (() =>{
        apiGet();
      },[])
  return (
    <div>
      <ul>
     {data.map(items =>
     <li key ={items.id}>{items.userId}{items.title}</li>
     )}
   </ul>
   <table>
       <td></td>
   </table>
    </div>
  )
}

export default About