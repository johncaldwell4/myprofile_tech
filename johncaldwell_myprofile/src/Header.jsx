import selfImage from './assets/selfie-01.jpg'
function Header() {
    
    const quotes = ["If you want to achieve greatness stop asking for permission. ~Anonymous]",
        "Things work out best for those who make the best of how things work out. ~John Wooden",
        "To live a creative life, we must lose our fear of being wrong. ~Anonymous",
        "If you are not willing to risk the usual you will have to settle for the ordinary. ~Jim Rohn"]
    return (
    <>
        <div className="headerTitle">
                <div className='title'>
                    <h1>Hello Everyone, My name is John Caldwell</h1>
                    <h3 id="quotes">{quotes[2]}</h3>
                </div>
                <div className='title-img'>
                    <img className="mySelfImage" src={selfImage} height={250} width={250} alt="My Picture"></img>
                </div>
        </div>
    </>

    );
    
}

export default Header