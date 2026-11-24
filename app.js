const categories = [
  {
    id: "transport",
    name: "Transporte",
    icon: "🚲",
    intro:
      "Moverte tiene un impacto distinto según la distancia y el medio que eliges. Los vehículos que usan combustibles suelen generar más emisiones que el transporte colectivo o activo.",
    fact:
      "En trayectos cortos, caminar o usar bicicleta puede evitar emisiones directas y también aporta beneficios para tu salud.",
    questions: [
      {
        title: "En tus trayectos habituales, ¿cómo te mueves principalmente?",
        hint: "Piensa en tus traslados de todos los días, como ir al trabajo, estudiar o hacer mandados.",
        answers: [
          { label: "Camino o uso bicicleta", value: 0 },
          { label: "Transporte público (bus, metro o tren)", value: 260 },
          { label: "Moto o scooter a gasolina", value: 650 },
          { label: "Auto compartido con otras personas", value: 850 },
          { label: "Auto casi siempre viajando solo/a", value: 1500 },
          { label: "Casi no hago traslados semanales", value: 80 },
        ],
      },
      {
        title: "En tus viajes largos por carretera, ¿con qué frecuencia usas auto o moto?",
        hint: "Piensa en salidas o viajes ocasionales durante el año, no en tus traslados cotidianos.",
        answers: [
          { label: "No hago viajes largos por carretera", value: 0 },
          { label: "Una o dos salidas al año", value: 120 },
          { label: "Cada pocos meses", value: 350 },
          { label: "Casi todos los meses", value: 700 },
          { label: "Varias veces al mes", value: 1200 },
        ],
      },
      {
        title: "En un año normal, ¿cuántos vuelos tomas?",
        hint: "Considera vuelos de ida y vuelta; los vuelos largos suelen tener una huella mayor.",
        answers: [
          { label: "Ninguno", value: 0 },
          { label: "Uno o dos vuelos cortos", value: 300 },
          { label: "Tres o cuatro vuelos cortos", value: 700 },
          { label: "Un vuelo largo de ida y vuelta", value: 1200 },
          { label: "Dos o más vuelos largos", value: 2500 },
        ],
      },
    ],
  },
  {
    id: "home",
    name: "Energía en casa",
    icon: "🏡",
    intro:
      "La electricidad, la calefacción y el agua caliente forman parte de la huella de un hogar. El clima, el tipo de vivienda, la energía disponible y cuántas personas la comparten hacen que el impacto varíe mucho.",
    fact:
      "La energía que se ahorra en casa reduce emisiones y también puede ayudar a bajar el recibo de luz o gas.",
    questions: [
      {
        title: "¿Cómo describirías el consumo de electricidad en tu hogar?",
        hint: "Piensa en el uso de luces, refrigerador, aire acondicionado y otros aparatos.",
        answers: [
          { label: "Bajo: cuidamos mucho el consumo", value: 250 },
          { label: "Moderado: uso normal de aparatos", value: 600 },
          { label: "Alto: usamos varios aparatos a diario", value: 1100 },
          { label: "Muy alto: aire acondicionado o calefacción frecuente", value: 1800 },
          { label: "No sé cómo estimarlo", value: 700 },
        ],
      },
      {
        title: "¿Qué fuente usas principalmente para cocinar y calentar agua?",
        hint: "Elige la que más se acerque a tu situación.",
        answers: [
          { label: "Electricidad de bajo consumo o energía renovable", value: 100 },
          { label: "Electricidad de la red", value: 250 },
          { label: "Gas natural o gas en cilindro", value: 500 },
          { label: "Leña, carbón u otro combustible", value: 800 },
          { label: "No sé / no aplica", value: 300 },
        ],
      },
      {
        title: "¿Cuántas personas comparten los gastos y servicios de tu vivienda?",
        hint: "Al compartir una vivienda, parte de su consumo se reparte entre quienes la habitan.",
        answers: [
          { label: "Vivo solo/a", value: 500 },
          { label: "Vivimos 2 personas", value: 350 },
          { label: "Vivimos 3 o 4 personas", value: 250 },
          { label: "Vivimos 5 o más personas", value: 180 },
        ],
      },
    ],
  },
  {
    id: "food",
    name: "Alimentación",
    icon: "🥑",
    intro:
      "Lo que comemos también cuenta: producir y transportar alimentos requiere tierra, energía y agua. Los alimentos de origen animal, especialmente la carne de rumiantes, suelen tener una huella más alta.",
    fact:
      "Reducir el desperdicio de comida y sumar más comidas basadas en plantas son dos cambios cotidianos que pueden marcar una diferencia.",
    questions: [
      {
        title: "¿Cuál opción se parece más a tu alimentación habitual?",
        hint: "No tiene que describir cada comida, solo el patrón más común de tu semana.",
        answers: [
          { label: "Vegana: no consumo productos de origen animal", value: 700 },
          { label: "Vegetariana: consumo lácteos o huevos, no carne", value: 1000 },
          { label: "Como carne algunas veces por semana", value: 1600 },
          { label: "Como carne casi todos los días", value: 2300 },
          { label: "Como carne en casi todas las comidas", value: 3000 },
        ],
      },
      {
        title: "¿Con qué frecuencia se desperdicia comida en tu hogar?",
        hint: "Piensa en alimentos que se echan a perder o terminan en la basura.",
        answers: [
          { label: "Casi nunca: planeamos y aprovechamos las sobras", value: 80 },
          { label: "Algunas veces al mes", value: 220 },
          { label: "Varias veces a la semana", value: 500 },
          { label: "No estoy seguro/a", value: 250 },
        ],
      },
      {
        title: "¿Qué tan seguido eliges alimentos de temporada o producidos cerca?",
        hint: "La disponibilidad depende de dónde vives; responde con lo que haces normalmente.",
        answers: [
          { label: "Frecuentemente", value: 100 },
          { label: "A veces", value: 220 },
          { label: "Rara vez o no lo sé", value: 350 },
        ],
      },
    ],
  },
  {
    id: "consumption",
    name: "Compras y residuos",
    icon: "♻️",
    intro:
      "Cada producto necesita materiales, fabricación y transporte antes de llegar a tus manos. Comprar solo lo que necesitas, reparar y reutilizar puede reducir el impacto asociado a producir cosas nuevas.",
    fact:
      "Separar y reciclar ayuda a aprovechar materiales, aunque reducir y reutilizar suele evitar más impacto que reciclar después.",
    questions: [
      {
        title: "¿Con qué frecuencia compras ropa, tecnología u otros artículos nuevos?",
        hint: "Cuenta compras personales que no sean alimentos ni productos básicos del hogar.",
        answers: [
          { label: "Rara vez; prefiero reparar, intercambiar o comprar usado", value: 250 },
          { label: "Unas pocas compras al año", value: 550 },
          { label: "Una o dos compras al mes", value: 1100 },
          { label: "Varias compras al mes", value: 1900 },
        ],
      },
      {
        title: "Cuando algo deja de funcionar, ¿qué sueles hacer?",
        hint: "Piensa en ropa, aparatos y objetos de uso cotidiano.",
        answers: [
          { label: "Intento repararlo o darle otro uso", value: 150 },
          { label: "Lo reemplazo solo si no se puede reparar", value: 400 },
          { label: "Normalmente lo reemplazo por uno nuevo", value: 800 },
          { label: "Depende del objeto", value: 450 },
        ],
      },
      {
        title: "¿Qué haces normalmente con tus residuos?",
        hint: "Considera reciclaje, compostaje y la cantidad de desechables que utilizas.",
        answers: [
          { label: "Separo reciclables y compostables; uso pocos desechables", value: 120 },
          { label: "Separo algunos materiales cuando puedo", value: 300 },
          { label: "Casi todo va a la basura mezclada", value: 500 },
          { label: "No tengo un sistema de reciclaje disponible", value: 380 },
        ],
      },
    ],
  },
];

const STORAGE_KEY = "huellita-carbono-answers-v1";
const app = document.querySelector("#app");
const questionCount = categories.reduce((total, category) => total + category.questions.length, 0);
const answerState = loadAnswers();
let screen = "welcome";
let categoryIndex = 0;
let questionIndex = 0;

function loadAnswers() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const valid = {};
    for (const category of categories) {
      const savedCategory = saved[category.id];
      valid[category.id] = category.questions.map((question, index) => {
        const answerIndex = savedCategory?.[index];
        return Number.isInteger(answerIndex) && question.answers[answerIndex] ? answerIndex : null;
      });
    }
    return valid;
  } catch (error) {
    console.warn("No se pudieron recuperar las respuestas guardadas.", error);
    return Object.fromEntries(categories.map((category) => [category.id, category.questions.map(() => null)]));
  }
}

function saveAnswers() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answerState));
  } catch (error) {
    console.warn("No se pudieron guardar las respuestas en este navegador.", error);
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[character];
  });
}

function getCategoryTotal(category) {
  return category.questions.reduce((total, question, index) => {
    const selected = answerState[category.id][index];
    return total + (selected === null ? 0 : question.answers[selected].value);
  }, 0);
}

function getTotals() {
  return categories.map((category) => ({ ...category, total: getCategoryTotal(category) }));
}

function formatKg(value) {
  return new Intl.NumberFormat("es-MX", { maximumFractionDigits: 0 }).format(value);
}

function progressMarkup(currentQuestion) {
  const percent = Math.round((currentQuestion / questionCount) * 100);
  return `
    <div class="progress-area">
      <div class="progress-meta">
        <span>Tu recorrido · ${currentQuestion} de ${questionCount}</span>
        <strong>${percent}%</strong>
      </div>
      <div class="progress-track" role="progressbar" aria-label="Progreso de la encuesta" aria-valuemin="0" aria-valuemax="${questionCount}" aria-valuenow="${currentQuestion}">
        <div class="progress-fill" style="width: ${percent}%"></div>
      </div>
    </div>`;
}

function getQuestionNumber() {
  return categories.slice(0, categoryIndex).reduce((sum, category) => sum + category.questions.length, 0) + questionIndex + 1;
}

function renderWelcome() {
  app.innerHTML = `
    <section class="welcome">
      <div class="welcome-content">
        <p class="eyebrow"><span aria-hidden="true">✳</span> Tus hábitos también cuentan</p>
        <h1>Conoce tu huella. <em>Cuida lo que amas.</em></h1>
        <p class="welcome-copy">
          La huella de carbono estima los gases de efecto invernadero que generan nuestras actividades.
          Medirla nos ayuda a entender nuestro impacto y descubrir cambios que sí podemos hacer.
        </p>
        <button class="button-primary" type="button" data-action="start">
          ${hasSavedAnswers() ? "Continuar mi encuesta" : "Calcular mi huellita"}
          <span class="button-arrow" aria-hidden="true">→</span>
        </button>
        <p class="time-note">Son 12 preguntas sencillas · toma unos 3 minutos</p>
        <div class="welcome-facts" aria-label="Sobre la encuesta">
          <div class="fact"><strong>4</strong><span>categorías cotidianas</span></div>
          <div class="fact"><strong>~3 min</strong><span>para completar</span></div>
          <div class="fact"><strong>100%</strong><span>sin juicios</span></div>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="art-orbit"></div>
        <div class="planet">🌎</div>
        <div class="floating-note note-one"><span>🌱</span> Hábitos conscientes</div>
        <div class="floating-note note-two"><span>💚</span> Cada paso cuenta</div>
      </div>
    </section>`;
}

function hasSavedAnswers() {
  return Object.values(answerState).some((answers) => answers.some((answer) => answer !== null));
}

function renderQuestion() {
  const category = categories[categoryIndex];
  const question = category.questions[questionIndex];
  const selectedAnswer = answerState[category.id][questionIndex];
  const questionNumber = getQuestionNumber();
  const options = question.answers
    .map(
      (answer, index) => `
        <button class="answer-card" type="button" role="radio" aria-checked="${selectedAnswer === index}" data-action="answer" data-index="${index}">
          <span class="radio-mark" aria-hidden="true"></span>
          <span class="answer-text">${escapeHtml(answer.label)}</span>
        </button>`,
    )
    .join("");

  app.innerHTML = `
    <section class="quiz-wrap">
      ${progressMarkup(questionNumber)}
      <div class="quiz-card">
        <div class="category-label"><span class="category-icon" aria-hidden="true">${category.icon}</span> ${escapeHtml(category.name)}</div>
        <p class="eyebrow">Pregunta ${questionNumber} de ${questionCount}</p>
        <h2>${escapeHtml(question.title)}</h2>
        <p class="question-hint">${escapeHtml(question.hint)}</p>
        <div class="answers" role="radiogroup" aria-label="${escapeHtml(question.title)}">${options}</div>
        <div class="quiz-actions">
          <button class="back-link" type="button" data-action="back">← Volver</button>
          <button class="button-primary" type="button" data-action="next" ${selectedAnswer === null ? "disabled" : ""}>
            ${isLastQuestionInCategory() ? "Ver dato de la categoría" : "Siguiente"}
            <span class="button-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>`;
}

function isLastQuestionInCategory() {
  return questionIndex === categories[categoryIndex].questions.length - 1;
}

function renderInsight() {
  const category = categories[categoryIndex];
  const categoryTotal = getCategoryTotal(category);
  const averagePerDay = Math.round(categoryTotal / 365);
  app.innerHTML = `
    <section class="quiz-wrap">
      ${progressMarkup(getQuestionNumber())}
      <div class="insight-card">
        <div class="insight-heading">
          <div>
            <p class="eyebrow">Una pausa para aprender</p>
            <h2>Un poco más sobre ${escapeHtml(category.name.toLowerCase())}</h2>
          </div>
          <div class="insight-stamp" aria-hidden="true">${category.icon}</div>
        </div>
        <p class="insight-copy">${escapeHtml(category.intro)}</p>
        <div class="insight-stat">
          <span class="stat-icon" aria-hidden="true">💡</span>
          <p><strong>¿Sabías que…</strong> ${escapeHtml(category.fact)}</p>
        </div>
        <p class="insight-footnote">
          Según tus respuestas, esta categoría aporta aproximadamente ${formatKg(categoryTotal)} kg CO₂e al año
          (${formatKg(averagePerDay)} kg al día). Es una estimación orientativa.
        </p>
        <div class="insight-actions">
          <button class="back-link" type="button" data-action="back-to-question">← Revisar respuestas</button>
          <button class="button-primary" type="button" data-action="continue">
            ${categoryIndex === categories.length - 1 ? "Ver mi resultado" : "Siguiente categoría"}
            <span class="button-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>`;
}

function getTip(categoryId) {
  const tips = {
    transport: {
      title: "Prueba un trayecto compartido",
      copy: "Combinar transporte público, bicicleta, caminatas o compartir el auto para algunos recorridos puede reducir las emisiones de tus traslados.",
    },
    home: {
      title: "Empieza por lo que queda encendido",
      copy: "Apagar luces y aparatos que no usas, ajustar el aire acondicionado y elegir focos eficientes son cambios sencillos para probar en casa.",
    },
    food: {
      title: "Planea una comida más vegetal",
      copy: "Probar una receta basada en legumbres o verduras y aprovechar las sobras son formas amables de reducir el impacto de tu alimentación.",
    },
    consumption: {
      title: "Antes de comprar, date un momento",
      copy: "Reparar, pedir prestado, intercambiar o elegir artículos duraderos puede evitar parte del impacto de fabricar productos nuevos.",
    },
  };
  return tips[categoryId];
}

function renderResults() {
  const totals = getTotals();
  const totalKg = totals.reduce((sum, category) => sum + category.total, 0);
  const highest = totals.reduce((largest, category) => (category.total > largest.total ? category : largest), totals[0]);
  const tip = getTip(highest.id);
  const bars = totals
    .map((category) => {
      const percent = totalKg === 0 ? 0 : Math.round((category.total / totalKg) * 100);
      return `
        <div class="breakdown-row">
          <span class="breakdown-name"><span aria-hidden="true">${category.icon}</span>${escapeHtml(category.name)}</span>
          <span class="breakdown-value">${formatKg(category.total)} kg</span>
          <div class="breakdown-track" aria-label="${escapeHtml(category.name)}: ${percent}%">
            <div class="breakdown-fill" style="width: ${percent}%"></div>
          </div>
        </div>`;
    })
    .join("");

  app.innerHTML = `
    <section class="quiz-wrap">
      ${progressMarkup(questionCount)}
      <div class="results-card">
        <div class="results-heading">
          <p class="eyebrow">Tu recorrido, en resumen</p>
          <h2>Esta es tu huellita estimada</h2>
          <p class="results-subtitle">Gracias por tomarte el tiempo de conocer un poco más tus hábitos.</p>
        </div>
        <div class="total-panel">
          <span class="total-number">${(totalKg / 1000).toLocaleString("es-MX", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>
          <span class="total-unit">toneladas de CO₂e al año</span>
          <span class="total-context">${formatKg(totalKg)} kg CO₂e estimados por persona cada año</span>
        </div>
        <div class="result-columns">
          <div>
            <h3>¿De dónde viene el impacto?</h3>
            <div class="breakdown-list">${bars}</div>
          </div>
          <aside class="tip-panel">
            <p class="tip-kicker">Una idea para empezar</p>
            <h3>${escapeHtml(tip.title)}</h3>
            <p>${escapeHtml(tip.copy)}</p>
          </aside>
        </div>
        <p class="result-disclaimer">
          Este resultado es una aproximación educativa basada en promedios simplificados, no una medición ni una
          comparación exacta con otras personas. Los factores reales dependen del país, la energía local, las distancias
          y otros detalles que esta encuesta no mide. CO₂e significa “dióxido de carbono equivalente”.
        </p>
        <div class="results-actions">
          <button class="button-primary" type="button" data-action="restart">Volver a empezar <span class="button-arrow" aria-hidden="true">↻</span></button>
          <button class="button-secondary" type="button" data-action="print">Imprimir resultado</button>
        </div>
      </div>
    </section>`;
}

function render() {
  if (screen === "welcome") renderWelcome();
  else if (screen === "question") renderQuestion();
  else if (screen === "insight") renderInsight();
  else renderResults();
}

function startSurvey() {
  const firstUnansweredCategory = categories.findIndex((category) =>
    answerState[category.id].some((answer) => answer === null),
  );
  categoryIndex = firstUnansweredCategory === -1 ? 0 : firstUnansweredCategory;
  questionIndex =
    firstUnansweredCategory === -1
      ? 0
      : answerState[categories[categoryIndex].id].findIndex((answer) => answer === null);
  screen = "question";
  render();
}

function goBack() {
  if (screen === "question") {
    if (questionIndex > 0) {
      questionIndex -= 1;
    } else if (categoryIndex > 0) {
      categoryIndex -= 1;
      questionIndex = categories[categoryIndex].questions.length - 1;
    } else {
      screen = "welcome";
    }
  } else if (screen === "insight") {
    screen = "question";
    questionIndex = categories[categoryIndex].questions.length - 1;
  } else if (screen === "results") {
    categoryIndex = categories.length - 1;
    questionIndex = categories[categoryIndex].questions.length - 1;
    screen = "question";
  }
  render();
}

function continueFromQuestion() {
  const category = categories[categoryIndex];
  if (answerState[category.id][questionIndex] === null) return;
  if (!isLastQuestionInCategory()) {
    questionIndex += 1;
  } else {
    screen = "insight";
  }
  render();
}

function handleAction(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;

  if (action === "start") startSurvey();
  else if (action === "answer") {
    const category = categories[categoryIndex];
    answerState[category.id][questionIndex] = Number(button.dataset.index);
    saveAnswers();
    render();
  } else if (action === "next") continueFromQuestion();
  else if (action === "back" || action === "back-to-question") goBack();
  else if (action === "continue") {
    if (categoryIndex < categories.length - 1) {
      categoryIndex += 1;
      questionIndex = 0;
      screen = "question";
    } else {
      screen = "results";
    }
    render();
  } else if (action === "restart") {
    for (const category of categories) answerState[category.id].fill(null);
    saveAnswers();
    categoryIndex = 0;
    questionIndex = 0;
    screen = "welcome";
    render();
  } else if (action === "print") {
    window.print();
  }
}

app.addEventListener("click", handleAction);
document.querySelector("[data-home]").addEventListener("click", (event) => {
  event.preventDefault();
  screen = "welcome";
  render();
});
render();
