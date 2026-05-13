import { cn } from "@/lib/utils";

interface LocationMapClusterProps {
  className?: string;
}

const LocationMapCluster = ({ className }: LocationMapClusterProps) => (
  <a
    href="/locations"
    aria-label="Explore Solarfig service locations"
    className={cn("group block w-full", className)}
  >
    <img
      src="/assets/maps/service-area-map.svg"
      alt="Solarfig service area map showing active and coming soon states"
      className="mx-auto block aspect-[10/7] w-full max-w-[760px] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
    />
  </a>
);

export default LocationMapCluster;
