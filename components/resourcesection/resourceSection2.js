/* eslint-disable @next/next/link-passhref */
import React from "react";
import Head from "next/head";
import * as style from "@/styles/resourcesection/resourcesection2.module.css";
import Link from "next/link";

export default function ResourceSection() {
  return (
    <div className={style.main}>
      <div className={`${style.section}`}>
        <div className={`${style.mainBody}`}>
          <div className={`${style.image}`}>
            <img
              src="/Resource/resourcefile.png"
              alt="global"
              className={`${style.image} `}
            />
          </div>
          <a href="/Files/WEB PPT.pptx">
            <div className={`${style.buttonBox} `}>
              <h6 className={style.button}>Download Powerpoint</h6>
            </div>
          </a>
        </div>

        <div className={`${style.mainBody}`}>
          <div className={`${style.bodyImage}`}>
            <img
              src="/Resource/resourcefile.png"
              alt="global"
              className={`${style.image} `}
            />
          </div>
          <Link href="/Files/WEB PDF.pdf">
            <div className={`${style.buttonBox} `}>
              <h6 className={style.button}>Download PDF File</h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
