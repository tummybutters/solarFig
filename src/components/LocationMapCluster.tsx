import AnimatedStateMap from "@/components/AnimatedStateMap";
import { serviceLocations } from "@/data/locations";
import { cn } from "@/lib/utils";

interface LocationMapClusterProps {
  className?: string;
}

const displayNames: Partial<Record<(typeof serviceLocations)[number]["slug"], string>> = {
  "new-jersey": "N. Jersey",
  "north-carolina": "N. Carolina",
};

const mapClasses: Partial<Record<(typeof serviceLocations)[number]["slug"], string>> = {
  california:
    "max-h-[76px] max-w-[116px] -translate-y-1 sm:max-h-[94px] sm:max-w-[136px]",
  "new-jersey":
    "max-h-[58px] max-w-[88px] -translate-y-4 sm:max-h-[70px] sm:max-w-[100px]",
};

const LocationCard = ({ location }: { location: (typeof serviceLocations)[number] }) => (
  <a
    href={location.href}
    className="group grid h-[150px] grid-rows-[minmax(0,1fr)_44px] overflow-hidden rounded-2xl border border-[#e7def2] bg-white/82 p-3 shadow-[0_18px_38px_-32px_rgba(36,29,47,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbb7e8] hover:bg-white sm:h-[178px] sm:grid-rows-[minmax(0,1fr)_48px] sm:p-4 lg:h-[188px]"
  >
    <div className="flex min-h-0 items-center justify-center pb-2">
      <AnimatedStateMap
        dotCount={72}
        geometry={location.map}
        label={location.name}
        seed={location.mapSeed}
        className={cn(
          "h-full max-h-[84px] w-full max-w-[128px] sm:max-h-[104px] sm:max-w-[150px] [&>svg]:h-full [&>svg]:w-full",
          mapClasses[location.slug]
        )}
      />
    </div>

    <div className="flex h-full items-center justify-center border-t border-[#eadff6]">
      <span className="whitespace-nowrap text-center text-xs font-semibold leading-none text-[#2a2238] sm:text-sm lg:text-[15px]">
        {displayNames[location.slug] ?? location.name}
      </span>
    </div>
  </a>
);

const LocationMapCluster = ({ className }: LocationMapClusterProps) => {
  const firstRow = serviceLocations.slice(0, 4);
  const secondRow = serviceLocations.slice(4);

  return (
    <div className={cn("mx-auto flex w-full flex-col items-center gap-3 sm:gap-4", className)}>
      <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {firstRow.map((location) => (
          <LocationCard key={location.slug} location={location} />
        ))}
      </div>

      <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:w-[calc(75%-0.25rem)] md:grid-cols-3">
        {secondRow.map((location) => (
          <LocationCard key={location.slug} location={location} />
        ))}
      </div>
    </div>
  );
};

export default LocationMapCluster;
