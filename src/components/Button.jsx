export default function Button(props) {
    const labels = props.labels;
    const selected = props.selected;
    const handleClick = props.onSelect;

    return (
        <div className="d-flex justify-content-start gap-2 flex-wrap my-3">
            {labels.map((item) => {
                const isSelected = selected && selected.id === item.id;
                const buttonClass = isSelected ? "btn-warning" : "btn-primary";

                return (
                    <button
                        key={item.id}
                        type='button'
                        className={`btn ${buttonClass}`}
                        onClick={() => handleClick(item)}
                    >
                        {item.label}
                    </button>
                )
            })}
        </div>
    )
}