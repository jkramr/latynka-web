// ------------------------------------ cyrillic to latin ------------------------------------ 

const lowerCaseVowels = {
    'а': 'a',
    'е': 'e',
    'и': 'y',
    'і': 'i',
    'о': 'o',
    'у': 'u',
    'є': 'je',
    'ї': 'ji',
    'ю': 'ju',
    'я': 'ja'
}

const upperCaseVowels = {
    'А': 'A',
    'Е': 'E',
    'И': 'Y',
    'І': 'I',
    'О': 'O',
    'У': 'U',
    'Є': 'Je',
    'Ї': 'Ji',
    'Ю': 'Ju',
    'Я': 'Ja',
}

const vowels = {
    ...lowerCaseVowels,
    ...upperCaseVowels
}

const lowerCaseConsonants = {
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'ґ': 'ĝ',
    'д': 'd',
    'ж': 'ž',
    'з': 'z',
    'й': 'j',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': 'č',
    'ш': 'š',
    'щ': 'šč',
}

const upperCaseConsonants = {
    'Б': 'B',
    'В': 'V',
    'Г': 'G',
    'Ґ': 'Ĝ',
    'Д': 'D',
    'Ж': 'Ž',
    'З': 'Z',
    'Й': 'J',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'Ф': 'F',
    'Х': 'H',
    'Ц': 'C',
    'Ч': 'Č',
    'Ш': 'Š',
    'Щ': 'Šč'
}

const consonants = {
    ...lowerCaseConsonants,
    ...upperCaseConsonants
};

const lowerCase = {
    ...lowerCaseVowels,
    ...lowerCaseConsonants,
    'ь': '\''
}

const upperCase = {
    ...upperCaseVowels,
    ...upperCaseConsonants,
    'Ь': '\''
};

const special = {
    'Ь': '\'',
    'ь': '\'',
    '@': '@',
    '"': '"'
};

const apostrophes = {
    '\'': '\'',
    'ʼ': '\'',
    '’': '\'',
    '`': '\'',
    '՚': '\'',
    '＇': '\'',
    '‘': '\'',
    'ʹ': '\'',
    'ꞌ': '\''
};

const russianAlert = {
    'ё': 'jo',
    'Ё': 'Jo',
    'э': 'e',
    'Э': 'E',
    'ы': 'y',
    'Ы': 'Y',
};

const matchingSingleLetters = {
    ...lowerCase,
    ...upperCase,
    ...special,
    ...apostrophes,
    ...russianAlert
}

const singleLetters = {
    ...lowerCase,
    ...upperCase,
    ...special,
    ...apostrophes,
    ...russianAlert
}

const digraphs = {
    //ё
    'йо': 'jo',
    'ЙО': 'JO',
    'йО': 'jO',
    'Йо': 'Jo',
    'ьо': 'jo',
    'ЬО': 'JO',
    'ьО': 'jO',
    'Ьо': 'Jo'
};

const joDigraph = {
    'йо': 'jo',
    'ЙО': 'JO',
    'йО': 'jO',
    'Йо': 'Jo'
};

const translatesToDigraph = {
    'є': 'je',
    'ї': 'ji',
    'щ': 'šč',
    'ю': 'ju',
    'я': 'ja',
    'Є': 'Je',
    'Ї': 'Ji',
    'Щ': 'Šč',
    'Ю': 'Ju',
    'Я': 'Ja'
};

const translatesToUpperCaseDigraph = {
    'Є': 'JE',
    'Ї': 'JI',
    'Щ': 'ŠČ',
    'Ю': 'JU',
    'Я': 'JA',

    //for consistency of combined or old texts
    'Ё': 'JO',
};

const cyrToLatDict = {
    //by size
    singleLetters,
    digraphs,
    //by type
    lowerCase,
    upperCase,
    vowels,
    consonants,
    lowerCaseVowels,
    lowerCaseConsonants,
    upperCaseVowels,
    upperCaseConsonants,
    special,
    apostrophes,
    joDigraph,
    translatesToDigraph,
    translatesToUpperCaseDigraph,
    matchingSingleLetters,
    //detect russian letters
    russianAlert,
    //match all
    all: {
        singleLetters,
        digraphs
    }
}

export { cyrToLatDict };