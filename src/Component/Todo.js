import React, { useState } from 'react'
import img from '../image/img.png'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

const Todo = () => {

    const [item, setItem] = useState("");
    const [add, setAdd] = useState([]);
    const [toggle,setToggle] = useState(true);
    const [isEdit,setIsEdit] = useState();



    const addItems = () => {

        if(item===""){

        }else if(item && !toggle){
            setAdd(
                add.map((elem)=>{
                    if(elem.id=== isEdit){
                        return {...elem,name:item}
                            
                        
                    }
                    return elem;
                })
            )
            
            setToggle(false);
        setItem("");
        setIsEdit(null);

        }
        else{
        setAdd((prev) => {
            const newItem = {id:new Date().getTime().toString(),name:item};
            return [
                ...prev,
                newItem
            ]
        })
    }

        setItem('');
    }

    const deleteItem = (id) =>{
        const updateItems = add.filter((val)=>{
            return val.id!==id;
        })

        setAdd(updateItems);

    }
    const editItem = (id) =>{

        const edit = add.find((val)=>{
            return id === val.id;

        })
        console.log(edit)
        setToggle(false);
        setItem(edit.name);
        setIsEdit(id);
        return edit;

        

    }

    const remove = () => {
        setAdd([]);
    }
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <div className='figure'>
                        <img src={img} alt='todo' />
                        <figcaption> Enter Your list of items</figcaption>
                    </div>
                    <div className='showItems'>
                        <input type='text' value={item} onChange={(e) => {
                            setItem(e.target.value);

                        }} />


                        {toggle?<AddIcon className='fa fa-plus todo-btn' onClick={addItems} /> : <EditIcon className='fa fa-plus todo-btn' onClick={addItems}/>
                        }

                        
                        


                    </div>



                    {
                        add.map((val) => {
                            return (<div key={val.id} >
                                <div className='showItems'>
                                    <div className='eachItem'>
                                        <h3>{val.name}</h3>
                                        <EditIcon onClick={()=>{editItem(val.id)}}/>
                                        <DeleteIcon onClick={()=>{deleteItem(val.id)}}/>
                                        
                                    </div>
                                </div>
                            </div>)

                        })
                    }

                    <div >
                    <Button className='btn' variant="contained" onClick={remove}>Remove All</Button>

                    </div>





                </div>
            </div>

        </>
    )
}

export default Todo
