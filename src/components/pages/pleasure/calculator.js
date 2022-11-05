import React, {useState} from "react";

import "./calculator.css";

const CoffeineCalc = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [ageDirty, setAgeDirty] = useState(false);
    const [weightDirty, setWeightDirty] = useState(false);
    const [ageError, setAgeError] = useState('Please , enter your age');
    const [weightError, setWeightError] = useState('Please , enter your weight');
    const [add, setAdd] = useState();

    const Calc = () => {
            let coffeeMl = 0;
            let cups = 0;
            if (age < 18 && age > 12) {
                coffeeMl = Math.floor(2.5 * weight);
                cups = Math.floor((2.5*weight) / 250);
            }else if(age >= 18) {
                coffeeMl = Math.floor(5.26 * weight);
                cups = Math.floor((5.26 * weight) / 250);
            }else{
                return (
                    <div className="result">
                        <h2>It is forbidden to drink coffee at your age</h2>
                    </div>
                )
            }

            return (
                <div className="result">
                    <h2>You can drink {coffeeMl} ml of coffee a day or {cups} cup</h2>
                </div>
            )    
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
        if ((e.target.value).match(/^[0-9]/) == null || (e.target.value) < 0){
            setAgeError('Incorrect data')
        }else if(!(e.target.value)){
            setAgeError('Please , enter your age')
        }else{
            setAgeError('')
        }
    }

    const weightHandler = (e) => {
        setWeight(e.target.value)
        if ((e.target.value).match(/^[0-9]/) == null || (e.target.value) < 0){
            setWeightError('Incorrect data')
        }else if(!(e.target.value)){
            setWeightError('Please , enter your weight')
        }else{
            setWeightError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'age':
                setAgeDirty(true)
                break
            case 'weight':
                setWeightDirty(true)
                break
        }
    }

    return (
        <div className="coffeine">
            <form className="coffeine__form">
                <h2 className="coffeine__title">Daily Coffee Allowance Calculator</h2>
                <div className="coffeine__inp">
                    {(ageError && ageDirty) && <div className="error_age">{ageError}</div>}
                    <input onChange={e => ageHandler(e)} value = {age} onBlur={e => blurHandler(e)} name = "age" type = "number" placeholder="Enter your age" className="coffeine__input" required></input>
                    {(weightError && weightDirty) && <div className="error_weight">{weightError}</div>}
                    <input onChange={e => weightHandler(e)} value = {weight} onBlur={e => blurHandler(e)} name = "weight" type = "number" placeholder="Enter your weight" className="coffeine__input" required></input>
                </div>
                <button type = "button" className="coffeine__button" onClick = {() => setAdd(Calc())}>Submit</button>
            </form>
            {add}
        </div>
    )
}

export default CoffeineCalc;