// import {type ChangeEvent, type FormEvent, useState} from "react";
// /*Controlled Components*/
// const Form = () => {
//     // const [firstName, setFirstName] = useState('');
//     // const [lastName, setLastName] = useState('');
//     const [formValues, setFormValues] = useState({
//         firstName: "",
//         lastName: "",
//     });
//
//     // const handleFirstName = (event: ChangeEvent<HTMLInputElement>) => {
//     //     setFirstName(event.target.value)
//     // }
//     //
//     // const handleLastName = (event: ChangeEvent<HTMLInputElement>) => {
//     //     setLastName(event.target.value)
//     // }
//
//     const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
//         setFormValues({
//             ...formValues,
//             [event.target.name]: event.target.value,
//         })
//     }
//
//     const handlesubmit = (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log("Form submitted")
//     }
//
//     return (
//         <form onSubmit={handlesubmit}>
//             <input
//                 type="text"
//                 name="firstName"
//                 value={formValues.firstName}
//                 onChange={handleForm}
//             />
//             <input
//                 type="text"
//                 name="lastName"
//                 value={formValues.lastName}
//                 onChange={handleForm}
//             />
//
//             <hr />
//
//             <button type={"submit"}>Submit</button>
//         </form>
//     )
// }
//
// export default Form

import {useRef} from "react";
/*Uncontrolled Form*/
const Form = () => {
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('A name was submitted' + inputRef.current.value)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form