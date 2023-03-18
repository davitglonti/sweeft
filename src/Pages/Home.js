import { useState,useEffect } from 'react';
import Form from './Form';
import axios from 'axios'
import Loader from './Loader';
const Home = () => {
  const [page, setPage] = useState(1)
  const [allitem,setAllItem]=useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
        const res = await axios.get(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/16`
        );
      const firstRes = res.data.list

        setAllItem((prev) => {
            return [...prev,...firstRes];
        });
        setLoading(false)
    }, 1000);
}, [page]);

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
          setPage((prev) => prev + 1);
      }
  };

  return (
    <div className="App">
      <div className='Box'>
        { allitem.map((item,index)=>{
          return (
            <div key={index}>
            <Form id={item.id} imageUrl={item.imageUrl} name={item.name} title={item.title}/>
            </div>
          )
        })}
        <div className='loaderposition'>
        {loading ? <Loader/>: null}
        </div>
      </div>
    </div>
  )
}

export default Home