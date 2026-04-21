import { iconMap } from "./iconMap";

const sizeMap = {
  sm: 18,
  md: 24,
  lg: 32,
};

export default function Icon({ name, size = "md", className = "", strokeWidth = 1.9, title }) {
  const shape = iconMap[name] || iconMap.targetLite;
  const pixelSize = sizeMap[size] || sizeMap.md;

  return (
    <svg
      className={`uiIcon uiIcon-${size} ${className}`.trim()}
      viewBox="0 0 24 24"
      width={pixelSize}
      height={pixelSize}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {shape.paths?.map((path, idx) => (
        <path key={`p-${idx}`} {...path} />
      ))}
      {shape.rects?.map((rect, idx) => (
        <rect key={`r-${idx}`} {...rect} />
      ))}
      {shape.circles?.map((circle, idx) => (
        <circle key={`c-${idx}`} {...circle} />
      ))}
    </svg>
  );
}
