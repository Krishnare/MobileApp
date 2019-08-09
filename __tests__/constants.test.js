import {
  spadCalculator,
  luxCalculator,
  calculateDegree
} from "../app/assets/constants/constants";

describe("constants", () => {
  it("should calculate the spad score", () => {
    const result = spadCalculator({
      withoutLeaf: 5,
      withLeaf: 10
    });
    expect(result).toEqual(2401869.0324);
  });

  it("sholud calculate lux value", () => {
    const result = luxCalculator({
      fNumber: 2,
      exposureTime: 5,
      isoSpeedRatings: 2
    });
    expect(result).toEqual(0.4);
  });

  it("should calculate degree and return a value", () => {
    const result = calculateDegree({
      spadScore: 5,
      cropVariety: "traditional"
    });
    expect(result).toEqual(0.3076923076923066);
  });
});
