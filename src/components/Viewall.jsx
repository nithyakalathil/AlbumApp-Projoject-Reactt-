import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {

const [data,changedata]=useState([])

const fetchData=()=>{

  axios.get("https://jsonplaceholder.typicode.com/albums").then(

(response)=>{
  changedata(response.data)}
  )
  
}


useEffect(()=>{fetchData()},[])

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row">
    {data.map((value,index)=>{return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

<div class="card">
<img src="https://i.pinimg.com/736x/06/54/7a/06547a402611c9e9157175f37f329823.jpg" height="400px"class="card-img-top" alt="..."/>
<div class="card-body">
<p class="card-text">{value.userId}</p>
<p class="card-text">{value.id}</p>
<p class="card-text">{value.title}</p>
</div>
</div>

</div>})}
    
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Viewall