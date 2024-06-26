import React from "react";
import { Metadata } from "next";

import Card2 from "@/src/components/card2/page";
import QuizWrapper from "@/src/app/(quiz)/quiz/QuizWrapper";

import { Books } from "@/src/app/books/type";
import Accordation from "@/src/components/element/accordion";

const data = {
  title: "Class 9 Quiz",
  description:
    "Here you download quiz of class 9 to 12 quiz in english medium and virtual university quiz of all semester available in this platform.",
  canonical: "/quiz/",
  index: true,
  follow: true,
  image: "/quiz/quiz_growlearnhub.webp",
  url: "https://growlearnhub.com/quiz/",
  keywords: [
    "growlearnhub quiz",
    "quiz",
    "class 9 quiz",
    "class 10 quiz",
    "class 11 quiz",
    "class 12 quiz",
    "vu quiz",
  ],
  BookDatas: [
    {
      id: 0,
      title: "Class 9 Biology Quiz",
      link: "/quiz/class-9/biology/",
      para: "Here you can download the class 9 all quiz of different boards.",
      image: "/sharp-brain/biology_sharp_brain.webp",
    },
    {
      id: 1,
      title: "Class 9 Physics Quiz",
      link: "/quiz/class-10/",
      para: "Here you can download the class 10 all quiz of different boards.",
      image: "/sharp-brain/physics_sharp_brain.webp",
    },
    {
      id: 2,
      title: "Class 11 Quiz",
      link: "/quiz/class-11/",
      para: "Here you can download the class 11 all quiz of different boards.",
      image: "/quiz/class_11_quiz.webp",
    },
    {
      id: 3,
      title: "Class 12 Quiz",
      link: "/quiz/class-12/",
      para: "Here you can download the class 12 all quiz of different boards.",
      image: "/quiz/class_12_quiz.webp",
    },
  ],
  link1: "/",
};

export default function page() {
  return (
    <QuizWrapper
      title={data.title}
      url={data.url}
      b1="Quiz"
      title1="Quiz"
      image={data.image}
      link1={data.link1}
    >
      <h2>📚 Quiz Store</h2>
      <p>You can download punjab and sindh board of all quiz.</p>
      <ul>
        <li>Physics Quiz</li>
        <li>Chemistry Quiz</li>
        <li>Biology Quiz</li>
        <li>Math Quiz</li>
      </ul>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {data.BookDatas.map((data: Books) => (
          <Card2
            key={data.id}
            title={data.title}
            link={data.link}
            para={data.para}
            image={data.image}
          />
        ))}
      </div>

      <h2>Class 9 to 12</h2>
      <Accordation
        data={[
          {
            title: "Comprehensive Study Materials",
            para: "Detailed notes, summaries, and explanations for every chapter.",
          },
          {
            title: "Practice Papers and Quizzes",
            para: "Regular practice tests to evaluate your understanding and track your progress.",
          },
          {
            title: "Subject-Specific Resources",
            para: "In-depth study materials for Physics, Chemistry, Biology, Mathematics, and Commerce.",
          },
          {
            title: "Exam Preparation Guides",
            para: "Strategies and tips for excelling in board exams and entrance tests like JEE, NEET, and SAT.",
          },
        ]}
      />
    </QuizWrapper>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: "https://nextjs.org/og.png",
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: "https://nextjs.org/og.png",
      alt: data.title,
    },
  },
};
