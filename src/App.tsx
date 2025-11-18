import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./i18n/config";
import { languages } from "./i18n/config";

const queryClient = new QueryClient();

// Map countries to languages
const countryToLanguage: { [key: string]: string } = {
  RS: "sr",
  BA: "sr",
  ME: "sr",
  HR: "sr",
  MK: "sr",
  BR: "pt",
  PT: "pt",
  DE: "de",
  AT: "de",
  CH: "de",
  FR: "fr",
  BE: "fr",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",
  VE: "es",
  EC: "es",
  GT: "es",
  CU: "es",
  BO: "es",
  DO: "es",
  HN: "es",
  PY: "es",
  SV: "es",
  NI: "es",
  CR: "es",
  PA: "es",
  UY: "es",
  JP: "ja",
  CN: "zh",
  TW: "zh",
  HK: "zh",
  SG: "zh",
  KR: "ko",
  KP: "ko",
};

const detectLanguage = async (): Promise<string> => {
  const availableLanguages = Object.keys(languages);

  // 1. Check browser language
  const browserLang = navigator.language.split("-")[0].toLowerCase();
  if (availableLanguages.includes(browserLang)) {
    return browserLang;
  }

  // 2. Check country by IP
  try {
    const response = await fetch("ht
