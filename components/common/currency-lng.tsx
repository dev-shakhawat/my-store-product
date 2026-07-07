"use client"

import { Dispatch, useEffect, useMemo, useRef } from "react"
import { useState } from "react"
import Select, { SingleValue } from "react-select"
import countries from "world-countries"
import langs from "langs"



type OptionType = {
    value: string
    label: string
}

interface WorldCountry {
    currencies?: Record<string, { name: string; symbol: string }>
    languages?: Record<string, string>
}

const countryList = countries as unknown as WorldCountry[]


function toDisplayLangCode(code: string): string {

    const entry =
        langs.where("2B", code) ||
        langs.where("2T", code) ||
        langs.where("3", code)

    if (entry?.["1"]) {
        return entry["1"].toUpperCase()
    }

    return code.toUpperCase()
}
type ActiveMenu = "currency" | "language" | null;
type Props = {
    className?: string
    resetSignal?: number
    onSelect: (data: {
        currency_code: string
        language_code: string
    }) => void
    showCurrency?: boolean
    showLanguage?: boolean 
    lng: string,
    currency: string
    menuIsOpen: ActiveMenu
}

export default function CurrencyLanguageSelector({
    onSelect,
    className = "",
    resetSignal,
    showCurrency = true,
    showLanguage = true, 
    lng,
    currency,
    menuIsOpen
}: Props) {
    const lastEmittedRef = useRef<{
        currency_code: string
        language_code: string
    } | null>(null)

    const [selectedCurrency, setSelectedCurrency] =
        useState<OptionType | null>(null)
    const [selectedLanguage, setSelectedLanguage] =
        useState<OptionType | null>(null)

    const currencyOptions: OptionType[] = useMemo(() => {
        const map = new Map<string, string>()

        countryList.forEach((country) => {
            if (!country.currencies) return

            Object.entries(country.currencies).forEach(([code, info]) => {
                if (!map.has(code)) {
                    map.set(code, info?.name || code)
                }
            })
        })

        return Array.from(map.entries())
            .map(([code, name]) => ({
                value: code,
                label: `${code} — ${name}`,
            }))
            .sort((a, b) => a.value.localeCompare(b.value))
    }, [])

    const languageOptions: OptionType[] = useMemo(() => {
        const map = new Map<string, string>()

        countryList.forEach((country) => {
            if (!country.languages) return

            Object.entries(country.languages).forEach(([code, name]) => {
                if (!map.has(code)) {
                    map.set(code, name)
                }
            })
        })

        return Array.from(map.entries())
            .map(([code, name]) => ({
                value: toDisplayLangCode(code),
                label: `${name} (${toDisplayLangCode(code)})`,
            }))
            .sort((a, b) => a.label.localeCompare(b.label))
    }, [])


    useEffect(() => {
        if (currency) {
            const found = currencyOptions.find(
                (c) => c.value === currency.toUpperCase()
            )
            setSelectedCurrency(
                found || { value: currency.toUpperCase(), label: currency.toUpperCase() }
            )
        }

        if (lng) {
            const found = languageOptions.find(
                (l) => l.value === lng.toUpperCase()
            )
            setSelectedLanguage(
                found || { value: lng.toUpperCase(), label: lng.toUpperCase() }
            )
        }
    }, [currency, lng])


    useEffect(() => {
        if (resetSignal === undefined) return

        setSelectedCurrency(null)
        setSelectedLanguage(null)

        lastEmittedRef.current = null
    }, [resetSignal])


    useEffect(() => {
        const payload = {
            currency_code: selectedCurrency?.value || "",
            language_code: selectedLanguage?.value || "",
        }

        if (
            lastEmittedRef.current?.currency_code === payload.currency_code &&
            lastEmittedRef.current?.language_code === payload.language_code
        ) {
            return
        }

        lastEmittedRef.current = payload

        onSelect(payload)

    }, [selectedCurrency, selectedLanguage, onSelect])


    const customStyles: React.ComponentProps<typeof Select<OptionType, false>>["styles"] = {
        control: (provided) => ({
            ...provided,
            minHeight: "44px",
            borderRadius: "8px",
            borderColor: "var(--color-secondary)",
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "#ffffff",
            "&:hover": {
                borderColor: "#9ca3af",
            },
        }),

        menu: (provided) => ({
            ...provided,
            backgroundColor: "var(--color-secondary)",
            zIndex: 9999,
        }),

        menuList: (provided) => ({
            ...provided,
            backgroundColor: "var(--color-secondary)",
        }),

        option: (provided, state) => ({
            ...provided,
            backgroundColor:
                state.isFocused || state.isSelected
                    ? "rgba(255,255,255,0.15)"
                    : "var(--color-secondary)",
            color: "#ffffff",
            cursor: "pointer",
        }),

        singleValue: (provided) => ({
            ...provided,
            color: "#ffffff",
        }),

        input: (provided) => ({
            ...provided,
            color: "#ffffff",
        }),

        placeholder: (provided) => ({
            ...provided,
            color: "rgba(255,255,255,0.75)",
        }),

        dropdownIndicator: (provided) => ({
            ...provided,
            color: "#ffffff",
        }),

        indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: "rgba(255,255,255,0.35)",
        }),
    }

    const handleCurrencyChange = (option: SingleValue<OptionType>) => {
        setSelectedCurrency(option)
    }

    const handleLanguageChange = (option: SingleValue<OptionType>) => {
        setSelectedLanguage(option)
    }

    return (
        <div className={`flex w-full flex-col gap-3 ${className}`}>
            <div className="flex w-full flex-col gap-3 md:flex-row">
                {showCurrency ? (
                    <div className="w-full      ">
                        <Select<OptionType, false>
                            menuIsOpen={menuIsOpen === "currency"}
                            options={currencyOptions}
                            value={selectedCurrency}
                            placeholder="Search currency..."
                            isSearchable
                            styles={customStyles}
                            onChange={handleCurrencyChange}
                            className="w-full min-w-0 text-nowrap hidescroll  "
                        />
                    </div>
                ) : null}

                {showLanguage ? (
                    <div className="w-full">
                        <Select<OptionType, false>
                            menuIsOpen={menuIsOpen === "language"}
                            options={languageOptions}
                            value={selectedLanguage}
                            placeholder="Search language..."
                            isSearchable
                            styles={customStyles}
                            onChange={handleLanguageChange}
                            className="w-full min-w-0 text-nowrap  hidescroll "
                        />
                    </div>
                ) : null}
            </div>

        </div>
    )
}