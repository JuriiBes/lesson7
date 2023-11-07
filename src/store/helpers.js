export function getCorrectScore(score) {
    let result
    if (score >= 10) result = 5
    else if (score >= 7) result = 4
    else if (score >= 4) result = 3
    else result = 2
    return result
}
