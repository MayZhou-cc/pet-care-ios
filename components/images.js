const images = {
  background1: require("../assets/BackgroundColors.jpg"),
  background2: require("../assets/BackgroundBlueBirds.jpg"),
  background3: require("../assets/BackgroundHana.jpg"),
  background4: require("../assets/BackgroundWindow.jpg"),
  background5: require("../assets/BackgroundBirds.jpg"),
  background6: require("../assets/BackgoundSeea.jpg"),
  background7: require("../assets/BackgroundLeaf.jpg"),
};

function getBackgroundImage(color) {
  if (color == 1) {
    return images.background1;
  } else if (color == 2) {
    return images.background2;
  } else if (color == 3) {
    return images.background3;
  } else if (color == 4) {
    return images.background4;
  } else if (color == 5) {
    return images.background5;
  } else if (color == 6) {
    return images.background6;
  } else if (color == 7) {
    return images.background7;
  } else {
    // default 
    return images.background5;
  }
};

export { images, getBackgroundImage };
