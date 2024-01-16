"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { paragraphFont, titleFont } from "./utils/fonts.js";

/*Image component import*/
import all1 from "../public/images/elvira_01.jpg";
import all2 from "../public/images/elvira_02.jpg";
import all3 from "../public/images/elvira_03.jpg";
import all4 from "../public/images/elvira_04.jpg";
import all5 from "../public/images/elvira_05.jpg";
import all6 from "../public/images/elvira_06.jpg";
import all7 from "../public/images/elvira_07.jpg";
import all8 from "../public/images/elvira_08.jpg";
import all9 from "../public/images/elvira_09.jpg";
import all10 from "../public/images/elvira_10.jpg";

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "people",
    display: "People",
  },

  {
    key: "events",
    display: "Events",
  },
  {
    key: "videos",
    display: "Videos",
  },

  {
    key: "about me",
    display: "About",
  },
];

const images = [all1, all2, all3, all4, all5, all6, all7, all8, all9, all10];

export default function Home() {
  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>Katerina Ernst Filmmaker Photographer</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" flex fixed w-full top-0 z-10 justify-between items-center h-[90px] px-20">
        <div className="contents-center font-body text-1xl">Katerina Ernst</div>
        <Link
          href="mailto:vocalaboca@gmail.com"
          className={`rounded-3xl bg-white text-stone-800 px-4 py-3 hover:bg-opacity-90 ${paragraphFont.className}`}
        >
          Get in touch
        </Link>
      </header>
      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2 uppercase">
                  {({ selected }) => (
                    <span
                      className={selected ? "text-white" : "text-stone-600"}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full w-full max-w-[1200px] p-2 sm:p-4 my-8 bg-opacity-30 content-center">
              <Tab.Panel>
                <Masonry
                  breakpointCols={2}
                  className="flex gap-4"
                  columnClassName=""
                >
                  {images.map((image) => (
                    <Image
                      key={image.src}
                      src={image}
                      className="my-4"
                      alt="elvira_01"
                      placeholder="blur"
                    />
                  ))}
                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Portraits</Tab.Panel>
              <Tab.Panel>Events</Tab.Panel>
              <Tab.Panel>Videos</Tab.Panel>
              <Tab.Panel className=" flex justify-center">
                <div className="w-[600px]">
                  <p className={`my-4 ${paragraphFont.className}`}>
                    Newton was born in Berlin, the son of Klara Claire (née
                    Marquis) and Max Neustädter, a button factory owner. His
                    family was Jewish. Newton attended the
                    Heinrich-von-Treitschke-Realgymnasium and the American
                    School in Berlin. Interested in photography from the age of
                    12 when he purchased his first camera, he worked for the
                    German photographer Yva from 1936. The increasingly
                    oppressive restrictions placed on Jews by the Nuremberg laws
                    meant that his father lost control of the factory in which
                    he manufactured buttons and buckles; he was briefly interned
                    in a concentration camp on Kristallnacht, 9 November 1938,
                    which finally compelled the family to leave Germany. Newtons
                    parents fled to Argentina. Newton was issued with a passport
                    just after turning 18 and left Germany on 5 December 1938.
                    At Trieste, he boarded the Conte Rosso (along with about 200
                    others escaping the Nazis), intending to journey to China.
                    After arriving in Singapore, Newton found he was able to
                    remain there, first briefly as a photographer for the
                    Straits Times and then as a portrait photographer.
                  </p>

                  <p className={` my-4 ${paragraphFont.className}`}>
                    Newton and his wife finally settled in Paris in 1961 and the
                    work continued as a fashion photographer. His images
                    appeared in magazines including the French edition of Vogue
                    and Harpers Bazaar. He established a particular style marked
                    by erotic, stylised scenes, often with sado-masochistic and
                    fetishistic subtexts. A heart attack in 1970 reduced Newtons
                    output, nevertheless his wifes encouragement led to his
                    profile continuing to expand, especially with a big success,
                    the 1980 studio-bound stark infinity of the "Big Nudes"
                    series. His "Naked and Dressed" portfolio followed and in
                    1992 "Domestic Nudes" which marked the pinnacle of his
                    erotic-urban style, these series all underpinned with the
                    prowess of his technical skills. Newton also worked in
                    portraiture and more fantastical studies. Newton shot a
                    number of pictorials for Playboy, including pictorials of
                    Nastassja Kinski and Kristine DeBell. Original prints of the
                    photographs from his August 1976 pictorial of DeBell, "200
                    Motels, or How I Spent My Summer Vacation" were sold at
                    auctions of Playboy archives by Bonhams in 2002 for $21,075,
                    and by Christies in December 2003 for $26,290. "Three Boys
                    from Pasadena" In 2009, June Browne conceptualised a tribute
                    exhibition to Newton, based on three photographers that
                    befriended Newton in Los Angeles in 1980: Mark Arbeit, Just
                    Loomis, and George Holz. All three had been photography
                    students at The Art Center College of Design in Pasadena,
                    California.
                  </p>
                  <p className={` my-4 ${paragraphFont.className}`}>
                    All three became friends with Helmut and June Newton and to
                    varying degrees assisted Helmut Newton. Each went on to
                    independent careers. The exhibit premiered at the Helmut
                    Newton Foundation in Berlin and combined the work of all
                    three with personal snapshots, contact sheets, and letters
                    from their time with Newton. Polaroids Since the 1970s
                    Newton regularly used Polaroid cameras and film for instant
                    visualisation of compositions and lighting situations,
                    especially for his fashion photography. By his own
                    admission, for the shoot of Naked and Dressed series that
                    started in 1981 for the Italian and French Vogue he used
                    Polaroid film “by the crate”. These polaroids also served as
                    a sketchbook, where he scribbled notes with regard to the
                    model, client or location and date. In 1992, Newton
                    published Pola Woman, a book consisting only of his
                    Polaroids. Over 300 works based on the original Polaroids
                    were shown at 2011 exhibition “Helmut Newton Polaroids” at
                    the Museum für Fotografie in Berlin.
                  </p>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center text-stone-600">
        <p className={paragraphFont.className}>Katerina Ernst © 2012 — 2024</p>
      </footer>
    </div>
  );
}
