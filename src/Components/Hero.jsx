import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingText = () => {
  const el = useRef(null);
  const smallText = useRef(null);

  useEffect(() => {
    if (!el.current || !smallText.current) return;

    // Большой заголовок
    const typed = new Typed(el.current, {
      strings: [
        `<span class="text-white">B</span><span class="bg-gradient-to-r from-[#004D57] to-[#00e1ff] bg-clip-text text-transparent">IRLASH</span>`
      ],
      typeSpeed: 100,
      backSpeed: 0,
      startDelay: 200,
      loop: false,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: false,
      html: true, // обязательно true для HTML внутри строки
    });

    // Меньший текст под заголовком
    const typedSmall = new Typed(smallText.current, {
      strings: [
        `BIRLASH — o‘sish, hamkorlik va sarmoyaning yangi ekotizimi.
Biz tadbirkorlar uchun to‘liq rivojlanish makonini yaratamiz: bilim, amaliyot, sarmoya va xalqaro hamkorlikni birlashtiramiz. BIRLASH — bu odamlar, g‘oyalar va imkoniyatlar uchrashadigan markaz.`,
        `Bizning missiyamiz — tadbirkorlar, hamkorlik, sarmoya va ekotizim atrofida birlashgan kuchli biznes hamjamiyatni yaratish.
BIRLASH — sizga aniq tizim, real amaliyot va global bozorlar eshigini ochadigan platforma.`,
        `BIRLASH — o‘sish, hamkorlik va sarmoyaning yangi formati.`
      ],
      typeSpeed: 30,
      backSpeed: 25,
      startDelay: 800,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: false,
      html: false,
    });

    return () => {
      typed.destroy();
      typedSmall.destroy();
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center my-40">
      <h1 className="font-bold text-[100px] text-center">
        <span ref={el}></span>
      </h1>

      <p className="text-white text-center mt-6 text-[20px] leading-relaxed w-[60%] mx-auto font-sans font-light">
        <span ref={smallText}></span>
      </p>
    </div>
  );
};

export default TypingText;
