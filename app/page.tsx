"use client";

import { useEffect } from "react";

const datePlan = [
  {
    time: "14:30",
    title: "門前仲町で待ち合わせ",
    text: "少し早めに。冷たい飲みものを買って、ゆっくり祭りへ向かおう。",
  },
  {
    time: "15:00",
    title: "富岡八幡宮へ",
    text: "境内を歩いて、お参り。屋台をのぞきながら好きなものを半分こ。",
  },
  {
    time: "16:30",
    title: "深川の熱気を感じる",
    text: "神輿と掛け声、水しぶき。夏らしい瞬間を、ふたりで見届けたい。",
  },
  {
    time: "18:30",
    title: "夕暮れのごはん",
    text: "混雑を少し離れてひと休み。その日の気分で、ゆっくり食べよう。",
  },
];

const notes = [
  {
    number: "01",
    title: "暑さ",
    text: "日傘と飲みものを忘れずに。無理せず、涼しい場所でこまめに休憩しよう。",
  },
  {
    number: "02",
    title: "水濡れ",
    text: "水掛け祭りだから、スマホは防水ケースへ。濡れても大丈夫な小物が安心。",
  },
  {
    number: "03",
    title: "浴衣",
    text: "着てくれたらきっと嬉しい。でも歩きやすさ優先で、いつもの服でももちろん。",
  },
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    items.forEach((item) => observer.observe(item));

    const updateProgress = () => {
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? window.scrollY / pageHeight : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(progress),
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement>,
  ) => {
    event.currentTarget.style.display = "none";
    event.currentTarget.parentElement?.classList.add("image-fallback");
  };

  return (
    <main>
      <div className="progress" aria-hidden="true" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/images/fukagawa-water.jpg"
            alt=""
            onError={handleImageError}
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-topline">
          <span>AN INVITATION FOR MIKA</span>
          <span>2026.08.16</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">SUMMER FESTIVAL 2026</p>
          <h1 id="hero-title">
            Mika <i>×</i> Bacchi
          </h1>
          <p className="hero-lead">今年の夏を、ふたりの記憶に。</p>
        </div>
        <a className="scroll-cue" href="#invitation" aria-label="招待文へ進む">
          <span>SCROLL</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="opening section-pad">
        <div className="monogram" data-reveal aria-hidden="true">
          M <span>×</span> B
        </div>
        <div className="opening-copy" data-reveal>
          <p className="eyebrow gold">OUR SUMMER, 2026</p>
          <h2>
            Mika <span>×</span> Bacchi
          </h2>
          <p>
            いつもの夏より、少しだけ特別な一日を。
            <br />
            東京の真ん中で、江戸の粋に会いに行こう。
          </p>
        </div>
      </section>

      <section className="invitation section-pad" id="invitation">
        <div className="vertical-label" aria-hidden="true">
          PRIVATE INVITATION
        </div>
        <div className="invitation-inner" data-reveal>
          <p className="eyebrow red">DEAR MIKA</p>
          <h2>
            美伽ちゃんへ。
            <br />
            夏祭りに行きませんか。
          </h2>
          <div className="letter">
            <p>
              せっかくの夏だから、ふたりで何か、
              ずっと覚えていられることをしたいと思いました。
            </p>
            <p>
              水しぶきと神輿の熱気、夕方の風、屋台の匂い。
              その全部を、美伽ちゃんと一緒に味わえたら嬉しいです。
            </p>
            <p>よかったら、8月16日を僕にください。</p>
          </div>
        </div>
      </section>

      <section className="festival">
        <div className="festival-image image-shell">
          <img
            src="/images/fukagawa-water.jpg"
            alt="門前仲町の街を進む神輿に清めの水が降り注ぐ深川八幡祭り"
            onError={handleImageError}
          />
          <div className="image-index" aria-hidden="true">
            01
          </div>
        </div>
        <div className="festival-copy section-pad">
          <div className="festival-heading" data-reveal>
            <p className="eyebrow gold">THE DESTINATION</p>
            <h2>
              深川
              <br />
              八幡祭り
            </h2>
            <p className="festival-en">FUKAGAWA HACHIMAN FESTIVAL</p>
          </div>
          <div className="festival-details" data-reveal>
            <div className="date-lockup">
              <strong>08.16</strong>
              <span>SUN / 2026</span>
            </div>
            <p>
              江戸三大祭のひとつ。沿道から神輿へ清めの水を浴びせることから、
              「水掛け祭り」の名で親しまれています。
              2026年は53基の町神輿が集う、3年に一度の本祭り。
            </p>
            <dl>
              <div>
                <dt>PLACE</dt>
                <dd>富岡八幡宮・門前仲町周辺</dd>
              </div>
              <div>
                <dt>ACCESS</dt>
                <dd>門前仲町駅から徒歩約3分</dd>
              </div>
              <div>
                <dt>MAIN EVENT</dt>
                <dd>各町神輿連合渡御 7:30〜</dd>
              </div>
            </dl>
            <a
              className="text-link"
              href="https://www.gotokyo.org/jp/spot/ev093/index.html"
              target="_blank"
              rel="noreferrer"
            >
              祭りの公式情報を見る <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="plan section-pad">
        <div className="section-title" data-reveal>
          <p className="eyebrow red">OUR DATE PLAN</p>
          <h2>
            ふたりで過ごす、
            <br />
            夏の一日。
          </h2>
        </div>
        <ol className="timeline">
          {datePlan.map((item, index) => (
            <li
              key={item.time}
              data-reveal
              style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}
            >
              <time>{item.time}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="plan-note" data-reveal>
          ※ 予定はあくまでゆるく。美伽ちゃんのペースに合わせます。
        </p>
      </section>

      <section className="interlude" aria-label="富岡八幡宮">
        <div className="interlude-media image-shell">
          <img
            src="/images/fukagawa-night.jpg"
            alt="祭りの日の富岡八幡宮の鳥居と参道"
            onError={handleImageError}
          />
        </div>
        <p data-reveal>
          <span>MONZEN-NAKACHO</span>
          暮れていく街も、
          <br />
          きっときれいだ。
        </p>
      </section>

      <section className="notes section-pad">
        <div className="section-title compact" data-reveal>
          <p className="eyebrow gold">A SMALL NOTE</p>
          <h2>
            夏を心地よく
            <br />
            楽しむために。
          </h2>
        </div>
        <div className="note-grid">
          {notes.map((note, index) => (
            <article
              key={note.title}
              data-reveal
              style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <div>
                <span>{note.number}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="finale">
        <div className="finale-sun" aria-hidden="true" />
        <div className="finale-inner" data-reveal>
          <p className="eyebrow">ONE SUMMER. ONE MEMORY.</p>
          <h2>一緒に行こう。</h2>
          <p>
            2026年8月16日 日曜日
            <br />
            深川八幡祭り
          </p>
          <a
            className="map-link"
            href="https://maps.apple.com/?q=%E5%AF%8C%E5%B2%A1%E5%85%AB%E5%B9%A1%E5%AE%AE"
            target="_blank"
            rel="noreferrer"
          >
            <span>場所を地図で見る</span>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>

      <footer>
        <div className="signature" data-reveal>
          <p>WITH LOVE,</p>
          <strong>
            Mika <i>×</i> Bacchi
          </strong>
          <span>SUMMER 2026</span>
        </div>
        <p className="credit">
          Photo: 東京特許許可局 / CC BY-SA 4.0, Daderot / CC0 via Wikimedia
          Commons
        </p>
      </footer>
    </main>
  );
}
