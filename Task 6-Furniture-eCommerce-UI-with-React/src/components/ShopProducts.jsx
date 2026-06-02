import { PRODUCTS } from "../data"

import Products from "./Products";
import { useState } from "react";
import filterImg from '../assets/filter.png';
import gridImg from '../assets/grid.png';
import listImg from '../assets/list.png';

const TOTAL_PRODUCTS = PRODUCTS.length; // 37 products
const TOTAL_BUTTONS = Math.ceil(TOTAL_PRODUCTS / 16) // 3 buttons
const TOTAL_LAST_PRODUCTS = TOTAL_PRODUCTS % 16 // 5 last products
let maxInput = 16;

export default function ShopProducts() {

    const [ showValue, setShowValue ] = useState(TOTAL_PRODUCTS >= 16 ? [0, 16] : [0, TOTAL_PRODUCTS])
    
    const currentButton = (showValue[0]/16) + 1;

    let buttons = [];
    for (let i = 1; i <= TOTAL_BUTTONS; i++) {
        buttons.push(<button className={i==currentButton ? 'active' : ''} onClick={() => handleButtonClick(i)} key={i}>{i}</button>)
    }

    function handleButtonClick(page) {
        const start = (page-1) * 16
        const end = page === TOTAL_BUTTONS ? start + TOTAL_LAST_PRODUCTS : page * 16
        setShowValue([start, end])
        maxInput = end-start; 
    }
    
    function handleInput(input) {
        const end = showValue[0] + Number(input);
        setShowValue([showValue[0], end])
    }

    const results = showValue[1] === showValue[0] + 1 ? showValue[1] : `${showValue[0]+1}-${showValue[1]}` 

    return (
        <div className="shop">
            <div className="customise">
                <div className="flex-item-1">
                    <img src={filterImg} alt="Filter Image" />
                    <span>Filter</span>
                    <img src={gridImg} alt="Grid Image" />
                    <img src={listImg} alt="List Image" />
                    <span className="vr"></span>
                    <span>Showing {results} of {TOTAL_PRODUCTS} results</span>
                </div>
                <div className="flex-item-2">
                    <label htmlFor="value">Show</label>
                    <input type="number" id="value" value={showValue[1] - showValue[0]} min='1' max={maxInput} onChange={(event) => handleInput(event.target.value)} /> 
                    <label htmlFor="sortBy">Sort by</label>
                    <select name="sortBy" id="sortBy">
                        <option value="" selected>Default</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
            </div>
            <Products start={showValue[0]} end={showValue[1]} />
            <div className="page-buttons">
                {buttons}
                <button>Next</button>
            </div>
        </div>
    )
}



