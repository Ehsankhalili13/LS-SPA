import "./footer.css";


const texts = {
    fa: {
        description:
            "راهکاری مدرن برای ارائه خدمات و محصولات با کیفیت، همراه با تجربه‌ای ساده و حرفه‌ای.",

        quickAccess: "دسترسی سریع",
        home: "صفحه اصلی",
        about: "درباره ما",
        services: "خدمات",
        contact: "تماس با ما",

        servicesTitle: "خدمات",
        ourServices: "خدمات ما",
        products: "محصولات",
        support: "پشتیبانی",
        faq: "سؤالات متداول",

        contactUs: "ارتباط با ما",
        address: "آدرس",
        phone: "تلفن",
        email: "ایمیل",

        addressValue: "ایران، تهران",

        rights: "تمامی حقوق محفوظ است.",
        privacy: "حریم خصوصی",
        terms: "قوانین و مقررات",
    },

    en: {
        description:
            "A modern solution for providing quality products and services with a simple and professional experience.",

        quickAccess: "Quick Access",
        home: "Home",
        about: "About Us",
        services: "Services",
        contact: "Contact Us",

        servicesTitle: "Services",
        ourServices: "Our Services",
        products: "Products",
        support: "Support",
        faq: "FAQ",

        contactUs: "Contact Us",
        address: "Address",
        phone: "Phone",
        email: "Email",

        addressValue: "Iran, Tehran",

        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
    }
};


function Footer({ name, lang, routes }) {

    const t = texts[lang];

    return (
        <footer className="footer" dir={lang === "fa" ? "rtl" : "ltr"}>
            <div className="container">

                {/* Main Footer */}
                <div className="footer-main">

                    {/* Brand */}
                    <div className="footer-brand">

                        <a href="" onClick={(e)=>{e.preventDefault();}} className="footer-logo">
                            <span className="footer-logo-icon">J</span>
                            <span>{name}</span>
                        </a>

                        <p className="footer-description">
                            {t.description}
                        </p>

                        <div className="footer-socials">

                            <a href="#" aria-label="Instagram">
                                Instagram
                            </a>

                            <a href="#" aria-label="Telegram">
                                Telegram
                            </a>

                            <a href="#" aria-label="LinkedIn">
                                LinkedIn
                            </a>

                        </div>

                    </div>


                    {/* Quick Links */}
                    <div className="footer-column">

                        <h3>{t.quickAccess}</h3>

                        <ul>
                            
                            {routes.map(element => {
                                return <li><a href={element.href}>{element.name}</a></li>
                            })}
                        </ul>

                    </div>

                    {/* Contact */}
                    <div className="footer-contact">

                        <h3>{t.contactUs}</h3>


                        <div className="footer-contact-item">

                            <span className="footer-contact-icon">
                                ⌖
                            </span>

                            <div>

                                <span>{t.address}</span>

                                <p>
                                    {t.addressValue}
                                </p>

                            </div>

                        </div>


                        <div className="footer-contact-item">

                            <span className="footer-contact-icon">
                                ☎
                            </span>

                            <div>

                                <span>{t.phone}</span>

                                <a href="tel:+982100000000">
                                    ۰۲۱-۰۰۰۰۰۰۰۰
                                </a>

                            </div>

                        </div>


                        <div className="footer-contact-item">

                            <span className="footer-contact-icon">
                                @
                            </span>

                            <div>

                                <span>{t.email}</span>

                                <a href="mailto:info@example.com">
                                    info@example.com
                                </a>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Bottom */}
                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} {t.rights}
                    </p>


                    <div className="footer-bottom-links">

                        <a href="#privacy">
                            {t.privacy}
                        </a>

                        <span></span>

                        <a href="#terms">
                            {t.terms}
                        </a>

                    </div>

                </div>

            </div>
        </footer>
    );
}


export default Footer;