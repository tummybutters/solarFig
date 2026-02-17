import type { ReactNode } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SolarProjectMetric {
  label: string;
  value: string;
  icon?: ReactNode;
}

interface SolarProjectCardProps {
  type: string;
  title: string;
  highlight: string;
  location: string;
  date: string;
  metrics: SolarProjectMetric[];
  imageUrl?: string;
  className?: string;
}

const SolarProjectCard = ({
  type,
  title,
  highlight,
  location,
  date,
  metrics,
  imageUrl,
  className,
}: SolarProjectCardProps) => {
  return (
    <div
      className={cn(
        "group w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-slate-100" />
        )}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-purple-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-purple-700">
            {type}
          </span>
          <span className="text-[11px] font-medium text-slate-500">{date}</span>
        </div>

        <div>
          <h3 className="font-serif text-2xl leading-none text-slate-900">{highlight}</h3>
          <p className="mt-2 min-h-[44px] text-sm leading-relaxed text-slate-600">{title}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-slate-200 pt-4">
          {metrics.map((metric, index) => (
            <div key={`${metric.label}-${index}`} className="rounded-md bg-slate-50 p-2">
              <div className="mb-1 flex items-center gap-1 text-[10px] uppercase tracking-wide text-slate-500">
                {metric.icon ? <span className="[&>svg]:h-3 [&>svg]:w-3">{metric.icon}</span> : null}
                {metric.label}
              </div>
              <span className="text-xs font-semibold text-slate-900">{metric.value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1 text-xs font-medium text-slate-600">
          <MapPin className="h-3.5 w-3.5 text-purple-600" />
          {location}
        </div>
      </div>
    </div>
  );
};

export default SolarProjectCard;
