import styles from "./ImagePlaceholder.module.css";

type ImagePlaceholderProps = {
  /** Extra class(es) from the parent that define width/height/background/radius */
  className?: string;
  label?: string;
};

/**
 * Stand-in for a real image / illustration / icon asset.
 * The base class only resets default div behaviour — every placeholder's
 * concrete size and color is defined as a named class in the parent
 * component's own CSS module (no inline styles are used anywhere).
 */
function ImagePlaceholder({ className, label }: ImagePlaceholderProps) {
  return (
    <div
      className={[styles.placeholder, className].filter(Boolean).join(" ")}
      role="img"
      aria-label={label || "decorative placeholder"}
    />
  );
}

export default ImagePlaceholder;
