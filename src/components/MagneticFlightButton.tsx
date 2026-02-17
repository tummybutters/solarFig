import { useRef, useState, useCallback } from "react";
import { Send } from "lucide-react";

const MagneticFlightButton = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isReturning, setIsReturning] = useState(false);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        const maxDistance = 100;
        const maxMove = 12;

        if (distance < maxDistance) {
            const factor = 1 - distance / maxDistance;
            setPosition({
                x: distanceX * factor * (maxMove / maxDistance),
                y: distanceY * factor * (maxMove / maxDistance),
            });
        }
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsReturning(false);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsReturning(true);
        setPosition({ x: 0, y: 0 });

        setTimeout(() => {
            setIsReturning(false);
        }, 800);
    };

    return (
        <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center gap-3 px-6 py-3 rounded-none border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300"
            style={{
                background: isHovered ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(12px)",
                transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered ? 1.04 : 1})`,
                boxShadow: isHovered
                    ? "0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.4)"
                    : "0 4px 24px rgba(0,0,0,0.06)",
                transition: isReturning
                    ? "transform 800ms cubic-bezier(0.23, 1, 0.32, 1), background 300ms ease, box-shadow 300ms ease"
                    : "transform 150ms ease-out, background 300ms ease, box-shadow 300ms ease",
            }}
        >
            {/* Text Container with vertical roll */}
            <span className="relative block h-[1.25rem] overflow-hidden">
                <span
                    className="flex flex-col transition-transform"
                    style={{
                        transform: isHovered ? "translateY(-50%)" : "translateY(0)",
                        transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
                        transitionDelay: "0ms",
                    }}
                >
                    <span className="block h-[1.25rem] leading-[1.25rem] text-sm font-medium text-gray-900">Give us a call</span>
                    <span className="block h-[1.25rem] leading-[1.25rem] text-sm font-medium text-gray-900">Give us a call</span>
                </span>
            </span>

            {/* Icon Container */}
            <span
                className="relative flex items-center justify-center w-8 h-8 rounded-none bg-gray-900"
                style={{
                    transform: isHovered ? "rotate(45deg) translateX(6px)" : "rotate(0deg) translateX(0)",
                    transition: isHovered
                        ? "transform 400ms cubic-bezier(0.16, 1, 0.3, 1) 100ms"
                        : "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
                }}
            >
                <Send
                    className="w-4 h-4 text-white"
                    style={{
                        transform: isHovered ? "rotate(-45deg)" : "rotate(0deg)",
                        transition: isHovered
                            ? "transform 400ms cubic-bezier(0.16, 1, 0.3, 1) 100ms"
                            : "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                />

                {/* Trail/flash effect behind icon */}
                <span
                    className="absolute inset-0 rounded-none bg-white/50"
                    style={{
                        opacity: isHovered ? 0 : 0,
                        transform: isHovered ? "scale(1.5)" : "scale(1)",
                        transition: "opacity 200ms ease, transform 400ms ease",
                        transitionDelay: isHovered ? "150ms" : "0ms",
                    }}
                />
            </span>
        </button>
    );
};

export default MagneticFlightButton;
