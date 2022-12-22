import { writable, type Writable } from 'svelte/store'
type ThemeType = 'light' | 'dark'

const Theme: Writable<ThemeType> = writable('light')

export default Theme
