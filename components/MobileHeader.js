import React from "react";

export default function MobileHeader() {
  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 z-30 w-full h-64 transition-all duration-200 ease-in-out bg-neutral-800 -shift-y-64" />
      <div className="fixed top-0 left-0 z-50 w-full h-64 transition-all duration-200 ease-in-out -shift-y-64">
        <div className="absolute top-0 w-full h-24 gradient-y-neutral-800-transparent" />
        <div className="absolute bottom-0 w-full h-24 gradient-y-transparent-neutral-800" />
      </div>
      <div className="fixed top-0 left-0 z-50 w-full h-32 mt-64 transition-all duration-200 ease-in-out gradient-y-neutral-900-transparent -shift-y-96" />
    </div>
  );
}
