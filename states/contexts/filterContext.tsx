"use client"
import { SORT_OPTIONS } from "@/constants"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type filter = {
    search: string,
    sortBy: string,
    categories: string[],
    tags: string[],
};

type initFiltersType = {
    filters: filter,
    setFilters: Dispatch<SetStateAction<filter>>
}

export const initFilters: initFiltersType = {
    filters: {
        search: "",
        sortBy: SORT_OPTIONS.default,
        categories: [],
        tags: []
    },
    setFilters: () => { }
}

const FilterContext = createContext(initFilters);

const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFilters] = useState<filter>(initFilters.filters);

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilters = () => useContext(FilterContext);

export default FilterProvider