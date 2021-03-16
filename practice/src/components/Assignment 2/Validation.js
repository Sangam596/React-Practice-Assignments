import React from 'react'

 const Validation =props=> {
    let valdateMessege=<p> Text too Short ...!</p>;
     if(props.length>5){
        valdateMessege=<p> Text Long Enough ...!</p>;
     }
    return (
        <div>
             {valdateMessege} 
        </div>
          
      
    )
}
export default Validation;