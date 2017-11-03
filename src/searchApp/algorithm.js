const searchSentence = (arr, word) => {
  const matchedSentences = arr.filter(sentence => {
    return sentence.split(' ').includes(word)
  })
  return matchedSentences
}

console.log(searchSentence(sentences, 'I'))
