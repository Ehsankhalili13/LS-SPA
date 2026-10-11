import { useEffect, useState } from 'react'

export default function useActiveSection() {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const sections = Array.from(
            document.querySelectorAll('main > [id]')
        )

        if (!sections.length) {
            console.warn('useActiveSection: no direct children with IDs found inside <main>.')
            return
        }

        let ticking = false

        const updateActiveSection = () => {
            const marker = window.innerHeight * 0.35
            let currentSection = sections[0].id

            for (const section of sections) {
                if (section.getBoundingClientRect().top <= marker) {
                    currentSection = section.id
                } else {
                    break
                }
            }

            setActiveSection(previous =>
                previous === currentSection ? previous : currentSection
            )

            ticking = false
        }

        const handleScroll = () => {
            if (!ticking) {
                ticking = true
                window.requestAnimationFrame(updateActiveSection)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll)

        updateActiveSection()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    return activeSection
}
