
import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#E9E1F6] bg-[#FBFAFF] px-5 py-9 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-5 sm:flex-row sm:items-center">

        {/* Copyright */}

        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8C8198] sm:text-[11px]">
          © 2026 Ghulam Fatima. All rights reserved.
        </p>

        {/* Back To Top */}

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#746A80] transition duration-300 hover:text-[#8B5CF6] sm:text-[11px]"
        >
          Back to top

          <span className="transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </button>

      </div>
    </footer>
  );
}
