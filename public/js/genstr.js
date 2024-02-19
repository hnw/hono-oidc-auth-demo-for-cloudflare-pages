const genstr = () => {
  const sorts = [];
  if (document.querySelector('#sorts-hiragana').checked) {
    sorts.push(Japanese.HIRAGANA);
  }
  if (document.querySelector('#sorts-katakana').checked) {
    sorts.push(Japanese.KATAKANA);
  }
  if (document.querySelector('#sorts-kanji').checked) {
    sorts.push(Japanese.KANJI);
  }
  if (document.querySelector('#sorts-greek').checked) {
    sorts.push(Japanese.GREEK);
  }
  if (document.querySelector('#sorts-cyrillic').checked) {
    sorts.push(Japanese.CYRILLIC);
  }
  const randStr = new RandStr(sorts);
  const len = document.querySelector('#generated-str-len').value;
  document.querySelector('#generated-str').value = randStr.generate(len);
}

const copystr = () => {
  const copyText = document.querySelector('#generated-str');
  copyText.select();
  document.execCommand('Copy');
}
