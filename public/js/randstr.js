class RandStr {
  constructor(candidates) {
    if (Array.isArray(candidates)) {
      this._candidates = candidates.join('');
    } else {
      this._candidates = candidates;
    }
    if (typeof window.crypto.getRandomValues == 'function') {
      this.random = this.secureRandom
    } else {
      this.random = this.insecureRandom
    }
  }
  generate(len) {
    const tmp = [];
    for (let i = 0; i < len; i++) {
      tmp.push(this.randchr());
    }
    return tmp.join('');
  }
  randchr() {
    const i = this.random(0, this._candidates.length-1);
    return this._candidates.substr(i,1);
  }
  secureRandom(min, max) {
    const v = new Uint32Array(1);
    window.crypto.getRandomValues(v);
    return min + (v[0] % (max - min + 1));
  }
  insecureRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
}
