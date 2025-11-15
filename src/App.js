import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './App.css';
export default function App() {

    const [prestige, setPrestige] = useState(0);
    const [hazardSymbols, setHazardSymbols] = useState(0);
    const [totals, setTotals] = useState([0, 0, 0]);
    const [rotateLogo, setRotateLogo] = useState(false);
    const [add, setAdd] = useState(true);
    const [pressed, setPressed] = useState([false, false, false, false]);

    return (
        <div id="app">
            <div id="add-subtract">
                <FontAwesomeIcon icon={add ? faPlus : faMinus} size="2x" color="white" className={ pressed[3] ? "pressed" : "" }
                    onClick={() => 
                        {
                            setPressed([false, false, false, true]);
                            setTimeout(() => {
                                setAdd(!add);
                                setPressed([false, false, false, false]);
                             }, 500);
                        }
                    } />
            </div>
            <img
                className={rotateLogo ? "rotate" : ""}
                src={`${process.env.PUBLIC_URL}/images/Moonrollers-Logo.png`} id="logo"
                onClick={() => {
                    setRotateLogo(true);
                    setTimeout(() => setRotateLogo(false), 1500);
                }}
            />
            <div id="track-area">
                <div id="prestige">{prestige}</div>
                <div id="hazard">
                    <div id="hazard-count">{hazardSymbols}</div>
                </div>
            </div>
            <div id="tokens">
                <img src={`${process.env.PUBLIC_URL}/images/Moonrollers-1-Token.png`} className={pressed[0] ? "token pressed" : "token"} 
                    onClick={() => 
                    { 
                        if (add) {
                            setPrestige(prestige + 1); setTotals([totals[0] + 1, totals[1], totals[2]]);
                        } else {
                            if (totals[0] > 0) {
                                setPrestige(prestige - 1); setTotals([totals[0] - 1, totals[1], totals[2]]);
                            }
                        }

                        setPressed([true, false, false, false]);
                        setTimeout(() => setPressed([false, false, false, false]), 500);
                    }
                } />
                <img src={`${process.env.PUBLIC_URL}/images/Moonrollers-2-Token.png`} className={pressed[1] ? "token pressed" : "token"}
                    onClick={() => 
                    { 
                        if (add) {
                            setPrestige(prestige + 2); setHazardSymbols(hazardSymbols + 1); setTotals([totals[0], totals[1] + 1, totals[2]]);
                        } else {
                            if (totals[1] > 0) {
                                setPrestige(prestige - 2); setHazardSymbols(hazardSymbols - 1); setTotals([totals[0], totals[1] - 1, totals[2]]);
                            }
                        }
 
                        setPressed([false, true, false, false]);

                        setTimeout(() => setPressed([false, false, false, false]), 500);
                    }
                } />
                <img src={`${process.env.PUBLIC_URL}/images/Moonrollers-5-Token.png`} className={pressed[2] ? "token pressed" : "token"}
                    onClick={() => 
                    { 
                        if (add) {
                            setPrestige(prestige + 5); setHazardSymbols(hazardSymbols + 2); setTotals([totals[0], totals[1], totals[2] + 1]); 
                        } else {
                            if (totals[2] > 0) {
                                setPrestige(prestige - 5); setHazardSymbols(hazardSymbols - 2); setTotals([totals[0], totals[1], totals[2] - 1]);
                            }
                        }

                        setPressed([false, false, true, false]);
                        setTimeout(() => setPressed([false, false, false, false]), 500);
                    }
                } />
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