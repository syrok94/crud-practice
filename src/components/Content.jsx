import React, { useState } from "react";


var idx=0;

function Content() {

    

    const [contact, setContact] = useState([]);
    const[itemUpdatedId, setItemUpdatedId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);

    function inputHandler(value) {
        const inputVal = value.target.value;

        setName(inputVal);


    }

    function emailHandler(value) {
        const inpEmail = value.target.value;

        setEmail(inpEmail);
    }

    

    function submitHandler(value) {
      
        // const idx =Math.floor((Math.random() * 100) + 1);
        // const  idx=  Math.floor((Math.random() * 10) + 1);
        idx++;
        const newItem = { id: idx, name: name, email: email }
        setContact(prev => [...prev, newItem])

        setName("");
        setEmail("");

        value.preventDefault();



    }
const updateSubmit = (e)=>{
    e.preventDefault();
     setContact(prev=>{
        prev.forEach(item=>{
            if(item.id ===itemUpdatedId){
                item.name = name;
                item.email = email;
            }
        })
        return prev;
     }
     )
     setIsUpdate(false);
     setEmail("");
     setName("");
  
}
    const updateHandler = (item)=>{
        
        console.log("clicked");
        setIsUpdate(true);
        setName(item.name);
        setEmail(item.email);
        setItemUpdatedId(item.id);
     
    

    }
    
    const deleteHandler = (id)=> {
        // console.log(value.target.value)
        const it = contact.filter( fun =>fun.id !==id.id);
        setContact(it);
        console.log(it);
       
    }

    return (
        <>
            

                <label>Name</label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={inputHandler} value={name}
                    type="text"
                />
                <label>Email</label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    onChange={emailHandler}
                    value={email}
                />

               {isUpdate ?  <button onClick={updateSubmit}
                
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update
                </button >:  <button onClick={submitHandler}
                
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button >}

        




            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th className="px-6 py-3">srno</th>
                        <th className="px-6 py-3">name</th>
                        <th className="px-6 py-3">email</th>
                        <th className="px-6 py-3">actions</th>
                    </tr>

                </thead>
                <tbody>

                    {
                         contact.map((item) => {
                            return (<>
                                <tr key={item.id}  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button 
                                            onClick={()=> updateHandler(item)}
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                            update
                                        </button >
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                                        <button 
                                            value={item}
                                            onClick={() => deleteHandler(item)}
                                            
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            delete
                                        </button >
                                    </td>

                                </tr>
                            </>)


                        })

                    }

                </tbody>
            </table>





        </>
    );
}


export default Content;