let array_1 = [

    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli, '],

    ['ghermirli', 'e'],
    
    ['gondor', 'mark'],

];

let array_2 = [

    [['trovarli,']],
    
    ['tu,' , 'sciocchi',],
    
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    
    ['nel', ['fuggite', 'gandalf']],
    
    [['domarli,', 'passare'], 'buio'],
    
    ];

    let frase = array_1[0][0] + ' ' + array_1[1][0] + ' ' + array_1[0][1] + ' ' + array_2[4][0][0] + ' ' 
    let frase2 = array_1[0][0] + ' ' + array_1[1][0]  + ' ' + array_1[0][1] + ' ' + array_1[1][1] + ' '  
    let frase3 = array_1[0][0] + ' ' + array_1[1][0]  + ' ' + array_1[0][1] + ' '  + array_1[2][0] + ' ' + array_1[2][1] + ' '
    let frase4 = array_2[3][0] + ' ' + array_2[4][1] + ' ' + array_1[0][2]
   console . log ( frase + frase2 + frase3 + frase4 )