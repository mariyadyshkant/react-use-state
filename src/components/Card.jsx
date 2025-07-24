export default function Card(props) {
    const language = props.language;

    if (!language) {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Nessun linguaggio selezionato</h5>
                </div>
            </div>
        )
    }
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{language.label}</h5>
                <p className="card-text">{language.description}</p>
            </div>
        </div>
    )
}