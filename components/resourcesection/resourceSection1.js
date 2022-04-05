/* eslint-disable @next/next/link-passhref */
import React from "react";
import Head from "next/head";
import * as style from "@/styles/resourcesection/resourcesection1.module.css";
import Link from "next/link";

export default function ResourceSection1() {
  return (
    <div className={style.main}>
      <div className={`${style.section}`}>
        <div className={style.mainBody}>
          <div className={style.bodyContent}>
            <h1 className={style.titleBody1}>Global eBuddy Resources</h1>
            <p className={style.textBody2}>
              Download the latest presentation to inform, educate, motivate and
              persuade audiences.
            </p>
            <p className={style.textBody2}>
              Build an organization through sales, training and internal
              communication programs, words and presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
