import React from 'react'
import ChoiceSection from './choiceSection'
import Explanation from './sections/explanationBlock/explanation'
import './sectionsBlock.scss'
import History from './sections/history/history'
import TechnicalSide from './sections/technicalSide/technicalSide'
import UseCoin from './sections/useCoin/useCoin'
import ValutionCoin from './sections/valuationCoin/valutionCoin'
import Questions from './sections/questions/questions'
export default function SectionsBlock() {
    return (
        <div className="containerSections">
            <ChoiceSection/>
            <Explanation/>
            <History/>
            <TechnicalSide/>
            <UseCoin/>
            <ValutionCoin/>
            <Questions/>
        </div>
    )
}