import { useState, useEffect } from 'react'

import useActiveSection from './hooks/useActiveSection'

import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import About from './components/about/about'
import WhyUs from './components/whyUs/WhyUs'
import Courses from './components/courses/Courses'
import LearningPath from './components/learningPath/LearningPath'
import PlacementTest from './components/placementTest/PlacementTest'
import Teachers from './components/teachers/teachers'
import Testimonials from './components/testimonials/Testimonials'
import FAQ from './components/faq/FAQ'
import ContactCTA from './components/contactCTA/ContactCTA'
import Footer from './components/footer/footer'

import './App.css'


const name = {
    fa: {
        name: 'جزیره',
    },

    en: {
        name: 'Jazire',
    }
}


const texts = {
    fa: {
        home: 'خانه',
        about: 'درباره ما',
        whyUs: 'چرا ما؟',
        courses: 'دوره‌ها',
        learningPath: 'مسیر یادگیری',
        placementTest: 'تعیین سطح',
        teachers: 'اساتید',
        testimonials: 'نظرات',
        faq: 'سؤالات متداول',
        contact: 'تماس',
    },

    en: {
        home: 'Home',
        about: 'About',
        whyUs: 'Why Us',
        courses: 'Courses',
        learningPath: 'Learning Path',
        placementTest: 'Placement Test',
        teachers: 'Teachers',
        testimonials: 'Testimonials',
        faq: 'FAQ',
        contact: 'Contact',
    }
}


function App() {
    const activeSection = useActiveSection()

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'
    })

    const [lang, setLang] = useState(() => {
        return localStorage.getItem('lang') || 'fa'
    })


    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])


    useEffect(() => {
        document.documentElement.setAttribute(
            'dir',
            lang === 'fa' ? 'rtl' : 'ltr'
        )

        document.documentElement.setAttribute('lang', lang)

        document.title = name[lang].name

        localStorage.setItem('lang', lang)
    }, [lang])


    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }


    const toggleLang = () => {
        setLang(prev => prev === 'fa' ? 'en' : 'fa')
    }


    const routes = [
        {
            name: texts[lang].home,
            href: '#home'
        },
        {
            name: texts[lang].about,
            href: '#about'
        },
        {
            name: texts[lang].whyUs,
            href: '#why-us'
        },
        {
            name: texts[lang].courses,
            href: '#courses'
        },
        {
            name: texts[lang].learningPath,
            href: '#learning-path'
        },
        {
            name: texts[lang].placementTest,
            href: '#placement-test'
        },
        {
            name: texts[lang].teachers,
            href: '#teachers'
        },
        {
            name: texts[lang].testimonials,
            href: '#testimonials'
        },
        {
            name: texts[lang].faq,
            href: '#faq'
        },
        {
            name: texts[lang].contact,
            href: '#contact'
        },
    ]


    return (
        <>
            {/* Background colored lights */}
            <div className="bg-lights" aria-hidden="true">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>


            <Navbar
                theme={theme}
                toggleTheme={toggleTheme}
                lang={lang}
                toggleLang={toggleLang}
                site_name={name[lang].name}
                routes={routes}
                activeSection={activeSection}
            />


            <main>
                <Header
                    lang={lang}
                    site_name={name[lang].name}
                />

                <About
                    lang={lang}
                    site_name={name[lang].name}
                />

                <WhyUs
                    lang={lang}
                />

                <Courses
                    lang={lang}
                />

                <LearningPath
                    lang={lang}
                />

                <PlacementTest
                    lang={lang}
                />

                <Teachers
                    lang={lang}
                />

                <Testimonials
                    lang={lang}
                />

                <FAQ
                    lang={lang}
                />

                <ContactCTA
                    lang={lang}
                />
            </main>


            <Footer
                name={name[lang].name}
                lang={lang}
                routes={routes}
            />
        </>
    )
}


export default App