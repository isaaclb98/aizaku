"use client";

import { useEffect, useRef, useState } from "react";

type DashboardAccordionProps = {
  title: string;
  subtitle: string;
  iframeSrc: string;
};

export default function DashboardAccordion({
  title,
  subtitle,
  iframeSrc,
}: DashboardAccordionProps) {
  const [open, setOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    // 3 second timeout fallback
    timeoutRef.current = setTimeout(() => {
      setShowFallback(true);
    }, 3000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        setShowFallback(false);
        setIframeLoaded(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const handleToggle = () => {
    if (open) {
      setOpen(false);
      setShowFallback(false);
      setIframeLoaded(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    } else {
      setOpen(true);
    }
  };

  return (
    <div
      className={`
        border border-[#E4E4E7] rounded overflow-hidden mb-3 bg-[#FFFFFF]
        transition-all duration-200
      `}
    >
      <button
        onClick={handleToggle}
        aria-expanded={open}
        className="
          w-full
          flex items-center justify-between
          px-6 py-5
          bg-[#FFFFFF]
          hover:bg-[#FAFAF9]
          transition-colors cursor-pointer
          text-left
        "
      >
        <div className="flex items-center gap-3">
          {/* Grid icon */}
          <div className="w-8 h-8 bg-[#18181B] rounded flex items-center justify-center flex-shrink-0">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#C45D35"
              strokeWidth="1.2"
            >
              <rect x="1" y="3" width="14" height="10" rx="1" />
              <path d="M1 6h14" />
            </svg>
          </div>
          <div>
            <h4
              className="text-sm font-medium text-[#18181B]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {title}
            </h4>
            <span className="text-xs text-[#71717A]">{subtitle}</span>
          </div>
        </div>
        <span
          className={`text-[#71717A] text-lg transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          ref={panelRef}
          className="border-t border-[#E4E4E7]"
        >
          {showFallback || !iframeSrc ? (
            <div
              className="
                w-full h-48
                bg-[#18181B]
                flex items-center justify-center
                text-[#52525B] text-sm
                font-mono
              "
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              [ Live dashboard unavailable ]
            </div>
          ) : (
            <iframe
              src={iframeSrc}
              loading="lazy"
              onLoad={() => {
                setIframeLoaded(true);
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }
              }}
              className="w-full h-[400px] border-0 bg-[#18181B]"
              title={title}
            />
          )}
        </div>
      )}
    </div>
  );
}
