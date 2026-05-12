import AnimatedStateMap from "@/components/AnimatedStateMap";
import { serviceLocations } from "@/data/locations";
import { cn } from "@/lib/utils";

interface LocationMapClusterProps {
  className?: string;
}

const mapClasses: Partial<Record<(typeof serviceLocations)[number]["slug"], string>> = {
  california: "max-w-[86px] sm:max-w-[108px]",
  "new-york": "max-w-[112px] sm:max-w-[136px]",
  "new-jersey": "max-w-[62px] sm:max-w-[78px]",
  florida: "max-w-[104px] sm:max-w-[128px]",
  "north-carolina": "max-w-[124px] sm:max-w-[152px]",
  michigan: "max-w-[118px] sm:max-w-[146px]",
  virginia: "max-w-[120px] sm:max-w-[148px]",
  connecticut: "max-w-[96px] sm:max-w-[118px]",
};

const LocationCard = ({ location }: { location: (typeof serviceLocations)[number] }) => (
  <a
    href={location.href}
    aria-label={`Explore solar service in ${location.name}`}
    className="group flex h-[104px] items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1 sm:h-[132px] lg:h-[148px]"
  >
    <AnimatedStateMap
      dotCount={0}
      geometry={location.map}
      label={location.name}
      seed={location.mapSeed}
      className={cn("w-full transition-transform duration-300 group-hover:scale-[1.03]", mapClasses[location.slug])}
    />
  </a>
);

const LocationMapCluster = ({ className }: LocationMapClusterProps) => {
  return (
    <div className={cn("mx-auto grid w-full grid-cols-2 items-center gap-x-5 gap-y-4 sm:grid-cols-4 sm:gap-x-7 sm:gap-y-6", className)}>
      {serviceLocations.map((location) => (
        <LocationCard key={location.slug} location={location} />
      ))}
    </div>
  );
};

export default LocationMapCluster;
