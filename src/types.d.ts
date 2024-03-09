export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy"
export type Visibility = "great" | "good" | "ok" | "poor"

export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather
    visibility: Visibility,
    comment: string
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

interface SpecialDiaryEntry extends DiaryEntry {
    flightNumber: number
}
