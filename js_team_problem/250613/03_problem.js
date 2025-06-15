/* 
서버 증설 횟수 
게임 이용자의 수 : players
서버 한 대로 감당할 수 있는 최대 이용자의 수 : m
서버 한 대가 운영 가능한 시간 : k
*/


function solution(players, m, k) {
    return [...players].map(player => Math.floor(player / m))


}

console.log(solution([0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5], 3))