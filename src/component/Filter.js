import React from 'react';

const Filter = (props) => { 

    const FileterData=props.FileterData;
    const category=props.category;
    const setCategory=props.setCategory;


    function clickHandler(title){
        setCategory(title);
    }



    return (
        <div className=' w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 justify-center m-4'>
            {FileterData.map((data)=>{
                return (
                <button onClick={()=>clickHandler(data.title)} key={data.id} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black ${category==data.title? "hover:bg-opacity-50 border-2":"bg-opacity-40 border-transparent" } `}>{data.title}</button>
                );
            })}
        </div>
    );
}

export default Filter;
