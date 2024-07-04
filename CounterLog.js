// 검색 기록

// import { atom } from 'recoil';

// 최근 검색한 기념일 리스트
// export const recentMemorialsState = atom({
//     key: 'recentMemorialsState',
//     default: []
// });

// 새로운 기념일 검색 기록 추가
// export function addMemorial(memorial) {
//     const { date, day, Dday } = memorial;
//     recentMemorialsState.current.unshift({ date, day, Dday }); // 최근 추가된 기념일을 배열의 맨 앞에 추가
//     console.log('Updated Memorials:', recentMemorialsState.current);
// }

// 최근 검색한 기념일 리스트 가져오기
// export function getRecentMemorials() {
//     return recentMemorialsState.current;
// }