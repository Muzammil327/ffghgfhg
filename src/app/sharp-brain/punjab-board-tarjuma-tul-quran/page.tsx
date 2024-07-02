import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'
import BookWrapper from '@/src/app/books/BookWrapper'
import PDFViewer from '@/src/components/element/PDFViewer'

import { class_Book } from '@/src/app/books/type'
import { Class9_Book } from '@/src/app/(class)/class-9/books/data'

const data = {
  title: 'Class 9 Tarjuma Tul Quran Book Punjab Board',
  description:
    'Here you can access class 9 Tarjuma Tul Quran Book Punjab Board in urdu medium available in this website.',
  canonical: '/books/class-9/punjab-board-tarjuma-tul-quran/',
  index: true,
  follow: true,
  image: '/9th/book/biology/Download-Punjab-Board-Biology-Book.webp',
  url: 'https://growlearnhub.com/books/class-9/punjab-board-tarjuma-tul-quran/',
  urdu_medium: '1qKP8ytj1ahOqFTE-y9oul_nFytNWtd6F',
  keywords: [
    'Tarjuma Tul Quran class 9',
    'class 9 Tarjuma Tul Quran book',
    '9 class book Tarjuma Tul Quran',
    'class 9th Tarjuma Tul Quran book pdf',
    'class 9 Tarjuma Tul Quran pdf',
    'class nine Tarjuma Tul Quran book',
    '9th class Tarjuma Tul Quran book pdf',
  ],
}

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Class 9"
      b1Link="/class-9/"
      b2="Books"
      b2Link="/class-9/books/"
      b3="Punjab Board Tarjuma Tul Quran"
    >
      <p>
        Are you looking for a{' '}
        <strong>Class 9 Tarjuma Tul Quran book punjab board</strong>? Here, you
        can access all the books you need for free. Our website offers a
        complete collection of books for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <p>
        Welcome to our Educational Hub, an innovative platform designed for high
        school student in Class 9 to 12, Chartered Accountancy (CA), and Virtual
        University learners to fulfil academic needs. Our mission is to provide
        a one-stop solution for all your educational requirements, empowering
        you to achieve excellence in your studies and professional goals.
      </p>
      <ImageContainer
        image={data.image}
        title="Access Class 9 Tarjuma Tul Quran Book of Urdu Medium"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />

      <h2>Download 9th Class Tarjuma Tul Quran Textbook Punjab Board</h2>
      <p>
        Here, you can download Matric class 9 Tarjuma Tul Quran Text Book in PDF
        Format for Urdu Medium. This book is officially published by Punjab Text
        Book Board.
      </p>
      <PDFViewer pdfUrl={data.urdu_medium} />
      {Class9_Book.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h3 className="text-xl font-semibold py-2">
              {data.name} Class 9 Books
            </h3>
            <p>
              Our collection of <strong>Class 9 Textbooks</strong> of Punjab
              Baord encompasses all subjects included Physics, Biology,
              Chemistry, Math, English, Urdu, Pak Study, Islamiat, General Math,
              Computer Science, Economics, Tarjuma Tul Quran, Ikhlaqiat,
              ensuring you have the resources you need to succeed.
            </p>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
              {data.list.map((item: any) => (
                <Card3 key={item.id} title={item.title} link={item.link} />
              ))}
            </div>
          </div>
        )
      })}
    </BookWrapper>
  )
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
        url: 'https://nextjs.org/og.png',
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
      url: 'https://nextjs.org/og.png',
      alt: data.title,
    },
  },
}