/* =========================================================
   PORTFÓLIO — JOÃO VITOR
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ANIMAÇÃO DOS ELEMENTOS AO ENTRAREM NA TELA
    ===================================================== */

    const elements = document.querySelectorAll(
        ".section-header, .about-content, .skill-category, .project, .timeline-item, .contact-content"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });


    /* =====================================================
       HEADER — ALTERAR APARÊNCIA AO ROLAR
    ===================================================== */

    const header = document.querySelector(".header");

    function updateHeader() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       LINKS DE NAVEGAÇÃO
    ===================================================== */

    const navLinks = document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       EFEITO DE DIGITAÇÃO
    ===================================================== */

    const terminalResults = document.querySelectorAll(
        ".terminal-result"
    );

    terminalResults.forEach((element, index) => {

        const originalText = element.textContent.trim();

        element.textContent = "";

        setTimeout(() => {

            let character = 0;

            const typing = setInterval(() => {

                element.textContent += originalText[character];

                character++;

                if (character >= originalText.length) {
                    clearInterval(typing);
                }

            }, 35);

        }, 500 + (index * 900));

    });


    /* =====================================================
       EFEITO PARALLAX NO ELEMENTO DO HERO
    ===================================================== */

    const heroDecoration = document.querySelector(
        ".hero-decoration"
    );

    window.addEventListener("mousemove", (event) => {

        if (!heroDecoration) return;

        const x = (window.innerWidth / 2 - event.clientX) / 80;
        const y = (window.innerHeight / 2 - event.clientY) / 80;

        heroDecoration.style.transform =
            `translate(${x}px, ${y}px)`;

    });


    /* =====================================================
       ANO AUTOMÁTICO DO FOOTER
    ===================================================== */

    const footer = document.querySelector(".footer");

    if (footer) {

        const paragraphs = footer.querySelectorAll("p");

        if (paragraphs.length > 0) {

            paragraphs[0].textContent =
                `© ${new Date().getFullYear()} João Vitor Machado de Oliveira`;

        }

    }


    /* =====================================================
       INDICADOR DA SEÇÃO ATUAL
    ===================================================== */

    const sections = document.querySelectorAll("main section");

    const navigationLinks = document.querySelectorAll(
        ".nav-links a"
    );

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const id = entry.target.getAttribute("id");

                    navigationLinks.forEach((link) => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") === `#${id}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });


    /* =====================================================
       CONSOLE — PEQUENO EASTER EGG
    ===================================================== */

    console.log(
        "%c João Vitor — Portfolio ",
        "color:#00e5ff;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%c Systems • IoT • Cybersecurity ",
        "color:#94a3b8;font-size:12px;"
    );

});
