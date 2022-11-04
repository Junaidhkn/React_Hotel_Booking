import './navbar.css'

const navbar = () => {
   return (
      <>
         <nav className='navbar'>
            <div className="navContainer">
               <span className="logo">Bookie</span>
               <div className="navItems">
                  <button className="navButton">Register</button>
                  <button className="navButton">Log In</button>
               </div>
            </div>
         </nav>
         <hr />
      </>
   )
}

export default navbar