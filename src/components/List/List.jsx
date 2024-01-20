import React from 'react';
import {useSelector} from "react-redux";

function List(props) {
    const listData = useSelector(state => state.number)

    return (
        <>
            <h2 style={{color :"orange"}}>List</h2>
            <div>
                {
                    listData.map((item, index) => (

                        index !== 0 && <li style={{listStyle:"none", background:"blue" , color:"white"  , width:"100px" , height:"30px" , margin: "10px auto 0"}} key={index}>{item}</li>
                    ))
                }
            </div>
        </>
    );
}

export default List;