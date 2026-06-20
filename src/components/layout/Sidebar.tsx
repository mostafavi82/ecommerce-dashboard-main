"use client";

import {
  LayoutDashboard,
  Footprints,
  Shirt,
  Watch,
  ShoppingBag,
  ArrowLeftRight,
  Users,
  FileBarChart,
  Settings,
  UserCircle,
  HelpCircle,
  Moon,
  ChevronDown,
  X,
  Triangle,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { useTheme } from "@/hooks/useTheme";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const generalItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Product", icon: ShoppingBag, badge: "19", expandable: true },
  { label: "Transaction", icon: ArrowLeftRight, badge: "441" },
  { label: "Customers", icon: Users },
  { label: "Sales Report", icon: FileBarChart },
];

const productSubItems = [
  { label: "Sneakers", icon: Footprints },
  { label: "Jacket", icon: Shirt },
  { label: "T-Shirt", icon: Shirt },
  { label: "Bag", icon: ShoppingBag },
  { label: "Accessories", icon: Watch },
];

const toolItems = [
  { label: "Account & Settings", icon: Settings },
  { label: "Help", icon: HelpCircle },
];

export function Sidebar({ open, onClose }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  // Product sub-menu open/close state (expanded by default, as in the design)
  const [productOpen, setProductOpen] = useState(true);

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-slate-900/50 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-100 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 pb-2 pt-6">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Triangle className="h-4 w-4 fill-white text-white" />
            </span>
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              Culters
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Company switcher */}
        <div className="mx-4 mt-4 flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5 dark:border-slate-700">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-sm font-bold text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
            K
          </span>
          <div className="flex-1">
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              Company
            </p>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Kanky Store
            </p>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>

        <nav className="mt-5 flex-1 space-y-6 overflow-y-auto px-4 pb-6">
          {/* General */}
          <div>
            <p className="px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              General
            </p>
            <ul className="mt-2 space-y-1">
              {generalItems.map((item) => {
                const itemClasses = cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                );
                const content = (
                  <>
                    <item.icon className="h-[18px] w-[18px]" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        {item.badge}
                      </span>
                    )}
                    {item.expandable && (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-slate-400 transition-transform duration-300",
                          productOpen && "rotate-180"
                        )}
                      />
                    )}
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.expandable ? (
                      <button
                        onClick={() => setProductOpen((v) => !v)}
                        aria-expanded={productOpen}
                        aria-controls="product-submenu"
                        className={itemClasses}
                      >
                        {content}
                      </button>
                    ) : (
                      <a href="#" className={itemClasses}>
                        {content}
                      </a>
                    )}

                    {item.expandable && (
                      <div
                        id="product-submenu"
                        className={cn(
                          "grid transition-[grid-template-rows] duration-300 ease-in-out",
                          productOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        )}
                      >
                        <ul
                          className={cn(
                            "ml-4 space-y-1 overflow-hidden border-l border-slate-100 pl-3 dark:border-slate-800",
                            productOpen && "mt-1"
                          )}
                        >
                          {productSubItems.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href="#"
                                tabIndex={productOpen ? 0 : -1}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                              >
                                <sub.icon className="h-4 w-4" />
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <p className="px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Tools
            </p>
            <ul className="mt-2 space-y-1">
              {toolItems.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  >
                    <item.icon className="h-[18px] w-[18px]" />
                    <span className="flex-1">{item.label}</span>
                  </a>
                </li>
              ))}
              {/* Dark mode toggle */}
              <li>
                <button
                  onClick={toggleTheme}
                  aria-pressed={isDark}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                >
                  <Moon className="h-[18px] w-[18px]" />
                  <span className="flex-1 text-left">Dark Mode</span>
                  <span
                    className={cn(
                      "relative h-5 w-9 rounded-full transition-colors",
                      isDark ? "bg-blue-600" : "bg-slate-200"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all",
                        isDark ? "left-[18px]" : "left-0.5"
                      )}
                    />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* User */}
        <div className="border-t border-slate-100 px-4 py-4 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
              GH
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                Guy Hawkins
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">Admin</p>
            </div>
            <UserCircle className="h-5 w-5 text-slate-400" />
          </div>
        </div>
      </aside>
    </>
  );
}
