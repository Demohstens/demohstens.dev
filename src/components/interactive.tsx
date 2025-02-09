import { useEffect, useRef, useState } from "react";

function Interactive() {

    const background = useRef<HTMLDivElement>(null);
    const pin = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState<{x: number, y: number}>({x: 0, y: 0})

    useEffect(() => {
        background.current?.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            background.current!.style.backgroundColor = `rgb(${x * 10 + 236}, ${y * 5 + 145}, ${x * 5 + 234})`;
        });
        background.current?.addEventListener('click', (e) => {
            background.current!.style.cursor = 'none';
            console.log(e.clientX)
            setMousePos({x: e.clientX, y: e.clientY})
            pin.current!.style.scale = '1';
            pin.current?.animate({
                transform: ['translateY(-100%) rotate(0deg)','rotate(-10deg)', 'rotate(8deg)', 'translateY(0) rotate(-6deg)', 'rotate(3deg)' , 'translateY(0) rotate(0deg)'],
                
            }, {
                duration: 600,
                iterations: 1,
                fill: 'forwards',
            })
            setTimeout(() => {
                background.current!.style.cursor = 'pointer';
                pin.current!.style.scale = '1';
            }, 700);
        });
    }, []);

    useEffect(() => {
        console.log(mousePos)
        pin.current!.style.left = mousePos.x.toString()
        pin.current!.style.top = mousePos.y.toString()

    }, [mousePos])
    return (<div className="h-screen w-screen">

        
        {/* <div className={`left-[${mousePos.x}px] top-[${mousePos.y}px] absolute bg-red-600 animate-ping w-10 h-10 absolute rounded-full z-0 `}></div> */}
        <div ref={pin} className={`left-2 top-[${mousePos.y}px] origin-bottom absolute pin w-10 h-10 translate-x-1/2 translate-y-1/2`} id="pin">
            <img src="/pin.svg" alt="pin" className="w-full h-full z-10" />
        </div>
        <div ref={background} className='welcome bg-red-100 w-screen h-screen overflow-hidden'>
            {/* <h1 className="text-[22rem] font-black absolute -translate-y-40 text-red-300">DEMOHSTENS</h1>
            <h1 className="text-[22rem] font-black absolute translate-y-25 -translate-x-300 text-red-300">DEMOHSTENS</h1> */}

            <p></p>
        </div>
        </div>
    );
}

export default Interactive;