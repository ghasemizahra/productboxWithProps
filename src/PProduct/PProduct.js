import React from "react";
import "./PProduct.css"
function PProduct({image='logo192.png',price,model,caption,count,children}){
    // console.log(props);
    // let {image,price,model,caption}=props
     return (
        count &&
            <div>
        <div className="card">
            <img src={image} alt="photo" />
<p className="price">${price}</p>
<p>{model}</p>
<p>{caption}</p>
{children}
<p><button>add  to card</button></p>
</div>
        </div>
        
    )
    }  
    // PProduct.defaultProps={
    //     image:'logo192.png'
    // }
                    
        export default PProduct

//     if (props.count>0) {
//      return(       
//     <div >

      
//         <div className="card">
// <div>{props.image}</div>
// <p className="price">{props.price}</p>
// <p>{props.model}</p>
// <p>{props.caption}</p>
// <p><button>add  to card</button></p>
// </div>
//         </div>
//     )
//     }
       
//         return null
    
   
// }
