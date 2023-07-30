import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cursor from '../components/Cursor'
import Header from '../components/Header'
import Socials from '../components/Socials'
import { useTheme } from 'next-themes'
// Data
import data from '../data/portfolio.json'

const Resume = () => {
    const router = useRouter()
    const theme = useTheme()
    const [mount, setMount] = useState(false)

    useEffect(() => {
        setMount(true)
        if (!data.showResume) {
            router.push('/')
        }
    }, [router])

    const downloadResume = () => {
        // URL to your resume.pdf file
        const resumeUrl = "/resume-full.pdf";

        // Create a new anchor element
        const link = document.createElement("a");

        // Set the href attribute to your resume.pdf URL
        link.href = resumeUrl;

        // Set the download attribute to specify the filename when downloaded
        link.download = "resume-full.pdf";

        // Append the anchor element to the document body
        document.body.appendChild(link);

        // Simulate a click event on the anchor element to trigger the download
        link.click();

        // Remove the anchor element from the document body after the download is initiated
        document.body.removeChild(link);
    };
    return (
        <>
            {data.showCursor && <Cursor />}
            <div
                className={`container mx-auto mb-10 ${data.showCursor && 'cursor-none'
                    }`}
            >
                <Header isBlog />
                {mount && (
                    <div className="mt-10 w-full flex flex-col items-center">
                        <div
                            className={`w-full ${mount && theme.theme === 'dark'
                                ? 'bg-neutral-800'
                                : 'bg-gray-100'
                                } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
                        >
                            <h1 className="text-3xl font-bold">{data.name}</h1>
                            <h2 className="text-xl mt-5">
                                {data.resume.tagline}
                            </h2>
                            <h2 className="w-4/5 ml-2 text-xl mt-5 opacity-50">
                                {data.resume.description1}
                            </h2>
                            <h2 className="w-4/5 ml-2 text-xl mt-5 opacity-50">
                                {data.resume.description2}
                            </h2>
                            <div className="mt-2">
                                <Socials />
                            </div>
                            <div className="mt-5">
                                <h1 className="text-2xl font-bold">
                                    Education
                                </h1>
                                <div className="mt-2">
                                    <h2 className="text-lg">
                                        {data.resume.education.universityName}
                                    </h2>
                                    <h3 className="text-sm opacity-75">
                                        {data.resume.education.universityDate}
                                    </h3>
                                    <p className="text-sm mt-2 opacity-50">
                                        {data.resume.education.universityPara}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h1 className="text-2xl font-bold">Skills</h1>
                                <div className="flex mob:flex-col desktop:flex-row justify-between">
                                    {data.resume.languages && (
                                        <div className="mt-2 mob:mt-5">
                                            <h2 className="text-lg">
                                                Languages & Frameworks
                                            </h2>
                                            <ul className="list-disc">
                                                {data.resume.languages.map(
                                                    (language, index) => (
                                                        <li
                                                            key={index}
                                                            className="ml-5 py-2"
                                                        >
                                                            {language}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                    {data.resume.frameworks && (
                                        <div className="mt-2 mob:mt-5">
                                            <h2 className="text-lg">
                                                Languages & Frameworks
                                            </h2>
                                            <ul className="list-disc">
                                                {data.resume.frameworks.map(
                                                    (framework, index) => (
                                                        <li
                                                            key={index}
                                                            className="ml-5 py-2"
                                                        >
                                                            {framework}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                    {data.resume.others && (
                                        <div className="mt-2 mob:mt-5">
                                            <h2 className="text-lg">Others</h2>
                                            <ul className="list-disc">
                                                {data.resume.others.map(
                                                    (other, index) => (
                                                        <li
                                                            key={index}
                                                            className="ml-5 py-2"
                                                        >
                                                            {other}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-center mt-10">
                                    <button className="download-btn" onClick={downloadResume}>
                                        Download Resume
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Resume
