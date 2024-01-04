import "./joincommunity.css"

const JoinCommunity =()=>(
    <div className="join-community-container">
        <h1>Join our community</h1>
        <p>of stargazers, explorers, and cosmic enthusiasts as we embark on a journey through the cosmos like never before.</p>
        <div className="newsletter-container">
            <input type="text" placeholder="Enter your email" className="input" />
            <button className="subscribe-button">Subscribe</button>
        </div>
    </div>
)

export default JoinCommunity