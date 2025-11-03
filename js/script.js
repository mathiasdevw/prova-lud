const supabaseUrl = 'https://cptjkajmrsftwuxcysoe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwdGprYWptcnNmdHd1eGN5c29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MjY0OTgsImV4cCI6MjA3NzUwMjQ5OH0.6nVpZSAVhrThZrDcWfJnZJtcImDv78n9VhPYljsFUH0';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const questions = [
    {
        question: "O que são chamadas de sistema (system calls)?",
        options: [
            "Funções que permitem a comunicação entre aplicações e o núcleo do sistema operacional",
            "Comandos utilizados apenas por administradores de sistema",
            "Protocolos de comunicação entre diferentes computadores",
            "Funções específicas para programação web"
        ],
        correct: 0,
        explanation: "Chamadas de sistema são interfaces que permitem que programas solicitem serviços do sistema operacional, como acesso a arquivos, criação de processos, etc."
    },
    {
        question: "Qual é a principal função das chamadas de sistema?",
        options: [
            "Servir como ponte entre software e hardware",
            "Acelerar o processamento de dados",
            "Substituir linguagens de programação",
            "Criar interfaces gráficas"
        ],
        correct: 0,
        explanation: "As chamadas de sistema atuam como ponte entre o software e o hardware, permitindo que aplicações aproveitem os recursos do sistema de maneira controlada."
    },
    {
        question: "O que é um processo em sistemas operacionais?",
        options: [
            "Um programa em execução, incluindo seus recursos como memória e tempo de CPU",
            "Um arquivo de configuração do sistema",
            "Um tipo específico de thread",
            "Um comando executado no terminal"
        ],
        correct: 0,
        explanation: "Processos são programas em execução, cada um com seu próprio espaço de memória e recursos alocados pelo sistema operacional."
    },
    {
        question: "O que são threads?",
        options: [
            "Unidades de execução dentro de um processo que compartilham recursos",
            "Processos independentes que não compartilham recursos",
            "Tipos especiais de arquivos do sistema",
            "Comandos de sistema operacional"
        ],
        correct: 0,
        explanation: "Threads são unidades de execução leves dentro de um processo, compartilhando o mesmo espaço de endereçamento e recursos."
    },
    {
        question: "Qual é a principal diferença entre processos e threads?",
        options: [
            "Processos têm espaços de memória separados, threads compartilham memória",
            "Threads são mais pesados que processos",
            "Processos não podem se comunicar entre si",
            "Threads não podem ser executadas simultaneamente"
        ],
        correct: 0,
        explanation: "A principal diferença é que processos são isolados com espaços de memória separados, enquanto threads compartilham o mesmo espaço de memória do processo."
    },
    {
        question: "Qual é uma vantagem das threads sobre os processos?",
        options: [
            "Menor overhead na criação e comunicação",
            "Maior isolamento e segurança",
            "Não precisam de sincronização",
            "Podem executar em computadores diferentes"
        ],
        correct: 0,
        explanation: "Threads têm menor overhead porque compartilham recursos do processo, não necessitando de alocação separada de memória."
    },
    {
        question: "Qual mecanismo NÃO é usado para comunicação entre processos?",
        options: [
            "Variáveis globais compartilhadas diretamente",
            "Pipes (tubos)",
            "Memória compartilhada",
            "Filas de mensagens"
        ],
        correct: 0,
        explanation: "Processos não compartilham variáveis globais diretamente porque têm espaços de memória separados. A comunicação requer mecanismos específicos como pipes, memória compartilhada ou filas de mensagens."
    },
    {
        question: "O que é uma condição de corrida (race condition)?",
        options: [
            "Quando múltiplas threads acessam e modificam dados compartilhados simultaneamente, resultando em comportamento imprevisível",
            "Quando um processo consome toda a CPU",
            "Quando o sistema operacional não consegue escalonar processos",
            "Quando há deadlock entre processos"
        ],
        correct: 0,
        explanation: "Condição de corrida ocorre quando o resultado de uma operação depende da sequência ou timing de execução de threads/processos, podendo levar a inconsistências."
    },
    {
        question: "Qual ferramenta é usada para restringir chamadas de sistema em contêineres?",
        options: [
            "seccomp",
            "firewall",
            "antivírus",
            "compilador"
        ],
        correct: 0,
        explanation: "O seccomp (secure computing mode) é um mecanismo de segurança do Linux que permite filtrar chamadas de sistema, restringindo quais syscalls um processo pode executar."
    },
    {
        question: "Qual chamada de sistema é usada para criar processos isolados em contêineres?",
        options: [
            "clone()",
            "fork()",
            "exec()",
            "wait()"
        ],
        correct: 0,
        explanation: "A syscall clone() é usada para criar processos com namespaces isolados, fundamental para a criação de contêineres."
    },
    {
        question: "O que é um deadlock?",
        options: [
            "Situação onde dois ou mais processos/threads estão bloqueados esperando por recursos mantidos pelos outros",
            "Quando um processo termina sua execução",
            "Quando o sistema operacional reinicia",
            "Quando há falta de memória no sistema"
        ],
        correct: 0,
        explanation: "Deadlock é uma situação de impasse onde processos/threads ficam bloqueados indefinidamente, cada um esperando por um recurso mantido por outro."
    },
    {
        question: "Qual padrão de design é usado para gerenciar threads de forma eficiente?",
        options: [
            "Pool de Threads",
            "Singleton",
            "Factory",
            "Observer"
        ],
        correct: 0,
        explanation: "O padrão Pool de Threads mantém um conjunto de threads reutilizáveis, evitando a sobrecarga de criar e destruir threads frequentemente."
    },
    {
        question: "Qual é uma desvantagem das threads em relação aos processos?",
        options: [
            "Maior propensão a condições de corrida e deadlocks",
            "Consomem mais memória",
            "São mais lentas para criar",
            "Não podem ser executadas em paralelo"
        ],
        correct: 0,
        explanation: "Como threads compartilham memória, estão mais sujeitas a problemas de concorrência como condições de corrida e deadlocks."
    },
    {
        question: "Qual mecanismo é usado para sincronização entre threads?",
        options: [
            "Mutex",
            "Pipe",
            "Socket",
            "Signal"
        ],
        correct: 0,
        explanation: "Mutex (mutual exclusion) é um mecanismo de sincronização que garante que apenas uma thread por vez acesse um recurso compartilhado."
    },
    {
        question: "Qual syscall é usada para alterar o diretório raiz de um processo?",
        options: [
            "chroot()",
            "cd()",
            "pwd()",
            "mkdir()"
        ],
        correct: 0,
        explanation: "A syscall chroot() altera o diretório raiz aparente de um processo, sendo usada para isolamento em contêineres."
    }
];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const playerNameInput = document.getElementById('player-name');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const feedback = document.getElementById('feedback');
const progress = document.getElementById('progress');
const timer = document.getElementById('timer');

const finalScore = document.getElementById('final-score');
const percentage = document.getElementById('percentage');
const performanceMessage = document.getElementById('performance-message');

const rankingList = document.getElementById('ranking-list');
const finalRanking = document.getElementById('final-ranking');

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let score = 0;
let timeLeft = 20 * 60;
let timerInterval;
let playerName = '';

function init() {
    loadRanking();
    startBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    homeBtn.addEventListener('click', goHome);
}

async function loadRanking() {
    try {
        const { data: ranking, error } = await supabase
            .from('ranking')
            .select('*')
            .order('score', { ascending: false })
            .order('timestamp', { ascending: false })
            .limit(10);

        if (error) {
            console.error('Erro ao carregar ranking:', error);
            const storedRanking = localStorage.getItem('quizRanking');
            const fallbackRanking = storedRanking ? JSON.parse(storedRanking) : [];
            displayRanking(fallbackRanking, rankingList);
            return;
        }

        displayRanking(ranking, rankingList);
    } catch (error) {
        console.error('Erro ao carregar ranking:', error);
        const storedRanking = localStorage.getItem('quizRanking');
        const fallbackRanking = storedRanking ? JSON.parse(storedRanking) : [];
        displayRanking(fallbackRanking, rankingList);
    }
}

function displayRanking(ranking, container) {
    if (ranking.length === 0) {
        container.innerHTML = '<p>Nenhum resultado ainda. Seja o primeiro!</p>';
        return;
    }

    let html = '<table class="ranking-table">';
    html += '<tr><th class="ranking-position">#</th><th class="ranking-name">Nome</th><th class="ranking-score">Acertos</th><th class="ranking-percentage">%</th></tr>';

    ranking.forEach((entry, index) => {
        html += `<tr${entry.current ? ' class="current-user"' : ''}>`;
        html += `<td class="ranking-position">${index + 1}</td>`;
        html += `<td class="ranking-name">${entry.name}</td>`;
        html += `<td class="ranking-score">${entry.score}/15</td>`;
        html += `<td class="ranking-percentage">${entry.percentage}%</td>`;
        html += '</tr>';
    });

    html += '</table>';
    container.innerHTML = html;
}

function startQuiz() {
    playerName = playerNameInput.value.trim();

    if (!playerName) {
        alert('Por favor, digite seu nome para começar o simulado.');
        return;
    }

    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);
    score = 0;
    timeLeft = 20 * 60;

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');

    startTimer();

    showQuestion();
}

function startTimer() {
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent = `Tempo restante: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft < 60) {
        timer.style.color = 'var(--danger)';
    } else if (timeLeft < 300) {
        timer.style.color = 'var(--warning)';
    }
}

function showQuestion() {
    const question = questions[currentQuestion];

    questionText.textContent = `${currentQuestion + 1}. ${question.question}`;

    optionsList.innerHTML = '';
    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.className = 'option';
        if (userAnswers[currentQuestion] === index) {
            li.classList.add('selected');
        }
        li.textContent = option;
        li.addEventListener('click', () => selectOption(index));
        optionsList.appendChild(li);
    });

    progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

    prevBtn.disabled = currentQuestion === 0;

    feedback.className = 'feedback';
    feedback.textContent = '';

    if (userAnswers[currentQuestion] !== null) {
        showFeedback();
    }
}

function selectOption(optionIndex) {
    userAnswers[currentQuestion] = optionIndex;

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === optionIndex) {
            option.classList.add('selected');
        }
    });

    showFeedback();
}

function showFeedback() {
    const question = questions[currentQuestion];
    const userAnswer = userAnswers[currentQuestion];

    if (userAnswer === null) return;

    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === userAnswer && userAnswer !== question.correct) {
            option.classList.add('incorrect');
        }
    });

    feedback.textContent = question.explanation;
    feedback.className = `feedback ${userAnswer === question.correct ? 'correct' : 'incorrect'}`;
}

function nextQuestion() {
    if (userAnswers[currentQuestion] === null) {
        alert('Por favor, selecione uma resposta antes de continuar.');
        return;
    }

    const question = questions[currentQuestion];
    const userAnswer = userAnswers[currentQuestion];

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === userAnswer && userAnswer !== question.correct) {
            option.classList.add('incorrect');
        }
    });

    feedback.textContent = question.explanation;
    feedback.className = `feedback ${userAnswer === question.correct ? 'correct' : 'incorrect'}`;

    options.forEach(option => {
        option.style.pointerEvents = 'none';
        option.style.opacity = '0.7';
    });

    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            finishQuiz();
        }
    }, 2000);
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function finishQuiz() {
    clearInterval(timerInterval);

    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
            score++;
        }
    });

    const percentageScore = Math.round((score / questions.length) * 100);

    finalScore.textContent = `${score}/${questions.length}`;
    percentage.textContent = `${percentageScore}%`;

    if (percentageScore >= 90) {
        performanceMessage.textContent = 'Excelente! Você domina o assunto!';
        performanceMessage.style.color = 'var(--success)';
    } else if (percentageScore >= 70) {
        performanceMessage.textContent = 'Bom trabalho! Você tem um bom conhecimento.';
        performanceMessage.style.color = 'var(--primary)';
    } else if (percentageScore >= 50) {
        performanceMessage.textContent = 'Resultado regular. Vale a pena revisar o conteúdo.';
        performanceMessage.style.color = 'var(--warning)';
    } else {
        performanceMessage.textContent = 'É recomendável estudar mais o conteúdo.';
        performanceMessage.style.color = 'var(--danger)';
    }

    saveToRanking(playerName, score, percentageScore);

    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
}

async function saveToRanking(name, score, percentage) {
    try {
        const { data, error } = await supabase
            .from('ranking')
            .insert([
                {
                    name: name,
                    score: score,
                    percentage: percentage
                }
            ]);

        if (error) {
            console.error('Erro ao salvar no Supabase:', error);
            saveToLocalStorage(name, score, percentage);
            return;
        }

        await loadRanking();
        displayRanking(await getRankingFromSupabase(), finalRanking);

    } catch (error) {
        console.error('Erro ao salvar ranking:', error);
        saveToLocalStorage(name, score, percentage);
    }
}

function saveToLocalStorage(name, score, percentage) {
    const storedRanking = localStorage.getItem('quizRanking');
    const ranking = storedRanking ? JSON.parse(storedRanking) : [];

    const newEntry = {
        name: name,
        score: score,
        percentage: percentage,
        timestamp: new Date().toISOString(),
        current: true
    };

    ranking.forEach(entry => entry.current = false);
    ranking.push(newEntry);

    ranking.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    if (ranking.length > 10) ranking.splice(10);

    localStorage.setItem('quizRanking', JSON.stringify(ranking));
    displayRanking(ranking, finalRanking);
}

async function getRankingFromSupabase() {
    try {
        const { data: ranking, error } = await supabase
            .from('ranking')
            .select('*')
            .order('score', { ascending: false })
            .order('timestamp', { ascending: false })
            .limit(10);

        if (error) {
            console.error('Erro ao obter ranking:', error);
            return [];
        }

        return ranking;
    } catch (error) {
        console.error('Erro ao obter ranking:', error);
        return [];
    }
}

function restartQuiz() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');

    loadRanking();
}

function goHome() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');

    loadRanking();
}

init();
