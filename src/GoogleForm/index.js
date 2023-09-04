import './style.css';
import { useState } from 'react';
import cloud from '../images/cloud (1).png';
import CloudPopup from '../CloudPopup';

const Googleform = () => {
    const [state, setstate] = useState({})
    const [active, setactive] = useState(false)
    const [errors, setErrors] = useState({})

    function inputchangehandler(e) {
        const value = e.target.value
        const name = e.target.name

        const obj = {
            ...state,
            [name]: value
        }

        setstate(obj)
        setErrors(prev => {
            delete prev[name];
            return prev
        })
    }

    function motion() {
        setactive(true)
    }


    const isError = () => {
        const errorObj = {}
        if (!state.email) errorObj.email = 'This is a required question';
        if (!state.fullName) errorObj.fullName = 'This is a required question'
        if (!state.age) errorObj.age = 'This is a required question'
        if (!state.education) errorObj.education = 'This is a required question'
        if (!state.institute) errorObj.institute = 'This is a required question'
        if (!state.study) errorObj.study = 'This is a required question'
        if (!state.experience) errorObj.experience = 'This is a required question'
        if (!state.program) errorObj.program = 'This is a required question'
        if (!state.country) errorObj.country = 'This is a required question'
        if (!state.instituteAdmit) errorObj.instituteAdmit = 'This is a required question'
        if (!state.goals) errorObj.goals = 'This is a required question'
        if (!state.englishlistening) errorObj.englishlistening = 'This is a required question'
        if (!state.englishreading) errorObj.englishreading = 'This is a required question'
        if (!state.englishspeakingscore) errorObj.englishspeakingscore = 'This is a required question'
        if (!state.englishspeaking) errorObj.englishspeaking = 'This is a required question'
        if (!state.tuition) errorObj.tuition = 'This is a required question'
        if (!state.tuitionfee) errorObj.tuitionfee = 'This is a required question'
        if (!state.gic) errorObj.gic = 'This is a required question'
        if (!state.pay) errorObj.pay = 'This is a required question'

        setErrors(errorObj);

        return !!Object.keys(errorObj)
    }

    function submit() {
        const error = isError()

        if (error) return;

        fetch('/url', {
            method: 'POST',
            body: JSON.stringify(state)
        })
    }

    function clearall() {
        setstate({})
    }


    return (
        <div className='container'>
            <div className='logobox'>
                <img src="https://lh6.googleusercontent.com/vHlmJXYwoJzkzWTJP1uGhFgY6sgJPIJCxl1tr5LufmBo8TvIU-EW8QLDYz6udujWDFqtNHbmn_0dVGc35tM--t4B5O2V17TC_BRV1DI6mX_3eYPzsxxIGXGBFgR0_hVQjw=w1020" className='logo' />
            </div>
            <div className='textborder'>
                <div className='sop'>Customized SOP Generator</div>
                <div className='para'>Fill this questionnaire for the student.
                    After submitting, you will receive an email at the email
                    address that you have provided with a Statement of
                    Purpose customized for you. You can use and modify that as
                    per your needs.
                </div>
                <div className='para'>If you would like to get it edited, reviewed, or drafted by our
                    experts, you can get in touch with
                    us: https://effizient-immigration-inc.square.site/s/shop
                </div>
                <div className='flexinline para'>
                    <div>rsujeet85@gmail.com Switch account</div>
                    <div>
                        <img src={cloud} alt="l" className='cloud' onClick={motion} />
                    </div>
                </div>
                <div className='red para'>* Indicates required question</div>
            </div>
            <FieldWrapper error={errors.email} label="Email" required={true}>
                <input placeholder='Your Email' name="email" value={state.email || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.fullName} label="Full Name" required={true}>
                <input placeholder='Your Full Name' name='fullName' value={state.fullName || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.age} label="Age" required={true}>
                <input placeholder='Your answer' name="age" value={state.age || ''} onChange={inputchangehandler} />
            </FieldWrapper>

            <FieldWrapper error={errors.education} label="Highest Level of Education">
                <select name="education" value={state.education || ''} onChange={inputchangehandler}>
                    <option value="">choose</option>
                    <option value="Grade 12">Grade 12</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelors Degree">Bachelors Degree</option>
                    <option value="Masters Degree">Masters Degree</option>
                    <option value="PhD">PhD</option>
                </select>
            </FieldWrapper>
            <FieldWrapper error={errors.institute} label="Institute where you completed your highest level of education" required={true}>
                <input placeholder='Your answer' name="institute" value={state.institute || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.study} label="What did you study" required={true}>
                <input placeholder='Your answer' name="study" value={state.study || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.experience} label="Do you have any relevant work experience?" required={true}>
                <div>Write None if no work experience. Provide the following details if yes:</div>
                <ol className='ol'>
                    <li>Job Title</li>
                    <li>Company Name</li>
                    <li>Job duties</li>
                </ol>
                <div className='base'>Sample Answer: I worked as a Sales Manager at Effizient Immigration
                    Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations,
                    reaching out to leads, lead the outreach program, ensured meeting monthly
                    targets.
                </div>
                <input placeholder='Your answer' name="experience" value={state.experience || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.instituteAdmit} label="What institute did you get admitted to in Canada?" required={true}>
                <input placeholder='Your answer' name='instituteAdmit' value={state.instituteAdmit || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.program} label="What is your program of study in Canada?" required={true}>
                <input placeholder='Your answer' name="program" value={state.program || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.country} label="Which country are you applying from?" required={true}>
                <input placeholder='Your answer' name="country" value={state.country || ''} onChange={inputchangehandler} />
            </FieldWrapper>

            <FieldWrapper error={errors.goals} label="What are your future goals?" required={true}>
                <input placeholder='Your answer' name="goals" value={state.goals || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.englishlistening} label="English Scores - Listening" required={true}>
                <input placeholder='Your answer' name="englishlistening" value={state.englishlistening || ''} onChange={inputchangehandler} />
            </FieldWrapper>

            <FieldWrapper error={errors.englishreading} label="English Scores - Reading" required={true}>
                <input placeholder='Your answer' name='englishreading' value={state.englishreading || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.englishspeakingscore} label="English Scores - Speaking" required={true}>
                <input placeholder='Your answer' name="englishspeakingscore" value={state.englishspeakingscore || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.englishspeaking} label="English Scores - Writing" required={true}>
                <input placeholder='Your answer' name="englishspeaking" value={state.englishspeaking || ''} onChange={inputchangehandler} />
            </FieldWrapper>

            <FieldWrapper error={errors.tuition} label="Did you pay your first year tuition?" required={true}>
                <div>
                    <input type="radio" value="yes" name="tuition" checked={state.tuition === 'yes'} id="tuitionyes" onChange={inputchangehandler} />
                    <label className='radio' htmlFor='tuitionyes'>Yes</label>
                </div>
                <div>
                    <input type="radio" value="no" name="tuition" checked={state.tuition === 'no'} id="tuitionno" onChange={inputchangehandler} />
                    <label className='radio' htmlFor='tuitionno'>No</label>
                </div>

            </FieldWrapper>
            <FieldWrapper error={errors.tuitionfee} label="How much tuition fee did you pay?" required={true}>
                <input placeholder='Your answer' name="tuitionfee" value={state.tuitionfee || ''} onChange={inputchangehandler} />
            </FieldWrapper>
            <FieldWrapper error={errors.gic} label="Did you do a GIC?" required={true}>
                <div>
                    <input type="radio" name='gic' value="yes" checked={state.gic === 'yes'} id="gicyes" onChange={inputchangehandler} />
                    <label className='radio' htmlFor='gicyes'>Yes</label>
                </div>
                <div>
                    <input type="radio" name='gic' checked={state.gic === 'no'} value="no" id="gicno" onChange={inputchangehandler} />
                    <label className="radio" htmlFor="gicno">No</label>
                </div>
            </FieldWrapper>
            <FieldWrapper error={errors.pay} label="How much did you pay towards GIC?" required={true}>
                <input placeholder='Your answer' value={state.pay || ''} name="pay" onChange={inputchangehandler} />
            </FieldWrapper>
            <div className='submitdiv'>
                <div>  <button type='button' onClick={submit} className='btn'>Submit</button></div>
                <div className='emptydiv'></div>
                <div>Page 1 of 1</div>
                <div>  <button type='button' onClick={clearall} className='btncolor'>Clear all</button></div>
            </div>
            {
                active === true &&


                <CloudPopup setstate={setactive} />

            }
        </div>
    )
}
export default Googleform



const FieldWrapper = (props) => {

    return (
        <div className='field-wrapper'>
            <div className='label-wrapper'>
                <span>{props.label}</span>
                {
                    props.required && <span className='red'>*</span>
                }
            </div>
            {props.children}
            {
                props.error && 
                <div className='red' style={{ marginTop: '10px' }}>{props.error}</div>
            }
        </div>
    )
}