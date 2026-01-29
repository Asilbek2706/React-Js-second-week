interface IProps {
    name: string;
    isPacking: boolean;
}

function Item({ name, isPacking }: IProps) {
    // if (isPacking) {
    //     return <li className="item">{name} ✅</li>;
    // }

    // if (isPacking) {
    //     return null;
    // }
    // return <li className="item">{name}</li>;

    /*Ternary operator*/
    return (
        // <li className="item">
        //     {isPacking ? name + '✅' : name}
        // </li>

        /* && */
        <li className={"item"}>
            {name}{isPacking && '✅'}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>
                Asilbek's Packing List
            </h1>
            <ul>
                <Item
                    isPacking={true}
                    name={"Helmet with a golden leaf"}
                />
                <Item
                    isPacking={false}
                    name={"Photo of Asilbek"}
                />
                <Item
                    isPacking={true}
                    name={"Space suit"}
                />
            </ul>
        </section>
    );
};