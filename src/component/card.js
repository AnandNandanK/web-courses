import React from 'react';
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';


const Card = (props) => {

  const course = props.course;
  
  const likedCourse = props.likedCourse;
  const setLikeCourse = props.setLikeCourse;  // Corrected prop name
  const name = props.name;



  console.log("printing LIke COURSES",name);

  function clickHandler() {
    if (likedCourse.includes(course.id)){
      setLikeCourse((prev)=> prev.filter((cid)=>cid!==course.id));
      toast.warning("Liked Removed");
    }
    else{
      if (likedCourse.length===0) {
        setLikeCourse([course.id])
      } else {
        setLikeCourse((prev)=>([...prev,course.id]));
        console.log("success");
      }
      toast.success("Like Added");

    }

  }
  // console.log("printing image url",course.image.url);
  return (
    <div className='w-[300px] bg-slate-900  rounded-md bg-opacity-80 overflow-hidden relative'>

      <div className='relative'>
        <img src={course.image.url} alt='img' />


        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-16px] flex justify-center items-center'>
          <button onClick={clickHandler}>
            
            {likedCourse.includes(course.id)?(<FcLike fontSize="1.7rem"/> ):(<FcLikePlaceholder fontSize="1.7rem"/>)}
          </button>
        </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white '>{course.description}</p>
      </div>

    </div>
  );
}

export default Card;
