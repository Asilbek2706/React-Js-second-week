interface Props {
    name: string;
    isAdmin: boolean;
    isOnline: boolean;
}

function Item({ name, isAdmin, isOnline }: Props) {
    return (
        <>
            <p className={"item"}>
                { isAdmin ? " (Admin) 👑" : null }
            </p>

            <p className={"item"}>
                { name } { isOnline ? "🟢" : "⚫" }
            </p>
        </>
    );
}

export default function UserStatus() {
    return (
        <section>
            <h1>User Status</h1>
            <div>
                <Item name={'Asilbek'} isAdmin={true} isOnline={true} />
                <Item name={'Ali'} isAdmin={false} isOnline={true} />
                <Item name={'Aziz'} isAdmin={false} isOnline={false} />
            </div>
        </section>
    )
}