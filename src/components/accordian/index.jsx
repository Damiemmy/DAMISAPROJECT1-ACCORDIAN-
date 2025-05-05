import React, { useState } from 'react'
import data from './data';
import './style.css'

const page = () => {
    const[selected,setSelected]=useState(null);
    const[enablemultiselection,setEnableMultiSelection]=useState(false);
    const[multiple,setMultiple]=useState([])
    function handlesingleselection(getcurrentid){
        console.log(getcurrentid);
        setSelected(getcurrentid===selected ? null:getcurrentid)
    }
    function handlemultiselection(getcurrentid){
        let cpyMultiple=[...multiple];
        const findIndexOfCurrentId=cpyMultiple.indexOf(getcurrentid)
        console.log(findIndexOfCurrentId)
        if(findIndexOfCurrentId===-1) cpyMultiple.push(getcurrentid)
        else cpyMultiple.splice(findIndexOfCurrentId,1)
        setMultiple(cpyMultiple)
        console.log(selected,multiple);
    }


  return (
    <div className='wrapper'>
        
        {/**Acodian**/}
        <div className='accordian px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 px-auto'>
        <h1 className='name_title'>Damisa's Project (Accordian)</h1>
        <button className='btn'onClick={()=>setEnableMultiSelection(!enablemultiselection)}>Enable Multi Selection</button>
            {data && data.length > 0 ? (data.map(dataitem=> (
                <div key={dataitem.id} className='item'>
                    <div  onClick={enablemultiselection?()=>handlemultiselection(dataitem.id):()=>handlesingleselection(dataitem.id)} className='title'>
                        <div className='item_list'>
                            <h3>{dataitem.name}</h3>
                            <span>+</span>
                        </div>
                        {
                            enablemultiselection?
                            multiple.indexOf(dataitem.id)!==-1 &&
                            (<div><p>{dataitem.description}</p></div>):
                            selected===dataitem.id &&
                            (<div><p>{dataitem.description}</p></div>)
                                               }
                        {selected === dataitem.id || multiple.indexOf(dataitem.id)!== -1? (<div>
                        <p>{dataitem.description}</p></div>):null}

                    </div>

                </div>
                ))):<p>no data found</p>
            }
        </div>

        
    </div>
  )
}

export default page;