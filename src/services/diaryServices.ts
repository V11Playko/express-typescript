import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry} from '../utils/types.js'
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
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    };
    diaries.push(newDiary);
    return newDiary;
}