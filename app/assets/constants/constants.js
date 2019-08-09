module.exports = {
  surveyCount: 10,
  monthNames: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  cropData: {
    crop: ["long", "medium", "short"],
    cropVariety: ["traditional", "aromatic", "hybrid"],
    day: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    plotSize: ["Less Than One Hectare", "1-3 Hectares", ">3 Hectares"]
  },

  spadCalculator: lux => {
    let luxAlpha = (lux.withoutLeaf - lux.withLeaf) / lux.withoutLeaf;
    let leafThickness = 0.08;
    let spad =
      -1190435.05 * luxAlpha +
      113181.04 * leafThickness +
      623778.96 * luxAlpha * luxAlpha -
      125008.77 * luxAlpha * leafThickness +
      30859 * leafThickness * leafThickness +
      568402.34;
    return spad;
  },
  dateRange: {
    short: { start: 21, mid: 70, last: 110 },
    medium: { start: 21, mid: 100, last: 130 },
    long: { start: 21, mid: 110, last: 150 }
  },
  spadRange: {
    hybrid: { min: 405, max: 465 },
    traditional: { min: 355, max: 425 },
    aromatic: { min: 355, max: 425 }
  },

  luxCalculator: exif => {
    if (
      exif.fNumber === 0 ||
      exif.exposureTime === 0 ||
      exif.isoSpeedRatings === 0
    ) {
      return 0;
    } else {
      return (
        Math.pow(exif.fNumber, 2) / (exif.exposureTime * exif.isoSpeedRatings)
      );
    }
  },
  calculateDegree: payload => {
    let spadScoreRange = {
      traditional: [0, 325, 355, 425, 600],
      aromatic: [0, 325, 355, 425, 600],
      hybrid: [0, 380, 405, 465, 600]
    };
    let degree = [0, 20, 40, 160, 180];
    let spadScore = payload.spadScore;
    let arr = spadScoreRange[payload.cropVariety];
    for (i = 0; i < arr.length - 1; i++) {
      if (spadScore > arr[i] && spadScore < arr[i + 1]) {
        return (
          degree[i + 1] -
          ((degree[i + 1] - degree[i]) * (arr[i + 1] - spadScore)) /
            (arr[i + 1] - arr[i])
        );
      }
    }
  }
};
