import React from 'react';
import {useState, useEffect} from 'react';
import {RemoveScroll} from 'react-remove-scroll';
import './filter.css';

const Filter = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const [coffeList , setCoffeeList] = useState([])
    let [counter, setCounter] = useState(0);
    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false);
    const [coffee, setCoffee] = useState(null);

    const showItem = () => {
        const ingridients = coffeList[coffee].ingredients.map((elem, i) => {
            return (
                <li key = {i}>{elem}</li>
            )
        })


        return (
            <RemoveScroll>
                <div className="wrap">
                    <div class="modalBackdrop"></div>
                    <div className="singleCoffee">
                        <div className="exit" onClick={() => setVisible(false)}></div>
                        <img className='singleCoffee__img' src = {coffeList[coffee].image} alt = 'coffee'></img>
                        <div className="singleCoffee_descr">
                            <h2>{coffeList[coffee].title}</h2>
                            <p>{coffeList[coffee].description}</p>
                            <p>Ingridients:</p>
                            <ul>
                                {ingridients}
                            </ul>
                        </div>
                    </div>
                </div>
            </RemoveScroll>
            
        )
    }

    const filteredCoffee = coffeList.slice(0,18).filter(coffee => {
        return coffee.title.toLowerCase().startsWith(value.toLowerCase())
        
    })

    useEffect(() => {
        fetch('https://api.sampleapis.com/coffee/hot')
            .then(res => res.json())
            .then(
                (result) => {
                    setLoaded(true)
                    setCoffeeList(result)
                },
                (error) => {
                    setLoaded(true)
                    setError(error)
                }
            )
            
    }, [])

    const incCounter = () => {
        setCounter(counter => counter + 1)
        console.log(counter)
      }

    const createNewList = () => {
        let newList = [];
        if (counter === 0){
            newList = coffeList.slice(0, 6);
        }else if(counter === 1){
            newList = coffeList.slice(0 , 12);
        }else {
            newList = coffeList.slice(0, 18);
        }
        return newList
    }
    

    function renderItems (arr) {
        const items = arr.map((item, i) => {
            return (
                <li className="coffee__item" data-index={item.id} key = {i} onClick = {(event) => setCoffee(event.currentTarget.dataset.index - 1)}>
                    <img src={item.image} alt={item.title} className="coffee__item-img" onClick={() => setVisible(true)}/>
                    <div className="coffee__item-name" onClick={() => setVisible(true)}>{item.title}</div>
                </li>
            )
        })

        return (
            <ul className="coffee__grid">
                {items}
            </ul>
        )
    }

    let items = value === '' ?  renderItems(createNewList()) : renderItems(filteredCoffee);

    
    
    

    return (
        <div className='filter'>
            <div className="looking_for">
                <p>Looking for</p>
                <input type= 'text' placeholder='start typing here...' className='filter__input' onChange={(e) => setValue(e.target.value)}></input>
            </div>

           {items}

            <button 
                style={{'display' : createNewList().length === 18 ? 'none' : 'block'}}
                className="coffee_button"
                onClick={incCounter}
                >
                Load more
            </button>

            {visible && showItem()}
        </div>
    )
}

export default Filter