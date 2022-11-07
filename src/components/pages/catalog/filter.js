import {Link} from 'react-router-dom';
import React from 'react';
import {useState, useEffect} from 'react';
import './filter.css';

const Filter = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const [coffeList , setCoffeeList] = useState([])
    let [counter, setCounter] = useState(0);
    const [value, setValue] = useState('')

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
                <li className="coffee__item" key={i}>
                    <Link to={`/catalog/${item.id}`} style = {{textDecoration: 'none'}}>
                        <img src={item.image} alt={item.title} className="coffee__item-img"/>
                        <div className="coffee__item-name">{item.title}</div>
                    </Link>
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
        <>
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
        </>
    )
}

export default Filter