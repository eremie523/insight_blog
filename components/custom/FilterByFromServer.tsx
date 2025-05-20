"use client"
import { CATEGORIES } from '@/constants/menu'
import { useFilters } from '@/states/contexts/filterContext'
import React, { useEffect, useState } from 'react'

export const FilterByCategories = () => {
    const [categories, setCategories] = useState<{
        id: number,
        title: string,
        noOfArticles: number,
        createdBy: number
    }[]>([])

    useEffect(() => {
        setCategories(() => {
            return CATEGORIES.map((category) => {
                return { ...category, noOfArticles: 0, createdBy: 0 }
            })
        })
    }, [])

    return (
        <section aria-label="filter-by-category" className='flex flex-col gap-2 w-full'>
            <span className=''>Categories</span>
            <div className='flex flex-col w-full border-b border-dark-tertiary/40 py-2'>
                {categories.map(category => {
                    const identifier = "category_" + category.title.replace(" ", "_").toLowerCase();
                    return (
                        <label key={category.id} htmlFor={identifier} className='flex flex-row gap-2 py-1 cursor-pointer'>
                            <input name={identifier} id={identifier} type="checkbox" />
                            <span className='capitalize'>{category.title}</span>
                        </label>
                    );
                })
                }
            </div>
        </section>
    )
}

export const FilterByTags = () => {
    const { setFilters, filters: { tags: tg } } = useFilters();

    const [tags, setTags] = useState<{
        id: number,
        value: string,
        noOfArticles: number,
    }[]>([])

    useEffect(() => {
        setTags(() => {
            return CATEGORIES.map((category) => {
                return { ...category, value: category.title, noOfArticles: 0 }
            })
        })
    }, [])

    return (
        <section aria-label="filter-by-tag" className='flex flex-col gap-2 w-full'>
            <span className=''>Tags</span>
            <div className='flex flex-wrap gap-2 w-full border-b border-dark-tertiary/40 py-2'>
                {
                    tags.map(tag => {
                        const identifier = "tag_" + tag.value.replace(" ", "_").toLowerCase()
                        return (
                            <label key={tag.id} htmlFor={identifier} className='filter-tag'>
                                <input
                                    {...((tg.filter((x) => x.toLowerCase() == tag.value)).length > 0) && { checked: true }}
                                    id={identifier}
                                    name={"tags"}
                                    type='checkbox'
                                    className='hidden'
                                    onClick={(e) => {
                                        const isChecked = e.currentTarget.checked;

                                        setFilters(filters => {
                                            let Tags = filters.tags;

                                            if (isChecked) {
                                                Tags.push(tag.value);
                                            } else {
                                                Tags = Tags.filter((Tag) => tag.value != Tag);
                                            }

                                            return { ...filters, tags: Tags }
                                        })
                                    }}
                                />
                                <span className='capitalize border border-dark-tertiary/40 py-1 px-2 rounded-lg text-xs font-semibold text-dark-secondary' > {tag.value}</span>
                            </label>
                        )
                    })
                }
            </div >
        </section >
    )
}