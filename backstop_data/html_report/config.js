report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_UItest_QQ_Map_0_document_0_phone.png",
        "test": "../bitmaps_test/20180324-130539/backstop_UItest_QQ_Map_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_UItest_QQ_Map_0_document_0_phone.png",
        "label": "QQ Map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "4.02",
          "analysisTime": 28
        },
        "diffImage": "../bitmaps_test/20180324-130539/failed_diff_backstop_UItest_QQ_Map_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_UItest_QQ_Map_0_document_1_tablet.png",
        "test": "../bitmaps_test/20180324-130539/backstop_UItest_QQ_Map_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_UItest_QQ_Map_0_document_1_tablet.png",
        "label": "QQ Map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "error": "Reference file not found /Users/liujunting/AttackTheGiant/Note/Code/testDemo/backstop_data/bitmaps_reference/backstop_UItest_QQ_Map_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_UItest"
});