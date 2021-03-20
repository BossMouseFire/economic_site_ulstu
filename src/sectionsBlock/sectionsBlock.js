import React from 'react'
import ChoiceSection from './choiceSection'
import Explanation from './sections/explanation'
import './sectionsBlock.scss'
export default function SectionsBlock() {
    return (
        <div className="containerSections">
            <ChoiceSection/>
            <Explanation/>
        </div>
    )
}