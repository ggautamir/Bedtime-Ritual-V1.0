import type { ReactNode } from "react";

type StoryCardProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function StoryCard({ title, description, children }: StoryCardProps) {
  return (
    <div className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-primary/10 backdrop-blur">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-primary/70">
        {description}
      </p>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
