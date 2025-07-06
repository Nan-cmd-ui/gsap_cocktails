import React from 'react'
import {useGSAP} from "@gsap/react";
import { SplitText} from "gsap/all";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words'});
    }, []);
    return (
        <>
        <section id="hero" className="noisy">
            <h1 className="title">MOJITO</h1>

            <img
            src="/images/hero-left-leaf.png"
            alt="left-leaf"
            className="left-leaf"
            />

            <img
                src="/images/hero-right-leaf.png"
                alt="right-leaf"
                className="right-leaf"
            />

            <div className="body">
                <div className="content">
                    <div className="space-y-5 md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">
                            Sip the Spirit <br /> of Summer
                        </p>
                    </div>

                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a bled of premium ingredients,
                        creative flair and timeless recipes - designed to delight your senses
                        </p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                </div>
            </div>


        </section>
        </>
    )
}
export default Hero
