//Carregar imagem

const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("upload");
const img = document.getElementById("img");

fileInput.addEventListener("change", () => {
  let file = fileInput.files[0];
  if (!file) return;

  // Cria novo blob URL
  const newUrl = URL.createObjectURL(file);

  // Quando a imagem terminar de carregar
  img.onload = () => {
    // Libera o anterior, se existir
    if (currentUrl) {
      URL.revokeObjectURL(currentUrl);
    }
    currentUrl = newUrl;
  };
  img.src = newUrl;
});

uploadBtn.addEventListener("click", () => {
  fileInput.click();
});

let state = {
  rotate: 0,
  scaleX: 1,
  scaleY: 1,
  brightness: 100,
  contrast: 100,
  saturation: 100,
  grayscale: 0,
  inversion: 0,
  sepia: 0,
  blur: 0,
  hue: 0,
};

const rotateRight = document.getElementById("rotateRight");
const rotateLeft = document.getElementById("rotateLeft");
const flipVertical = document.getElementById("flipVertical");
const flipHorizontal = document.getElementById("flipHorizontal");
const brightnessSlider = document.getElementById("brightness");
const saturationSlider = document.getElementById("saturation");
const grayscaleSlider = document.getElementById("grayscale");
const inversionSlider = document.getElementById("inversion");
const contrastSlider = document.getElementById("contrast");
const blurSlider = document.getElementById("blur");
const sepiaSlider = document.getElementById("sepia");
const hueSlider = document.getElementById("hue-rotate");

img.style.transition = "all 0.2s ease-in-out";

function updateFilters() {
  const transform = `rotate(${state.rotate}deg) scale(${state.scaleX}, ${state.scaleY})`;

  const filter = `
    brightness(${state.brightness}%)
    contrast(${state.contrast}%)
    saturate(${state.saturation}%)
    grayscale(${state.grayscale}%)
    invert(${state.inversion}%)
    sepia(${state.sepia}%)
    blur(${state.blur}px)
    hue-rotate(${state.hue}deg)
  `;

  img.style.transform = transform;
  img.style.filter = filter;
}

rotateRight.addEventListener("click", () => {
  state.rotate += 90;
  updateFilters();
});

rotateLeft.addEventListener("click", () => {
  state.rotate -= 90;
  updateFilters();
});

flipVertical.addEventListener("click", () => {
  state.scaleY *= -1;
  updateFilters();
});

flipHorizontal.addEventListener("click", () => {
  state.scaleX *= -1;
  updateFilters();
});

if (brightnessSlider)
  brightnessSlider.addEventListener("input", (e) => {
    state.brightness = Number(e.target.value);
    updateFilters();
  });
if (contrastSlider)
  contrastSlider.addEventListener("input", (e) => {
    state.contrast = Number(e.target.value);
    updateFilters();
  });
if (saturationSlider)
  saturationSlider.addEventListener("input", (e) => {
    state.saturation = Number(e.target.value);
    updateFilters();
  });
if (grayscaleSlider)
  grayscaleSlider.addEventListener("input", (e) => {
    state.grayscale = Number(e.target.value);
    updateFilters();
  });
if (inversionSlider)
  inversionSlider.addEventListener("input", (e) => {
    state.inversion = Number(e.target.value);
    updateFilters();
  });
if (sepiaSlider)
  sepiaSlider.addEventListener("input", (e) => {
    state.sepia = Number(e.target.value);
    updateFilters();
  });
if (blurSlider)
  blurSlider.addEventListener("input", (e) => {
    state.blur = Number(e.target.value);
    updateFilters();
  });
if (hueSlider)
  hueSlider.addEventListener("input", (e) => {
    state.hue = Number(e.target.value);
    updateFilters();
  });

// Botão para resetar os filtros
const reset = document.getElementById("resetBtn");

reset.addEventListener("click", () => {
  state.rotate = 0;
  state.scaleX = 1;
  state.scaleY = 1;
  state.brightness = 100;
  state.contrast = 100;
  state.saturation = 100;
  state.grayscale = 0;
  state.inversion = 0;
  state.sepia = 0;
  state.blur = 0;
  state.hue = 0;

  brightnessSlider.value = state.brightness;
  saturationSlider.value = state.saturation;
  grayscaleSlider.value = state.grayscale;
  inversionSlider.value = state.inversion;
  contrastSlider.value = state.contrast;
  blurSlider.value = state.blur;
  sepiaSlider.value = state.sepia;
  hueSlider.value = state.hue;
  updateFilters();
});

//Botão para salvar/baixar imagem

const saveBtn = document.getElementById("saveBtn");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

saveBtn.addEventListener("click", () => {
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const filters = `
    brightness(${state.brightness}%)
    saturate(${state.saturation}%)
    grayscale(${state.grayscale}%)
    invert(${state.inversion}%)
    contrast(${state.contrast}%)
    blur(${state.blur}px)
    sepia(${state.sepia}%)
    hue-rotate(${state.hue}deg)
  `
    .replace(/\s+/g, " ")
    .trim();

  ctx.filter = filters;
  ctx.save();

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((state.rotate * Math.PI) / 180);
  ctx.scale(state.scaleX, state.scaleY);

  ctx.drawImage(
    img,
    -img.naturalWidth / 2,
    -img.naturalHeight / 2,
    img.naturalWidth,
    img.naturalHeight
  );

  ctx.restore();

  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
