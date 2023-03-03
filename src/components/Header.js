function Header({theme}){
    return(
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                <div>
                    <img alt="CSCC Home page" 
                    src="/images/SVCClogo.png"></img>
              </div>
              <div className="light">
               <h4 className="header-tittle">
                Silicon valey Code camp</h4> 
                </div>    
                <div className={
                    theme==="light" ? "" : "text-info" 
                }>
                Hello Mr. Smith &nbsp;&nbsp;
                <span>
                    <a href="#">Sign out</a> 
                </span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header