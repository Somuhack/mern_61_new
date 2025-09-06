import "../assets/css/button.css"
const Mybutton = ({btntext,color})=>{

    
    const forNone=(color)=>{
        if(color==="none"){
            return({border:"1px solid black",color})
        }
        return color

    }
    return(
        <button style={{backgroundColor:color,fontFamily:"monospace"}} className={`btn ${color=="none" && "none"}`}>{btntext}</button>
    )
}
export default Mybutton