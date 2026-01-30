import {type ChangeEvent, type FormEvent, useState} from "react";

const OrderPizza = () => {
    const [order, setOrder] = useState({
        customerName: '',
        pizzaSize: 'medium',
        isTakeaway: false,
        comment: '',
    });

    const handleForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name;

        const value = event.target.type === 'checked' ? (event.target as HTMLInputElement).checked : event.target.value;
        setOrder({
            ...order,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(order)
    }

    return (
        <div style={{ padding : "20px", fontFamily: "sans-serif" }}>
            <h2>Order Pizza</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="customerName"
                        placeholder="Ismingiz"
                        onChange={handleForm}
                    />
                </div>

                <div style={{ margin: '15px 0' }}>
                    <p>Hajmni tanlang:</p>
                    <label>
                        <input type="radio"
                               name="pizzaSize"
                               value="Small"
                               onChange={handleForm} /> Small
                    </label>
                    <label style={{ marginLeft: '10px' }}>
                        <input type="radio"
                               name="pizzaSize"
                               value="Medium"
                               checked={order.pizzaSize === 'Medium'}
                               onChange={handleForm} /> Medium
                    </label>
                    <label style={{ marginLeft: '10px' }}>
                        <input type="radio"
                               name="pizzaSize"
                               value="Large"
                               onChange={handleForm} /> Large
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="isTakeaway"
                            checked={order.isTakeaway}
                            onChange={handleForm}
                        /> Olib ketish (Takeaway)
                    </label>
                </div>

                {order.isTakeaway && (
                    <p style={{ color: 'orange' }}>🛍️ Buyurtmani paketga solib qo'yamiz!</p>
                )}

                <button
                    type="submit"
                    style={{ marginTop: '15px' }}
                    disabled={order.customerName.trim() === ''}
                >
                    Buyurtma berish
                </button>
            </form>
        </div>
    )
}

export default OrderPizza;