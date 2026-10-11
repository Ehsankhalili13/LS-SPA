import './teachers.css'

const teachersData = [
    {
        id: 1,
        name: { fa: 'معلم نمونه', en: 'Test Teacher' },
        role: { fa: 'مدرس زبان انگلیسی', en: 'English Teacher' },
        desc: {
            fa: 'بیش از ۸ سال تجربه تدریس IELTS و مکالمه. فارغ‌التحصیل از دانشگاه تهران.',
            en: 'Over 8 years of IELTS and conversation teaching. Graduate of University of Tehran.'
        },
        photo: null,
    },
    {
        id: 2,
        name: { fa: 'معلم نمونه', en: 'Test Teacher' },
        role: { fa: 'مدرس زبان انگلیسی', en: 'English Teacher' },
        desc: {
            fa: 'بیش از ۸ سال تجربه تدریس IELTS و مکالمه. فارغ‌التحصیل از دانشگاه تهران.',
            en: 'Over 8 years of IELTS and conversation teaching. Graduate of University of Tehran.'
        },
        photo: null,
    },
    {
        id: 3,
        name: { fa: 'معلم نمونه', en: 'Test Teacher' },
        role: { fa: 'مدرس زبان انگلیسی', en: 'English Teacher' },
        desc: {
            fa: 'بیش از ۸ سال تجربه تدریس IELTS و مکالمه. فارغ‌التحصیل از دانشگاه تهران.',
            en: 'Over 8 years of IELTS and conversation teaching. Graduate of University of Tehran.'
        },
        photo: null,
    },
    {
        id: 4,
        name: { fa: 'معلم نمونه', en: 'Test Teacher' },
        role: { fa: 'مدرس زبان انگلیسی', en: 'English Teacher' },
        desc: {
            fa: 'بیش از ۸ سال تجربه تدریس IELTS و مکالمه. فارغ‌التحصیل از دانشگاه تهران.',
            en: 'Over 8 years of IELTS and conversation teaching. Graduate of University of Tehran.'
        },
        photo: null,
    },
    {
        id: 5,
        name: { fa: 'معلم نمونه', en: 'Test Teacher' },
        role: { fa: 'مدرس زبان انگلیسی', en: 'English Teacher' },
        desc: {
            fa: 'بیش از ۸ سال تجربه تدریس IELTS و مکالمه. فارغ‌التحصیل از دانشگاه تهران.',
            en: 'Over 8 years of IELTS and conversation teaching. Graduate of University of Tehran.'
        },
        photo: null,
    },
]

const texts = {
    fa: {
        title: 'اساتید ما',
        subtitle: 'تیمی از مدرسین مجرب و دلسوز که مسیر یادگیری شما را هموار می‌کنند',
    },
    en: {
        title: 'Our Teachers',
        subtitle: 'A team of experienced and caring instructors who pave your learning path',
    }
}

function Teachers({ lang }) {
    const t = texts[lang]

    return (
        <section className="section teachers" id="teachers">
            <div className="container">
                <div className="teachers__header">
                    <h2 className="section-title">{t.title}</h2>
                    <p className="section-subtitle">{t.subtitle}</p>
                </div>
            </div>

            <div className="teachers__track-wrapper">
                <div className="teachers__track">
                    {teachersData.map((teacher) => (
                        <article
                            className={`teacher-card glass-card`}
                            key={teacher.id}
                        >
                            <div className="teacher-avatar">
                                {teacher.photo ? (
                                    <img src={teacher.photo} alt={teacher.name[lang]} />
                                ) : (
                                    <span className="avatar-placeholder">
                                        {teacher.name[lang].charAt(0)}
                                    </span>
                                )}
                            </div>
                            <h3 className="teacher-name">{teacher.name[lang]}</h3>
                            <span className="teacher-role">{teacher.role[lang]}</span>
                            <p className="teacher-desc">{teacher.desc[lang]}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Teachers