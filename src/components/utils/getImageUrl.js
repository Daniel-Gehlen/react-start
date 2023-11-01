// getImageUrl.js
export function getImageUrl(person, size = 's') {
  // Verifique se 'person' é um objeto válido
  if (person && person.imageId) {
    return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
  } else {
    // Lida com o caso em que 'person' não é válido
    return 'URL padrão ou ação alternativa';
  }
}
