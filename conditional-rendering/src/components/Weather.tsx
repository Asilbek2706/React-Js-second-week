interface IProps {
    temp: number;
    isRaining: boolean;
}

function WeatherItem({ temp, isRaining }: IProps) {
    return (
        <>
            <li className={"item"}>
                { isRaining ? "Soyabon oling ☔" : "Quyoshli kun ☀️"}
            </li>

            <hr />

            <li className={"item"}>
                {temp > 30 && "Juda issiq!"}
            </li>
        </>
    );
}

export default function Weather() {
    return (
        <section>
            <h1>
                Weather App
            </h1>
            <ul>
                <WeatherItem temp={34} isRaining={true}></WeatherItem>
                <WeatherItem temp={25} isRaining={true}></WeatherItem>
                <WeatherItem temp={35} isRaining={false}></WeatherItem>
            </ul>
        </section>
    );
};