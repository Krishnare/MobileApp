export default (data = {
  short: {
    traditional: {
      greater: [
        {
          cropHealth: "Unhealthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "below optimal"
          },
          daysCount: "Check crops in 2 days",
          application: "Apply 9 kg of potash & 10 kg of neem cake",
          applicationDetails:
            "This application will also improve flowering and maximise yield",
          pest: "Look out for signs of diseases",
          pestDetails: `<p style="font-size:20">Unhealthy plants are more susceptible to <b><u>infection</u></b></p>`,
          popupDetails: [
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Healthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "optimal"
          },
          daysCount: "Check crops in 7 days",
          application: "Maintain application routine",
          applicationDetails:
            "Timely application will help maximise yield and profit",
          pest: "Watch out for earheads!",
          pestDetails: `<p>Healthy plants can attract <b><u>pests & diseases</u></b>!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: [
                "Leaf folder",
                "Stem borer",
                "Brown planthopper",
                "Earheads"
              ]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Over-fertilised",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "above optimal"
          },
          daysCount: "Check crops in 10 days",
          application: "Stop fertiliser application",
          applicationDetails: "Over-fertilisation can reduce overall profit",
          pest: "Watch out for earheads!",
          pestDetails: `<p style="font-size:20">Very green leaves are vulnerable to <b><u>pest</u></b> attacks!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: [
                "Leaf folder",
                "Stem borer",
                "Brown planthopper",
                "Earheads"
              ]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        }
      ],
      lesser: [
        {
          cropHealth: "Unhealthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "below optimal"
          },
          daysCount: "Check crops in 2 days",
          application: "Apply 33kg of urea per acre",
          applicationDetails:
            "Also apply 9 kg of potash & 10 kg of neem cake per acre to maximise yield",
          pest: "Look out for signs of diseases",
          pestDetails: `<p style="font-size:20">Unhealthy plants are more susceptible to <b><u>infection</u></b></p>`,
          popupDetails: [
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Healthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "optimal"
          },
          daysCount: "Check crops in 7 days",
          application: "Maintain application routine",
          applicationDetails:
            "Timely application will help maximise yield and profit",
          pest: "Watch out for stem borers!",
          pestDetails: `<p style="font-size:20">Healthy plants can attract <b><u>pests & diseases</u></b>!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: ["Leaf folder", "Stem borer", "Brown planthopper"]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Over-fertilised",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "above optimal"
          },
          daysCount: "Check crops in 10 days",
          application: "Stop fertiliser application",
          applicationDetails: "Over-fertilisation can reduce overall profit",
          pest: "Watch out for stem borers!",
          pestDetails: `<p style="font-size:20">Very green leaves are vulnerable to <b><u>pest</u></b> attacks!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: ["Leaf folder", "Stem borer", "Brown planthopper"]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        }
      ]
    },
    hybrid: {
      greater: [
        {
          cropHealth: "Unhealthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "below optimal"
          },
          daysCount: "Check crops in 2 days",
          application: "Apply 9 kg of potash & 10 kg of neem cake",
          applicationDetails:
            "This application will also improve flowering and maximise yield",
          pest: "Look out for signs of diseases",
          pestDetails: `<p style="font-size:20">Unhealthy plants are more susceptible to <b><u>infection</u></b></p>`,
          popupDetails: [
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Healthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "optimal"
          },
          daysCount: "Check crops in 7 days",
          application: "Maintain application routine",
          applicationDetails:
            "Timely application will help maximise yield and profit",
          pest: "Watch out for earheads!",
          pestDetails: `<p style="font-size:20">Healthy plants can attract <b><u>pests & diseases</u></b>!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: [
                "Leaf folder",
                "Stem borer",
                "Brown planthopper",
                "Earheads"
              ]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Over-fertilised",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "above optimal"
          },
          daysCount: "Check crops in 10 days",
          application: "Stop fertiliser application",
          applicationDetails: "Over-fertilisation can reduce overall profit",
          pest: "Watch out for earheads!",
          pestDetails: `<p style="font-size:20">Very green leaves are vulnerable to <b><u>pest</u></b> attacks!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: [
                "Leaf folder",
                "Stem borer",
                "Brown planthopper",
                "Earheads"
              ]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        }
      ],
      lesser: [
        {
          cropHealth: "Unhealthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "below optimal"
          },
          daysCount: "Check crops in 2 days",
          application: "Apply 33kg of urea per acre",
          applicationDetails:
            "Also apply 9 kg of potash & 10 kg of neem cake per acre to maximise yield",
          pest: "Look out for signs of diseases",
          pestDetails: `<p style="font-size:20">Unhealthy plants are more susceptible to <b><u>infection</u></b></p>`,
          popupDetails: [
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Healthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "optimal"
          },
          daysCount: "Check crops in 7 days",
          application: "Maintain application routine",
          applicationDetails:
            "Timely application will help maximise yield and profit",
          pest: "Watch out for stem borers!",
          pestDetails: `<p style="font-size:20">Healthy plants can attract <b><u>pests & diseases</u></b>!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: ["Leaf folder", "Stem borer", "Brown planthopper"]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Over-fertilised",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "above optimal"
          },
          daysCount: "Check crops in 10 days",
          application: "Stop fertiliser application",
          applicationDetails: "Over-fertilisation can reduce overall profit",
          pest: "Watch out for stem borers!",
          pestDetails: `<p style="font-size:20">Very green leaves are vulnerable to <b><u>pest</u></b> attacks!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: ["Leaf folder", "Stem borer", "Brown planthopper"]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        }
      ]
    },
    aromatic: {
      greater: [
        {
          cropHealth: "Unhealthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "below optimal"
          },
          daysCount: "Check crops in 2 days",
          application: "Apply 9 kg of potash & 10 kg of neem cake",
          applicationDetails:
            "This application will also improve flowering and maximise yield",
          pest: "Look out for signs of diseases",
          pestDetails: `<p style="font-size:20">Unhealthy plants are more susceptible to <b><u>infection</u></b></p>`,
          popupDetails: [
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Healthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "optimal"
          },
          daysCount: "Check crops in 7 days",
          application: "Maintain application routine",
          applicationDetails:
            "Timely application will help maximise yield and profit",
          pest: "Watch out for earheads!",
          pestDetails: `<p style="font-size:20">Healthy plants can attract <b><u>pests & diseases</u></b>!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: [
                "Leaf folder",
                "Stem borer",
                "Brown planthopper",
                "Earheads"
              ]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Over-fertilised",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "above optimal"
          },
          daysCount: "Check crops in 10 days",
          application: "Stop fertiliser application",
          applicationDetails: "Over-fertilisation can reduce overall profit",
          pest: "Watch out for earheads!",
          pestDetails: `<p style="font-size:20">Very green leaves are vulnerable to <b><u>pest</u></b> attacks!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: [
                "Leaf folder",
                "Stem borer",
                "Brown planthopper",
                "Earheads"
              ]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        }
      ],
      lesser: [
        {
          cropHealth: "Unhealthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "below optimal"
          },
          daysCount: "Check crops in 2 days",
          application: "Apply 33kg of urea per acre",
          applicationDetails:
            "Also apply 9 kg of potash & 10 kg of neem cake per acre to maximise yield",
          pest: "Look out for signs of diseases",
          pestDetails: `<p style="font-size:20">Unhealthy plants are more susceptible to <b><u>infection</u></b></p>`,
          popupDetails: [
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Healthy",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "optimal"
          },
          daysCount: "Check crops in 7 days",
          application: "Maintain application routine",
          applicationDetails:
            "Timely application will help maximise yield and profit",
          pest: "Watch out for stem borers!",
          pestDetails: `<p style="font-size:20">Healthy plants can attract <b><u>pests & diseases</u></b>!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: ["Leaf folder", "Stem borer", "Brown planthopper"]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        },
        {
          cropHealth: "Over-fertilised",
          nitrogenLevel: {
            part1: "Nitrogen level is",
            part2: "above optimal"
          },
          daysCount: "Check crops in 10 days",
          application: "Stop fertiliser application",
          applicationDetails: "Over-fertilisation can reduce overall profit",
          pest: "Watch out for stem borers!",
          pestDetails: `<p style="font-size:20">Very green leaves are vulnerable to <b><u>pest</u></b> attacks!</p>`,
          popupDetails: [
            {
              popupHeader: "List of pests",
              popupList: ["Leaf folder", "Stem borer", "Brown planthopper"]
            },
            {
              popupHeader: "List of diseases",
              popupList: ["Leaf blight", "Blast disease", "Leaf spot"]
            }
          ]
        }
      ]
    }
  }
});
