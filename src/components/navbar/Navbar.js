import './navbar.css'

const navbar = ( { type } ) => {
   return (
      <>
         <div className={
            type === 'list' ? 'navbar listMode' : 'navbar'
         }>
            <div className={
               type === 'list' ? 'navContainer listMode' : 'navContainer'
            }>
               <span className="logo">Bookie</span>
               <div className="navItems">
                  <button className="navButton">Register</button>
                  <button className="navButton">Log In</button>
               </div>
            </div>
         </div>
      </>
   )
}

export default navbar