// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import {FilterData,apiUrl }from'./FilterData';
import Filter from './component/Filter';
import Cards from './component/Cards';
import { toast } from 'react-toastify';
import Spinner from './component/Spinner';


function App(){

  const [loading,setLoading]=useState(true);
  const [course,setCourse]=useState('');
  const [category,setCategory]=useState(FilterData[0].title);
  // console.log(FilterData[0].title);

  useEffect(()=>{
    setLoading(true);
    const fetchData=async()=>{
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        setCourse(output.data);
        // console.log(data);
      } 
      catch(error){
        toast.error("something Went Wrong",error);
      }
    }
    fetchData();
    setLoading(false);
  },[]);



  return (
    <div className='min-h-screen flex flex-col bg-slate-700'>

      <div>
        <Navbar/>
      </div>

    <div className="bg-slate-700">

        <div >
        <Filter FileterData={FilterData} category={category} setCategory={setCategory}/>
        </div>

        <div className='w-11/12 flex-wrap max-2-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
        {loading?(<Spinner/>):(<Cards course={course} category={category}/>)}
        </div>

    </div>

      

      {/* <Cards course={course}/> */}
    </div>
  );
}
export default App;
