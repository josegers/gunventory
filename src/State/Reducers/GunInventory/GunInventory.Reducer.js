const INITIAL_STATE = {
  guns: {
    1: {
      model: 'Precision Rifle ',
      brand: 'Ruger',
      picture: 'http://ontargetmagazine.com/wp-content/uploads/2016/04/Ruger-PR-Main.jpg',
      calibers: [
        '.308WIN'
      ],
    },
    2: {
      model: 'Scorpion EVO 3 S1',
      brand: 'CZ',
      picture: 'https://d1nl57ctqthwli.cloudfront.net/wp-content/uploads/2017/04/cz-scorpion-evo3-s1-kal.-9x19mm-8126.jpg?x57338',
      calibers: [
        '9mm Luger'
      ],
    },
    3: {
      model: '805 BREN S1',
      brand: 'CZ',
      picture: 'https://www.czub.cz/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/c/z/cz_805_bren_s1_16_anfas.png',
      calibers: [
        '.223REM'
      ],
    },
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
