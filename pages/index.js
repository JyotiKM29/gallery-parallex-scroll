"use client";
import Image from "next/image";
import styles from "../styles/pages.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import useDeminsion from "./useDeminsion";
import Link from "next/link";

const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
];

export default function Home() {
  const container = useRef(null);
  const { height } = useDeminsion();
  const { scrollYProgress } = useScroll({
    target: container,

    // When will Start Scrolling and When will Stop [conatiner , screen]
    offset: ["start end", " end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.spacer}>
          <h1>
            <span style={{color:'orange'}}>THE </span>
            <span style={{color:'navy'}}>INDIA </span>
            <span style={{color:'green'}}>GATE </span>
          </h1>
          <p>&quot;India Gate is a symbol of unity and diversity, reminding us that we are one nation, one people, and one family.&quot;</p>
        </div>
        <div ref={container} className={styles.gallery}>
          <Column images={images.slice(0, 3)} y={y} />
          <Column images={images.slice(3, 6)} y={y2} />
          <Column images={images.slice(6, 9)} y={y3} />
          <Column images={images.slice(9, 12)} y={y4} />
        </div>
        <div className={styles.spacer}>
          <h1>END</h1>
          <p>👩🏻‍💻 <Link href='https://jyoti-km.vercel.app/'> Jyoti Km</Link></p>
        </div>
      </main>
    </>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/images/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
