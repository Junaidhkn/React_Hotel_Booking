import './layout.css'
import Video from '../../assets/background.mp4'

const layout = ( props ) => {
   return (
      <div>
         <div className='video_background'> </div>
         <video className='videoTag' autoPlay loop muted>
            <source src={Video} type='video/mp4' />
         </video>
         {props.children}
      </div>
   )
}

export default layout