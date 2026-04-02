/*
  SkillBadge — a small pill/tag for an individual skill.

  Simple and focused: takes a label string, renders a styled pill.
  The bg-primary/10 + text-primary creates a tinted badge that
  adapts to light/dark mode automatically.
*/

interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
      {label}
    </span>
  );
}
