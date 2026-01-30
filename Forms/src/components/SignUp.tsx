import {type ChangeEvent, type FormEvent, useState} from "react";

const SignUp = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

    const formSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form ma'lumotlari: ", formValues);
    }

    return (
        <section style={{ "padding": "20px" }}>
            <form onSubmit={formSubmit}>
                <input type="text"
                       placeholder={"Ismingiz"}
                       value={formValues.name}
                       name="name"
                       onChange={handleForm}
                />
                <input type="text"
                       placeholder={"Emailingiz"}
                       value={formValues.email}
                       name="email"
                       onChange={handleForm}
                />
                <input type="text"
                       placeholder={"Parol"}
                       value={formValues.password}
                       name="password"
                       onChange={handleForm}
                />

                <br />

                <button type="submit">Submit</button>
                <p>
                    {formValues.password.length < 6 && formValues.password.length > 0 ? "Parol juda qisqa! ⚠️" : ""}
                </p>
            </form>
        </section>
    );
}

export default SignUp;



