import { useState } from "react";

function Professional() {
    let [isHovered, setIsHovered] = useState(false);

    return ( 
        <div className="professional bg-gray-800" onMouseEnter={
            () => {
                setIsHovered(true);
            }
        } onMouseLeave={() => {setIsHovered(false)}}
        onMouseDown={() => {
            if (!document.startViewTransition) {
                window.location.href = '/professional';
            }
        
                document.startViewTransition(() => {

                    window.location.href = '/professional';
                })
        }}
        >
        <h1 className="absolute left-5 top-1/5 text-[7rem] font-bold text-white">Professional</h1> 
        {isHovered && <p className="animate-float-in absolute left-5 bottom-2/5 text-xl font-bold text-white">Software Engineer with a passion on Overengineering</p>}
        </div>
     );
}

export default Professional;