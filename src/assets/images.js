// BMA
export const bmaImages = [];
const bmaImageCount = 54;
for (let i = 0; i < bmaImageCount; i++) {
  bmaImages.push(require(`../images/bma/bmaHighlights/${i}.png`));
};

// GMs
export const gmImages = [];
const gmImageCount = 366;
export const gmVidNumbers = [43, 146, 185, 186, 187, 188, 189, 201, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 301, 302, 303, 304, 345, 346, 347, 348, 349];
const gmPNGNumbers = [1, 2, 10, 11, 13, 20, 30, 41, 42, 78, 82, 83, 85, 98, 100, 101, 102, 103, 104, 115, 150, 184, 207, 208, 213, 218, 220, 221, 222, 223, 224, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 365];
for (let i = 1; i < gmImageCount; i++) {
  if (gmVidNumbers.includes(i)) {
    gmImages.push(require(`../images/gms/gmFullSet/${i}.mp4`));
  } else if (gmPNGNumbers.includes(i)) {
    gmImages.push(require(`../images/gms/gmFullSet/${i}.png`));
  } else {
    gmImages.push(require(`../images/gms/gmFullSet/${i}.jpeg`));
  }
};

export const gmHLImages = [];
const gmHLImageCount = 33;
export const gmHLVidNumbers = [3, 9, 15, 16, 21, 22, 23, 24, 25, 26, 31];
const gmHLPNGNumbers = [1, 7, 14, 20];
for (let i = 1; i < gmHLImageCount; i++) {
  if (gmHLVidNumbers.includes(i)) {
    gmHLImages.push(require(`../images/gms/gmHighlights/${i}.mp4`));
  } else if (gmHLPNGNumbers.includes(i)) {
    gmHLImages.push(require(`../images/gms/gmHighlights/${i}.png`));
  } else {
    gmHLImages.push(require(`../images/gms/gmHighlights/${i}.jpeg`));
  }
};

// Photo
export const photoImages = [];
const photoImageCount = 40;
const photoPNGNumbers = [28, 36, 37];
const photoJPGNumbers = [24];
for (let i = 0; i < photoImageCount; i++) {
  if (photoPNGNumbers.includes(i)) {
    photoImages.push(require(`../images/photo/${i}.png`));
  } else if (photoJPGNumbers.includes(i)) {
    photoImages.push(require(`../images/photo/${i}.JPG`));
  } else {
    photoImages.push(require(`../images/photo/${i}.jpg`));
  }
};