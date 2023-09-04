import './style.css';
 
const CloudPopup=(props)=>{



    function closepopup(){
        props.setstate(false)
    }
    return(
        <div  className='toppopup'>
        <div  className='popup-content'>
            <div>
                <img src="https://ssl.gstatic.com/docs/forms/draft_responses_onboarding.png" alt="" className='cloudpopup'/>
                <div>Autosave your work</div>
                <div>Google Forms automatically saves your progress
                     for 30 days when you're signed in to your Google
                      account so you can work across devices or take a break
                       without losing a step</div>
            </div>
            <button type='button' className='Okey' onClick={closepopup}>Okey</button>

        </div>
        </div>
    )
}
export default CloudPopup
