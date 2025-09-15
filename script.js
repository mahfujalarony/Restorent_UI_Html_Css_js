import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm"

    inView(".scroll-section", (element) => {
        animate(
            element,
            { opacity: 1, x: [-100, 0] },
            {
                duration: 0.9,
                easing: [0.17, 0.55, 0.55, 1],
            }
        )

        return () => animate(element, { opacity: 0, x: -100 })
    })


    inView(".scroll-section-right", (element) => {
        animate(
            element,
            { opacity: 1, x: [100, 0] },
            {
                duration: 0.9,
                easing: [0.17, 0.55, 0.55, 1],
            }
        )

        return () => animate(element, { opacity: 0, x: 100 })
    })



    const menuIcon = document.querySelector('.menu_icon');
    const closeIcon = document.querySelector('.close_icon');
    const mobileSidebar = document.querySelector('.mobile_sidebar');
    const mobileLinks = document.querySelectorAll('.mobile_sidebar .sidebar_links a');

    menuIcon.addEventListener('click', () => {
        mobileSidebar.classList.add('active');
    });

    closeIcon.addEventListener('click', () => {
        mobileSidebar.classList.remove('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileSidebar.classList.remove('active');
        });
    });