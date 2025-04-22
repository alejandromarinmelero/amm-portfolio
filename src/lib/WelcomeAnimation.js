import gsap from 'gsap';
    
export const welcomeAnimation = () => {

    const h1 = document.querySelector("h1");

    const text = h1.innerText; 

    h1.innerHTML = text.split('').map(char => `<p>${char}</p>`).join('');
    
    const letters = h1.querySelectorAll("p");

    gsap.from(letters, {
        opacity: 0,
        y: 300,
        stagger: {
            from: 'start',
            each: 0.07
        },
        duration: 1,
        ease: "back.inOut",
        onEnter: () => {
            gsap.to('h1', {
            overflow: 'hidden'
            })
        },
        onComplete: () => {

            gsap.to('h1', {
                overflow: 'visible'
            })

            gsap.to(letters, {
                opacity: 0,
                y: -1000,
                stagger: {
                    from: 'start',
                    each: 0.07
                },
                duration: 1,
                ease: "back.inOut",
                delay: 1,
            });

            ScrollTrigger.refresh();clear
        }
    });

}

export default welcomeAnimation;
