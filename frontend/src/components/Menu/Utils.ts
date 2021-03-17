function spaceInNumber(nbr: number): string {
    let result: string = '';
    let nbrForArray = `${nbr}`.split('').reverse();
    
    nbrForArray.forEach((n, i) => {
        if (i % 3=== 0) result += ' ';
        result += n;
    });

    return result.split('').reverse().join('');
}

export { spaceInNumber }