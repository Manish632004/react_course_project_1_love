import React from 'react';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;

    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

/// function for the like button 

    const clickHandler =()=>{
        //logic

        if(likedCourses.includes(course.id)){
            //pehle se like hua pada tha 

            setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
            toast.warning("liked removed");
        }
        else{

            // pehle se like nahi hai ye course 
            // insert karna hai ye course liked courses me 

            if(likedCourses.length ===0){
                setLikedCourses([course.id]);
            }
            else{
                //non-empty pehle se 
                setLikedCourses((prev)=> [...prev,course.id]);
            }
            toast.success("liked added");

        }

    }

    return (
        <div className='w-[300px] bg-bgDark rounded-md overflow-hidden '>
            <div className='relative'>
                <img src={course.image.url} alt="" />

                <div className='absolute right-2 -bottom-[1rem] w-[40px] h-[40px] rounded-full flex justify-center bg-white'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)?(
                                <FcLike fontSize="1.7rem"/>
                            
                            ):(
                            <FcLikePlaceholder fontSize="1.7rem"/>
                                
                            )
                        }
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description. length >100 ? `${course.description.substring(0,100)}...`:course.description
                    }

                </p>
            </div>


        </div>
        
    )
}

export default Card
