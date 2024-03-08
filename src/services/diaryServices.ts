import { DiaryEntry, NonSensitiveInfoDiaryEntry, Visibility, Weather } from '../types.js'
import diaryData from './diary.json'

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = () => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id);
    if (entry) {
        const { comment, ...entryWithoutComment } = entry;
        return entryWithoutComment;
    }
    return undefined;
}

export const getEntriesWithoutSensitiveInfo= (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) =>{
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}
