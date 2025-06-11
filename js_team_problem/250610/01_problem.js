/* 달리기 경주 */

function solution(players, callings) {
    var indexMap = new Map();

    for (let i = 0; i < players.length; i++) {
        indexMap.set(players[i], i)
    }

    for (playerName of callings) {
        const currentIndex = indexMap.get(playerName); // 현재 인덱스
        const prevIndex = currentIndex - 1; // 현재 인덱스 보다 하나 앞에 있는 인덱스

        const temp = players[prevIndex];
        players[prevIndex] = players[currentIndex];
        players[currentIndex] = temp;

        indexMap.set(playerName, prevIndex);
        indexMap.set(temp, currentIndex);
    }

    return players;
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"],["kai", "kai", "mine", "mine"]))