export default function Card(props) {
    const descriptions = props.descriptions; // Changed from props.labelsButton to match Main.jsx
    return (
        <div className="card">
            <div className="card-body">
                {descriptions.map((item) => (  // Remove destructuring, use item directly
                    <p key={item.id}>
                        {item.description}
                    </p>
                ))}
            </div>
        </div>
    )
}