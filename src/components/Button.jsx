// import labelsButton from "../data/LabelsButton";

export default function Button(props) {
    const labelsButton = props.labels;
    console.log(labelsButton, props);
    return (
        <>
            {labelsButton.map((item) => (
                <button key={item.id} type='button' className='btn btn-primary mx-1 my-2'>
                    {item.label}
                </button >
            ))}
        </>
    )
}