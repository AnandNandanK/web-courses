import React, { createElement, useState } from 'react';
import Card from './card'

const Cards = (props) => {

    let course = props.course;
    let category = props.category;

    console.log(category);
    const [likedCourse, setLikeCourse] = useState([]);

    const getCourse = () => {

        if (category === 'All') {
            const allCourse = [];
            Object.values(course).forEach((courseCatergory) => {
                courseCatergory.forEach((courses) => {
                    allCourse.push(courses);
                });
            });
            return allCourse;
        }

        else {
            console.log(course[category]);
            return course[category] ||["No data found"];
            
        }
    };

    // allCourse.forEach((data) => {
    //     console.log(data);
    // })


    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourse().map((c) => {
                    return (
                        <Card

                            key={c.id}
                            course={c}
                            likedCourse={likedCourse}
                            setLikeCourse={setLikeCourse}
                           
                        // name={name}

                        />
                    );
                })
            }
        </div>
    );
}

export default Cards;
