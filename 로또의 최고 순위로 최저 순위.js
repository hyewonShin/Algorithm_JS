function solution(lottos, win_nums) {

    const correctCnt = lottos.filter(c => win_nums.includes(c)).length;
    const zero = lottos.filter(z => z === 0).length;

    const minCorrect = checkRanking(correctCnt);
    const maxCorrcet = checkRanking(correctCnt + zero);
    return [maxCorrcet,minCorrect];
    
//당첨 갯수 당첨 순위로 변경하는 함수
    function checkRanking(numOfWinners) {
        if (numOfWinners === 6) {
            return 1;
        } else if (numOfWinners === 5) {
            return 2;
        } else if (numOfWinners === 4) {
            return 3;
        } else if (numOfWinners === 3) {
            return 4;
        } else if (numOfWinners === 2) {
            return 5;
        } else {
            return 6;
        }
    }
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));


