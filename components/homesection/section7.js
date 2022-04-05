/* eslint-disable @next/next/link-passhref */
import React from "react";
import Head from "next/head";
import * as style from "@/styles/homesection/section1.module.css";
import Link from "next/link";

export default function Section7() {
  return (
    <div className={style.main}>
      <div className={`${style.section}`}>
        <div className={`${style.mainBody}`}>
          <div className={`${style.bodyContent} `}>
            <div className={`${style.carouselContainer} `}>
              <h1 className={style.titleBody}>Global eBuddy Resources</h1>
              <p className={style.textBody}>
                Download the latest presentation to inform, educate, motivate
                and persuade audiences. Build an organization through sales,
                training and internal communication programs, words and
                presentation.
              </p>
            </div>

            <div className={style.buttonContainer}>
              <Link href="/info/resources">
                <div className={`${style.buttonBox}`}>
                  <h4 className={style.buttonFontSpecial}>Download Now </h4>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${style.bodyImage}`}>
            <img
              src="/Resource/mainpage2.png"
              alt="PHB"
              className={`${style.image} ${style.image1}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
