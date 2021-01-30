const { slideConfig } = require("../config/sliderImgConfig");

module.exports.getSlider = (req, res) => {
  const filter = req.params['filter'];
  let paths = [];
  let photoKeys = Object.keys(slideConfig.photos);
  photoKeys.forEach(key => {
    if (key === filter) {
      paths = slideConfig.photos[key].slice();
      console.log(slideConfig.photos[key]);
    }
  })
  for (let i = 0; i < paths.length; i++) {
    paths[i] = slideConfig.imagesPath + paths[i];
  }

  res.render('slider', {
    title: filter,
    imagesPath: paths
  })
}

