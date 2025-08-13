document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DATA STRUCTURE ---
    const courseData = [
        {
            module: 1,
            title: "Fundamentos y Topologías de Red",
            summary: "Cubre las funciones esenciales de los componentes de red como la NIC, las características de las topologías físicas (malla, bus, estrella) y lógicas (anillo), y las propiedades de los medios de transmisión.",
            questions: [
                { type: "multiple_choice", text: "¿Cuál es la función de una NIC?", answer: "Permite que un dispositivo se conecte a una red cableada.", options: ["Asigna direcciones IP dinámicamente.", "Permite que un dispositivo se conecte a una red cableada.", "Controla el flujo de datos entre redes.", "Almacena archivos de la red."], justification: "" },
                { type: "true_false", text: "En la topología malla, ¿las conexiones aumentan de forma lineal según los dispositivos que se conecten?", answer: "Falso.", justification: "" },
                { type: "true_false", text: "¿La topología lógica en anillo solo transmite un host a la vez?", answer: "Verdadero.", justification: "" },
                { type: "multiple_choice", text: "¿Qué topología ofrece un camino dedicado entre dos dispositivos?", answer: "Punto a punto.", options: ["Bus", "Estrella", "Anillo", "Punto a punto."], justification: "" },
                { type: "true_false", text: "¿La atenuación de la señal es mayor en cables de fibra óptica que en cables de cobre?", answer: "Falso.", justification: "" },
                { type: "true_false", text: "¿La NIC proporciona una dirección física a los dispositivos?", answer: "Verdadero", justification: "" },
                { type: "true_false", text: "¿Una red confiable significa que está siempre disponible?", answer: "Falso.", justification: "" },
                { type: "true_false", text: "¿Ethernet es un ejemplo de topología tipo bus?", answer: "Verdadero.", justification: "" },
                { type: "multiple_choice", text: "¿Cuándo se debe utilizar fibra óptica en una red de datos?", answer: "Cuando la distancia supera los 100 metros.", options: ["Para conectar impresoras locales.", "En redes domésticas pequeñas.", "Cuando la distancia supera los 100 metros.", "Para conexiones de bajo presupuesto."], justification: "" },
                { type: "true_false", text: "¿Una topología de estrella ofrece alta tolerancia a fallos, ya que un fallo en un dispositivo no afecta a los demás?", answer: "Verdadero.", justification: "" },
                { type: "multiple_choice", text: "¿Cuál de los medios de transmisión ofrece mayor ancho de banda?", answer: "Fibra óptica.", options: ["Cable coaxial", "Cable UTP Cat 5e", "Fibra óptica.", "Microondas"], justification: "" },
                { type: "multiple_choice", text: "¿Cuál de las siguientes topologías físicas se caracteriza porque todos los dispositivos se conectan a un solo cable?", answer: "Topología bus.", options: ["Topología de anillo", "Topología de estrella", "Topología de malla", "Topología bus."], justification: "" }
            ]
        },
        {
            module: 2,
            title: "Arquitectura de Red (OSI y TCP/IP)",
            summary: "Explora las capas y funciones de los modelos de referencia OSI y TCP/IP, el direccionamiento físico y lógico, y cómo protocolos como HTTP e IP encajan en estas arquitecturas.",
            questions: [
                { type: "multiple_choice", text: "¿En qué capa de la arquitectura TCP/IP se maneja el protocolo HTTP?", answer: "Capa de aplicación.", options: ["Capa de transporte", "Capa de internet", "Capa de aplicación.", "Capa de acceso a la red"], justification: "" },
                { type: "multiple_choice", text: "Según el modelo OSI, ¿qué dirección utiliza la capa de red?", answer: "Dirección lógica.", options: ["Dirección física", "Dirección de puerto", "Dirección lógica.", "Dirección de memoria"], justification: "" },
                { type: "multiple_choice", text: "Según el modelo OSI, ¿a qué capas pertenece el protocolo IP?", answer: "A ninguna, porque el modelo OSI no habla de protocolos.", options: ["Capa de Red", "Capa de Transporte", "Capa de Enlace de Datos", "A ninguna, porque el modelo OSI no habla de protocolos."], justification: "" },
                { type: "multiple_choice", text: "Según el modelo OSI, ¿qué tipo de direccionamiento se debe usar en la capa de enlace?", answer: "Direccionamiento físico.", options: ["Direccionamiento lógico (IP)", "Direccionamiento de puerto", "Direccionamiento físico.", "Direccionamiento de sesión"], justification: "" },
                { type: "multiple_choice", text: "En la arquitectura TCP/IP, ¿cuáles son las subcapas que pertenecen a la subred de comunicación?", answer: "Interfaz de red e Internet.", options: ["Aplicación y Transporte", "Sesión y Presentación", "Interfaz de red e Internet.", "Física y Enlace"], justification: "" },
                { type: "multiple_choice", text: "¿Cuál es la capa del modelo OSI que regula el flujo de información desde el origen al destino?", answer: "Capa de transporte.", options: ["Capa de sesión", "Capa de transporte.", "Capa de red", "Capa de enlace de datos"], justification: "" },
                { type: "true_false", text: "¿El modelo OSI define las tecnologías de hardware?", answer: "Falso.", justification: "" },
                { type: "multiple_choice", text: "¿Qué información se agrega durante la encapsulación de la capa 3?", answer: "Dirección IP origen y dirección IP destino.", options: ["Dirección MAC origen y destino", "Dirección IP origen y dirección IP destino.", "Número de puerto y número de secuencia", "Datos de la aplicación"], justification: "" },
                { type: "multiple_choice", text: "En orden descendente, cuáles son las capas del modelo OSI que solo manejan software?", answer: "Aplicación, presentación, sesión.", options: ["Transporte, Red, Enlace", "Aplicación, presentación, sesión.", "Red, Enlace, Física", "Sesión, Transporte, Red"], justification: "" },
                { type: "true_false", text: "¿La capa de Internet en TCP/IP es responsable de la transmisión física a través de la red?", answer: "Falso.", justification: "" },
                { type: "multiple_choice", text: "¿Cuál es la función de la capa de presentación?", answer: "Traducir, cifrar y comprimir datos.", options: ["Controlar el diálogo entre hosts", "Enrutar paquetes entre redes", "Traducir, cifrar y comprimir datos.", "Gestionar el acceso al medio"], justification: "" }
            ]
        },
        {
            module: 3,
            title: "Protocolos Principales (IP, TCP, UDP, ARP)",
            summary: "Se enfoca en las funciones y características de los protocolos fundamentales de la comunicación en redes: TCP para la confiabilidad, UDP para la velocidad, IP para el enrutamiento y ARP para la resolución de direcciones.",
            questions: [
                { type: "true_false", text: "¿El servicio orientado a la conexión en direccionamiento solo existe cuando se establece la conexión?", answer: "Verdadero.", justification: "" },
                { type: "true_false", text: "¿UDP es un protocolo que garantiza la entrega ordenada de los paquetes?", answer: "Falso.", justification: "" },
                { type: "multiple_choice", text: "¿En qué capa del modelo OSI se realiza el direccionamiento lógico a través del protocolo IP?", answer: "Capa de red.", options: ["Capa de transporte", "Capa de red.", "Capa de enlace de datos", "Capa de aplicación"], justification: "" },
                { type: "multiple_choice", text: "¿Cuál es la principal función del protocolo IP en la arquitectura TCP/IP?", answer: "El ruteo.", options: ["Control de errores", "Control de flujo", "El ruteo.", "Establecimiento de sesión"], justification: "" },
                { type: "multiple_choice", text: "¿Qué es la fragmentación que realiza el protocolo IP?", answer: "Proceso de dividir un paquete IP en fragmentos más pequeños para su transmisión.", options: ["Combinar varios paquetes en uno solo", "Descartar paquetes corruptos", "Proceso de dividir un paquete IP en fragmentos más pequeños para su transmisión.", "Ordenar los paquetes en el destino"], justification: "" },
                { type: "multiple_choice", text: "¿Cuál es el propósito del protocolo TCP?", answer: "Proporcionar un flujo de bytes confiable y orientado a la conexión.", options: ["Enviar datos rápidamente sin verificación", "Resolver nombres de dominio a direcciones IP", "Proporcionar un flujo de bytes confiable y orientado a la conexión.", "Asignar direcciones IP a los hosts"], justification: "" },
                { type: "multiple_choice", text: "¿Qué función cumple el protocolo ARP?", answer: "Resolver direcciones IP a direcciones MAC.", options: ["Resolver direcciones MAC a direcciones IP", "Asignar direcciones IP dinámicamente", "Resolver direcciones IP a direcciones MAC.", "Enrutar paquetes entre redes"], justification: "" },
                { type: "multiple_choice", text: "¿Cuál de los protocolos que opera en la capa de transporte de TCP/IP se encarga de una entrega confiable?", answer: "TCP.", options: ["IP", "UDP", "HTTP", "TCP."], justification: "" }
            ]
        },
        {
            module: 4,
            title: "Dispositivos y Direccionamiento MAC",
            summary: "Cubre los roles de los dispositivos finales e intermediarios, el formato y la asignación de direcciones MAC, y el funcionamiento de los routers en la capa de enlace.",
            questions: [
                { type: "multiple_choice", text: "¿Cuántos bytes representan la dirección MAC de broadcast pero corresponden a la identificación de la tarjeta?", answer: "3", options: ["6", "4", "3", "2"], justification: "" },
                { type: "true_false", text: "¿Una dirección MAC se asigna dinámicamente al sistema para que una máquina tenga la dirección?", answer: "Falso, ya viene de fábrica.", justification: "" },
                { type: "multiple_choice", text: "¿Cuál es el formato típico de una dirección MAC?", answer: "Notación hexadecimal.", options: ["Decimal punteado", "Binario", "Notación hexadecimal.", "ASCII"], justification: "" },
                { type: "true_false", text: "¿Los routers operan en la capa de enlace del modelo OSI?", answer: "Falso.", justification: "" },
                { type: "true_false", text: "¿Los primeros 3 octetos de una MAC identifican al proveedor?", answer: "Verdadero.", justification: "" },
                { type: "multiple_choice", text: "¿Qué característica se refiere correctamente a los dispositivos finales?", answer: "Son aquellos que generan flujos de datos a la red.", options: ["Regeneran las señales de la red", "Toman decisiones basadas en direcciones IP", "Son aquellos que generan flujos de datos a la red.", "Conectan redes de diferente tipo"], justification: "" },
                { type: "multiple_choice", text: "¿Qué dispositivos intermediarios se utilizan para la seguridad?", answer: "Router y firewall.", options: ["Hub y repetidor", "Switch y bridge", "Router y firewall.", "Servidor y PC"], justification: "" },
                { type: "true_false", text: "¿La dirección MAC opera en la capa de enlace del modelo OSI?", answer: "Verdadero.", justification: "" }
            ]
        }
    ];

    // --- 2. STATE MANAGEMENT ---
    let currentUserState = {
        moduleScores: {},
        currentModuleId: null,
        currentQuizAnswers: []
    };

    // --- 3. DOM ELEMENTS ---
    const globalProgress = document.getElementById('global-progress');
    const moduleSelectionContainer = document.getElementById('module-selection-container');
    const moduleViewContainer = document.getElementById('module-view-container');
    const moduleTitle = document.getElementById('module-title');
    const moduleProgress = document.getElementById('module-progress');
    const moduleSummary = document.getElementById('module-summary');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const reviewModuleBtn = document.getElementById('review-module-btn');
    const moduleIntroContainer = document.getElementById('module-intro-container');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const resultScore = document.getElementById('result-score');
    const resultMessage = document.getElementById('result-message');
    const correctAnswersContainer = document.getElementById('correct-answers-container');
    const retryModuleBtn = document.getElementById('retry-module-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');

    // --- 4. CORE LOGIC ---

    function saveState() {
        localStorage.setItem('interactiveCourseState_Prueba1', JSON.stringify(currentUserState));
    }

    function loadState() {
        const savedState = localStorage.getItem('interactiveCourseState_Prueba1');
        if (savedState) {
            currentUserState = JSON.parse(savedState);
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function normalizeAnswer(answer) {
        if (typeof answer !== 'string') return '';
        return answer.toLowerCase().trim().normalize("NFD").replace(/[̀-ͯ]/g, "");
    }

    function renderModuleMenu() {
        moduleSelectionContainer.innerHTML = '<h2>Selecciona un Módulo</h2>';
        courseData.forEach(module => {
            const score = currentUserState.moduleScores[module.module];
            const button = document.createElement('button');
            button.innerText = `Módulo ${module.module}: ${module.title} ${score !== undefined ? `(Última nota: ${score}%)` : ''}`;
            button.dataset.moduleId = module.module;
            
            if (score !== undefined) {
                button.classList.add(score >= 70 ? 'completed-passed' : 'completed-failed');
            }

            moduleSelectionContainer.appendChild(button);
        });
        moduleSelectionContainer.classList.remove('hidden');
        moduleViewContainer.classList.add('hidden');
        updateGlobalProgress();
    }

    function updateGlobalProgress() {
        const completedModules = Object.keys(currentUserState.moduleScores).length;
        const totalModules = courseData.length;
        globalProgress.value = (completedModules / totalModules) * 100;
    }

    function selectModule(moduleId) {
        currentUserState.currentModuleId = moduleId;
        const moduleData = courseData.find(m => m.module === moduleId);

        moduleTitle.innerText = `Módulo ${moduleData.module}: ${moduleData.title}`;
        moduleSummary.innerText = moduleData.summary;

        moduleSelectionContainer.classList.add('hidden');
        moduleViewContainer.classList.remove('hidden');
        moduleIntroContainer.classList.remove('hidden');
        quizContainer.classList.add('hidden');
        resultsContainer.classList.add('hidden');
    }

    function startQuiz() {
        moduleIntroContainer.classList.add('hidden');
        quizContainer.innerHTML = '';
        quizContainer.classList.remove('hidden');
        
        const moduleData = courseData.find(m => m.module === currentUserState.currentModuleId);
        moduleData.questions.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'quiz-question';
            let inputHtml = '';

            if (q.type === 'multiple_choice') {
                const shuffledOptions = shuffleArray([...q.options]);
                inputHtml = shuffledOptions.map(opt => `
                    <div class="radio-option">
                         <input type="radio" id="q${index}_${normalizeAnswer(opt).replace(/\s/g, '_')}" name="q${index}" value="${opt}">
                         <label for="q${index}_${normalizeAnswer(opt).replace(/\s/g, '_')}">${opt}</label>
                    </div>
                `).join('');
            } else if (q.type === 'true_false') {
                inputHtml = `
                    <div class="radio-option">
                        <input type="radio" id="q${index}_true" name="q${index}" value="Verdadero.">
                        <label for="q${index}_true">Verdadero</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="q${index}_false" name="q${index}" value="Falso.">
                        <label for="q${index}_false">Falso</label>
                    </div>`;
            } else { // Fallback for any other type
                inputHtml = `<input type="text" id="q${index}" name="q${index}" placeholder="Escribe tu respuesta aquí">`;
            }

            questionElement.innerHTML = `<p><b>${index + 1}.</b> ${q.text}</p>${inputHtml}`;
            quizContainer.appendChild(questionElement);
        });

        const submitButton = document.createElement('button');
        submitButton.innerText = 'Evaluar Respuestas';
        submitButton.id = 'submit-quiz-btn';
        quizContainer.appendChild(submitButton);
    }

    function submitQuiz() {
        const moduleData = courseData.find(m => m.module === currentUserState.currentModuleId);
        let correctCount = 0;
        currentUserState.currentQuizAnswers = [];

        moduleData.questions.forEach((q, index) => {
            const input = document.querySelector(`[name="q${index}"]:checked`);
            const userAnswer = input ? input.value : "";
            
            let isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(q.answer);

            if (isCorrect) {
                correctCount++;
            }
            currentUserState.currentQuizAnswers.push({ userAnswer: userAnswer, isCorrect });
        });

        const score = Math.round((correctCount / moduleData.questions.length) * 100);
        showResults(score);
    }

    function showResults(score) {
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        const moduleId = currentUserState.currentModuleId;
        currentUserState.moduleScores[moduleId] = score;
        
        resultScore.innerText = `Tu Puntuación: ${score}%`;
        resultScore.className = score >= 70 ? 'correct' : 'incorrect';
        resultScore.classList.remove('hidden');

        correctAnswersContainer.innerHTML = '<h4>Respuestas Detalladas</h4>';
        const moduleData = courseData.find(m => m.module === moduleId);
        moduleData.questions.forEach((q, index) => {
            const answerInfo = currentUserState.currentQuizAnswers[index];
            const item = document.createElement('div');
            item.className = 'correct-answer-item';
            const justificationHTML = q.justification ? `<p class="justification">Justificación: ${q.justification}</p>` : '';

            item.innerHTML = `
                <p>${index + 1}. ${q.text}</p>
                <p class="user-answer ${answerInfo.isCorrect ? 'correct' : 'incorrect'}">Tu respuesta: ${answerInfo.userAnswer || 'No respondida'}</p>
                <p class="correct">Respuesta correcta: ${q.answer}</p>
                ${justificationHTML}
            `;
            correctAnswersContainer.appendChild(item);
        });

        if (score >= 70) {
            resultMessage.innerText = "¡Felicidades! Has APROBADO el módulo.";
            resultMessage.className = 'correct';
        } else {
            resultMessage.innerText = "REPROBADO. No has alcanzado el 70%. ¡Estudia las respuestas correctas y vuelve a intentarlo!";
            resultMessage.className = 'incorrect';
        }
        resultMessage.classList.remove('hidden');
        retryModuleBtn.classList.remove('hidden');

        saveState();
        updateGlobalProgress();
    }

    function showReview() {
        moduleIntroContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        resultScore.classList.add('hidden');
        resultMessage.classList.add('hidden');
        retryModuleBtn.classList.add('hidden');

        correctAnswersContainer.innerHTML = '<h3>Corrección del Módulo</h3>';
        const moduleId = currentUserState.currentModuleId;
        const moduleData = courseData.find(m => m.module === moduleId);

        moduleData.questions.forEach((q, index) => {
            const item = document.createElement('div');
            item.className = 'correct-answer-item';
            let optionsHtml = '';
            if(q.type === 'multiple_choice'){
                optionsHtml = `<ul>${q.options.map(opt => `<li class="${opt === q.answer ? 'correct' : ''}">${opt}</li>`).join('')}</ul>`;
            }
            const justificationHTML = q.justification ? `<p class="justification">Justificación: ${q.justification}</p>` : '';

            item.innerHTML = `
                <p>${index + 1}. ${q.text}</p>
                <p class="correct">Respuesta correcta: ${q.answer}</p>
                ${optionsHtml}
                ${justificationHTML}
            `;
            correctAnswersContainer.appendChild(item);
        });
    }

    // --- 5. EVENT LISTENERS ---
    moduleSelectionContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const moduleId = parseInt(e.target.dataset.moduleId, 10);
            selectModule(moduleId);
        }
    });

    startQuizBtn.addEventListener('click', startQuiz);
    reviewModuleBtn.addEventListener('click', showReview);

    quizContainer.addEventListener('click', (e) => {
        if (e.target.id === 'submit-quiz-btn') {
            submitQuiz();
        }
    });

    retryModuleBtn.addEventListener('click', () => {
        selectModule(currentUserState.currentModuleId);
    });

    backToMenuBtn.addEventListener('click', renderModuleMenu);

    // --- 6. INITIALIZATION ---
    function init() {
        loadState();
        renderModuleMenu();
    }

    init();
});