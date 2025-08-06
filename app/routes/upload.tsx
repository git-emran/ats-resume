import { useState } from "react"
import Navbar from "~/components/Navbar"

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [statusText, setStatusText] = useState("")
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />

            <section className="main-section">

                <div>
                    <h1>
                        Smart Feedback for your Dream job
                    </h1>
                    {isProcessing ? (
                        <>
                            <h2>
                                {statusText}
                            </h2>
                            <img src="/images/resume-scan.gif" className="w-full" />
                        </>
                    ) : (
                        <h2>
                            Drop your resume for an ATS score and improvement tips.
                        </h2>
                    )}
                    {!isProcessing && (
                        <form>
                            <div className="form-div">
                                <label htmlFor="company-name">
                                    Company Name
                                </label>
                                <input type="text" name="company-name" placeholder="Company name" id="company-name" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="Job Title">
                                    Job Title
                                </label>
                                <input type="text" name="Job Title" placeholder="Job Title" id="job-title" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="Job Description">
                                    Job Description
                                </label>
                                <input type="text" name="Job Description" placeholder="Job Description" id="job-description" />
                            </div>

                        </form>
                    )}
                </div>

            </section>

        </main>
    )
}

export default Upload
