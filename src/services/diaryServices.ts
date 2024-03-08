import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types.js'
import diaryData from './diary.json'

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = () => diaries

export const getEntriesWithoutSensitiveInfo= (): NonSensitiveInfoDiaryEntry[] => diaries

export const addEntry = () => null 