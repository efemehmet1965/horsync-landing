// ========== Splash Animation ==========
(function() {
  const splash = document.getElementById('splash');
  const logo = document.getElementById('splash-logo');
  const title = document.getElementById('splash-title');
  const sub = document.getElementById('splash-sub');
  const barTrack = document.getElementById('splash-bar-track');
  const bar = document.getElementById('splash-bar');
  if (!splash) return;

  // phase 1: logo scale-in (0ms)
  if (logo) {
    logo.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
    requestAnimationFrame(() => {
      logo.style.opacity = '1';
      logo.style.transform = 'scale(1)';
    });
  }

  // phase 2: text fade-up (350ms / 500ms)
  setTimeout(() => {
    if (title) { title.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; title.style.opacity = '1'; title.style.transform = 'translateY(0)'; }
  }, 350);
  setTimeout(() => {
    if (sub) { sub.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; sub.style.opacity = '1'; sub.style.transform = 'translateY(0)'; }
    if (barTrack) { barTrack.style.transition = 'opacity 0.6s ease'; barTrack.style.opacity = '1'; }
  }, 500);

  // phase 3: loading bar fill (600ms → 2600ms)
  if (bar) {
    setTimeout(() => {
      const startTime = performance.now();
      const DURATION = 2000;
      function tick(now) {
        const p = Math.min((now - startTime) / DURATION, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        bar.style.width = (eased * 100).toFixed(1) + '%';
        if (p < 1) requestAnimationFrame(tick);
        else {
          // phase 4: fade out
          setTimeout(() => {
            splash.style.opacity = '0';
            splash.style.visibility = 'hidden';
            splash.style.pointerEvents = 'none';
            setTimeout(() => { if (splash.parentNode) splash.remove(); }, 600);
          }, 350);
        }
      }
      requestAnimationFrame(tick);
    }, 600);
  }
})();

// ========== Translations ==========
const i18n = {
  tr: {
    'nav-arch': 'Mimari',
    'nav-features': 'Özellikler',
    'nav-compare': 'Karşılaştırma',
    'hero-line1': 'Her Yerde',
    'hero-line2': 'Güvenle Senkronize Et.',
    'hero-desc': 'Cihazlar arası <span class="text-emerald-400 font-semibold">doğrudan P2P TLS şifreli blok transferi</span> ile <span class="text-cyber-blue font-semibold">SaaS kontrol panelinin yönetim gücünü</span> birleştiren yeni nesil senkronizasyon altyapısı.',
    'hero-btn-github': "GitHub'da İncele",
    'hero-btn-security': 'Güvenlik Detayları',
    'about-title': 'Horsync',
    'about-title2': 'Nedir?',
    'about-subtitle': 'Verilerinizi tasarım gereği gizli tutan yeni nesil dosya senkronizasyon altyapısı.',
    'about-problem-title': 'Sorun',
    'about-problem-desc': 'Dropbox, Google Drive, OneDrive gibi tüm yaygın senkronizasyon araçları dosyalarınızı <span class="text-red-400/80">merkezi bulut sunucularından</span> geçirir. Verileriniz kontrol etmediğiniz altyapılarda, elinizde olmayan anahtarlarla şifrelenir. Metadata sızıntısı, gözetim, veri ihlalleri — saldırı yüzeyi devasadır.',
    'about-solution-title': 'Horsync Çözümü',
    'about-solution-desc': 'Dosyalar <span class="text-emerald-400 font-semibold">cihazlarınız arasında doğrudan</span> TLS 1.3 şifreli kanallarla aktarılır — sunucu yalnızca koordinasyonu sağlar. <span class="text-cyber-blue font-semibold">SaaS kontrol paneli</span> ile tüm peer\'ları, kasaları ve izinleri tek yerden yönetirsiniz. Verileriniz her zaman sizde kalır.',
    'about-how-title': 'Nasıl Çalışır?',
    'about-how-sub': 'Kurulumdan şifreli senkronizasyona üç adım',
    'step1-title': "Daemon'u Kur",
    'step1-desc': 'Tek komutla Windows, Linux veya macOS\'a Horsync arka plan servisini kurar. Sistem init ile kaydolur ve peer ağına otomatik katılır.',
    'step2-title': 'Peer Keşfi & Kimlik Doğrulama',
    'step2-desc': 'Cihazlar LAN UDP broadcast (port 21027) veya SaaS hub üzerinden birbirini keşfeder. Mutual TLS handshake ile kimlik doğrulanır — sızacak şifre yok.',
    'step3-title': 'Doğrudan P2P Senkronizasyon',
    'step3-desc': 'AES-GCM 256-bit şifreli bloklar doğrudan peer\'lar arasında akar. Hub sadece orkestrasyon yapar, verinize asla dokunmaz. Metadata transfer öncesi binary seviyesinde temizlenir.',
    'arch-title': 'P2P Ağ',
    'arch-title2': 'Topolojisi',
    'arch-desc': 'TLS şifreli bloklar doğrudan peer\'lar arasında akar. Hub orkestrasyonu sağlar — verinizi asla görmez.',
    'arch-hub-label': 'Orkestratör',
    'arch-mobile': 'Mobil',
    'arch-legend-hub': 'Hub Rölesi',
    'arch-legend-p2p': 'P2P Doğrudan',
    'arch-btn-start': 'P2P Aktarımını Başlat',
    'arch-btn-reset': 'Sıfırla',
    'arch-status-active': '● Aktif — P2P TLS 1.3 doğrudan transfer sürüyor',
    'arch-status-idle': '● Bekliyor — Doğrudan P2P blok transferini simüle etmek için tıklayın',
    'feat-title': 'Gizlilik İçin',
    'feat-title2': 'Tasarlanmıştır',
    'feat-subtitle': 'Her özellik, ağın düşmanca olduğu varsayımıyla inşa edilmiştir.',
    'feat1-title': 'Zero-Knowledge Şifreleme Kasası',
    'feat1-desc': 'Dosyalar cihazınızdan çıkmadan önce tarayıcı RAM\'inde şifrelenir. AES-GCM 256-bit ve PBKDF2 100.000 iterasyon. Sunucu şifre çözme anahtarlarınıza asla sahip olmaz — biz bile verilerinizi okuyamayız.',
    'feat1-tag3': 'İstemci Tarafı',
    'feat2-title': 'Otomatik Metadata Temizleyici',
    'feat2-desc': 'Görsellerden GPS EXIF, PDF\'lerden yazar bilgisi ve ofis belgelerinden gizli metadata izlerini binary seviyesinde temizler. Dosyalarınız sıfır adli iz bırakır.',
    'feat2-tag3': 'Binary Temiz',
    'feat3-title': 'LAN UDP Otomatik Keşif',
    'feat3-desc': 'Siber radar yerel ağınızı port 21027 üzerinden tarar, milisaniyeler içinde peer cihazları keşfeder. LAN\'da bulut rölesine gerek yok — senkronizasyon ağınızın içinde, hat hızında kalır.',
    'feat4-title': 'Tek Tık Daemon Kurulumu',
    'feat4-desc': 'Horsync arka plan servisini tek komutla herhangi bir işletim sistemine kurun. Otomatik yapılandırır, sistem daemon\'u olarak kaydeder ve peer ağınıza bağlar — sıfır manuel kurulum.',
    'feat5-title': 'Blok Bazlı Chunked Upload',
    'feat5-desc': 'Dosyalar SHA-256 ile doğrulanan parçalara bölünür. Kesintiden sonra kaldığı yerden devam eder, her chunk bütünlük kontrollü — bozuk veri asla yazılmaz.',
    'feat6-title': 'Token-Bucket Bant Genişliği',
    'feat6-desc': 'Token-bucket rate limiting ile ağ kullanımını hassas şekilde yönetin. Senkronizasyon arka planda çalışırken internet bağlantınızı doyurmaz — siz kontrol edersiniz.',
    'feat7-title': 'Otomasyon Kuralları',
    'feat7-desc': 'Şifreleme, metadata temizleme ve arşivleme için yapılandırılabilir politikalar tanımlayın. Kural tabanlı iş akışları ile senkronizasyonu ihtiyacınıza göre otomatikleştirin.',
    'comp-title': 'Neden',
    'comp-title2': '?',
    'comp-subtitle': 'Bulut, saf P2P, ya da hibrit — mimari, verilerinize kimin sahip olduğunu belirler.',
    'comp-col-feature': 'Özellik',
    'comp-r1-label': 'Mimari',
    'comp-r1-cloud': 'Merkezi — veri sunucuda',
    'comp-r1-st': 'Saf P2P — sunucu yok, panel yok',
    'comp-r1-rs': 'P2P — özel mülk, yönetim paneli var',
    'comp-r1-hs': 'Hibrit P2P + SaaS kontrol paneli',
    'comp-r2-label': 'Şifreleme',
    'comp-r2-cloud': 'TLS aktarımda, anahtar sağlayıcıda',
    'comp-r2-st': 'TLS peer arası, cihaz lokal anahtarlar',
    'comp-r2-rs': 'TLS peer arası, kapalı kaynak anahtar yönetimi',
    'comp-r2-hs': 'AES-GCM 256 istemci tarafı + TLS 1.3 peer',
    'comp-r3-label': 'Sunucu Veriyi Görür mü?',
    'comp-r3-cloud': 'Evet — kendi altyapılarında durur',
    'comp-r3-st': 'Sunucu yok ki',
    'comp-r3-rs': 'Sunucu yok, ancak kapalı kaynak',
    'comp-r3-hs': 'Asla — hub sadece transferleri orkestre eder',
    'comp-r4-label': 'Metadata Temizleme',
    'comp-r4-cloud': 'EXIF, GPS, yazar izlerini tutar',
    'comp-r4-st': 'Ham dosya senkronu — temizleme yok',
    'comp-r4-rs': 'Ham dosya senkronu — temizleme yok',
    'comp-r4-hs': 'Transfer öncesi binary seviyede temizler',
    'comp-r5-label': 'Yönetim Paneli',
    'comp-r5-cloud': 'Web panel',
    'comp-r5-st': 'Cihaz başına lokal UI',
    'comp-r5-rs': 'Cihaz başına lokal UI (ücretli)',
    'comp-r5-hs': 'Merkezi SaaS — tüm peer\'lar tek panelden',
    'comp-r6-label': 'LAN Peer Keşfi',
    'comp-r6-cloud': 'Yok — her zaman internet üzerinden',
    'comp-r6-st': 'mDNS / lokal keşif',
    'comp-r6-rs': 'Lokal keşif (özel protokol)',
    'comp-r6-hs': 'UDP broadcast — 50ms altı LAN tespiti',
    'comp-r7-label': 'Kurulum Kolaylığı',
    'comp-r7-cloud': 'Hesap oluştur, uygulamayı kur',
    'comp-r7-st': 'Her klasör için manuel cihaz eşleme',
    'comp-r7-rs': 'Manuel link/anahtar paylaşımı',
    'comp-r7-hs': 'Tek tık daemon kurulumu, otomatik mesh',
    'comp-r8-label': 'Açık Kaynak',
    'comp-r8-cloud': 'Hayır — kapalı kaynak, özel mülk',
    'comp-r8-st': 'Evet — MPL 2.0',
    'comp-r8-rs': 'Hayır — özel mülk lisans',
    'comp-r8-hs': 'Evet — MIT, tamamen denetlenebilir',
    'comp-r9-label': 'Telemetri & İzleme',
    'comp-r9-cloud': 'Kapsamlı analitik ve takip',
    'comp-r9-st': 'İsteğe bağlı kullanım raporlama',
    'comp-r9-rs': 'Lisans kontrolü ve anonim telemetri',
    'comp-r9-hs': 'Tasarım gereği sıfır telemetri',
    'comp-hl1-title': 'Zero-Knowledge',
    'comp-hl1-desc': 'Sunucu dosyalarınızı okuyamaz. Nokta.',
    'comp-hl2-title': 'Hibrit Mimari',
    'comp-hl2-desc': 'SaaS dashboard + doğrudan P2P veri düzlemi.',
    'comp-hl3-title': 'Açık Kaynak (MIT)',
    'comp-hl3-desc': "Denetleyin. Fork'layın. Sahip olun. Kara kutu yok.",
    'cta-title': 'Ağınızın',
    'cta-title2': 'Kontrolünü',
    'cta-title3': 'Elinize Alın.',
    'cta-desc': 'Açık kaynak. MIT lisanslı. Satıcı bağımlılığı yok. Telemetri yok. Dosyalarınız, kurallarınız.',
    'cta-btn': "GitHub'da İncele",
    'footer-tagline': 'Telemetri yok. Bulut bağımlılığı yok. Dosyalarınız, kurallarınız.',
    'yavuzlar-made': 'Bu proje Yavuzlar Web Güvenliği ve Yazılım Takımı tarafından geliştirilmiştir',
    'feat7-tag1': 'Politika',
    'feat7-tag2': 'Arşiv',
    'feat7-tag3': 'Kural Tabanlı',
  },
  en: {
    'nav-arch': 'Architecture',
    'nav-features': 'Features',
    'nav-compare': 'Comparison',
    'hero-line1': 'Sync Secure',
    'hero-line2': 'Everywhere.',
    'hero-desc': 'A next-gen sync suite fusing <span class="text-emerald-400 font-semibold">direct P2P TLS-encrypted block transfers</span> between devices with the <span class="text-cyber-blue font-semibold">orchestration power of a SaaS control plane</span>.',
    'hero-btn-github': '⭐ View on GitHub',
    'hero-btn-security': 'Security Specs',
    'about-title': 'What is',
    'about-title2': 'Horsync?',
    'about-subtitle': 'A next-generation file synchronization suite that keeps your data private by design.',
    'about-problem-title': 'The Problem',
    'about-problem-desc': 'Every mainstream sync tool — Dropbox, Google Drive, OneDrive — funnels your files through <span class="text-red-400/80">centralized cloud servers</span>. Your data lives on infrastructure you don\'t control, encrypted with keys you don\'t hold. Metadata leaks, surveillance, breaches — the attack surface is massive.',
    'about-solution-title': 'The Horsync Solution',
    'about-solution-desc': 'Files move <span class="text-emerald-400 font-semibold">directly between your devices</span> over TLS 1.3 encrypted channels — the server only handles coordination. A <span class="text-cyber-blue font-semibold">SaaS control plane</span> gives you a dashboard to manage peers, vaults, and permissions, while your data stays on your hardware. Always.',
    'about-how-title': 'How It Works',
    'about-how-sub': 'Three steps from install to encrypted sync',
    'step1-title': 'Install the Daemon',
    'step1-desc': 'One command deploys the Horsync background service on Windows, Linux, or macOS. Registers with your OS init system and joins the peer mesh automatically.',
    'step2-title': 'Peer Discovery & Auth',
    'step2-desc': 'Devices discover each other via LAN UDP broadcast (port 21027) or through the SaaS hub. Mutual TLS handshake verifies identity — no passwords to leak.',
    'step3-title': 'Direct P2P Sync',
    'step3-desc': 'AES-GCM 256-bit encrypted blocks stream directly between peers. The hub orchestrates but never touches your data. Metadata is stripped at the binary level before transfer.',
    'arch-title': 'P2P Network',
    'arch-title2': 'Topology',
    'arch-desc': 'TLS-encrypted blocks flow directly between peers. The Hub orchestrates — it never sees your data.',
    'arch-hub-label': 'Orchestrator',
    'arch-mobile': 'Mobile',
    'arch-legend-hub': 'Hub Relay',
    'arch-legend-p2p': 'P2P Direct',
    'arch-btn-start': 'Start P2P Transfer',
    'arch-btn-reset': 'Reset',
    'arch-status-active': '● Active — P2P TLS 1.3 direct transfer in progress',
    'arch-status-idle': '● Idle — Click to simulate direct P2P block transfer',
    'feat-title': 'Engineered for',
    'feat-title2': 'Privacy',
    'feat-subtitle': 'Every feature is built with the assumption that the network is hostile.',
    'feat1-title': 'Zero-Knowledge Encryption Vault',
    'feat1-desc': 'Files encrypted in browser RAM before leaving your device. AES-GCM 256-bit with PBKDF2 at 100,000 iterations. The server never possesses your decryption keys — not even we can read your data.',
    'feat1-tag3': 'Client-Side',
    'feat2-title': 'Automated Metadata Stripper',
    'feat2-desc': 'Binary-level scrubbing of GPS EXIF from images, XMP/author metadata from PDFs and office documents. Your files leave zero forensic breadcrumbs.',
    'feat2-tag3': 'Binary Clean',
    'feat3-title': 'LAN UDP Auto-Discovery',
    'feat3-desc': 'Cyber-radar pings your local subnet on UDP port 21027, discovering peer devices in milliseconds. TLS 1.2+ encrypted TCP (port 22000) for direct transfers. No cloud relay needed on LAN.',
    'feat4-title': '1-Click Daemon Installers',
    'feat4-desc': 'Deploy the Horsync background service on any OS with a single command. Auto-configures, registers as a system daemon, and connects to your peer mesh — zero manual setup required.',
    'feat5-title': 'Chunked Uploads & SHA-256',
    'feat5-desc': 'Files are split into SHA-256 verified chunks. Resume from where you left off after interruption — each chunk integrity-checked so corrupted data is never written.',
    'feat6-title': 'Token-Bucket Bandwidth Governance',
    'feat6-desc': 'Fine-grained network control via token-bucket rate limiting. Sync runs in the background without saturating your connection — you set the limits.',
    'feat7-title': 'Automation Rules',
    'feat7-desc': 'Define configurable policies for encryption, metadata wiping, and archival. Rule-based workflows automate synchronization to fit your exact needs.',
    'comp-title': 'Why',
    'comp-title2': '?',
    'comp-subtitle': 'Cloud sync, pure P2P, or hybrid — the architecture decides who owns your data.',
    'comp-col-feature': 'Capability',
    'comp-r1-label': 'Architecture',
    'comp-r1-cloud': 'Centralized — server holds data',
    'comp-r1-st': 'Pure P2P — no server, no dashboard',
    'comp-r1-rs': 'P2P — proprietary, has management UI',
    'comp-r1-hs': 'Hybrid P2P + SaaS control plane',
    'comp-r2-label': 'Encryption',
    'comp-r2-cloud': 'TLS in transit, provider holds keys',
    'comp-r2-st': 'TLS between peers, device-local keys',
    'comp-r2-rs': 'TLS between peers, closed-source key mgmt',
    'comp-r2-hs': 'AES-GCM 256 client-side + TLS 1.3 peer',
    'comp-r3-label': 'Server Sees Your Data',
    'comp-r3-cloud': 'Yes — stored at rest on their infra',
    'comp-r3-st': 'No server exists',
    'comp-r3-rs': 'No server, but closed source',
    'comp-r3-hs': 'Never — hub only orchestrates transfers',
    'comp-r4-label': 'Metadata Scrubbing',
    'comp-r4-cloud': 'Retains EXIF, GPS, author trails',
    'comp-r4-st': 'Syncs raw files — no stripping',
    'comp-r4-rs': 'Syncs raw files — no stripping',
    'comp-r4-hs': 'Binary-level strip before any transfer',
    'comp-r5-label': 'Management Dashboard',
    'comp-r5-cloud': 'Web dashboard',
    'comp-r5-st': 'Per-device local UI only',
    'comp-r5-rs': 'Per-device local UI (paid)',
    'comp-r5-hs': 'Central SaaS — manage all peers at once',
    'comp-r6-label': 'LAN Peer Discovery',
    'comp-r6-cloud': 'No — always routed through internet',
    'comp-r6-st': 'mDNS / local discovery',
    'comp-r6-rs': 'Local discovery (proprietary protocol)',
    'comp-r6-hs': 'UDP broadcast — sub-50ms LAN detection',
    'comp-r7-label': 'Ease of Setup',
    'comp-r7-cloud': 'Create account, install app',
    'comp-r7-st': 'Manual device pairing per folder',
    'comp-r7-rs': 'Manual link/key sharing',
    'comp-r7-hs': '1-click daemon install, auto-mesh',
    'comp-r8-label': 'Open Source',
    'comp-r8-cloud': 'No — proprietary, closed source',
    'comp-r8-st': 'Yes — MPL 2.0',
    'comp-r8-rs': 'No — proprietary license',
    'comp-r8-hs': 'Yes — MIT, fully auditable',
    'comp-r9-label': 'Telemetry & Tracking',
    'comp-r9-cloud': 'Extensive analytics & tracking',
    'comp-r9-st': 'Optional usage reporting',
    'comp-r9-rs': 'License check & anonymous telemetry',
    'comp-r9-hs': 'Zero telemetry by design',
    'comp-hl1-title': 'Zero-Knowledge',
    'comp-hl1-desc': 'Server cannot read your files. Period.',
    'comp-hl2-title': 'Hybrid Architecture',
    'comp-hl2-desc': 'SaaS dashboard + direct P2P data plane.',
    'comp-hl3-title': 'Open Source (MIT)',
    'comp-hl3-desc': 'Audit it. Fork it. Own it. No black boxes.',
    'cta-title': 'Take',
    'cta-title2': 'Control',
    'cta-title3': 'of Your Network.',
    'cta-desc': 'Open source. MIT-licensed. No vendor lock-in. No telemetry. Your files, your rules.',
    'cta-btn': 'View on GitHub',
    'footer-tagline': 'No telemetry. No cloud dependency. Your files, your rules.',
    'yavuzlar-made': 'Developed by Yavuzlar Web Security & Software Team',
    'feat7-tag1': 'Policy',
    'feat7-tag2': 'Archive',
    'feat7-tag3': 'Rule-Based',
  }
};

// ========== Language ==========
let currentLang = 'tr';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  try {
    localStorage.setItem('horsync-lang', lang);
  } catch (e) {
    console.warn('LocalStorage writing is disabled:', e);
  }

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  const statusEl = document.getElementById('net-status');
  if (statusEl && statusEl.dataset.p2pActive === 'true') {
    statusEl.innerHTML = i18n[lang]['arch-status-active'];
  }
}

// ========== Mobile Menu ==========
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
  document.getElementById('mobile-overlay').classList.toggle('open');
  document.body.style.overflow =
    document.getElementById('mobile-menu').classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('mobile-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ========== Particle Background ==========
(function() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 80;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 0.5;
      this.opacity = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) {
        this.x = 0;
        this.vx = Math.abs(this.vx);
      } else if (this.x > canvas.width) {
        this.x = canvas.width;
        this.vx = -Math.abs(this.vx);
      }
      if (this.y < 0) {
        this.y = 0;
        this.vy = Math.abs(this.vy);
      } else if (this.y > canvas.height) {
        this.y = canvas.height;
        this.vy = -Math.abs(this.vy);
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.04 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

// ========== Network Simulation ==========
let p2pActive = false;
let animationId = null;
const packets = [];
const PACKET_COUNT = 6;

function createPacket(x, y, color) {
  const ns = 'http://www.w3.org/2000/svg';
  const circle = document.createElementNS(ns, 'circle');
  circle.setAttribute('r', '4');
  circle.setAttribute('fill', color);
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('filter', color === '#10b981' ? 'url(#glow-emerald)' : 'url(#glow-blue)');
  const container = document.getElementById('packets-container');
  if (container) container.appendChild(circle);
  return { el: circle, progress: Math.random(), speed: 0.003 + Math.random() * 0.004, color };
}

function initPackets() {
  const container = document.getElementById('packets-container');
  if (!container) return;
  container.innerHTML = '';
  packets.length = 0;
  for (let i = 0; i < PACKET_COUNT / 2; i++) {
    packets.push({ ...createPacket(150, 340, '#3b82f6'), route: 'hub', leg: 0 });
  }
  for (let i = 0; i < PACKET_COUNT / 2; i++) {
    packets.push({ ...createPacket(150, 340, '#10b981'), route: 'p2p', leg: 0 });
  }
}

function lerp(x1, y1, x2, y2, t) {
  return { x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t };
}

function animatePackets() {
  packets.forEach(p => {
    if (p.route === 'p2p' && !p2pActive) { p.el.setAttribute('opacity', '0'); return; }
    p.el.setAttribute('opacity', '1');
    let fromX, fromY, toX, toY;
    if (p.route === 'hub' && !p2pActive) {
      if (p.leg === 0) { fromX = 150; fromY = 340; toX = 450; toY = 140; }
      else { fromX = 450; fromY = 140; toX = 750; toY = 340; }
    } else if (p.route === 'p2p' && p2pActive) {
      fromX = 150; fromY = 340; toX = 750; toY = 340;
    } else { p.el.setAttribute('opacity', '0'); return; }
    p.progress += p.speed;
    if (p.progress >= 1) { p.progress = 0; if (p.route === 'hub') p.leg = p.leg === 0 ? 1 : 0; }
    const pos = lerp(fromX, fromY, toX, toY, p.progress);
    p.el.setAttribute('cx', pos.x);
    p.el.setAttribute('cy', pos.y);
  });
  animationId = requestAnimationFrame(animatePackets);
}

function startP2PTransfer() {
  if (p2pActive) return;
  p2pActive = true;
  const connP2p = document.getElementById('conn-p2p');
  if (connP2p) {
    connP2p.setAttribute('opacity', '1');
    connP2p.setAttribute('stroke-dasharray', 'none');
    connP2p.setAttribute('stroke-width', '2.5');
  }
  const tls = document.getElementById('tls-indicator');
  if (tls) tls.setAttribute('opacity', '1');
  const lock1 = document.getElementById('lock-icon-1');
  if (lock1) lock1.setAttribute('opacity', '1');
  const lock2 = document.getElementById('lock-icon-2');
  if (lock2) lock2.setAttribute('opacity', '1');
  ['conn-hub-pc1', 'conn-hub-pc2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('opacity', '0.2');
  });
  const statusEl = document.getElementById('net-status');
  if (statusEl) {
    statusEl.innerHTML = i18n[currentLang]['arch-status-active'];
    statusEl.dataset.p2pActive = 'true';
  }
  const btn = document.getElementById('btn-start-p2p');
  if (btn) {
    btn.disabled = true;
    btn.style.opacity = '0.6';
  }
}

function resetNetwork() {
  p2pActive = false;
  const connP2p = document.getElementById('conn-p2p');
  if (connP2p) {
    connP2p.setAttribute('opacity', '0.3');
    connP2p.setAttribute('stroke-dasharray', '8 6');
    connP2p.setAttribute('stroke-width', '1.5');
  }
  const tls = document.getElementById('tls-indicator');
  if (tls) tls.setAttribute('opacity', '0');
  const lock1 = document.getElementById('lock-icon-1');
  if (lock1) lock1.setAttribute('opacity', '0');
  const lock2 = document.getElementById('lock-icon-2');
  if (lock2) lock2.setAttribute('opacity', '0');
  ['conn-hub-pc1', 'conn-hub-pc2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('opacity', '1');
  });
  packets.forEach(p => { p.progress = Math.random(); p.leg = 0; });
  const statusEl = document.getElementById('net-status');
  if (statusEl) {
    statusEl.innerHTML = i18n[currentLang]['arch-status-idle'];
    statusEl.dataset.p2pActive = 'false';
  }
  const btn = document.getElementById('btn-start-p2p');
  if (btn) {
    btn.disabled = false;
    btn.style.opacity = '1';
  }
}

// ========== Scroll Reveal ==========
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// ========== Init ==========
document.addEventListener('DOMContentLoaded', () => {
  let saved = 'tr';
  try {
    saved = localStorage.getItem('horsync-lang') || 'tr';
  } catch (e) {
    console.warn('LocalStorage reading is disabled:', e);
  }
  setLang(saved);
  lucide.createIcons();
  initPackets();
  animatePackets();
});
