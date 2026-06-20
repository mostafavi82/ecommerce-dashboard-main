"use client";

import { Bell, Mail, Menu, Search, ChevronDown } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-slate-100 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900 lg:px-8">
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Search */}
      <div className="relative max-w-md flex-1">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search product"
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
        />
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <button
          className="relative rounded-full border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
          aria-label="Notifications"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>
        <button
          className="relative rounded-full border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
          aria-label="Messages"
        >
          <Mail className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="ml-1 hidden items-center gap-3 sm:flex">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
            GH
          </span>
          <div className="hidden md:block">
            <p className="text-sm font-semibold leading-tight text-slate-800 dark:text-slate-100">
              Guy Hawkins
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">Admin</p>
          </div>
          <ChevronDown className="hidden h-4 w-4 text-slate-400 md:block" />
        </div>
      </div>
    </header>
  );
}
