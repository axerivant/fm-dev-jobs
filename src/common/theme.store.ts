import { writable, type Writable } from 'svelte/store'

const Theme: Writable<ThemeType> = writable('light')

export default Theme
