import { BRAND, OTHER_GAMES, STUDY_RESOURCES, APP_FEATURES } from '../config/aboutConfig';
import styles from './AboutPage.module.css';

const ICON_MAP = {
  youtube: '▶️',
  tiktok: '🎵',
  instagram: '📸',
  facebook: '📘',
};

export default function AboutPage() {
  return (
    <div className={styles.page + ' page-enter'}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.avatar}>{BRAND.avatarInitials}</div>
            <div className={styles.heroText}>
              <h1 className={styles.brandName}>{BRAND.name}</h1>
              <p className={styles.tagline}>{BRAND.tagline}</p>
              <p className={styles.authorLine}>
                by <strong>{BRAND.author}</strong> — {BRAND.authorTitle}
              </p>
              <div className={styles.socials}>
                {BRAND.socialLinks.map(link => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                    {ICON_MAP[link.icon] || '🔗'} {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* About description */}
        <div className={styles.aboutCard}>
          <h2 className={styles.sectionTitle}>Về ứng dụng 🌱</h2>
          <p className={styles.aboutText}>{BRAND.description}</p>

          <div className={styles.features}>
            {APP_FEATURES.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <div>
                  <div className={styles.featureTitle}>{f.title}</div>
                  <div className={styles.featureDesc}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other games */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🎮 Game Học Khác</h2>
          <p className={styles.sectionSub}>Các game học tiếng Anh khác bạn có thể thử</p>
          <div className={styles.cards}>
            {OTHER_GAMES.map(item => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceCard}
                style={{ '--rc': item.color }}
              >
                <div className={styles.rcEmoji}>{item.emoji}</div>
                <div className={styles.rcBody}>
                  <div className={styles.rcTag}>{item.tag}</div>
                  <div className={styles.rcTitle}>{item.title}</div>
                  <div className={styles.rcDesc}>{item.description}</div>
                </div>
                <span className={styles.rcArrow}>→</span>
              </a>
            ))}
          </div>
        </section>

        {/* Study resources */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📖 Tài Liệu Học</h2>
          <p className={styles.sectionSub}>Tài nguyên học từ vựng tiếng Anh được khuyến nghị</p>
          <div className={styles.cards}>
            {STUDY_RESOURCES.map(item => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceCard}
                style={{ '--rc': item.color }}
              >
                <div className={styles.rcEmoji}>{item.emoji}</div>
                <div className={styles.rcBody}>
                  <div className={styles.rcTag}>{item.tag}</div>
                  <div className={styles.rcTitle}>{item.title}</div>
                  <div className={styles.rcDesc}>{item.description}</div>
                </div>
                <span className={styles.rcArrow}>→</span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.footerLogo}>
            <span className={styles.footerLogoIcon}>W</span>
            <span>{BRAND.name}</span>
          </div>
          <p className={styles.footerText}>
            Xây dựng với ❤️ để giúp người học tiếng Việt chinh phục từ vựng tiếng Anh
          </p>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} {BRAND.author}</p>
        </div>
      </div>
    </div>
  );
}
