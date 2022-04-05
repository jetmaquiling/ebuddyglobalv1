/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import style from "../home.module.css";
import Footer1 from "@/components/footer/footer";
import Youtube from "@/components/caveat/youtube";
import HeadV2 from "@/components/head/headv2";
import ResourceSection1 from "@/components/resourcesection/resourceSection1";
import ResourceSection2 from "@/components/resourcesection/resourceSection2";

export default function AboutUs() {
  const [openVideo, setOpenVideo] = useState({ url: "none", open: false });

  return (
    <div className={style.main}>
      <Head>
        <title>Global eBuddy - Global eBuddy Resources</title>
        <meta
          name="description"
          content="Comfortable Life For All! Earn While Spending"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Global eBuddy - Resouces" />
        <meta property="og:image" content="./Thumbnail/ebuddy.png" />
      </Head>
      <Youtube openVideo={openVideo} setOpenVideo={setOpenVideo} />
      <HeadV2 />
      <ResourceSection1 />
      <ResourceSection2 />

      <Footer1 />
    </div>
  );
}
