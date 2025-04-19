"use client"

import { useEffect, useRef, useState } from "react";


function Casual() {
    const cas = useRef<HTMLDivElement>(null);
    const spark = useRef<HTMLDivElement>(null);
    let canCreateParticle = true;

    useEffect(() => {
        cas.current?.addEventListener('mousemove', (e) => {
            createParticle();
        });
        
     }, [cas]);

    function createParticle() {
        if (!canCreateParticle) return;
        canCreateParticle = false;

        const particle = document.createElement('div');
        particle.className = 'particle';
      
        // Set random position and size
        const size = Math.random() * 10 + 5; // Random size between 5px and 15px
        particle.style.width = `${size}px`;
        particle.className = 'particle';
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particle.style.left = `${Math.random() * 10 + 30}vw`; // Random horizontal position
        particle.style.top = `${Math.random() * 100}vh`; // Random vertical position
        particle.style.transform = `scale(${Math.random()})`;
        // Random rotation
        particle.style.setProperty('--rotation', `${Math.random() * 360}deg`);
      
        // Set random animation duration
        const duration = Math.random() * 5 + 1; // Random duration between 3s and 8s
        particle.style.animationDuration = `${duration}s`;
      
        cas.current?.appendChild(particle);
      
        // Remove particle after animation ends
        particle.addEventListener('animationend', () => {
          particle.remove();
        });
        setTimeout(() => {
            canCreateParticle = true;
        }, 20);
      }

    return ( 
    <div ref={cas} className = "casual bg-red-300 w-screen h-screen" onMouseDown={
        () => {
            window.location.href = '/casual';
        }
    }>
        <div className="spark h-20 w-2" ref={spark}> </div>
        <h1 className="absolute right-5 top-2/5 text-[10rem] font-black float-right text-black">Casual</h1> 
    </div>);
}

export default Casual;