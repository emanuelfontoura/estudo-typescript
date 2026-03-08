// VALUE IS STRING[] É O TYPE PREDICATE -> SE ESSA FUNÇÃO RETORNAR TRUE, ENTÃO O TIPO DE VALUE É STRING DE ARRAY 
function isStringArray2(value: unknown): value is string[]{    
    return Array.isArray(value) && value.every(v => typeof v === 'string')
}