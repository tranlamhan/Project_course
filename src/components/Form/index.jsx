import React from 'react'
import { useState } from 'react'

export default function Form() {
    const [form,setForm] = useState({});

    const [err, setErr] = useState({

    })

    function changeName(e){
        setForm({...form, name: e.target.value})
    }

    function changeMail(e){
        setForm({...form ,mail: e.target.value})
    }

    function submit(e){
        if(!form.name){
            setErr({
                ...err,
                name:"Khong dc de trong name"
            })
        }else{
            setErr({...err})
        }

        if(!form.mail){
            setErr({
                ...err,
                mail:"khong dc de trong mail"
            })
        }else{
            setErr({...err})
        }        

        console.log(err.name,err.mail);
    }



  return (
    <div>
        <input type="text" onChange={changeName}/>
        {err.name}

        <input type="text" onChange={changeMail}/>
        {err.mail}

        <button onClick={submit}>submit</button>
    </div>
  )
}














































// import React from 'react'
// import { useState } from 'react'

// export default function Form() {
//     const [form,setForm] = useState({});

//     const handleChange = (ev) => { 
//         setForm({...form ,name:  ev.target.value})
//      }

//      const handleChangeMail = (ev) => { 
//         setForm({...form ,mail:  ev.target.value})
//      }

//      const submit = () => { 
//         console.log('form', form)
//       }


//   return (
//     <div>
//         <input type="text" onChange={handleChange} />
//         <input type="text" onChange={handleChangeMail}/>
//         <button onClick={submit}>Sub</button>
//     </div>
//   )
// }
