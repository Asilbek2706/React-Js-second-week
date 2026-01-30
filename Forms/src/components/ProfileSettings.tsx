import {type ChangeEvent, type FormEvent, useState} from "react";

const ProfileSettings = () => {
    const [settings, setSettings] = useState({
        userName: '',
        bio: '',
        theme: 'light',
        notification: true,
    });

    const handleForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, type } = event.target;

        const value = type === 'checkbox' ? (event.target as HTMLInputElement).checked : event.target.value;
        setSettings({
            ...settings,
            [name]: value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Datas: ", settings);
    }

    return (
        <div style={{
            backgroundColor: settings.theme === 'dark' ? '#333' : '#fff',
            color: settings.theme === 'dark' ? '#fff' : '#000',
            padding: '20px',
            minHeight: '100vh',
            transition: '0.3s'
        }}>
            <h2>Profil Sozlamalari</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                <input name="userName" value={settings.userName} onChange={handleForm} placeholder="Username kiriting" />
                <textarea name="bio" value={settings.bio} onChange={handleForm} placeholder={"O'zingiz haqingizda"}/>

                <select name="theme" onChange={handleForm} value={settings.theme}>
                    <option value="light">Yorug'</option>
                    <option value="dark">Tungi (Dark)</option>
                </select>

                <label>
                    <input type="checkbox" name="notification" onChange={handleForm} checked={settings.notification}/> Bildirishnomalar
                </label>

                <button type="submit">Submit</button>

            </form>

            <div className="preview">
                <h3>Jonli ko'rinish:</h3>
                <p>Ism: {settings.userName}</p>
                <p>Haqida: {settings.bio}</p>
                <p>
                    {settings.notification ? "Bildirishnomalar yoqildi 🔔" : "Bildirishnomalar o'chiq 🔕"}                </p>
            </div>
        </div>
    );
}

export default ProfileSettings;