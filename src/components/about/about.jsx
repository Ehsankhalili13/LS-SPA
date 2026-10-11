import './about.css'

const texts = {
    fa: {
        title: (site_name) => `درباره آموزشگاه ${site_name}`,
        subtitle: 'جایی که زبان‌ها زنده می‌شوند',

        p1: (site_name) =>
            `آموزشگاه زبان ${site_name} با بیش از ۱۰ سال تجربه در آموزش زبان‌های زنده دنیا، محیطی پویا و دوستانه برای یادگیری فراهم کرده است. ما معتقدیم هر زبان‌آموز مسیر منحصربه‌فرد خود را دارد.`,

        p2: 'با بهره‌گیری از اساتید بومی و ایرانی مجرب، کلاس‌های حضوری و آنلاین، و متدهای روز دنیا، شما را تا رسیدن به تسلط همراهی می‌کنیم.',

        stats: [
            { value: '۱۰+', label: 'سال تجربه' },
            { value: '۵۰۰+', label: 'زبان‌آموز فعال' },
            { value: '۱۲', label: 'استاد متخصص' },
            { value: '۳', label: 'زبان اصلی' },
        ]
    },

    en: {
        title: (site_name) => `About ${site_name} School`,
        subtitle: 'Where languages come alive',

        p1: (site_name) =>
            `${site_name} Language School, with over 10 years of experience in teaching world languages, provides a dynamic and friendly environment for learning. We believe every learner has a unique path.`,

        p2: 'With experienced native and Iranian teachers, in-person and online classes, and modern methods, we accompany you until you reach fluency.',

        stats: [
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Active Students' },
            { value: '12', label: 'Expert Teachers' },
            { value: '3', label: 'Main Languages' },
        ]
    }
}

function About({ lang, site_name }) {
    const t = texts[lang]

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about__grid">
                    <div className="about__text glass-card s1">
                        <h2 className="section-title">{t.title(site_name)}</h2>
                        <p className="about__lead">{t.subtitle}</p>
                        <p className="about__p">{t.p1(site_name)}</p>
                        <p className="about__p">{t.p2}</p>
                    </div>

                    <div className="about__stats">
                        {t.stats.map((item, i) => (
                            <div className="stat-card glass-card s2" key={i}>
                                <span className="stat-value">{item.value}</span>
                                <span className="stat-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About