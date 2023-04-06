import React from 'react'
import Socials from '../Socials'
import Link from 'next/link'
import Button from '../Button'
import GoogleMap from 'google-map-react'

const Footer = ({}) => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&')
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', name, email, message }),
        })
            .then(() => alert('Message sent!'))
            .catch((error) => alert(error))
    }

    return (
        <>
            <div className="mt-5 laptop:mt-40 p-2 laptop:p-0"></div>
            <div id="contact" className="relative">
                <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap">
                    <div className="w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 mt-5 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            frameBorder={0}
                            marginHeight={0}
                            marginWidth={0}
                            style={{ filter: 'opacity(0.7)' }}
                            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        />
                        <div className="bg-gray-900 relative flex flex-wrap py-5 rounded-xl shadow-md">
                            <div className="lg:w-1/2 px-5">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    Tehran <br />
                                    IRAN
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-indigo-400 leading-relaxed">
                                    sadeghliahmadi@gmail.com
                                </a>
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">
                                    +98-9390228367
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col  md:py-8 mt-8 pl-20">
                        <div>
                            <div className="mt-20 mb-20">
                                <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                                    LET&apos;S WORK
                                </h1>
                                <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                                    TOGETHER
                                </h1>
                                <Button type="primary">Schedule a call</Button>
                                <div className="mt-20">
                                    <Socials />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
                        Made With ❤ by{' '}
                            <span className="underline underline-offset-1">
                            Sadegh Aliahmadi</span>
                    </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
