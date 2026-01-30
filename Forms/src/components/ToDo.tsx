import {type ChangeEvent, type FormEvent, useState} from "react";

const Todo = () => {
    const [value, setValue] = useState({
        title: '',
        description: '',
        priority: 'low',
    });

    const handleForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form ma'lumotlari: ", value )
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="Vazifa nomi"
                value={value.title}
                onChange={handleForm}
            />

            <textarea
                name="description"
                placeholder="Vazifa haqida batafsil"
                value={value.description}
                onChange={handleForm}
            />

            <select name="priority"
                    value={value.priority}
                    onChange={handleForm}>
                <option value="low">Past</option>
                <option value="medium">O'rta</option>
                <option value="high">Yuqori</option>
            </select>

            <button type="submit" disabled={value.title.length === 0}>Saqlash</button>
            <p>
                {value.description.length < 20 && value.description.length > 0 ? "Tavsif juda qisqa" : ""}
            </p>
        </form>
    );
}

export default Todo;