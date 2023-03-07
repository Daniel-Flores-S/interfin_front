/* eslint-disable */


export interface SettingsT {
    autoPlay: boolean,
    animation: "fade" | "slide",
    indicators: boolean,
    duration: number,
    navButtonsAlwaysVisible: boolean,
    navButtonsAlwaysInvisible: boolean,
    fullHeightHover: boolean,
    cycleNavigation: boolean,
    swipe: boolean,
    [key: string]: any
}

export const DefaultSettingsT: SettingsT = {
    autoPlay: false,
    animation: "fade",
    indicators: false,
    duration: 500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true
}
export const DefaultSettingsT2: SettingsT = {
    animation: "fade",
    autoPlay: false,
    cycleNavigation: true,
    duration: 1000,
    fullHeightHover: true,
    indicators: false,
    navButtonsAlwaysInvisible: false,
    navButtonsAlwaysVisible: true,
    swipe: true,
}

