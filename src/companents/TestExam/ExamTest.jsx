import React,{ useState, useEffect} from 'react'
import axios from 'axios'
export default function ExamTest() {
    const [allData, setAllData] = useState([])
    useEffect(()=>{
      //  axios.get('https://opentdb.com/api.php?amount=10')   
          axios.get('http://myjson.dit.upm.es/api/bins/96y8')   
       .then(ress =>{
           setAllData(ress.data[0].results)
        console.log(allData);
       })
       .catch(err=>{
         console.log(err);
       })
    },[])
  return (
    <div>
        <h1>Exam test pages</h1>
<div className='d-flex justify-content-center '>
{
         (allData.length > 0 ) ? allData.map((item, index)=>{
            return(
               <div className="my-5" key={index}>
                  <button className="btn btn-outline-dark mx-3  px-4">{index +1}</button>
               </div>
            )
         })
         :(
            <div className="">
               <h1>Loading.....</h1>
            </div>
         )
        }
</div>
    </div>
  )
}
