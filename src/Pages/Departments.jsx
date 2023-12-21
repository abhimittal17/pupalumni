import React  from 'react';

export default function Departments({title,departments}) {

    return (
      <div>
        <div >
                    <div className="h-[auto] border  shadow-lg rounded-xl">
                        <div className="p-4">
                            <h1 className="text-xl  text-center font-semibold  rounded-lg  bg-footercolor-800 text-yellow-400 p-2">{title}</h1>
                            <p className="text-lg font-800 pt-4 ">{departments}</p>
                        </div>
                    </div>
                </div>
         </div>
    )
  
}