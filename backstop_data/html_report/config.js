report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20241120-161344/backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 5.425130208333333,
          "misMatchPercentage": "5.43",
          "analysisTime": 8
        },
        "diffImage": "../bitmaps_test/20241120-161344/failed_diff_backstop_default_BackstopJS_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "test": "../bitmaps_test/20241120-161344/backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found /Users/yangfengyi/Dev/codeStation/course-code/spa-interface/backstop_data/bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});