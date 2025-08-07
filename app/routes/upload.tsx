import type { i } from "node_modules/@react-router/dev/dist/routes-DHIOx0R9"
import { useState, type FormEvent } from "react"
import FileUploader from "~/components/FileUploader"
import Navbar from "~/components/Navbar"

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [statusText, setStatusText] = useState("")
    const [file, setFile] = useState<File | null>(null)

    const handleFileSelect = (file: File | null) => {
        setFile(file)

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
            <Navbar />

            <section className="main-section">

                <div className="page-heading py-16">
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
                        <form id="upload-form" onSubmit={handleSubmit}>
                            <div className="form-div">
                                <label htmlFor="company-name">
                                    Company Name
                                </label> <input type="text" name="company-name" placeholder="Company name" id="company-name" />
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
                                <textarea rows={5} name="Job Description" placeholder="Job Description" id="job-description" />
                            </div>

                            <div className="form-div">
                                <label htmlFor="uploader">
                                    Upload Your Resume
                                </label>
                                <FileUploader onFileSelect={handleFileSelect} />
                            </div>

                            <button className="primary-button" type="submit">Analyze Resume</button>


                        </form>
                    )}
                </div>

            </section>

        </main>
    )
}

export default Upload
