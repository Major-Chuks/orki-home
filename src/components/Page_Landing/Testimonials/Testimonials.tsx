import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Testimonials.module.css";
import SwipeArrowLeft from "@/assets/Components/SwipeArrowLeft";
import SwipeArrowRight from "@/assets/Components/SwipeArrowRight";
import logo1 from "@/assets/landing-page/testi-icon1.svg";
import logo2 from "@/assets/landing-page/testi-icon2.svg";
import logo3 from "@/assets/landing-page/testi-icon3.svg";
import avatar from "@/assets/landing-page/testi-avatar1.svg";
import Image from "next/image";
import FadeIn from "../Animations/FadeIn";

const TESTIMONIALS = [
  {
    avatar,
    company: "ORBIT",
    logo: logo1,
    quote:
      "Orki has streamlined how we run global payment operations. It's made our cashflow faster and our finance ops significantly more efficient.",
    name: "Marwane B.",
    role: "Head of Finance",
  },
  {
    avatar,
    company: "Luna Inc.",
    logo: logo2,
    quote:
      "Orki completely changed how we handle payments. We went from dealing with delays and multiple platforms to managing everything—crypto and fiat—in one place. The speed and simplicity are unmatched.",
    name: "Sophia Martinez",
    role: "Founder, Luna inc",
  },
  {
    avatar,
    company: "FlynPol",
    logo: logo3,
    quote:
      "What stood out for us is the transparency. No hidden fees, clear breakdowns, and instant visibility into every transaction. It’s made our operations significantly more efficient.",
    name: "Liam Chen",
    role: "Founder, FlynPol",
  },
];

function Testimonials() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const goPrev = () => swiper?.slidePrev();
  const goNext = () => swiper?.slideNext();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingText}>
          <FadeIn delay={0.1}>
            <h2 className={styles.heading}>
              Powered by Global Payment Leaders.
            </h2>
            <p className={styles.subheading}>
              We leverage USDC to move money globally, instantly.
            </p>
          </FadeIn>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={32}
          onSwiper={setSwiper}
          className={styles.cards}
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.name} style={{ width: "auto" }}>
              <article className={styles.card}>
                <div>
                  <div className={styles.companyRow}>
                    <div className={styles.companyMark}>
                      <Image src={item.logo} alt={item.company} />
                    </div>
                    <span className={styles.companyName}>{item.company}</span>
                  </div>

                  <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                </div>

                <div className={styles.person}>
                  <div className={styles.avatar}>
                    <Image src={item.avatar} alt={item.name} />
                  </div>
                  <div className={styles.details}>
                    <span className={styles.personName}>{item.name}</span>
                    <span className={styles.personRole}>{item.role}</span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrowButton}
            aria-label="Previous"
            onClick={goPrev}
          >
            <SwipeArrowLeft />
          </button>
          <button
            type="button"
            className={styles.arrowButton}
            aria-label="Next"
            onClick={goNext}
          >
            <SwipeArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
