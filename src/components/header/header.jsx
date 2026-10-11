import './header.css'

const texts = {
    fa: {
        title: 'زبان جدید، دنیای جدید',
        subtitle: 'با اساتید مجرب و روش‌های مدرن، زبان انگلیسی را به راحتی یاد بگیرید. مسیر یادگیری شما از اینجا شروع می‌شود.',
        cta1: 'شروع یادگیری',
        cta2: 'مشاهده دوره‌ها',
    },
    en: {
        title: 'New Language, New World',
        subtitle: 'Learn English with experienced instructors and modern methods. Your learning journey starts here.',
        cta1: 'Start Learning',
        cta2: 'View Courses',
    }
}

function Header({ lang, site_name }) {
    const t = texts[lang]
    const badge = {
       fa: `آموزشگاه زبان ${site_name}`,
       en: `${site_name} Language School`
    }

    return (
        <header className="header" id="home">
            <div className="container header__inner">
                <div className="header__content glass-card s1">
                    <span className="header__badge">{badge[lang]}</span>
                    <h1 className="header__title">{t.title}</h1>
                    <p className="header__subtitle">{t.subtitle}</p>

                    <div className="header__actions">
                        <a href="#about" className="btn btn-primary">{t.cta1}</a>
                        <a href="#teachers" className="btn btn-ghost">{t.cta2}</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header