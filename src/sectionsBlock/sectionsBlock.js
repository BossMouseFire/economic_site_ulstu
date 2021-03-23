import React from 'react'
import ChoiceSection from './choiceSection'
import Explanation from './sections/explanationBlock/explanation'
import './sectionsBlock.scss'
import History from './history/history'
export default function SectionsBlock() {
    return (
        <div className="containerSections">
            <ChoiceSection/>
            <Explanation/>
            <History/>
        </div>
    )
}