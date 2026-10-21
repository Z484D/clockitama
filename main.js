/** @type {Array.<Object<string, string>>} */
const deck = [
  // Base Game
  {
    name: "BOAR",
    kanji: "猪",
    expansion: "Base Game",
    image: "./svg/cards/base/boar.svg",
  },
  {
    name: "COBRA",
    kanji: "蛇",
    expansion: "Base Game",
    image: "./svg/cards/base/cobra.svg",
  },
  {
    name: "CRAB",
    kanji: "蟹",
    expansion: "Base Game",
    image: "./svg/cards/base/crab.svg",
  },
  {
    name: "CRANE",
    kanji: "鶴",
    expansion: "Base Game",
    image: "./svg/cards/base/crane.svg",
  },
  {
    name: "DRAGON",
    kanji: "龍",
    expansion: "Base Game",
    image: "./svg/cards/base/dragon.svg",
  },
  {
    name: "EEL",
    kanji: "鰻",
    expansion: "Base Game",
    image: "./svg/cards/base/eel.svg",
  },
  {
    name: "ELEPHANT",
    kanji: "象",
    expansion: "Base Game",
    image: "./svg/cards/base/elephant.svg",
  },
  {
    name: "FROG",
    kanji: "蛙",
    expansion: "Base Game",
    image: "./svg/cards/base/frog.svg",
  },
  {
    name: "GOOSE",
    kanji: "鵞鳥",
    expansion: "Base Game",
    image: "./svg/cards/base/goose.svg",
  },
  {
    name: "HORSE",
    kanji: "馬",
    expansion: "Base Game",
    image: "./svg/cards/base/horse.svg",
  },
  {
    name: "MANTIS",
    kanji: "蟷螂",
    expansion: "Base Game",
    image: "./svg/cards/base/mantis.svg",
  },
  {
    name: "MONKEY",
    kanji: "猿",
    expansion: "Base Game",
    image: "./svg/cards/base/monkey.svg",
  },
  {
    name: "OX",
    kanji: "牛",
    expansion: "Base Game",
    image: "./svg/cards/base/ox.svg",
  },
  {
    name: "RABBIT",
    kanji: "兎",
    expansion: "Base Game",
    image: "./svg/cards/base/rabbit.svg",
  },
  {
    name: "ROOSTER",
    kanji: "鶏",
    expansion: "Base Game",
    image: "./svg/cards/base/rooster.svg",
  },
  {
    name: "TIGER",
    kanji: "虎",
    expansion: "Base Game",
    image: "./svg/cards/base/tiger.svg",
  },
  // Promo Cards
  {
    name: "CAT",
    kanji: "猫",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/cat.svg",
  },
  {
    name: "CENTIPEDE",
    kanji: "百足",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/centipede.svg",
  },
  {
    name: "CRICKET",
    kanji: "蟋蟀",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/cricket.svg",
  },
  {
    name: "GOAT",
    kanji: "山羊",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/goat.svg",
  },
  {
    name: "HORNET",
    kanji: "雀蜂",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/hornet.svg",
  },
  {
    name: "LOBSTER",
    kanji: "海老",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/lobster.svg",
  },
  {
    name: "MOTH",
    kanji: "蛾",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/moth.svg",
  },
  {
    name: "NESSIE",
    kanji: "N",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/nessie.svg",
  },
  {
    name: "SEROW",
    kanji: "羚羊",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/serow.svg",
  },
  {
    name: "SHEEP",
    kanji: "羊",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/sheep.svg",
  },
  {
    name: "STEER",
    kanji: "去勢牛",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/steer.svg",
  },
  {
    name: "WHALE",
    kanji: "鯨",
    expansion: "Promo Cards",
    image: "./svg/cards/promo/whale.svg",
  },
  // Senset's Path
  {
    name: "BEAR",
    kanji: "熊",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/bear.svg",
  },
  {
    name: "DOG",
    kanji: "犬",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/dog.svg",
  },
  {
    name: "FOX",
    kanji: "狐",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/fox.svg",
  },
  {
    name: "GIRAFFE",
    kanji: "麒麟",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/giraffe.svg",
  },
  {
    name: "IGUANA",
    kanji: "蜥蜴",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/iguana.svg",
  },
  {
    name: "KIRIN",
    kanji: "麒麟",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/kirin.svg",
  },
  {
    name: "MOUSE",
    kanji: "鼠",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/mouse.svg",
  },
  {
    name: "OTTER",
    kanji: "獺",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/otter.svg",
  },
  {
    name: "PANDA",
    kanji: "熊猫",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/panda.svg",
  },
  {
    name: "PHOENIX",
    kanji: "鳳凰",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/phoenix.svg",
  },
  {
    name: "RAT",
    kanji: "鼠",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/rat.svg",
  },
  {
    name: "SABLE",
    kanji: "黒貂",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/sable.svg",
  },
  {
    name: "SEA SNAKE",
    kanji: "海蛇",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/seasnake.svg",
  },
  {
    name: "TANUKI",
    kanji: "狸",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/tanuki.svg",
  },
  {
    name: "TURTLE",
    kanji: "亀",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/turtle.svg",
  },
  {
    name: "VIPER",
    kanji: "蝮",
    expansion: "Sensei's Path",
    image: "./svg/cards/sensei/viper.svg",
  },
];

/** @type {Array.<string>} */
let disabledCards = JSON.parse(localStorage.getItem("disabledCards") || "[]");

/** @type {Array.<Object<string, string>>} */
const shuffle = deck
  .filter((card) => !disabledCards.includes(card.name))
  .sort(() => 0.5 - Math.random());

/** @type {boolean} */
let isUndoDisabled = JSON.parse(
  localStorage.getItem("isUndoDisabled") || "false",
);

// all time intervals are stored and measured in milliseconds
/** @type {number} */
const second = 1000;
/** @type {number} */
const minute = 60 * second;
/** @type {number} */
const hour = 60 * minute;

/** @type {number} */
let undoPenaltyDuration = parseInt(
  localStorage.getItem("undoPenaltyDuration") || `${2 * minute}`,
);
/** @type {number} */
let redTime = parseInt(localStorage.getItem("redTime") || `${15 * minute}`);
/** @type {number} */
let redTimeIncrement = parseInt(
  localStorage.getItem("redTimeIncrement") || `${10 * second}`,
);
/** @type {number} */
let blueTime = parseInt(localStorage.getItem("blueTime") || `${15 * minute}`);
/** @type {number} */
let blueTimeIncrement = parseInt(
  localStorage.getItem("blueTimeIncrement") || `${10 * second}`,
);

/**
 * @param {number} ms
 * @returns {string}
 */
function formatTime(ms) {
  /** @type {number} */
  const hours = Math.floor(ms / hour);
  ms -= hours * hour;
  /** @type {number} */
  const minutes = Math.floor(ms / minute);
  ms -= minutes * minute;
  /** @type {number} */
  const seconds = Math.floor(ms / second);
  ms -= seconds * second;

  return (
    (hours > 0 ? String(hours).padStart(2, "0") + ":" : "") +
    (String(minutes).padStart(2, "0") + ":") +
    String(seconds).padStart(2, "0")
  );
}

// ---- State Machine ----

/** @type {Object<string, Object<string, string>>} */
const cards = {
  redLeft: shuffle.pop(),
  redRight: shuffle.pop(),
  center: shuffle.pop(),
  blueLeft: shuffle.pop(),
  blueRight: shuffle.pop(),
};

/** @type {boolean} */
let isRedToMove = true;
/**
 * @type {boolean}
 * responsible for triggering the first rotation of the center elements
 * when blue player makes the first move
 */
let didRedStartTheGame = true;

/** @type {boolean} */
let hasGameStarted = false;
/** @type {boolean} */
let isGamePaused = false;
/** @type {boolean} */
let hasGameEnded = false;

/**
 * @type {string}
 * keep last move card in memory to enable undo
 * one of: redLeft, redRight, center, blueLeft, blueRight
 */
let lastMovedCard = undefined;
/**
 * @type {number}
 * keep last move timestamp to enable timekeeping
 */
let lastMoveTimestamp = undefined;

/**
 * @type {number}
 * undo will refund the time spent on the current turn to the opponent
 * while subtracting it from your time with additional penalty
 */
let currentTurnDuration = 0;

/**
 * @param {string} card
 * one of: redLeft, redRight, center, blueLeft, blueRight
 * */
function move(card) {
  const timestamp = Date.now();
  currentTurnDuration = 0;
  if (hasGameStarted) {
    if (isRedToMove) {
      redTime -= timestamp - lastMoveTimestamp;
      // do not add the increment after the undo
      if (lastMovedCard !== undefined) {
        redTime += redTimeIncrement;
      }
    } else {
      blueTime -= timestamp - lastMoveTimestamp;
      // do not add the increment after the undo
      if (lastMovedCard !== undefined) {
        blueTime += blueTimeIncrement;
      }
    }
  }
  if (!hasGameStarted) {
    if (["blueLeft", "blueRight"].includes(card)) {
      isRedToMove = false;
      didRedStartTheGame = false;
    }
    setTimeout(() => {
      document.getElementById("red-time").innerHTML = formatTime(redTime);
      document.getElementById("blue-time").innerHTML = formatTime(blueTime);
    }, 100);
  }
  cards[card] = [cards.center, (cards.center = cards[card])][0];
  isRedToMove = !isRedToMove;
  lastMovedCard = card;
  lastMoveTimestamp = timestamp;
  hasGameStarted = true;
  setTimeout(render, 100);
}

function undo() {
  if (hasGameEnded || isUndoDisabled || lastMovedCard === undefined) return;

  if (isRedToMove) {
    blueTime -= undoPenaltyDuration;
  } else {
    redTime = redTime - undoPenaltyDuration;
  }
  cards[lastMovedCard] = [
    cards.center,
    (cards.center = cards[lastMovedCard]),
  ][0];
  isRedToMove = !isRedToMove;
  lastMovedCard = undefined;
  setTimeout(render, 100);
}

// ---- DOM Management ---

// update timer values every second
setInterval(() => {
  if (!hasGameStarted || isGamePaused || hasGameEnded) {
    return;
  }
  currentTurnDuration += 1000;
  if (isRedToMove) {
    /** @type {number} */
    let redDisplayTime = redTime - currentTurnDuration;
    if (redDisplayTime > 0) {
      document.getElementById("red-time").innerHTML =
        formatTime(redDisplayTime);
    } else {
      redTime = 0;
      hasGameEnded = true;
      render();
    }
  } else {
    /** @type {number} */
    let blueDisplayTime = blueTime - currentTurnDuration;
    if (blueDisplayTime > 0) {
      document.getElementById("blue-time").innerHTML =
        formatTime(blueDisplayTime);
    } else {
      blueTime = 0;
      hasGameEnded = true;
      render();
    }
  }
}, 1000);

function render() {
  // set images
  document
    .getElementById("red-left-card-image")
    .setAttribute("src", cards.redLeft.image);
  document
    .getElementById("red-right-card-image")
    .setAttribute("src", cards.redRight.image);
  document
    .getElementById("center-card-image")
    .setAttribute("src", cards.center.image);
  document
    .getElementById("blue-left-card-image")
    .setAttribute("src", cards.blueLeft.image);
  document
    .getElementById("blue-right-card-image")
    .setAttribute("src", cards.blueRight.image);

  // set times
  if (hasGameStarted) {
    if (isRedToMove) {
      document.getElementById("blue-time").innerHTML = formatTime(blueTime);
    } else {
      document.getElementById("red-time").innerHTML = formatTime(redTime);
    }
  }

  // enable / disable buttons
  if ((hasGameStarted && isRedToMove) || hasGameEnded) {
    document
      .getElementById("blue-left-card-button")
      .setAttribute("disabled", "true");
    document
      .getElementById("blue-right-card-button")
      .setAttribute("disabled", "true");
  } else {
    document
      .getElementById("blue-left-card-button")
      .removeAttribute("disabled");
    document
      .getElementById("blue-right-card-button")
      .removeAttribute("disabled");
  }

  if (hasGameStarted) {
    document
      .getElementById("center-card-button")
      .setAttribute("disabled", "true");
  } else {
    document.getElementById("center-card-button").removeAttribute("disabled");
  }

  if ((hasGameStarted && !isRedToMove) || hasGameEnded) {
    document
      .getElementById("red-left-card-button")
      .setAttribute("disabled", "true");
    document
      .getElementById("red-right-card-button")
      .setAttribute("disabled", "true");
  } else {
    document.getElementById("red-left-card-button").removeAttribute("disabled");
    document
      .getElementById("red-right-card-button")
      .removeAttribute("disabled");
  }

  // toggle css classes
  if (hasGameStarted && isRedToMove) {
    document.getElementById("red-time").classList.add("text-commie-red");
    document.getElementById("blue-time").classList.remove("text-commie-red");
  } else {
    document.getElementById("red-time").classList.remove("text-commie-red");
    document.getElementById("blue-time").classList.add("text-commie-red");
  }

  if (!hasGameStarted) {
    document.getElementById("center-card-button").classList.add("card-effects");
  } else {
    if (!isRedToMove) {
      document.getElementById("center-card-button").classList.add("rotate-180");
    } else {
      if (!didRedStartTheGame) {
        document
          .getElementById("center-card-button")
          .classList.add("rotate-360");
      } else {
        document
          .getElementById("center-card-button")
          .classList.remove("rotate-360");
      }
      document
        .getElementById("center-card-button")
        .classList.remove("rotate-180");
    }
    document
      .getElementById("center-card-button")
      .classList.remove("card-effects");
  }

  // undo shenanigans
  if (
    hasGameEnded ||
    isUndoDisabled ||
    lastMovedCard === undefined ||
    (isRedToMove && blueTime < undoPenaltyDuration + currentTurnDuration) ||
    (!isRedToMove && redTime < undoPenaltyDuration + currentTurnDuration)
  ) {
    document.getElementById("undo-button").setAttribute("disabled", "true");
  } else {
    document.getElementById("undo-button").removeAttribute("disabled");
  }
}

render();
