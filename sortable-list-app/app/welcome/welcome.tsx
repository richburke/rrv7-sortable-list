import { SortableRegion } from "~/components/sortable-region";

const INITIAL_ITEMS = [
  {
    id: 1,
    title: "Chapter 12: Quantifying Uncertainty",
    description: "Artificial Intelligence: A Modern Approach",
    color: "bg-green-100",
  },
  {
    id: 2,
    title: "Chapter 13: Probabilistic Reasoning",
    description: "Artificial Intelligence: A Modern Approach",
    color: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Chapter 12: Planning and Uncertainty",
    description: "Artificial Intelligence: Foundations of Computational Agents",
    color: "bg-cyan-100",
  },
  {
    id: 4,
    title: "Think more rationally with Bayes' rule",
    description: "YouTube, Steven Pinker",
    color: "bg-pink-100",
  },
  {
    id: 5,
    title: "Probability and Statistics Refresher",
    description: "YouTube, XP Actuarial",
    color: "bg-orange-100",
  },
];

export function Welcome() {
  return (
    <div className="flex flex-col items-center justify-items-start pt-8 pb-4">
      <header className="mb-8">
        <h1>Learning Path</h1>
      </header>
      <main>
        <div className="flex-1 flex flex-col items-center justify-items-start gap-16 min-h-0">
          <SortableRegion initial_items={INITIAL_ITEMS} />
        </div>
      </main>
    </div>
  );
}
