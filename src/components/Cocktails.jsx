import React from 'react'
import { cocktailLists, mockTailLists } from '../constants/index.js'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
         scrollTrigger: {
             trigger: '#cocktails',
             start: '30%',
             end: 'bottom 80%',
             scrub: true,
         }
        })

        parallaxTimeline
            .from('#c-left-leaf', {
                x: -100, y:100
            })
            .from('#c-right-leaf', {
                x: 100, y:100
            })
    })
    return (
        <section id="cocktails" className="noisy relative">
            {/* Decorative Leaves */}
            <img
                src="/images/cocktail-left-leaf.png"
                alt="Left decorative leaf"
                id="c-left-leaf"
            />
            <img
                src="/images/cocktail-right-leaf.png"
                alt="Right decorative leaf"
                id="c-right-leaf"
            />

            {/* Popular Cocktails */}
            <div className="list">
                <div className="popular">
                    <h2 className="text-2xl font-bold mb-4">Most Popular Cocktails:</h2>
                    <ul className="space-y-4">
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name} className="flex justify-between items-start">
                                <div className="md:me-28">
                                    <h3 className="font-semibold text-lg">{name}</h3>
                                    <p className="text-sm text-gray-600">
                                        {country} | {detail}
                                    </p>
                                </div>
                                <span className="text-md font-bold">{price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loved">
                    <h2 className="text-2xl font-bold mb-4">Most Loved mocktails:</h2>
                    <ul className="space-y-4">
                        {mockTailLists.map(({ name, country, detail, price }) => (
                            <li key={name} className="flex justify-between items-start">
                                <div className="me-28">
                                    <h3 className="font-semibold text-lg">{name}</h3>
                                    <p className="text-sm text-gray-600">
                                        {country} | {detail}
                                    </p>
                                </div>
                                <span className="text-md font-bold">{price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails