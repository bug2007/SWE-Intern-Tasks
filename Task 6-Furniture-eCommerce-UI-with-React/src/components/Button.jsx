export default function Button({children, type, className}) {
    return (
        <button className={type}>{children}</button>
    )
}