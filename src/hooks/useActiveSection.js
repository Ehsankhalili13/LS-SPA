import { useEffect, useState } from 'react'

export default function useActiveSection() {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const sections = document.querySelectorAll('main > [id]')

        if (!sections.length) {
            console.warn('No sections with IDs found inside main')
            return
        }

        const observer = new IntersectionObserver(
            entries => {
                const visibleSections = entries
                    .filter(entry => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    )

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id)
                }
            },
            {
                rootMargin: '-20% 0px -65% 0px',
                threshold: 0,
            }
        )

        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return activeSection
}