import './Result.css'

function Result (){
    return(
        <div className='ResultContainer'>
            <div className='imageWrapper'>
                <img src="./online-payment.svg" alt="online-payment-image" />
            </div>
            <h3 className='selectRate'>You selected 4 out of 5</h3>
            <h2 className='gratitude'>Thank you!</h2>
            <p className='gratitudeText'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>

        </div>
    )
}
export default Result