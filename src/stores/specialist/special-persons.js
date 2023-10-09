import {ref} from 'vue'
import { defineStore } from "pinia";
import specialist4 from '@/assets/img/specialist-4.png'

export const specialPersonsStore = defineStore('special-persons', ()=> {
    const specialPersons = ref([
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
        {
            img: specialist4,
            title: 'Бекетова Екатерина Николаевна',
            text: 'Дерматовенеролог cтаж 11 лет'
        },
    ])


    return {
        specialPersons
    }

})