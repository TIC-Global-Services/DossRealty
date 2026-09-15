"use client";

import FAQ from "../reusable/FAQ";

const faqData = [
    {
        question:
            "What informs the DOSS point of view?",
        answer:
            "Our perspective is shaped by more than three decades in real estate, supported by market research, development experience, and close observation of how cities evolve.",
    },
    {
        question:
            "What subjects does DOSS explore?",
        answer:
            "Markets, infrastructure, design, investment, and the decisions that shape enduring real estate value.",
    },
    {
        question:
            "Does DOSS publish guidance for buyers and NRIs?",
        answer:
            "Yes. Selected articles cover ownership, due diligence, financing, and the buying process with clarity.",
    },
    {
        question:
            "How often is the journal updated?",
        answer:
            "New perspectives are added as markets, projects, and ideas evolve.",
    },
];

const KnowMoreBlogs = () => {
    return (
        <>
            <FAQ
                faqData={faqData}
                heading={
                    <>
                        <span className="hidden md:block">
                            Know more
                            <br />
                            about Blogs
                        </span>

                        <span className="block md:hidden">
                            Know more about Blogs
                        </span>
                    </>
                }
                description="Insights, ideas, and stories crafted to inspire, inform, and spark new perspectives."
                buttonText="Contact Us"
                defaultOpenIndex={0}
            />
        </>
    );
};
export default KnowMoreBlogs;
