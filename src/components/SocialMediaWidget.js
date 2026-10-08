import React, { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, Linkedin, MessageCircle, MoreVertical, X } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/acuity_pest_control", icon: Instagram, color: "text-[#E4405F]" },
  { label: "Facebook", href: "https://facebook.com/profile.php?id=61567989834040", icon: Facebook, color: "text-[#1877F2]" },
  { label: "LinkedIn", href: "https://linkedin.com/in/acuity-pest-control-apcs", icon: Linkedin, color: "text-[#0A66C2]" },
];

export default function SocialMediaWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleOutsidePointer = (event) => {
      if (!widgetRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("pointerdown", handleOutsidePointer);
    return () => document.removeEventListener("pointerdown", handleOutsidePointer);
  }, [isOpen]);

  return (
    <>
      <div ref={widgetRef} className="fixed right-0 top-1/2 z-[1100] -translate-y-1/2">
        <div
          aria-hidden={!isOpen}
          className={`overflow-hidden rounded-l-3xl border border-r-0 border-slate-300/80 bg-slate-100/95 shadow-[0_12px_35px_rgba(15,23,42,0.18)] backdrop-blur-md transition-all duration-300 ease-out ${isOpen ? "max-h-[300px] w-[76px] p-3 opacity-100" : "pointer-events-none max-h-0 w-0 p-0 opacity-0"}`}
        >
          <div className="flex flex-col items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${color}`}
              >
                <Icon size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close social media" : "Open social media"}
          aria-expanded={isOpen}
          className="absolute right-0 top-1/2 flex h-16 w-9 -translate-y-1/2 items-center justify-center rounded-l-2xl border border-r-0 border-slate-300/80 bg-slate-100 text-slate-500 shadow-[0_8px_24px_rgba(15,23,42,0.16)] transition hover:text-slate-900"
        >
          {isOpen ? <X size={18} aria-hidden="true" /> : <MoreVertical size={20} aria-hidden="true" />}
        </button>
      </div>

      <a
        href="https://wa.me/919941229005"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-24 right-5 z-[1100] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:shadow-lg sm:bottom-6 sm:right-6"
      >
        <MessageCircle size={23} aria-hidden="true" />
      </a>
    </>
  );
}
