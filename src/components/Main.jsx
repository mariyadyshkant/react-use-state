import Button from './Button'
import Card from './Card'
import labelsButton from '../data/LabelsButton'


export default function Main() {
    return (
        <div className='container'>
            <Button labels={labelsButton} />
            <Card descriptions={labelsButton} />
        </div>
    )
}