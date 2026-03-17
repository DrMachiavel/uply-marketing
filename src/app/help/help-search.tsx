"use client";

import { useState } from "react";
import type { HelpCategory } from "@/lib/help";

interface HelpSearchProps {
  categories: HelpCategory[];
}

export function HelpSearch({ categories }: HelpSearchProps) {
  const [query, setQuery] = useState("");

  const filtered = query
    ? categories.filter(
        (cat) =>
          cat.name.toLowerCase().includes(query.toLowerCase()) ||
          cat.description.toLowerCase().includes(query.toLowerCase())
      )
    : null;

  return (
    <div>
      <input
        type="text"
        placeholder="Search for help..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-uply-green focus:ring-1 focus:ring-uply-green"
      />

      {filtered && filtered.length > 0 && (
        <div className="mt-4 space-y-2">
          {filtered.map((category) => (
            <a
              key={category.slug}
              href={`/help/${category.slug}`}
              className="block rounded-lg bg-white/10 px-4 py-3 text-left transition-colors hover:bg-white/20"
            >
              <span className="font-medium text-white">{category.name}</span>
              <span className="ml-2 text-sm text-white/50">
                {category.description}
              </span>
            </a>
          ))}
        </div>
      )}

      {filtered && filtered.length === 0 && (
        <p className="mt-4 text-sm text-white/50">
          No matching categories found. Try a different search term.
        </p>
      )}
    </div>
  );
}
