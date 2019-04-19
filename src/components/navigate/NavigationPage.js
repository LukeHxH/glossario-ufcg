import React, { Component } from "react";
import terms from '../../lib/data';
import { TermCard } from '../common/index'

import './NavigationPage.css';

const ListTerms = () => Object.keys(terms).map(acronym => (
    terms[acronym].map(meaning => <TermCard simple term={meaning} key={meaning.entry + meaning.meaning}/>)
 ))

class NavigationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"navigation__container"}>
                <ListTerms/>
            </div>
        )
    }
}

export default NavigationPage;