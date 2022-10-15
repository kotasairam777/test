export const generateRandom = (min, max) => {
  const difference = max - min;
  const rand = Math.random(); 

  return Math.floor( rand * difference) + min;
}

export const generateCardDetails = (name) => {
  return { "name": name, "exp": `${generateRandom(1, 12)}/${generateRandom(22, 99)}`, "last4Digits": `${generateRandom(1000, 9999)}`, "cardType": "VISA"}
}