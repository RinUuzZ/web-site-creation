import React from 'react'


const Main = () => {
  return (
    <div className='main-texts'>
      <section className="home">
        <div className="container flex">
            <div className="right-topMargin">
                <h1 style={{'font-size': '55px', 'margin-top': '-126px','margin-left': '-227px'}}>Transforming Ideas into Reality.</h1>
                <p style={{marginLeft:'-227px'}}>Ollinwon focus to have satisfied customers by providing the best service that we can....</p>
                <a href="contactUs"><button className='primary-btn' style={{cursor:'pointer'}}>Contact Us</button></a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Main
