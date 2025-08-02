import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Resumeasy" },
        { name: "description", content: "Feedback you need!" },
    ];
}

export default function Home() {
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
            <section className="main-section">
                <div className="page-heading">
                    <h1>Track your Resume ratings and Applications</h1>
                    <h2>Review your submissions and get private AI powered feedback</h2>
                </div>
                {resumes.length > 0 && (
                    <div className="resumes-section">
                        {resumes.map((resume: any) => (
                            <ResumeCard key={resume.id} resume={resume} />
                        ))}

                    </div>
                )}
            </section>

        </main>
    );
}
