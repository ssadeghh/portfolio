import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Head from 'next/head'
import { TerminalIcon } from '@heroicons/react/solid'
import { useIsomorphicLayoutEffect } from '../utils'
import { stagger } from '../animations/index'
import data from '../data/portfolio.json'
import Cursor from '../components/Cursor/index'
import Social from '../components/Socials/index'
import Header from '../components/Header'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home() {
    // Ref
    const contactRef = useRef()
    const aboutRef = useRef()
    const textOne = useRef()
    const textTwo = useRef()
    const textThree = useRef()
    const textFour = useRef()

    const [mount, setMount] = useState(false)
    const { theme, setTheme } = useTheme()
    const [windowWidth, setWindowWidth] = useState(0)

    const handleAboutScroll = () => {
        window.scrollTo({
            top: aboutRef.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        })
    }

    const handleContactScroll = () => {
        window.scrollTo({
            top: contactRef.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        })
    }
    
    useEffect(() => {
        setMount(true)
        // Update the state with the current window width on mount and on resize
        const handleResize = () => setWindowWidth(window.innerWidth)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useIsomorphicLayoutEffect(() => {
        stagger(
            [
                textOne.current,
                textTwo.current,
                textThree.current,
                textFour.current,
            ],
            { y: 40, x: -10, transform: 'scale(0.95) skew(10deg)' },
            { y: 0, x: 10, transform: 'scale(1)' }
        )
    }, [])

    return (
        <div className={`relative ${data.showCursor && 'cursor-none'}`}>
            {data.showCursor && <Cursor />}

            {/* title */}
            <Head>
                <title>{data.name}</title>
            </Head>

            <div className="container mx-auto mb-10">
                <Header
                    handleAboutScroll={handleAboutScroll}
                    handleContactScroll={handleContactScroll}
                />
                <div className="flex">
                    <div className="laptop:mt-20 mt-10 w-2/3">
                        <div className="mt-5">
                            <h1
                                ref={textOne}
                                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
                            >
                                {data.headerTaglineOne}
                            </h1>
                            <h1
                                ref={textTwo}
                                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                            >
                                {data.headerTaglineTwo}
                            </h1>
                            <h1
                                ref={textThree}
                                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                            >
                                {data.headerTaglineThree}
                            </h1>
                            <h1
                                ref={textFour}
                                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                            >
                                {data.headerTaglineFour}
                            </h1>
                        </div>

                        {/* <Socials className="mt-2 laptop:mt-5" /> */}
                    </div>
                    <div className="laptop:mt-20 mt-10 w-1/3">
                        <Image
                            src="/images/sadegh-without.png"
                            alt="my picture"
                            loading='lazy'
                            className="rounded-full"
                            style={{ width: '500px' }}
                        />
                        <div className="relative">
                            <div
                                className={`absolute  ${windowWidth < 800 ? "-bottom-5 -left-10 w-20 h-20" : "-bottom-20 -left-10 w-96 h-96"} bg-purple-300 rounded-full mix-blend-multiply filter blur-xl ${
                                    theme === 'light'
                                        ? 'opacity-80'
                                        : 'opacity-60'
                                } animate-blob `}
                            ></div>
                            <div
                                className={`absolute -bottom-5 right-4 ${windowWidth < 800 ? "w-20 h-20" : "w-96 h-96"} bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl ${
                                    theme === 'light'
                                        ? 'opacity-80'
                                        : 'opacity-60'
                                } animate-blob animation-delay-2000`}
                            ></div>
                            <div
                                className={`absolute ${windowWidth < 800 ? "bottom-5 left-10 w-20 h-20" : "bottom-20 left-10 w-96 h-96"} bg-pink-300 rounded-full mix-blend-multiply filter blur-xl ${
                                    theme === 'light'
                                        ? 'opacity-80'
                                        : 'opacity-60'
                                } animate-blob animation-delay-4000`}
                            ></div>
                        </div>
                    </div>
                </div>

                <Social className="mt-2 laptop:mt-5" />
                <div
                    className="mt-10 laptop:mt-30 p-2 laptop:p-0"
                    ref={aboutRef}
                >
                    <div className="mt-5 container mx-auto laptop:mt-10 grid grid-cols-1 mob:w-full gap-4">
                        <div className="flex flex-wrap m-4">
                            <div className="p-4 sm:w-1 w-full">
                                {mount && (
                                    <div
                                        className={`h-full ${
                                            theme === 'dark'
                                                ? 'bg-gray-800'
                                                : 'bg-gray-200'
                                        } bg-opacity-40 p-8 rounded-xl`}
                                    >
                                        <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                                        <h1 className="text-3xl text-bold mb-6">
                                            About
                                        </h1>
                                        <div className="inline-flex items-center text-lg">
                                            <p className="leading-relaxed mb-6">
                                                Hi there! My name is{' '}
                                                <b>Sadegh Alihamadi</b>, and I'm
                                                a <b>21-year-old</b> junior
                                                front-end developer. I have
                                                experience in a variety of
                                                technologies, including
                                                <b>
                                                    {' '}
                                                    JavaScript, ReactJS, ANTD,
                                                    Tailwind CSS, Bootstrap,
                                                    HTML & CSS, Redux, and
                                                    Next.js.
                                                </b>
                                                <br />
                                                As a front-end developer, I am
                                                passionate about creating{' '}
                                                <b>
                                                    visually appealing and
                                                    user-friendly interfaces
                                                </b>
                                                that help bring my clients'
                                                ideas to life. I am constantly{' '}
                                                <b>
                                                    learning and improving my
                                                    skills
                                                </b>
                                                , and I am excited to take on{' '}
                                                <b>
                                                    new challenges and projects
                                                </b>
                                                .
                                                <br />
                                                Whether you're looking to build
                                                a new website or improve an
                                                existing one, I am here to help.
                                                Please feel free to
                                                <b style={{ color: '#9d51a1' }}>
                                                    {' '}
                                                    contact
                                                </b>{' '}
                                                me to discuss your project and
                                                how I can assist you in
                                                achieving your goals.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={contactRef}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
