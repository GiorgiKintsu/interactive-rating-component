import './Rate.css'



function Rate (props) {
    let numbers = [1,2,3,4,5];
    
    function makeRate(){
        console.log(props.rate);
    }

    
    return(
        <div className='rateContainer'>
            <div className="starWrapper">
                <img src="./star.svg" alt="starImage" />
            </div>
            <h2 className='question'>How did we do?</h2>
            <p className='questionText'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className='numbersWrapper'>
                {numbers.map((num) => <button key={num} className='numbers' style={props.number === num ? {background: "#FC7614", color: "white"} : {}} onClick={() => (props.setNumber(num))}>{num}</button>)}
            </div>
            <button onClick={() => {props.number ? props.setSubmit(true) : null}}>Submit</button>
        </div>
    )
}


export default Rate