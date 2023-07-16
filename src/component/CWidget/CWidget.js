
import { CWidgetStatsC } from "@coreui/react";



const CWidget = ({value, icon, title, text, onWidgetClick, id, show})=>{

  

    return  < CWidgetStatsC  
    
      onClick={ ()=> onWidgetClick(id)}
      style={{cursor:"pointer"}}
      color={show[id] ? "success" : "warning"}
      progress= {value}
       icon= {<i style={{fontSize:"50px"}} className= {`bi ${icon} text-white`}/>}
       text= {text}
       title= {title}
       value= {value}
       /> 

}
export default CWidget;

