import { Section } from "@/components/ui/section";

type CellValue = string | boolean;

interface ComparisonRow {
  feature: string;
  free: CellValue;
  pro: CellValue;
}

const rows: ComparisonRow[] = [
  { feature: "Users", free: "5", pro: "Unlimited" },
  { feature: "Topics", free: "1", pro: "All" },
  { feature: "Daily questions", free: true, pro: true },
  { feature: "Weekly summary", free: "Basic", pro: "Advanced" },
  { feature: "Leaderboard", free: false, pro: true },
  { feature: "Analytics dashboard", free: false, pro: true },
  { feature: "Priority support", free: false, pro: true },
];

function CellContent({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <svg
        className="mx-auto h-5 w-5 text-uply-green-muted"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-label="Included"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (value === false) {
    return (
      <span className="text-uply-gray/40" aria-label="Not included">
        —
      </span>
    );
  }

  return <span>{value}</span>;
}

export function PricingComparison() {
  return (
    <Section theme="light">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-uply-dark md:text-4xl">
          Compare plans
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-uply-gray">
          See exactly what you get with each plan.
        </p>
      </div>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-4 text-left font-medium text-uply-gray">
                Feature
              </th>
              <th className="pb-4 text-center font-medium text-uply-gray">
                Free
              </th>
              <th className="pb-4 text-center font-medium text-uply-dark">
                Pro
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.feature}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="py-4 font-medium text-uply-dark">
                  {row.feature}
                </td>
                <td className="py-4 text-center text-uply-gray">
                  <CellContent value={row.free} />
                </td>
                <td className="py-4 text-center text-uply-dark">
                  <CellContent value={row.pro} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
