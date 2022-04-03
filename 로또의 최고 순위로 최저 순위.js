function solution(lottos, win_nums) {
    let answer = [];
    
    let correct = lottos.filter(lotto=>win_nums.includes(lotto)).length;
    let zero = lottos.filter(lotto=>lotto === 0).length;
    
    let min = correct;
    let max = correct + zero;
    
    let minimum = checkRanking(min);
    let maximum = checkRanking(max);
    
    return[maximum,minimum];
    
    function checkRanking(aaa){
        if(aaa === 6){
            return 1;
        }else if(aaa === 5){
            return 2;
        }else if(aaa === 4){
            return 3;
        }else if(aaa === 3){
            return 4;
        }else if(aaa === 2){
            return 5;
        }else{
            return 6;    
        }
    }
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));


