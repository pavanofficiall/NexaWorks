"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesGrid from "../components/custom/ServicesGrid";
import StickyCards from "../components/custom/StickyCards";
import { useRef, useEffect } from "react";
// import { useEffect } from 'react';
// import Lenis from '@studio-freight/lenis';
import { ChartSpline } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const processRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Pin the focus-sticky-parent section
    const trigger = document.getElementById("focus-sticky-parent");
    if (trigger) {
      ScrollTrigger.create({
        trigger,
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 1,
      });
    }
    if (!processRef.current) return;
    gsap.to(processRef.current, {
      transform: "translateX(-340%)",
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 27%",
        end: "top -1200%",
        scrub: 2,
        pin: true,
      },
      scrub: true,
    });
  }, []);
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     lerp: 0.1, // Adjust for smoothness
  //     // smooth: true,
  //   });

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);
  return (
    <>
      <div className=" min-h-screen bg-[#31312F]">
        <div className="hero ml-8 pt-20">
          <h1 className="text-[#F5F5F5] uppercase text-7xl font-thin">
            we just dont create software
          </h1>
          <h1 className="text-[#F5F5F5] uppercase text-7xl font-thin">
            we creates experiences
          </h1>
          <p className="text-[#F5F5F5] uppercase text-xl font-thin ml-2">
            have a idea lets build
          </p>
          <button className="mt-2.5 cursor-pointer text-[#F5F5F5] px-4 py-2 bg-transparent border border-white rounded-full hover:bg-[#F5F5F5] hover:text-[#31312F] transition">
            Lets Connect
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-[#f5f5f5]">
        <div className="pt-20 ml-8 mb-10">
          <h1 className="text-[#31312f] uppercase text-9xl font-thin">we provide</h1>
          <h1 className="text-[#31312f] uppercase text-9xl font-thin">solutions for</h1>
          <h1 className="text-[#C8C8C8] uppercase text-9xl font-thin">web development</h1>
        </div>
          <ServicesGrid/>
      </div>


      <div className="bg-[#f5f5f5]">
      <h1 className="text-[#31312F] text-center text-6xl py-4">Here&apos;s how we Work:</h1>
      <div id="page3" className="overflow-x-hidden min-h-scree bg-[#31312F] p-10">
        <p ref={processRef} className="text-nowrap text-[#f5f5f5] text-[200px]  uppercase font-thin ">Consultation → Plan & Budget → Team Setup → Timeline → Delivery</p>
      </div>
      </div>

<section className="min-h-screen bg-[#31312F] py-24 flex flex-col items-center justify-center">
  <h2 className="text-6xl text-[#F5F5F5] font-bold mb-10 text-center">
    Work Experience
  </h2>
  <p className="text-xl text-[#C8C8C8] max-w-2xl text-center mb-16 font-thin">
    We empower businesses to automate their processes, resulting in significant cost savings and improved profit margins. Here are some ways we've helped our clients transform their operations:
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-6">
    <div className="bg-[#222221] rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <span className="text-5xl mb-4">💼</span>
      <h3 className="text-2xl text-[#F5F5F5] font-semibold mb-2 text-center">Retail Automation</h3>
      <p className="text-[#C8C8C8] text-center font-thin">
        Automated inventory and billing systems for a retail chain, reducing manual errors by 80% and cutting operational costs by 30%.
      </p>
    </div>
    <div className="bg-[#222221] rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <span className="text-5xl mb-4">🏥</span>
      <h3 className="text-2xl text-[#F5F5F5] font-semibold mb-2 text-center">Healthcare Workflow</h3>
      <p className="text-[#C8C8C8] text-center font-thin">
        Built automated appointment and reporting tools for clinics, improving patient turnaround and boosting profit margins by 25%.
      </p>
    </div>
    <div className="bg-[#222221] rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <span className="text-5xl mb-4">🏭</span>
      <h3 className="text-2xl text-[#F5F5F5] font-semibold mb-2 text-center">Manufacturing Optimization</h3>
      <p className="text-[#C8C8C8] text-center font-thin">
        Deployed process automation for a factory, enabling real-time monitoring and reducing downtime, resulting in a 20% increase in profits.
      </p>
    </div>
  </div>
</section>
      {/* <div className="min-h-screen bg-[#31312f]">
        <div>
          <h1 className="text-[#f5f5f5] text-7xl font-thin  ">we are expert in this industries</h1>
        </div>
      </div> */}

      {/* <div id="string" className="w-full h-96 bg-red-100">
          <svg height='190' width='160'>
            <path d="M 10 80 Q 95 10 180 95" stroke="black" fill="transparent"/>
          </svg>
      </div> */}

      <div className="min-h-screen bg-[#4a4a4aff]">
          <h2 className="text-6xl text-[#F5F5F5] font-bold py-20 text-center">
    Our Core Expertise
  </h2>
  <div className="grid grid-cols-3 gap-4 px-10 bg-green-200">
        <div className="bg-red-200 h-[500px]"></div>
        <div className="bg-red-200 h-[500px]"></div>
        <div className="bg-red-200 h-[500px]"></div>
  </div>
      </div>

      {/* Pin both focus and StickyCards together */}
        <div id="focus" className="min-h-screen bg-[#31312f] text-[#f5f5f5] p-8">
          <div>
            <h1 className="text-5xl">We Foucus On Automation</h1>
            <div className=" w-full h-screen mt-4 gap-3 grid grid-cols-2">
              <div>
                <h1 className=" text-9xl h-screen">Why Automation?</h1>
              </div>
              
                <div
                  className="h-screen grid grid-cols-1 text-5xl gap-4 pb-20"
                  ref={el => {
                    if (!el) return;
                    const cards = el.querySelectorAll(".automation-card");
                    cards.forEach((card, i) => {
                      gsap.fromTo(
                        card,
                        { x: "100vw", opacity: 0 },
                        {
                          x: 0,
                          opacity: 1,
                          duration: 0.8,
                          delay: i * 0.15,
                          scrollTrigger: {
                            trigger: card,
                            markers:true,
                            // scrub:true,
                            start: "top 250%",
                            end: "top 250%",
                            toggleActions: "play reverse play reverse", // play on enter, reverse on leave, play on enter back, reverse on leave back
                          },
                        }
                      );
                    });
                  }}
                >
                  <div className="automation-card flex items-center bg-[#f5f5f5] text-[#31312f] rounded-xl shadow-lg p-6">
                    <ChartSpline className="w-16 h-16 mr-6 text-[#31312f]" />
                    <div>
                      <h2 className="text-4xl font-semibold">Reduce operational costs</h2>
                      <p className="text-lg mt-2 text-[#666]">Automation streamlines processes and minimizes expenses.</p>
                    </div>
                  </div>
                  <div className="automation-card flex items-center bg-[#f5f5f5] text-[#31312f] rounded-xl shadow-lg p-6">
                    <ChartSpline className="w-16 h-16 mr-6 text-[#31312f]" />
                    <div>
                      <h2 className="text-4xl font-semibold">Eliminate manual errors</h2>
                      <p className="text-lg mt-2 text-[#666]">Reduce mistakes and improve accuracy with automated workflows.</p>
                    </div>
                  </div>
                  <div className="automation-card flex items-center bg-[#f5f5f5] text-[#31312f] rounded-xl shadow-lg p-6">
                    <ChartSpline className="w-16 h-16 mr-6 text-[#31312f]" />
                    <div>
                      <h2 className="text-4xl font-semibold">Increase profit margins</h2>
                      <p className="text-lg mt-2 text-[#666]">Boost efficiency and maximize your business profitability.</p>
                    </div>
                  </div>
                  <div className="automation-card flex items-center bg-[#f5f5f5] text-[#31312f] rounded-xl shadow-lg p-6">
                    <ChartSpline className="w-16 h-16 mr-6 text-[#31312f]" />
                    <div>
                      <h2 className="text-4xl font-semibold">Real-time monitoring</h2>
                      <p className="text-lg mt-2 text-[#666]">Make better decisions with instant insights and analytics.</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="min-h-screen bg-[#E4E4E4] flex flex-col items-center justify-center py-24">
          <h1 className="text-6xl font-bold text-[#31312F] mb-8 uppercase tracking-wide">Contact Us</h1>
          <p className="text-xl text-[#31312F] mb-12 max-w-xl text-center font-thin">
            Ready to start your project or have questions? Let’s connect and build something amazing together.
          </p>
          <form className="w-full max-w-lg bg-[#f5f5f5] rounded-2xl shadow-xl p-10 flex flex-col gap-6">
            <div>
              <label className="block text-[#31312F] text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-[#C8C8C8] bg-[#E4E4E4] text-[#31312F] focus:outline-none focus:ring-2 focus:ring-[#31312F] transition"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-[#31312F] text-lg font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-[#C8C8C8] bg-[#E4E4E4] text-[#31312F] focus:outline-none focus:ring-2 focus:ring-[#31312F] transition"
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-[#31312F] text-lg font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-[#C8C8C8] bg-[#E4E4E4] text-[#31312F] focus:outline-none focus:ring-2 focus:ring-[#31312F] transition resize-none"
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-[#31312F] text-[#F5F5F5] px-8 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-[#4a4a4a] transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 text-[#31312F] text-lg font-thin">
            Or email us directly at <a href="mailto:hello@nexaworks.tech" className="underline hover:text-[#4a4a4a]">hello@nexaworks.tech</a>
          </div>
        </div>
    </>
  );
}
