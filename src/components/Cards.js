import React from 'react'
import Card from './Card';

const  Cards = (props) => {

    let courses = props.courses;
    
    // return you a list of all courses received from the API response
    const getCourses = () => {
        let allCourses = [];
    //     console.log("printing courses")
    //     console.log(props.courses)
        Object.values(courses).forEach(array => {
            array.forEach((courseData) => {
                allCourses.push(courseData);
            })

        })
        return allCourses;
    }
    return (
        <div>
            {
            getCourses().map((course)=>{
                return <Card key={course.id} course={course}/>
            })
            }
        </div>
    )
}

export default Cards;
