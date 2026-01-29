interface IProps {
    unreadCount: number;
}

function NotItem({ unreadCount }: IProps) {
    if (unreadCount <= 0) return null;

    return (
        <div>
            Sizda {unreadCount} ta yangi xabar bor 📩
        </div>
    );
}

export default function Notification() {
    return (
        <section>
            <h1>Notification</h1>
            <NotItem unreadCount={15}></NotItem>
            <NotItem unreadCount={-1}></NotItem>
            <NotItem unreadCount={0}></NotItem>
        </section>
    )
}