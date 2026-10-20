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
  "vue-coffee-list": (
    <div className="art-coffee"><span className="coffee-title">Coffee,<br /><em>catalogued.</em></span><div className="coffee-cup"><div className="coffee-liquid" /></div><span className="coffee-caption">Espresso / Brew / Something iced</span></div>
  ),
  "budget-app": (
    <div className="art-budget"><span className="budget-title">A little more<br />peace of mind.</span><div className="budget-sheet"><span>This month</span><div className="budget-bars"><i /><i /><i /><i /><i /></div><div className="budget-line"><span>The essentials</span><b /><span>The nice-to-haves</span></div></div></div>
  ),
  "blackpink-discography": (
    <div className="art-blackpink"><div className="record"><div /></div><span className="blackpink-title">BLACK<span>PINK</span></span><span className="blackpink-caption">The discography</span></div>
  ),
};

export function ProjectThumbnail({ slug }: { slug: string }) {
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
