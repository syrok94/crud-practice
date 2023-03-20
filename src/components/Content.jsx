import React, { useState } from "react";

function Content() {

    // const items=[
    //     {
    //         name:"rajan",
    //         age:"18"
    //     },
    //     {
    //         name:"kartik",
    //         age:"18"
    //     }
    // ]

    // function card(props){
    //     return(
    //         <div>
    //             <h1>{props.name}</h1>
    //             <h1>{props.age}</h1>                
    //         </div>
    //     );
    // }


    // const [name,setName]=useState([]);
    // const [head,setHead]=useState(name);

    //     function inputHandler(e){
    //        const entry=e.target.value
    //         setName(entry);
    //        // console.log(e.target.value);
    //     }
 

    const [val, setVal] = useState("");
    const [valEmail, setEmailVal] = useState("");


    const [names, setName] = useState([]);
    const [emails, setEmail] = useState([]);

    function inputHandler(value) {
        const inputVal = value.target.value;

        setVal(inputVal);
      

    }

    function emailHandler(value) {
        const inpEmail = value.target.value;

        setEmailVal(inpEmail);
    }

    function submitHandler(value) {
        setName((prevName) => {
            return ([...prevName, val])
        })
     
        setEmail((prevEmail) => {
            return ([...prevEmail, valEmail]);
        })
        

        setVal("");
        setEmailVal("");

        value.preventDefault();



    }


    return (
        <>
            <form className="Form">

                <label>Name</label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={inputHandler} value={val}
                    type="text"
                />
                <label>Email</label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    onChange={emailHandler}
                    value={valEmail}
                />

                <button onClick={submitHandler} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button >

            </form>

            <p>


                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">sr no.</th>
                            <th className="px-6 py-3">name</th>
                            <th className="px-6 py-3">email</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {names.length}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {names.map((item) => {

                                    return <h1>{item} </h1>
                                })}
                            </td>

                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                {emails.map((item) => {

                                    return <h1>{item} </h1>
                                })}
                            </td>
                        </tr>

                    </tbody>
                </table>


            </p>


        </>
    );
}


export default Content;