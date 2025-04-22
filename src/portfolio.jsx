import { useEffect } from 'react';
import { welcomeAnimation } from './lib/WelcomeAnimation';

function Portfolio() {

  useEffect(() => {
    welcomeAnimation();
  }, []);

  return (
    <>
      <section className="h-screen bg-[#2F3E46] flex items-center justify-center" >
        <h1 className="text-center overflow-hidden flex items-center justify-center">Welcome</h1>
      </section>
    </>
  )
}

export default Portfolio
