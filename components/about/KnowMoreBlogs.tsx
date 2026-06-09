"use client";

import FAQ from "../reusable/FAQ";

const faqData = [
    {
        question:
            "What does Doss Realty specialize in?",
        answer:
            "We specialize in premium residential and commercial developments designed with modern architecture, functionality, and long-term value.",
    },
    {
        question:
            "Why choose Doss Realty?",
        answer:
            "We focus on quality craftsmanship, strategic planning, and customer satisfaction to create spaces that inspire better living.",
    },
    {
        question:
            "Do you assist with property investments?",
        answer:
            "Yes, we help clients identify investment opportunities aligned with long-term growth and value.",
    },
    {
        question:
            "How does your project process work?",
        answer:
            "Our process includes planning, consultation, design, execution, and seamless project delivery with continuous client support.",
    },
];

const KnowMoreBlogs = () => {
    return (
        <>
            <FAQ
                faqData={faqData}
                heading={`Know more \n about Blogs`}
                description="Insights, ideas, and stories crafted to inspire, inform, and spark new perspectives."
                buttonText="Contact Us"
                defaultOpenIndex={1}
            />
        </>
    );
};
export default KnowMoreBlogs;