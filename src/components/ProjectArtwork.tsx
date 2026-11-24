import Image from "next/image";
import { ZoomableImage } from "./ZoomableImage";

const artwork = {
  "bookclub-library": (
    <div className="art-books">
      <span className="books-caption">A place for our next read.</span>
      <div className="book book-one"><span>The book<br />club</span><small>Our shared library</small></div>
      <div className="book book-two"><span>One more<br /><em>chapter.</em></span><small>Read. Share. Repeat.</small></div>
      <span className="book-sticker">What are<br />you reading?</span>
    </div>
  ),
  "budget-app": (
    <div className="art-budget"><span className="budget-title">A little more<br />peace of mind.</span><div className="budget-sheet"><span>This month</span><div className="budget-bars"><i /><i /><i /><i /><i /></div><div className="budget-line"><span>The essentials</span><b /><span>The nice-to-haves</span></div></div></div>
  ),
};

const blackpinkScreenshots = [
  { name: "home", caption: "Home page", width: 1640, height: 1224 },
  { name: "discography", caption: "BLACKPINK discography", width: 946, height: 1313 },
  { name: "jennie", caption: "Jennie", width: 1180, height: 1307 },
  { name: "jisoo", caption: "Jisoo", width: 1187, height: 1310 },
  { name: "rose", caption: "Rosé", width: 1173, height: 1317 },
  { name: "lisa", caption: "Lisa", width: 1015, height: 1304 },
  { name: "login", caption: "Login page", width: 1105, height: 1306 },
];

const coffeeScreenshots = [
  { name: "overview", extension: "png", caption: "Coffee list", width: 997, height: 1293 },
  { name: "admin", extension: "png", caption: "Admin mode", width: 955, height: 1310 },
  { name: "login", extension: "jpg", caption: "Login", width: 855, height: 893 },
];

export function ProjectThumbnail({ slug }: { slug: string }) {
  if (slug === "vue-coffee-list") {
    return (
      <div className="project-artwork project-screenshot coffee-screenshot">
        <Image src="/projects/coffee-thumbnail.png" alt="Coffee App" width={528} height={170} sizes="(max-width: 480px) 100vw, 50vw" />
      </div>
    );
  }
  if (slug === "blackpink-discography") {
    return (
      <div className="project-artwork project-screenshot blackpink-screenshot">
        <Image src="/projects/blackpink-home.png" alt="BLACKPINK artist website home page in black and pink" width={1640} height={1224} sizes="(max-width: 480px) 100vw, 50vw" />
      </div>
    );
  }
  if (slug === "note-app") {
    return (
      <div className="project-artwork project-screenshot glum-thumbnail">
        <Image
          src="/projects/glum-thumbnail.png"
          alt="glum"
          width={188}
          height={97}
          sizes="(max-width: 480px) 100vw, 50vw"
        />
      </div>
    );
  }
  if (slug === "cosmigo") {
    return (
      <div className="project-artwork project-screenshot">
        <Image
          src="/projects/cosmigo-thumbnail.png"
          alt="Cosmigo’s pixel-art star character with level and XP progress"
          width={341}
          height={327}
          sizes="(max-width: 480px) 100vw, 50vw"
        />
      </div>
    );
  }
  return <ProjectArtwork slug={slug} />;
}

export function ProjectArtwork({ slug }: { slug: string }) {
  if (slug === "vue-coffee-list") {
    return (
      <div className="project-gallery coffee-gallery">
        {coffeeScreenshots.map(({ name, extension, caption, width, height }) => {
          const src = `/projects/coffee-${name}.${extension}`;
          const alt = `Coffee List: ${caption}`;
          return (
            <figure key={name}>
              <ZoomableImage className="project-artwork project-screenshot coffee-screenshot" src={src} alt={alt} width={width} height={height}>
                <Image src={src} alt={alt} width={width} height={height} sizes={name === "overview" ? "(max-width: 760px) 100vw, 760px" : "(max-width: 600px) 100vw, 380px"} />
              </ZoomableImage>
              <figcaption>{caption}</figcaption>
            </figure>
          );
        })}
      </div>
    );
  }
  if (slug === "blackpink-discography") {
    return (
      <div className="project-gallery blackpink-gallery">
        {blackpinkScreenshots.map(({ name, caption, width, height }) => {
          const src = `/projects/blackpink-${name}.png`;
          const alt = `BLACKPINK artist website: ${caption}`;
          return (
            <figure key={name}>
              <ZoomableImage className="project-artwork project-screenshot blackpink-screenshot" src={src} alt={alt} width={width} height={height}>
                <Image src={src} alt={alt} width={width} height={height} sizes={name === "home" ? "(max-width: 760px) 100vw, 760px" : "(max-width: 600px) 100vw, 380px"} />
              </ZoomableImage>
              <figcaption>{caption}</figcaption>
            </figure>
          );
        })}
      </div>
    );
  }
  if (slug === "note-app") {
    return (
      <div className="project-gallery">
        <figure>
          <ZoomableImage className="project-artwork project-screenshot project-screenshot-portrait" src="/projects/glum.png" alt="glum notes overview" width={1080} height={2520}>
            <Image
              src="/projects/glum.png"
              alt="glum mobile app showing shared notes, colorful task cards, completion progress, and sync status"
              width={1080}
              height={2520}
              sizes="(max-width: 600px) 80vw, 320px"
            />
          </ZoomableImage>
          <figcaption>Notes overview</figcaption>
        </figure>
        <figure>
          <ZoomableImage className="project-artwork project-screenshot project-screenshot-portrait" src="/projects/glum-note.png" alt="A note and checklist in glum" width={1080} height={2520}>
            <Image
              src="/projects/glum-note.png"
              alt="A Grocery note in glum with a checklist, completed task, reminders, sharing, and a due date option"
              width={1080}
              height={2520}
              sizes="(max-width: 600px) 80vw, 320px"
            />
          </ZoomableImage>
          <figcaption>Inside a note</figcaption>
        </figure>
      </div>
    );
  }
  if (slug === "cosmigo") {
    return (
      <ZoomableImage className="project-artwork project-screenshot" src="/projects/cosmigo.png" alt="Cosmigo with notes, tasks, character, and Pomodoro timer" width={1919} height={893}>
        <Image
          src="/projects/cosmigo.png"
          alt="Cosmigo app with a star character, XP progress, to-do list, note editor, and Pomodoro timer against a purple galaxy background"
          width={1919}
          height={893}
          sizes="(max-width: 480px) 100vw, (max-width: 760px) 50vw, 760px"
        />
      </ZoomableImage>
    );
  }
  return <div className="project-artwork" aria-hidden="true">{artwork[slug as keyof typeof artwork] ?? <span className="art-brand">an.</span>}</div>;
}
