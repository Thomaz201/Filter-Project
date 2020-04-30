var orimage = null;
var accentimage = null;
var blurimage = null;
var greyimage = null;
var threestripesimage = null;
var rainimage = null;
var bordimage = null;
var yellowimage = null;
var limeimage = null;
var dvioletimage = null;
var redimage = null;
var greenimage = null;
var blueimage = null;
var magimage = null;
var cyanimage = null;
var fbrickimage = null;
var seaimage = null;
var negimage = null;
var sephueimage = null;
var sepiaimage = null;
var dslatebimage = null;
var siennaimage = null;
var brimage = null;
var rgimage = null;
var bgimage = null;
var lingradimage = null;
var canvas = document.getElementById("can1");

function fupload() {
  var filename = document.getElementById("finput");
  orimage = new SimpleImage(filename);
  orimage.drawTo(canvas);
}

function greyscale() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  greyimage = new SimpleImage(orimage);
  for (var pixel of greyimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  greyimage.drawTo(canvas);
}

function dored() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  redimage = new SimpleImage(orimage);
  for (var pixel of redimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    if (avg >= 128) {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
  redimage.drawTo(canvas);
}

function dogreen() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  greenimage = new SimpleImage(orimage);
  for (var pixel of greenimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    }
    if (avg >= 128) {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }
  }
  greenimage.drawTo(canvas);
}

function doblue() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  blueimage = new SimpleImage(orimage);
  for (var pixel of blueimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    }
    if (avg >= 128) {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }
  }
  blueimage.drawTo(canvas);
}

function docyan() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  cyanimage = new SimpleImage(orimage);
  for (var pixel of cyanimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(2 * avg);
      pixel.setBlue(2 * avg);
    }
    if (avg >= 128) {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(255);
    }
  }
  cyanimage.drawTo(canvas);
}

function domagenta() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  magimage = new SimpleImage(orimage);
  for (var pixel of magimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    }
    if (avg >= 128) {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }
  }
  magimage.drawTo(canvas);
}

function doyellow() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  yellowimage = new SimpleImage(orimage);
  for (var pixel of yellowimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    }
    if (avg >= 128) {
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }
  }
  yellowimage.drawTo(canvas);
}

function dolime() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  limeimage = new SimpleImage(orimage);
  for (var pixel of limeimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0.39 * avg);
      pixel.setGreen(1.6 * avg);
      pixel.setBlue(0.39 * avg);
    }
    if (avg >= 128) {
      pixel.setRed(1.61 * avg - 155);
      pixel.setGreen(0.4 * avg + 155);
      pixel.setBlue(1.61 * avg - 155);
    }
  }
  limeimage.drawTo(canvas);
}

function dodviolet() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  dvioletimage = new SimpleImage(orimage);
  for (var pixel of dvioletimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(1.16 * avg);
      pixel.setGreen(0);
      pixel.setBlue(1.65 * avg);
    }
    if (avg >= 128) {
      pixel.setRed(0.84 * avg + 41);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(0.35 * avg + 167);
    }
  }
  dvioletimage.drawTo(canvas);
}

function dofbrick() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  fbrickimage = new SimpleImage(orimage);
  for (var pixel of fbrickimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(1.396 * avg);
      pixel.setGreen(0.267 * avg);
      pixel.setBlue(0.267 * avg);
    }
    if (avg >= 128) {
      pixel.setRed(0.604 * avg + 101);
      pixel.setGreen(1.733 * avg - 187);
      pixel.setBlue(1.733 * avg - 187);
    }
  }
  fbrickimage.drawTo(canvas);
}

function doseagreen() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  seaimage = new SimpleImage(orimage);
  for (var pixel of seaimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0.36 * avg);
      pixel.setGreen(1.09 * avg);
      pixel.setBlue(0.682 * avg);
    }
    if (avg >= 128) {
      pixel.setRed(1.64 * avg - 163);
      pixel.setGreen(0.91 * avg + 23);
      pixel.setBlue(1.318 * avg - 81);
    }
  }
  seaimage.drawTo(canvas);
}

function dodarksblue() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  dslatebimage = new SimpleImage(orimage);
  for (var pixel of dslatebimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0.5647 * avg);
      pixel.setGreen(0.4784 * avg);
      pixel.setBlue(1.09 * avg);
    }
    if (avg >= 128) {
      pixel.setRed(1.4353 * avg - 111);
      pixel.setGreen(1.5216 * avg - 133);
      pixel.setBlue(0.91 * avg + 23);
    }
  }
  dslatebimage.drawTo(canvas);
}

function dosienna() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  siennaimage = new SimpleImage(orimage);
  for (var pixel of siennaimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(1.2549 * avg);
      pixel.setGreen(0.6431 * avg);
      pixel.setBlue(0.3529 * avg);
    }
    if (avg >= 128) {
      pixel.setRed(0.7451 * avg + 65);
      pixel.setGreen(1.3569 * avg - 91);
      pixel.setBlue(1.6471 * avg - 165);
    }
  }
  siennaimage.drawTo(canvas);
}

function donegative() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  negimage = new SimpleImage(orimage);
  for (var pixel of negimage.values()) {
    pixel.setRed(255 - pixel.getRed());
    pixel.setGreen(255 - pixel.getGreen());
    pixel.setBlue(255 - pixel.getBlue());
  }
  negimage.drawTo(canvas);
}

function threestripes() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  threestripesimage = new SimpleImage(orimage);
  for (var pixel of threestripesimage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < threestripesimage.getWidth() / 3) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    if (x > (threestripesimage.getWidth() * 2) / 3) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      }
      if (avg >= 128) {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    }
    if (
      x > threestripesimage.getWidth() / 3 &&
      x < (threestripesimage.getWidth() * 2) / 3
    ) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    }
  }
  threestripesimage.drawTo(canvas);
}

function dosepiafilter() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  sepiaimage = new SimpleImage(orimage);
  for (var pixel of sepiaimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg * 1.58);
    pixel.setGreen(avg * 0.871);
    pixel.setBlue(avg * 0.548);
  }
  sepiaimage.drawTo(canvas);
}

function dosepiahue() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  sephueimage = new SimpleImage(orimage);
  for (var pixel of sephueimage.values()) {
    pixel.setRed(pixel.getRed() * 1.07);
    pixel.setGreen(pixel.getGreen() * 0.74);
    pixel.setBlue(pixel.getBlue() * 0.43);
  }
  sephueimage.drawTo(canvas);
}

function dorainbow() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  rainimage = new SimpleImage(orimage);
  for (var pixel of rainimage.values()) {
    var y = pixel.getY();
    var height = rainimage.getHeight();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (y < height / 7) {
      if (avg < 128) {
        pixel.setRed(1.6 * avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6 * avg);
      } else {
        pixel.setRed(0.4 * avg + 153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4 * avg + 153);
      }
    } else if (y < (height * 2) / 7) {
      //indigo
      if (avg < 128) {
        pixel.setRed(0.8 * avg);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      } else {
        pixel.setRed(1.2 * avg - 51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else if (y < (height * 3) / 7) {
      //blue
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      }
      if (avg >= 128) {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else if (y < (height * 4) / 7) {
      //green
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < (height * 5) / 7) {
      //yellow
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < (height * 6) / 7) {
      //orange
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8 * avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2 * avg - 51);
        pixel.setBlue(2 * avg - 255);
      }
    } else {
      //red
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    }
  }
  rainimage.drawTo(canvas);
}

function doborder() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  bordimage = new SimpleImage(orimage);
  for (var pixel of bordimage.values()) {
    var y = pixel.getY();
    var x = pixel.getX();
    if (x < 15 || x > bordimage.getWidth() - 15) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    if (y <= 20 || y >= bordimage.getHeight() - 20) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
  }
  bordimage.drawTo(canvas);
}

function dolingrad() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  lingradimage = new SimpleImage(orimage);
  var ctx = canvas.getContext("2d");
  var grad = ctx.createLinearGradient(0, 0, 800, 0);
  grad.addColorStop(0, "rgba(148,0,211,0.6)");
  grad.addColorStop(1, "rgba(0,0,128,0.6)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, lingradimage.getWidth(), lingradimage.getHeight());
}

function randomBetween(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

function filterBlur() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  blurimage = new SimpleImage(orimage);
  var hcanv = blurimage.getHeight();
  var wcanv = blurimage.getWidth();
  for (var pixel of blurimage.values()) {
    if (Math.random() < 0.5) {
      // do nothing
    } else {
      var xpix = pixel.getX();
      var ypix = pixel.getY();
      var nxpix = Math.max(
        0,
        Math.min(wcanv - 1, xpix + randomBetween(-wcanv * 0.01, wcanv * 0.01))
      );
      var nypix = Math.max(
        0,
        Math.min(hcanv - 1, ypix + randomBetween(-hcanv * 0.01, wcanv * 0.01))
      );
      var npixel = blurimage.getPixel(nxpix, nypix);
      blurimage.setPixel(xpix, ypix, npixel);
    }
  }
  blurimage.drawTo(canvas);
}

function doaccent() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  accentimage = new SimpleImage(orimage);
  for (var pixel of accentimage.values()) {
    if (
      pixel.getBlue() > pixel.getGreen() &&
      pixel.getBlue() > pixel.getRed()
    ) {
      pixel.setBlue(pixel.getBlue() + 20);
    } else if (
      pixel.getRed() > pixel.getBlue() &&
      pixel.getRed() > pixel.getGreen
    ) {
      pixel.setRed(pixel.getRed() + 20);
    } else if (
      pixel.getGreen() > pixel.getRed() &&
      pixel.getGreen() > pixel.getBlue()
    ) {
      pixel.setGreen(pixel.getGreen() + 20);
    } else if (pixel.getBlue() == pixel.getGreen()) {
      pixel.setGreen(pixel.getGreen() + 20);
      pixel.setBlue(pixel.getBlue() + 20);
    } else if (pixel.getBlue() == pixel.getRed()) {
      pixel.setBlue(pixel.getBlue() + 20);
      pixel.setRed(pixel.getRed() + 20);
    } else if (pixel.getGreen() == pixel.getRed()) {
      pixel.setGreen(pixel.getGreen() + 20);
      pixel.setRed(pixel.getRed() + 20);
    } else if (
      pixel.getBlue() == pixel.getGreen() &&
      pixel.getGreen() == pixel.getRed()
    ) {
      pixel.setBlue(pixel.getBlue() + 20);
      pixel.setGreen(pixel.getGreen() + 20);
      pixel.setRed(pixel.getRed() + 20);
    }
  }
  accentimage.drawTo(canvas);
}

function Sredeblue() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  brimage = new SimpleImage(orimage);
  for (var pixel of brimage.values()) {
    var blue = pixel.getBlue();
    var red = pixel.getRed();
    pixel.setBlue(red);
    pixel.setRed(blue);
  }
  brimage.drawTo(canvas);
}

function Sredegreen() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  rgimage = new SimpleImage(orimage);
  for (var pixel of rgimage.values()) {
    var green = pixel.getGreen();
    var red = pixel.getRed();
    pixel.setGreen(red);
    pixel.setRed(green);
  }
  rgimage.drawTo(canvas);
}

function Sblueegreen() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  bgimage = new SimpleImage(orimage);
  for (var pixel of bgimage.values()) {
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    pixel.setGreen(blue);
    pixel.setBlue(green);
  }
  bgimage.drawTo(canvas);
}

function resetei() {
  if (orimage === null || !orimage.complete()) {
    alert("Image not loaded!");
    return;
  }
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  orimage.drawTo(canvas);
}
