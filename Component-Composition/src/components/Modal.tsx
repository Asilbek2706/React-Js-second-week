interface IProps {
    children: React.ReactNode;
}

const Modal = ({children}: IProps) => {
    return (
        <div style={{ background: 'rgba(0,0,0,0.5)',
            border: 'none',
            borderRadius: '20px',
            boxShadow: 'initial',
            margin: '20px',
            boxSizing: 'border-box',
            position: 'relative',
            padding: '10px',
            top: 0, left: 0,
            width: '100%', height: '100%',
            display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: 'white', padding: '20px', margin: '10px', borderRadius: '8px', color: 'black' }}>
                {children}
            </div>
        </div>
    )
}

export default Modal;