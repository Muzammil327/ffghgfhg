import React from "react";
import { Metadata } from "next";

import Card3 from "@/src/components/card2/card3";
import ImageContainer from "@/src/components/element/image";
import BookWrapper from "@/src/app/books/BookWrapper";
import PDFViewer from "@/src/components/element/PDFViewer";
import Card2 from "@/src/components/card2/page";

import { class_Book } from "@/src/app/books/type";
import { Class10_Book } from "@/src/app/books/class-10/data";

const data = {
  title: "Class 10 Pak Study Book Punjab Board",
  description:
    "Here you can download Class 10 Pak Study Book Punjab Board in english and urdu medium. other books of class 10 punjab board available in this platform.",
  canonical: "/books/class-10/punjab-board-pak-study/",
  index: true,
  follow: true,
  image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
  url: "https://growlearnhub.com/books/class-10/punjab-board-pak-study/",
  english_medium: "1OxabDGzPSag12NTwLY_daJIBcvrsXF8C",
  urdu_medium: "1jTA5Hx25Lw3MGQMWjKBArN-Ju5y5IxOc",
  keywords: [
    "growlearnhub class 10 Pak Study books",
    "growlearnhub class 10 books Pak Study",
    "class 10 Pak Study",
    "class 10 Pak Study english medium",
    "class 10 Pak Study urdu medium",
    "class 10 Pak Study book",
    "class 10 book Pak Study",
    "download class 10 book Pak Study",
  ],
  medium: [
    {
      title: "Class 10 Pak Study Punjab Board English Medium Book",
      link: "/books/class-10/punjab-board-pak-study/english/",
      description: "",
      image: "",
    },
    {
      title: "Class 10 Pak Study Punjab Board Urdu Medium Book",
      link: "/books/class-10/punjab-board-pak-study/urdu/",
      description: "",
      image: "",
    },
  ],
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Books"
      b1Link="/books/"
      b2="Class 10"
      b2Link="/books/class-10/"
      b3="Punjab Board Pak Study"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>

      <ImageContainer
        image={data.image}
        title={data.title}
        class="my-4"
        height={720}
        width={1280}
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
      <h2>Download Class 10 English Medium Pak Study Punjab Board</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
      <PDFViewer pdfUrl={data.english_medium} />

      <h3>Download Class 10 Urdu Medium Pak Study Punjab Board</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
      <PDFViewer pdfUrl={data.urdu_medium} />

      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {data.medium.map((data: any) => {
          return <Card2 key={data.title} title={data.title} link={data.link} />;
        })}
      </div>
      {Class10_Book.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h3 className="text-xl font-semibold py-2">
              {data.name} Class 10 Books
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
              aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
              recusandae, quas sapiente commodi eius repellat.
            </p>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
              {data.list.map((item: any) => (
                <Card3 key={item.id} title={item.title} link={item.link} />
              ))}
            </div>
          </div>
        );
      })}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
    </BookWrapper>
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
