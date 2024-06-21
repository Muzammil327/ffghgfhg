import React from 'react'
import Container from '@/src/components/element/container'
import Sidebar from '@/src/components/element/sidebar'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Form from '@/src/components/element/form/page'
import BreadCrumb from '@/src/components/element/breadcrumb'
import Footer from '@/src/components/layout/footer/page'
import Navbar from '@/src/components/layout/navbar/page'
import './style.scss'
import ImageContainer from '@/src/components/element/image'
import Link from 'next/link'

export default function BookWrapper(data: {
  title: string
  clist?: any
  title1?: string
  image?: string | undefined
  url: string
  link1?: string
  children: React.ReactNode
  b1: string
  b1Link?: string
  b2?: string
  b2Link?: string
  b3?: string
  b3Link?: string
  b4?: string
}) {
  return (
    <>
      {' '}
      <Navbar />
      <main>
        <SubHeader title={data.title} />
        <Container>
          <div className="book">
            <div className="c1">
              <BreadCrumb
                b1={data.b1}
                b2={data.b2}
                b3={data.b3}
                b4={data.b4}
                b1Link={data.b1Link}
                b2Link={data.b2Link}
                b3Link={data.b3Link}
              />
              <p>
                Welcome to our Educational Hub, an innovative platform designed
                for high school student in Class 9 to 12, Chartered Accountancy
                (CA), and Virtual University learners to fulfil academic needs.
                Our mission is to provide a one-stop solution for all your
                educational requirements, empowering you to achieve excellence
                in your studies and professional goals.
              </p>
              {/* <h2>What We Offer:</h2>
              <ul>
                <li>Free Textbooks</li>
                <li>Subject Notes</li>
                <li>Pairing Schemes</li>
                <li>Online MCQ Tests</li>
                <li>Quiz</li>
                <li>Past Papers</li>
              </ul> */}
              {data.image && (
                <ImageContainer
                  image={`${data.image}`}
                  title={data.title}
                  class="my-4"
                  height={720}
                  width={1280}
                  priority
                />
              )}
              {data.children}
              {/* <div>
                <h2>Additional Resources Class 9</h2>
                <ul>
                  <li>
                    <strong className="md:pr-2">Class 9 Subject Notes:</strong>{' '}
                    Detailed notes for each subject to help you grasp and review
                    important concepts.
                  </li>
                  <li>
                    <strong className="md:pr-2">
                      9th Class Pairing Schemes:
                    </strong>{' '}
                    Guides to help you focus on the most crucial topics for your
                    exams.
                  </li>
                  <li>
                    <strong className="md:pr-2">
                      Class 9 Online MCQ Tests:
                    </strong>{' '}
                    Practice tests to assess your knowledge and improve your
                    readiness for the exams.
                  </li>
                </ul>
              </div> */}
              <p>
                You can give your opinion or any question you have to ask below
                in the comment section area.
              </p>
              <Form url={data.url} />
            </div>
            <div className="c2">
              {data.clist && (
                <Sidebar title={data.title} url={data.url} list={data.clist} />
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
