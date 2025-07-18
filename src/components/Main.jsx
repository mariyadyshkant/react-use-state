import Button from './Button'
import labelsButton from '../data/LabelsButton'

export default function Main() {
    return (
        <div className='container'>
            <Button labels={labelsButton} />
        </div>
    )
}