import { useState, type ReactNode, type CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
    container: {
        border: '2px solid #ddd',
        padding: '30px',
        borderRadius: '12px',
        textAlign: 'center',
        maxWidth: '400px',
        margin: '20px auto',
        fontFamily: 'sans-serif'
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px'
    },
    secretContent: {
        backgroundColor: '#f21212',
        padding: '15px',
        marginTop: '15px',
        border: '1px dashed #28a745'
    }
};

interface IProps {
    children: ReactNode;
}

const Wrapper = ({ children }: IProps) => {
    const [isAllowed, setIsAllowed] = useState<boolean>(false);

    const handleToggle = () => {
        setIsAllowed(!isAllowed);
    };

    const renderLocked = () => (
        <div>
            <p>Kontent qulflangan! 🔒</p>
            <button style={styles.button} onClick={handleToggle}>
                Kirishni ochish
            </button>
        </div>
    );

    const renderUnlocked = () => (
        <div style={styles.secretContent}>
            <p>Xush kelibsiz! ✅</p>
            {children}
            <br />
            <button
                style={{ ...styles.button, backgroundColor: '#dc3545' }}
                onClick={handleToggle}
            >
                Yopish
            </button>
        </div>
    );

    return (
        <div style={styles.container}>
            {isAllowed ? renderUnlocked() : renderLocked()}
        </div>
    );
};

export default Wrapper;