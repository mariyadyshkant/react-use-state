import { useState } from 'react'

import Button from './Button'
import Card from './Card'
import labelsButton from '../data/LabelsButton'


export default function Main() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    return (
        <div className='container'>
            <Button
                labels={labelsButton}
                selected={selectedLanguage}
                onSelect={setSelectedLanguage}
            />
            <Card language={selectedLanguage} />
        </div>
    )
}