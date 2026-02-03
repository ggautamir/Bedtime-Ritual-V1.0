import { StoryCard } from "@/components/ui/StoryCard";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white/70 p-8 shadow-story ring-1 ring-primary/15 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
          BedtimeRitual
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-primary sm:text-5xl">
          Mythic stories that guide big feelings into gentle routines.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary/75">
          Describe the moment, choose a mythic guide, and BedtimeRitual crafts a
          soothing tale that models the behavior you want to see while keeping
          bedtime magical.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-parchment shadow-md shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start a bedtime story
          </button>
          <button
            type="button"
            className="rounded-full border border-primary/25 px-6 py-3 text-sm font-medium text-primary/80 transition hover:bg-primary/10"
          >
            Preview the parent guide
          </button>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-xs text-primary/60">
          <span className="rounded-full bg-primary/10 px-3 py-1">
            Calm transitions
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1">
            Emotional naming
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1">
            Positive choices
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <StoryCard
          title="Parent mode"
          description="Capture the behavior, pick the mythic archetype, and guide the story toward the lesson you want to reinforce."
        >
          <ul className="space-y-2 text-sm text-primary/70">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary/60" />
              Gentle prompts that keep you calm and consistent.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary/60" />
              Mythic metaphors to make boundaries feel safe.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary/60" />
              Reflection notes to spot progress night by night.
            </li>
          </ul>
        </StoryCard>

        <StoryCard
          title="Child mode"
          description="Immersive story scenes with soothing language and rituals that help little ones practice new skills."
        >
          <ul className="space-y-2 text-sm text-primary/70">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary/60" />
              Choose-your-path moments for agency and confidence.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary/60" />
              Mythical companions who mirror feelings with care.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary/60" />
              Sleepy pacing that winds down naturally.
            </li>
          </ul>
        </StoryCard>
      </div>

      <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-primary/10">
        <h2 className="text-xl font-semibold text-primary">
          A gentle ritual in three steps
        </h2>
        <ol className="mt-4 space-y-3 text-sm text-primary/70">
          <li className="flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              1
            </span>
            <div>
              <p className="font-medium text-primary">Set the intention</p>
              <p>Share the moment and the behavior you want to nurture.</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              2
            </span>
            <div>
              <p className="font-medium text-primary">Tell the myth</p>
              <p>Read a calming story where heroes practice the skill.</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              3
            </span>
            <div>
              <p className="font-medium text-primary">Reflect together</p>
              <p>Pick a tiny ritual to carry into tomorrow night.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
