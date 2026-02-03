"use client";

import { useEffect, useMemo, useState } from "react";

type AgeGroup = "3-5" | "6-8" | "9-12";
type GrowthAreaId = "body-confidence" | "finding-calm" | "telling-the-truth";

type GrowthArea = {
  id: GrowthAreaId;
  title: string;
  description: string;
};

type AgeGroupOption = {
  id: AgeGroup;
  label: string;
  description: string;
  growthAreas: GrowthAreaId[];
};

const growthAreas: Record<GrowthAreaId, GrowthArea> = {
  "body-confidence": {
    id: "body-confidence",
    title: "Body Confidence",
    description: "Celebrate strength, movement, and kind self-talk.",
  },
  "finding-calm": {
    id: "finding-calm",
    title: "Finding Calm",
    description: "Ground big feelings with gentle, steady rituals.",
  },
  "telling-the-truth": {
    id: "telling-the-truth",
    title: "Telling the Truth",
    description: "Practice honesty, courage, and repair in a safe way.",
  },
};

const ageGroups: AgeGroupOption[] = [
  {
    id: "3-5",
    label: "3-5",
    description: "Early explorers",
    growthAreas: ["finding-calm", "body-confidence"],
  },
  {
    id: "6-8",
    label: "6-8",
    description: "Bridge years",
    growthAreas: ["finding-calm", "body-confidence", "telling-the-truth"],
  },
  {
    id: "9-12",
    label: "9-12",
    description: "Growing voices",
    growthAreas: ["finding-calm", "telling-the-truth"],
  },
];

export default function ParentDashboardPage() {
  const [activeAgeGroup, setActiveAgeGroup] = useState<AgeGroup>("6-8");
  const [selectedGrowth, setSelectedGrowth] = useState<GrowthAreaId | null>(
    null,
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showStoryView, setShowStoryView] = useState(false);

  const activeGrowthAreas = useMemo(() => {
    const group = ageGroups.find((item) => item.id === activeAgeGroup);
    return group?.growthAreas.map((id) => growthAreas[id]) ?? [];
  }, [activeAgeGroup]);

  useEffect(() => {
    setSelectedGrowth(null);
    setShowStoryView(false);
    setIsTransitioning(false);
  }, [activeAgeGroup]);

  const handleGenerateRitual = () => {
    if (!selectedGrowth) {
      return;
    }
    setIsTransitioning(true);
    window.setTimeout(() => {
      setIsTransitioning(false);
      setShowStoryView(true);
    }, 700);
  };

  const handleReset = () => {
    setShowStoryView(false);
    setSelectedGrowth(null);
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-primary/60">
          Parent dashboard
        </p>
        <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
          What&apos;s on your child&apos;s heart today?
        </h1>
        <p className="max-w-2xl text-base text-primary/70 sm:text-lg">
          Choose their age and a growth area so we can craft a story that meets
          the moment with warmth.
        </p>
      </header>

      <section className="rounded-3xl bg-white/70 p-6 shadow-story ring-1 ring-primary/10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
              Child&apos;s age
            </p>
            <h2 className="mt-2 text-lg font-semibold text-primary">
              Pick an age range
            </h2>
          </div>
          <p className="text-xs text-primary/60">
            Stories adapt to developmental rhythms.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {ageGroups.map((group) => {
            const isActive = group.id === activeAgeGroup;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveAgeGroup(group.id)}
                className={`flex flex-col items-center gap-1 rounded-2xl border px-4 py-3 text-center text-sm font-medium transition ${
                  isActive
                    ? "border-primary bg-primary/10 text-primary shadow-sm"
                    : "border-transparent bg-white/60 text-primary/60 hover:border-primary/30"
                }`}
                aria-pressed={isActive}
              >
                <span className="text-base">{group.label}</span>
                <span className="text-xs text-primary/50">
                  {group.description}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
              Growth areas
            </p>
            <h2 className="mt-2 text-xl font-semibold text-primary">
              Choose tonight&apos;s focus
            </h2>
          </div>
          <p className="text-xs text-primary/60">
            {activeGrowthAreas.length} options for ages {activeAgeGroup}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeGrowthAreas.map((area) => {
            const isSelected = area.id === selectedGrowth;
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => setSelectedGrowth(area.id)}
                className={`group flex h-full flex-col gap-3 rounded-2xl border p-5 text-left transition ${
                  isSelected
                    ? "border-primary bg-primary/10 text-primary shadow-sm"
                    : "border-transparent bg-white/70 text-primary/70 hover:border-primary/20"
                }`}
                aria-pressed={isSelected}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-primary/50">
                  Growth area
                </span>
                <span className="text-lg font-semibold text-primary">
                  {area.title}
                </span>
                <span className="text-sm text-primary/70">
                  {area.description}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {selectedGrowth ? (
        <section className="relative overflow-hidden rounded-3xl bg-white/70 p-6 shadow-story ring-1 ring-primary/10">
          <div
            className={`transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
              Selected growth area
            </p>
            <h3 className="mt-2 text-xl font-semibold text-primary">
              {growthAreas[selectedGrowth].title}
            </h3>
            <p className="mt-2 text-sm text-primary/70">
              Ready to guide your child through a mythic story designed for this
              focus?
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleGenerateRitual}
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-parchment shadow-md shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Generate Ritual
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-primary/70 transition hover:bg-primary/10"
              >
                Choose another focus
              </button>
            </div>
          </div>
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-parchment/90 text-center transition-opacity duration-500 ${
              isTransitioning ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!isTransitioning}
          >
            <div className="h-12 w-12 animate-pulse rounded-full border-2 border-primary/40" />
            <p className="text-sm uppercase tracking-[0.3em] text-primary/60">
              Weaving the ritual
            </p>
            <p className="text-base font-semibold text-primary">
              Opening the storybook view...
            </p>
          </div>
        </section>
      ) : null}

      <section
        className={`rounded-3xl bg-white/70 p-6 shadow-story ring-1 ring-primary/10 transition-all duration-500 ${
          showStoryView
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!showStoryView}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
          Story view
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-primary">
          The mythic ritual is ready.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-primary/70">
          Settle in together, lower the lights, and let the story unfold with a
          gentle pace. You can guide the next steps once you arrive in the story
          view.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-parchment shadow-md shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Enter story view
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-primary/70 transition hover:bg-primary/10"
          >
            Start over
          </button>
        </div>
      </section>
    </div>
  );
}
