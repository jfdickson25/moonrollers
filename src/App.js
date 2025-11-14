import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';
export default function App() {

    const [prestige, setPrestige] = useState(0);
    const [hazardSymbols, setHazardSymbols] = useState(0);
    const [totals, setTotals] = useState([0, 0, 0]);

    return (
        <div id="app">
            <img src={`${process.env.PUBLIC_URL}/images/Moonrollers-Logo.png`} id="logo" />
            <div id="track-area">
                <div id="prestige">{prestige}</div>
                <div id="hazard">
                    <div id="hazard-count">{hazardSymbols}</div>
                </div>
            </div>
            <div id="tokens">
                <img src={`${process.env.PUBLIC_URL}/images/Moonrollers-1-Token.png`} className="token" onClick={() => { setPrestige(prestige + 1); setTotals([totals[0] + 1, totals[1], totals[2]]); }} />
                <img src={`${process.env.PUBLIC_URL}/images/Moonrollers-2-Token.png`} className="token" onClick={() => { setPrestige(prestige + 2); setHazardSymbols(hazardSymbols + 1); setTotals([totals[0], totals[1] + 1, totals[2]]); }} />
                <img src={`${process.env.PUBLIC_URL}/images/Moonrollers-5-Token.png`} className="token" onClick={() => { setPrestige(prestige + 5); setHazardSymbols(hazardSymbols + 2); setTotals([totals[0], totals[1], totals[2] + 1]); }} />
                <div className="count">{totals[0]}</div>
                <div className="count">{totals[1]}</div>
                <div className="count">{totals[2]}</div>
            </div>
            <div id="reset">
                <FontAwesomeIcon icon={faRotateRight} size="3x" color="white" onClick={ () => { setPrestige(0); setHazardSymbols(0); setTotals([0, 0, 0]); }}/>
            </div>
        </div>
    );
}