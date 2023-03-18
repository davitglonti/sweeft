import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom"
import '../Css/FullPage.css'
import axios from 'axios'
import Loader from './Loader';
import Form from './Form';
const FullPage = () => {
  const [data,setData]=useState([])
  const [friendList,setFriendList]=useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [AllFriend,setAllFriend]=useState([])
  const [loading,setLoading]=useState([])
  const [list,setList]=useState([])
    const {id} = useParams()


useEffect(() => {
  fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`)
.then(res => res.json())
.then(data => setData(data));
}, [])


useEffect(() => {
  setTimeout(async () => {
      const res = await axios.get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${pageNumber}/16  `
      );
    const full = res.data.list

      setAllFriend((prev) => {
          return [...prev,...full];
      });
      setLoading(false)
  }, 1000);
}, [pageNumber]);

useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

const handleScroll = async () => {
    if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
    ) {
        setLoading(true);
        setPageNumber((prev) => prev + 1);
    }
};


  return (
    <div>
      <div className='full'>
      <div className='fullinfohead'> 
     
        <img src={data.imageUrl} style={{width:'100%', height:'343px'}}/>
        <div className='info'> 
          <h1 className='infotxt' >info</h1>
          <p style={{fontWeight:'bold'}}>{data.name}</p>
          <p>{data.title}</p>
          <p> <span className='underline'>email </span>:  {data.email}</p>
          <p> <span className='underline'>ip Address</span>: {data.ip}</p>
          <p> <span className='underline'>ip address</span>{data.ip}</p>
          <p> <span className='underline'>Job Area </span>: {data.jobArea}</p>
          <p> <span className='underline'>Job Type </span>: {data.jobDescriptor}</p>
        </div>
      <div className='Address'>
        <h1>Address</h1>
      <p style={{fontWeight:'bold'}}>{data.company && data.company.name } {data.company &&  data.company.suffix}</p>
      <p> <span className='underline'>city</span>: {data.address && data.address.city } </p>
      <p> <span className='underline'>Country</span>: {data.address && data.address.country } </p>
      <p> <span className='underline'>State</span>: {data.address && data.address.state } </p>
      <p> <span className='underline'>Street Address</span>: {data.address && data.address.city } </p>
      
      </div>
    </div>
  

    <div className='Friends'>
          <h1>Friends:</h1>
          <div className='FriendBox'>
        {  AllFriend.map((item,index)=>{
         
          return (
           <div> 
            <Form id={item.id} imageUrl={item.imageUrl} name={item.name} title={item.title} />
           </div>
          )
        })}
         <div className='loaderposition'>
        {loading? <Loader/>: null}
        </div>
        </div>
    </div>
  </div>
    </div>
  )
}

export default FullPage