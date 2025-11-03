export interface Question {
  id: number;
  type: 'multiple-choice' | 'text-input';
  category: 'Strings' | 'Lists' | 'Sets' | 'ZSets';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
}

export const questions: Question[] = [
  // Strings (6 questions)
  {
    id: 1,
    type: 'multiple-choice',
    category: 'Strings',
    question: 'Qual comando define o tempo de vida (TTL) de uma chave?',
    options: ['A) SETEX', 'B) EXPIRE', 'C) SETTTL', 'D) PERSIST'],
    correctAnswer: 'B',
    explanation: 'EXPIRE key segundos define TTL para a chave.',
    hint: 'Este comando define quanto tempo uma chave deve existir.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    category: 'Strings',
    question: 'Qual comando incrementa o valor numérico de uma chave string em 1?',
    options: ['A) DECR', 'B) INCR', 'C) ADD', 'D) PLUS'],
    correctAnswer: 'B',
    explanation: 'INCR key incrementa o valor numérico da chave em 1.',
    hint: 'Comando usado para contadores.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    category: 'Strings',
    question: 'Qual comando decrementa o valor numérico de uma chave string em 1?',
    options: ['A) INCR', 'B) DECR', 'C) SUB', 'D) MINUS'],
    correctAnswer: 'B',
    explanation: 'DECR key decrementa o valor numérico da chave em 1.',
    hint: 'Oposto do comando de incrementar.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    category: 'Strings',
    question: 'Qual comando retorna o comprimento de uma string?',
    options: ['A) LEN', 'B) STRLEN', 'C) SIZE', 'D) LENGTH'],
    correctAnswer: 'B',
    explanation: 'STRLEN key retorna o comprimento da string.',
    hint: 'Comando para obter o tamanho da string.'
  },
  {
    id: 5,
    type: 'text-input',
    category: 'Strings',
    question: 'Cite três comandos de Strings diferentes. Escreva no formato: Comando1, Comando2, Comando3',
    correctAnswer: 'SET, INCR, STRLEN',
    explanation: 'Comandos básicos de Strings: SET (definir), INCR (incrementar), STRLEN (comprimento).',
    hint: 'Pense nos comandos mais comuns para manipular strings.'
  },
  {
    id: 6,
    type: 'multiple-choice',
    category: 'Strings',
    question: 'Qual comando remove uma chave do Redis?',
    options: ['A) SET', 'B) GET', 'C) DEL', 'D) EXPIRE'],
    correctAnswer: 'C',
    explanation: 'DEL key remove uma chave do Redis.',
    hint: 'Comando para deletar chaves.'
  },

  // Lists (9 questions)
  {
    id: 7,
    type: 'multiple-choice',
    category: 'Lists',
    question: 'Qual comando adiciona um ou mais elementos no início de uma lista?',
    options: ['A) RPUSH', 'B) LPUSH', 'C) LPOP', 'D) RPOP'],
    correctAnswer: 'B',
    explanation: 'LPUSH key value [value ...] adiciona elementos no início da lista.',
    hint: 'L significa Left (esquerda).'
  },
  {
    id: 8,
    type: 'multiple-choice',
    category: 'Lists',
    question: 'Qual comando adiciona um ou mais elementos no final de uma lista?',
    options: ['A) LPUSH', 'B) RPUSH', 'C) LPOP', 'D) RPOP'],
    correctAnswer: 'B',
    explanation: 'RPUSH key value [value ...] adiciona elementos no final da lista.',
    hint: 'R significa Right (direita).'
  },
  {
    id: 9,
    type: 'multiple-choice',
    category: 'Lists',
    question: 'Qual comando remove e retorna o primeiro elemento de uma lista?',
    options: ['A) RPUSH', 'B) LPOP', 'C) RPOP', 'D) LRANGE'],
    correctAnswer: 'B',
    explanation: 'LPOP key remove e retorna o primeiro elemento da lista.',
    hint: 'Remove do início da lista.'
  },
  {
    id: 10,
    type: 'text-input',
    category: 'Lists',
    question: 'Cite três comandos de Lists diferentes. Escreva no formato: Comando1, Comando2, Comando3',
    correctAnswer: 'LPUSH, RPOP, LLEN',
    explanation: 'Comandos básicos de Lists: LPUSH (adicionar início), RPOP (remover fim), LLEN (comprimento).',
    hint: 'Pense nos comandos mais comuns para manipular listas.'
  },
  {
    id: 11,
    type: 'multiple-choice',
    category: 'Lists',
    question: 'Qual comando remove e retorna o último elemento de uma lista?',
    options: ['A) LPUSH', 'B) RPOP', 'C) LPOP', 'D) LLEN'],
    correctAnswer: 'B',
    explanation: 'RPOP key remove e retorna o último elemento da lista.',
    hint: 'Remove do final da lista.'
  },
  {
    id: 12,
    type: 'multiple-choice',
    category: 'Lists',
    question: 'Qual comando retorna um subconjunto de elementos de uma lista?',
    options: ['A) LLEN', 'B) LRANGE', 'C) LINDEX', 'D) LREM'],
    correctAnswer: 'B',
    explanation: 'LRANGE key start stop retorna um subconjunto de elementos da lista.',
    hint: 'Comando para obter parte da lista.'
  },
  {
    id: 13,
    type: 'multiple-choice',
    category: 'Lists',
    question: 'Qual comando retorna o número de elementos em uma lista?',
    options: ['A) LRANGE', 'B) LLEN', 'C) LTRIM', 'D) LINDEX'],
    correctAnswer: 'B',
    explanation: 'LLEN key retorna o número de elementos na lista.',
    hint: 'Comando para contar elementos.'
  },
  {
    id: 14,
    type: 'multiple-choice',
    category: 'Lists',
    question: 'Qual comando remove elementos iguais a um valor específico de uma lista?',
    options: ['A) LTRIM', 'B) LREM', 'C) LINDEX', 'D) LLEN'],
    correctAnswer: 'B',
    explanation: 'LREM key count value remove elementos iguais a value da lista.',
    hint: 'Comando para remover valores específicos.'
  },
  {
    id: 15,
    type: 'text-input',
    category: 'Lists',
    question: 'Cite três comandos de Lists diferentes. Escreva no formato: Comando1, Comando2, Comando3',
    correctAnswer: 'LRANGE, LTRIM, LINDEX',
    explanation: 'Comandos de manipulação de Lists: LRANGE (subconjunto), LTRIM (trim), LINDEX (índice).',
    hint: 'Pense em comandos para navegar e modificar listas.'
  },

  // Sets (9 questions)
  {
    id: 16,
    type: 'multiple-choice',
    category: 'Sets',
    question: 'Qual comando adiciona um ou mais membros a um conjunto?',
    options: ['A) SREM', 'B) SADD', 'C) SMEMBERS', 'D) SISMEMBER'],
    correctAnswer: 'B',
    explanation: 'SADD key member [member ...] adiciona membros ao conjunto.',
    hint: 'Comando para adicionar elementos ao set.'
  },
  {
    id: 17,
    type: 'multiple-choice',
    category: 'Sets',
    question: 'Qual comando remove um ou mais membros de um conjunto?',
    options: ['A) SADD', 'B) SREM', 'C) SCARD', 'D) SUNION'],
    correctAnswer: 'B',
    explanation: 'SREM key member [member ...] remove membros do conjunto.',
    hint: 'Comando para remover elementos do set.'
  },
  {
    id: 18,
    type: 'multiple-choice',
    category: 'Sets',
    question: 'Qual comando retorna todos os membros de um conjunto?',
    options: ['A) SISMEMBER', 'B) SMEMBERS', 'C) SCARD', 'D) SINTER'],
    correctAnswer: 'B',
    explanation: 'SMEMBERS key retorna todos os membros do conjunto.',
    hint: 'Comando para ver todos os elementos.'
  },
  {
    id: 19,
    type: 'multiple-choice',
    category: 'Sets',
    question: 'Qual comando verifica se um valor é membro de um conjunto?',
    options: ['A) SMEMBERS', 'B) SISMEMBER', 'C) SCARD', 'D) SDIFF'],
    correctAnswer: 'B',
    explanation: 'SISMEMBER key member verifica se member pertence ao conjunto.',
    hint: 'Comando para verificar membership.'
  },
  {
    id: 20,
    type: 'text-input',
    category: 'Sets',
    question: 'Cite três comandos de Sets diferentes. Escreva no formato: Comando1, Comando2, Comando3',
    correctAnswer: 'SADD, SMEMBERS, SCARD',
    explanation: 'Comandos básicos de Sets: SADD (adicionar), SMEMBERS (ver membros), SCARD (contar).',
    hint: 'Pense nos comandos mais comuns para manipular conjuntos.'
  },
  {
    id: 21,
    type: 'multiple-choice',
    category: 'Sets',
    question: 'Qual comando retorna o número de membros em um conjunto?',
    options: ['A) SMEMBERS', 'B) SCARD', 'C) SISMEMBER', 'D) SMOVE'],
    correctAnswer: 'B',
    explanation: 'SCARD key retorna o número de membros no conjunto.',
    hint: 'Comando para contar elementos no set.'
  },
  {
    id: 22,
    type: 'multiple-choice',
    category: 'Sets',
    question: 'Qual comando retorna a união de dois ou mais conjuntos?',
    options: ['A) SINTER', 'B) SUNION', 'C) SDIFF', 'D) SMOVE'],
    correctAnswer: 'B',
    explanation: 'SUNION key [key ...] retorna a união dos conjuntos.',
    hint: 'Comando para combinar conjuntos.'
  },
  {
    id: 23,
    type: 'multiple-choice',
    category: 'Sets',
    question: 'Qual comando retorna a interseção de dois ou mais conjuntos?',
    options: ['A) SUNION', 'B) SINTER', 'C) SDIFF', 'D) SCARD'],
    correctAnswer: 'B',
    explanation: 'SINTER key [key ...] retorna a interseção dos conjuntos.',
    hint: 'Comando para elementos comuns.'
  },
  {
    id: 24,
    type: 'multiple-choice',
    category: 'Sets',
    question: 'Qual comando move um membro de um conjunto para outro?',
    options: ['A) SADD', 'B) SMOVE', 'C) SREM', 'D) SCARD'],
    correctAnswer: 'B',
    explanation: 'SMOVE source destination member move member de source para destination.',
    hint: 'Comando para mover elementos entre sets.'
  },

  // ZSets (6 questions)
  {
    id: 25,
    type: 'text-input',
    category: 'ZSets',
    question: 'Cite três comandos de ZSets diferentes. Escreva no formato: Comando1, Comando2, Comando3',
    correctAnswer: 'ZADD, ZRANGE, ZSCORE',
    explanation: 'Comandos básicos de ZSets: ZADD (adicionar), ZRANGE (range), ZSCORE (score).',
    hint: 'Pense nos comandos mais comuns para sorted sets.'
  },
  {
    id: 26,
    type: 'multiple-choice',
    category: 'ZSets',
    question: 'Qual comando adiciona um ou mais membros com scores a um sorted set?',
    options: ['A) ZREM', 'B) ZADD', 'C) ZRANGE', 'D) ZRANK'],
    correctAnswer: 'B',
    explanation: 'ZADD key score member [score member ...] adiciona membros com scores ao sorted set.',
    hint: 'Comando para adicionar elementos ordenados.'
  },
  {
    id: 27,
    type: 'multiple-choice',
    category: 'ZSets',
    question: 'Qual comando remove um ou mais membros de um sorted set?',
    options: ['A) ZADD', 'B) ZREM', 'C) ZCARD', 'D) ZSCORE'],
    correctAnswer: 'B',
    explanation: 'ZREM key member [member ...] remove membros do sorted set.',
    hint: 'Comando para remover elementos do zset.'
  },
  {
    id: 28,
    type: 'multiple-choice',
    category: 'ZSets',
    question: 'Qual comando retorna elementos do menor para o maior score?',
    options: ['A) ZREVRANGE', 'B) ZRANGE', 'C) ZRANK', 'D) ZSCORE'],
    correctAnswer: 'B',
    explanation: 'ZRANGE retorna elementos do menor para o maior score.',
    hint: 'Comando para range ascendente.'
  },
  {
    id: 29,
    type: 'multiple-choice',
    category: 'ZSets',
    question: 'Qual comando retorna a posição de um membro no sorted set?',
    options: ['A) ZSCORE', 'B) ZRANK', 'C) ZCARD', 'D) ZINCRBY'],
    correctAnswer: 'B',
    explanation: 'ZRANK key member retorna a posição (rank) do membro.',
    hint: 'Comando para obter ranking.'
  },
  {
    id: 30,
    type: 'multiple-choice',
    category: 'ZSets',
    question: 'Qual comando incrementa o score de um membro em um valor específico?',
    options: ['A) ZADD', 'B) ZINCRBY', 'C) ZREM', 'D) ZCARD'],
    correctAnswer: 'B',
    explanation: 'ZINCRBY key increment member incrementa o score do membro.',
    hint: 'Comando para aumentar score.'
  }
];
