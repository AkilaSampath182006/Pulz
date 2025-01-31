(function () {
  var data = {
    resource: {
      version: "10",

      macros: [
        { function: "__e" },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: false,
          vtp_enableUrlPassthrough: false,
          vtp_enableCookieOverrides: false,
          tag_id: 3,
        },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "AW-10965796185",
          tag_id: 4,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "10965796185",
          vtp_conversionLabel: "NC9TCKWU9JIZENmK8-wo",
          vtp_rdp: false,
          vtp_url: ["macro", 2],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 7,
        },
        {
          function: "__bzi",
          metadata: ["map"],
          once_per_event: true,
          vtp_id: "5807778",
          tag_id: 8,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "10965796185",
          vtp_conversionLabel: "mywMCKOqqZUZENmK8-wo",
          vtp_rdp: false,
          vtp_url: ["macro", 2],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 10,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "10965796185",
          vtp_conversionLabel: "S7oSCOP91qcZENmK8-wo",
          vtp_rdp: false,
          vtp_url: ["macro", 2],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 13,
        },
        {
          function: "__bzi",
          metadata: ["map"],
          once_per_event: true,
          vtp_id: "7091065",
          tag_id: 14,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "10965796185",
          vtp_conversionLabel: "B0lECMiAqdkZENmK8-wo",
          vtp_rdp: false,
          vtp_url: ["macro", 2],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 16,
        },
        {
          function: "__evl",
          vtp_elementId: "google-ads",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: true,
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "ID",
          vtp_onScreenRatio: "1",
          vtp_uniqueTriggerId: "177642594_6",
          tag_id: 17,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.addEventListener("message",function(a){"https://calendly.com"===a.origin\u0026\u0026(window.dataLayer=window.dataLayer||[],dataLayer.push(a.data))});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 11,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.elementVisibility" },
        {
          function: "_re",
          arg0: ["macro", 1],
          arg1: "(^$|((^|,)177642594_6($|,)))",
        },
        { function: "_cn", arg0: ["macro", 3], arg1: "/thank-you" },
        {
          function: "_cn",
          arg0: ["macro", 3],
          arg1: "/lp-web-design-q4-success",
        },
        { function: "_cn", arg0: ["macro", 4], arg1: "/thank-you-cal" },
        { function: "_eq", arg0: ["macro", 3], arg1: "/lander/thank-you" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0, 1, 3, 6, 9, 8],
        ],
        [
          ["if", 1, 2],
          ["add", 2],
        ],
        [
          ["if", 0, 3],
          ["add", 4],
        ],
        [
          ["if", 0, 4],
          ["add", 4],
        ],
        [
          ["if", 0, 6],
          ["add", 5],
        ],
        [
          ["if", 0, 5],
          ["add", 7],
          ["block", 4],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__bzi",
        [46, "a"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "setInWindow"]],
        ["c", "_linkedin_data_partner_id", [17, [15, "a"], "id"]],
        [
          "b",
          "https://snap.licdn.com/li.lms-analytics/insight.min.js",
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__evl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnElementVisibility"]],
        [52, "c", ["require", "makeNumber"]],
        [
          52,
          "d",
          [
            8,
            "selectorType",
            [17, [15, "a"], "selectorType"],
            "id",
            [17, [15, "a"], "elementId"],
            "selector",
            [17, [15, "a"], "elementSelector"],
            "useDomChangeListener",
            [28, [28, [17, [15, "a"], "useDomChangeListener"]]],
            "onScreenRatio",
            ["c", [17, [15, "a"], "onScreenRatio"]],
            "firingFrequency",
            [17, [15, "a"], "firingFrequency"],
          ],
        ],
        [
          22,
          [17, [15, "a"], "useOnScreenDuration"],
          [
            46,
            [
              43,
              [15, "d"],
              "onScreenDuration",
              ["c", [17, [15, "a"], "onScreenDuration"]],
            ],
          ],
        ],
        ["b", [15, "d"], [17, [15, "a"], "uniqueTriggerId"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__f",
        [46, "a"],
        [52, "b", ["require", "copyFromDataLayer"]],
        [52, "c", ["require", "getReferrerUrl"]],
        [52, "d", ["require", "makeString"]],
        [52, "e", ["require", "parseUrl"]],
        [52, "f", [15, "__module_legacyUrls"]],
        [52, "g", [30, ["b", "gtm.referrer", 1], ["c"]]],
        [22, [28, [15, "g"]], [46, [36, ["d", [15, "g"]]]]],
        [
          38,
          [17, [15, "a"], "component"],
          [46, "PROTOCOL", "HOST", "PORT", "PATH", "QUERY", "FRAGMENT", "URL"],
          [
            46,
            [5, [46, [36, [2, [15, "f"], "getProtocol", [7, [15, "g"]]]]]],
            [
              5,
              [
                46,
                [
                  36,
                  [
                    2,
                    [15, "f"],
                    "getHost",
                    [7, [15, "g"], [17, [15, "a"], "stripWww"]],
                  ],
                ],
              ],
            ],
            [5, [46, [36, [2, [15, "f"], "getPort", [7, [15, "g"]]]]]],
            [
              5,
              [
                46,
                [
                  36,
                  [
                    2,
                    [15, "f"],
                    "getPath",
                    [7, [15, "g"], [17, [15, "a"], "defaultPages"]],
                  ],
                ],
              ],
            ],
            [
              5,
              [
                46,
                [
                  22,
                  [17, [15, "a"], "queryKey"],
                  [
                    46,
                    [
                      36,
                      [
                        2,
                        [15, "f"],
                        "getFirstQueryParam",
                        [7, [15, "g"], [17, [15, "a"], "queryKey"]],
                      ],
                    ],
                  ],
                ],
                [52, "h", ["e", [15, "g"]]],
                [36, [2, [17, [15, "h"], "search"], "replace", [7, "?", ""]]],
              ],
            ],
            [5, [46, [36, [2, [15, "f"], "getFragment", [7, [15, "g"]]]]]],
            [5, [46]],
            [
              9,
              [
                46,
                [36, [2, [15, "f"], "removeFragment", [7, ["d", [15, "g"]]]]],
              ],
            ],
          ],
        ],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__html",
        [46, "a"],
        [52, "b", ["require", "internal.injectHtml"]],
        [
          "b",
          [17, [15, "a"], "html"],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
          [17, [15, "a"], "useIframe"],
          [17, [15, "a"], "supportDocumentWrite"],
        ],
      ],
      [
        50,
        "__v",
        [46, "a"],
        [52, "b", ["require", "copyFromDataLayer"]],
        [52, "c", ["require", "internal.createRegex"]],
        [52, "d", ["require", "getType"]],
        [52, "e", [17, [15, "a"], "name"]],
        [
          22,
          [30, [28, [15, "e"]], [21, ["d", [15, "e"]], "string"]],
          [46, [36, false]],
        ],
        [52, "f", [2, [15, "e"], "replace", [7, ["c", "\\\\.", "g"], "."]]],
        [
          52,
          "g",
          ["b", [15, "f"], [30, [17, [15, "a"], "dataLayerVersion"], 1]],
        ],
        [
          36,
          [
            39,
            [21, [15, "g"], [44]],
            [15, "g"],
            [17, [15, "a"], "defaultValue"],
          ],
        ],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_legacyUrls",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "h",
                  [46, "p"],
                  [52, "q", [2, [15, "p"], "indexOf", [7, "#"]]],
                  [
                    36,
                    [
                      39,
                      [23, [15, "q"], 0],
                      [15, "p"],
                      [2, [15, "p"], "substring", [7, 0, [15, "q"]]],
                    ],
                  ],
                ],
                [
                  50,
                  "i",
                  [46, "p"],
                  [52, "q", [17, ["e", [15, "p"]], "protocol"]],
                  [
                    36,
                    [
                      39,
                      [15, "q"],
                      [2, [15, "q"], "replace", [7, ":", ""]],
                      "",
                    ],
                  ],
                ],
                [
                  50,
                  "j",
                  [46, "p", "q"],
                  [41, "r"],
                  [3, "r", [17, ["e", [15, "p"]], "hostname"]],
                  [22, [28, [15, "r"]], [46, [36, ""]]],
                  [52, "s", ["b", ":[0-9]+"]],
                  [3, "r", [2, [15, "r"], "replace", [7, [15, "s"], ""]]],
                  [
                    22,
                    [15, "q"],
                    [
                      46,
                      [
                        53,
                        [52, "t", ["b", "^www\\d*\\."]],
                        [52, "u", [2, [15, "r"], "match", [7, [15, "t"]]]],
                        [
                          22,
                          [1, [15, "u"], [16, [15, "u"], 0]],
                          [
                            46,
                            [
                              3,
                              "r",
                              [
                                2,
                                [15, "r"],
                                "substring",
                                [7, [17, [16, [15, "u"], 0], "length"]],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36, [15, "r"]],
                ],
                [
                  50,
                  "k",
                  [46, "p"],
                  [52, "q", ["e", [15, "p"]]],
                  [41, "r"],
                  [3, "r", ["f", [17, [15, "q"], "port"]]],
                  [
                    22,
                    [28, [15, "r"]],
                    [
                      46,
                      [
                        22,
                        [20, [17, [15, "q"], "protocol"], "http:"],
                        [46, [3, "r", 80]],
                        [
                          46,
                          [
                            22,
                            [20, [17, [15, "q"], "protocol"], "https:"],
                            [46, [3, "r", 443]],
                            [46, [3, "r", ""]],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36, ["g", [15, "r"]]],
                ],
                [
                  50,
                  "l",
                  [46, "p", "q"],
                  [52, "r", ["e", [15, "p"]]],
                  [41, "s"],
                  [
                    3,
                    "s",
                    [
                      39,
                      [
                        20,
                        [2, [17, [15, "r"], "pathname"], "indexOf", [7, "/"]],
                        0,
                      ],
                      [17, [15, "r"], "pathname"],
                      [0, "/", [17, [15, "r"], "pathName"]],
                    ],
                  ],
                  [
                    22,
                    [20, ["d", [15, "q"]], "array"],
                    [
                      46,
                      [
                        53,
                        [52, "t", [2, [15, "s"], "split", [7, "/"]]],
                        [
                          22,
                          [
                            19,
                            [
                              2,
                              [15, "q"],
                              "indexOf",
                              [
                                7,
                                [
                                  16,
                                  [15, "t"],
                                  [37, [17, [15, "t"], "length"], 1],
                                ],
                              ],
                            ],
                            0,
                          ],
                          [
                            46,
                            [
                              43,
                              [15, "t"],
                              [37, [17, [15, "t"], "length"], 1],
                              "",
                            ],
                            [3, "s", [2, [15, "t"], "join", [7, "/"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36, [15, "s"]],
                ],
                [
                  50,
                  "m",
                  [46, "p"],
                  [52, "q", [17, ["e", [15, "p"]], "pathname"]],
                  [52, "r", [2, [15, "q"], "split", [7, "."]]],
                  [41, "s"],
                  [
                    3,
                    "s",
                    [
                      39,
                      [18, [17, [15, "r"], "length"], 1],
                      [16, [15, "r"], [37, [17, [15, "r"], "length"], 1]],
                      "",
                    ],
                  ],
                  [36, [16, [2, [15, "s"], "split", [7, "/"]], 0]],
                ],
                [
                  50,
                  "n",
                  [46, "p"],
                  [52, "q", [17, ["e", [15, "p"]], "hash"]],
                  [36, [2, [15, "q"], "replace", [7, "#", ""]]],
                ],
                [
                  50,
                  "o",
                  [46, "p", "q"],
                  [
                    50,
                    "s",
                    [46, "t"],
                    [
                      36,
                      [
                        "c",
                        [2, [15, "t"], "replace", [7, ["b", "\\+", "g"], " "]],
                      ],
                    ],
                  ],
                  [
                    52,
                    "r",
                    [
                      2,
                      [17, ["e", [15, "p"]], "search"],
                      "replace",
                      [7, "?", ""],
                    ],
                  ],
                  [
                    65,
                    "t",
                    [2, [15, "r"], "split", [7, "&"]],
                    [
                      46,
                      [
                        53,
                        [52, "u", [2, [15, "t"], "split", [7, "="]]],
                        [
                          22,
                          [21, ["s", [16, [15, "u"], 0]], [15, "q"]],
                          [46, [6]],
                        ],
                        [
                          36,
                          [
                            "s",
                            [
                              2,
                              [2, [15, "u"], "slice", [7, 1]],
                              "join",
                              [7, "="],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36],
                ],
                [52, "b", ["require", "internal.createRegex"]],
                [52, "c", ["require", "decodeUriComponent"]],
                [52, "d", ["require", "getType"]],
                [52, "e", ["require", "internal.legacyParseUrl"]],
                [52, "f", ["require", "makeNumber"]],
                [52, "g", ["require", "makeString"]],
                [
                  36,
                  [
                    8,
                    "removeFragment",
                    [15, "h"],
                    "getProtocol",
                    [15, "i"],
                    "getHost",
                    [15, "j"],
                    "getPort",
                    [15, "k"],
                    "getPath",
                    [15, "l"],
                    "getExtension",
                    [15, "m"],
                    "getFragment",
                    [15, "n"],
                    "getFirstQueryParam",
                    [15, "o"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __e: { 2: true, 4: true },
      __f: { 2: true },
      __googtag: { 1: 10 },
      __v: { 2: true },
    },
    blob: { 1: "10" },
    permissions: {
      __bzi: {
        access_globals: {
          keys: [
            {
              key: "_linkedin_data_partner_id",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        inject_script: {
          urls: ["https://snap.licdn.com/li.lms-analytics/insight.min.js"],
        },
      },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __evl: { detect_element_visibility_events: {} },
      __f: {
        read_data_layer: { keyPatterns: ["gtm.referrer"] },
        get_referrer: { urlParts: "any" },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __html: { unsafe_inject_arbitrary_html: {} },
      __v: { read_data_layer: { allowedKeys: "any" } },
    },

    security_groups: {
      customScripts: ["__html"],
      google: ["__e", "__evl", "__f", "__googtag", "__v"],
      nonGoogleScripts: ["__bzi"],
    },
  };

  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ea = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    fa = ea(this),
    ha = function (a, b) {
      if (b)
        a: {
          for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ba(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ha("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      ba(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var ia =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ka;
  if (typeof Object.setPrototypeOf == "function") ka = Object.setPrototypeOf;
  else {
    var la;
    a: {
      var ma = { a: !0 },
        na = {};
      try {
        na.__proto__ = ma;
        la = na.a;
        break a;
      } catch (a) {}
      la = !1;
    }
    ka = la
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ka,
    ra = function (a, b) {
      a.prototype = ia(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.vo = b.prototype;
    },
    l = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    sa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ta = function (a) {
      return a instanceof Array ? a : sa(l(a));
    },
    wa = function (a) {
      return va(a, a);
    },
    va = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    xa =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ha("Object.assign", function (a) {
    return a || xa;
  });
  var ya = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var za = this || self;
  var Aa = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ca = function () {
    this.map = {};
    this.j = {};
  };
  h = Ca.prototype;
  h.get = function (a) {
    return this.map["dust." + a];
  };
  h.set = function (a, b) {
    var c = "dust." + a;
    this.j.hasOwnProperty(c) || (this.map[c] = b);
  };
  h.Ai = function (a, b) {
    this.set(a, b);
    this.j["dust." + a] = !0;
  };
  h.has = function (a) {
    return this.map.hasOwnProperty("dust." + a);
  };
  h.remove = function (a) {
    var b = "dust." + a;
    this.j.hasOwnProperty(b) || delete this.map[b];
  };
  var Da = function (a, b) {
    var c = [],
      d;
    for (d in a.map)
      if (a.map.hasOwnProperty(d)) {
        var e = d.substring(5);
        switch (b) {
          case 1:
            c.push(e);
            break;
          case 2:
            c.push(a.map[d]);
            break;
          case 3:
            c.push([e, a.map[d]]);
        }
      }
    return c;
  };
  Ca.prototype.na = function () {
    return Da(this, 1);
  };
  Ca.prototype.Xb = function () {
    return Da(this, 2);
  };
  Ca.prototype.Hb = function () {
    return Da(this, 3);
  };
  var Ea = function () {};
  Ea.prototype.reset = function () {};
  var Fa = function (a, b) {
    this.K = a;
    this.parent = b;
    this.j = this.C = void 0;
    this.Ac = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ca();
  };
  Fa.prototype.add = function (a, b) {
    Ga(this, a, b, !1);
  };
  var Ga = function (a, b, c, d) {
    a.Ac || (d ? a.values.Ai(b, c) : a.values.set(b, c));
  };
  Fa.prototype.set = function (a, b) {
    this.Ac ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Fa.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Fa.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ha = function (a) {
    var b = new Fa(a.K, a);
    a.C && (b.C = a.C);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Fa.prototype.Od = function () {
    return this.K;
  };
  Fa.prototype.Ia = function () {
    this.Ac = !0;
  };
  function Ia(a, b) {
    for (
      var c, d = l(b), e = d.next();
      !e.done && !((c = Ja(a, e.value)), c instanceof Aa);
      e = d.next()
    );
    return c;
  }
  function Ja(a, b) {
    try {
      var c = l(b),
        d = c.next().value,
        e = sa(c),
        f = a.get(String(d));
      if (!f || typeof f.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return f.invoke.apply(f, [a].concat(ta(e)));
    } catch (k) {
      var g = a.C;
      g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
      throw k;
    }
  }
  var Ka = function () {
    this.C = new Ea();
    this.j = new Fa(this.C);
  };
  h = Ka.prototype;
  h.Od = function () {
    return this.C;
  };
  h.execute = function (a) {
    return this.xi([a].concat(ta(ya.apply(1, arguments))));
  };
  h.xi = function () {
    for (
      var a, b = l(ya.apply(0, arguments)), c = b.next();
      !c.done;
      c = b.next()
    )
      a = Ja(this.j, c.value);
    return a;
  };
  h.Fl = function (a) {
    var b = ya.apply(1, arguments),
      c = Ha(this.j);
    c.j = a;
    for (var d, e = l(b), f = e.next(); !f.done; f = e.next())
      d = Ja(c, f.value);
    return d;
  };
  h.Ia = function () {
    this.j.Ia();
  };
  var La = function () {
    this.oa = !1;
    this.T = new Ca();
  };
  h = La.prototype;
  h.get = function (a) {
    return this.T.get(a);
  };
  h.set = function (a, b) {
    this.oa || this.T.set(a, b);
  };
  h.has = function (a) {
    return this.T.has(a);
  };
  h.Ai = function (a, b) {
    this.oa || this.T.Ai(a, b);
  };
  h.remove = function (a) {
    this.oa || this.T.remove(a);
  };
  h.na = function () {
    return this.T.na();
  };
  h.Xb = function () {
    return this.T.Xb();
  };
  h.Hb = function () {
    return this.T.Hb();
  };
  h.Ia = function () {
    this.oa = !0;
  };
  h.Ac = function () {
    return this.oa;
  };
  function Na() {
    for (var a = Oa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Pa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Oa, Qa;
  function Ra(a) {
    Oa = Oa || Pa();
    Qa = Qa || Na();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Oa[m], Oa[n], Oa[p], Oa[q]);
    }
    return b.join("");
  }
  function Sa(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Qa[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Oa = Oa || Pa();
    Qa = Qa || Na();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Ua = {};
  function Va(a, b) {
    Ua[a] = Ua[a] || [];
    Ua[a][b] = !0;
  }
  function Wa(a) {
    var b = Ua[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return Ra(c.join("")).replace(/\.+$/, "");
  }
  function Xa() {
    for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  function Ya() {}
  function Za(a) {
    return typeof a === "function";
  }
  function z(a) {
    return typeof a === "string";
  }
  function $a(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function ab(a) {
    return Array.isArray(a) ? a : [a];
  }
  function bb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function db(a, b) {
    if (!$a(a) || !$a(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function eb(a, b) {
    for (var c = new fb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function gb(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function hb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function ib(a) {
    return Math.round(Number(a)) || 0;
  }
  function jb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function kb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function lb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function mb() {
    return new Date(Date.now());
  }
  function nb() {
    return mb().getTime();
  }
  var fb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  fb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  fb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  fb.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function ob(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function pb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function qb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function rb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function sb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function tb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function ub(a, b) {
    var c = A;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function vb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var wb = /^\w{1,9}$/;
  function xb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    gb(a, function (d, e) {
      wb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function yb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function zb(a) {
    if (!a) return a;
    var b = a;
    try {
      b = decodeURIComponent(a);
    } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  function Ab(a, b, c) {
    function d(n) {
      var p = n.split("=")[0];
      if (a.indexOf(p) < 0) return n;
      if (c !== void 0) return p + "=" + c;
    }
    function e(n) {
      return n
        .split("&")
        .map(d)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var f = b.href.split(/[?#]/)[0],
      g = b.search,
      k = b.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = e(g);
    k = e(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function Bb(a) {
    for (var b = 0; b < 3; ++b)
      try {
        var c = decodeURIComponent(a).replace(/\+/g, " ");
        if (c === a) break;
        a = c;
      } catch (d) {
        return "";
      }
    return a;
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Cb = globalThis.trustedTypes,
    Db;
  function Eb() {
    var a = null;
    if (!Cb) return a;
    try {
      var b = function (c) {
        return c;
      };
      a = Cb.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (c) {}
    return a;
  }
  function Fb() {
    Db === void 0 && (Db = Eb());
    return Db;
  }
  var Gb = function (a) {
    this.j = a;
  };
  Gb.prototype.toString = function () {
    return this.j + "";
  };
  function Hb(a) {
    var b = a,
      c = Fb();
    return new Gb(c ? c.createScriptURL(b) : b);
  }
  function Ib(a) {
    if (a instanceof Gb) return a.j;
    throw Error("");
  }
  var Jb = wa([""]),
    Kb = va(["\x00"], ["\\0"]),
    Lb = va(["\n"], ["\\n"]),
    Mb = va(["\x00"], ["\\u0000"]);
  function Nb(a) {
    return a.toString().indexOf("`") === -1;
  }
  Nb(function (a) {
    return a(Jb);
  }) ||
    Nb(function (a) {
      return a(Kb);
    }) ||
    Nb(function (a) {
      return a(Lb);
    }) ||
    Nb(function (a) {
      return a(Mb);
    });
  var Ob = function (a) {
    this.j = a;
  };
  Ob.prototype.toString = function () {
    return this.j;
  };
  var Pb = function (a) {
    this.Tm = a;
  };
  function Qb(a) {
    return new Pb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Rb = [
    Qb("data"),
    Qb("http"),
    Qb("https"),
    Qb("mailto"),
    Qb("ftp"),
    new Pb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Sb(a) {
    var b;
    b = b === void 0 ? Rb : b;
    if (a instanceof Ob) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Pb && d.Tm(a)) return new Ob(a);
    }
  }
  var Tb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Ub(a) {
    var b;
    if (a instanceof Ob)
      if (a instanceof Ob) b = a.j;
      else throw Error("");
    else b = Tb.test(a) ? a : void 0;
    return b;
  }
  var Wb = function () {
    this.j = Vb[0].toLowerCase();
  };
  Wb.prototype.toString = function () {
    return this.j;
  };
  var Xb = function (a) {
    this.j = a;
  };
  Xb.prototype.toString = function () {
    return this.j + "";
  };
  function Yb(a, b) {
    var c = [new Wb()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Wb) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Zb(a, b) {
    var c = Ub(b);
    c !== void 0 && (a.action = c);
  }
  var $b = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function ac(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var A = window,
    bc = window.history,
    E = document,
    cc = navigator;
  function dc() {
    var a;
    try {
      a = cc.serviceWorker;
    } catch (b) {
      return;
    }
    return a;
  }
  var ec = E.currentScript,
    fc = ec && ec.src;
  function gc(a, b) {
    var c = A[a];
    A[a] = c === void 0 ? b : c;
    return A[a];
  }
  function hc(a) {
    return (cc.userAgent || "").indexOf(a) !== -1;
  }
  var ic = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    jc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function kc(a, b, c) {
    b &&
      gb(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  function lc(a, b, c, d, e) {
    var f = E.createElement("script");
    kc(f, d, ic);
    f.type = "text/javascript";
    f.async = d && d.async === !1 ? !1 : !0;
    var g;
    g = Hb(ac(a));
    f.src = Ib(g);
    var k,
      m = f.ownerDocument;
    m = m === void 0 ? document : m;
    var n,
      p,
      q =
        (p = (n = "document" in m ? m.document : m).querySelector) == null
          ? void 0
          : p.call(n, "script[nonce]");
    (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") &&
      f.setAttribute("nonce", k);
    b && (f.onload = b);
    c && (f.onerror = c);
    if (e) e.appendChild(f);
    else {
      var r = E.getElementsByTagName("script")[0] || E.body || E.head;
      r.parentNode.insertBefore(f, r);
    }
    return f;
  }
  function mc() {
    if (fc) {
      var a = fc.toLowerCase();
      if (a.indexOf("https://") === 0) return 2;
      if (a.indexOf("http://") === 0) return 3;
    }
    return 1;
  }
  function nc(a, b, c, d, e) {
    var f;
    f = f === void 0 ? !0 : f;
    var g = e,
      k = !1;
    g || ((g = E.createElement("iframe")), (k = !0));
    kc(g, c, jc);
    d &&
      gb(d, function (n, p) {
        g.dataset[n] = p;
      });
    f &&
      ((g.height = "0"),
      (g.width = "0"),
      (g.style.display = "none"),
      (g.style.visibility = "hidden"));
    a !== void 0 && (g.src = a);
    if (k) {
      var m = (E.body && E.body.lastChild) || E.body || E.head;
      m.parentNode.insertBefore(g, m);
    }
    b && (g.onload = b);
    return g;
  }
  function oc(a, b, c, d) {
    pc(a, b, c, d);
  }
  function qc(a, b, c, d) {
    a.addEventListener && a.addEventListener(b, c, !!d);
  }
  function rc(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }
  function H(a) {
    A.setTimeout(a, 0);
  }
  function sc(a, b) {
    return a && b && a.attributes && a.attributes[b]
      ? a.attributes[b].value
      : null;
  }
  function tc(a) {
    var b = a.innerText || a.textContent || "";
    b &&
      b !== " " &&
      ((b = b.replace(/^[\s\xa0]+/g, "")), (b = b.replace(/[\s\xa0]+$/g, "")));
    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
    return b;
  }
  function uc(a) {
    var b = E.createElement("div"),
      c = b,
      d,
      e = ac("A<div>" + a + "</div>"),
      f = Fb();
    d = new Xb(f ? f.createHTML(e) : e);
    if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
      throw Error("");
    var g;
    if (d instanceof Xb) g = d.j;
    else throw Error("");
    c.innerHTML = g;
    b = b.lastChild;
    for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
    return k;
  }
  function vc(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }
  function wc(a, b, c) {
    var d;
    try {
      d = cc.sendBeacon && cc.sendBeacon(a);
    } catch (e) {
      Va("TAGGING", 15);
    }
    d ? b == null || b() : pc(a, b, c);
  }
  function xc(a, b) {
    try {
      return cc.sendBeacon(a, b);
    } catch (c) {
      Va("TAGGING", 15);
    }
    return !1;
  }
  var yc = {
    cache: "no-store",
    credentials: "include",
    keepalive: !0,
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
  };
  function zc(a, b, c, d, e) {
    if (Ac()) {
      var f = Object.assign({}, yc);
      b && (f.body = b);
      c &&
        (c.attributionReporting &&
          (f.attributionReporting = c.attributionReporting),
        c.browsingTopics && (f.browsingTopics = c.browsingTopics),
        c.credentials && (f.credentials = c.credentials));
      try {
        var g = A.fetch(a, f);
        if (g)
          return (
            g
              .then(function (m) {
                m && m.ok ? d == null || d() : e == null || e();
              })
              .catch(function () {
                e == null || e();
              }),
            !0
          );
      } catch (m) {}
    }
    if (c && c.Fk) return e == null || e(), !1;
    if (b) {
      var k = xc(a, b);
      k ? d == null || d() : e == null || e();
      return k;
    }
    wc(a, d, e);
    return !0;
  }
  function Ac() {
    return typeof A.fetch === "function";
  }
  function Bc(a, b) {
    var c = a[b];
    c && typeof c.animVal === "string" && (c = c.animVal);
    return c;
  }
  function Cc() {
    var a = A.performance;
    if (a && Za(a.now)) return a.now();
  }
  function Dc() {
    var a,
      b = A.performance;
    if (b && b.getEntriesByType)
      try {
        var c = b.getEntriesByType("navigation");
        c && c.length > 0 && (a = c[0].type);
      } catch (d) {
        return "e";
      }
    if (!a) return "u";
    switch (a) {
      case "navigate":
        return "n";
      case "back_forward":
        return "h";
      case "reload":
        return "r";
      case "prerender":
        return "p";
      default:
        return "x";
    }
  }
  function Ec() {
    return A.performance || void 0;
  }
  function Fc() {
    var a = A.webPixelsManager;
    return a ? a.createShopifyExtend !== void 0 : !1;
  }
  var pc = function (a, b, c, d) {
    var e = new Image(1, 1);
    kc(e, d, {});
    e.onload = function () {
      e.onload = null;
      b && b();
    };
    e.onerror = function () {
      e.onerror = null;
      c && c();
    };
    e.src = a;
    return e;
  };
  function Gc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Ic(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Jc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Kc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function Lc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Mc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = A.location.href;
        b instanceof La &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  } /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Nc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Oc = function (a) {
      if (a == null) return String(a);
      var b = Nc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Pc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Qc = function (a) {
      if (!a || Oc(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Pc(a, "constructor") &&
          !Pc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Pc(a, b);
    },
    Rc = function (a, b) {
      var c = b || (Oc(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Pc(a, d)) {
          var e = a[d];
          Oc(e) == "array"
            ? (Oc(c[d]) != "array" && (c[d] = []), (c[d] = Rc(e, c[d])))
            : Qc(e)
            ? (Qc(c[d]) || (c[d] = {}), (c[d] = Rc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Sc(a) {
    if (a == void 0 || Array.isArray(a) || Qc(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Tc(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var Uc = function (a) {
    a = a === void 0 ? [] : a;
    this.T = new Ca();
    this.values = [];
    this.oa = !1;
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Tc(b) ? (this.values[Number(b)] = a[Number(b)]) : this.T.set(b, a[b]));
  };
  h = Uc.prototype;
  h.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.values.length; c++) {
      var d = this.values[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof Uc
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  h.set = function (a, b) {
    if (!this.oa)
      if (a === "length") {
        if (!Tc(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.values.length = Number(b);
      } else Tc(a) ? (this.values[Number(a)] = b) : this.T.set(a, b);
  };
  h.get = function (a) {
    return a === "length"
      ? this.length()
      : Tc(a)
      ? this.values[Number(a)]
      : this.T.get(a);
  };
  h.length = function () {
    return this.values.length;
  };
  h.na = function () {
    for (var a = this.T.na(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(String(b));
    return a;
  };
  h.Xb = function () {
    for (var a = this.T.Xb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(this.values[b]);
    return a;
  };
  h.Hb = function () {
    for (var a = this.T.Hb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
    return a;
  };
  h.remove = function (a) {
    Tc(a) ? delete this.values[Number(a)] : this.oa || this.T.remove(a);
  };
  h.pop = function () {
    return this.values.pop();
  };
  h.push = function () {
    return this.values.push.apply(this.values, ta(ya.apply(0, arguments)));
  };
  h.shift = function () {
    return this.values.shift();
  };
  h.splice = function (a, b) {
    var c = ya.apply(2, arguments);
    return b === void 0 && c.length === 0
      ? new Uc(this.values.splice(a))
      : new Uc(
          this.values.splice.apply(this.values, [a, b || 0].concat(ta(c)))
        );
  };
  h.unshift = function () {
    return this.values.unshift.apply(this.values, ta(ya.apply(0, arguments)));
  };
  h.has = function (a) {
    return (Tc(a) && this.values.hasOwnProperty(a)) || this.T.has(a);
  };
  h.Ia = function () {
    this.oa = !0;
    Object.freeze(this.values);
  };
  h.Ac = function () {
    return this.oa;
  };
  function Vc(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var Wc = function (a, b) {
    this.functionName = a;
    this.Nd = b;
    this.T = new Ca();
    this.oa = !1;
  };
  h = Wc.prototype;
  h.toString = function () {
    return this.functionName;
  };
  h.getName = function () {
    return this.functionName;
  };
  h.invoke = function (a) {
    return this.Nd.call.apply(
      this.Nd,
      [new Xc(this, a)].concat(ta(ya.apply(1, arguments)))
    );
  };
  h.tb = function (a) {
    var b = ya.apply(1, arguments);
    try {
      return this.invoke.apply(this, [a].concat(ta(b)));
    } catch (c) {}
  };
  h.get = function (a) {
    return this.T.get(a);
  };
  h.set = function (a, b) {
    this.oa || this.T.set(a, b);
  };
  h.has = function (a) {
    return this.T.has(a);
  };
  h.remove = function (a) {
    this.oa || this.T.remove(a);
  };
  h.na = function () {
    return this.T.na();
  };
  h.Xb = function () {
    return this.T.Xb();
  };
  h.Hb = function () {
    return this.T.Hb();
  };
  h.Ia = function () {
    this.oa = !0;
  };
  h.Ac = function () {
    return this.oa;
  };
  var Xc = function (a, b) {
    this.Nd = a;
    this.D = b;
  };
  Xc.prototype.evaluate = function (a) {
    var b = this.D;
    return Array.isArray(a) ? Ja(b, a) : a;
  };
  Xc.prototype.getName = function () {
    return this.Nd.getName();
  };
  Xc.prototype.Od = function () {
    return this.D.Od();
  };
  var Yc = function () {
    this.map = new Map();
  };
  Yc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Yc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var Zc = function () {
    this.keys = [];
    this.values = [];
  };
  Zc.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  Zc.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function $c() {
    try {
      return Map ? new Yc() : new Zc();
    } catch (a) {
      return new Zc();
    }
  }
  var ad = function (a) {
    if (a instanceof ad) return a;
    if (Sc(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  ad.prototype.getValue = function () {
    return this.value;
  };
  ad.prototype.toString = function () {
    return String(this.value);
  };
  var cd = function (a) {
    this.promise = a;
    this.oa = !1;
    this.T = new Ca();
    this.T.set("then", bd(this));
    this.T.set("catch", bd(this, !0));
    this.T.set("finally", bd(this, !1, !0));
  };
  h = cd.prototype;
  h.get = function (a) {
    return this.T.get(a);
  };
  h.set = function (a, b) {
    this.oa || this.T.set(a, b);
  };
  h.has = function (a) {
    return this.T.has(a);
  };
  h.remove = function (a) {
    this.oa || this.T.remove(a);
  };
  h.na = function () {
    return this.T.na();
  };
  h.Xb = function () {
    return this.T.Xb();
  };
  h.Hb = function () {
    return this.T.Hb();
  };
  var bd = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Wc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Wc || (d = void 0);
      e instanceof Wc || (e = void 0);
      var f = Ha(this.D),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new cd(k);
    });
  };
  cd.prototype.Ia = function () {
    this.oa = !0;
  };
  cd.prototype.Ac = function () {
    return this.oa;
  };
  function I(a, b, c) {
    var d = $c(),
      e = function (g, k) {
        for (var m = g.na(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        if (g === null || g === void 0) return g;
        var k = d.get(g);
        if (k) return k;
        if (g instanceof Uc) {
          var m = [];
          d.set(g, m);
          for (var n = g.na(), p = 0; p < n.length; p++)
            m[n[p]] = f(g.get(n[p]));
          return m;
        }
        if (g instanceof cd) return g.promise;
        if (g instanceof La) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Wc) {
          var r = function () {
            for (
              var v = ya.apply(0, arguments), t = [], w = 0;
              w < v.length;
              w++
            )
              t[w] = dd(v[w], b, c);
            var x = new Fa(b ? b.Od() : new Ea());
            b && (x.j = b.j);
            return f(g.invoke.apply(g, [x].concat(ta(t))));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var u = !1;
        switch (c) {
          case 1:
            u = !0;
            break;
          case 2:
            u = !1;
            break;
          case 3:
            u = !1;
            break;
          default:
        }
        if (g instanceof ad && u) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function dd(a, b, c) {
    var d = $c(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || hb(g)) {
          var m = new Uc([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Qc(g)) {
          var p = new La();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new Wc("", function () {
            for (var x = ya.apply(0, arguments), y = 0; y < x.length; y++)
              x[y] = I(this.evaluate(x[y]), b, c);
            return f((0, this.D.H)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var t = typeof g;
        if (g === null || t === "string" || t === "number" || t === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new ad(g);
      };
    return f(a);
  }
  function ed() {
    var a = !1;
    return a;
  }
  var fd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Uc)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Uc(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Uc(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Uc(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, ta(ya.apply(1, arguments)));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = Vc(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Uc(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Vc(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(this, [b, c].concat(ta(ya.apply(3, arguments))));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, ta(ya.apply(1, arguments)));
    },
  };
  var gd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ra(gd, Error);
  var hd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    id = new Aa("break"),
    jd = new Aa("continue");
  function kd(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function ld(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function md(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof Uc))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = I(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (ed()) throw new gd(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (hd.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = I(c, void 0, k);
        return dd(a[b].apply(a, m), this.D);
      }
      var n = "TypeError: " + b + " is not a function";
      if (ed()) throw new gd(n);
      throw Error(n);
    }
    if (a instanceof Uc) {
      if (a.has(b)) {
        var p = a.get(String(b));
        if (p instanceof Wc) {
          var q = Vc(c);
          return p.invoke.apply(p, [this.D].concat(ta(q)));
        }
        var r = "TypeError: " + b + " is not a function";
        if (ed()) throw new gd(r);
        throw Error(r);
      }
      if (fd.supportedMethods.indexOf(b) >= 0) {
        var u = Vc(c);
        return fd[b].call.apply(fd[b], [a, this.D].concat(ta(u)));
      }
    }
    if (a instanceof Wc || a instanceof La || a instanceof cd) {
      if (a.has(b)) {
        var v = a.get(b);
        if (v instanceof Wc) {
          var t = Vc(c);
          return v.invoke.apply(v, [this.D].concat(ta(t)));
        }
        var w = "TypeError: " + b + " is not a function";
        if (ed()) throw new gd(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof Wc ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has(c.get(0));
    }
    if (a instanceof ad && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (ed()) throw new gd(x);
    throw Error(x);
  }
  function nd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.D;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function od() {
    var a = ya.apply(0, arguments),
      b = Ha(this.D),
      c = Ia(b, a);
    if (c instanceof Aa) return c;
  }
  function pd() {
    return id;
  }
  function qd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Aa) return d;
    }
  }
  function rd() {
    for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Ga(a, c, d, !0);
      }
    }
  }
  function sd() {
    return jd;
  }
  function td(a, b) {
    return new Aa(a, this.evaluate(b));
  }
  function ud(a, b) {
    var c = ya.apply(2, arguments),
      d = new Uc();
    b = this.evaluate(b);
    for (var e = 0; e < b.length; e++) d.push(b[e]);
    var f = [51, a, d].concat(ta(c));
    this.D.add(a, this.evaluate(f));
  }
  function vd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function wd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof ad,
      d = b instanceof ad;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function xd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function yd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ia(f, d);
      if (g instanceof Aa) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function zd(a, b, c) {
    if (typeof b === "string")
      return yd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (
      b instanceof La ||
      b instanceof cd ||
      b instanceof Uc ||
      b instanceof Wc
    ) {
      var d = b.na(),
        e = d.length;
      return yd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d[f];
        },
        c
      );
    }
  }
  function Ad(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Bd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Cd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Dd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Fd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Gd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Ed(a, b, c) {
    if (typeof b === "string")
      return yd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Uc)
      return yd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (ed()) throw new gd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Hd(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var u = f.get(r);
        q.add(u, p.get(u));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof Uc))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.D;
    d = this.evaluate(d);
    var k = Ha(g);
    for (e(g, k); Ja(k, b); ) {
      var m = Ia(k, d);
      if (m instanceof Aa) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Ha(g);
      e(k, n);
      Ja(n, c);
      k = n;
    }
  }
  function Id(a, b) {
    var c = ya.apply(2, arguments),
      d = this.D,
      e = this.evaluate(b);
    if (!(e instanceof Uc))
      throw Error("Error: non-List value given for Fn argument names.");
    return new Wc(
      a,
      (function () {
        return function () {
          var f = ya.apply(0, arguments),
            g = Ha(d);
          g.j === void 0 && (g.j = this.D.j);
          for (var k = 0; k < f.length; k++)
            if (((f[k] = this.evaluate(f[k])), f[k] instanceof Aa)) return f[k];
          for (var m = e.get("length"), n = 0; n < m; n++)
            n < f.length ? g.add(e.get(n), f[n]) : g.add(e.get(n), void 0);
          g.add("arguments", new Uc(f));
          var p = Ia(g, c);
          if (p instanceof Aa) return p.type === "return" ? p.data : p;
        };
      })()
    );
  }
  function Jd(a) {
    a = this.evaluate(a);
    var b = this.D;
    if (Kd && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Ld(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    if (
      a instanceof La ||
      a instanceof cd ||
      a instanceof Uc ||
      a instanceof Wc
    )
      c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : Tc(b) && (c = a[b]);
    else if (a instanceof ad) return;
    return c;
  }
  function Md(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Nd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Od(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof ad && (a = a.getValue());
    b instanceof ad && (b = b.getValue());
    return a === b;
  }
  function Pd(a, b) {
    return !Od.call(this, a, b);
  }
  function Qd(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ia(this.D, d);
    if (e instanceof Aa) return e;
  }
  var Kd = !1;
  function Rd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Sd(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Td() {
    for (var a = new Uc(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Ud() {
    for (var a = new La(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Vd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function Wd(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function Xd(a) {
    return -this.evaluate(a);
  }
  function Yd(a) {
    return !this.evaluate(a);
  }
  function Zd(a, b) {
    return !wd.call(this, a, b);
  }
  function $d() {
    return null;
  }
  function ae(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function be(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function ce(a) {
    return this.evaluate(a);
  }
  function de() {
    return ya.apply(0, arguments);
  }
  function ee(a) {
    return new Aa("return", this.evaluate(a));
  }
  function fe(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    (a instanceof Wc || a instanceof Uc || a instanceof La) &&
      a.set(String(b), c);
    return c;
  }
  function ge(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function he(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof Aa)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Aa && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function ie(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function je(a) {
    a = this.evaluate(a);
    return a instanceof Wc ? "function" : typeof a;
  }
  function ke() {
    for (var a = this.D, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function le(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ia(this.D, e);
      if (f instanceof Aa) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ia(this.D, e);
      if (g instanceof Aa) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function me(a) {
    return ~Number(this.evaluate(a));
  }
  function ne(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function oe(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function pe(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function qe(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function te() {}
  function ue(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Aa) return g;
    } catch (r) {
      if (!(r instanceof gd && a)) throw ((f = r instanceof gd), r);
      var k = Ha(this.D),
        m = new ad(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Ia(k, n);
      if (p instanceof Aa) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Aa) return q;
      }
    }
  }
  var we = function () {
    this.j = new Ka();
    ve(this);
  };
  we.prototype.execute = function (a) {
    return this.j.xi(a);
  };
  var ve = function (a) {
    var b = function (c, d) {
      var e = new Wc(String(c), d);
      e.Ia();
      a.j.j.set(String(c), e);
    };
    b("map", Ud);
    b("and", Gc);
    b("contains", Kc);
    b("equals", Ic);
    b("or", Jc);
    b("startsWith", Lc);
    b("variable", Mc);
  };
  var ye = function () {
    this.C = !1;
    this.j = new Ka();
    xe(this);
    this.C = !0;
  };
  ye.prototype.execute = function (a) {
    return ze(this.j.xi(a));
  };
  var Ae = function (a, b, c) {
    return ze(a.j.Fl(b, c));
  };
  ye.prototype.Ia = function () {
    this.j.Ia();
  };
  var xe = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new Wc(e, d);
      f.Ia();
      a.j.j.set(e, f);
    };
    b(0, kd);
    b(1, ld);
    b(2, md);
    b(3, nd);
    b(56, qe);
    b(57, ne);
    b(58, me);
    b(59, se);
    b(60, oe);
    b(61, pe);
    b(62, re);
    b(53, od);
    b(4, pd);
    b(5, qd);
    b(52, rd);
    b(6, sd);
    b(49, td);
    b(7, Td);
    b(8, Ud);
    b(9, qd);
    b(50, ud);
    b(10, vd);
    b(12, wd);
    b(13, xd);
    b(51, Id);
    b(47, Ad);
    b(54, Bd);
    b(55, Cd);
    b(63, Hd);
    b(64, Dd);
    b(65, Fd);
    b(66, Gd);
    b(15, Jd);
    b(16, Ld);
    b(17, Ld);
    b(18, Md);
    b(19, Nd);
    b(20, Od);
    b(21, Pd);
    b(22, Qd);
    b(23, Rd);
    b(24, Sd);
    b(25, Vd);
    b(26, Wd);
    b(27, Xd);
    b(28, Yd);
    b(29, Zd);
    b(45, $d);
    b(30, ae);
    b(32, be);
    b(33, be);
    b(34, ce);
    b(35, ce);
    b(46, de);
    b(36, ee);
    b(43, fe);
    b(37, ge);
    b(38, he);
    b(39, ie);
    b(67, ue);
    b(40, je);
    b(44, te);
    b(41, ke);
    b(42, le);
  };
  ye.prototype.Od = function () {
    return this.j.Od();
  };
  function ze(a) {
    if (
      a instanceof Aa ||
      a instanceof Wc ||
      a instanceof Uc ||
      a instanceof La ||
      a instanceof cd ||
      a instanceof ad ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Be = function (a) {
    this.message = a;
  };
  function Ce(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Be(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function De(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Ee = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Fe(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + Ce(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + Ce(a | b) + c);
  }
  var Ge = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      al: a("consent"),
      Mi: a("convert_case_to"),
      Ni: a("convert_false_to"),
      Oi: a("convert_null_to"),
      Pi: a("convert_true_to"),
      Qi: a("convert_undefined_to"),
      Nn: a("debug_mode_metadata"),
      xa: a("function"),
      zh: a("instance_name"),
      Il: a("live_only"),
      Jl: a("malware_disabled"),
      METADATA: a("metadata"),
      Ml: a("original_activity_id"),
      Zn: a("original_vendor_template_id"),
      Yn: a("once_on_load"),
      Ll: a("once_per_event"),
      bk: a("once_per_load"),
      bo: a("priority_override"),
      co: a("respected_consent_types"),
      kk: a("setup_tags"),
      Qe: a("tag_id"),
      qk: a("teardown_tags"),
    };
  })();
  var ef;
  var ff = [],
    gf = [],
    hf = [],
    jf = [],
    kf = [],
    lf = {},
    mf,
    nf;
  function of(a) {
    nf = nf || a;
  }
  function pf(a) {}
  var qf,
    rf = [],
    sf = [];
  function tf(a, b) {
    var c = {};
    c[Ge.xa] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function uf(a, b, c) {
    try {
      return mf(vf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function wf(a) {
    var b = a[Ge.xa];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!lf[b];
  }
  var vf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
      return d;
    },
    xf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(xf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ff[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Ge.zh]);
            try {
              var m = vf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = yf(m, { event: b, index: f, type: 2, name: k });
              qf && (d = qf.bm(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = xf(a[q], b, c);
              nf && (p = p || nf.Qm(r));
              d.push(r);
            }
            return nf && p ? nf.gm(d) : d.join("");
          case "escape":
            d = xf(a[1], b, c);
            if (nf && Array.isArray(a[1]) && a[1][0] === "macro" && nf.Rm(a))
              return nf.nn(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Ne[a[u]] && (d = Ne[a[u]](d));
            return d;
          case "tag":
            var v = a[1];
            if (!jf[v])
              throw Error("Unable to resolve tag reference " + v + ".");
            return { xk: a[2], index: v };
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t[Ge.xa] = a[1];
            var w = uf(t, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    yf = function (a, b) {
      var c = a[Ge.xa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = lf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          rf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          sb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = ff[q];
                  break;
                case 1:
                  r = jf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var u = r && r[Ge.zh];
              n = u ? String(u) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var v, t, w;
      if (f && sf.indexOf(c) === -1) {
        sf.push(c);
        var x = nb();
        v = e(g);
        var y = nb() - x,
          B = nb();
        t = ef(c, k, b);
        w = y - (nb() - B);
      } else if ((e && (v = e(g)), !e || f)) t = ef(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Sc(v)
          ? (Array.isArray(v)
              ? Array.isArray(t)
              : Qc(v)
              ? Qc(t)
              : typeof v === "function"
              ? typeof t === "function"
              : v === t) || d.reportMacroDiscrepancy(d.id, c)
          : v !== t && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : t;
    };
  var zf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ra(zf, Error);
  zf.prototype.getMessage = function () {
    return this.message;
  };
  function Af(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Af(a[c], b[c]);
    }
  }
  var Bf = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.gn = a;
    this.j = [];
    this.C = b;
  };
  ra(Bf, Error);
  function Cf() {
    return function (a, b) {
      a instanceof Bf || (a = new Bf(a, Df));
      b && a instanceof Bf && a.j.push(b);
      throw a;
    };
  }
  function Df(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) $a(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Ef(a) {
    function b(r) {
      for (var u = 0; u < r.length; u++) d[r[u]] = !0;
    }
    for (var c = [], d = [], e = Ff(a), f = 0; f < gf.length; f++) {
      var g = gf[f],
        k = Gf(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < jf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function Gf(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Ff(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = uf(hf[c], a));
      return b[c];
    };
  }
  function Hf(a, b) {
    b[Ge.Mi] &&
      typeof a === "string" &&
      (a = b[Ge.Mi] === 1 ? a.toLowerCase() : a.toUpperCase());
    b.hasOwnProperty(Ge.Oi) && a === null && (a = b[Ge.Oi]);
    b.hasOwnProperty(Ge.Qi) && a === void 0 && (a = b[Ge.Qi]);
    b.hasOwnProperty(Ge.Pi) && a === !0 && (a = b[Ge.Pi]);
    b.hasOwnProperty(Ge.Ni) && a === !1 && (a = b[Ge.Ni]);
    return a;
  }
  var If = function () {
      this.j = {};
    },
    Kf = function (a, b) {
      var c = Jf.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, ta(ya.apply(0, arguments)));
      });
    };
  function Lf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new zf(c, d, g);
      }
  }
  function Mf(a, b, c) {
    return function (d) {
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, [d].concat(ta(ya.apply(1, arguments))));
          Lf(e, b, d, g);
          Lf(f, b, d, g);
        }
      }
    };
  }
  var Qf = function () {
      var a = data.permissions || {},
        b = Nf.ctid,
        c = this;
      this.C = {};
      this.j = new If();
      var d = {},
        e = {},
        f = Mf(this.j, b, function (g) {
          return g && d[g]
            ? d[g].apply(void 0, [g].concat(ta(ya.apply(1, arguments))))
            : {};
        });
      gb(a, function (g, k) {
        function m(p) {
          var q = ya.apply(1, arguments);
          if (!n[p])
            throw Of(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(ta(q)));
        }
        var n = {};
        gb(k, function (p, q) {
          var r = Pf(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.M);
          r.sk && !e[p] && (e[p] = r.sk);
        });
        c.C[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Of(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var u = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, u);
          f.apply(void 0, u);
          var v = e[p];
          v && v.apply(null, [m].concat(ta(u.slice(1))));
        };
      });
    },
    Rf = function (a) {
      return Jf.C[a] || function () {};
    };
  function Pf(a, b) {
    var c = tf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Of;
    try {
      return yf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new zf(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          throw new zf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Of(a, b, c) {
    return new zf(a, b, c);
  }
  var Sf = !1;
  var Tf = {};
  Tf.Sk = jb("");
  Tf.jm = jb("");
  var Zf = {},
    $f =
      ((Zf.uaa = !0),
      (Zf.uab = !0),
      (Zf.uafvl = !0),
      (Zf.uamb = !0),
      (Zf.uam = !0),
      (Zf.uap = !0),
      (Zf.uapv = !0),
      (Zf.uaw = !0),
      Zf);
  var hg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!fg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!gg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? sb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    gg = /^[a-z$_][\w$]*$/i,
    fg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var ig = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function jg(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var kg = new fb();
  function lg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = kg.get(e);
      f || ((f = new RegExp(b, d)), kg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function mg(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function ng(a, b) {
    return String(a) === String(b);
  }
  function og(a, b) {
    return Number(a) >= Number(b);
  }
  function pg(a, b) {
    return Number(a) <= Number(b);
  }
  function qg(a, b) {
    return Number(a) > Number(b);
  }
  function rg(a, b) {
    return Number(a) < Number(b);
  }
  function sg(a, b) {
    return sb(String(a), String(b));
  }
  var tg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    ug = function (a, b) {
      var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
      tg(b, "/*") && (b = b.slice(0, -2));
      tg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && d.length === 1) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (e === -1 || (f === 0 && e !== 0)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var k = d[d.length - 1];
      return a.lastIndexOf(k) === a.length - k.length;
    },
    vg = function (a) {
      return a.protocol === "https:" && (!a.port || a.port === "443");
    },
    yg = function (a, b) {
      var c;
      if (!(c = !vg(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (e.length < 2) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!wg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var k;
        var m = a,
          n = b[g];
        if (!xg.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var u = m.hostname,
          v = q;
        if (v.indexOf("*.") !== 0) r = u.toLowerCase() === v.toLowerCase();
        else {
          v = v.slice(2);
          var t = u.toLowerCase().indexOf(v.toLowerCase());
          r =
            t === -1
              ? !1
              : u.length === v.length
              ? !0
              : u.length !== v.length + t
              ? !1
              : u[t - 1] === ".";
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          k = ug(m.pathname + m.search, w) ? !0 : !1;
        } else k = !1;
        if (k) return !0;
      }
      return !1;
    },
    wg = /^[a-z0-9-]+$/i,
    xg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
  var zg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Ag = { Fn: "function", PixieMap: "Object", List: "Array" };
  function J(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = zg.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof Wc
          ? (n = "Fn")
          : m instanceof Uc
          ? (n = "List")
          : m instanceof La
          ? (n = "PixieMap")
          : m instanceof cd
          ? (n = "PixiePromise")
          : m instanceof ad && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Ag[n] || n) + ", which does not match required type ") +
              ((Ag[k] || k) + ".")
          );
      }
    }
  }
  function Bg(a) {
    return "" + a;
  }
  function Cg(a, b) {
    var c = [];
    return c;
  }
  function Dg(a, b) {
    var c = new Wc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (ed()) throw new gd(g.message);
        throw g;
      }
    });
    c.Ia();
    return c;
  }
  function Eg(a, b) {
    var c = new La(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        Za(e)
          ? c.set(d, Dg(a + "_" + d, e))
          : Qc(e)
          ? c.set(d, Eg(a + "_" + d, e))
          : ($a(e) || z(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ia();
    return c;
  }
  function Fg(a, b) {
    J(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new La();
    return (d = Eg("AssertApiSubject", c));
  }
  function Gg(a, b) {
    J(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof cd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new La();
    return (d = Eg("AssertThatSubject", c));
  }
  function Hg(a) {
    return function () {
      for (var b = [], c = this.D, d = 0; d < arguments.length; ++d)
        b.push(I(arguments[d], c));
      return dd(a.apply(null, b));
    };
  }
  function Ig() {
    for (var a = Math, b = Jg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Hg(a[e].bind(a)));
    }
    return c;
  }
  function Kg(a) {
    var b;
    return b;
  }
  function Lg(a) {
    var b;
    J(this.getName(), ["uri:!string"], arguments);
    try {
      b = decodeURIComponent(a);
    } catch (c) {}
    return b;
  }
  function Mg(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function Ng(a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  }
  function Sg(a) {
    J(this.getName(), ["message:?string"], arguments);
  }
  function Tg(a, b) {
    J(this.getName(), ["min:!number", "max:!number"], arguments);
    return db(a, b);
  }
  function Ug() {
    return new Date().getTime();
  }
  function Vg(a) {
    if (a === null) return "null";
    if (a instanceof Uc) return "array";
    if (a instanceof Wc) return "function";
    if (a instanceof ad) {
      var b;
      a = (b = a) == null ? void 0 : b.getValue();
      var c;
      if (
        ((c = a) == null ? void 0 : c.constructor) === void 0 ||
        a.constructor.name === void 0
      ) {
        var d = String(a);
        return d.substring(8, d.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  }
  function Wg(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Sf || Tf.Sk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return dd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(I(c));
      }),
      R: "JSON",
    };
  }
  function Xg(a) {
    return ib(I(a, this.D));
  }
  function Yg(a) {
    return Number(I(a, this.D));
  }
  function Zg(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function $g(a, b, c) {
    var d = null,
      e = !1;
    J(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new La();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof La &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Jg = "floor ceil round max min abs pow sqrt".split(" ");
  function ah() {
    var a = {};
    return {
      wm: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      Pk: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function bh(a, b) {
    return function () {
      return Wc.prototype.invoke.apply(
        a,
        [b].concat(ta(ya.apply(0, arguments)))
      );
    };
  }
  function ch(a, b) {
    J(this.getName(), ["apiName:!string", "mock:?*"], arguments);
  }
  function dh(a, b) {
    J(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
  }
  var eh = {};
  var fh = function (a) {
    var b = new La();
    if (a instanceof Uc)
      for (var c = a.na(), d = 0; d < c.length; d++) {
        var e = c[d];
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Wc)
      for (var f = a.na(), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  eh.keys = function (a) {
    J(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = fh(a);
    if (a instanceof La || a instanceof cd) return new Uc(a.na());
    return new Uc();
  };
  eh.values = function (a) {
    J(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = fh(a);
    if (a instanceof La || a instanceof cd) return new Uc(a.Xb());
    return new Uc();
  };
  eh.entries = function (a) {
    J(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = fh(a);
    if (a instanceof La || a instanceof cd)
      return new Uc(
        a.Hb().map(function (b) {
          return new Uc(b);
        })
      );
    return new Uc();
  };
  eh.freeze = function (a) {
    (a instanceof La ||
      a instanceof cd ||
      a instanceof Uc ||
      a instanceof Wc) &&
      a.Ia();
    return a;
  };
  eh.delete = function (a, b) {
    if (a instanceof La && !a.Ac()) return a.remove(b), !0;
    return !1;
  };
  function L(a, b) {
    var c = ya.apply(2, arguments),
      d = a.D.j;
    if (!d) throw Error("Missing program state.");
    if (d.tn) {
      try {
        d.tk.apply(null, [b].concat(ta(c)));
      } catch (e) {
        throw (Va("TAGGING", 21), e);
      }
      return;
    }
    d.tk.apply(null, [b].concat(ta(c)));
  }
  var gh = function () {
    this.C = {};
    this.j = {};
    this.H = !0;
  };
  gh.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.C[a] : void 0;
    return c;
  };
  gh.prototype.contains = function (a) {
    return this.C.hasOwnProperty(a);
  };
  gh.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.C[a] = c ? void 0 : Za(b) ? Dg(a, b) : Eg(a, b);
  };
  function hh(a, b) {
    var c = void 0;
    return c;
  }
  function ih() {
    var a = {};
    return a;
  }
  var N = {
      g: {
        za: "ad_personalization",
        N: "ad_storage",
        O: "ad_user_data",
        U: "analytics_storage",
        ub: "region",
        fc: "consent_updated",
        be: "wait_for_update",
        Si: "app_remove",
        Ti: "app_store_refund",
        Ui: "app_store_subscription_cancel",
        Vi: "app_store_subscription_convert",
        Wi: "app_store_subscription_renew",
        il: "consent_update",
        Eg: "add_payment_info",
        Fg: "add_shipping_info",
        Dc: "add_to_cart",
        Ec: "remove_from_cart",
        Gg: "view_cart",
        hc: "begin_checkout",
        Fc: "select_item",
        wb: "view_item_list",
        Ob: "select_promotion",
        xb: "view_promotion",
        Ma: "purchase",
        Gc: "refund",
        Sa: "view_item",
        Hg: "add_to_wishlist",
        jl: "exception",
        Xi: "first_open",
        Yi: "first_visit",
        da: "gtag.config",
        Za: "gtag.get",
        Zi: "in_app_purchase",
        ic: "page_view",
        kl: "screen_view",
        aj: "session_start",
        ml: "timing_complete",
        nl: "track_social",
        ed: "user_engagement",
        ol: "user_id_update",
        ee: "gclid_link_decoration_source",
        fe: "gclid_storage_source",
        yb: "gclgb",
        ab: "gclid",
        bj: "gclid_len",
        fd: "gclgs",
        gd: "gcllp",
        hd: "gclst",
        la: "ads_data_redaction",
        cj: "gad_source",
        dj: "gad_source_src",
        ej: "ndclid",
        fj: "ngad_source",
        gj: "ngbraid",
        ij: "ngclid",
        jj: "ngclsrc",
        he: "gclid_url",
        kj: "gclsrc",
        Ig: "gbraid",
        Ff: "wbraid",
        qa: "allow_ad_personalization_signals",
        Gf: "allow_custom_scripts",
        ie: "allow_direct_google_requests",
        Hf: "allow_display_features",
        je: "allow_enhanced_conversions",
        hb: "allow_google_signals",
        Ea: "allow_interest_groups",
        pl: "app_id",
        ql: "app_installer_id",
        rl: "app_name",
        sl: "app_version",
        zb: "auid",
        lj: "auto_detection_enabled",
        jc: "aw_remarketing",
        If: "aw_remarketing_only",
        ke: "discount",
        me: "aw_feed_country",
        ne: "aw_feed_language",
        fa: "items",
        oe: "aw_merchant_id",
        Jg: "aw_basket_type",
        jd: "campaign_content",
        kd: "campaign_id",
        ld: "campaign_medium",
        md: "campaign_name",
        nd: "campaign",
        od: "campaign_source",
        pd: "campaign_term",
        ib: "client_id",
        mj: "rnd",
        Kg: "consent_update_type",
        nj: "content_group",
        oj: "content_type",
        jb: "conversion_cookie_prefix",
        rd: "conversion_id",
        Aa: "conversion_linker",
        pj: "conversion_linker_disabled",
        kc: "conversion_api",
        Jf: "cookie_deprecation",
        Na: "cookie_domain",
        Ta: "cookie_expires",
        cb: "cookie_flags",
        Hc: "cookie_name",
        lb: "cookie_path",
        Fa: "cookie_prefix",
        mc: "cookie_update",
        Ic: "country",
        Ca: "currency",
        Lg: "customer_buyer_stage",
        pe: "customer_lifetime_value",
        Mg: "customer_loyalty",
        Ng: "customer_ltv_bucket",
        sd: "custom_map",
        Og: "gcldc",
        qe: "dclid",
        Pg: "debug_mode",
        ia: "developer_id",
        qj: "disable_merchant_reported_purchases",
        ud: "dc_custom_params",
        rj: "dc_natural_search",
        Qg: "dynamic_event_settings",
        Rg: "affiliation",
        se: "checkout_option",
        Kf: "checkout_step",
        Sg: "coupon",
        vd: "item_list_name",
        Lf: "list_name",
        sj: "promotions",
        wd: "shipping",
        Mf: "tax",
        te: "engagement_time_msec",
        ue: "enhanced_client_id",
        ve: "enhanced_conversions",
        Tg: "enhanced_conversions_automatic_settings",
        we: "estimated_delivery_date",
        Nf: "euid_logged_in_state",
        xd: "event_callback",
        tl: "event_category",
        nb: "event_developer_id_string",
        vl: "event_label",
        Jc: "event",
        xe: "event_settings",
        ye: "event_timeout",
        wl: "description",
        xl: "fatal",
        tj: "experiments",
        Of: "firebase_id",
        nc: "first_party_collection",
        ze: "_x_20",
        Ab: "_x_19",
        uj: "fledge_drop_reason",
        Ug: "fledge",
        Vg: "flight_error_code",
        Wg: "flight_error_message",
        vj: "fl_activity_category",
        wj: "fl_activity_group",
        Xg: "fl_advertiser_id",
        xj: "fl_ar_dedupe",
        Yg: "match_id",
        yj: "fl_random_number",
        zj: "tran",
        Aj: "u",
        Ae: "gac_gclid",
        Kc: "gac_wbraid",
        Zg: "gac_wbraid_multiple_conversions",
        ah: "ga_restrict_domain",
        bh: "ga_temp_client_id",
        yl: "ga_temp_ecid",
        oc: "gdpr_applies",
        eh: "geo_granularity",
        Pb: "value_callback",
        Bb: "value_key",
        Lc: "_google_ng",
        Mc: "google_signals",
        fh: "google_tld",
        Be: "groups",
        gh: "gsa_experiment_id",
        Bj: "gtm_up",
        Qb: "iframe_state",
        yd: "ignore_referrer",
        Pf: "internal_traffic_results",
        qc: "is_legacy_converted",
        Rb: "is_legacy_loaded",
        Ce: "is_passthrough",
        zd: "_lps",
        Ua: "language",
        De: "legacy_developer_id_string",
        sa: "linker",
        Nc: "accept_incoming",
        Cb: "decorate_forms",
        X: "domains",
        Sb: "url_position",
        Qf: "merchant_feed_label",
        Rf: "merchant_feed_language",
        Sf: "merchant_id",
        hh: "method",
        zl: "name",
        Cj: "navigation_type",
        Bd: "new_customer",
        ih: "non_interaction",
        Dj: "optimize_id",
        jh: "page_hostname",
        Cd: "page_path",
        Ga: "page_referrer",
        eb: "page_title",
        kh: "passengers",
        lh: "phone_conversion_callback",
        Ej: "phone_conversion_country_code",
        mh: "phone_conversion_css_class",
        Fj: "phone_conversion_ids",
        nh: "phone_conversion_number",
        oh: "phone_conversion_options",
        Al: "_platinum_request_status",
        ph: "_protected_audience_enabled",
        Dd: "quantity",
        Ee: "redact_device_info",
        Tf: "referral_exclusion_definition",
        Pn: "_request_start_time",
        Tb: "restricted_data_processing",
        Gj: "retoken",
        Bl: "sample_rate",
        Uf: "screen_name",
        Ub: "screen_resolution",
        Hj: "_script_source",
        Ij: "search_term",
        Oa: "send_page_view",
        rc: "send_to",
        Oc: "server_container_url",
        Ed: "session_duration",
        Fe: "session_engaged",
        Vf: "session_engaged_time",
        pb: "session_id",
        Ge: "session_number",
        Wf: "_shared_user_id",
        Fd: "delivery_postal_code",
        Qn: "_tag_firing_delay",
        Rn: "_tag_firing_time",
        Cl: "temporary_client_id",
        Xf: "topmost_url",
        Jj: "tracking_id",
        Yf: "traffic_type",
        Da: "transaction_id",
        Db: "transport_url",
        qh: "trip_type",
        uc: "update",
        fb: "url_passthrough",
        Kj: "uptgs",
        Zf: "_user_agent_architecture",
        cg: "_user_agent_bitness",
        dg: "_user_agent_full_version_list",
        eg: "_user_agent_mobile",
        fg: "_user_agent_model",
        gg: "_user_agent_platform",
        hg: "_user_agent_platform_version",
        ig: "_user_agent_wow64",
        Ha: "user_data",
        rh: "user_data_auto_latency",
        sh: "user_data_auto_meta",
        th: "user_data_auto_multi",
        uh: "user_data_auto_selectors",
        vh: "user_data_auto_status",
        Gd: "user_data_mode",
        He: "user_data_settings",
        Ba: "user_id",
        qb: "user_properties",
        Lj: "_user_region",
        Hd: "us_privacy_string",
        ra: "value",
        wh: "wbraid_multiple_conversions",
        Id: "_fpm_parameters",
        Sj: "_host_name",
        Tj: "_in_page_command",
        Uj: "_ip_override",
        Vj: "_is_passthrough_cid",
        Vb: "non_personalized_ads",
        Oe: "_sst_parameters",
        kb: "conversion_label",
        wa: "page_location",
        ob: "global_developer_id_string",
        sc: "tc_privacy_string",
      },
    },
    jh = {},
    kh = Object.freeze(
      ((jh[N.g.qa] = 1),
      (jh[N.g.Hf] = 1),
      (jh[N.g.je] = 1),
      (jh[N.g.hb] = 1),
      (jh[N.g.fa] = 1),
      (jh[N.g.Na] = 1),
      (jh[N.g.Ta] = 1),
      (jh[N.g.cb] = 1),
      (jh[N.g.Hc] = 1),
      (jh[N.g.lb] = 1),
      (jh[N.g.Fa] = 1),
      (jh[N.g.mc] = 1),
      (jh[N.g.sd] = 1),
      (jh[N.g.ia] = 1),
      (jh[N.g.Qg] = 1),
      (jh[N.g.xd] = 1),
      (jh[N.g.xe] = 1),
      (jh[N.g.ye] = 1),
      (jh[N.g.nc] = 1),
      (jh[N.g.ah] = 1),
      (jh[N.g.Mc] = 1),
      (jh[N.g.fh] = 1),
      (jh[N.g.Be] = 1),
      (jh[N.g.Pf] = 1),
      (jh[N.g.qc] = 1),
      (jh[N.g.Rb] = 1),
      (jh[N.g.sa] = 1),
      (jh[N.g.Tf] = 1),
      (jh[N.g.Tb] = 1),
      (jh[N.g.Oa] = 1),
      (jh[N.g.rc] = 1),
      (jh[N.g.Oc] = 1),
      (jh[N.g.Ed] = 1),
      (jh[N.g.Vf] = 1),
      (jh[N.g.Fd] = 1),
      (jh[N.g.Db] = 1),
      (jh[N.g.uc] = 1),
      (jh[N.g.He] = 1),
      (jh[N.g.qb] = 1),
      (jh[N.g.Oe] = 1),
      jh)
    );
  Object.freeze([
    N.g.wa,
    N.g.Ga,
    N.g.eb,
    N.g.Ua,
    N.g.Uf,
    N.g.Ba,
    N.g.Of,
    N.g.nj,
  ]);
  var lh = {},
    mh = Object.freeze(
      ((lh[N.g.Si] = 1),
      (lh[N.g.Ti] = 1),
      (lh[N.g.Ui] = 1),
      (lh[N.g.Vi] = 1),
      (lh[N.g.Wi] = 1),
      (lh[N.g.Xi] = 1),
      (lh[N.g.Yi] = 1),
      (lh[N.g.Zi] = 1),
      (lh[N.g.aj] = 1),
      (lh[N.g.ed] = 1),
      lh)
    ),
    nh = {},
    oh = Object.freeze(
      ((nh[N.g.Eg] = 1),
      (nh[N.g.Fg] = 1),
      (nh[N.g.Dc] = 1),
      (nh[N.g.Ec] = 1),
      (nh[N.g.Gg] = 1),
      (nh[N.g.hc] = 1),
      (nh[N.g.Fc] = 1),
      (nh[N.g.wb] = 1),
      (nh[N.g.Ob] = 1),
      (nh[N.g.xb] = 1),
      (nh[N.g.Ma] = 1),
      (nh[N.g.Gc] = 1),
      (nh[N.g.Sa] = 1),
      (nh[N.g.Hg] = 1),
      nh)
    ),
    ph = Object.freeze([
      N.g.qa,
      N.g.ie,
      N.g.hb,
      N.g.mc,
      N.g.nc,
      N.g.yd,
      N.g.Oa,
      N.g.uc,
    ]),
    qh = Object.freeze([].concat(ta(ph))),
    rh = Object.freeze([N.g.Ta, N.g.ye, N.g.Ed, N.g.Vf, N.g.te]),
    sh = Object.freeze([].concat(ta(rh))),
    th = {},
    uh =
      ((th[N.g.N] = "1"),
      (th[N.g.U] = "2"),
      (th[N.g.O] = "3"),
      (th[N.g.za] = "4"),
      th),
    vh = {},
    wh = Object.freeze(
      ((vh[N.g.ee] = 1),
      (vh[N.g.fe] = 1),
      (vh[N.g.qa] = 1),
      (vh[N.g.ie] = 1),
      (vh[N.g.je] = 1),
      (vh[N.g.Ea] = 1),
      (vh[N.g.jc] = 1),
      (vh[N.g.If] = 1),
      (vh[N.g.ke] = 1),
      (vh[N.g.me] = 1),
      (vh[N.g.ne] = 1),
      (vh[N.g.fa] = 1),
      (vh[N.g.oe] = 1),
      (vh[N.g.jb] = 1),
      (vh[N.g.Aa] = 1),
      (vh[N.g.Na] = 1),
      (vh[N.g.Ta] = 1),
      (vh[N.g.cb] = 1),
      (vh[N.g.Fa] = 1),
      (vh[N.g.Ca] = 1),
      (vh[N.g.Lg] = 1),
      (vh[N.g.pe] = 1),
      (vh[N.g.Mg] = 1),
      (vh[N.g.Ng] = 1),
      (vh[N.g.ia] = 1),
      (vh[N.g.qj] = 1),
      (vh[N.g.ve] = 1),
      (vh[N.g.we] = 1),
      (vh[N.g.Of] = 1),
      (vh[N.g.nc] = 1),
      (vh[N.g.qc] = 1),
      (vh[N.g.Rb] = 1),
      (vh[N.g.Ua] = 1),
      (vh[N.g.Qf] = 1),
      (vh[N.g.Rf] = 1),
      (vh[N.g.Sf] = 1),
      (vh[N.g.Bd] = 1),
      (vh[N.g.wa] = 1),
      (vh[N.g.Ga] = 1),
      (vh[N.g.lh] = 1),
      (vh[N.g.mh] = 1),
      (vh[N.g.nh] = 1),
      (vh[N.g.oh] = 1),
      (vh[N.g.Tb] = 1),
      (vh[N.g.Oa] = 1),
      (vh[N.g.rc] = 1),
      (vh[N.g.Oc] = 1),
      (vh[N.g.Fd] = 1),
      (vh[N.g.Da] = 1),
      (vh[N.g.Db] = 1),
      (vh[N.g.uc] = 1),
      (vh[N.g.fb] = 1),
      (vh[N.g.Ha] = 1),
      (vh[N.g.Ba] = 1),
      (vh[N.g.ra] = 1),
      vh)
    ),
    xh = {},
    yh = Object.freeze(
      ((xh.search = "s"),
      (xh.youtube = "y"),
      (xh.playstore = "p"),
      (xh.shopping = "h"),
      (xh.ads = "a"),
      (xh.maps = "m"),
      xh)
    );
  Object.freeze(N.g);
  var O = {},
    zh =
      ((O[N.g.fc] = "gcu"),
      (O[N.g.yb] = "gclgb"),
      (O[N.g.ab] = "gclaw"),
      (O[N.g.bj] = "gclid_len"),
      (O[N.g.fd] = "gclgs"),
      (O[N.g.gd] = "gcllp"),
      (O[N.g.hd] = "gclst"),
      (O[N.g.ej] = "ndclid"),
      (O[N.g.fj] = "ngad_source"),
      (O[N.g.gj] = "ngbraid"),
      (O[N.g.ij] = "ngclid"),
      (O[N.g.jj] = "ngclsrc"),
      (O[N.g.zb] = "auid"),
      (O[N.g.ke] = "dscnt"),
      (O[N.g.me] = "fcntr"),
      (O[N.g.ne] = "flng"),
      (O[N.g.oe] = "mid"),
      (O[N.g.Jg] = "bttype"),
      (O[N.g.kb] = "label"),
      (O[N.g.kc] = "capi"),
      (O[N.g.Jf] = "pscdl"),
      (O[N.g.Ca] = "currency_code"),
      (O[N.g.Lg] = "clobs"),
      (O[N.g.pe] = "vdltv"),
      (O[N.g.Mg] = "clolo"),
      (O[N.g.Ng] = "clolb"),
      (O[N.g.Pg] = "_dbg"),
      (O[N.g.we] = "oedeld"),
      (O[N.g.nb] = "edid"),
      (O[N.g.uj] = "fdr"),
      (O[N.g.Ug] = "fledge"),
      (O[N.g.Ae] = "gac"),
      (O[N.g.Kc] = "gacgb"),
      (O[N.g.Zg] = "gacmcov"),
      (O[N.g.oc] = "gdpr"),
      (O[N.g.ob] = "gdid"),
      (O[N.g.Lc] = "_ng"),
      (O[N.g.gh] = "gsaexp"),
      (O[N.g.Qb] = "frm"),
      (O[N.g.Ce] = "gtm_up"),
      (O[N.g.zd] = "lps"),
      (O[N.g.De] = "did"),
      (O[N.g.Qf] = "fcntr"),
      (O[N.g.Rf] = "flng"),
      (O[N.g.Sf] = "mid"),
      (O[N.g.Bd] = void 0),
      (O[N.g.eb] = "tiba"),
      (O[N.g.Tb] = "rdp"),
      (O[N.g.pb] = "ecsid"),
      (O[N.g.Wf] = "ga_uid"),
      (O[N.g.Fd] = "delopc"),
      (O[N.g.sc] = "gdpr_consent"),
      (O[N.g.Da] = "oid"),
      (O[N.g.Kj] = "uptgs"),
      (O[N.g.Zf] = "uaa"),
      (O[N.g.cg] = "uab"),
      (O[N.g.dg] = "uafvl"),
      (O[N.g.eg] = "uamb"),
      (O[N.g.fg] = "uam"),
      (O[N.g.gg] = "uap"),
      (O[N.g.hg] = "uapv"),
      (O[N.g.ig] = "uaw"),
      (O[N.g.rh] = "ec_lat"),
      (O[N.g.sh] = "ec_meta"),
      (O[N.g.th] = "ec_m"),
      (O[N.g.uh] = "ec_sel"),
      (O[N.g.vh] = "ec_s"),
      (O[N.g.Gd] = "ec_mode"),
      (O[N.g.Ba] = "userId"),
      (O[N.g.Hd] = "us_privacy"),
      (O[N.g.ra] = "value"),
      (O[N.g.wh] = "mcov"),
      (O[N.g.Sj] = "hn"),
      (O[N.g.Tj] = "gtm_ee"),
      (O[N.g.Vb] = "npa"),
      (O[N.g.rd] = null),
      (O[N.g.Ub] = null),
      (O[N.g.Ua] = null),
      (O[N.g.fa] = null),
      (O[N.g.wa] = null),
      (O[N.g.Ga] = null),
      (O[N.g.Xf] = null),
      (O[N.g.Id] = null),
      (O[N.g.ee] = null),
      (O[N.g.fe] = null),
      O);
  function Ah(a, b) {
    if (a) {
      var c = a.split("x");
      c.length === 2 && (Bh(b, "u_w", c[0]), Bh(b, "u_h", c[1]));
    }
  }
  function Ch(a, b) {
    a &&
      (a.length === 2
        ? Bh(b, "hl", a)
        : a.length === 5 &&
          (Bh(b, "hl", a.substring(0, 2)), Bh(b, "gl", a.substring(3, 5))));
  }
  function Dh(a) {
    var b = Eh;
    b = b === void 0 ? Fh : b;
    var c;
    var d = b;
    if (a && a.length) {
      for (var e = [], f = 0; f < a.length; ++f) {
        var g = a[f];
        g &&
          e.push({
            item_id: d(g),
            quantity: g.quantity,
            value: g.price,
            start_date: g.start_date,
            end_date: g.end_date,
          });
      }
      c = e;
    } else c = [];
    var k;
    var m = c;
    if (m) {
      for (var n = [], p = 0; p < m.length; p++) {
        var q = m[p],
          r = [];
        q &&
          (r.push(Gh(q.value)),
          r.push(Gh(q.quantity)),
          r.push(Gh(q.item_id)),
          r.push(Gh(q.start_date)),
          r.push(Gh(q.end_date)),
          n.push("(" + r.join("*") + ")"));
      }
      k = n.length > 0 ? n.join("") : "";
    } else k = "";
    return k;
  }
  function Fh(a) {
    return Hh(a.item_id, a.id, a.item_name);
  }
  function Hh() {
    for (
      var a = l(ya.apply(0, arguments)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      var c = b.value;
      if (c !== null && c !== void 0) return c;
    }
  }
  function Ih(a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date
          ? b.push("" + d.estimated_delivery_date)
          : b.push("");
      }
      return b.join(",");
    }
  }
  function Bh(a, b, c) {
    c === void 0 || c === null || (c === "" && !$f[b]) || (a[b] = c);
  }
  function Gh(a) {
    return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
  }
  function Jh(a) {
    return Kh ? E.querySelectorAll(a) : null;
  }
  function Oh(a, b) {
    if (!Kh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!E.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var Ph = !1;
  if (E.querySelectorAll)
    try {
      var Qh = E.querySelectorAll(":root");
      Qh && Qh.length == 1 && Qh[0] == E.documentElement && (Ph = !0);
    } catch (a) {}
  var Kh = Ph;
  function Rh(a) {
    switch (a) {
      case 0:
        break;
      case 9:
        return "e4";
      case 6:
        return "e5";
      case 14:
        return "e6";
      default:
        return "e7";
    }
  }
  var Sh = /^[0-9A-Fa-f]{64}$/;
  function Th(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function Uh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = A.crypto) == null ? 0 : b.subtle) {
      if (Sh.test(a)) return Promise.resolve(a);
      try {
        var c = Th(a);
        return A.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return A.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function Vh(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Wh = [],
    Xh = {};
  function Yh(a) {
    return Wh[a] === void 0 ? !1 : Wh[a];
  }
  var Zh = [];
  function $h(a) {
    switch (a) {
      case 0:
        return 0;
      case 46:
        return 1;
      case 47:
        return 2;
      case 48:
        return 7;
      case 79:
        return 3;
      case 105:
        return 4;
      case 107:
        return 5;
      case 124:
        return 9;
      case 125:
        return 6;
    }
  }
  function ai(a, b) {
    Zh[a] = b;
    var c = $h(a);
    c !== void 0 && (Wh[c] = b);
  }
  function P(a) {
    ai(a, !0);
  }
  P(35);
  P(31);
  P(32);
  P(33);
  P(34);
  P(50);
  P(94);
  P(17);
  P(136);
  P(16);
  P(143);
  P(135);
  P(80);
  P(108);
  P(6);
  P(51);
  P(4);
  P(99);
  P(131);
  P(91);
  P(85);
  P(106);
  P(149);
  P(119);
  P(120);

  P(104);
  P(144);
  P(107);
  P(5);
  ai(21, !1), P(22);
  Xh[1] = Vh("1", 6e4);
  Xh[3] = Vh("10", 1);
  Xh[2] = Vh("", 50);
  P(26);
  P(12);
  P(84);
  P(111);
  P(132);
  var ci = !1;
  P(112);
  P(72);
  P(147);
  P(125);
  P(115);
  P(25);
  P(75);
  P(124);
  P(87);
  P(90);
  P(102);
  P(57);

  P(89);
  P(123);
  P(88);
  P(28);
  P(82);
  P(54);
  P(20);
  P(55);
  P(140);
  P(76);
  P(141);
  P(53);
  P(52);
  function R(a) {
    return !!Zh[a];
  }
  function bi(a, b) {
    for (var c = !1, d = !1, e = 0; c === d; )
      if (
        ((c = (((Math.random() * 4294967296) | 0) & 1) === 0),
        (d = (((Math.random() * 4294967296) | 0) & 1) === 0),
        e++,
        e > 30)
      )
        return;
    c ? P(b) : P(a);
  }
  function U(a) {
    Va("GTM", a);
  }
  var ii = function (a, b) {
      var c = b === 2,
        d = {},
        e = ["tv.1"],
        f = 0;
      for (var g = l(a), k = g.next(); !k.done; k = g.next()) {
        var m = k.value;
        if (m.value !== "") {
          var n,
            p = void 0,
            q = m.name,
            r = m.value,
            u = di[q];
          if (u) {
            var v = (p = m.index) != null ? p : "",
              t = u + "__" + f;
            b === 3 || !ei(q) || /^e\d+$/.test(r) || fi.test(r) || Sh.test(r)
              ? (n = encodeURIComponent(encodeURIComponent(r)))
              : ((n = "${userData." + t + "|sha256}"), (d[t] = r), f++);
            e.push("" + u + v + "." + n);
          }
        }
      }
      var w = e.join("~"),
        x = { userData: d };
      return b === 3 || b === 1 || c
        ? {
            Ci: w,
            Cc: x,
            bc: f,
            Rh: c
              ? "tv.9~${" + (w + "|encryptRsa}")
              : "tv.1~${" + (w + "|encrypt}"),
            encryptionKeyString: c ? gi() : hi(),
          }
        : { Ci: w, Cc: x, bc: f };
    },
    ei = function (a) {
      return ji.indexOf(a) !== -1;
    },
    hi = function () {
      return "{\x22keys\x22:[{\x22id\x22:\x2282fcd1bf-197e-4f38-b2dd-50683b1e78fd\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BDP+lj6oLiQsZMejCyoWpuzeGJ/brSMwKsuiYs4QKdfoFQIZ66JkW3iWp2sqzEfexc9ycb1knLW91SgueO59v6E\x3d\x22}},{\x22id\x22:\x22736fa2d0-161d-4f02-b734-f8243fc43eed\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BDmyOJQqsrapANHHi79LMezdagVFyvQUoxGbFnTug4ZSTemDOdLsbOjHpVcrPsoqylJ14a9nRJf1zEKpVHeB+zc\x3d\x22}},{\x22id\x22:\x2260b22ec4-c331-49fe-a563-d3c2352b67a0\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BC3IXVAp/PDK5GdC6su++MFxtN4rVmVSpyHn1+fVYUCH/pGBr7FUmG82+Zsp4wYnulV2vTyiNhd6BfWHVfoeOnQ\x3d\x22}},{\x22id\x22:\x225b25c038-096b-4545-b921-60387c0e960e\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BJtRWB6qHhudwv+icCi4rj53rn3OoLGOXWUoLrd0EN7s9VBqyLS5cusPigHA0Qt2/m/l/WKZsyw3DSEpDWeUPzE\x3d\x22}},{\x22id\x22:\x2240173339-ea34-4775-82dd-1d8f8bcd498e\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BDSDGev7uvSfjyGxs0SL1DJNWG89CcWPFpT1x8viv3P9A+pigzy2T+CltGT9iNkEO5EgJDthn3mQ8htEvoXYbuY\x3d\x22}}]}";
    },
    li = function (a, b) {
      if (A.Promise) {
        var c = void 0;
        return c;
      }
    },
    ni = function (a, b, c, d) {
      if (A.Promise)
        try {
          var e = mi(a);
          return e;
        } catch (f) {}
    },
    oi = function (a) {
      if (A.Promise)
        try {
          return mi(a);
        } catch (b) {}
    },
    pi = function (a) {
      for (
        var b = a.Vd, c = a.time, d = ["tv.1"], e = 0, f = !1, g = 0;
        g < b.length;
        ++g
      ) {
        var k = b[g].name,
          m = b[g].value,
          n = b[g].index,
          p = di[k];
        p &&
          m &&
          (!ei(k) || /^e\d+$/.test(m) || fi.test(m) || Sh.test(m)) &&
          (n !== void 0 && (p += n), d.push(p + "." + m), e++);
      }
      b.length === 1 && b[0].name === "error_code" && ((e = 0), (f = !0));
      return { Ja: encodeURIComponent(d.join("~")), Ud: e, time: c, rg: f };
    },
    mi = function (a) {
      return qi(a).then(function (b) {
        return pi(b);
      });
    },
    yi = function (a) {
      function b(r, u, v, t) {
        var w = ri(r);
        w !== "" &&
          (Sh.test(w)
            ? k.push({ name: u, value: w, index: t })
            : k.push({ name: u, value: v(w), index: t }));
      }
      function c(r, u) {
        var v = r;
        if (z(v) || Array.isArray(v)) {
          v = ab(r);
          for (var t = 0; t < v.length; ++t) {
            var w = ri(v[t]),
              x = Sh.test(w);
            u && !x && U(89);
            !u && x && U(88);
          }
        }
      }
      function d(r, u) {
        var v = r[u];
        c(v, !1);
        var t = si[u];
        r[t] && (r[u] && U(90), (v = r[t]), c(v, !0));
        return v;
      }
      function e(r, u, v) {
        for (var t = ab(d(r, u)), w = 0; w < t.length; ++w) b(t[w], u, v);
      }
      function f(r, u, v, t) {
        var w = d(r, u);
        b(w, u, v, t);
      }
      function g(r) {
        return function (u) {
          U(64);
          return r(u);
        };
      }
      var k = [];
      if (A.location.protocol !== "https:")
        return k.push({ name: "error_code", value: "e3", index: void 0 }), k;
      e(a, "email", ti);
      e(a, "phone_number", ui);
      e(a, "first_name", g(vi));
      e(a, "last_name", g(vi));
      var m = a.home_address || {};
      e(m, "street", g(wi));
      e(m, "city", g(wi));
      e(m, "postal_code", g(xi));
      e(m, "region", g(wi));
      e(m, "country", g(xi));
      for (var n = ab(a.address || {}), p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", vi, p);
        f(q, "last_name", vi, p);
        f(q, "street", wi, p);
        f(q, "city", wi, p);
        f(q, "postal_code", xi, p);
        f(q, "region", wi, p);
        f(q, "country", xi, p);
      }
      return k;
    },
    zi = function (a) {
      var b = a ? yi(a) : [];
      return pi({ Vd: b });
    },
    Ai = function (a) {
      return a && a != null && Object.keys(a).length > 0 && A.Promise
        ? yi(a).some(function (b) {
            return b.value && ei(b.name) && !Sh.test(b.value);
          })
        : !1;
    },
    qi = function (a) {
      var b = yi(a);
      return Bi(b);
    },
    ri = function (a) {
      return a == null ? "" : z(a) ? lb(String(a)) : "e0";
    },
    xi = function (a) {
      return a.replace(Ci, "");
    },
    vi = function (a) {
      return wi(a.replace(/\s/g, ""));
    },
    wi = function (a) {
      return lb(a.replace(Di, "").toLowerCase());
    },
    ui = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      a.charAt(0) !== "+" && (a = "+" + a);
      return Ei.test(a) ? a : "e0";
    },
    ti = function (a) {
      var b = a.toLowerCase().split("@");
      if (b.length === 2) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Fi.test(c)) return c;
      }
      return "e0";
    },
    Bi = function (a) {
      if (
        !a.some(function (c) {
          return c.value && ei(c.name);
        })
      )
        return Promise.resolve({ Vd: a });
      if (!A.Promise) return Promise.resolve({ Vd: [] });
      var b;
      if (R(58) || R(96)) b = Cc();
      return Promise.all(
        a.map(function (c) {
          return c.value && ei(c.name)
            ? Uh(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          var c = { Vd: a };
          if (b !== void 0) {
            var d = Cc();
            b && d && (c.time = Math.round(d) - Math.round(b));
          }
          return c;
        })
        .catch(function () {
          return { Vd: [] };
        });
    },
    Di = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Fi = /^\S+@\S+\.\S+$/,
    Ei = /^\+\d{10,15}$/,
    Ci = /[.~]/g,
    fi = /^[0-9A-Za-z_-]{43}$/,
    Gi = {},
    di =
      ((Gi.email = "em"),
      (Gi.phone_number = "pn"),
      (Gi.first_name = "fn"),
      (Gi.last_name = "ln"),
      (Gi.street = "sa"),
      (Gi.city = "ct"),
      (Gi.region = "rg"),
      (Gi.country = "co"),
      (Gi.postal_code = "pc"),
      (Gi.error_code = "ec"),
      Gi),
    Hi = {},
    si =
      ((Hi.email = "sha256_email_address"),
      (Hi.phone_number = "sha256_phone_number"),
      (Hi.first_name = "sha256_first_name"),
      (Hi.last_name = "sha256_last_name"),
      (Hi.street = "sha256_street"),
      Hi);
  var ji = Object.freeze([
    "email",
    "phone_number",
    "first_name",
    "last_name",
    "street",
  ]);
  var Ji = {
    Kn: "101925629~102067555~102067808~102081485~102123607~102198178",
  };
  var Ki = {},
    Li = (A.google_tag_manager = A.google_tag_manager || {});
  Ki.Bh = "51d0";
  Ki.Ne = Number("0") || 0;
  Ki.vb = "dataLayer";
  Ki.Mn =
    "ChAIgNadvAYQ1qTt5MXw8JAKEiUADF3494DUewE6ijlxdgEFj3QAhwL3YbZ+u3gzHCv051+t4QlxGgK4PA\x3d\x3d";
  var Mi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Ni = { __paused: 1, __tg: 1 },
    Oi;
  for (Oi in Mi) Mi.hasOwnProperty(Oi) && (Ni[Oi] = 1);
  var Pi = jb(""),
    Qi = !1,
    Ri,
    Si = !1;
  Ri = Si;
  var Ti,
    Ui = !1;
  Ti = Ui;
  var Vi,
    Wi = !1;
  Vi = Wi;
  Ki.Ef = "www.googletagmanager.com";
  var Xi = "" + Ki.Ef + (Ri ? "/gtag/js" : "/gtm.js"),
    Yi = null,
    Zi = null,
    $i = {},
    aj = {};
  function bj() {
    var a = Li.sequence || 1;
    Li.sequence = a + 1;
    return a;
  }
  Ki.bl = "";
  var cj = "";
  Ki.Ch = cj;
  var dj = function () {
      this.j = new Set();
    },
    fj = function () {
      return Array.from(ej.Va.j).join("~");
    },
    ej = new (function () {
      this.Va = new dj();
      this.C = !1;
      this.j = 0;
      this.P = this.aa = this.Eb = this.K = "";
      this.H = !1;
    })();
  function gj() {
    var a = ej.K.length;
    return ej.K[a - 1] === "/" ? ej.K.substring(0, a - 1) : ej.K;
  }
  function hj() {
    return ej.C ? (R(82) ? ej.j === 0 : ej.j !== 1) : !1;
  }
  function ij(a) {
    for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var jj = new fb(),
    kj = {},
    lj = {},
    oj = {
      name: Ki.vb,
      set: function (a, b) {
        Rc(vb(a, b), kj);
        mj();
      },
      get: function (a) {
        return nj(a, 2);
      },
      reset: function () {
        jj = new fb();
        kj = {};
        mj();
      },
    };
  function nj(a, b) {
    return b != 2 ? jj.get(a) : pj(a);
  }
  function pj(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = kj, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function qj(a, b) {
    lj.hasOwnProperty(a) || (jj.set(a, b), Rc(vb(a, b), kj), mj());
  }
  function rj() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = nj(c, 1);
      if (Array.isArray(d) || Qc(d)) d = Rc(d, null);
      lj[c] = d;
    }
  }
  function mj(a) {
    gb(lj, function (b, c) {
      jj.set(b, c);
      Rc(vb(b), kj);
      Rc(vb(b, c), kj);
      a && delete lj[b];
    });
  }
  function sj(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? pj(a) : jj.get(a);
    Oc(d) === "array" || Oc(d) === "object" ? (c = Rc(d, null)) : (c = d);
    return c;
  }
  var tj = function (a, b, c) {
      if (!c) return !1;
      for (
        var d = String(c.value),
          e,
          f = d
            .replace(/\["?'?/g, ".")
            .replace(/"?'?\]/g, "")
            .split(","),
          g = 0;
        g < f.length;
        g++
      ) {
        var k = f[g].trim();
        if (k && !sb(k, "#") && !sb(k, ".")) {
          if (sb(k, "dataLayer.")) e = nj(k.substring(10));
          else {
            var m = k.split(".");
            e = A[m.shift()];
            for (var n = 0; n < m.length; n++) e = e && e[m[n]];
          }
          if (e !== void 0) break;
        }
      }
      if (e === void 0 && Kh)
        try {
          var p = Jh(d);
          if (p && p.length > 0) {
            e = [];
            for (
              var q = 0;
              q < p.length &&
              q < (b === "email" || b === "phone_number" ? 5 : 1);
              q++
            )
              e.push(tc(p[q]) || lb(p[q].value));
            e = e.length === 1 ? e[0] : e;
          }
        } catch (r) {
          U(149);
        }
      return e ? ((a[b] = e), !0) : !1;
    },
    uj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = tj(b, "email", a.email) || c;
        c = tj(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = tj(f, "first_name", d[e].first_name) || c;
          c = tj(f, "last_name", d[e].last_name) || c;
          c = tj(f, "street", d[e].street) || c;
          c = tj(f, "city", d[e].city) || c;
          c = tj(f, "region", d[e].region) || c;
          c = tj(f, "country", d[e].country) || c;
          c = tj(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    vj = function (a, b) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          if (b && Qc(b)) return b;
          var c = a.enhanced_conversions_manual_var;
          if (c !== void 0) return c;
          var d = A.enhanced_conversion_data;
          d && U(154);
          return d;
        case "automatic":
          return uj(a[N.g.Tg]);
      }
    },
    wj = function (a) {
      return Qc(a) ? !!a.enable_code : !1;
    };
  var xj = /:[0-9]+$/,
    yj = /^\d+\.fls\.doubleclick\.net$/;
  function zj(a, b, c, d) {
    for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
      var k = l(g.value.split("=")),
        m = k.next().value,
        n = sa(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function Aj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = Bj(a.protocol) || Bj(A.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : A.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || A.location.hostname)
          .replace(xj, "")
          .toLowerCase());
    return Cj(a, b, c, d, e);
  }
  function Cj(a, b, c, d, e) {
    var f,
      g = Bj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Dj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(xj, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || Va("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = zj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function Bj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Dj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Ej = {},
    Fj = 0;
  function Gj(a) {
    var b = Ej[a];
    if (!b) {
      var c = E.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || Va("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(xj, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      Fj < 5 && ((Ej[a] = b), Fj++);
    }
    return b;
  }
  function Hj(a) {
    var b = Gj(A.location.href),
      c = Aj(b, "host", !1);
    if (c && c.match(yj)) {
      var d = Aj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var Ij = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function Jj(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return Gj("" + c + b).href;
    }
  }
  function Kj(a, b) {
    if (hj() || Ti) return Jj(a, b);
  }
  function Lj() {
    return !!Ki.Ch && Ki.Ch.split("@@").join("") !== "SGTM_TOKEN";
  }
  function Mj(a) {
    for (var b = l([N.g.Oc, N.g.Db]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  function Nj(a, b) {
    return hj() ? "" + gj() + (b ? Ij[a] || "" : "") : a;
  }
  function Oj(a) {
    var b = String(a[Ge.xa] || "").replace(/_/g, "");
    return sb(b, "cvt") ? "cvt" : b;
  }
  var Pj =
    A.location.search.indexOf("?gtm_latency=") >= 0 ||
    A.location.search.indexOf("&gtm_latency=") >= 0;
  var Qj = { sampleRate: "0.005000", Xk: "", Jn: "0.01" },
    Rj = Math.random(),
    Sj;
  if (!(Sj = Pj)) {
    var Tj = Qj.sampleRate;
    Sj = Rj < Number(Tj);
  }
  var Uj = Sj,
    Vj =
      (fc == null ? void 0 : fc.includes("gtm_debug=d")) ||
      Pj ||
      Rj >= 1 - Number(Qj.Jn);
  var Wj = /gtag[.\/]js/,
    Xj = /gtm[.\/]js/,
    Yj = !1;
  function Zj(a) {
    if (Yj) return "1";
    var b,
      c = (b = a.scriptElement) == null ? void 0 : b.src;
    if (c) {
      if (Wj.test(c)) return "3";
      if (Xj.test(c)) return "2";
    }
    return "0";
  }
  function ak(a, b) {
    var c = bk();
    c.pending || (c.pending = []);
    bb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  function ck() {
    var a = A.google_tags_first_party;
    Array.isArray(a) || (a = []);
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return Object.freeze(b);
  }
  var dk = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    this.injectedFirstPartyContainers = ck();
  };
  function bk() {
    var a = gc("google_tag_data", {}),
      b = a.tidr;
    (b && typeof b === "object") || ((b = new dk()), (a.tidr = b));
    var c = b;
    c.container || (c.container = {});
    c.destination || (c.destination = {});
    c.canonical || (c.canonical = {});
    c.pending || (c.pending = []);
    c.siloed || (c.siloed = []);
    c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = ck());
    return c;
  }
  var ek = {},
    fk = !1,
    Nf = {
      ctid: "GTM-T3VDDDR8",
      canonicalContainerId: "177642594",
      Gk: "GTM-T3VDDDR8",
      Hk: "GTM-T3VDDDR8",
    };
  ek.Ke = jb("");
  function gk() {
    return (
      ek.Ke &&
      hk().some(function (a) {
        return a === Nf.ctid;
      })
    );
  }
  function ik() {
    var a = jk();
    return fk ? a.map(kk) : a;
  }
  function lk() {
    var a = hk(),
      b = fk ? a.map(kk) : a;
    if (R(128) && !fk)
      for (var c = l([].concat(ta(b))), d = c.next(); !d.done; d = c.next()) {
        var e = kk(d.value),
          f = bk().destination[e];
        (f && f.state !== 0) || b.push(e);
      }
    return b;
  }
  function nk() {
    return ok(Nf.ctid);
  }
  function pk() {
    return ok(Nf.canonicalContainerId || "_" + Nf.ctid);
  }
  function jk() {
    return Nf.Gk ? Nf.Gk.split("|") : [Nf.ctid];
  }
  function hk() {
    return Nf.Hk ? Nf.Hk.split("|") : [];
  }
  function qk() {
    var a = rk(sk()),
      b = a && a.parent;
    if (b) return rk(b);
  }
  function rk(a) {
    var b = bk();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function ok(a) {
    return fk ? kk(a) : a;
  }
  function kk(a) {
    return "siloed_" + a;
  }
  function tk(a) {
    return R(128) ? uk(a) : fk ? uk(a) : a;
  }
  function uk(a) {
    a = String(a);
    return sb(a, "siloed_") ? a.substring(7) : a;
  }
  function vk() {
    if (ej.H) {
      var a = bk();
      if (a.siloed) {
        for (
          var b = [], c = jk().map(kk), d = hk().map(kk), e = {}, f = 0;
          f < a.siloed.length;
          e = { mg: void 0 }, f++
        )
          (e.mg = a.siloed[f]),
            !fk &&
            bb(
              e.mg.isDestination ? d : c,
              (function (g) {
                return function (k) {
                  return k === g.mg.ctid;
                };
              })(e)
            )
              ? (fk = !0)
              : b.push(e.mg);
        a.siloed = b;
      }
    }
  }
  function wk() {
    var a = bk();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = ik(), f = lk(), g = {}, k = 0;
        k < a.pending.length;
        g = { vf: void 0 }, k++
      )
        (g.vf = a.pending[k]),
          bb(
            g.vf.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.vf.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.vf.onLoad), (d = !0))
            : c.push(g.vf);
      a.pending = c;
      if (b)
        try {
          b(pk());
        } catch (m) {}
    }
  }
  function xk() {
    for (
      var a = Nf.ctid,
        b = ik(),
        c = lk(),
        d = function (p, q) {
          var r = {
            canonicalContainerId: Nf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          ec && (r.scriptElement = ec);
          fc && (r.scriptSource = fc);
          if (qk() === void 0) {
            var u;
            a: {
              if ((r.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var v;
                b: {
                  var t,
                    w = (t = r.scriptElement) == null ? void 0 : t.src;
                  if (w) {
                    for (
                      var x = ej.C,
                        y = Gj(w),
                        B = x ? y.pathname : "" + y.hostname + y.pathname,
                        C = E.scripts,
                        D = "",
                        G = 0;
                      G < C.length;
                      ++G
                    ) {
                      var K = C[G];
                      if (
                        !(
                          K.innerHTML.length === 0 ||
                          (!x &&
                            K.innerHTML.indexOf(
                              r.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          K.innerHTML.indexOf(B) < 0
                        )
                      ) {
                        if (K.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          v = String(G);
                          break b;
                        }
                        D = String(G);
                      }
                    }
                    if (D) {
                      v = D;
                      break b;
                    }
                  }
                  v = void 0;
                }
                var F = v;
                if (F) {
                  Yj = !0;
                  u = F;
                  break a;
                }
              }
              var S = [].slice.call(document.scripts);
              u = r.scriptElement ? String(S.indexOf(r.scriptElement)) : "-1";
            }
            r.htmlLoadOrder = u;
            r.loadScriptType = Zj(r);
          }
          var M = q ? e.destination : e.container,
            T = M[p];
          T ? (q && T.state === 0 && U(93), Object.assign(T, r)) : (M[p] = r);
        },
        e = bk(),
        f = l(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = l(c), m = k.next(); !m.done; m = k.next()) {
      var n = m.value;
      R(128) && !fk && sb(n, "siloed_") ? delete e.destination[n] : d(n, !0);
    }
    e.canonical[pk()] = {};
    wk();
  }
  function yk(a) {
    return !!bk().container[a];
  }
  function zk(a) {
    var b = bk().destination[a];
    return !!b && !!b.state;
  }
  function sk() {
    return { ctid: nk(), isDestination: ek.Ke };
  }
  function Ak(a) {
    var b = bk();
    (b.siloed = b.siloed || []).push(a);
  }
  function Bk() {
    var a = bk().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Ck() {
    var a = {};
    gb(bk().destination, function (b, c) {
      c.state === 0 && (a[uk(b)] = c);
    });
    return a;
  }
  function Dk(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  function Ek(a) {
    var b = bk();
    return b.destination[a] ? 1 : b.destination[kk(a)] ? 2 : 0;
  }
  var Fk = "/td?id=" + Nf.ctid,
    Gk = ["v", "t", "pid", "dl", "tdp"],
    Hk = ["mcc"],
    Ik = {},
    Jk = {};
  function Kk(a, b, c) {
    Jk[a] = b;
    (c === void 0 || c) && Lk(a);
  }
  function Lk(a, b) {
    if (Ik[a] === void 0 || (b === void 0 ? 0 : b)) Ik[a] = !0;
  }
  function Mk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(Ik)
      .filter(function (c) {
        return Ik[c] === !0 && Jk[c] !== void 0 && (a || !Hk.includes(c));
      })
      .map(function (c) {
        var d = Jk[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + Nj("https://www.googletagmanager.com") + Fk + ("" + b + "&z=0");
  }
  function Nk() {
    Object.keys(Ik).forEach(function (a) {
      Gk.indexOf(a) < 0 && (Ik[a] = !1);
    });
  }
  function Ok(a) {
    a = a === void 0 ? !1 : a;
    if (Vj && Nf.ctid) {
      var b = Mk(a);
      a ? zc(b) : pc(b);
      Nk();
    }
  }
  var Pk = {};
  function Qk() {
    Object.keys(Ik).filter(function (a) {
      return Ik[a] && !Gk.includes(a);
    }).length > 0 && Ok(!0);
  }
  var Rk = db();
  function Sk() {
    Rk = db();
  }
  function Tk() {
    Kk("v", "3");
    Kk("t", "t");
    Kk("pid", function () {
      return String(Rk);
    });
    qc(A, "pagehide", Qk);
    A.setInterval(Sk, 864e5);
  }
  function Uk() {
    var a = gc("google_tag_data", {});
    return (a.ics = a.ics || new Vk());
  }
  var Vk = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  Vk.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Va("TAGGING", 19);
    b == null ? Va("TAGGING", 18) : Wk(this, a, b === "granted", c, d, e, f, g);
  };
  Vk.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Wk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Wk = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && z(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        u = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = u;
      r &&
        A.setTimeout(function () {
          m[b] === u &&
            u.quiet &&
            (Va("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  h = Vk.prototype;
  h.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = l(d), n = m.next(); !n.done; n = m.next()) Xk(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = l(d), q = p.next(); !q.done; q = p.next()) Xk(this, q.value);
  };
  h.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  h.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && z(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  h.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  h.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  h.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Nd: b });
  };
  var Xk = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.Ik = !0);
    }
  };
  Vk.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.Ik) {
        d.Ik = !1;
        try {
          d.Nd({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Yk = !1,
    Zk = !1,
    $k = {},
    al = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        (($k.ad_storage = 1),
        ($k.analytics_storage = 1),
        ($k.ad_user_data = 1),
        ($k.ad_personalization = 1),
        $k),
      usedContainerScopedDefaults: !1,
    };
  function bl(a) {
    var b = Uk();
    b.accessedAny = !0;
    return (z(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, al)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function cl(a) {
    var b = Uk();
    b.accessedAny = !0;
    return b.getConsentState(a, al);
  }
  function dl(a) {
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = al.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function el(a) {
    var b = Uk();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function fl() {
    if (!Yh(8)) return !1;
    var a = Uk();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!al.usedContainerScopedDefaults) return !1;
    for (
      var b = l(Object.keys(al.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (al.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function gl(a, b) {
    Uk().addListener(a, b);
  }
  function hl(a, b) {
    Uk().notifyListeners(a, b);
  }
  function il(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!el(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      gl(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function jl(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        bl(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = z(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      gl(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : A.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var kl = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    ll = [
      N.g.Oc,
      N.g.Db,
      N.g.nc,
      N.g.ib,
      N.g.pb,
      N.g.Ba,
      N.g.sa,
      N.g.Fa,
      N.g.Na,
      N.g.lb,
    ],
    ml = !1,
    nl = !1,
    ol = {},
    pl = {};
  function ql() {
    !nl &&
      ml &&
      (kl.some(function (a) {
        return al.containerScopedDefaults[a] !== 1;
      }) ||
        rl("mbc"));
    nl = !0;
  }
  function rl(a) {
    Vj && (Kk(a, "1"), Ok());
  }
  function sl(a, b) {
    if (!ol[b] && ((ol[b] = !0), pl[b]))
      for (var c = l(ll), d = c.next(); !d.done; d = c.next())
        if (a.hasOwnProperty(d.value)) {
          rl("erc");
          break;
        }
  }
  function tl(a) {
    Va("HEALTH", a);
  }
  var ul;
  try {
    ul = JSON.parse(
      Sa(
        "eyIwIjoiR0IiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY28udWsiLCI0IjoicmVnaW9uMSIsIjUiOmZhbHNlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    U(123), tl(2), (ul = {});
  }
  function vl() {
    return ul["0"] || "";
  }
  function wl() {
    return ul["1"] || "";
  }
  function xl() {
    var a = !1;
    return a;
  }
  function yl() {
    return ul["6"] !== !1;
  }
  function zl() {
    var a = "";
    return a;
  }
  function Al() {
    var a = !1;
    a = !!ul["5"];
    return a;
  }
  function Bl() {
    var a = "";
    return a;
  }
  function Cl(a) {
    return a && a.indexOf("pending:") === 0 ? Dl(a.substr(8)) : !1;
  }
  function Dl(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = nb();
    return b < c + 3e5 && b > c - 9e5;
  }
  var El = "",
    Fl = "",
    Gl = { ctid: "", isDestination: !1 },
    Hl = !1,
    Il = !1,
    Jl = !1,
    Kl = !1,
    Ll = !1,
    Ml = !1,
    Nl = [];
  function Ol(a) {
    if (Ml && Ll) {
      var b = gc("google.tagmanager.ta.prodqueue", []);
      b.length >= 50 && b.shift();
      b.push(a);
    } else {
      var c;
      (c = Nl) == null || c.push(a);
    }
  }
  function Pl() {
    Ql();
    rc(E, "TAProdDebugSignal", Pl);
  }
  function Ql() {
    if (!Jl) {
      Jl = !0;
      Rl();
      var a = Nl;
      Nl = void 0;
      a == null ||
        a.forEach(function (b) {
          Ol(b);
        });
    }
  }
  function Rl() {
    var a = E.documentElement.getAttribute("data-tag-assistant-prod-present");
    Dl(a)
      ? (Ll = !0)
      : !Cl(a) ||
        Il ||
        Kl ||
        ((Kl = !0),
        qc(E, "TAProdDebugSignal", Pl, !1),
        A.setTimeout(function () {
          Ql();
          Il = !0;
        }, 200));
  }
  function Sl(a, b) {
    var c;
    c = c === void 0 ? {} : c;
    c.groupId = El;
    var d,
      e = { publicId: Fl };
    c.eventId != null && (e.eventId = c.eventId);
    c.priorityId != null && (e.priorityId = c.priorityId);
    c.eventName && (e.eventName = c.eventName);
    c.groupId && (e.groupId = c.groupId);
    c.tagName && (e.tagName = c.tagName);
    d = {
      containerProduct: "GTM",
      key: e,
      version: "10",
      messageType: "INIT_PROD",
    };
    Hl && (d.containerProduct = "OGT");
    d.key.targetRef = Gl;
    d.containerLoadSource = a != null ? a : 0;
    b && (d.parentTargetReference = b);
    Ol(d);
  }
  var Tl = [N.g.N, N.g.U, N.g.O, N.g.za],
    Ul,
    Vl;
  function Wl(a) {
    for (
      var b = a[N.g.ub], c = Array.isArray(b) ? b : [b], d = { ff: 0 };
      d.ff < c.length;
      d = { ff: d.ff }, ++d.ff
    )
      gb(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== N.g.ub) {
              var k = c[e.ff],
                m = vl(),
                n = wl();
              Zk = !0;
              Yk && Va("TAGGING", 20);
              Uk().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function Xl(a) {
    ql();
    !Vl && Ul && rl("crc");
    Vl = !0;
    var b = a[N.g.ub];
    b && U(40);
    var c = a[N.g.be];
    c && U(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { hf: 0 };
      e.hf < d.length;
      e = { hf: e.hf }, ++e.hf
    )
      gb(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== N.g.ub && g !== N.g.be) {
              var m = d[f.hf],
                n = Number(c),
                p = vl(),
                q = wl();
              n = n === void 0 ? 0 : n;
              Yk = !0;
              Zk && Va("TAGGING", 20);
              Uk().default(g, k, m, p, q, n, al);
            }
          };
        })(e)
      );
  }
  function Yl(a) {
    al.usedContainerScopedDefaults = !0;
    var b = a[N.g.ub];
    if (b) {
      var c = Array.isArray(b) ? b : [b];
      if (!c.includes(wl()) && !c.includes(vl())) return;
    }
    gb(a, function (d, e) {
      switch (d) {
        case "ad_storage":
        case "analytics_storage":
        case "ad_user_data":
        case "ad_personalization":
          break;
        default:
          return;
      }
      al.usedContainerScopedDefaults = !0;
      al.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
    });
  }
  function Zl(a, b) {
    ql();
    Ul = !0;
    gb(a, function (c, d) {
      Yk = !0;
      Zk && Va("TAGGING", 20);
      Uk().update(c, d, al);
    });
    hl(b.eventId, b.priorityId);
  }
  function $l(a) {
    a.hasOwnProperty("all") &&
      ((al.selectedAllCorePlatformServices = !0),
      gb(yh, function (b) {
        al.corePlatformServices[b] = a.all === "granted";
        al.usedCorePlatformServices = !0;
      }));
    gb(a, function (b, c) {
      b !== "all" &&
        ((al.corePlatformServices[b] = c === "granted"),
        (al.usedCorePlatformServices = !0));
    });
  }
  function W(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return bl(b);
    });
  }
  function am(a, b) {
    gl(a, b);
  }
  function bm(a, b) {
    jl(a, b);
  }
  function cm(a, b) {
    il(a, b);
  }
  function dm() {
    var a = [N.g.N, N.g.za, N.g.O];
    Uk().waitForUpdate(a, 500, al);
  }
  function em(a) {
    for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Uk().clearTimeout(d, void 0, al);
    }
    hl();
  }
  var fm = !1,
    gm = [];
  var hm = {
      jk: "service_worker_endpoint",
      Dh: "shared_user_id",
      Eh: "shared_user_id_requested",
      Pe: "shared_user_id_source",
      Df: "cookie_deprecation_label",
    },
    im;
  function jm(a) {
    if (!im) {
      im = {};
      for (var b = l(Object.keys(hm)), c = b.next(); !c.done; c = b.next())
        im[hm[c.value]] = !0;
    }
    return !!im[a];
  }
  function km(a, b) {
    b = b === void 0 ? !1 : b;
    if (jm(a)) {
      var c,
        d,
        e =
          (d = (c = gc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = l(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function lm(a, b) {
    var c = km(a, !0);
    c && c.set(b);
  }
  function mm(a) {
    var b;
    return (b = km(a)) == null ? void 0 : b.get();
  }
  function nm(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = km(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function om(a, b) {
    var c = km(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function pm() {
    if (Li.pscdl !== void 0) mm(hm.Df) === void 0 && lm(hm.Df, Li.pscdl);
    else {
      var a = function (c) {
          Li.pscdl = c;
          lm(hm.Df, c);
        },
        b = function () {
          a("error");
        };
      try {
        cc.cookieDeprecationLabel
          ? (a("pending"),
            cc.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function qm(a, b) {
    b &&
      gb(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var rm = /[A-Z]+/,
    sm = /\s/;
  function tm(a, b) {
    if (z(a)) {
      a = lb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (rm.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (sm.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function um(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = tm(a[d], b);
      e && (c[e.id] = e);
    }
    vm(c);
    var f = [];
    gb(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function vm(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[wm[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var xm = {},
    wm =
      ((xm[0] = 0),
      (xm[1] = 0),
      (xm[2] = 1),
      (xm[3] = 0),
      (xm[4] = 1),
      (xm[5] = 2),
      (xm[6] = 0),
      (xm[7] = 0),
      (xm[8] = 0),
      xm);
  var ym = Number("") || 500,
    zm = {},
    Am = {},
    Bm = { initialized: 11, complete: 12, interactive: 13 },
    Cm = {},
    Dm = Object.freeze(((Cm[N.g.Oa] = !0), Cm)),
    Em = void 0;
  function Fm(a, b) {
    if (b.length && Vj) {
      var c;
      (c = zm)[a] != null || (c[a] = []);
      Am[a] != null || (Am[a] = []);
      var d = b.filter(function (e) {
        return !Am[a].includes(e);
      });
      zm[a].push.apply(zm[a], ta(d));
      Am[a].push.apply(Am[a], ta(d));
      !Em &&
        d.length > 0 &&
        (Lk("tdc", !0),
        (Em = A.setTimeout(function () {
          Ok();
          zm = {};
          Em = void 0;
        }, ym)));
    }
  }
  function Gm(a, b, c) {
    if (Vj && a === "config") {
      var d,
        e = (d = tm(b)) == null ? void 0 : d.ids;
      if (!(e && e.length > 1)) {
        var f,
          g = gc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = Rc(c.K);
        Rc(c.j, k);
        var m = [],
          n;
        for (n in f) f.hasOwnProperty(n) && Hm(f[n], k).length && m.push(n);
        m.length && (Fm(b, m), Va("TAGGING", Bm[E.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function Im(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Hm(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, u) {
        var v;
        Oc(u) === "object" ? (v = u[r]) : Oc(u) === "array" && (v = u[r]);
        return v === void 0 ? Dm[r] : v;
      },
      f = Im(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Oc(m) === "object" || Oc(m) === "array",
          q = Oc(n) === "object" || Oc(n) === "array";
        if (p && q) Hm(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function Jm() {
    Kk(
      "tdc",
      function () {
        Em && (A.clearTimeout(Em), (Em = void 0));
        var a = [],
          b;
        for (b in zm) zm.hasOwnProperty(b) && a.push(b + "*" + zm[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var Km = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Lm = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 4:
          c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    V = function (a, b, c, d) {
      for (
        var e = l(Lm(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    Mm = function (a) {
      for (
        var b = {}, c = Lm(a, 4), d = l(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = l(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    Nm = function (a, b, c) {
      function d(n) {
        Qc(n) &&
          gb(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = Lm(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    Om = function (a) {
      for (
        var b = [N.g.nd, N.g.jd, N.g.kd, N.g.ld, N.g.md, N.g.od, N.g.pd],
          c = Lm(a, 3),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = l(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Pm = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.aa = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    Qm = function (a, b) {
      a.C = b;
      return a;
    },
    Rm = function (a, b) {
      a.P = b;
      return a;
    },
    Sm = function (a, b) {
      a.j = b;
      return a;
    },
    Tm = function (a, b) {
      a.H = b;
      return a;
    },
    Um = function (a, b) {
      a.aa = b;
      return a;
    },
    Vm = function (a, b) {
      a.K = b;
      return a;
    },
    Wm = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Xm = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Ym = function (a, b) {
      a.onFailure = b;
      return a;
    },
    Zm = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    $m = function (a) {
      return new Km(
        a.eventId,
        a.priorityId,
        a.C,
        a.P,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var an = { Wk: Number("5"), wo: Number("") },
    bn = [];
  function cn(a) {
    bn.push(a);
  }
  var dn = "?id=" + Nf.ctid,
    en = void 0,
    fn = {},
    gn = void 0,
    hn = new (function () {
      var a = 5;
      an.Wk > 0 && (a = an.Wk);
      this.C = a;
      this.j = 0;
      this.H = [];
    })(),
    jn = 1e3;
  function kn(a, b) {
    var c = en;
    if (c === void 0)
      if (b) c = bj();
      else return "";
    for (
      var d = [Nj("https://www.googletagmanager.com"), "/a", dn],
        e = l(bn),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value, k = g({ eventId: c, dd: !!a }), m = l(k), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = l(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function ln() {
    gn && (A.clearTimeout(gn), (gn = void 0));
    if (en !== void 0 && mn) {
      var a;
      (a = fn[en]) || (a = hn.j < hn.C ? !1 : nb() - hn.H[hn.j % hn.C] < 1e3);
      if (a || jn-- <= 0) U(1), (fn[en] = !0);
      else {
        var b = hn.j++ % hn.C;
        hn.H[b] = nb();
        var c = kn(!0);
        pc(c);
        mn = !1;
      }
    }
  }
  var mn = !1;
  function nn(a) {
    fn[a] ||
      (a !== en && (ln(), (en = a)),
      (mn = !0),
      gn || (gn = A.setTimeout(ln, 500)),
      kn().length >= 2022 && ln());
  }
  var on = db();
  function pn() {
    on = db();
  }
  function qn() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(on)],
    ];
  }
  var rn = {};
  function sn(a, b, c) {
    Uj && a !== void 0 && ((rn[a] = rn[a] || []), rn[a].push(c + b), nn(a));
  }
  function tn(a) {
    var b = a.eventId,
      c = a.dd,
      d = [],
      e = rn[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete rn[b];
    return d;
  }
  function un(a, b) {
    var c = tm(ok(a), !0);
    c && vn.register(c, b);
  }
  function wn(a, b, c, d) {
    var e = tm(c, d.isGtmEvent);
    e && (Qi && (d.deferrable = !0), vn.push("event", [b, a], e, d));
  }
  function xn(a, b, c, d) {
    var e = tm(c, d.isGtmEvent);
    e && vn.push("get", [a, b], e, d);
  }
  function yn(a) {
    var b = tm(ok(a), !0),
      c;
    b ? (c = zn(vn, b).j) : (c = {});
    return c;
  }
  function An(a, b) {
    var c = tm(ok(a), !0);
    if (c) {
      var d = vn,
        e = Rc(b, null);
      Rc(zn(d, c).j, e);
      zn(d, c).j = e;
    }
  }
  var Bn = function () {
      this.P = {};
      this.j = {};
      this.C = {};
      this.aa = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    Cn = function (a, b, c, d) {
      this.C = nb();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    Dn = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    zn = function (a, b) {
      var c = b.destinationId;
      R(128) && !fk && (c = tk(c));
      return (a.destinations[c] = a.destinations[c] || new Bn());
    },
    En = function (a, b, c, d) {
      if (d.j) {
        var e = zn(a, d.j),
          f = e.aa;
        if (f) {
          var g = d.j.id;
          R(128) && !fk && (g = tk(g));
          var k = Rc(c, null),
            m = Rc(e.P[g], null),
            n = Rc(e.K, null),
            p = Rc(e.j, null),
            q = Rc(a.j, null),
            r = {};
          if (Uj)
            try {
              r = Rc(kj, null);
            } catch (w) {
              U(72);
            }
          var u = d.j.prefix,
            v = function (w) {
              sn(d.messageContext.eventId, u, w);
            },
            t = $m(
              Zm(
                Ym(
                  Xm(
                    Wm(
                      Um(
                        Tm(
                          Vm(
                            Sm(
                              Rm(
                                Qm(
                                  new Pm(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  k
                                ),
                                m
                              ),
                              n
                            ),
                            p
                          ),
                          q
                        ),
                        r
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (v) {
                        var w = v;
                        v = void 0;
                        w("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (v) {
                      var w = v;
                      v = void 0;
                      w("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            sn(d.messageContext.eventId, u, "1"),
              Gm(d.type, d.j.id, t),
              f(d.j.id, b, d.C, t);
          } catch (w) {
            sn(d.messageContext.eventId, u, "4");
          }
        }
      }
    };
  Dn.prototype.register = function (a, b, c) {
    var d = zn(this, a);
    d.status !== 3 &&
      ((d.aa = b), (d.status = 3), c && (Rc(d.j, c), (d.j = c)), this.flush());
  };
  Dn.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (zn(this, c).status === 1 &&
        ((zn(this, c).status = 2), this.push("require", [{}], c, {})),
      zn(this, c).H && (d.deferrable = !1));
    this.commands.push(new Cn(a, c, b, d));
    d.deferrable || this.flush();
  };
  Dn.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { xc: void 0, Uh: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || zn(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (zn(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            gb(f.args[0], function (u, v) {
              Rc(vb(u, v), b.j);
            });
            break;
          case "config":
            var k = zn(this, g);
            e.xc = {};
            gb(
              f.args[0],
              (function (u) {
                return function (v, t) {
                  Rc(vb(v, t), u.xc);
                };
              })(e)
            );
            var m = !!e.xc[N.g.uc];
            delete e.xc[N.g.uc];
            var n = g.destinationId === g.id;
            m || (n ? (k.K = {}) : (k.P[g.id] = {}));
            (k.H && m) || En(this, N.g.da, e.xc, f);
            k.H = !0;
            n ? Rc(e.xc, k.K) : (Rc(e.xc, k.P[g.id]), U(70));
            d = !0;
            R(53) && sl(e.xc, g.id);
            R(52) && (ml = !0);
            break;
          case "event":
            e.Uh = {};
            gb(
              f.args[0],
              (function (u) {
                return function (v, t) {
                  Rc(vb(v, t), u.Uh);
                };
              })(e)
            );
            En(this, f.args[1], e.Uh, f);
            var p = void 0;
            !R(53) ||
              !f.j ||
              ((p = f.messageContext.eventMetadata) != null && p.em_event) ||
              (pl[f.j.id] = !0);
            R(52) && (ml = !0);
            break;
          case "get":
            var q = {},
              r = ((q[N.g.Bb] = f.args[0]), (q[N.g.Pb] = f.args[1]), q);
            En(this, N.g.Za, r, f);
            R(52) && (ml = !0);
        }
        this.commands.shift();
        Fn(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var Fn = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = zn(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    vn = new Dn();
  var Gn = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Hn = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var In = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    Jn = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var Kn, Ln;
  a: {
    for (var Mn = ["CLOSURE_FLAGS"], Nn = za, On = 0; On < Mn.length; On++)
      if (((Nn = Nn[Mn[On]]), Nn == null)) {
        Ln = null;
        break a;
      }
    Ln = Nn;
  }
  var Pn = Ln && Ln[610401301];
  Kn = Pn != null ? Pn : !1;
  function Qn() {
    var a = za.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Rn,
    Sn = za.navigator;
  Rn = Sn ? Sn.userAgentData || null : null;
  function Tn(a) {
    return Kn
      ? Rn
        ? Rn.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function Un(a) {
    return Qn().indexOf(a) != -1;
  }
  function Vn() {
    return Kn ? !!Rn && Rn.brands.length > 0 : !1;
  }
  function Wn() {
    return Vn() ? !1 : Un("Opera");
  }
  function Xn() {
    return Un("Firefox") || Un("FxiOS");
  }
  function Yn() {
    return Vn()
      ? Tn("Chromium")
      : ((Un("Chrome") || Un("CriOS")) && !(Vn() ? 0 : Un("Edge"))) ||
          Un("Silk");
  }
  var Zn = function (a) {
    Zn[" "](a);
    return a;
  };
  Zn[" "] = function () {};
  var $n = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    ao = /#|$/,
    bo = function (a, b) {
      var c = a.search(ao),
        d = $n(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    co = /[?&]($|#)/,
    eo = function (a, b, c) {
      for (
        var d, e = a.search(ao), f = 0, g, k = [];
        (g = $n(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(co, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var u = d.indexOf("?"),
          v;
        u < 0 || u > r ? ((u = r), (v = "")) : (v = d.substring(u + 1, r));
        q = [d.slice(0, u), v, d.slice(r)];
        var t = q[1];
        q[1] = p ? (t ? t + "&" + p : p) : t;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  function fo() {
    return Kn ? !!Rn && !!Rn.platform : !1;
  }
  function go() {
    return Un("iPhone") && !Un("iPod") && !Un("iPad");
  }
  function ho() {
    go() || Un("iPad") || Un("iPod");
  }
  Wn();
  Vn() || Un("Trident") || Un("MSIE");
  Un("Edge");
  !Un("Gecko") ||
    (Qn().toLowerCase().indexOf("webkit") != -1 && !Un("Edge")) ||
    Un("Trident") ||
    Un("MSIE") ||
    Un("Edge");
  Qn().toLowerCase().indexOf("webkit") != -1 && !Un("Edge") && Un("Mobile");
  fo() || Un("Macintosh");
  fo() || Un("Windows");
  (fo() ? Rn.platform === "Linux" : Un("Linux")) || fo() || Un("CrOS");
  fo() || Un("Android");
  go();
  Un("iPad");
  Un("iPod");
  ho();
  Qn().toLowerCase().indexOf("kaios");
  var io = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Zn(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    jo = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    ko = function (a) {
      if (A.top == A) return 0;
      if (a === void 0 ? 0 : a) {
        var b = A.location.ancestorOrigins;
        if (b) return b[b.length - 1] == A.location.origin ? 1 : 2;
      }
      return io(A.top) ? 1 : 2;
    },
    lo = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    },
    mo = function () {
      for (var a = A, b = a; a && a != a.parent; )
        (a = a.parent), io(a) && (b = a);
      return b;
    };
  function no(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = lo(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = $b(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        Jn(e, "load", f);
        Jn(e, "error", f);
      };
      In(e, "load", f);
      In(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var po = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      jo(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      oo(c, b);
    },
    oo = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else no(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var qo = function () {
    this.P = this.P;
    this.C = this.C;
  };
  qo.prototype.P = !1;
  qo.prototype.dispose = function () {
    this.P || ((this.P = !0), this.Va());
  };
  qo.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  qo.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
  };
  qo.prototype.Va = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function ro(a) {
    a.addtlConsent !== void 0 &&
      typeof a.addtlConsent !== "string" &&
      (a.addtlConsent = void 0);
    a.gdprApplies !== void 0 &&
      typeof a.gdprApplies !== "boolean" &&
      (a.gdprApplies = void 0);
    return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
      (a.listenerId !== void 0 && typeof a.listenerId !== "number")
      ? 2
      : a.cmpStatus && a.cmpStatus !== "error"
      ? 0
      : 3;
  }
  var so = function (a, b) {
    b = b === void 0 ? {} : b;
    qo.call(this);
    this.j = null;
    this.aa = {};
    this.jg = 0;
    this.K = null;
    this.H = a;
    var c;
    this.Je = (c = b.Dn) != null ? c : 500;
    var d;
    this.Eb = (d = b.lo) != null ? d : !1;
  };
  ra(so, qo);
  so.prototype.Va = function () {
    this.aa = {};
    this.K && (Jn(this.H, "message", this.K), delete this.K);
    delete this.aa;
    delete this.H;
    delete this.j;
    qo.prototype.Va.call(this);
  };
  var uo = function (a) {
    return typeof a.H.__tcfapi === "function" || to(a) != null;
  };
  so.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Eb },
      d = Hn(function () {
        return a(c);
      }),
      e = 0;
    this.Je !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.Je));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = ro(c)),
          (c.internalBlockOnErrors = b.Eb),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      vo(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  so.prototype.removeEventListener = function (a) {
    a && a.listenerId && vo(this, "removeEventListener", null, a.listenerId);
  };
  var xo = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = wo(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && wo(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? wo(a.purpose.legitimateInterests, b) &&
                wo(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    wo = function (a, b) {
      return !(!a || !a[b]);
    },
    vo = function (a, b, c, d) {
      c || (c = function () {});
      var e = a.H;
      if (typeof e.__tcfapi === "function") {
        var f = e.__tcfapi;
        f(b, 2, c, d);
      } else if (to(a)) {
        Go(a);
        var g = ++a.jg;
        a.aa[g] = c;
        if (a.j) {
          var k = {};
          a.j.postMessage(
            ((k.__tcfapiCall = {
              command: b,
              version: 2,
              callId: g,
              parameter: d,
            }),
            k),
            "*"
          );
        }
      } else c({}, !1);
    },
    to = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    Go = function (a) {
      if (!a.K) {
        var b = function (c) {
          try {
            var d;
            d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data)
              .__tcfapiReturn;
            a.aa[d.callId](d.returnValue, d.success);
          } catch (e) {}
        };
        a.K = b;
        In(a.H, "message", b);
      }
    },
    Ho = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = ro(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (po({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var Io = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function Jo() {
    var a = Li.tcf || {};
    return (Li.tcf = a);
  }
  var Ko = function () {
    return new so(A, { Dn: -1 });
  };
  function Lo() {
    var a = Jo(),
      b = Ko();
    uo(b) && !Mo() && !No() && U(124);
    if (!a.active && uo(b)) {
      Mo() &&
        ((a.active = !0),
        (a.Bc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (Uk().active = !0),
        (a.tcString = "tcunavailable"));
      dm();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            Oo(a), em([N.g.N, N.g.za, N.g.O]), (Uk().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            No() && (a.active = !0),
            !Po(c) || Mo() || No())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in Io) Io.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (Po(c)) {
              var g = {},
                k;
              for (k in Io)
                if (Io.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { vm: !0 };
                    p = p === void 0 ? {} : p;
                    m = Ho(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.Ck
                        : (p.Ck || n.gdprApplies !== void 0 || p.vm) &&
                          (p.Ck ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? xo(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = xo(c, k, Io[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.Bc = d;
              var q = {},
                r = ((q[N.g.N] = a.Bc["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (em([N.g.N, N.g.za, N.g.O]), (Uk().active = !0))
                : ((r[N.g.za] = a.Bc["3"] && a.Bc["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[N.g.O] = a.Bc["1"] && a.Bc["7"] ? "granted" : "denied")
                    : em([N.g.O]),
                  Zl(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: Qo() || "",
                    }
                  ));
            }
          } else em([N.g.N, N.g.za, N.g.O]);
        });
      } catch (c) {
        Oo(a), em([N.g.N, N.g.za, N.g.O]), (Uk().active = !0);
      }
    }
  }
  function Oo(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function Po(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function Mo() {
    return A.gtag_enable_tcf_support === !0;
  }
  function No() {
    return Jo().enableAdvertiserConsentMode === !0;
  }
  function Qo() {
    var a = Jo();
    if (a.active) return a.tcString;
  }
  function Ro() {
    var a = Jo();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function So(a) {
    if (!Io.hasOwnProperty(String(a))) return !0;
    var b = Jo();
    return b.active && b.Bc ? !!b.Bc[String(a)] : !0;
  }
  var To = [N.g.N, N.g.U, N.g.O, N.g.za],
    Uo = {},
    Vo = ((Uo[N.g.N] = 1), (Uo[N.g.U] = 2), Uo);
  function Wo(a) {
    if (a === void 0) return 0;
    switch (V(a, N.g.qa)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function Xo(a) {
    if (wl() === "US-CO" && cc.globalPrivacyControl === !0) return !1;
    var b = Wo(a);
    if (b === 3) return !1;
    switch (cl(N.g.za)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function Yo() {
    return fl() || !bl(N.g.N) || !bl(N.g.U);
  }
  function Zo() {
    var a = {},
      b;
    for (b in Vo) Vo.hasOwnProperty(b) && (a[Vo[b]] = cl(b));
    return "G1" + De(a[1] || 0) + De(a[2] || 0);
  }
  var $o = {},
    ap =
      (($o[N.g.N] = 0), ($o[N.g.U] = 1), ($o[N.g.O] = 2), ($o[N.g.za] = 3), $o);
  function bp(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function cp(a) {
    for (var b = "1", c = 0; c < To.length; c++) {
      var d = b,
        e,
        f = To[c],
        g = al.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : ap.hasOwnProperty(g) ? 12 | ap[g] : 8;
      var k = Uk();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | bp(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (bp(m.declare) << 4) | (bp(m.default) << 2) | bp(m.update)
          ]);
    }
    var n = b,
      p = (wl() === "US-CO" && cc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (fl() ? 1 : 0) << 2,
      r = Wo(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    return (b +=
      "" +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (al.containerScopedDefaults.ad_storage << 4) |
          (al.containerScopedDefaults.analytics_storage << 2) |
          al.containerScopedDefaults.ad_user_data
      ] +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((al.usedContainerScopedDefaults ? 1 : 0) << 2) |
          al.containerScopedDefaults.ad_personalization
      ]);
  }
  function dp() {
    if (!bl(N.g.O)) return "-";
    for (
      var a = Object.keys(yh), b = dl(a), c = "", d = l(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += yh[f]);
    }
    (al.usedCorePlatformServices ? al.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function ep() {
    return yl() || ((Mo() || No()) && Ro() === "1") ? "1" : "0";
  }
  function fp() {
    return (yl() ? !0 : !(!Mo() && !No()) && Ro() === "1") || !bl(N.g.O);
  }
  function gp() {
    var a = "0",
      b = "0",
      c;
    var d = Jo();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = Jo();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    yl() && (k |= 1);
    Ro() === "1" && (k |= 2);
    Mo() && (k |= 4);
    var m;
    var n = Jo();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    Uk().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function hp() {
    return wl() === "US-CO";
  }
  function ip() {
    var a = !1;
    return a;
  }
  var jp = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function kp(a) {
    a = a === void 0 ? {} : a;
    var b = Nf.ctid.split("-")[0].toUpperCase(),
      c = {
        ctid: Nf.ctid,
        sn: Ki.Ne,
        un: Ki.Bh,
        Um: ek.Ke ? 2 : 1,
        zn: a.zi,
        Ue: Nf.canonicalContainerId,
      };
    c.Ue !== a.ya && (c.ya = a.ya);
    var d = qk();
    c.hn = d ? d.canonicalContainerId : void 0;
    Ri ? ((c.xg = jp[b]), c.xg || (c.xg = 0)) : (c.xg = Vi ? 13 : 10);
    ej.C
      ? ((c.vg = 0), (c.Xl = 2))
      : Ti
      ? (c.vg = 1)
      : ip()
      ? (c.vg = 2)
      : (c.vg = 3);
    var e = {};
    e[6] = fk;
    ej.j === 2 ? (e[7] = !0) : ej.j === 1 && (e[2] = !0);
    if (fc) {
      var f = Aj(Gj(fc), "host");
      f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null);
    }
    c.am = e;
    var g = a.lg,
      k;
    var m = c.xg,
      n = c.vg;
    m === void 0
      ? (k = "")
      : (n || (n = 0), (k = "" + Fe(1, 1) + Ce((m << 2) | n)));
    var p = c.Xl,
      q = "4" + k + (p ? "" + Fe(2, 1) + Ce(p) : ""),
      r,
      u = c.un;
    r = u && Ee.test(u) ? "" + Fe(3, 2) + u : "";
    var v,
      t = c.sn;
    v = t ? "" + Fe(4, 1) + Ce(t) : "";
    var w;
    var x = c.ctid;
    if (x && g) {
      var y = x.split("-"),
        B = y[0].toUpperCase();
      if (B !== "GTM" && B !== "OPT") w = "";
      else {
        var C = y[1];
        w = "" + Fe(5, 3) + Ce(1 + C.length) + (c.Um || 0) + C;
      }
    } else w = "";
    var D = c.zn,
      G = c.Ue,
      K = c.ya,
      F = c.uo,
      S =
        q +
        r +
        v +
        w +
        (D ? "" + Fe(6, 1) + Ce(D) : "") +
        (G ? "" + Fe(7, 3) + Ce(G.length) + G : "") +
        (K ? "" + Fe(8, 3) + Ce(K.length) + K : "") +
        (F ? "" + Fe(9, 3) + Ce(F.length) + F : ""),
      M;
    var T = c.am;
    T = T === void 0 ? {} : T;
    for (
      var ca = [], da = l(Object.keys(T)), Z = da.next();
      !Z.done;
      Z = da.next()
    ) {
      var Q = Z.value;
      ca[Number(Q)] = T[Q];
    }
    if (ca.length) {
      var pa = Fe(10, 3),
        oa;
      if (ca.length === 0) oa = Ce(0);
      else {
        for (var ja = [], Ba = 0, Ma = !1, ua = 0; ua < ca.length; ua++) {
          Ma = !0;
          var Ta = ua % 6;
          ca[ua] && (Ba |= 1 << Ta);
          Ta === 5 && (ja.push(Ce(Ba)), (Ba = 0), (Ma = !1));
        }
        Ma && ja.push(Ce(Ba));
        oa = ja.join("");
      }
      var cb = oa;
      M = "" + pa + Ce(cb.length) + cb;
    } else M = "";
    var Hc = c.hn;
    return S + M + (Hc ? "" + Fe(11, 3) + Ce(Hc.length) + Hc : "");
  }
  function lp(a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; d >= 0; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = c !== 0 ? b ^ (c >> 21) : b);
    return b;
  }
  function mp(a) {
    return a.origin !== "null";
  }
  function np(a, b, c, d) {
    var e;
    if (op(d)) {
      for (
        var f = [], g = String(b || pp()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function qp(a, b, c, d, e) {
    if (op(e)) {
      var f = rp(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = sp(
          f,
          function (g) {
            return g.im;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = sp(
          f,
          function (g) {
            return g.kn;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function tp(a, b, c, d) {
    var e = pp(),
      f = window;
    mp(f) && (f.document.cookie = a);
    var g = pp();
    return e !== g || (c !== void 0 && np(b, g, !1, d).indexOf(c) >= 0);
  }
  function up(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!op(c.Lb)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = vp(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.Ym);
    g = e(g, "samesite", c.vn);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = wp(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
        var v = p[u] !== "none" ? p[u] : void 0,
          t = e(g, "domain", v);
        t = f(t, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!xp(v, c.path) && tp(t, a, b, c.Lb)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return xp(n, c.path) ? 1 : tp(g, a, b, c.Lb) ? 0 : 1;
  }
  function yp(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return up(a, b, c);
  }
  function sp(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function rp(a, b, c) {
    for (var d = [], e = np(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            im: Number(n[0]) || 1,
            kn: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function vp(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var zp = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ap = /(^|\.)doubleclick\.net$/i;
  function xp(a, b) {
    return (
      a !== void 0 &&
      (Ap.test(window.document.location.hostname) || (b === "/" && zp.test(a)))
    );
  }
  function Bp(a) {
    if (!a) return 1;
    var b = a;
    Yh(7) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function Cp(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function Dp(a, b) {
    var c = "" + Bp(a),
      d = Cp(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var pp = function () {
      return mp(window) ? window.document.cookie : "";
    },
    op = function (a) {
      return a && Yh(8)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return el(b) && bl(b);
          })
        : !0;
    },
    wp = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Ap.test(e) || zp.test(e) || a.push("none");
      return a;
    };
  function Ep(a) {
    var b = Math.round(Math.random() * 2147483647);
    return a ? String(b ^ (lp(a) & 2147483647)) : String(b);
  }
  function Fp(a) {
    return [Ep(a), Math.round(nb() / 1e3)].join(".");
  }
  function Gp(a, b, c, d, e) {
    var f = Bp(b);
    return qp(a, f, Cp(c), d, e);
  }
  function Hp(a, b, c, d) {
    return [b, Dp(c, d), a].join(".");
  }
  function Ip(a, b, c, d) {
    var e,
      f = Number(a.Kb != null ? a.Kb : void 0);
    f !== 0 && (e = new Date((b || nb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Lb: d,
    };
  }
  var Jp;
  function Kp() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = Lp,
      d = Mp,
      e = Np();
    if (!e.init) {
      qc(E, "mousedown", a);
      qc(E, "keyup", a);
      qc(E, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function Op(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    Np().decorators.push(f);
  }
  function Pp(a, b, c) {
    for (var d = Np().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== E.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && qb(e, g.callback());
      }
    }
    return e;
  }
  function Np() {
    var a = gc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Qp = /(.*?)\*(.*?)\*(.*)/,
    Rp = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Sp = /^(?:www\.|m\.|amp\.)+/,
    Tp = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Up(a) {
    var b = Tp.exec(a);
    if (b) return { li: b[1], query: b[2], fragment: b[3] };
  }
  function Vp(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  function Wp(a, b) {
    var c = [
        cc.userAgent,
        new Date().getTimezoneOffset(),
        cc.userLanguage || cc.language,
        Math.floor(nb() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Jp)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Jp = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Jp[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Xp(a) {
    return function (b) {
      var c = Gj(A.location.href),
        d = c.search.replace("?", ""),
        e = zj(d, "_gl", !1, !0) || "";
      b.query = Yp(e) || {};
      var f = Aj(c, "fragment"),
        g;
      var k = -1;
      if (sb(f, "_gl=")) k = 4;
      else {
        var m = f.indexOf("&_gl=");
        m > 0 && (k = m + 3 + 2);
      }
      if (k < 0) g = void 0;
      else {
        var n = f.indexOf("&", k);
        g = n < 0 ? f.substring(k) : f.substring(k, n);
      }
      b.fragment = Yp(g || "") || {};
      a && Zp(c, d, f);
    };
  }
  function $p(a, b) {
    var c = Vp(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  function Zp(a, b, c) {
    function d(g, k) {
      var m = $p("_gl", g);
      m.length && (m = k + m);
      return m;
    }
    if (bc && bc.replaceState) {
      var e = Vp("_gl");
      if (e.test(b) || e.test(c)) {
        var f = Aj(a, "path");
        b = d(b, "?");
        c = d(c, "#");
        bc.replaceState({}, "", "" + f + b + c);
      }
    }
  }
  function aq(a, b) {
    var c = Xp(!!b),
      d = Np();
    d.data || ((d.data = { query: {}, fragment: {} }), c(d.data));
    var e = {},
      f = d.data;
    f && (qb(e, f.query), a && qb(e, f.fragment));
    return e;
  }
  var Yp = function (a) {
    try {
      var b = bq(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = Sa(d[e + 1]);
          c[f] = g;
        }
        Va("TAGGING", 6);
        return c;
      }
    } catch (k) {
      Va("TAGGING", 8);
    }
  };
  function bq(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = Qp.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Wp(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        Va("TAGGING", 7);
      }
    }
  }
  function cq(a, b, c, d, e) {
    function f(p) {
      p = $p(a, p);
      var q = p.charAt(p.length - 1);
      p && q !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = Up(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.li + k + m;
  }
  function dq(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var u in n)
          if (n.hasOwnProperty(u)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var v,
          t = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (t.push(w), t.push(Ra(String(x))));
          }
        var y = t.join("*");
        v = ["1", Wp(y), y].join("*");
        d
          ? (Yh(3) || Yh(1) || !p) && eq("_gl", v, a, p, q)
          : fq("_gl", v, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = Pp(b, 1, d),
      f = Pp(b, 2, d),
      g = Pp(b, 4, d),
      k = Pp(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Yh(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && gq(m, k[m], a);
  }
  function gq(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? fq(a, b, c)
      : c.tagName.toLowerCase() === "form" && eq(a, b, c);
  }
  function fq(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Yh(5) || d)) {
        var k = A.location.href,
          m = Up(c.href),
          n = Up(k);
        g = !(m && n && m.li === n.li && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = cq(a, b, c.href, d, e);
      Tb.test(p) && (c.href = p);
    }
  }
  function eq(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = cq(a, b, c.action, d, e);
          Tb.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Lp(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || dq(e, e.hostname);
      }
    } catch (g) {}
  }
  function Mp(a) {
    try {
      if (a.action) {
        var b = Aj(Gj(a.action), "host");
        dq(a, b);
      }
    } catch (c) {}
  }
  function hq(a, b, c, d) {
    Kp();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    Op(a, b, e, d, !1);
    e === 2 && Va("TAGGING", 23);
    d && Va("TAGGING", 24);
  }
  function iq(a, b) {
    Kp();
    Op(a, [Cj(A.location, "host", !0)], b, !0, !0);
  }
  function jq() {
    var a = E.location.hostname,
      b = Rp.exec(E.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(Sp, ""),
      m = e.replace(Sp, "");
    return k === m || tb(k, "." + m);
  }
  function kq(a, b) {
    return a === !1 ? !1 : a || b || jq();
  }
  var lq = ["1"],
    mq = {},
    nq = {};
  function oq(a, b) {
    b = b === void 0 ? !0 : b;
    var c = pq(a.prefix);
    if (!mq[c])
      if (qq(c, a.path, a.domain)) {
        var d = nq[pq(a.prefix)];
        b && rq(a, d ? d.id : void 0, d ? d.fi : void 0);
      } else {
        var e = Hj("auiddc");
        if (e) Va("TAGGING", 17), (mq[c] = e);
        else if (b) {
          var f = pq(a.prefix),
            g = Fp();
          sq(f, g, a);
          qq(c, a.path, a.domain);
        }
      }
  }
  function rq(a, b, c) {
    var d = pq(a.prefix),
      e = mq[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(nb() / 1e3)));
          sq(d, k, a, g * 1e3);
        }
      }
    }
  }
  function sq(a, b, c, d) {
    var e = Hp(b, "1", c.domain, c.path),
      f = Ip(c, d);
    f.Lb = tq();
    yp(a, e, f);
  }
  function qq(a, b, c) {
    var d = Gp(a, b, c, lq, tq());
    if (!d) return !1;
    uq(a, d);
    return !0;
  }
  function uq(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((mq[a] = c.slice(0, 2).join(".")),
        (nq[a] = { id: c.slice(2, 4).join("."), fi: Number(c[4]) || 0 }))
      : c.length === 3
      ? (nq[a] = { id: c.slice(0, 2).join("."), fi: Number(c[2]) || 0 })
      : (mq[a] = b);
  }
  function pq(a) {
    return (a || "_gcl") + "_au";
  }
  function vq(a) {
    function b() {
      bl(c) && a();
    }
    var c = tq();
    il(function () {
      b();
      bl(c) || jl(b, c);
    }, c);
  }
  function wq(a) {
    var b = aq(!0),
      c = pq(a.prefix);
    vq(function () {
      var d = b[c];
      if (d) {
        uq(c, d);
        var e = Number(mq[c].split(".")[1]) * 1e3;
        if (e) {
          Va("TAGGING", 16);
          var f = Ip(a, e);
          f.Lb = tq();
          var g = Hp(d, "1", a.domain, a.path);
          yp(c, g, f);
        }
      }
    });
  }
  function xq(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = Gp(a, e.path, e.domain, lq, tq());
      k && (g[a] = k);
      return g;
    };
    vq(function () {
      hq(f, b, c, d);
    });
  }
  function tq() {
    return ["ad_storage", "ad_user_data"];
  }
  var yq = {},
    zq =
      ((yq.k = { ba: /^[\w-]+$/ }),
      (yq.b = { ba: /^[\w-]+$/, vi: !0 }),
      (yq.i = { ba: /^[1-9]\d*$/ }),
      (yq.u = { ba: /^[1-9]\d*$/ }),
      yq);
  var Aq = {},
    Dq =
      ((Aq[5] = { Yk: { 2: Bq }, Mh: ["k", "i", "b", "u"] }),
      (Aq[4] = { Yk: { 2: Bq, GCL: Cq }, Mh: ["k", "i", "b"] }),
      Aq);
  function Eq(a) {
    var b = Dq[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.Yk[c];
        if (d) return d(a, 5);
      }
    }
  }
  function Bq(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = Dq[b];
      if (e) {
        for (
          var f = e.Mh, g = l(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = zq[n];
              q && (q.vi ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function Fq(a, b) {
    var c = Dq[5];
    if (c) {
      for (var d = [], e = l(c.Mh), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = zq[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.vi && Array.isArray(m))
              for (var n = l(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function Cq(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var Gq = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function Hq(a) {
    if (Dq[5]) {
      for (
        var b = [],
          c = np(a, void 0, void 0, Gq.get(5)),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = Eq(e.value);
        f && (Iq(f), b.push(f));
      }
      return b;
    }
  }
  function Jq(a, b, c, d) {
    c = c || {};
    var e = Dp(c.domain, c.path),
      f = Fq(b, e);
    if (f) {
      var g = Ip(c, d, void 0, Gq.get(5));
      yp(a, f, g);
    }
  }
  function Kq(a, b) {
    var c = b.ba;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function Iq(a) {
    for (
      var b = l(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { We: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.We = zq[e];
      d.We
        ? d.We.vi
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return Kq(k, g.We);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && Kq(f, d.We)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  function Lq(a) {
    for (
      var b = [],
        c = E.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Fi: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function Mq(a, b) {
    var c = Lq(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].Fi] || (d[c[e].Fi] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, W: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].Fi].push(g);
      }
    }
    return d;
  }
  function Nq() {
    var a = String,
      b = A.location.hostname,
      c = A.location.pathname,
      d = (b = Bb(b));
    d.split(".").length > 2 &&
      (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
    b = d;
    c = Bb(c);
    var e = c.split(";")[0];
    e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
    return a(lp(("" + b + e).toLowerCase()));
  }
  var Oq = ["ad_storage", "ad_user_data"];
  function Pq() {
    var a = Qq();
    if (a.error) return a;
    if (!a.value) return { error: 2 };
    var b;
    try {
      b = a.value.gclid;
    } catch (c) {
      return { error: 11 };
    }
    return b ? { value: b } : { value: void 0 };
  }
  function Qq(a) {
    a = a === void 0 ? !0 : a;
    if (!bl(Oq)) return { error: 3 };
    try {
      if (!A.localStorage) return { error: 1 };
    } catch (f) {
      return { error: 14 };
    }
    var b = { schema: "gcl", version: 1 },
      c = void 0;
    try {
      c = A.localStorage.getItem("_gcl_ls");
    } catch (f) {
      return { error: 13 };
    }
    try {
      if (c) {
        var d = JSON.parse(c);
        if (d && typeof d === "object") b = d;
        else return { error: 12 };
      }
    } catch (f) {
      return { error: 8 };
    }
    if (b.schema !== "gcl") return { error: 4 };
    if (b.version !== 1) return { error: 5 };
    try {
      var e = Rq(b);
      a && e && Sq({ value: b, error: 0 });
    } catch (f) {
      return { error: 8 };
    }
    return { value: b, error: 0 };
  }
  function Rq(a) {
    if (!a || typeof a !== "object") return !1;
    if ("expires" in a && "value" in a) {
      var b;
      typeof a.expires === "number"
        ? (b = a.expires)
        : (b = typeof a.expires === "string" ? Number(a.expires) : NaN);
      if (isNaN(b) || !(Date.now() <= b))
        return (a.value = null), (a.error = 9), !0;
    } else {
      for (
        var c = !1, d = l(Object.keys(a)), e = d.next();
        !e.done;
        e = d.next()
      )
        c = Rq(a[e.value]) || c;
      return c;
    }
    return !1;
  }
  function Sq(a) {
    if (!a.error && a.value) {
      var b = a.value,
        c;
      try {
        c = JSON.stringify(b);
      } catch (d) {
        return;
      }
      try {
        A.localStorage.setItem("_gcl_ls", c);
      } catch (d) {}
    }
  }
  var Tq = /^\w+$/,
    Uq = /^[\w-]+$/,
    Vq = {},
    Wq =
      ((Vq.aw = "_aw"),
      (Vq.dc = "_dc"),
      (Vq.gf = "_gf"),
      (Vq.gp = "_gp"),
      (Vq.gs = "_gs"),
      (Vq.ha = "_ha"),
      (Vq.ag = "_ag"),
      (Vq.gb = "_gb"),
      Vq);
  function Xq() {
    return ["ad_storage", "ad_user_data"];
  }
  function Yq(a) {
    return !Yh(8) || bl(a);
  }
  function Zq(a, b) {
    function c() {
      var d = Yq(b);
      d && a();
      return d;
    }
    il(function () {
      c() || jl(c, b);
    }, b);
  }
  function $q(a) {
    return ar(a).map(function (b) {
      return b.W;
    });
  }
  function br(a) {
    return cr(a)
      .filter(function (b) {
        return b.W;
      })
      .map(function (b) {
        return b.W;
      });
  }
  function cr(a) {
    var b = dr(a.prefix),
      c = er("gb", b),
      d = er("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = ar(c).map(e("gb")),
      g = fr(d).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function gr(a, b, c, d, e, f) {
    var g = bb(a, function (k) {
      return k.W === c;
    });
    g
      ? (g.timestamp < d && ((g.timestamp = d), (g.Sd = f)),
        (g.labels = hr(g.labels || [], e || [])))
      : a.push({ version: b, W: c, timestamp: d, labels: e, Sd: f });
  }
  function fr(a) {
    for (
      var b = Hq(a) || [], c = [], d = l(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = g.k,
        m = g.b,
        n = ir(f);
      if (n) {
        var p = void 0;
        Yh(9) && (p = f.u);
        gr(c, "2", k, n, m || [], p);
      }
    }
    return c.sort(function (q, r) {
      return r.timestamp - q.timestamp;
    });
  }
  function ar(a) {
    for (
      var b = [], c = np(a, E.cookie, void 0, Xq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = jr(e.value);
      if (f != null) {
        var g = f;
        gr(b, g.version, g.W, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return kr(b);
  }
  function lr(a, b) {
    for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      c.includes(f) || c.push(f);
    }
    for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
      var m = k.value;
      c.includes(m) || c.push(m);
    }
    return c;
  }
  function mr(a, b) {
    var c = bb(a, function (d) {
      return d.W === b.W;
    });
    c
      ? (c.timestamp < b.timestamp &&
          ((c.timestamp = b.timestamp), (c.Sd = b.Sd)),
        (c.Qa = c.Qa
          ? b.Qa
            ? c.timestamp < b.timestamp
              ? b.Qa
              : c.Qa
            : c.Qa || 0
          : b.Qa || 0),
        (c.labels = lr(c.labels || [], b.labels || [])),
        (c.bd = lr(c.bd || [], b.bd || [])))
      : a.push(b);
  }
  function nr() {
    var a = Pq();
    if (!a || a.error || !a.value || typeof a.value !== "object") return null;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object")
        return null;
      var c = b.value,
        d = c.value;
      return d && d.match(Uq)
        ? {
            version: "",
            W: d,
            timestamp: Number(c.creationTimeMs) || 0,
            labels: [],
            Qa: c.linkDecorationSource || 0,
            bd: [2],
          }
        : null;
    } catch (e) {
      return null;
    }
  }
  function or(a) {
    for (
      var b = [], c = np(a, E.cookie, void 0, Xq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = jr(e.value);
      f != null && ((f.Sd = void 0), (f.Qa = 0), (f.bd = [1]), mr(b, f));
    }
    var g = nr();
    g && ((g.Sd = void 0), (g.Qa = g.Qa || 0), (g.bd = g.bd || [2]), mr(b, g));
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return kr(b);
  }
  function hr(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function dr(a) {
    return a && typeof a === "string" && a.match(Tq) ? a : "_gcl";
  }
  function pr(a, b, c) {
    var d = Gj(a),
      e = Aj(d, "query", !1, void 0, "gclsrc"),
      f = { value: Aj(d, "query", !1, void 0, "gclid"), Qa: c ? 4 : 2 };
    if (b && (!f.value || !e)) {
      var g = d.hash.replace("#", "");
      f.value || ((f.value = zj(g, "gclid", !1)), (f.Qa = 3));
      e || (e = zj(g, "gclsrc", !1));
    }
    return !f.value || (e !== void 0 && e !== "aw" && e !== "aw.ds") ? [] : [f];
  }
  function qr(a, b) {
    var c = Gj(a),
      d = Aj(c, "query", !1, void 0, "gclid"),
      e = Aj(c, "query", !1, void 0, "gclsrc"),
      f = Aj(c, "query", !1, void 0, "wbraid");
    f = zb(f);
    var g = Aj(c, "query", !1, void 0, "gbraid"),
      k = Aj(c, "query", !1, void 0, "gad_source"),
      m = Aj(c, "query", !1, void 0, "dclid");
    if (b && !(d && e && f && g)) {
      var n = c.hash.replace("#", "");
      d = d || zj(n, "gclid", !1);
      e = e || zj(n, "gclsrc", !1);
      f = f || zj(n, "wbraid", !1);
      g = g || zj(n, "gbraid", !1);
      k = k || zj(n, "gad_source", !1);
    }
    return rr(d, e, m, f, g, k);
  }
  function sr() {
    return qr(A.location.href, !0);
  }
  function rr(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(Uq))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && Uq.test(d) && ((g.wbraid = d), k(d, "gb"));
    e !== void 0 && Uq.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && Uq.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function tr(a) {
    for (
      var b = sr(), c = !0, d = l(Object.keys(b)), e = d.next();
      !e.done;
      e = d.next()
    )
      if (b[e.value] !== void 0) {
        c = !1;
        break;
      }
    c && ((b = qr(A.document.referrer, !1)), (b.gad_source = void 0));
    ur(b, !1, a);
  }
  function vr(a) {
    tr(a);
    var b = pr(A.location.href, !0, !1);
    b.length || (b = pr(A.document.referrer, !1, !0));
    if (b.length) {
      var c = b[0];
      a = a || {};
      var d = nb(),
        e = Ip(a, d, !0),
        f = Xq(),
        g = function () {
          if (Yq(f) && e.expires !== void 0) {
            var k = {
                value: {
                  value: c.value,
                  creationTimeMs: d,
                  linkDecorationSource: c.Qa,
                },
                expires: Number(e.expires),
              },
              m = Qq(!1);
            !m.error && m.value && ((m.value.gclid = k), Sq(m));
          }
        };
      il(function () {
        g();
        Yq(f) || jl(g, f);
      }, f);
    }
  }
  function ur(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = dr(c.prefix),
      g = d || nb(),
      k = Math.round(g / 1e3),
      m = Xq(),
      n = !1,
      p = !1,
      q = function () {
        if (Yq(m)) {
          var r = Ip(c, g, !0);
          r.Lb = m;
          for (
            var u = function (F, S) {
                var M = er(F, f);
                M && (yp(M, S, r), F !== "gb" && (n = !0));
              },
              v = function (F) {
                var S = ["GCL", k, F];
                e.length > 0 && S.push(e.join("."));
                return S.join(".");
              },
              t = l(["aw", "dc", "gf", "ha", "gp"]),
              w = t.next();
            !w.done;
            w = t.next()
          ) {
            var x = w.value;
            a[x] && u(x, v(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              B = er("gb", f);
            (!b &&
              ar(B).some(function (F) {
                return F.W === y && F.labels && F.labels.length > 0;
              })) ||
              u("gb", v(y));
          }
        }
        if (!p && a.gbraid && Yq("ad_storage") && ((p = !0), !n)) {
          var C = a.gbraid,
            D = er("ag", f);
          if (
            b ||
            !fr(D).some(function (F) {
              return F.W === C && F.labels && F.labels.length > 0;
            })
          ) {
            var G = {},
              K = ((G.k = C), (G.i = "" + k), (G.b = e), G);
            Jq(D, K, c, g);
          }
        }
        wr(a, f, g, c);
      };
    il(function () {
      q();
      Yq(m) || jl(q, m);
    }, m);
  }
  function wr(a, b, c, d) {
    if (a.gad_source !== void 0 && Yq("ad_storage")) {
      if (Yh(4)) {
        var e = Dc();
        if (e === "r" || e === "h") return;
      }
      var f = a.gad_source,
        g = er("gs", b);
      if (g) {
        var k = Math.round((nb() - (Cc() || 0)) / 1e3),
          m;
        if (Yh(9)) {
          var n = Nq(),
            p = {};
          m = ((p.k = f), (p.i = "" + k), (p.u = n), p);
        } else {
          var q = {};
          m = ((q.k = f), (q.i = "" + k), q);
        }
        Jq(g, m, d, c);
      }
    }
  }
  function xr(a, b) {
    var c = aq(!0);
    Zq(function () {
      for (var d = dr(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (Wq[f] !== void 0) {
          var g = er(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(yr(k), nb()),
              n;
            b: {
              for (
                var p = m, q = np(g, E.cookie, void 0, Xq()), r = 0;
                r < q.length;
                ++r
              )
                if (yr(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var u = Ip(b, m, !0);
              u.Lb = Xq();
              yp(g, k, u);
            }
          }
        }
      }
      ur(rr(c.gclid, c.gclsrc), !1, b);
    }, Xq());
  }
  function zr(a) {
    var b = ["ag"],
      c = aq(!0),
      d = dr(a.prefix);
    Zq(
      function () {
        for (var e = 0; e < b.length; ++e) {
          var f = er(b[e], d);
          if (f) {
            var g = c[f];
            if (g) {
              var k = Eq(g);
              if (k) {
                var m = ir(k);
                m || (m = nb());
                var n;
                a: {
                  for (var p = m, q = Hq(f), r = 0; r < q.length; ++r)
                    if (ir(q[r]) > p) {
                      n = !0;
                      break a;
                    }
                  n = !1;
                }
                if (n) break;
                k.i = "" + Math.round(m / 1e3);
                Jq(f, k, a, m);
              }
            }
          }
        }
      },
      ["ad_storage"]
    );
  }
  function er(a, b) {
    var c = Wq[a];
    if (c !== void 0) return b + c;
  }
  function yr(a) {
    return Ar(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function ir(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function jr(a) {
    var b = Ar(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          W: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function Ar(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !Uq.test(a[2])
      ? []
      : a;
  }
  function Br(a, b, c, d, e) {
    if (Array.isArray(b) && mp(A)) {
      var f = dr(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = er(a[m], f);
            if (n) {
              var p = np(n, E.cookie, void 0, Xq());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      Zq(function () {
        hq(g, b, c, d);
      }, Xq());
    }
  }
  function Cr(a, b, c, d) {
    if (Array.isArray(a) && mp(A)) {
      var e = ["ag"],
        f = dr(d),
        g = function () {
          for (var k = {}, m = 0; m < e.length; ++m) {
            var n = er(e[m], f);
            if (!n) return {};
            var p = Hq(n);
            if (p.length) {
              var q = p.sort(function (r, u) {
                return ir(u) - ir(r);
              })[0];
              k[n] = Fq(q);
            }
          }
          return k;
        };
      Zq(
        function () {
          hq(g, a, b, c);
        },
        ["ad_storage"]
      );
    }
  }
  function kr(a) {
    return a.filter(function (b) {
      return Uq.test(b.W);
    });
  }
  function Dr(a, b) {
    if (mp(A)) {
      for (var c = dr(b.prefix), d = {}, e = 0; e < a.length; e++)
        Wq[a[e]] && (d[a[e]] = Wq[a[e]]);
      Zq(function () {
        gb(d, function (f, g) {
          var k = np(c + g, E.cookie, void 0, Xq());
          k.sort(function (u, v) {
            return yr(v) - yr(u);
          });
          if (k.length) {
            var m = k[0],
              n = yr(m),
              p = Ar(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = Ar(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            ur(q, !0, b, n, p);
          }
        });
      }, Xq());
    }
  }
  function Er(a) {
    var b = ["ag"],
      c = ["gbraid"];
    Zq(
      function () {
        for (var d = dr(a.prefix), e = 0; e < b.length; ++e) {
          var f = er(b[e], d);
          if (!f) break;
          var g = Hq(f);
          if (g.length) {
            var k = g.sort(function (q, r) {
                return ir(r) - ir(q);
              })[0],
              m = ir(k),
              n = k.b,
              p = {};
            p[c[e]] = k.k;
            ur(p, !0, a, m, n);
          }
        }
      },
      ["ad_storage"]
    );
  }
  function Fr(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function Gr(a) {
    function b(k, m, n) {
      n && (k[m] = n);
    }
    if (fl()) {
      var c = sr(),
        d;
      a.includes("gad_source") &&
        (d = c.gad_source !== void 0 ? c.gad_source : aq(!1)._gs);
      if (Fr(c, a) || d) {
        var e = {};
        b(e, "gclid", c.gclid);
        b(e, "dclid", c.dclid);
        b(e, "gclsrc", c.gclsrc);
        b(e, "wbraid", c.wbraid);
        b(e, "gbraid", c.gbraid);
        iq(function () {
          return e;
        }, 3);
        var f = {},
          g = ((f._up = "1"), f);
        b(g, "_gs", d);
        iq(function () {
          return g;
        }, 1);
      }
    }
  }
  function Hr(a) {
    if (!Yh(1)) return null;
    var b = aq(!0).gad_source;
    if (b != null) return (A.location.hash = ""), b;
    if (Yh(2)) {
      var c = Gj(A.location.href);
      b = Aj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = sr();
      if (Fr(d, a)) return "0";
    }
    return null;
  }
  function Ir(a) {
    var b = Hr(a);
    b != null &&
      iq(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function Jr(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function Kr(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Yq(Xq())) return e;
    var f = ar(a),
      g = Jr(e, f, b);
    if (g.length && !d)
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.W]
            .concat(n.labels || [], [b])
            .join("."),
          r = Ip(c, p, !0);
        r.Lb = Xq();
        yp(a, q, r);
      }
    return e;
  }
  function Lr(a, b) {
    var c = [];
    b = b || {};
    var d = cr(b),
      e = Jr(c, d, a);
    if (e.length)
      for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = dr(b.prefix),
          n = er(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.W,
          u = p.labels,
          v = p.timestamp,
          t = Math.round(v / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + t), (w.b = (u || []).concat([a])), w);
          Jq(n, x, b, v);
        } else if (k.type === "gb") {
          var y = [q, t, r].concat(u || [], [a]).join("."),
            B = Ip(b, v, !0);
          B.Lb = Xq();
          yp(n, y, B);
        }
      }
    return c;
  }
  function Mr(a, b) {
    var c = dr(b),
      d = er(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? fr(d) : ar(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Nr(a) {
    for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function Or(a) {
    var b = Math.max(Mr("aw", a), Nr(Yq(Xq()) ? Mq() : {})),
      c = Math.max(Mr("gb", a), Nr(Yq(Xq()) ? Mq("_gac_gb", !0) : {}));
    c = Math.max(c, Mr("ag", a));
    return c > b;
  }
  var Pr = function (a, b) {
      var c = (Li.ads_pageview = Li.ads_pageview || {});
      if (c[a]) return !1;
      (b === void 0 ? 0 : b) || (c[a] = !0);
      return !0;
    },
    Qr = function (a) {
      var b = Gj(a);
      return Ab(
        "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
          " "
        ),
        b,
        "0"
      );
    },
    Yr = function (a, b, c, d, e) {
      var f = dr(a.prefix);
      if (Pr(f, !0)) {
        var g = sr(),
          k = [],
          m = g.gclid,
          n = g.dclid,
          p = g.gclsrc || "aw",
          q = Rr(),
          r = q.cf,
          u = q.yk;
        !m ||
          (p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds") ||
          k.push({ W: m, df: p });
        n && k.push({ W: n, df: "ds" });
        k.length === 2 && U(147);
        k.length === 0 && g.wbraid && k.push({ W: g.wbraid, df: "gb" });
        k.length === 0 && p === "aw.ds" && k.push({ W: "", df: "aw.ds" });
        Sr(function () {
          var v = W(Tr());
          if (v) {
            oq(a);
            var t = [],
              w = v ? mq[pq(a.prefix)] : void 0;
            w && t.push("auid=" + w);
            if (W(N.g.O)) {
              e && t.push("userId=" + e);
              var x = mm(hm.Dh);
              if (x === void 0) lm(hm.Eh, !0);
              else {
                var y = mm(hm.Pe);
                t.push("ga_uid=" + y + "." + x);
              }
            }
            var B = E.referrer ? Aj(Gj(E.referrer), "host") : "",
              C = v || !d ? k : [];
            C.length === 0 &&
              (Ur.test(B) || Vr.test(B)) &&
              C.push({ W: "", df: "" });
            if (C.length !== 0 || r !== void 0) {
              B && t.push("ref=" + encodeURIComponent(B));
              var D = Wr();
              t.push("url=" + encodeURIComponent(D));
              t.push("tft=" + nb());
              var G = Cc();
              G !== void 0 && t.push("tfd=" + Math.round(G));
              var K = ko(!0);
              t.push("frm=" + K);
              r !== void 0 && t.push("gad_source=" + encodeURIComponent(r));
              u !== void 0 &&
                t.push("gad_source_src=" + encodeURIComponent(u.toString()));
              if (!c) {
                var F = {};
                c = $m(Qm(new Pm(0), ((F[N.g.qa] = vn.j[N.g.qa]), F)));
              }
              t.push("gtm=" + kp({ ya: b }));
              Yo() && t.push("gcs=" + Zo());
              t.push("gcd=" + cp(c));
              fp() && t.push("dma_cps=" + dp());
              t.push("dma=" + ep());
              Xo(c) ? t.push("npa=0") : t.push("npa=1");
              hp() && t.push("_ng=1");
              uo(Ko()) && t.push("tcfd=" + gp());
              var S = Ro();
              S && t.push("gdpr=" + S);
              var M = Qo();
              M && t.push("gdpr_consent=" + M);
              R(21) && t.push("apve=0");
              R(112) && aq(!1)._up && t.push("gtm_up=1");
              fj() && t.push("tag_exp=" + fj());
              if (C.length > 0)
                for (var T = 0; T < C.length; T++) {
                  var ca = C[T],
                    da = ca.W,
                    Z = ca.df;
                  if (!Xr(a.prefix, Z + "." + da, w !== void 0)) {
                    var Q =
                      "https://adservice.google.com/pagead/regclk?" +
                      t.join("&");
                    da !== ""
                      ? (Q =
                          Z === "gb"
                            ? Q + "&wbraid=" + da
                            : Q + "&gclid=" + da + "&gclsrc=" + Z)
                      : Z === "aw.ds" && (Q += "&gclsrc=aw.ds");
                    wc(Q);
                  }
                }
              else if (r !== void 0 && !Xr(a.prefix, "gad", w !== void 0)) {
                var pa =
                  "https://adservice.google.com/pagead/regclk?" + t.join("&");
                wc(pa);
              }
            }
          }
        });
      }
    },
    Xr = function (a, b, c) {
      var d = (Li.joined_auid = Li.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    Rr = function () {
      var a = Gj(A.location.href),
        b = void 0,
        c = void 0,
        d = Aj(a, "query", !1, void 0, "gad_source"),
        e,
        f = a.hash.replace("#", "").match(Zr);
      e = f ? f[1] : void 0;
      d && e
        ? ((b = d), (c = 1))
        : d
        ? ((b = d), (c = 2))
        : e && ((b = e), (c = 3));
      return { cf: b, yk: c };
    },
    Wr = function () {
      var a = ko(!1) === 1 ? A.top.location.href : A.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    $r = function (a) {
      var b = [];
      gb(a, function (c, d) {
        d = kr(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].W);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    bs = function (a, b) {
      return as("dc", a, b);
    },
    cs = function (a, b) {
      return as("aw", a, b);
    },
    as = function (a, b, c) {
      if (a === "aw" || a === "dc" || a === "gb") {
        var d = Hj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = dr(b);
      if (e === "_gcl") {
        var f = !W(Tr()) && c,
          g;
        g = sr()[a] || [];
        if (g.length > 0) return f ? ["0"] : g;
      }
      var k = er(a, e);
      return k ? $q(k) : [];
    },
    Sr = function (a) {
      var b = Tr();
      cm(function () {
        a();
        W(b) || jl(a, b);
      }, b);
    },
    Tr = function () {
      return [N.g.N, N.g.O];
    },
    Ur = /^(?:www\.)?google(?:\.com?)?(?:\.[a-z]{2}t?)?$/,
    Vr = /^www\.googleadservices\.com$/,
    Zr = /^gad_source[_=](\d+)$/;
  function ds() {
    Li.dedupe_gclid || (Li.dedupe_gclid = Fp());
    return Li.dedupe_gclid;
  }
  var es = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    fs = /^www.googleadservices.com$/;
  function gs(a) {
    a || (a = hs());
    return a.In
      ? !1
      : a.Gm || a.Hm || a.Km || a.Im || a.cf || a.tm || a.Jm || a.ym
      ? !0
      : !1;
  }
  function hs() {
    var a = {},
      b = aq(!0);
    a.In = !!b._up;
    var c = sr();
    a.Gm = c.aw !== void 0;
    a.Hm = c.dc !== void 0;
    a.Km = c.wbraid !== void 0;
    a.Im = c.gbraid !== void 0;
    a.Jm = c.gclsrc === "aw.ds";
    a.cf = Rr().cf;
    var d = E.referrer ? Aj(Gj(E.referrer), "host") : "";
    a.ym = es.test(d);
    a.tm = fs.test(d);
    return a;
  }
  var is = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    js = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    ks = /^\d+\.fls\.doubleclick\.net$/,
    ls = /;gac=([^;?]+)/,
    ms = /;gacgb=([^;?]+)/;
  function ns(a, b) {
    if (ks.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && c.length === 2 && c[1].match(is)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = l(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].W);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function os(a, b, c) {
    for (
      var d = Yq(Xq()) ? Mq("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = l(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = Kr("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { sm: f ? e.join(";") : "", qm: ns(d, ms) };
  }
  function ps(a) {
    var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(js) ? b[1] : void 0;
  }
  function qs(a) {
    var b = Yh(9),
      c = {},
      d,
      e,
      f;
    ks.test(E.location.host) &&
      ((d = ps("gclgs")), (e = ps("gclst")), b && (f = ps("gcllp")));
    if (d && e && (!b || f)) (c.ng = d), (c.pg = e), (c.og = f);
    else {
      var g = nb(),
        k = fr((a || "_gcl") + "_gs"),
        m = k.map(function (q) {
          return q.W;
        }),
        n = k.map(function (q) {
          return g - q.timestamp;
        }),
        p = [];
      b &&
        (p = k.map(function (q) {
          return q.Sd;
        }));
      m.length > 0 &&
        n.length > 0 &&
        (!b || p.length > 0) &&
        ((c.ng = m.join(".")),
        (c.pg = n.join(".")),
        b && p.length > 0 && (c.og = p.join(".")));
    }
    return c;
  }
  function rs(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (ks.test(E.location.host)) {
      var e = ps(c);
      if (e) return [{ W: e }];
    } else {
      if (b === "gclid") {
        var f = (a || "_gcl") + "_aw";
        return d ? or(f) : ar(f);
      }
      if (b === "wbraid") return ar((a || "_gcl") + "_gb");
      if (b === "braids") return cr({ prefix: a });
    }
    return [];
  }
  function ss(a) {
    return rs(a, "gclid", "gclaw")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function ts(a) {
    var b = rs(a, "gclid", "gclaw", !0),
      c = b
        .map(function (f) {
          return f.W;
        })
        .join("."),
      d = b
        .map(function (f) {
          return f.Qa || 0;
        })
        .join("."),
      e = b
        .map(function (f) {
          for (
            var g = 0, k = l(f.bd || []), m = k.next();
            !m.done;
            m = k.next()
          ) {
            var n = m.value;
            n === 1 && (g |= 1);
            n === 2 && (g |= 2);
          }
          return g.toString();
        })
        .join(".");
    return { W: c, zk: d, Ak: e };
  }
  function us(a) {
    return rs(a, "braids", "gclgb")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function vs(a) {
    return ks.test(E.location.host) ? !(ps("gclaw") || ps("gac")) : Or(a);
  }
  function ws(a, b, c) {
    var d;
    d = c ? Lr(a, b) : Kr(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function xs() {
    var a = A.__uspapi;
    if (Za(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  var Bs = function (a) {
      if (a.eventName === N.g.da && a.metadata.hit_type === "page_view")
        if (R(22)) {
          a.metadata.redact_click_ids =
            V(a.m, N.g.la) != null &&
            V(a.m, N.g.la) !== !1 &&
            !W([N.g.N, N.g.O]);
          var b = ys(a),
            c = V(a.m, N.g.Aa) !== !1;
          c || (a.j[N.g.pj] = "1");
          var d = dr(b.prefix),
            e = a.metadata.is_server_side_destination;
          if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
            var f = V(a.m, N.g.fb),
              g = V(a.m, N.g.sa) || {};
            zs({ Ld: c, Td: g, Zd: f, yc: b });
            if (!e && !Pr(d)) {
              a.isAborted = !0;
              return;
            }
          }
          if (e) a.isAborted = !0;
          else {
            a.j[N.g.Jc] = N.g.ic;
            if (a.metadata.consent_updated)
              (a.j[N.g.Jc] = N.g.il), (a.j[N.g.fc] = "1");
            else if (a.metadata.user_id_updated) a.j[N.g.Jc] = N.g.ol;
            else {
              var k = sr();
              a.j[N.g.he] = k.gclid;
              a.j[N.g.qe] = k.dclid;
              a.j[N.g.kj] = k.gclsrc;
              a.j[N.g.he] ||
                a.j[N.g.qe] ||
                ((a.j[N.g.Ff] = k.wbraid), (a.j[N.g.Ig] = k.gbraid));
              a.j[N.g.Ga] = E.referrer ? Aj(Gj(E.referrer), "host") : "";
              a.j[N.g.wa] = Wr();
              if (R(25) && fc) {
                var m = Aj(Gj(fc), "host");
                m && (a.j[N.g.Hj] = m);
              }
              var n = Rr(),
                p = n.yk;
              a.j[N.g.cj] = n.cf;
              a.j[N.g.dj] = p;
              a.j[N.g.Qb] = ko(!0);
              var q = hs();
              gs(q) && (a.j[N.g.zd] = "1");
              a.j[N.g.mj] = ds();
              aq(!1)._up === "1" && (a.j[N.g.Bj] = "1");
            }
            ml = !0;
            a.j[N.g.eb] = void 0;
            a.j[N.g.zb] = void 0;
            var r = W([N.g.N, N.g.O]);
            r &&
              ((a.j[N.g.eb] = As()),
              c && (oq(b), (a.j[N.g.zb] = mq[pq(b.prefix)])));
            a.j[N.g.yb] = void 0;
            a.j[N.g.ab] = void 0;
            if (!a.j[N.g.he] && !a.j[N.g.qe] && vs(d)) {
              var u = br(b);
              u.length > 0 && (a.j[N.g.yb] = u.join("."));
            } else if (!a.j[N.g.Ff] && r) {
              var v = $q(d + "_aw");
              v.length > 0 && (a.j[N.g.ab] = v.join("."));
            }
            R(28) && (a.j[N.g.Cj] = Dc());
            a.m.isGtmEvent && (a.m.j[N.g.qa] = vn.j[N.g.qa]);
            Xo(a.m) ? (a.j[N.g.Vb] = !1) : (a.j[N.g.Vb] = !0);
            a.metadata.add_tag_timing = !0;
            var t = xs();
            t !== void 0 && (a.j[N.g.Hd] = t || "error");
            var w = Ro();
            w && (a.j[N.g.oc] = w);
            var x = Qo();
            x && (a.j[N.g.sc] = x);
            a.metadata.speculative = !1;
          }
        } else a.isAborted = !0;
    },
    ys = function (a) {
      var b = {
        prefix: V(a.m, N.g.jb) || V(a.m, N.g.Fa),
        domain: V(a.m, N.g.Na),
        Kb: V(a.m, N.g.Ta),
        flags: V(a.m, N.g.cb),
      };
      a.m.isGtmEvent && (b.path = V(a.m, N.g.lb));
      return b;
    },
    Cs = function (a, b) {
      var c, d, e, f, g, k, m, n;
      c = a.Ld;
      d = a.Td;
      e = a.Zd;
      f = a.ya;
      g = a.m;
      k = a.Wd;
      m = a.no;
      n = a.Uk;
      zs({ Ld: c, Td: d, Zd: e, yc: b });
      c &&
        m !== !0 &&
        (n != null ? (n = String(n)) : (n = void 0), Yr(b, f, g, k, n));
    },
    zs = function (a) {
      var b, c, d, e;
      b = a.Ld;
      c = a.Td;
      d = a.Zd;
      e = a.yc;
      b &&
        (kq(c[N.g.Nc], !!c[N.g.X]) && (xr(Ds, e), zr(e), wq(e)),
        (R(101) || R(133)) && ko() !== 2 ? vr(e) : tr(e),
        Dr(Ds, e),
        Er(e));
      c[N.g.X] &&
        (Br(Ds, c[N.g.X], c[N.g.Sb], !!c[N.g.Cb], e.prefix),
        Cr(c[N.g.X], c[N.g.Sb], !!c[N.g.Cb], e.prefix),
        xq(pq(e.prefix), c[N.g.X], c[N.g.Sb], !!c[N.g.Cb], e),
        xq("FPAU", c[N.g.X], c[N.g.Sb], !!c[N.g.Cb], e));
      d && (R(89) ? Gr(Es) : Gr(Fs));
      Ir(Fs);
    },
    Gs = function (a, b, c, d) {
      var e, f, g;
      e = a.Vk;
      f = a.callback;
      g = a.Ek;
      if (typeof f === "function")
        if (e === N.g.ab && g === void 0) {
          var k = d(b.prefix, c);
          k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k);
        } else e === N.g.zb ? (U(65), oq(b, !1), f(mq[pq(b.prefix)])) : f(g);
    },
    Ds = ["aw", "dc", "gb"],
    Fs = ["aw", "dc", "gb", "ag"],
    Es = ["aw", "dc", "gb", "ag", "gad_source"];
  function Hs(a) {
    var b = V(a.m, N.g.Rb),
      c = V(a.m, N.g.qc);
    b && !c
      ? (a.eventName !== N.g.da && a.eventName !== N.g.ed && U(131),
        (a.isAborted = !0))
      : !b && c && (U(132), (a.isAborted = !0));
  }
  function Is(a) {
    var b = W(N.g.N) ? Li.pscdl : "denied";
    b != null && (a.j[N.g.Jf] = b);
  }
  function Js(a) {
    var b = ko(!0);
    a.j[N.g.Qb] = b;
  }
  function Ks(a) {
    hp() && (a.j[N.g.Lc] = 1);
  }
  function As() {
    var a = E.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function Ls(a) {
    Ms(a, "ce", V(a.m, N.g.Ta));
  }
  function Ms(a, b, c) {
    a.j[N.g.Id] || (a.j[N.g.Id] = {});
    a.j[N.g.Id][b] = c;
  }
  var Ns = function (a) {
      var b = a && a[N.g.Tg];
      return b && !!b[N.g.lj];
    },
    Os = function (a) {
      if (a)
        switch (a._tag_mode) {
          case "CODE":
            return "c";
          case "AUTO":
            return "a";
          case "MANUAL":
            return "m";
          default:
            return "c";
        }
    };
  var Ps = function (a, b) {
      var c = a && !W([N.g.N, N.g.O]);
      return b && c ? "0" : b;
    },
    Rs = function (a) {
      var b = a.yc === void 0 ? {} : a.yc,
        c = dr(b.prefix);
      Pr(c) &&
        cm(
          function () {
            function d(x) {
              var y = W([N.g.N, N.g.O]),
                B = m && y,
                C = b.prefix || "_gcl",
                D;
              Li.reported_gclid || (Li.reported_gclid = {});
              D = Li.reported_gclid;
              var G =
                (B ? C : "") +
                "." +
                (W(N.g.N) ? 1 : 0) +
                "." +
                (W(N.g.O) ? 1 : 0);
              if (!D[G]) {
                D[G] = !0;
                var K = {},
                  F = function (Z, Q) {
                    if (Q || typeof Q === "number") K[Z] = Q.toString();
                  },
                  S = "https://www.google.com";
                Yo() && (F("gcs", Zo()), x && F("gcu", 1));
                F("gcd", cp(k));
                fj() && F("tag_exp", fj());
                if (fl()) {
                  F("rnd", ds());
                  if ((!p || (q && q !== "aw.ds")) && y) {
                    var M = $q(C + "_aw");
                    F("gclaw", M.join("."));
                  }
                  F("url", String(A.location).split(/[?#]/)[0]);
                  F("dclid", Ps(f, r));
                  y || (S = "https://pagead2.googlesyndication.com");
                }
                fp() && F("dma_cps", dp());
                F("dma", ep());
                F("npa", Xo(k) ? 0 : 1);
                hp() && F("_ng", 1);
                uo(Ko()) && F("tcfd", gp());
                F("gdpr_consent", Qo() || "");
                F("gdpr", Ro() || "");
                aq(!1)._up === "1" && F("gtm_up", 1);
                F("gclid", Ps(f, p));
                F("gclsrc", q);
                if (
                  !(
                    K.hasOwnProperty("gclid") ||
                    K.hasOwnProperty("dclid") ||
                    K.hasOwnProperty("gclaw")
                  ) &&
                  (F("gbraid", Ps(f, u)),
                  !K.hasOwnProperty("gbraid") && fl() && y)
                ) {
                  var T = $q(C + "_gb");
                  T.length > 0 && F("gclgb", T.join("."));
                }
                F(
                  "gtm",
                  kp({ ya: k.eventMetadata.source_canonical_id, lg: !g })
                );
                m &&
                  W(N.g.N) &&
                  (oq(b || {}), B && F("auid", mq[pq(b.prefix)] || ""));
                Qs || (a.vk && F("did", a.vk));
                a.Vh && F("gdid", a.Vh);
                a.Sh && F("edid", a.Sh);
                a.Xh !== void 0 && F("frm", a.Xh);
                R(21) && F("apve", "0");
                var ca = Object.keys(K).map(function (Z) {
                    return Z + "=" + encodeURIComponent(K[Z]);
                  }),
                  da = S + "/pagead/landing?" + ca.join("&");
                wc(da);
              }
            }
            var e = !!a.Nh,
              f = !!a.Wd,
              g = a.targetId,
              k = a.m,
              m = a.sg === void 0 ? !0 : a.sg,
              n = sr(),
              p = n.gclid || "",
              q = n.gclsrc,
              r = n.dclid || "",
              u = n.wbraid || "",
              v = !e && ((!p || (q && q !== "aw.ds") ? !1 : !0) || u),
              t = fl();
            if (v || t)
              if (t) {
                var w = [N.g.N, N.g.O, N.g.za];
                d();
                (function () {
                  W(w) ||
                    bm(function (x) {
                      d(!0, x.consentEventId, x.consentPriorityId);
                    }, w);
                })();
              } else d();
          },
          [N.g.N, N.g.O, N.g.za]
        );
    },
    Qs = !1;
  function Ss(a, b, c, d) {
    var e = mc(),
      f;
    if (e === 1)
      a: {
        var g = Xi;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = E.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" !== A.location.protocol ? a : b) + c;
  }
  function Ts(a) {
    return typeof a !== "object" || a === null ? {} : a;
  }
  function Us(a) {
    return a === void 0 || a === null
      ? ""
      : typeof a === "object"
      ? a.toString()
      : String(a);
  }
  function Vs(a) {
    if (a !== void 0 && a !== null) return Us(a);
  }
  function Ws(a) {
    return typeof a === "number" ? a : Vs(a);
  }
  var at = function (a, b) {
      if (a)
        if (ip()) {
        } else if ((a = z(a) ? tm(tk(a)) : tm(tk(a.id)))) {
          var c = void 0,
            d = !1,
            e = V(b, N.g.Fj);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = tm(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id ||
                  (a.id === a.destinationId &&
                    a.destinationId === g.destinationId)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var k = V(b, N.g.nh),
              m;
            if (k) {
              m = Array.isArray(k) ? k : [k];
              var n = V(b, N.g.lh),
                p = V(b, N.g.mh),
                q = V(b, N.g.oh),
                r = Vs(V(b, N.g.Ej)),
                u = n || p,
                v = 1;
              a.prefix !== "UA" || c || (v = 5);
              for (var t = 0; t < m.length; t++)
                if (t < v)
                  if (c) Xs(c, m[t], r, b, { Zb: u, options: q });
                  else if (a.prefix === "AW" && a.ids[wm[2]])
                    R(145)
                      ? Xs([a], m[t], r || "US", b, { Zb: u, options: q })
                      : Ys(a.ids[wm[1]], a.ids[wm[2]], m[t], b, {
                          Zb: u,
                          options: q,
                        });
                  else if (a.prefix === "UA")
                    if (R(145)) Xs([a], m[t], r || "US", b, { Zb: u });
                    else {
                      var w = a.destinationId,
                        x = m[t],
                        y = { Zb: u };
                      U(23);
                      if (x) {
                        y = y || {};
                        var B = Zs($s, y, w),
                          C = {};
                        y.Zb !== void 0 ? (C.receiver = y.Zb) : (C.replace = x);
                        C.ga_wpid = w;
                        C.destination = x;
                        B(2, mb(), C);
                      }
                    }
            }
          }
        }
    },
    Xs = function (a, b, c, d, e) {
      U(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: mb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var k = a[g];
          bt[k.id] ||
            (k && k.prefix === "AW" && !f.adData && k.ids.length >= 2
              ? ((f.adData = { ak: k.ids[wm[1]], cl: k.ids[wm[2]] }),
                ct(f.adData, d),
                (bt[k.id] = !0))
              : k &&
                k.prefix === "UA" &&
                !f.gaData &&
                ((f.gaData = { gaWpid: k.destinationId }), (bt[k.id] = !0)));
        }
        (f.gaData || f.adData) && Zs(dt, e)(e.Zb, f, e.options);
      }
    },
    Ys = function (a, b, c, d, e) {
      U(22);
      if (c) {
        e = e || {};
        var f = Zs(et, e, a),
          g = { ak: a, cl: b };
        e.Zb === void 0 && (g.autoreplace = c);
        ct(g, d);
        f(2, e.Zb, g, c, 0, mb(), e.options);
      }
    },
    ct = function (a, b) {
      R(5) &&
        ((a.dma = ep()),
        fp() && (a.dmaCps = dp()),
        Xo(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    Zs = function (a, b, c) {
      if (A[a.functionName]) return b.ki && H(b.ki), A[a.functionName];
      var d = ft();
      A[a.functionName] = d;
      if (a.additionalQueues)
        for (var e = 0; e < a.additionalQueues.length; e++)
          A[a.additionalQueues[e]] = A[a.additionalQueues[e]] || ft();
      a.idKey && A[a.idKey] === void 0 && (A[a.idKey] = c);
      lc(Ss("https://", "http://", a.scriptUrl), b.ki, b.fn);
      return d;
    },
    ft = function () {
      function a() {
        a.q = a.q || [];
        a.q.push(arguments);
      }
      return a;
    },
    et = {
      functionName: "_googWcmImpl",
      idKey: "_googWcmAk",
      scriptUrl: "www.gstatic.com/wcm/loader.js",
    },
    $s = {
      functionName: "_gaPhoneImpl",
      idKey: "ga_wpid",
      scriptUrl: "www.gstatic.com/gaphone/loader.js",
    },
    gt = { Zk: "9", Ol: "5" },
    dt = {
      functionName: "_googCallTrackingImpl",
      additionalQueues: [$s.functionName, et.functionName],
      scriptUrl:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (gt.Zk || gt.Ol) +
        ".js",
    },
    bt = {};
  function ht(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.j[b];
      },
      setHitData: function (b, c) {
        a.j[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.j[b] === void 0 && (a.j[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return V(a.m, b);
      },
      Wb: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.j);
      },
    };
  }
  var jt = function (a) {
      var b =
        it[R(128) && !fk ? tk(a.target.destinationId) : a.target.destinationId];
      if (!a.isAborted && b)
        for (var c = ht(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    kt = function (a, b) {
      var c = it[a];
      c || (c = it[a] = []);
      c.push(b);
    },
    it = {};
  var mt = function (a) {
      if (W(lt)) {
        a = a || {};
        oq(a, !1);
        var b = nq[pq(dr(a.prefix))];
        if (b && !(nb() - b.fi * 1e3 > 18e5)) {
          var c = b.id,
            d = c.split(".");
          if (d.length === 2 && !(nb() - (Number(d[1]) || 0) * 1e3 > 864e5))
            return c;
        }
      }
    },
    lt = N.g.N;
  var nt = function () {
    var a = (cc && cc.userAgent) || "";
    if (
      a.indexOf("Safari") < 0 ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if (b === "") return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (c[e] === void 0) return !0;
      if (d[e] !== c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  function ot(a) {
    var b,
      c = A,
      d = [];
    try {
      c.navigation && c.navigation.entries && (d = c.navigation.entries());
    } catch (k) {}
    b = d;
    for (var e = b.length - 1; e >= 0; e--) {
      var f = b[e],
        g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
      if (g && g.length === 2) return g[1];
    }
  }
  var pt,
    qt = !1;
  function rt() {
    qt = !0;
    pt = pt || {};
  }
  function st(a) {
    qt || rt();
    return pt[a];
  }
  function tt() {
    var a = A.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function ut(a) {
    if (E.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !A.getComputedStyle)
      return !0;
    var c = A.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = A.getComputedStyle(d, null));
    }
    return !1;
  }
  var wt = function (a) {
      var b = vt(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    },
    vt = function () {
      var a = E.body,
        b = E.documentElement || (a && a.parentElement),
        c,
        d;
      if (E.compatMode && E.compatMode !== "BackCompat")
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    };
  var At = function (a) {
      if (xt) {
        if (a >= 0 && a < zt.length && zt[a]) {
          var b;
          (b = zt[a]) == null || b.disconnect();
          zt[a] = void 0;
        }
      } else A.clearInterval(a);
    },
    Dt = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        c[d] > 1 ? (c[d] = 1) : c[d] < 0 && (c[d] = 0);
      if (xt) {
        var e = !1;
        H(function () {
          e || Bt(a, b, c)();
        });
        return Ct(
          function (f) {
            e = !0;
            for (var g = { jf: 0 }; g.jf < f.length; g = { jf: g.jf }, g.jf++)
              H(
                (function (k) {
                  return function () {
                    a(f[k.jf]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return A.setInterval(Bt(a, b, c), 1e3);
    },
    Bt = function (a, b, c) {
      function d(k, m) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: k.getBoundingClientRect(),
            intersectionRatio: m,
            intersectionRect: n,
            isIntersecting: m > 0,
            rootBounds: n,
            target: k,
            time: nb(),
          };
        H(function () {
          a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (k, m) {
        return k - m;
      });
      return function () {
        for (var k = 0; k < b.length; k++) {
          var m = wt(b[k]);
          if (m > e[k])
            for (; f[k] < c.length - 1 && m >= c[f[k] + 1]; )
              d(b[k], m), f[k]++;
          else if (m < e[k])
            for (; f[k] >= 0 && m <= c[f[k]]; ) d(b[k], m), f[k]--;
          e[k] = m;
        }
      };
    },
    Ct = function (a, b, c) {
      for (
        var d = new A.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < zt.length; f++) if (!zt[f]) return (zt[f] = d), f;
      return zt.push(d) - 1;
    },
    zt = [],
    xt = !(!A.IntersectionObserver || !A.IntersectionObserverEntry);
  var Ft = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.Z.length + ":" + Et.test(a.Z)
      );
    },
    Tt = function (a) {
      a = a || { Qd: !0, Rd: !0, yg: void 0 };
      a.Gb = a.Gb || { email: !0, phone: !1, address: !1 };
      var b = Gt(a),
        c = Ht[b];
      if (c && nb() - c.timestamp < 200) return c.result;
      var d = It(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!R(30)) {
        if (a.Gb && a.Gb.email) {
          var n = Jt(d.elements);
          f = Kt(n, a && a.Xe);
          g = Lt(f);
          n.length > 10 && (e = "3");
        }
        !a.yg && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(Mt(f[p], !!a.Qd, !!a.Rd));
        m = m.slice(0, 10);
      } else if (a.Gb) {
      }
      g && (k = Mt(g, !!a.Qd, !!a.Rd));
      var D = { elements: m, oi: k, status: e };
      Ht[b] = { timestamp: nb(), result: D };
      return D;
    },
    Ut = function (a, b) {
      if (a) {
        var c = a
          .trim()
          .replaceAll(/\s+/g, "")
          .replaceAll(/(\d{2,})\./g, "$1")
          .replaceAll(/-/g, "")
          .replaceAll(/\((\d+)\)/g, "$1");
        if (b && c.match(/^\+?\d{3,7}$/)) return c;
        c.charAt(0) !== "+" && (c = "+" + c);
        if (c.match(/^\+\d{10,15}$/)) return c;
      }
    },
    Wt = function (a) {
      var b = Vt(/^(\w|[- ])+$/)(a);
      if (!b) return b;
      var c = b.replaceAll(/[- ]+/g, "");
      return c.length > 10 ? void 0 : c;
    },
    Vt = function (a) {
      return function (b) {
        var c = b.match(a);
        return c ? c[0].trim().toLowerCase() : void 0;
      };
    },
    St = function (a, b, c) {
      var d = a.element,
        e = { Z: a.Z, type: a.ka, tagName: d.tagName };
      b && (e.querySelector = Xt(d));
      c && (e.isVisible = !ut(d));
      return e;
    },
    Mt = function (a, b, c) {
      return St({ element: a.element, Z: a.Z, ka: Rt.Nb }, b, c);
    },
    Gt = function (a) {
      var b = !(a == null || !a.Qd) + "." + !(a == null || !a.Rd);
      a && a.Xe && a.Xe.length && (b += "." + a.Xe.join("."));
      a &&
        a.Gb &&
        (b += "." + a.Gb.email + "." + a.Gb.phone + "." + a.Gb.address);
      return b;
    },
    Lt = function (a) {
      if (a.length !== 0) {
        var b;
        b = Yt(a, function (c) {
          return !Zt.test(c.Z);
        });
        b = Yt(b, function (c) {
          return c.element.tagName.toUpperCase() === "INPUT";
        });
        b = Yt(b, function (c) {
          return !ut(c.element);
        });
        return b[0];
      }
    },
    Kt = function (a, b) {
      if (!b || b.length === 0) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && Oh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    Yt = function (a, b) {
      if (a.length <= 1) return a;
      var c = a.filter(b);
      return c.length === 0 ? a : c;
    },
    Xt = function (a) {
      var b;
      if (a === E.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = Xt(a.parentElement) + ">:nth-child(" + e.toString() + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    Jt = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
        if (e) {
          var f = e.match($t);
          if (f) {
            var g = f[0],
              k;
            if (A.location) {
              var m = Cj(A.location, "host", !0);
              k = g.toLowerCase().indexOf(m) >= 0;
            } else k = !1;
            k || b.push({ element: d, Z: g });
          }
        }
      }
      return b;
    },
    It = function () {
      var a = [],
        b = E.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && d < 1e4;
        d++
      ) {
        var e = c[d];
        if (
          !(au.indexOf(e.tagName.toUpperCase()) >= 0) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && g < 1e4; g++)
            if (!(bu.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
              f = !0;
              break;
            }
          (!f || (R(30) && cu.indexOf(e.tagName) !== -1)) && a.push(e);
        }
      }
      return { elements: a, status: c.length > 1e4 ? "2" : "1" };
    },
    du = !1;
  var $t = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    Et = /@(gmail|googlemail)\./i,
    Zt = /support|noreply/i,
    au = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    bu = ["BR"],
    Rt = {
      Nb: "1",
      Rc: "2",
      Pc: "3",
      Qc: "4",
      de: "5",
      Me: "6",
      kg: "7",
      Gh: "8",
      Ag: "9",
      Ah: "10",
    },
    Ht = {},
    cu = ["INPUT", "SELECT"],
    eu = Vt(/^([^\x00-\x40\x5b-\x60\x7b-\xff]|[.-]|\s)+$/);
  var Jf;
  var Ku = Number("") || 5,
    Lu = Number("") || 50,
    Mu = db();
  var Ou = function (a, b) {
      a &&
        (Nu("sid", a.targetId, b),
        Nu("cc", a.clientCount, b),
        Nu("tl", a.totalLifeMs, b),
        Nu("hc", a.heartbeatCount, b),
        Nu("cl", a.clientLifeMs, b));
    },
    Nu = function (a, b, c) {
      b != null && c.push(a + "=" + b);
    },
    Pu = function () {
      var a = E.referrer;
      if (a) {
        var b;
        return Aj(Gj(a), "host") ===
          ((b = A.location) == null ? void 0 : b.host)
          ? 1
          : 2;
      }
      return 0;
    },
    Qu = function (a) {
      this.P = a;
      this.H = 0;
    };
  Qu.prototype.C = function (a, b, c, d) {
    var e = Pu(),
      f,
      g = [];
    f =
      A === A.top && e !== 0 && b
        ? (b == null ? void 0 : b.clientCount) > 1
          ? e === 2
            ? 1
            : 2
          : e === 2
          ? 0
          : 3
        : 4;
    a && Nu("si", a.lf, g);
    Nu("m", 0, g);
    Nu("iss", f, g);
    Nu("if", c, g);
    Ou(b, g);
    d && Nu("fm", encodeURIComponent(d.substring(0, Lu)), g);
    this.K(g);
  };
  Qu.prototype.j = function (a, b, c, d, e) {
    var f = [];
    Nu("m", 1, f);
    Nu("s", a, f);
    Nu("po", Pu(), f);
    b && (Nu("st", b.state, f), Nu("si", b.lf, f), Nu("sm", b.Af, f));
    Ou(c, f);
    Nu("c", d, f);
    e && Nu("fm", encodeURIComponent(e.substring(0, Lu)), f);
    this.K(f);
  };
  Qu.prototype.K = function (a) {
    a = a === void 0 ? [] : a;
    !Uj ||
      this.H >= Ku ||
      (Nu("pid", Mu, a),
      Nu("bc", ++this.H, a),
      a.unshift("ctid=" + Nf.ctid + "&t=s"),
      this.P("https://www.googletagmanager.com/a?" + a.join("&")));
  };
  var Ru = {
    Rl: Number("") || 500,
    El: Number("") || 5e3,
    Xj: Number("20") || 10,
    fl: Number("") || 5e3,
  };
  function Su(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var Tu = function (a, b) {
    var c;
    var d = function (e, f, g) {
      g = g === void 0 ? {} : g;
      this.Sl = e;
      this.j = f;
      this.H = g;
      this.aa = this.Va = this.heartbeatCount = this.Ql = 0;
      this.Yj = !1;
      this.C = {};
      this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
      this.state = 0;
      this.lf = Su(this.j);
      this.Af = Su(this.j);
      this.P = 10;
    };
    d.prototype.init = function () {
      this.K(1);
      this.Eb();
    };
    d.prototype.getState = function () {
      return {
        state: this.state,
        lf: Math.round(Su(this.j) - this.lf),
        Af: Math.round(Su(this.j) - this.Af),
      };
    };
    d.prototype.K = function (e) {
      this.state !== e && ((this.state = e), (this.Af = Su(this.j)));
    };
    d.prototype.dk = function () {
      return String(this.Ql++);
    };
    d.prototype.Eb = function () {
      var e = this;
      this.heartbeatCount++;
      this.Je(
        {
          type: 0,
          clientId: this.id,
          requestId: this.dk(),
          maxDelay: this.Zj(),
        },
        function (f) {
          if (f.type === 0) {
            var g;
            if (((g = f.failure) == null ? void 0 : g.failureType) != null)
              if (
                (f.stats && (e.stats = f.stats),
                e.aa++,
                f.isDead || e.aa > Ru.Xj)
              ) {
                var k = f.isDead && f.failure.failureType;
                e.P = k || 10;
                e.K(4);
                e.Pl();
                var m, n;
                (n = (m = e.H).bn) == null ||
                  n.call(m, { failureType: k, data: f.failure.data });
              } else e.K(3), e.fk();
            else {
              if (e.heartbeatCount > f.stats.heartbeatCount + Ru.Xj) {
                e.heartbeatCount = f.stats.heartbeatCount;
                var p, q;
                (q = (p = e.H).onFailure) == null ||
                  q.call(p, { failureType: 13 });
              }
              e.stats = f.stats;
              var r = e.state;
              e.K(2);
              if (r !== 2)
                if (e.Yj) {
                  var u, v;
                  (v = (u = e.H).ro) == null || v.call(u);
                } else {
                  e.Yj = !0;
                  var t, w;
                  (w = (t = e.H).dn) == null || w.call(t);
                }
              e.aa = 0;
              e.Tl();
              e.fk();
            }
          }
        }
      );
    };
    d.prototype.Zj = function () {
      return this.state === 2 ? Ru.El : Ru.Rl;
    };
    d.prototype.fk = function () {
      var e = this;
      this.j.setTimeout(function () {
        e.Eb();
      }, Math.max(0, this.Zj() - (Su(this.j) - this.Va)));
    };
    d.prototype.Wl = function (e, f, g) {
      var k = this;
      this.Je(
        { type: 1, clientId: this.id, requestId: this.dk(), command: e },
        function (m) {
          if (m.type === 1)
            if (m.result) f(m.result);
            else {
              var n,
                p,
                q,
                r = {
                  failureType:
                    (q = (n = m.failure) == null ? void 0 : n.failureType) !=
                    null
                      ? q
                      : 12,
                  data: (p = m.failure) == null ? void 0 : p.data,
                },
                u,
                v;
              (v = (u = k.H).onFailure) == null || v.call(u, r);
              g(r);
            }
        }
      );
    };
    d.prototype.Je = function (e, f) {
      var g = this;
      if (this.state === 4) (e.failure = { failureType: this.P }), f(e);
      else {
        var k = this.state !== 2 && e.type !== 0,
          m = e.requestId,
          n,
          p = this.j.setTimeout(
            function () {
              var r = g.C[m];
              r && g.Wj(r, 7);
            },
            (n = e.maxDelay) != null ? n : Ru.fl
          ),
          q = { request: e, Ok: f, Kk: k, Xm: p };
        this.C[m] = q;
        k || this.sendRequest(q);
      }
    };
    d.prototype.sendRequest = function (e) {
      this.Va = Su(this.j);
      e.Kk = !1;
      this.Sl(e.request);
    };
    d.prototype.Tl = function () {
      for (
        var e = l(Object.keys(this.C)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = this.C[f.value];
        g.Kk && this.sendRequest(g);
      }
    };
    d.prototype.Pl = function () {
      for (var e = l(Object.keys(this.C)), f = e.next(); !f.done; f = e.next())
        this.Wj(this.C[f.value], this.P);
    };
    d.prototype.Wj = function (e, f) {
      this.jg(e);
      var g = e.request;
      g.failure = { failureType: f };
      e.Ok(g);
    };
    d.prototype.jg = function (e) {
      delete this.C[e.request.requestId];
      this.j.clearTimeout(e.Xm);
    };
    d.prototype.Em = function (e) {
      this.Va = Su(this.j);
      var f = this.C[e.requestId];
      if (f) this.jg(f), f.Ok(e);
      else {
        var g, k;
        (k = (g = this.H).onFailure) == null || k.call(g, { failureType: 14 });
      }
    };
    c = new d(a, A, b);
    return c;
  };
  var Uu;
  var Vu = function () {
      Uu ||
        (Uu = new Qu(function (a) {
          return void pc(a);
        }));
      return Uu;
    },
    Wu = function (a) {
      var b = "&1p=1";
      if (!R(120)) return b;
      var c = a.substring(0, a.indexOf("/_/service_worker"));
      return (b += c ? "&path=" + encodeURIComponent(c) : "");
    },
    Yu = function (a) {
      a = Xu(a);
      var b;
      try {
        b = new URL(a);
      } catch (c) {
        return null;
      }
      return b.protocol !== "https:" ? null : b;
    },
    Zu = function (a) {
      var b = mm(hm.jk);
      return b && b[a];
    },
    Xu = function (a) {
      var b = ej.P;
      if (!a)
        return (
          "https://www.googletagmanager.com/static/service_worker/" + b + "/"
        );
      if (!R(120)) return a;
      a.charAt(a.length - 1) !== "/" && (a += "/");
      return a + b;
    },
    $u = function (a, b, c, d, e) {
      var f = this;
      this.C = d;
      this.P = this.K = !1;
      this.aa = null;
      this.initTime = c;
      this.j = 15;
      this.H = this.fm(a);
      A.setTimeout(function () {
        f.initialize();
      }, 1e3);
      H(function () {
        f.Nm(a, b, e);
      });
    };
  h = $u.prototype;
  h.delegate = function (a, b, c) {
    this.getState() !== 2
      ? (this.C.j(
          this.j,
          {
            state: this.getState(),
            lf: this.initTime,
            Af: Math.round(nb()) - this.initTime,
          },
          void 0,
          a.commandType
        ),
        c({ failureType: this.j }))
      : this.H.Wl(a, b, c);
  };
  h.getState = function () {
    return this.H.getState().state;
  };
  h.Nm = function (a, b, c) {
    var d = A.location.origin,
      e = this,
      f = nc();
    try {
      var g = f.contentDocument.createElement("iframe"),
        k = a.pathname,
        m = k[k.length - 1] === "/" ? a.toString() : a.toString() + "/",
        n = b ? Wu(k) : "",
        p;
      R(122) && (p = { sandbox: "allow-same-origin allow-scripts" });
      nc(
        m +
          "sw_iframe.html?origin=" +
          encodeURIComponent(d) +
          n +
          (c ? "&e=1" : ""),
        void 0,
        p,
        void 0,
        g
      );
      var q = function () {
        f.contentDocument.body.appendChild(g);
        g.addEventListener("load", function () {
          e.aa = g.contentWindow;
          f.contentWindow.addEventListener("message", function (r) {
            r.origin === a.origin && e.H.Em(r.data);
          });
          e.initialize();
        });
      };
      f.contentDocument.readyState === "complete"
        ? q()
        : f.contentWindow.addEventListener("load", function () {
            q();
          });
    } catch (r) {
      f.parentElement.removeChild(f),
        (this.j = 11),
        this.C.C(void 0, void 0, this.j, r.toString());
    }
  };
  h.fm = function (a) {
    var b = this,
      c = Tu(
        function (d) {
          var e;
          (e = b.aa) == null || e.postMessage(d, a.origin);
        },
        {
          dn: function () {
            b.K = !0;
            b.C.C(c.getState(), c.stats);
          },
          bn: function (d) {
            b.K
              ? ((b.j = (d == null ? void 0 : d.failureType) || 10),
                b.C.j(
                  b.j,
                  c.getState(),
                  c.stats,
                  void 0,
                  d == null ? void 0 : d.data
                ))
              : ((b.j = (d == null ? void 0 : d.failureType) || 4),
                b.C.C(c.getState(), c.stats, b.j, d == null ? void 0 : d.data));
          },
          onFailure: function (d) {
            b.j = d.failureType;
            b.C.j(b.j, c.getState(), c.stats, d.command, d.data);
          },
        }
      );
    return c;
  };
  h.initialize = function () {
    this.P || this.H.init();
    this.P = !0;
  };
  function av() {
    var a = Mf(Jf.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function bv(a, b, c) {
    c = c === void 0 ? !1 : c;
    var d = A.location.origin;
    if (!d || !av()) return;
    hj() && ((a = "" + d + gj() + "/_"), R(120) && (a += "/service_worker"));
    var e = Yu(a);
    if (e === null || Zu(e.origin)) return;
    if (!dc()) {
      Vu().C(void 0, void 0, 6);
      return;
    }
    var f = new $u(e, !!a, b || Math.round(nb()), Vu(), c),
      g;
    a: {
      var k = hm.jk,
        m = {},
        n = km(k);
      if (!n) {
        n = km(k, !0);
        if (!n) {
          g = void 0;
          break a;
        }
        n.set(m);
      }
      g = n.get();
    }
    g[e.origin] = f;
  }
  var cv = function (a, b, c, d) {
    var e;
    if ((e = Zu(a)) == null || !e.delegate) {
      var f = dc() ? 16 : 6;
      Vu().j(f, void 0, void 0, b.commandType);
      d({ failureType: f });
      return;
    }
    Zu(a).delegate(b, c, d);
  };
  function dv(a, b, c, d, e) {
    var f = Yu();
    if (f === null) {
      d(dc() ? 16 : 6);
      return;
    }
    var g,
      k = (g = Zu(f.origin)) == null ? void 0 : g.initTime,
      m = Math.round(nb()),
      n = {
        commandType: 0,
        params: {
          url: a,
          method: 0,
          templates: b,
          body: "",
          processResponse: !1,
          sinceInit: k ? m - k : void 0,
        },
      };
    e && (n.params.encryptionKeyString = e);
    cv(
      f.origin,
      n,
      function (p) {
        c(p);
      },
      function (p) {
        d(p.failureType);
      }
    );
  }
  function ev(a, b, c, d) {
    var e = Yu(a);
    if (e === null) {
      d("_is_sw=f" + (dc() ? 16 : 6) + "te");
      return;
    }
    var f = b ? 1 : 0,
      g = Math.round(nb()),
      k,
      m = (k = Zu(e.origin)) == null ? void 0 : k.initTime,
      n = m ? g - m : void 0;
    cv(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: f,
          templates: c,
          body: b || "",
          processResponse: !0,
          sinceInit: n,
          attributionReporting: !0,
        },
      },
      function () {},
      function (p) {
        var q = "_is_sw=f" + p.failureType,
          r,
          u = (r = Zu(e.origin)) == null ? void 0 : r.getState();
        u !== void 0 && (q += "s" + u);
        d(n ? q + ("t" + n) : q + "te");
      }
    );
  }
  var fv = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Xn();
  go() || Un("iPod");
  Un("iPad");
  !Un("Android") || Yn() || Xn() || Wn() || Un("Silk");
  Yn();
  !Un("Safari") ||
    Yn() ||
    (Vn() ? 0 : Un("Coast")) ||
    Wn() ||
    (Vn() ? 0 : Un("Edge")) ||
    (Vn() ? Tn("Microsoft Edge") : Un("Edg/")) ||
    (Vn() ? Tn("Opera") : Un("OPR")) ||
    Xn() ||
    Un("Silk") ||
    Un("Android") ||
    ho();
  var gv = {},
    hv = null,
    iv = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!hv) {
        hv = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          gv[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            hv[q] === void 0 && (hv[q] = p);
          }
        }
      }
      for (
        var r = gv[f],
          u = Array(Math.floor(b.length / 3)),
          v = r[64] || "",
          t = 0,
          w = 0;
        t < b.length - 2;
        t += 3
      ) {
        var x = b[t],
          y = b[t + 1],
          B = b[t + 2],
          C = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          G = r[((y & 15) << 2) | (B >> 6)],
          K = r[B & 63];
        u[w++] = "" + C + D + G + K;
      }
      var F = 0,
        S = v;
      switch (b.length - t) {
        case 2:
          (F = b[t + 1]), (S = r[(F & 15) << 2] || v);
        case 1:
          var M = b[t];
          u[w] = "" + r[M >> 2] + r[((M & 3) << 4) | (F >> 4)] + S + v;
      }
      return u.join("");
    };
  var jv =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function kv(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function lv() {
    var a = A.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function mv() {
    var a, b;
    return (b = (a = A.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function nv(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function ov() {
    var a = A;
    if (!nv(a)) return null;
    var b = kv(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(jv)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var qv = function (a, b) {
      if (a) {
        var c = pv(a);
        Object.assign(b.j, c);
      }
    },
    pv = function (a) {
      var b = {};
      b[N.g.Zf] = a.architecture;
      b[N.g.cg] = a.bitness;
      a.fullVersionList &&
        (b[N.g.dg] = a.fullVersionList
          .map(function (c) {
            return (
              encodeURIComponent(c.brand || "") +
              ";" +
              encodeURIComponent(c.version || "")
            );
          })
          .join("|"));
      b[N.g.eg] = a.mobile ? "1" : "0";
      b[N.g.fg] = a.model;
      b[N.g.gg] = a.platform;
      b[N.g.hg] = a.platformVersion;
      b[N.g.ig] = a.wow64 ? "1" : "0";
      return b;
    },
    sv = function (a) {
      var b = rv.Hn,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = lv();
      if (d) c(d);
      else {
        var e = mv();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = A.setTimeout(function () {
            c.nf || ((c.nf = !0), U(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.nf || ((c.nf = !0), U(104), A.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.nf || ((c.nf = !0), U(105), A.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    uv = function () {
      if (nv(A) && ((tv = nb()), !mv())) {
        var a = ov();
        a &&
          (a.then(function () {
            U(95);
          }),
          a.catch(function () {
            U(96);
          }));
      }
    },
    tv;
  function vv(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function wv() {
    return vv("join-ad-interest-group") && Za(cc.joinAdInterestGroup);
  }
  function xv(a, b) {
    var c = Xh[3] === void 0 ? 1 : Xh[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = E.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(E.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = E.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (Xh[2] === void 0 ? 50 : Xh[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && nb() - p < (Xh[1] === void 0 ? 6e4 : Xh[1])
        ? (Va("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) yv(e[0]);
        else {
          if (m) {
            Va("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? yv(e[0]) : m && yv(k[0]);
      nc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: nb() }
      );
    }
  }
  function yv(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function zv() {
    return "https://td.doubleclick.net";
  }
  function Av(a) {
    var b = a.location.href;
    if (a === a.top) return { url: b, Sm: !0 };
    var c = !1,
      d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    var e = a.location.ancestorOrigins;
    if (e) {
      var f = e[e.length - 1];
      f && b.indexOf(f) === -1 && ((c = !1), (b = f));
    }
    return { url: b, Sm: c };
  }
  var Bv = function () {
      return [N.g.N, N.g.O];
    },
    Dv = function (a) {
      R(22) &&
      a.eventName === N.g.da &&
      Cv(a, "page_view") &&
      !a.metadata.consent_updated &&
      !a.m.isGtmEvent
        ? at(a.target, a.m)
        : Cv(a, "call_conversion") && (at(a.target, a.m), (a.isAborted = !0));
    },
    Fv = function (a) {
      var b;
      if (a.eventName !== "gtag.config" && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            Ev(a);
            break;
          case "user_data_lead":
            b = 98;
            Ev(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && U(b);
      a.metadata.speculative === !0 && (a.isAborted = !0);
    },
    Gv = function (a) {
      if (!a.metadata.consent_updated && R(27) && Cv(a, ["conversion"])) {
        var b = hs();
        gs(b) && ((a.j[N.g.zd] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    Hv = function (a) {
      Cv(a, ["conversion"]) &&
        a.m.eventMetadata.is_external_event &&
        (a.j[N.g.Tj] = !0);
    },
    Iv = function (a) {
      var b = W(Bv());
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !b || !!a.metadata.consent_updated;
          break;
        case "remarketing":
          a.isAborted = !b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.j[N.g.fc] = !0);
      }
    },
    Jv = function (a) {
      if (Cv(a, ["conversion"])) {
        var b = mt(a.metadata.cookie_options);
        if (b && !a.j[N.g.Da]) {
          var c = Fp(a.j[N.g.kb]);
          a.j[N.g.Da] = c;
        }
        b && ((a.j[N.g.pb] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    Kv = function (a) {
      if (Cv(a, ["conversion", "user_data_web"])) {
        var b;
        if (
          !(
            R(63) ||
            R(64) ||
            R(65) ||
            R(66) ||
            R(67) ||
            R(68) ||
            R(69) ||
            R(70) ||
            R(71)
          ) ||
          (Cv(a, ["user_data_web"]) &&
            !a.metadata.speculative_ecw_stitching_ping)
        )
          b = !1;
        else {
          var c = a.metadata.user_data;
          b = !c || Object.keys(c).length > 0 ? !1 : !0;
        }
        if (b) {
          a.metadata.fake_user_data = {
            email: "test@example.com",
            phone_number: "+1234567890",
            first_name: "Fake",
            last_name: "Name",
            home_address: {
              street: "123 Fake St",
              city: "Non-Applicable",
              state: "Somewhere",
              country: "US",
              postal_code: "12345",
            },
          };
          var d = Cv(a, ["user_data_web"]);
          R(63)
            ? (a.metadata.split_experiment_arm = 1)
            : R(64)
            ? (a.metadata.split_experiment_arm = 2)
            : R(65)
            ? ((a.metadata.split_experiment_arm = 3), d && Ev(a))
            : R(66)
            ? ((a.metadata.split_experiment_arm = 4), d && Ev(a))
            : R(67)
            ? ((a.metadata.split_experiment_arm = 5), d && Ev(a))
            : R(68)
            ? ((a.metadata.split_experiment_arm = 6), d && Ev(a))
            : R(69)
            ? ((a.metadata.split_experiment_arm = 7), d && Ev(a))
            : R(70)
            ? (a.metadata.split_experiment_arm = 8)
            : R(71) && (a.metadata.split_experiment_arm = 9);
        } else a.metadata.speculative_ecw_stitching_ping && (a.isAborted = !0);
      }
    },
    Lv = function (a) {
      R(63) ||
        R(64) ||
        R(65) ||
        R(66) ||
        R(67) ||
        R(70) ||
        R(71) ||
        hj() ||
        Ti ||
        Mj(a.m) ||
        ((R(119) || R(61) || R(62)) && bv(void 0, Math.round(nb()), R(118)));
    },
    Mv = function (a) {
      if (
        Cv(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        W(N.g.N)
      ) {
        var b = !R(3);
        if (a.metadata.hit_type !== "remarketing" || b) {
          var c = a.metadata.cookie_options;
          oq(c, a.metadata.hit_type === "conversion" && a.eventName !== N.g.Za);
          W(N.g.O) && (a.j[N.g.zb] = mq[pq(c.prefix)]);
        }
      }
    },
    Ov = function (a) {
      Cv(a, ["conversion", "user_data_lead", "user_data_web"]) && Nv(a);
    },
    Pv = function (a) {
      Cv(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !W(Bv()));
    },
    Qv = function (a) {
      Cv(a, ["conversion"]) && aq(!1)._up === "1" && (a.j[N.g.Ce] = !0);
    },
    Rv = function (a) {
      if (Cv(a, ["conversion", "remarketing"])) {
        var b = xs();
        b !== void 0 && (a.j[N.g.Hd] = b || "error");
        var c = Ro();
        c && (a.j[N.g.oc] = c);
        var d = Qo();
        d && (a.j[N.g.sc] = d);
      }
    },
    Sv = function (a) {
      if (Cv(a, ["conversion", "remarketing"]) && A.__gsaExp && A.__gsaExp.id) {
        var b = A.__gsaExp.id;
        if (Za(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.j[N.g.gh] = c);
          } catch (d) {}
      }
    },
    Tv = function (a) {
      jt(a);
    },
    Uv = function (a) {
      R(43) &&
        Cv(a, "conversion") &&
        (a.copyToHitData(N.g.Mg),
        a.copyToHitData(N.g.Ng),
        a.copyToHitData(N.g.Lg));
    },
    Vv = function (a) {
      Cv(a, "conversion") &&
        (a.copyToHitData(N.g.Bd),
        a.copyToHitData(N.g.pe),
        a.copyToHitData(N.g.Fd),
        a.copyToHitData(N.g.we),
        a.copyToHitData(N.g.Ic),
        a.copyToHitData(N.g.wd));
    },
    Wv = function (a) {
      if (
        Cv(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.m;
        if (Cv(a, ["conversion", "remarketing"])) {
          var c = V(b, N.g.Tb);
          if (c === !0 || c === !1) a.j[N.g.Tb] = c;
        }
        Xo(b)
          ? (a.j[N.g.Vb] = !1)
          : ((a.j[N.g.Vb] = !0), Cv(a, "remarketing") && (a.isAborted = !0));
      }
    },
    Xv = function (a) {
      if (Cv(a, ["conversion", "remarketing"])) {
        var b = a.metadata.hit_type === "conversion";
        (b && a.eventName !== N.g.Ma) ||
          (a.copyToHitData(N.g.fa),
          b &&
            (a.copyToHitData(N.g.oe),
            a.copyToHitData(N.g.me),
            a.copyToHitData(N.g.ne),
            a.copyToHitData(N.g.ke),
            (a.j[N.g.Jg] = a.eventName),
            R(103) &&
              (a.copyToHitData(N.g.Sf),
              a.copyToHitData(N.g.Qf),
              a.copyToHitData(N.g.Rf))));
      }
    },
    Yv = function (a) {
      var b = R(7),
        c = a.m,
        d,
        e,
        f;
      if (!b) {
        var g = Nm(c, N.g.ia);
        d = xb(Qc(g) ? g : {});
      }
      var k = Nm(c, N.g.ia, 1),
        m = Nm(c, N.g.ia, 2);
      e = xb(Qc(k) ? k : {}, ".");
      f = xb(Qc(m) ? m : {}, ".");
      b || (a.j[N.g.De] = d);
      a.j[N.g.ob] = e;
      a.j[N.g.nb] = f;
    },
    Zv = function (a) {
      if (a != null) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return c === -1 ? b : b.substring(0, c);
      }
      return "";
    },
    $v = function (a) {
      if (Cv(a, "conversion") && W(N.g.N) && (a.j[N.g.yb] || a.j[N.g.Kc])) {
        var b = a.j[N.g.kb],
          c = Rc(a.metadata.cookie_options, null),
          d = dr(c.prefix);
        c.prefix = d === "_gcl" ? "" : d;
        if (a.j[N.g.yb]) {
          var e = ws(b, c, !a.metadata.gbraid_cookie_marked);
          a.metadata.gbraid_cookie_marked = !0;
          e && (a.j[N.g.wh] = e);
        }
        if (a.j[N.g.Kc]) {
          var f = os(b, c).sm;
          f && (a.j[N.g.Zg] = f);
        }
      }
    },
    aw = function (a) {
      if (a.eventName === N.g.Za && !a.m.isGtmEvent) {
        if (!a.metadata.consent_updated && Cv(a, "conversion")) {
          var b = V(a.m, N.g.Pb);
          if (typeof b !== "function") return;
          var c = String(V(a.m, N.g.Bb)),
            d = a.j[c],
            e = V(a.m, c);
          c === N.g.ab || c === N.g.zb
            ? Gs(
                { Vk: c, callback: b, Ek: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                cs
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    bw = function (a) {
      if (
        !Fu(a, "hasPreAutoPiiCcdRule", !1) &&
        Cv(a, "conversion") &&
        W(N.g.N)
      ) {
        var b = (V(a.m, N.g.ve) || {})[String(a.j[N.g.kb])],
          c = a.j[N.g.rd],
          d;
        if (!(d = Ns(b)))
          if (Al())
            if (du) d = !0;
            else {
              var e = st("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = nb(),
            g = Tt({ Qd: !0, Rd: !0, yg: !0 });
          if (g.elements.length !== 0) {
            for (var k = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              k.push(n.querySelector + "*" + Ft(n) + "*" + n.type);
            }
            a.j[N.g.th] = k.join("~");
            var p = g.oi;
            p && ((a.j[N.g.uh] = p.querySelector), (a.j[N.g.sh] = Ft(p)));
            a.j[N.g.rh] = String(nb() - f);
            a.j[N.g.vh] = g.status;
          }
        }
      }
    },
    cw = function (a) {
      if (
        a.eventName === N.g.da &&
        !a.metadata.consent_updated &&
        ((a.metadata.is_config_command = !0),
        Cv(a, "conversion") && (a.metadata.speculative = !0),
        !Cv(a, "remarketing") ||
          (V(a.m, N.g.jc) !== !1 && V(a.m, N.g.Oa) !== !1) ||
          (a.metadata.speculative = !0),
        Cv(a, "landing_page"))
      ) {
        var b = V(a.m, N.g.sa) || {},
          c = V(a.m, N.g.fb),
          d = a.metadata.conversion_linker_enabled,
          e = a.metadata.redact_ads_data,
          f = {
            Ld: d,
            Td: b,
            Zd: c,
            ya: a.metadata.source_canonical_id,
            m: a.m,
            Wd: e,
            Uk: V(a.m, N.g.Ba),
          },
          g = a.metadata.cookie_options;
        Cs(f, g);
        at(a.target, a.m);
        Rs({
          Nh: !1,
          Wd: e,
          targetId: a.target.id,
          m: a.m,
          yc: d ? g : void 0,
          sg: d,
          vk: a.j[N.g.De],
          Vh: a.j[N.g.ob],
          Sh: a.j[N.g.nb],
          Xh: a.j[N.g.Qb],
        });
        a.isAborted = !0;
      }
    },
    dw = function (a) {
      Cv(a, ["conversion", "remarketing"]) &&
        (a.m.isGtmEvent
          ? a.metadata.hit_type !== "conversion" &&
            a.eventName &&
            (a.j[N.g.Jc] = a.eventName)
          : (a.j[N.g.Jc] = a.eventName),
        gb(a.m.j, function (b, c) {
          wh[b.split(".")[0]] || (a.j[b] = c);
        }));
    },
    ew = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          Cv(a, ["conversion", "user_data_web"]),
        c = !Fu(a, "ccd_add_1p_data", !1) && Cv(a, "user_data_lead");
      if ((b || c) && W(N.g.N)) {
        var d = a.metadata.hit_type === "conversion",
          e = a.m,
          f = void 0,
          g = V(e, N.g.Ha);
        if (d || a.metadata.speculative_ecw_stitching_ping) {
          var k = (V(e, N.g.ve) || {})[String(a.j[N.g.kb])];
          if (V(e, N.g.je) === !0 || k) {
            var m;
            var n;
            k ? (n = vj(k, g)) : (n = A.enhanced_conversion_data) && U(154);
            var p = (k || {}).enhanced_conversions_mode,
              q;
            if (n) {
              if (p === "manual")
                switch (n._tag_mode) {
                  case "CODE":
                    q = "c";
                    break;
                  case "AUTO":
                    q = "a";
                    break;
                  case "MANUAL":
                    q = "m";
                    break;
                  default:
                    q = "c";
                }
              else q = p === "automatic" ? (Ns(k) ? "a" : "m") : "c";
              m = { Z: n, Tk: q };
            } else m = { Z: n, Tk: void 0 };
            var r = m,
              u = r.Tk;
            f = r.Z;
            a.j[N.g.Gd] = u;
          }
        } else if ((fk || !R(128)) && a.m.isGtmEvent) {
          Ev(a);
          a.metadata.user_data = g;
          a.j[N.g.Gd] = Os(g);
          return;
        }
        a.metadata.user_data = f;
      }
    },
    fw = function (a) {
      if (Fu(a, "ccd_add_1p_data", !1) && W(Bv())) {
        var b = a.m.C[N.g.He];
        if (wj(b)) {
          var c = V(a.m, N.g.Ha);
          c === null
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && Qc(c) && (a.metadata.user_data_from_code = c),
              Qc(b.selectors) &&
                (a.metadata.user_data_from_manual = uj(b.selectors)));
        }
      }
    },
    gw = function (a) {
      a.metadata.conversion_linker_enabled = V(a.m, N.g.Aa) !== !1;
      a.metadata.cookie_options = ys(a);
      a.metadata.redact_ads_data =
        V(a.m, N.g.la) != null && V(a.m, N.g.la) !== !1;
      a.metadata.allow_ad_personalization = Xo(a.m);
    },
    hw = function (a) {
      if (Cv(a, ["conversion", "remarketing"]) && R(31)) {
        var b = function (d) {
          return R(33) ? (Va("fdr", d), !0) : !1;
        };
        if (W(N.g.N) || b(0))
          if (W(N.g.O) || b(1))
            if (V(a.m, N.g.Ea) !== !1 || b(2))
              if (Xo(a.m) || b(3))
                if (V(a.m, N.g.jc) !== !1 || b(4)) {
                  var c;
                  R(34)
                    ? (c = a.eventName === N.g.da ? V(a.m, N.g.Oa) : void 0)
                    : (c = V(a.m, N.g.Oa));
                  if (c !== !1 || b(5))
                    if (wv() || b(6))
                      R(33) && Xa()
                        ? ((a.j[N.g.uj] = Wa("fdr")), delete Ua.fdr)
                        : ((a.j[N.g.Ug] = "1"),
                          (a.metadata.send_fledge_experiment = !0));
                }
      }
    },
    iw = function (a) {
      Cv(a, ["conversion"]) &&
        W(N.g.O) &&
        (A._gtmpcm === !0 || nt()
          ? (a.j[N.g.kc] = "2")
          : R(35) && vv("attribution-reporting") && (a.j[N.g.kc] = "1"));
    },
    jw = function (a) {
      if (!nv(A)) U(87);
      else if (tv !== void 0) {
        U(85);
        var b = lv();
        b ? qv(b, a) : U(86);
      }
    },
    kw = function (a) {
      var b = ["conversion", "remarketing"];
      b.push("page_view", "user_data_lead", "user_data_web");
      if (Cv(a, b) && W(N.g.O)) {
        a.copyToHitData(N.g.Ba);
        var c = mm(hm.Dh);
        if (c === void 0) lm(hm.Eh, !0);
        else {
          var d = mm(hm.Pe);
          a.j[N.g.Wf] = d + "." + c;
        }
      }
    },
    lw = function (a) {
      Cv(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(N.g.Da),
        a.copyToHitData(N.g.ra),
        a.copyToHitData(N.g.Ca));
    },
    mw = function (a) {
      if (!a.metadata.consent_updated && Cv(a, ["conversion", "remarketing"])) {
        var b = ko(!1);
        a.j[N.g.Qb] = b;
        var c = V(a.m, N.g.wa);
        c || (c = b === 1 ? A.top.location.href : A.location.href);
        a.j[N.g.wa] = Zv(c);
        a.copyToHitData(N.g.Ga, E.referrer);
        a.j[N.g.eb] = As();
        a.copyToHitData(N.g.Ua);
        var d = tt();
        a.j[N.g.Ub] = d.width + "x" + d.height;
        var e = mo(),
          f = Av(e);
        f.url && c !== f.url && (a.j[N.g.Xf] = Zv(f.url));
      }
    },
    nw = function (a) {
      Cv(a, ["conversion", "remarketing"]);
    },
    pw = function (a) {
      if (
        Cv(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.j[N.g.kb],
          c = V(a.m, N.g.If) === !0;
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && Ev(a);
            ow() && (a.metadata.is_gcp_conversion = !0);
            (ow() ? 0 : R(147)) &&
              (a.metadata.is_fallback_aw_conversion_ping_allowed = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c &&
              b &&
              (R(65) || R(66) || R(67) || R(68) || R(69)
                ? (a.metadata.speculative_ecw_stitching_ping = !0)
                : (a.isAborted = !0));
            break;
          case "remarketing":
            (!c && b) || Ev(a);
        }
        Cv(a, ["conversion", "remarketing"]) &&
          (a.j[N.g.Sj] = a.metadata.is_gcp_conversion
            ? "www.google.com"
            : "www.googleadservices.com");
      }
    },
    ow = function () {
      return (
        cc.userAgent.toLowerCase().indexOf("firefox") !== -1 ||
        hc("Edg/") ||
        hc("EdgA/") ||
        hc("EdgiOS/")
      );
    },
    qw = function (a) {
      var b = a.target.ids[wm[1]];
      if (b) {
        a.j[N.g.rd] = b;
        var c = a.target.ids[wm[2]];
        c && (a.j[N.g.kb] = c);
      } else a.isAborted = !0;
    },
    Ev = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    Cv = function (a, b) {
      Array.isArray(b) || (b = [b]);
      return b.indexOf(a.metadata.hit_type) >= 0;
    };
  var Nv = function (a) {
    R(89) && Cv(a, ["conversion"]) && (a.j[N.g.Kj] = aq(!1)._gs);
    if (R(19)) {
      var b = W(N.g.N) && W(N.g.O),
        c = a.metadata.redact_ads_data && !b;
      a.j[N.g.jj] = ot("gclsrc");
      a.j[N.g.fj] = ot("gad_source");
      var d = ot("gbraid");
      d && (a.j[N.g.gj] = c ? "0" : d);
      var e = ot("gclid");
      e && (a.j[N.g.ij] = b ? e : "0");
      var f = ot("dclid");
      f && (a.j[N.g.ej] = b ? f : "0");
    }
    if (R(14)) {
      var g = V(a.m, N.g.wa);
      g || (g = ko(!1) === 1 ? A.top.location.href : A.location.href);
      var k,
        m = Gj(g),
        n = Aj(m, "query", !1, void 0, "gclid");
      if (!n) {
        var p = m.hash.replace("#", "");
        n = n || zj(p, "gclid", !1);
      }
      (k = n ? n.length : void 0) && (a.j[N.g.bj] = k);
    }
    if (W(N.g.N) && a.metadata.conversion_linker_enabled) {
      var q = a.metadata.cookie_options,
        r = dr(q.prefix);
      r === "_gcl" && (r = "");
      var u = qs(r);
      a.j[N.g.fd] = u.ng;
      a.j[N.g.hd] = u.pg;
      R(124) && (a.j[N.g.gd] = u.og);
      if (vs(r)) {
        var v = us(r);
        v && (a.j[N.g.yb] = v);
        if (!r) {
          var t = a.j[N.g.kb];
          q = Rc(q, null);
          q.prefix = r;
          var w = os(t, q, !0).qm;
          w && (a.j[N.g.Kc] = w);
        }
      } else {
        var x = "";
        if (
          (R(101) || R(111)) &&
          a.metadata.hit_type === "conversion" &&
          ko() !== 2
        ) {
          var y = ts(r);
          y.W && (x = y.W);
          y.zk && (a.j[N.g.ee] = y.zk);
          y.Ak && (a.j[N.g.fe] = y.Ak);
        } else x = ss(r);
        x && (a.j[N.g.ab] = x);
        if (!r) {
          var B = ns(Yq(Xq()) ? Mq() : {}, ls);
          B && (a.j[N.g.Ae] = B);
        }
      }
    }
  };
  var sw = function (a, b) {
      var c = {},
        d = function (f, g) {
          var k;
          k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
          c[f] = k;
        };
      gb(a.j, function (f, g) {
        var k = rw[f];
        k &&
          g !== void 0 &&
          g !== "" &&
          (!a.metadata.redact_click_ids ||
            (f !== N.g.he && f !== N.g.qe && f !== N.g.Ff && f !== N.g.Ig) ||
            (g = "0"),
          d(k, g));
      });
      d("gtm", kp({ ya: a.metadata.source_canonical_id }));
      Yo() && d("gcs", Zo());
      d("gcd", cp(a.m));
      fp() && d("dma_cps", dp());
      d("dma", ep());
      uo(Ko()) && d("tcfd", gp());
      fj() && d("tag_exp", fj());
      if (a.metadata.add_tag_timing) {
        d("tft", nb());
        var e = Cc();
        e !== void 0 && d("tfd", Math.round(e));
      }
      R(22) && d("apve", "1");
      (R(23) || R(24)) && d("apvf", Ac() ? (R(24) ? "f" : "sb") : "nf");
      b(c);
    },
    tw = function (a) {
      sw(a, function (b) {
        if (a.metadata.hit_type === "page_view") {
          var c = [];
          gb(b, function (e, f) {
            c.push(e + "=" + f);
          });
          var d =
            Nj(
              W([N.g.N, N.g.O])
                ? "https://www.google.com"
                : "https://pagead2.googlesyndication.com",
              !0
            ) +
            "/ccm/collect?" +
            c.join("&");
          R(24) && Ac() ? zc(d, void 0, { Fk: !0 }) : wc(d);
          if (Za(a.m.onSuccess)) a.m.onSuccess();
        }
      });
    },
    uw = {},
    rw =
      ((uw[N.g.fc] = "gcu"),
      (uw[N.g.yb] = "gclgb"),
      (uw[N.g.ab] = "gclaw"),
      (uw[N.g.cj] = "gad_source"),
      (uw[N.g.dj] = "gad_source_src"),
      (uw[N.g.he] = "gclid"),
      (uw[N.g.kj] = "gclsrc"),
      (uw[N.g.Ig] = "gbraid"),
      (uw[N.g.Ff] = "wbraid"),
      (uw[N.g.zb] = "auid"),
      (uw[N.g.mj] = "rnd"),
      (uw[N.g.pj] = "ncl"),
      (uw[N.g.Og] = "gcldc"),
      (uw[N.g.qe] = "dclid"),
      (uw[N.g.nb] = "edid"),
      (uw[N.g.Jc] = "en"),
      (uw[N.g.oc] = "gdpr"),
      (uw[N.g.ob] = "gdid"),
      (uw[N.g.Lc] = "_ng"),
      (uw[N.g.Bj] = "gtm_up"),
      (uw[N.g.Qb] = "frm"),
      (uw[N.g.zd] = "lps"),
      (uw[N.g.De] = "did"),
      (uw[N.g.Cj] = "navt"),
      (uw[N.g.wa] = "dl"),
      (uw[N.g.Ga] = "dr"),
      (uw[N.g.eb] = "dt"),
      (uw[N.g.Hj] = "scrsrc"),
      (uw[N.g.Wf] = "ga_uid"),
      (uw[N.g.sc] = "gdpr_consent"),
      (uw[N.g.Ba] = "uid"),
      (uw[N.g.Hd] = "us_privacy"),
      (uw[N.g.Vb] = "npa"),
      uw);
  var vw = {
    J: {
      Hi: "ads_conversion_hit",
      ce: "container_execute_start",
      Ki: "container_setup_end",
      Bg: "container_setup_start",
      Ii: "container_blocking_end",
      Ji: "container_execute_end",
      Li: "container_yield_end",
      Cg: "container_yield_start",
      Nj: "event_execute_end",
      Mj: "event_evaluation_end",
      xh: "event_evaluation_start",
      Oj: "event_setup_end",
      Ie: "event_setup_start",
      Qj: "ga4_conversion_hit",
      Le: "page_load",
      ao: "pageview",
      vc: "snippet_load",
      lk: "tag_callback_error",
      mk: "tag_callback_failure",
      nk: "tag_callback_success",
      pk: "tag_execute_end",
      Jd: "tag_execute_start",
    },
  };
  function ww() {
    function a(c, d) {
      var e = Wa(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var xw = !1;
  function gx(a, b) {}
  function hx(a, b) {}
  function ix(a, b) {}
  function jx(a, b) {}
  function kx() {
    var a = {};
    return a;
  }
  function Zw(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function lx() {}
  function mx(a, b) {}
  function nx(a, b, c) {}
  function ox() {}
  function px(a, b) {
    var c = A,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  function qx(a, b, c, d) {
    var e = bo(a, "fmt");
    if (b) {
      var f = bo(a, "random"),
        g = bo(a, "label") || "";
      if (!f) return !1;
      var k = iv(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!px(k, b)) return !1;
    }
    e && Number(e) !== 4 && (a = eo(a, "rfmt", e));
    var m = eo(a, "fmt", 4);
    lc(
      m,
      function () {
        A.google_noFurtherRedirects &&
          b &&
          ((A.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      E.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  }
  var rx = function () {
      var a = !1;
      if (fc) {
        var b = Aj(Gj(fc), "host");
        b && (a = b.match(/^(www\.)?googletagmanager\.com$/) !== null);
      }
      return a;
    },
    sx = function (a) {
      if (a !== void 0) return Math.round(a / 10) * 10;
    },
    tx = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          k;
        for (k in d)
          k !== "google_business_vertical" &&
            (k in g || (g[k] = []), g[k].push(d[k]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    ux = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = Eh(d)),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    Eh = function (a) {
      a.item_id != null &&
        (a.id != null ? (U(138), a.id !== a.item_id && U(148)) : U(153));
      return R(18) ? Fh(a) : a.id;
    },
    wx = function (a, b) {
      var c = vx(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    vx = function (a) {
      if (!a || typeof a !== "object" || typeof a.join === "function")
        return "";
      var b = [];
      gb(a, function (c, d) {
        var e, f;
        if (Array.isArray(d)) {
          for (var g = [], k = 0; k < d.length; ++k) {
            var m = xx(d[k]);
            m !== void 0 && g.push(m);
          }
          f = g.length !== 0 ? g.join(",") : void 0;
        } else f = xx(d);
        e = f;
        var n = xx(c);
        n && e !== void 0 && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    xx = function (a) {
      var b = typeof a;
      if (a != null && b !== "object" && b !== "function")
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    yx = function (a, b) {
      var c = [],
        d = function (f, g) {
          var k = $f[f] === !0;
          g == null ||
            (!k && g === "") ||
            (g === !0 && (g = 1),
            g === !1 && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      (e !== "conversion" && e !== "remarketing" && e !== "ga_conversion") ||
        d("random", a.metadata.event_start_timestamp_ms);
      gb(b, d);
      return c.join("&");
    },
    zx = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.j[N.g.rd],
        e = W([N.g.N, N.g.O]),
        f = [],
        g,
        k,
        m = ip() ? 2 : 3,
        n = void 0,
        p = function (x) {
          f.push(x);
        };
      switch (c) {
        case "conversion":
          k = "/pagead/conversion";
          var q = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com"),
                (k = "/pagead/1p-conversion"),
                (n = 8))
              : ((g = "https://www.googleadservices.com"), (n = 5))
            : ((g = "https://pagead2.googlesyndication.com"), (n = 6));
          a.metadata.is_gcp_conversion &&
            (q = "&gcp=1&sscte=1&ct_cookie_present=1");
          var r = {
            Pa: "" + Nj(g, !0) + k + "/" + d + "/?" + yx(a, b) + q,
            format: m,
            Ra: !0,
            endpoint: n,
          };
          W(N.g.O) && (r.attributes = { attributionsrc: "" });
          e &&
            a.metadata.is_fallback_aw_conversion_ping_allowed &&
            ((r.Ze =
              "" +
              Nj("https://www.google.com", !0) +
              "/pagead/1p-conversion/" +
              d +
              "/?" +
              yx(a, b) +
              "&gcp=1&sscte=1&ct_cookie_present=1"),
            (r.Ye = 8));
          p(r);
          if (a.metadata.send_ccm_parallel_ping) {
            n = a.metadata.is_gcp_conversion ? 23 : 22;
            var u;
            b.eme && !R(8) ? ((u = {}), qb(u, b), (u.eme = "*")) : (u = b);
            p({
              Pa: "" + Nj(g, !0) + "/ccm/conversion/" + d + "/?" + yx(a, u) + q,
              format: 2,
              Ra: !0,
              endpoint: n,
            });
          }
          a.metadata.is_gcp_conversion &&
            e &&
            ((q = "&gcp=1&ct_cookie_present=1"),
            p({
              Pa:
                "" +
                Nj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                yx(a, b) +
                q,
              format: m,
              Ra: !0,
              endpoint: 9,
            }));
          break;
        case "remarketing":
          var v = b.data || "",
            t = tx(ux(a.j[N.g.fa]));
          if (t.length) {
            for (var w = 0; w < t.length; w++)
              (b.data = wx(v, t[w])),
                p({
                  Pa:
                    "" +
                    Nj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    yx(a, b),
                  format: m,
                  Ra: !0,
                  endpoint: 9,
                }),
                a.metadata.send_fledge_experiment &&
                  p({
                    Pa: "" + zv() + "/td/rul/" + d + "?" + yx(a, b),
                    format: 4,
                    Ra: !1,
                    endpoint: 44,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            p({
              Pa:
                "" +
                Nj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                yx(a, b),
              format: m,
              Ra: !0,
              endpoint: 9,
            });
          break;
        case "user_data_lead":
          p({
            Pa:
              "" +
              Nj("https://google.com") +
              "/pagead/form-data/" +
              d +
              "?" +
              yx(a, b),
            format: 1,
            Ra: !0,
            endpoint: 11,
          });
          break;
        case "user_data_web":
          p({
            Pa:
              "" +
              Nj("https://google.com") +
              "/ccm/form-data/" +
              d +
              "?" +
              yx(a, b),
            format: 1,
            Ra: !0,
            endpoint: 21,
          });
          break;
        case "ga_conversion":
          e
            ? ((g = "https://www.google.com"), (n = 54))
            : ((g = "https://pagead2.googlesyndication.com"), (n = 55)),
            p({
              Pa: "" + Nj(g, !0) + "/measurement/conversion/?" + yx(a, b),
              format: 5,
              Ra: !0,
              endpoint: n,
            });
      }
      ip() ||
        (c !== "conversion" && c !== "remarketing") ||
        !a.metadata.send_fledge_experiment ||
        (R(32) && c === "conversion" && (b.ct_cookie_present = 0),
        p({
          Pa: "" + zv() + "/td/rul/" + d + "?" + yx(a, b),
          format: 4,
          Ra: !1,
          endpoint: 44,
        }));
      return { Lm: f };
    },
    Ax = function (a, b, c, d, e, f, g, k) {
      hx(c.m.eventId, c.eventName);
      var m = function () {
        f && f();
      };
      switch (b) {
        case 1:
          wc(a);
          f && f();
          break;
        case 2:
          pc(a, m, g, k);
          break;
        case 3:
          var n = !1;
          try {
            n = qx(a, m, g, k);
          } catch (r) {
            n = !1;
          }
          n || Ax(a, 2, c, d, e, m, g, k);
          break;
        case 4:
          var p = "AW-" + c.j[N.g.rd],
            q = c.j[N.g.kb];
          q && (p = p + "/" + q);
          xv(a, p);
          break;
        case 5:
          zc(a, void 0, void 0, f, g);
      }
    },
    Bx = function (a, b) {
      var c = !0;
      switch (a) {
        case "conversion":
          c = !1;
          break;
        case "user_data_lead":
          c = !R(9);
          break;
        case "user_data_web":
          c = !R(10);
      }
      return c ? b.replace(/./g, "*") : b;
    },
    Cx = function (a) {
      switch (a) {
        case "conversion":
          return R(72) || R(59) || R(60) || R(61) || R(62);
        case "user_data_lead":
          return R(73);
        case "user_data_web":
          return R(74);
        default:
          return !1;
      }
    },
    Dx = function (a) {
      if (!a.j[N.g.ee] || !a.j[N.g.fe]) return "";
      var b = a.j[N.g.ee].split("."),
        c = a.j[N.g.fe].split(".");
      if (!b.length || !c.length || b.length !== c.length) return "";
      for (var d = [], e = 0; e < b.length; ++e) d.push(b[e] + "_" + c[e]);
      return d.join(".");
    },
    Hx = function (a, b, c) {
      function d(k, m) {
        c._ece = Ex(f, k, m === void 0 ? !1 : m);
        a === "user_data_web" && (c.em = "tv.1~em.e0");
      }
      function e(k, m) {
        m = m === void 0 ? !1 : m;
        return Fx(k, function (n) {
          n ? d(n, m) : d();
        });
      }
      var f = b.metadata.split_experiment_arm,
        g = b.metadata.fake_user_data;
      if (f && g)
        if (f === 1) a === "conversion" && d();
        else if (f === 2) {
          if (a === "conversion") return e(Gx(0, g));
        } else if (f === 3)
          if (a === "conversion") d();
          else {
            if (a === "user_data_web") return e(Gx(1, g));
          }
        else if (f === 4)
          if (a === "conversion") d();
          else {
            if (a === "user_data_web") return e(Gx(3, g), !0);
          }
        else
          f === 5
            ? a === "conversion"
              ? d()
              : a === "user_data_web" && d()
            : (f !== 6 && f !== 7) || a !== "conversion" || d();
    },
    Jx = function (a, b, c) {
      function d(n, p, q) {
        n._ece = Ex(f, q, !1, p);
      }
      function e(n, p, q) {
        return Fx(n, function (r) {
          d(p, q, r);
          c(p);
        });
      }
      var f = a.metadata.split_experiment_arm,
        g = a.metadata.fake_user_data;
      if (f && g)
        if (f === 8) {
          var k = Object.assign({}, b);
          d(b, 1);
          c(b);
          Ix(k);
          d(k, 2);
          c(k);
        } else if (f === 9) {
          var m = Object.assign({}, b);
          d(b, 1);
          c(b);
          Ix(m);
          e(Gx(1, g), m, 2);
        }
    },
    Gx = function (a, b) {
      if (a === 0) return ni(b, !1);
      if (a === 1) return ni(b, !0, !0);
      if (a === 3)
        return li(
          {
            Ja: "tv.1~em.test@example.com~fn.Fake~ln.Name~co.US~sa.123 Fake St~ct.Non-Applicable~pn.+1234567890~pc.12345~rg.ca",
            Ud: 9,
            rg: !1,
          },
          !0
        );
    },
    Lx = function (a, b, c) {
      if (a === "user_data_web") {
        var d = c.metadata.split_experiment_arm;
        if (d === 6 || d === 7) {
          var e = d === 7 ? 3 : 1,
            f = yi(c.metadata.fake_user_data),
            g = ii(f, e),
            k = g.Cc,
            m = g.Rh,
            n = g.encryptionKeyString,
            p = g.bc,
            q = [
              "&em=tv.1~em.e0&_ece=a." +
                d +
                ("~s." + (rx() ? 1 : 0)) +
                ("&feme=" + m),
            ];
          return {
            yi: function () {
              return !0;
            },
            Cc: k,
            Di: q,
            gi: f,
            encryptionKeyString: n,
            zg: function (r, u) {
              return function (v) {
                var t = Gx(e, c.metadata.fake_user_data);
                Fx(t, function (w) {
                  var x = Ex(d, w, d === 7),
                    y = Kx(u.Pa, c, b, v);
                  Ax(
                    y + "&em=tv.1~em.e0&_ece=" + encodeURIComponent(x),
                    u.format,
                    c,
                    b,
                    u.endpoint,
                    u.Ra ? r : void 0,
                    void 0,
                    u.attributes
                  );
                });
              };
            },
            bc: p,
          };
        }
      }
    },
    Nx = function (a, b, c) {
      var d = yi(a.metadata.user_data),
        e = ii(d, c),
        f = e.Ci,
        g = e.Cc,
        k = e.bc,
        m = e.Rh,
        n = e.encryptionKeyString,
        p = [];
      (c !== 0 && c !== 1 && c !== 2) || p.push("&em=" + f);
      var q = {
        yi: function () {
          return !0;
        },
        Cc: g,
        Di: p,
        gi: d,
        bc: k,
      };
      if (c === 3 || c === 1)
        p.push("&eme=" + m),
          (q.encryptionKeyString = n),
          (q.zg = function (r, u) {
            return function (v) {
              var t = Gx(c, a.metadata.user_data),
                w = Kx(u.Pa, a, b, v);
              Fx(t, Mx(u, a, b, w, c, r));
            };
          });
      return q;
    },
    Mx = function (a, b, c, d, e, f) {
      return function (g) {
        if (e === 0 || e === 1 || e === 2) {
          var k = (g == null ? 0 : g.Ja) ? g.Ja : pi({ Vd: [] }).Ja;
          d += "&em=" + encodeURIComponent(k);
        }
        Ax(
          d,
          a.format,
          b,
          c,
          a.endpoint,
          a.Ra ? f : void 0,
          void 0,
          a.attributes
        );
      };
    },
    Kx = function (a, b, c, d) {
      var e = a;
      if (d) {
        var f = kp({ ya: b.metadata.source_canonical_id, zi: d });
        e = e.replace(c.gtm, f);
      }
      return e;
    },
    Fx = function (a, b) {
      if (a) return a.then(b);
      b(void 0);
    },
    Ex = function (a, b, c, d) {
      function e(g, k) {
        f.push(g + "." + k);
      }
      c = c === void 0 ? !1 : c;
      var f = [];
      e("a", a);
      e("s", rx() ? 1 : 0);
      d !== void 0 && e("n", d);
      b !== void 0 &&
        (b.Ja &&
          !c &&
          (e("fem", b.Ja.replace(/./g, "*")),
          b.time !== void 0 && e("ht", String(b.time))),
        b.ja &&
          (b.ja.zc && e("feme", b.ja.zc.replace(/./g, "*")),
          e("est", b.ja.time),
          e("es", b.ja.status)));
      return f.join("~");
    },
    Px = function (a, b) {
      if (a !== "conversion") return !1;
      var c = b.metadata.split_experiment_arm;
      return c === 8 || c === 9;
    },
    Ix = function (a) {
      var b = zh[N.g.kb];
      a[b] = "ecwexp_" + a[b];
    },
    Sx = function (a, b, c, d, e, f) {
      var g = new Qx(2, d),
        k = f ? 2 : 1;
      (function (v, t) {
        var w = ni(b, t, !0, f);
        w
          ? w.then(Rx(a, v, d)).then(function () {
              e(v, { Bi: g });
            })
          : e(v, { Bi: g });
      })(Object.assign({}, c), !1);
      var m = yi(b),
        n = ii(m, k),
        p = n.Cc,
        q = n.bc,
        r = n.encryptionKeyString,
        u = ["&em=" + n.Ci, "&eme=" + n.Rh];
      Ix(c);
      e(c, {
        serviceWorker: {
          yi: function (v) {
            var t = v.endpoint;
            return t === 5 || t === 8;
          },
          Cc: p,
          Di: u,
          gi: m,
          encryptionKeyString: r,
          bc: q,
          zg: function (v, t) {
            return function (w) {
              var x = Kx(t.Pa, d, c, w);
              x += "&_swf=1";
              var y = ni(b, !0, !0, f);
              Fx(y, Mx(t, d, c, x, k, v));
            };
          },
        },
        Bi: g,
      });
    },
    Tx = function (a, b, c, d, e, f) {
      function g(k, m) {
        m && Ix(k);
        var n = ni(b, m, !0, f);
        n
          ? n.then(Rx(a, k, d)).then(function () {
              e(k);
            })
          : e(k);
      }
      g(Object.assign({}, c), !1);
      g(c, !0);
    },
    Rx = function (a, b, c) {
      return function (d) {
        var e = d.Ja;
        R(113) || (b.em = e);
        (R(58) || R(96)) &&
          d.Ud > 0 &&
          d.time !== void 0 &&
          (b._ht = Ox(sx(d.time), e));
        d.Ud > 0 && Ux(a, b, c);
        if (Cx(a)) {
        }
      };
    },
    Ox = function (a, b) {
      return ["t." + (a != null ? a : ""), "l." + sx(b.length)].join("~");
    },
    Ux = function (a, b, c) {
      if (a === "user_data_web") {
        var d;
        var e = c.metadata.cookie_options;
        e = e || {};
        var f;
        if (W(lt)) {
          (f = mt(e)) || (f = Fp());
          var g = e,
            k = pq(g.prefix);
          rq(g, f);
          delete mq[k];
          delete nq[k];
          qq(k, g.path, g.domain);
          d = mt(e);
        } else d = void 0;
        b.ecsid = d;
      }
    },
    Vx = function (a, b, c, d, e) {
      var f = b.Pa,
        g = b.format,
        k = b.Ra,
        m = b.attributes,
        n = b.endpoint;
      return function (p) {
        Bi(c.gi).then(function (q) {
          var r = pi(q),
            u = Kx(f, e, d, p);
          Ax(
            u + "&em=" + encodeURIComponent(r.Ja),
            g,
            e,
            d,
            n,
            k ? a : void 0,
            void 0,
            m
          );
        });
      };
    },
    Xx = function (a) {
      if (a.metadata.hit_type === "page_view") tw(a);
      else {
        var b = R(20) ? pb(a.m.onFailure) : void 0;
        Wx(a, function (c, d) {
          R(113) && delete c.em;
          for (
            var e = zx(a, c).Lm,
              f = ((d == null ? void 0 : d.Bi) || new Qx(1, a)).C(
                e.filter(function (B) {
                  return B.Ra;
                }).length
              ),
              g = {},
              k = 0;
            k < e.length;
            g = { Ze: void 0, Ye: void 0, ae: void 0, Hh: void 0, wk: void 0 },
              k++
          ) {
            var m = e[k],
              n = m.Pa,
              p = m.format;
            g.ae = m.Ra;
            g.Hh = m.attributes;
            g.wk = m.endpoint;
            g.Ze = m.Ze;
            g.Ye = m.Ye;
            var q = void 0,
              r = (q = d) == null ? void 0 : q.serviceWorker;
            if (r)
              if (r.yi(e[k])) {
                var u = r.zg ? r.zg(f, e[k]) : Vx(f, e[k], r, c, a),
                  v = r,
                  t = v.Cc,
                  w = v.encryptionKeyString,
                  x = "" + n + v.Di.join("");
                dv(
                  x,
                  t,
                  (function (B) {
                    return function () {
                      B.ae && typeof f === "function" && f();
                    };
                  })(g),
                  u,
                  w
                );
              } else f();
            else {
              var y = b;
              g.Ze &&
                g.Ye &&
                (y = (function (B) {
                  return function () {
                    Ax(
                      B.Ze,
                      5,
                      a,
                      c,
                      B.Ye,
                      B.ae ? f : void 0,
                      B.ae ? b : void 0,
                      B.Hh
                    );
                  };
                })(g));
              Ax(n, p, a, c, g.wk, g.ae ? f : void 0, g.ae ? y : void 0, g.Hh);
            }
          }
        });
      }
    },
    Qx = function (a, b) {
      this.j = a;
      this.onSuccess = b.m.onSuccess;
    };
  Qx.prototype.C = function (a) {
    var b = this;
    return yb(function () {
      b.H();
    }, a || 1);
  };
  Qx.prototype.H = function () {
    this.j--;
    if (Za(this.onSuccess) && this.j === 0) this.onSuccess();
  };
  var Wx = function (a, b) {
    var c = a.metadata.hit_type,
      d = {},
      e = {},
      f = void 0,
      g = a.metadata.event_start_timestamp_ms;
    c === "conversion" || c === "remarketing"
      ? ((d.cv = "11"),
        (d.fst = g),
        (d.fmt = 3),
        (d.bg = "ffffff"),
        (d.guid = "ON"),
        (d.async = "1"))
      : c === "ga_conversion" &&
        ((d.cv = "11"),
        (d.tid = a.target.destinationId),
        (d.fst = g),
        (d.fmt = 6),
        (d.en = a.eventName));
    var k = Hr(["aw", "dc"]);
    k != null && (d.gad_source = k);
    d.gtm = kp({ ya: a.metadata.source_canonical_id });
    c !== "remarketing" && Yo() && (d.gcs = Zo());
    d.gcd = cp(a.m);
    fp() && (d.dma_cps = dp());
    d.dma = ep();
    uo(Ko()) && (d.tcfd = gp());
    fj() && (d.tag_exp = fj());
    a.j[N.g.Ub] && Ah(a.j[N.g.Ub], d);
    a.j[N.g.Ua] && Ch(a.j[N.g.Ua], d);
    var m = a.metadata.redact_click_ids,
      n = function (S, M) {
        var T = a.j[M];
        T && (d[S] = m ? Qr(T) : T);
      };
    n("url", N.g.wa);
    n("ref", N.g.Ga);
    n("top", N.g.Xf);
    var p = Dx(a);
    p && (d.gclaw_src = p);
    gb(a.j, function (S, M) {
      if (zh.hasOwnProperty(S)) {
        var T = zh[S];
        T && (d[T] = M);
      } else e[S] = M;
    });
    qm(d, a.j[N.g.Id]);
    var q = a.j[N.g.Bd];
    q !== void 0 && q !== "" && (d.vdnc = String(q));
    var r = a.j[N.g.wd];
    r !== void 0 && (d.shf = r);
    var u = a.j[N.g.Ic];
    u !== void 0 && (d.delc = u);
    if (R(27) && a.metadata.add_tag_timing) {
      d.tft = nb();
      var v = Cc();
      v !== void 0 && (d.tfd = Math.round(v));
    }
    c !== "ga_conversion" && (d.data = vx(e));
    var t = a.j[N.g.fa];
    !t ||
      (c !== "conversion" && c !== "ga_conversion") ||
      ((d.iedeld = Ih(t)), (d.item = Dh(t)));
    if (
      (c !== "conversion" && c !== "user_data_lead" && c !== "user_data_web") ||
      !a.metadata.user_data
    )
      b(d, { serviceWorker: f });
    else if (!W(N.g.O) || (R(17) && !W(N.g.N))) (d.ec_mode = void 0), b(d);
    else {
      var w = [];
      if (a.metadata.split_experiment_arm && a.metadata.fake_user_data) {
        if (Px(c, a)) {
          Jx(a, d, b);
          return;
        }
        var x = Hx(c, a, d);
        f = Lx(c, d, a);
        x && w.push(x);
        d.gtm = kp({ ya: a.metadata.source_canonical_id, zi: 3 });
      } else if (c !== "conversion" && R(119) && !R(113)) {
        d.gtm = kp({ ya: a.metadata.source_canonical_id, zi: 3 });
        if (c === "user_data_web" && R(56)) {
          d.random = nb();
          var y = Object.assign({}, d),
            B = Nx(a, d, 0),
            C = Nx(a, y, 1);
          B.bc > 0 && Ux(c, d, a);
          b(d, { serviceWorker: B });
          b(y, { serviceWorker: C });
          return;
        }
        f = Nx(a, d, R(118) ? 1 : 0);
        f.bc > 0 && Ux(c, d, a);
      } else {
        var D = a.metadata.user_data,
          G = R(60);
        if (c === "conversion" && (R(59) || G)) {
          Tx(c, D, d, a, b, G);
          return;
        }
        var K = R(62);
        if (c === "conversion" && (R(61) || K)) {
          Sx(c, D, d, a, b, K);
          return;
        }
        var F;
        (F = R(95) ? ni(D, !1) : R(96) ? ni(D, Cx(c)) : oi(D)) &&
          w.push(F.then(Rx(c, d, a)));
      }
      if (w.length)
        try {
          Promise.all(w).then(function () {
            b(d);
          });
          return;
        } catch (S) {}
      b(d, { serviceWorker: f });
    }
  };
  function Yx(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function Zx(a, b, c) {
    c = c === void 0 ? !1 : c;
    $x().addRestriction(0, a, b, c);
  }
  function ay(a, b, c) {
    c = c === void 0 ? !1 : c;
    $x().addRestriction(1, a, b, c);
  }
  function by() {
    var a = pk();
    return $x().getRestrictions(1, a);
  }
  var cy = function () {
      this.container = {};
      this.j = {};
    },
    dy = function (a, b) {
      var c = a.container[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.container[b] = c));
      return c;
    };
  cy.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.j[b]) {
      var e = dy(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  cy.prototype.getRestrictions = function (a, b) {
    var c = dy(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        ta(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        ta(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        ta(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        ta(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  cy.prototype.getExternalRestrictions = function (a, b) {
    var c = dy(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  cy.prototype.removeExternalRestrictions = function (a) {
    var b = dy(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.j[a] = !0;
  };
  function $x() {
    var a = Li.r;
    a || ((a = new cy()), (Li.r = a));
    return a;
  }
  var ey = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    fy = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    gy = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    hy =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function iy() {
    var a = nj("gtm.allowlist") || nj("gtm.whitelist");
    a && U(9);
    Ri && (a = ["google", "gtagfl", "lcl", "zone"]);
    ey.test(A.location && A.location.hostname) &&
      (Ri
        ? U(116)
        : (U(117),
          jy &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && rb(kb(a), fy),
      c = nj("gtm.blocklist") || nj("gtm.blacklist");
    c || ((c = nj("tagTypeBlacklist")) && U(3));
    c ? U(8) : (c = []);
    ey.test(A.location && A.location.hostname) &&
      ((c = kb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    kb(c).indexOf("google") >= 0 && U(2);
    var d = c && rb(kb(c), gy),
      e = {};
    return function (f) {
      var g = f && f[Ge.xa];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = aj[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    U(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var u = eb(d, k || []);
          u && U(10);
          q = u;
        }
      }
      var v = !m || q;
      v ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (v = eb(d, hy));
      return (e[g] = v);
    };
  }
  var jy = !1;
  jy = !0;
  function ky() {
    fk &&
      Zx(pk(), function (a) {
        var b = tf(a.entityId),
          c;
        if (wf(b)) {
          var d = b[Ge.xa];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = lf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!Yx(b[Ge.xa], 4);
        return c;
      });
  }
  function ly(a, b, c, d, e) {
    if (!my()) {
      var f = d.siloed ? kk(a) : a;
      if (!yk(f)) {
        d.siloed && Ak({ ctid: f, isDestination: !1 });
        var g = sk();
        bk().container[f] = { state: 1, context: d, parent: g };
        ak({ ctid: f, isDestination: !1 }, e);
        var k = ny(a);
        if (hj()) lc(gj() + "/" + k);
        else {
          var m = sb(a, "GTM-"),
            n = Lj(),
            p = c ? "/gtag/js" : "/gtm.js",
            q = Kj(b, p + k);
          if (!q) {
            var r = Ki.Ef + p;
            n &&
              fc &&
              m &&
              (r = fc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
            q = Ss("https://", "http://", r + k);
          }
          lc(q);
        }
      }
    }
  }
  function oy(a, b, c, d) {
    if (!my()) {
      var e = c.siloed ? kk(a) : a;
      if (!zk(e))
        if ((!R(130) && c.siloed) || !Bk())
          if (
            (c.siloed && Ak({ ctid: e, isDestination: !0 }),
            (bk().destination[e] = { state: 1, context: c, parent: sk() }),
            ak({ ctid: e, isDestination: !0 }, d),
            hj())
          )
            lc(gj() + ("/gtd" + ny(a, !0)));
          else {
            var f = "/gtag/destination" + ny(a, !0),
              g = Kj(b, f);
            g || (g = Ss("https://", "http://", Ki.Ef + f));
            lc(g);
          }
        else
          (bk().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: sk(),
          }),
            ak({ ctid: e, isDestination: !0 }, d),
            U(91);
    }
  }
  function ny(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + Ki.vb;
    if (!sb(a, "GTM-") || b) c += "&cx=c";
    c += "&gtm=" + kp();
    Lj() && (c += "&sign=" + Ki.Ch);
    var d = ej.j;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function my() {
    if (ip()) {
      return !0;
    }
    return !1;
  }
  var py = !1,
    qy = 0,
    ry = [];
  function sy(a) {
    if (!py) {
      var b = E.createEventObject,
        c = E.readyState === "complete",
        d = E.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        py = !0;
        for (var e = 0; e < ry.length; e++) H(ry[e]);
      }
      ry.push = function () {
        for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) H(f[g]);
        return 0;
      };
    }
  }
  function ty() {
    if (!py && qy < 140) {
      qy++;
      try {
        var a, b;
        (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
        sy();
      } catch (c) {
        A.setTimeout(ty, 50);
      }
    }
  }
  function uy(a) {
    py ? a() : ry.push(a);
  }
  function wy(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: nk(),
    };
  }
  var yy = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.P = !1;
      this.C = this.H = 0;
      xy(this, a, b);
    },
    zy = function (a, b, c, d) {
      if (Ni.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Qc(d) && (e = Rc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Ay = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    By = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    xy = function (a, b, c) {
      b !== void 0 && a.Re(b);
      c &&
        A.setTimeout(function () {
          By(a);
        }, Number(c));
    };
  yy.prototype.Re = function (a) {
    var b = this,
      c = pb(function () {
        H(function () {
          a(nk(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var Cy = function (a) {
      a.H++;
      return pb(function () {
        a.C++;
        a.P && a.C >= a.H && By(a);
      });
    },
    Dy = function (a) {
      a.P = !0;
      a.C >= a.H && By(a);
    };
  var Ey = {};
  function Fy() {
    return A[Gy()];
  }
  function Gy() {
    return A.GoogleAnalyticsObject || "ga";
  }
  function Jy() {
    var a = nk();
  }
  function Ky(a, b) {
    return function () {
      var c = Fy(),
        d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"),
            k = f.get("hitCallback"),
            m = g.indexOf("&tid=" + b) < 0;
          m &&
            (f.set(
              "hitPayload",
              g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
              !0
            ),
            f.set("hitCallback", void 0, !0));
          e(f);
          m &&
            (f.set("hitPayload", g, !0),
            f.set("hitCallback", k, !0),
            f.set("_x_19", void 0, !0),
            e(f));
        });
      }
    };
  }
  var Py = ["es", "1"],
    Qy = {},
    Ry = {};
  function Sy(a, b) {
    if (Uj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Qy[a] = [
        ["e", c],
        ["eid", a],
      ];
      nn(a);
    }
  }
  function Ty(a) {
    var b = a.eventId,
      c = a.dd;
    if (!Qy[b]) return [];
    var d = [];
    Ry[b] || d.push(Py);
    d.push.apply(d, ta(Qy[b]));
    c && (Ry[b] = !0);
    return d;
  }
  var Uy = {},
    Vy = {},
    Wy = {};
  function Xy(a, b, c, d) {
    Uj &&
      R(108) &&
      ((d === void 0 ? 0 : d)
        ? ((Wy[b] = Wy[b] || 0), ++Wy[b])
        : c !== void 0
        ? ((Vy[a] = Vy[a] || {}), (Vy[a][b] = Math.round(c)))
        : ((Uy[a] = Uy[a] || {}), (Uy[a][b] = (Uy[a][b] || 0) + 1)));
  }
  function Yy(a) {
    var b = a.eventId,
      c = a.dd,
      d = Uy[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Uy[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function Zy(a) {
    var b = a.eventId,
      c = a.dd,
      d = Vy[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Vy[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function $y() {
    for (
      var a = [], b = l(Object.keys(Wy)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Wy[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var az = {},
    bz = {};
  function cz(a, b, c) {
    if (Uj && b) {
      var d = Oj(b);
      az[a] = az[a] || [];
      az[a].push(c + d);
      var e = (wf(b) ? "1" : "2") + d;
      bz[a] = bz[a] || [];
      bz[a].push(e);
      nn(a);
    }
  }
  function dz(a) {
    var b = a.eventId,
      c = a.dd,
      d = [],
      e = az[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = bz[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete az[b], delete bz[b]);
    return d;
  }
  function ez(a, b, c, d) {
    var e = jf[a],
      f = fz(a, b, c, d);
    if (!f) return null;
    var g = xf(e[Ge.kk], c, []);
    if (g && g.length) {
      var k = g[0];
      f = ez(
        k.index,
        {
          onSuccess: f,
          onFailure: k.xk === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function fz(a, b, c, d) {
    function e() {
      function w() {
        tl(3);
        var K = nb() - G;
        cz(c.id, f, "7");
        Ay(c.wc, C, "exception", K);
        R(93) && nx(c, f, vw.J.lk);
        D || ((D = !0), k());
      }
      if (f[Ge.Jl]) k();
      else {
        var x = vf(f, c, []),
          y = x[Ge.al];
        if (y != null)
          for (var B = 0; B < y.length; B++)
            if (!W(y[B])) {
              k();
              return;
            }
        var C = zy(c.wc, String(f[Ge.xa]), Number(f[Ge.Qe]), x[Ge.METADATA]),
          D = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!D) {
            D = !0;
            var K = nb() - G;
            cz(c.id, jf[a], "5");
            Ay(c.wc, C, "success", K);
            R(93) && nx(c, f, vw.J.nk);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!D) {
            D = !0;
            var K = nb() - G;
            cz(c.id, jf[a], "6");
            Ay(c.wc, C, "failure", K);
            R(93) && nx(c, f, vw.J.mk);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        cz(c.id, f, "1");
        R(93) && mx(c, f);
        var G = nb();
        try {
          yf(x, { event: c, index: a, type: 1 });
        } catch (K) {
          w(K);
        }
        R(93) && nx(c, f, vw.J.pk);
      }
    }
    var f = jf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = xf(f[Ge.qk], c, []);
    if (n && n.length) {
      var p = n[0],
        q = ez(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.xk === 2 ? m : q;
    }
    if (f[Ge.bk] || f[Ge.Ll]) {
      var r = f[Ge.bk] ? kf : c.An,
        u = g,
        v = k;
      if (!r[a]) {
        var t = gz(a, r, pb(e));
        g = t.onSuccess;
        k = t.onFailure;
      }
      return function () {
        r[a](u, v);
      };
    }
    return e;
  }
  function gz(a, b, c) {
    var d = [],
      e = [];
    b[a] = hz(d, e, c);
    return {
      onSuccess: function () {
        b[a] = iz;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = jz;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function hz(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function iz(a) {
    a();
  }
  function jz(a, b) {
    b();
  }
  var mz = function (a, b) {
    for (var c = [], d = 0; d < jf.length; d++)
      if (a[d]) {
        var e = jf[d];
        var f = Cy(b.wc);
        try {
          var g = ez(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[Ge.xa];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = lf[k];
            c.push({
              Rk: d,
              Jk: (m ? m.priorityOverride || 0 : 0) || Yx(e[Ge.xa], 1) || 0,
              execute: g,
            });
          } else kz(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(lz);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function lz(a, b) {
    var c,
      d = b.Jk,
      e = a.Jk;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.Rk,
        k = b.Rk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function kz(a, b) {
    if (Uj) {
      var c = function (d) {
        var e = b.isBlocked(jf[d]) ? "3" : "4",
          f = xf(jf[d][Ge.kk], b, []);
        f && f.length && c(f[0].index);
        cz(b.id, jf[d], e);
        var g = xf(jf[d][Ge.qk], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var pz = !1,
    nz;
  function Kz(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (R(93)) {
    }
    if (d === "gtm.js") {
      if (pz) return !1;
      pz = !0;
    }
    var e = !1,
      f = by(),
      g = Rc(a, null);
    if (
      !f.every(function (u) {
        return u({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    Sy(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Lz(g, e),
        An: [],
        logMacroError: function () {
          U(6);
          tl(0);
        },
        cachedModelValues: Mz(),
        wc: new yy(function () {
          if (R(93)) {
          }
          k && k.apply(k, Array.prototype.slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    R(108) && Uj && (n.reportMacroDiscrepancy = Xy);
    R(93) && ix(n.id, n.name);
    var p = Ef(n);
    R(93) && jx(n.id, n.name);
    e && (p = Nz(p));
    if (R(93)) {
    }
    var q = mz(p, n),
      r = !1;
    Dy(n.wc);
    (d !== "gtm.js" && d !== "gtm.sync") || Jy();
    return Oz(p, q) || r;
  }
  function Mz() {
    var a = {};
    a.event = sj("event", 1);
    a.ecommerce = sj("ecommerce", 1);
    a.gtm = sj("gtm");
    a.eventModel = sj("eventModel");
    return a;
  }
  function Lz(a, b) {
    var c = iy();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[Ge.xa];
      if (!e || typeof e !== "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = pk();
      f = $x().getRestrictions(0, g);
      var k = a;
      b &&
        ((k = Rc(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (var m = aj[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function Nz(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(jf[c][Ge.xa]);
        if (Mi[d] || jf[c][Ge.Ml] !== void 0 || Yx(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Oz(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && jf[c] && !Ni[String(jf[c][Ge.xa])]) return !0;
    return !1;
  }
  var Pz = 0;
  function Qz(a) {
    return Vj
      ? R(104)
        ? a === void 0 || a === Nf.canonicalContainerId
          ? !0
          : !1
        : fk
        ? !1
        : !0
      : !1;
  }
  function Rz(a, b) {
    return arguments.length === 1 ? Sz("set", a) : Sz("set", a, b);
  }
  function Tz(a, b) {
    return arguments.length === 1 ? Sz("config", a) : Sz("config", a, b);
  }
  function Uz(a, b, c) {
    c = c || {};
    c[N.g.rc] = a;
    return Sz("event", b, c);
  }
  function Sz() {
    return arguments;
  }
  var Vz = function () {
    this.messages = [];
    this.j = [];
  };
  Vz.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  Vz.prototype.listen = function (a) {
    this.j.push(a);
  };
  Vz.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Vz.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function Wz(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Nf.canonicalContainerId;
    Xz().enqueue(a, b, c);
  }
  function Yz() {
    var a = Zz;
    Xz().listen(a);
  }
  function Xz() {
    var a = Li.mb;
    a || ((a = new Vz()), (Li.mb = a));
    return a;
  }
  var $z = {},
    aA = {};
  function bA(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { ni: void 0, Wh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.ni = tm(g, b)), e.ni)) {
          var k = lk();
          bb(
            k,
            (function (r) {
              return function (u) {
                return r.ni.destinationId === u;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = $z[g] || [];
        e.Wh = {};
        m.forEach(
          (function (r) {
            return function (u) {
              r.Wh[u] = !0;
            };
          })(e)
        );
        for (var n = ik(), p = 0; p < n.length; p++)
          if (e.Wh[n[p]]) {
            c = c.concat(lk());
            break;
          }
        var q = aA[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { Wm: c, Zm: d };
  }
  function cA(a) {
    gb($z, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function dA(a) {
    gb(aA, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var eA = "HA GF G UA AW DC MC".split(" "),
    fA = !1,
    gA = !1,
    hA = !1,
    iA = !1;
  function jA(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: bj() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var kA = void 0,
    lA = void 0;
  function mA(a, b, c) {
    var d = Rc(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && U(136);
    var e = Rc(b, null);
    Rc(c, e);
    Wz(Tz(ik()[0], e), a.eventId, d);
  }
  function nA(a) {
    for (var b = l([N.g.Oc, N.g.Db]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || vn.j[d];
      if (e) return e;
    }
  }
  var oA = [
      N.g.Oc,
      N.g.Db,
      N.g.nc,
      N.g.ib,
      N.g.pb,
      N.g.Ba,
      N.g.sa,
      N.g.Fa,
      N.g.Na,
      N.g.lb,
    ],
    pA = {
      config: function (a, b) {
        var c = jA(a, b);
        if (!(a.length < 2) && z(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Qc(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = tm(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!ek.Ke) {
                var m = rk(sk());
                if (Dk(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { jn: rk(n), Vm: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.jn), (g = q.Vm));
            Sy(c.eventId, "gtag.config");
            var r = e.destinationId,
              u = e.id !== r;
            if (u ? lk().indexOf(r) === -1 : ik().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[N.g.Rb]) {
                var v = nA(d);
                if (u)
                  oy(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var t = d;
                  kA ? mA(b, t, kA) : lA || (lA = Rc(t, null));
                } else
                  ly(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (U(128), g && U(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                lA
                  ? (mA(b, lA, x), (w = !1))
                  : ((!x[N.g.uc] && Pi && kA) || (kA = Rc(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              if (!R(53)) {
                var y = d;
                if (!hA && ((hA = !0), gA))
                  for (var B = l(oA), C = B.next(); !C.done; C = B.next())
                    if (y.hasOwnProperty(C.value)) {
                      rl("erc");
                      break;
                    }
              }
              Qz() && (Pz === 1 && (Ik.mcc = !1), (Pz = 2));
              R(52) || (ml = !0);
              if (Pi && !u && !d[N.g.uc]) {
                var D = iA;
                iA = !0;
                if (D) return;
              }
              fA || U(43);
              if (!b.noTargetGroup)
                if (u) {
                  dA(e.id);
                  var G = e.id,
                    K = d[N.g.Be] || "default";
                  K = String(K).split(",");
                  for (var F = 0; F < K.length; F++) {
                    var S = aA[K[F]] || [];
                    aA[K[F]] = S;
                    S.indexOf(G) < 0 && S.push(G);
                  }
                } else {
                  cA(e.id);
                  var M = e.id,
                    T = d[N.g.Be] || "default";
                  T = T.toString().split(",");
                  for (var ca = 0; ca < T.length; ca++) {
                    var da = $z[T[ca]] || [];
                    $z[T[ca]] = da;
                    da.indexOf(M) < 0 && da.push(M);
                  }
                }
              delete d[N.g.Be];
              var Z = b.eventMetadata || {};
              Z.hasOwnProperty("is_external_event") ||
                (Z.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = Z;
              delete d[N.g.xd];
              for (var Q = u ? [e.id] : lk(), pa = 0; pa < Q.length; pa++) {
                var oa = Q[pa];
                if (!R(128) || fk || !sb(oa, "siloed_")) {
                  var ja = d,
                    Ba = oa,
                    Ma = Rc(b, null),
                    ua = tm(Ba, Ma.isGtmEvent);
                  ua && vn.push("config", [ja], ua, Ma);
                }
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          U(39);
          var c = jA(a, b),
            d = a[1],
            e;
          if (R(126)) {
            var f = {},
              g = Ts(a[2]),
              k;
            for (k in g)
              if (g.hasOwnProperty(k)) {
                var m = g[k];
                f[k] =
                  k === N.g.be
                    ? Array.isArray(m)
                      ? NaN
                      : Number(m)
                    : k === N.g.ub
                    ? (Array.isArray(m) ? m : [m]).map(Us)
                    : Vs(m);
              }
            e = f;
          } else e = a[2];
          var n = e;
          b.fromContainerExecution || (n[N.g.O] && U(139), n[N.g.za] && U(140));
          d === "default"
            ? Xl(n)
            : d === "update"
            ? Zl(n, c)
            : d === "declare" && b.fromContainerExecution && Wl(n);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && z(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Qc(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Rc(e, null)),
            e[N.g.xd] && (g.eventCallback = e[N.g.xd]),
            e[N.g.ye] && (g.eventTimeout = e[N.g.ye]));
          var k = jA(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[N.g.rc];
          r === void 0 &&
            ((r = nj(N.g.rc, 2)), r === void 0 && (r = "default"));
          if (z(r) || Array.isArray(r)) {
            var u;
            u = b.isGtmEvent
              ? z(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var v = bA(u, b.isGtmEvent),
              t = v.Wm,
              w = v.Zm;
            if (w.length)
              for (var x = nA(q), y = 0; y < w.length; y++) {
                var B = tm(w[y], b.isGtmEvent);
                B &&
                  oy(B.destinationId, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = um(t, b.isGtmEvent);
          } else p = void 0;
          var C = p;
          if (C) {
            var D;
            !C.length ||
              ((D = b.eventMetadata) == null ? 0 : D.em_event) ||
              (gA = !0);
            Sy(m, c);
            for (var G = [], K = 0; K < C.length; K++) {
              var F = C[K],
                S = Rc(b, null);
              if (eA.indexOf(tk(F.prefix)) !== -1) {
                var M = Rc(d, null),
                  T = S.eventMetadata || {};
                T.hasOwnProperty("is_external_event") ||
                  (T.is_external_event = !S.fromContainerExecution);
                S.eventMetadata = T;
                delete M[N.g.xd];
                wn(c, M, F.id, S);
                Qz(T.source_canonical_id) &&
                  Pz === 0 &&
                  (Kk("mcc", "1"), (Pz = 1));
                R(52) || (ml = !0);
              }
              G.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            C.length > 0
              ? (g.eventModel[N.g.rc] = G.join())
              : delete g.eventModel[N.g.rc];
            fA || U(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[N.g.qc] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        U(53);
        if (a.length === 4 && z(a[1]) && z(a[2]) && Za(a[3])) {
          var c = tm(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            fA || U(43);
            var f = nA();
            if (
              !bb(lk(), function (k) {
                return c.destinationId === k;
              })
            )
              oy(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (eA.indexOf(tk(c.prefix)) !== -1) {
              R(52) || (ml = !0);
              jA(a, b);
              var g = {};
              Rc(((g[N.g.Bb] = d), (g[N.g.Pb] = e), g), null);
              xn(
                d,
                function (k) {
                  H(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          fA = !0;
          var c = jA(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && z(a[1]) && Za(a[2])) {
          if ((Kf(a[1], a[2]), U(74), a[1] === "all")) {
            U(75);
            var b = !1;
            try {
              b = a[2](nk(), "unknown", {});
            } catch (c) {}
            b || U(76);
          }
        } else U(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Qc(a[1])
          ? (c = Rc(a[1], null))
          : a.length === 3 &&
            z(a[1]) &&
            ((c = {}),
            Qc(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Rc(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = jA(a, b),
            e = d.eventId,
            f = d.priorityId;
          Rc(c, null);
          var g = Rc(c, null);
          vn.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    qA = { policy: !0 };
  var sA = function (a) {
    if (rA(a)) return a;
    this.value = a;
  };
  sA.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var rA = function (a) {
    return !a || Oc(a) !== "object" || Qc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  sA.prototype.getUntrustedMessageValue = sA.prototype.getUntrustedMessageValue;
  var tA = !1,
    uA = [];
  function vA() {
    if (!tA) {
      tA = !0;
      for (var a = 0; a < uA.length; a++) H(uA[a]);
    }
  }
  function wA(a) {
    tA ? H(a) : uA.push(a);
  }
  var xA = 0,
    yA = {},
    zA = [],
    AA = [],
    BA = !1,
    CA = !1;
  function DA(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  function EA(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return FA(a);
  }
  function GA(a, b) {
    if (!$a(b) || b < 0) b = 0;
    var c = Li[Ki.vb],
      d = 0,
      e = !1,
      f = void 0;
    f = A.setTimeout(function () {
      e || ((e = !0), a());
      f = void 0;
    }, b);
    return function () {
      var g = c ? c.subscribers : 1;
      ++d === g &&
        (f && (A.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
    };
  }
  function HA(a, b) {
    var c = a._clear || b.overwriteModelFields;
    gb(a, function (e, f) {
      e !== "_clear" && (c && qj(e), qj(e, f));
    });
    Yi || (Yi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = bj()), (a["gtm.uniqueEventId"] = d), qj("gtm.uniqueEventId", d));
    return Kz(a);
  }
  function IA(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (hb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function JA() {
    var a;
    if (AA.length) a = AA.shift();
    else if (zA.length) a = zA.shift();
    else return;
    var b;
    var c = a;
    if (BA || !IA(c.message)) b = c;
    else {
      BA = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = bj());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      zA.unshift(k, c);
      Vj && Ok();
      b = f;
    }
    return b;
  }
  function KA() {
    for (var a = !1, b; !CA && (b = JA()); ) {
      CA = !0;
      delete kj.eventModel;
      mj();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) CA = !1;
      else {
        e.fromContainerExecution && rj();
        try {
          if (Za(d))
            try {
              d.call(oj);
            } catch (v) {}
          else if (Array.isArray(d)) {
            if (z(d[0])) {
              var f = d[0].split("."),
                g = f.pop(),
                k = d.slice(1),
                m = nj(f.join("."), 2);
              if (m != null)
                try {
                  m[g].apply(m, k);
                } catch (v) {}
            }
          } else {
            var n = void 0;
            if (hb(d))
              a: {
                if (d.length && z(d[0])) {
                  var p = pA[d[0]];
                  if (p && (!e.fromContainerExecution || !qA[d[0]])) {
                    n = p(d, e);
                    break a;
                  }
                }
                n = void 0;
              }
            else n = d;
            n && (a = HA(n, e) || a);
          }
        } finally {
          e.fromContainerExecution && mj(!0);
          var q = d["gtm.uniqueEventId"];
          if (typeof q === "number") {
            for (var r = yA[String(q)] || [], u = 0; u < r.length; u++)
              AA.push(LA(r[u]));
            r.length && AA.sort(DA);
            delete yA[String(q)];
            q > xA && (xA = q);
          }
          CA = !1;
        }
      }
    }
    return !a;
  }
  function MA() {
    if (R(93)) {
      var a = !ej.H;
    }
    var b = KA();
    if (R(93)) {
    }
    try {
      var c = nk(),
        d = A[Ki.vb].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function Zz(a) {
    if (xA < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      yA[b] = yA[b] || [];
      yA[b].push(a);
    } else
      AA.push(LA(a)),
        AA.sort(DA),
        H(function () {
          CA || KA();
        });
  }
  function LA(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  function NA() {
    function a(f) {
      var g = {};
      if (rA(f)) {
        var k = f;
        f = rA(k) ? k.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return { message: f, messageContext: g };
    }
    var b = gc(Ki.vb, []),
      c = (Li[Ki.vb] = Li[Ki.vb] || {});
    c.pruned === !0 && U(83);
    yA = Xz().get();
    Yz();
    uy(function () {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var f = {};
        b.push(((f.event = "gtm.dom"), f));
      }
    });
    wA(function () {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var f = {};
        b.push(((f.event = "gtm.load"), f));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function () {
      var f;
      if (Li.SANDBOXED_JS_SEMAPHORE > 0) {
        f = [];
        for (var g = 0; g < arguments.length; g++) f[g] = new sA(arguments[g]);
      } else f = [].slice.call(arguments, 0);
      var k = f.map(function (q) {
        return a(q);
      });
      zA.push.apply(zA, k);
      var m = d.apply(b, f),
        n = Math.max(100, Number("1000") || 300);
      if (this.length > n)
        for (U(4), c.pruned = !0; this.length > n; ) this.shift();
      var p = typeof m !== "boolean" || m;
      return KA() && p;
    };
    var e = b.slice(0).map(function (f) {
      return a(f);
    });
    zA.push.apply(zA, e);
    if (!ej.H) {
      if (R(93)) {
      }
      H(MA);
    }
  }
  var FA = function (a) {
    return A[Ki.vb].push(a);
  };
  var OA = /^(https?:)?\/\//;
  function iB() {}
  var jB = function () {};
  jB.prototype.toString = function () {
    return "undefined";
  };
  var kB = new jB();
  var mB = function () {
      (Li.rm = Li.rm || {})[pk()] = function (a) {
        if (lB.hasOwnProperty(a)) return lB[a];
      };
    },
    pB = function (a, b, c) {
      if (a instanceof nB) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(bj());
        oB[g] = [f, c];
        a = e.call(d, g);
        b = Ya;
      }
      return { Bk: a, onSuccess: b };
    },
    qB = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        U(a ? 134 : 135);
        var d = oB[c];
        if (d && typeof d[b] === "function") d[b]();
        oB[c] = void 0;
      };
    },
    nB = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === kB ? b : a[d]);
        return c.join("");
      };
    };
  nB.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var lB = {},
    oB = {};
  function rB(a, b) {
    function c(g) {
      var k = Gj(g),
        m = Aj(k, "protocol"),
        n = Aj(k, "host", !0),
        p = Aj(k, "port"),
        q = Aj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function sB(a) {
    return tB(a) ? 1 : 0;
  }
  function tB(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Rc(a, {});
        Rc({ arg1: c[d], any_of: void 0 }, e);
        if (sB(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return mg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < ig.length; g++) {
                var k = ig[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return jg(b, c);
      case "_eq":
        return ng(b, c);
      case "_ge":
        return og(b, c);
      case "_gt":
        return qg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return pg(b, c);
      case "_lt":
        return rg(b, c);
      case "_re":
        return lg(b, c, a.ignore_case);
      case "_sw":
        return sg(b, c);
      case "_um":
        return rB(b, c);
    }
    return !1;
  }
  function uB() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function vB() {
    var a = [
      ["cv", R(132) ? uB() : "10"],
      ["rv", Ki.Bh],
      [
        "tc",
        jf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    Ki.Ne && a.push(["x", Ki.Ne]);
    fj() && a.push(["tag_exp", fj()]);
    return a;
  }
  var wB = {},
    xB = ((wB[1] = {}), (wB[2] = {}), (wB[3] = {}), (wB[4] = {}), wB);
  function yB(a) {
    switch (a) {
      case "script-src":
      case "script-src-elem":
        return 1;
      case "frame-src":
        return 4;
      case "connect-src":
        return 2;
      case "img-src":
        return 3;
    }
  }
  function zB() {
    R(49) &&
      Vj &&
      A.addEventListener("securitypolicyviolation", function (a) {
        if (a.disposition === "enforce") {
          var b = yB(a.effectiveDirective);
          if (b) {
            var c;
            var d;
            b: {
              try {
                var e = new URL(a.blockedURI);
                d = e.origin + e.pathname;
                break b;
              } catch (g) {}
              d = void 0;
            }
            var f = d;
            c = f ? xB[b][f] : void 0;
            c &&
              ((Pk[String(c.endpoint)] = !0),
              Kk("csp", Object.keys(Pk).join("~")));
          }
        }
      });
  }
  var AB = {},
    BB = {};
  function CB() {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  }
  function DB(a, b, c, d) {
    if (Uj) {
      var e = String(c) + b;
      AB[a] = AB[a] || [];
      AB[a].push(e);
      BB[a] = BB[a] || [];
      BB[a].push(d + b);
    }
  }
  function EB(a) {
    var b = a.eventId,
      c = a.dd,
      d = [],
      e = AB[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = BB[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete AB[b], delete BB[b]);
    return d;
  }
  function FB() {
    return !1;
  }
  function GB() {
    var a = {};
    return function (b, c, d) {};
  }
  function HB() {
    var a = IB;
    return function (b, c, d) {
      var e = d && d.event;
      (b === "__html" && R(97)) || JB(c);
      var f = sb(b, "__cvt_") ? void 0 : 1,
        g = new La();
      gb(c, function (r, u) {
        var v = dd(u, void 0, f);
        v === void 0 && u !== void 0 && U(44);
        g.set(r, v);
      });
      a.j.j.C = Cf();
      var k = {
        tk: Rf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        Re:
          e !== void 0
            ? function (r) {
                e.wc.Re(r);
              }
            : void 0,
        rb: function () {
          return b;
        },
        log: function () {},
        om: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        tn: !!Yx(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (FB()) {
        var m = GB(),
          n,
          p;
        k.Ya = {
          Ei: [],
          Se: {},
          Ib: function (r, u, v) {
            u === 1 && (n = r);
            u === 7 && (p = v);
            m(r, u, v);
          },
          wg: ah(),
        };
        k.log = function (r) {
          var u = ya.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: u });
        };
      }
      var q = Ae(a, k, [b, g]);
      a.j.j.C = void 0;
      q instanceof Aa && q.type === "return" && (q = q.data);
      return I(q, void 0, f);
    };
  }
  function JB(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Za(b) &&
      (a.gtmOnSuccess = function () {
        H(b);
      });
    Za(c) &&
      (a.gtmOnFailure = function () {
        H(c);
      });
  }
  function KB(a) {}
  KB.F = "internal.addAdsClickIds";
  function LB(a, b) {
    var c = this;
  }
  LB.R = "addConsentListener";
  var MB = !1;
  function NB(a) {
    for (var b = 0; b < a.length; ++b)
      if (MB)
        try {
          a[b]();
        } catch (c) {
          U(77);
        }
      else a[b]();
  }
  function OB(a, b, c) {
    var d = this,
      e;
    return e;
  }
  OB.F = "internal.addDataLayerEventListener";
  function PB(a, b, c) {}
  PB.R = "addDocumentEventListener";
  function QB(a, b, c, d) {}
  QB.R = "addElementEventListener";
  function RB(a) {
    return a.D.j;
  }
  function SB(a) {}
  SB.R = "addEventCallback";
  var TB = function (a) {
      return typeof a === "string" ? a : String(bj());
    },
    WB = function (a, b) {
      UB(a, "init", !1) || (VB(a, "init", !0), b());
    },
    UB = function (a, b, c) {
      var d = XB(a);
      return ob(d, b, c);
    },
    YB = function (a, b, c, d) {
      var e = XB(a),
        f = ob(e, b, d);
      e[b] = c(f);
    },
    VB = function (a, b, c) {
      XB(a)[b] = c;
    },
    XB = function (a) {
      Li.hasOwnProperty("autoEventsSettings") || (Li.autoEventsSettings = {});
      var b = Li.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    ZB = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Bc(a, "className"),
        "gtm.elementId": a.for || sc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Bc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Bc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    };
  function hC(a) {}
  hC.F = "internal.addFormAbandonmentListener";
  function iC(a, b, c, d) {}
  iC.F = "internal.addFormData";
  var jC = {},
    kC = [],
    lC = {},
    mC = 0,
    nC = 0;
  function uC(a, b) {}
  uC.F = "internal.addFormInteractionListener";
  function BC(a, b) {}
  BC.F = "internal.addFormSubmitListener";
  function GC(a) {}
  GC.F = "internal.addGaSendListener";
  function HC(a) {
    if (!a) return {};
    var b = a.om;
    return wy(b.type, b.index, b.name);
  }
  function IC(a) {
    return a ? { originatingEntity: HC(a) } : {};
  }
  var KC = function (a, b, c) {
      JC().updateZone(a, b, c);
    },
    MC = function (a, b, c, d, e, f) {
      var g = JC();
      c = c && rb(c, LC);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, nk(), k)) {
          var p = n,
            q = a,
            r = d,
            u = e,
            v = f;
          if (sb(p, "GTM-"))
            ly(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var t = Sz("js", mb());
            ly(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: u, inheritParentConfig: v };
            R(137) || Wz(t, q, w);
            Wz(Tz(p, r), q, w);
          }
        }
      }
      return k;
    },
    JC = function () {
      var a = Li.zones;
      a || (a = Li.zones = new NC());
      return a;
    },
    OC = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    LC = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    NC = function () {
      this.j = {};
      this.C = {};
      this.H = 0;
    };
  h = NC.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.mi], b)) return !1;
    for (var e = 0; e < c.Cf.length; e++) if (this.C[c.Cf[e]].Pd(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Cf.length; f++) {
      var g = this.C[c.Cf[f]];
      g.Pd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.mi], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].H(m, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.H);
    this.C[c] = new PC(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.C[a];
    d && d.K(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && Li[a]) || (!d && yk(a)) || (d && d.mi !== b)) return !1;
    if (d) return d.Cf.push(c), !1;
    this.j[a] = { mi: b, Cf: [c] };
    return !0;
  };
  var PC = function (a, b) {
    this.C = null;
    this.j = [{ eventId: a, Pd: !0 }];
    if (b) {
      this.C = {};
      for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
    }
  };
  PC.prototype.K = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.Pd !== b && this.j.push({ eventId: a, Pd: b }));
  };
  PC.prototype.Pd = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].Pd;
    return !1;
  };
  PC.prototype.H = function (a, b) {
    b = b || [];
    if (!this.C || OC[a] || this.C[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
    return !1;
  };
  function QC(a) {
    var b = Li.zones;
    return b
      ? b.getIsAllowedFn(ik(), a)
      : function () {
          return !0;
        };
  }
  function RC() {
    ay(pk(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = Li.zones;
      return c ? c.isActive(ik(), b) : !0;
    });
    Zx(pk(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return QC(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var SC = function (a, b) {
    this.tagId = a;
    this.Ue = b;
  };
  function TC(a, b) {
    var c = this,
      d = void 0;
    var e = function (v) {
      Zx(
        v,
        function (t) {
          for (
            var w = $x().getExternalRestrictions(0, pk()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(t)) return !1;
          }
          return !0;
        },
        !0
      );
      ay(
        v,
        function (t) {
          for (
            var w = $x().getExternalRestrictions(1, pk()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(t)) return !1;
          }
          return !0;
        },
        !0
      );
      k && k(new SC(a, v));
    };
    J(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = I(b, this.D, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    d = p ? kk(a) : a;
    NB([
      function () {
        return L(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (zk(a)) return d;
    } else if (yk(a)) return d;
    var q = 6,
      r = RB(this);
    n && (q = 7);
    r.rb() === "__zone" && (q = 1);
    var u = { source: q, fromContainerExecution: !0, siloed: p };
    m ? oy(a, g, u, e) : ly(a, g, !sb(a, "GTM-"), u, e);
    k &&
      r.rb() === "__zone" &&
      MC(Number.MIN_SAFE_INTEGER, [a], null, {}, HC(RB(this)));
    return d;
  }
  TC.F = "internal.loadGoogleTag";
  function UC(a) {
    return new Wc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Wc)
        return new Wc("", function () {
          var d = ya.apply(0, arguments),
            e = this,
            f = Rc(RB(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Ha(this.D);
          k.j = f;
          return c.tb.apply(c, [k].concat(ta(g)));
        });
    });
  }
  function VC(a, b, c) {
    var d = this;
  }
  VC.F = "internal.addGoogleTagRestriction";
  var WC = {},
    XC = [];
  function dD(a, b) {}
  dD.F = "internal.addHistoryChangeListener";
  function eD(a, b, c) {}
  eD.R = "addWindowEventListener";
  function fD(a, b) {
    return !0;
  }
  fD.R = "aliasInWindow";
  function gD(a, b, c) {}
  gD.F = "internal.appendRemoteConfigParameter";
  function hD(a) {
    var b;
    return b;
  }
  hD.R = "callInWindow";
  function iD(a) {}
  iD.R = "callLater";
  function jD(a) {}
  jD.F = "callOnDomReady";
  function kD(a) {}
  kD.F = "callOnWindowLoad";
  function lD(a, b) {
    var c;
    return c;
  }
  lD.F = "internal.computeGtmParameter";
  function mD(a, b) {
    var c = this;
  }
  mD.F = "internal.consentScheduleFirstTry";
  function nD(a, b) {
    var c = this;
  }
  nD.F = "internal.consentScheduleRetry";
  function oD(a) {
    var b;
    return b;
  }
  oD.F = "internal.copyFromCrossContainerData";
  function pD(a, b) {
    var c;
    J(this.getName(), ["key:!string", "dataLayerVersion:?number"], arguments),
      L(this, "read_data_layer", a),
      (c = (b || 2) !== 2 ? nj(a, 1) : pj(a, [A, E]));
    var d = dd(c, this.D, sb(RB(this).rb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && U(45);
    return d;
  }
  pD.R = "copyFromDataLayer";
  function qD(a) {
    var b = void 0;
    return b;
  }
  qD.F = "internal.copyFromDataLayerCache";
  function rD(a) {
    var b;
    return b;
  }
  rD.R = "copyFromWindow";
  function sD(a) {
    var b = void 0;
    return dd(b, this.D, 1);
  }
  sD.F = "internal.copyKeyFromWindow";
  var tD = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.j = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = Rc(c.eventMetadata || {}, {});
  };
  tD.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && z(d) && R(85))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.j[a] = d);
  };
  var Fu = function (a, b, c) {
    var d = a.target.destinationId;
    R(128) && !fk && (d = tk(d));
    var e = st(d);
    return e && e[b] !== void 0 ? e[b] : c;
  };
  function uD(a, b) {
    var c;
    return c;
  }
  uD.F = "internal.copyPreHit";
  function vD(a, b) {
    var c = null;
    J(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    L(this, "access_globals", "readwrite", b);
    var d = [A, E],
      e = a.split("."),
      f = ub(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !Za(k)) return null;
    if (k) return dd(k, this.D, 2);
    var m;
    k = function () {
      if (!Za(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = ub(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return dd(c, this.D, 2);
  }
  vD.R = "createArgumentsQueue";
  function wD(a) {
    return dd(
      function (c) {
        var d = Fy();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = Fy(),
                n = m && m.getByName && m.getByName(f);
              return Gn(A.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.D,
      1
    );
  }
  wD.F = "internal.createGaCommandQueue";
  function xD(a) {
    return dd(
      function () {
        if (!Za(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.D,
      sb(RB(this).rb(), "__cvt_") ? 2 : 1
    );
  }
  xD.R = "createQueue";
  function yD(a, b) {
    var c = null;
    J(this.getName(), ["pattern:!string", "flags:?string"], arguments);
    try {
      var d = (b || "")
        .split("")
        .filter(function (e) {
          return "ig".indexOf(e) >= 0;
        })
        .join("");
      c = new ad(new RegExp(a, d));
    } catch (e) {}
    return c;
  }
  yD.F = "internal.createRegex";
  function zD() {
    var a = {};
    return a;
  }
  function AD(a) {}
  AD.F = "internal.declareConsentState";
  function BD(a) {
    var b = "";
    return b;
  }
  BD.F = "internal.decodeUrlHtmlEntities";
  function CD(a, b, c) {
    var d;
    return d;
  }
  CD.F = "internal.decorateUrlWithGaCookies";
  function DD() {}
  DD.F = "internal.deferCustomEvents";
  function ED(a) {
    var b;
    return b;
  }
  ED.F = "internal.detectUserProvidedData";
  function JD(a, b) {
    return b;
  }
  JD.F = "internal.enableAutoEventOnClick";
  var MD = function (a) {
      if (!KD) {
        var b = function () {
          var c = E.body;
          if (c)
            if (LD)
              new MutationObserver(function () {
                for (var e = 0; e < KD.length; e++) H(KD[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              qc(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  H(function () {
                    d = !1;
                    for (var e = 0; e < KD.length; e++) H(KD[e]);
                  }));
              });
            }
        };
        KD = [];
        E.body ? b() : H(b);
      }
      KD.push(a);
    },
    LD = !!A.MutationObserver,
    KD;
  var ND = function (a) {
      a.has("PollingId") &&
        (A.clearInterval(Number(a.get("PollingId"))), a.remove("PollingId"));
    },
    PD = function (a, b, c, d) {
      function e() {
        if (!ut(a.target)) {
          b.has("RecentOnScreen") ||
            b.set("RecentOnScreen", "" + OD().toString());
          b.has("FirstOnScreen") ||
            b.set("FirstOnScreen", "" + OD().toString());
          var g = 0;
          b.has("TotalVisibleTime") && (g = Number(b.get("TotalVisibleTime")));
          g += 100;
          b.set("TotalVisibleTime", "" + g.toString());
          if (g >= c) {
            var k = ZB(a.target, "gtm.elementVisibility", [b.uid]),
              m = wt(a.target);
            k["gtm.visibleRatio"] = Math.round(m * 1e3) / 10;
            k["gtm.visibleTime"] = c;
            k["gtm.visibleFirstTime"] = Number(b.get("FirstOnScreen"));
            k["gtm.visibleLastTime"] = Number(b.get("RecentOnScreen"));
            FA(k);
            d();
          }
        }
      }
      if (!b.has("PollingId") && (c === 0 && e(), !b.has("HasFired"))) {
        var f = A.setInterval(e, 100);
        b.set("PollingId", String(f));
      }
    },
    OD = function () {
      var a = Number(nj("gtm.start", 2)) || 0;
      return nb() - a;
    },
    QD = function (a, b) {
      this.element = a;
      this.uid = b;
    };
  QD.prototype.has = function (a) {
    return !!this.element.dataset["gtmVis" + a + this.uid];
  };
  QD.prototype.get = function (a) {
    return this.element.dataset["gtmVis" + a + this.uid];
  };
  QD.prototype.set = function (a, b) {
    this.element.dataset["gtmVis" + a + this.uid] = b;
  };
  QD.prototype.remove = function (a) {
    delete this.element.dataset["gtmVis" + a + this.uid];
  };
  function RD(a, b) {
    var c = function (v) {
        var t = new QD(v.target, p);
        v.intersectionRatio >= n
          ? t.has("HasFired") ||
            PD(
              v,
              t,
              m,
              q === "ONCE"
                ? function () {
                    for (var w = 0; w < r.length; w++) {
                      var x = new QD(r[w], p);
                      x.set("HasFired", "1");
                      ND(x);
                    }
                    At(u);
                    if (k) {
                      var y = d;
                      if (KD)
                        for (var B = 0; B < KD.length; B++)
                          KD[B] === y && KD.splice(B, 1);
                    }
                  }
                : function () {
                    t.set("HasFired", "1");
                    ND(t);
                  }
            )
          : (ND(t),
            q === "MANY_PER_ELEMENT" &&
              t.has("HasFired") &&
              (t.remove("HasFired"), t.remove("TotalVisibleTime")),
            t.remove("RecentOnScreen"));
      },
      d = function () {
        var v = !1,
          t = null;
        if (f === "CSS") {
          try {
            t = Jh(g);
          } catch (B) {}
          v = !!t && r.length !== t.length;
        } else if (f === "ID") {
          var w = E.getElementById(g);
          w && ((t = [w]), (v = r.length !== 1 || r[0] !== w));
        }
        t || ((t = []), (v = r.length > 0));
        if (v) {
          for (var x = 0; x < r.length; x++) ND(new QD(r[x], p));
          r = [];
          for (var y = 0; y < t.length; y++) r.push(t[y]);
          u >= 0 && At(u);
          r.length > 0 && (u = Dt(c, r, [n]));
        }
      };
    J(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    L(this, "detect_element_visibility_events");
    var e = a ? I(a) : {},
      f = e.selectorType,
      g;
    switch (f) {
      case "ID":
        g = String(e.id);
        break;
      case "CSS":
        g = String(e.selector);
        break;
      default:
        throw Error(
          "Unrecognized element selector type " +
            f +
            ". Must be one of 'ID' or 'CSS'."
        );
    }
    var k = !!e.useDomChangeListener,
      m = Number(e.onScreenDuration) || 0,
      n = (Number(e.onScreenRatio) || 50) / 100,
      p = TB(b),
      q = e.firingFrequency,
      r = [],
      u = -1;
    d();
    k && MD(d);
    return b;
  }
  RD.F = "internal.enableAutoEventOnElementVisibility";
  function SD() {}
  SD.F = "internal.enableAutoEventOnError";
  var TD = {},
    UD = [],
    VD = {},
    WD = 0,
    XD = 0;
  function cE(a, b) {
    var c = this;
    return b;
  }
  cE.F = "internal.enableAutoEventOnFormInteraction";
  function hE(a, b) {
    var c = this;
    return b;
  }
  hE.F = "internal.enableAutoEventOnFormSubmit";
  function mE() {
    var a = this;
  }
  mE.F = "internal.enableAutoEventOnGaSend";
  var nE = {},
    oE = [];
  function vE(a, b) {
    var c = this;
    return b;
  }
  vE.F = "internal.enableAutoEventOnHistoryChange";
  var wE = ["http://", "https://", "javascript:", "file://"];
  function AE(a, b) {
    var c = this;
    return b;
  }
  AE.F = "internal.enableAutoEventOnLinkClick";
  var BE, CE;
  function NE(a, b) {
    var c = this;
    return b;
  }
  NE.F = "internal.enableAutoEventOnScroll";
  function OE(a) {
    return function () {
      if (a.limit && a.ii >= a.limit) a.ug && A.clearInterval(a.ug);
      else {
        a.ii++;
        var b = nb();
        FA({
          event: a.eventName,
          "gtm.timerId": a.ug,
          "gtm.timerEventNumber": a.ii,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.Qk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Qk,
          "gtm.triggers": a.Gn,
        });
      }
    };
  }
  function PE(a, b) {
    return b;
  }
  PE.F = "internal.enableAutoEventOnTimer";
  var Vb = wa(["data-gtm-yt-inspected-"]),
    RE = ["www.youtube.com", "www.youtube-nocookie.com"],
    SE,
    TE = !1;
  function cF(a, b) {
    var c = this;
    return b;
  }
  cF.F = "internal.enableAutoEventOnYouTubeActivity";
  function dF(a, b) {
    J(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var c = b ? I(b) : {},
      d = a,
      e = !1;
    return e;
  }
  dF.F = "internal.evaluateBooleanExpression";
  var eF;
  function fF(a) {
    var b = !1;
    return b;
  }
  fF.F = "internal.evaluateMatchingRules";
  var gF = function (a) {
      switch (a) {
        case "page_view":
          return [Ls, Ks, Bs, Dv, kw, Yv, Lv, Tv];
        case "call_conversion":
          return [Ks, Dv];
        case "conversion":
          return [
            Hs,
            Ks,
            gw,
            qw,
            dw,
            pw,
            nw,
            mw,
            lw,
            kw,
            Yv,
            Xv,
            Vv,
            Uv,
            Sv,
            Hv,
            Gv,
            Wv,
            Lv,
            cw,
            Rv,
            Qv,
            Ov,
            fw,
            bw,
            Jv,
            Ls,
            Is,
            aw,
            Mv,
            jw,
            Tv,
            ew,
            Kv,
            Fv,
            $v,
            Pv,
            hw,
            iw,
            Iv,
          ];
        case "landing_page":
          return [
            Hs,
            Ks,
            gw,
            qw,
            Yv,
            Js,
            Lv,
            cw,
            fw,
            Is,
            Ls,
            aw,
            jw,
            Tv,
            ew,
            Fv,
            Iv,
          ];
        case "remarketing":
          return [
            Hs,
            Ks,
            gw,
            qw,
            dw,
            pw,
            nw,
            mw,
            lw,
            kw,
            Yv,
            Xv,
            Sv,
            Wv,
            Lv,
            cw,
            Rv,
            fw,
            Is,
            Ls,
            aw,
            Mv,
            jw,
            Tv,
            ew,
            Fv,
            hw,
            Iv,
          ];
        case "user_data_lead":
          return [
            Hs,
            Ks,
            gw,
            qw,
            pw,
            kw,
            Yv,
            Wv,
            Lv,
            Js,
            cw,
            Ov,
            fw,
            Is,
            Ls,
            aw,
            Mv,
            jw,
            Tv,
            ew,
            Fv,
            Iv,
          ];
        case "user_data_web":
          return [
            Hs,
            Ks,
            gw,
            qw,
            pw,
            kw,
            Yv,
            Wv,
            Lv,
            Js,
            cw,
            Ov,
            fw,
            Is,
            Ls,
            aw,
            Mv,
            jw,
            Tv,
            ew,
            Kv,
            Fv,
            Iv,
          ];
        default:
          return [
            Hs,
            Ks,
            gw,
            qw,
            dw,
            pw,
            nw,
            mw,
            lw,
            kw,
            Yv,
            Xv,
            Vv,
            Uv,
            Sv,
            Hv,
            Gv,
            Wv,
            Lv,
            cw,
            Rv,
            Qv,
            Ov,
            fw,
            bw,
            Jv,
            Is,
            Ls,
            aw,
            Mv,
            jw,
            Tv,
            ew,
            Fv,
            $v,
            Pv,
            hw,
            iw,
            Iv,
          ];
      }
    },
    hF = function (a) {
      for (
        var b = gF(a.metadata.hit_type), c = 0;
        c < b.length && (b[c](a), !a.isAborted);
        c++
      );
    },
    iF = function (a, b, c, d) {
      var e = new tD(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = nb();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    jF = function (a, b, c, d) {
      function e(u, v) {
        for (var t = l(k), w = t.next(); !w.done; w = t.next()) {
          var x = w.value;
          x.isAborted = !1;
          x.metadata.speculative = !0;
          x.metadata.consent_updated = !0;
          x.metadata.event_start_timestamp_ms = nb();
          x.metadata.consent_event_id = u;
          x.metadata.consent_priority_id = v;
        }
      }
      function f(u) {
        for (var v = {}, t = 0; t < k.length; v = { Wa: void 0 }, t++)
          if (((v.Wa = k[t]), !u || u(v.Wa.metadata.hit_type)))
            if (
              !v.Wa.metadata.consent_updated ||
              v.Wa.metadata.hit_type === "page_view" ||
              W(q)
            )
              hF(k[t]),
                v.Wa.metadata.speculative ||
                  v.Wa.isAborted ||
                  (Xx(v.Wa),
                  v.Wa.metadata.hit_type === "page_view" &&
                    v.Wa.j[N.g.Wf] === void 0 &&
                    r === void 0 &&
                    (r = nm(
                      hm.Pe,
                      (function (w) {
                        return function () {
                          W(N.g.O) &&
                            ((w.Wa.metadata.user_id_updated = !0),
                            (w.Wa.metadata.consent_updated = !1),
                            (w.Wa.j[N.g.fc] = void 0),
                            f(function (x) {
                              return x === "page_view";
                            }),
                            (w.Wa.metadata.user_id_updated = !1),
                            om(hm.Pe, r),
                            (r = void 0));
                        };
                      })(v)
                    )));
      }
      var g =
        d.isGtmEvent && a === ""
          ? { id: "", prefix: "", destinationId: "", ids: [] }
          : tm(a, d.isGtmEvent);
      if (g) {
        var k = [];
        if (d.eventMetadata.hit_type_override) {
          var m = d.eventMetadata.hit_type_override;
          Array.isArray(m) || (m = [m]);
          (R(65) || R(66) || R(67) || R(68) || R(69)) &&
            m.indexOf("conversion") >= 0 &&
            m.indexOf("user_data_web") < 0 &&
            m.push("user_data_web");
          for (var n = 0; n < m.length; n++) {
            var p = iF(m[n], g, b, d);
            p.metadata.speculative = !1;
            k.push(p);
          }
        } else
          b === N.g.da &&
            (R(22)
              ? k.push(iF("page_view", g, b, d))
              : k.push(iF("landing_page", g, b, d))),
            k.push(iF("conversion", g, b, d)),
            k.push(iF("user_data_lead", g, b, d)),
            k.push(iF("user_data_web", g, b, d)),
            k.push(iF("remarketing", g, b, d));
        var q = [N.g.N, N.g.O],
          r = void 0;
        cm(function () {
          f();
          var u = R(26) && !W([N.g.za]);
          if (!W(q) || u) {
            var v = q;
            u && (v = [].concat(ta(v), [N.g.za]));
            bm(function (t) {
              var w, x, y;
              w = t.consentEventId;
              x = t.consentPriorityId;
              y = t.consentTypes;
              e(w, x);
              y && y.length === 1 && y[0] === N.g.za
                ? f(function (B) {
                    return B === "remarketing";
                  })
                : f();
            }, v);
          }
        }, q);
      }
    };
  function NF() {
    return So(7) && So(9) && So(10);
  }
  function IG(a, b, c, d) {}
  IG.F = "internal.executeEventProcessor";
  function JG(a) {
    var b;
    return dd(b, this.D, 1);
  }
  JG.F = "internal.executeJavascriptString";
  function KG(a) {
    var b;
    return b;
  }
  function LG(a) {
    var b = {};
    return dd(b);
  }
  LG.F = "internal.getAdsCookieWritingOptions";
  function MG(a) {
    var b = !1;
    return b;
  }
  MG.F = "internal.getAllowAdPersonalization";
  function NG(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  NG.F = "internal.getAuid";
  var OG = null;
  function PG() {
    var a = new La();
    return a;
  }
  PG.R = "getContainerVersion";
  function QG(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  QG.R = "getCookieValues";
  function RG() {
    return vl();
  }
  RG.F = "internal.getCountryCode";
  function SG() {
    var a = [];
    return dd(a);
  }
  SG.F = "internal.getDestinationIds";
  function TG(a) {
    var b = new La();
    return b;
  }
  TG.F = "internal.getDeveloperIds";
  function UG(a, b) {
    var c = null;
    return c;
  }
  UG.F = "internal.getElementAttribute";
  function VG(a) {
    var b = null;
    return b;
  }
  VG.F = "internal.getElementById";
  function WG(a) {
    var b = "";
    return b;
  }
  WG.F = "internal.getElementInnerText";
  function XG(a, b) {
    var c = null;
    return c;
  }
  XG.F = "internal.getElementProperty";
  function YG(a) {
    var b;
    return b;
  }
  YG.F = "internal.getElementValue";
  function ZG(a) {
    var b = 0;
    return b;
  }
  ZG.F = "internal.getElementVisibilityRatio";
  function $G(a) {
    var b = null;
    return b;
  }
  $G.F = "internal.getElementsByCssSelector";
  function aH(a) {
    var b;
    J(this.getName(), ["keyPath:!string"], arguments);
    L(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = RB(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
            for (var v = r[u].split("."), t = 0; t < v.length; t++)
              n.push(v[t]), t !== v.length - 1 && n.push(m);
            u !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = l(n), B = y.next();
          !B.done;
          B = y.next()
        ) {
          var C = B.value;
          C === m
            ? (w.push(x), (x = ""))
            : (x = C === g ? x + "\\" : C === k ? x + "." : x + C);
        }
        x && w.push(x);
        for (var D = l(w), G = D.next(); !G.done; G = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[G.value];
        }
        c = f;
      } else c = void 0;
    }
    b = dd(c, this.D, 1);
    return b;
  }
  aH.F = "internal.getEventData";
  var bH = {};
  bH.enableAWFledge = R(31);
  bH.enableAdsConversionValidation = R(16);
  bH.enableAdsSupernovaParams = R(27);
  bH.enableAutoPhoneAndAddressDetection = R(29);
  bH.enableAutoPiiOnPhoneAndAddress = R(30);
  bH.enableCachedEcommerceData = R(37);
  bH.enableCloudRecommentationsErrorLogging = R(38);
  bH.enableCloudRecommentationsSchemaIngestion = R(39);
  bH.enableCloudRetailInjectPurchaseMetadata = R(41);
  bH.enableCloudRetailLogging = R(40);
  bH.enableCloudRetailPageCategories = R(42);
  bH.enableConsentDisclosureActivity = R(44);
  bH.enableDCFledge = R(50);
  bH.enableDataLayerSearchExperiment = R(117);
  bH.enableDecodeUri = R(85);
  bH.enableDeferAllEnhancedMeasurement = R(51);
  bH.enableFormSkipValidation = R(80);
  bH.enableGa4OutboundClicksFix = R(88);
  bH.enableGaAdsConversions = R(109);
  bH.enableMerchantRenameForBasketData = R(103);
  bH.enableUnsiloedModeGtmTags = R(129);
  bH.enableUrlDecodeEventUsage = R(131);
  bH.enableZoneConfigInChildContainers = R(134);
  bH.useEnableAutoEventOnFormApis = R(146);
  bH.autoPiiEligible = Al();
  function cH() {
    return dd(bH);
  }
  cH.F = "internal.getFlags";
  function dH() {
    return new ad(kB);
  }
  dH.F = "internal.getHtmlId";
  function eH(a) {
    var b;
    return b;
  }
  eH.F = "internal.getIframingState";
  function fH(a, b) {
    var c = {};
    return dd(c);
  }
  fH.F = "internal.getLinkerValueFromLocation";
  function gH() {
    var a = new La();
    return a;
  }
  gH.F = "internal.getPrivacyStrings";
  function hH(a, b) {
    var c;
    return c;
  }
  hH.F = "internal.getProductSettingsParameter";
  function iH(a, b) {
    var c;
    return c;
  }
  iH.R = "getQueryParameters";
  function jH(a, b) {
    var c;
    return c;
  }
  jH.R = "getReferrerQueryParameters";
  function kH(a) {
    var b = "";
    J(this.getName(), ["component:?string"], arguments),
      L(this, "get_referrer", a),
      (b = Cj(Gj(E.referrer), a));
    return b;
  }
  kH.R = "getReferrerUrl";
  function lH() {
    return wl();
  }
  lH.F = "internal.getRegionCode";
  function mH(a, b) {
    var c;
    return c;
  }
  mH.F = "internal.getRemoteConfigParameter";
  function nH() {
    var a = new La();
    a.set("width", 0);
    a.set("height", 0);
    return a;
  }
  nH.F = "internal.getScreenDimensions";
  function oH() {
    var a = "";
    return a;
  }
  oH.F = "internal.getTopSameDomainUrl";
  function pH() {
    var a = "";
    return a;
  }
  pH.F = "internal.getTopWindowUrl";
  function qH(a) {
    var b = "";
    return b;
  }
  qH.R = "getUrl";
  function rH() {
    L(this, "get_user_agent");
    return cc.userAgent;
  }
  rH.F = "internal.getUserAgent";
  function sH() {
    var a;
    return dd(a ? pv(a) : null);
  }
  sH.F = "internal.getUserAgentClientHints";
  function AH() {
    return (A.gaGlobal = A.gaGlobal || {});
  }
  function BH() {
    var a = AH();
    a.hid = a.hid || db();
    return a.hid;
  }
  function CH(a, b) {
    var c = AH();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function YH(a) {
    if (Iu(a) || hj()) a.j[N.g.Lj] = wl() || vl();
    !Iu(a) && hj() && (a.j[N.g.Uj] = "::");
  }
  function ZH(a) {
    if (R(81) && hj()) {
      Ls(a);
      Ms(a, "cpf", Ws(V(a.m, N.g.Fa)));
      var b = V(a.m, N.g.mc);
      Ms(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
      Ms(a, "cf", Ws(V(a.m, N.g.cb)));
      Ms(a, "cd", Dp(Vs(V(a.m, N.g.Na)), Vs(V(a.m, N.g.lb))));
    }
  }
  var oI = function (a) {
      this.H = a;
      this.j = "";
    },
    pI = function (a, b) {
      a.C = b;
      return a;
    },
    qI = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = l(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (F) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var u = p || [];
            if (Array.isArray(u))
              for (
                var v = Qc(q) ? q : {}, t = l(u), w = t.next();
                !w.done;
                w = t.next()
              )
                r(w.value, v);
          }
          var x = n.create_iframe,
            y = n.options,
            B = m.C;
          if (x && B) {
            var C = x || [];
            if (Array.isArray(C))
              for (
                var D = Qc(y) ? y : {}, G = l(C), K = G.next();
                !K.done;
                K = G.next()
              )
                B(K.value, D);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function rI(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var eJ = window,
    fJ = document,
    gJ = function (a) {
      var b = eJ._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        fJ.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && eJ["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = eJ.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(fJ.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return fJ.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function rJ(a) {
    gb(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[N.g.qb] || {};
    gb(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  function XJ(a, b) {}
  function YJ(a, b) {
    var c = function () {};
    return c;
  }
  function ZJ(a, b, c) {}
  var $J = YJ;
  var aK = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function bK(a, b, c) {
    var d = this;
    J(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? I(b) : {};
    NB([
      function () {
        return L(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? I(c) : {},
      g = RB(this);
    f.originatingEntity = HC(g);
    Wz(Tz(a, e), g.eventId, f);
  }
  bK.F = "internal.gtagConfig";
  function cK() {
    var a = {};
    return a;
  }
  function eK(a, b) {}
  eK.R = "gtagSet";
  function fK() {
    var a = {};
    return a;
  }
  function gK(a, b) {}
  gK.R = "injectHiddenIframe";
  var hK = CB();
  function iK(a, b, c, d, e) {
    var f = this;
    J(
      this.getName(),
      [
        "html:!*",
        "onSuccess:!Fn",
        "onFailure:!Fn",
        "useIframe:?boolean",
        "supportDocumentWrite:?boolean",
      ],
      arguments
    );
    var g = RB(this);
    d && hK(3), e && (hK(1), hK(2)), DB(g.eventId, g.rb(), hK(void 0), "p");
    if (d && e)
      throw Error("useIframe and supportDocumentWrite cannot both be true.");
    L(this, "unsafe_inject_arbitrary_html", d, e);
    var k = R(97)
        ? function () {
            return void b.invoke(f.D);
          }
        : I(b, this.D),
      m = R(97)
        ? function () {
            return void c.invoke(f.D);
          }
        : I(c, this.D),
      n = I(a, this.D, 1);
    jK(n, k, m, d, e, g);
  }
  var kK = function (a, b, c, d) {
      return function () {
        try {
          if (b.length > 0) {
            var e = b.shift(),
              f = kK(a, b, c, d),
              g = e;
            if (
              String(g.nodeName).toUpperCase() === "SCRIPT" &&
              g.type === "text/gtmscript"
            ) {
              var k = g.text || g.textContent || g.innerHTML || "",
                m = g.getAttribute("data-gtmsrc"),
                n = g.charset || "";
              m
                ? lc(m, f, d, { async: !1, id: e.id, text: k, charset: n }, a)
                : ((g = E.createElement("script")),
                  (g.async = !1),
                  (g.type = "text/javascript"),
                  (g.id = e.id),
                  (g.text = k),
                  (g.charset = n),
                  f && (g.onload = f),
                  a.insertBefore(g, null));
              m || f();
            } else if (
              e.innerHTML &&
              e.innerHTML.toLowerCase().indexOf("<script") >= 0
            ) {
              for (var p = []; e.firstChild; )
                p.push(e.removeChild(e.firstChild));
              a.insertBefore(e, null);
              kK(e, p, f, d)();
            } else a.insertBefore(e, null), f();
          } else c();
        } catch (q) {
          d();
        }
      };
    },
    jK = function (a, b, c, d, e, f) {
      if (E.body) {
        var g = pB(a, b, c);
        a = g.Bk;
        b = g.onSuccess;
        if (d) {
        } else e ? lK(a, b, c) : kK(E.body, uc(a), b, c)();
      } else
        A.setTimeout(function () {
          jK(a, b, c, d, e, f);
        });
    };
  iK.F = "internal.injectHtml";
  var mK = {};
  var nK = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          lc(
            a,
            function () {
              for (var g = e[f][0], k = 0; k < g.length; k++) H(g[k]);
              g.push = function (m) {
                H(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], k = 0; k < g.length; k++) H(g[k]);
              e[f] = null;
            },
            b
          ))
      : lc(a, c, d, b);
  };
  function oK(a, b, c, d) {
    if (!ip()) {
      J(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      L(this, "inject_script", a);
      var e = this.D;
      nK(
        a,
        void 0,
        function () {
          b && b.tb(e);
        },
        function () {
          c && c.tb(e);
        },
        mK,
        d
      );
    }
  }
  var pK = { dl: 1, id: 1 },
    qK = {};
  function rK(a, b, c, d) {}
  oK.R = "injectScript";
  rK.F = "internal.injectScript";
  function sK(a) {
    var b = !0;
    return b;
  }
  sK.R = "isConsentGranted";
  function tK(a) {
    var b = !1;
    return b;
  }
  tK.F = "internal.isDebugMode";
  function uK() {
    return yl();
  }
  uK.F = "internal.isDmaRegion";
  function vK(a) {
    var b = !1;
    return b;
  }
  vK.F = "internal.isEntityInfrastructure";
  function wK() {
    var a = !1;
    return a;
  }
  wK.F = "internal.isLandingPage";
  function xK() {
    var a = Wg(function (b) {
      RB(this).log("error", b);
    });
    a.R = "JSON";
    return a;
  }
  function yK(a) {
    var b = void 0;
    J(this.getName(), ["url:!string"], arguments), (b = Gj(a));
    return dd(b);
  }
  yK.F = "internal.legacyParseUrl";
  function zK() {
    return !1;
  }
  var AK = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function BK() {
    try {
      L(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = I(a[b], this.D);
    console.log.apply(console, a);
  }
  BK.R = "logToConsole";
  function CK(a, b) {}
  CK.F = "internal.mergeRemoteConfig";
  function DK(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return dd(d);
  }
  DK.F = "internal.parseCookieValuesFromString";
  function EK(a) {
    var b = void 0;
    if (typeof a !== "string") return;
    a && sb(a, "//") && (a = E.location.protocol + a);
    if (typeof URL === "function") {
      var c;
      a: {
        var d;
        try {
          d = new URL(a);
        } catch (w) {
          c = void 0;
          break a;
        }
        for (
          var e = {}, f = Array.from(d.searchParams), g = 0;
          g < f.length;
          g++
        ) {
          var k = f[g][0],
            m = f[g][1];
          e.hasOwnProperty(k)
            ? typeof e[k] === "string"
              ? (e[k] = [e[k], m])
              : e[k].push(m)
            : (e[k] = m);
        }
        c = dd({
          href: d.href,
          origin: d.origin,
          protocol: d.protocol,
          username: d.username,
          password: d.password,
          host: d.host,
          hostname: d.hostname,
          port: d.port,
          pathname: d.pathname,
          search: d.search,
          searchParams: e,
          hash: d.hash,
        });
      }
      return c;
    }
    var n;
    try {
      n = Gj(a);
    } catch (w) {
      return;
    }
    if (!n.protocol || !n.host) return;
    var p = {};
    if (n.search)
      for (
        var q = n.search.replace("?", "").split("&"), r = 0;
        r < q.length;
        r++
      ) {
        var u = q[r].split("="),
          v = u[0],
          t = decodeURIComponent(u.splice(1).join("=")).replace(/\+/g, " ");
        p.hasOwnProperty(v)
          ? typeof p[v] === "string"
            ? (p[v] = [p[v], t])
            : p[v].push(t)
          : (p[v] = t);
      }
    n.searchParams = p;
    n.origin = n.protocol + "//" + n.host;
    n.username = "";
    n.password = "";
    b = dd(n);
    return b;
  }
  EK.R = "parseUrl";
  function FK(a) {}
  FK.F = "internal.processAsNewEvent";
  function GK(a, b, c) {
    var d;
    return d;
  }
  GK.F = "internal.pushToDataLayer";
  function HK(a) {
    var b = !1;
    return b;
  }
  HK.R = "queryPermission";
  function IK() {
    var a = "";
    return a;
  }
  IK.R = "readCharacterSet";
  function JK() {
    return Ki.vb;
  }
  JK.F = "internal.readDataLayerName";
  function KK() {
    var a = "";
    return a;
  }
  KK.R = "readTitle";
  function LK(a, b) {
    var c = this;
  }
  LK.F = "internal.registerCcdCallback";
  function MK(a) {
    return !0;
  }
  MK.F = "internal.registerDestination";
  var NK = ["config", "event", "get", "set"];
  function OK(a, b, c) {}
  OK.F = "internal.registerGtagCommandListener";
  function PK(a, b) {
    var c = !1;
    return c;
  }
  PK.F = "internal.removeDataLayerEventListener";
  function QK(a, b) {}
  QK.F = "internal.removeFormData";
  function RK() {}
  RK.R = "resetDataLayer";
  function SK(a, b, c) {
    var d = void 0;
    return d;
  }
  SK.F = "internal.scrubUrlParams";
  function TK(a) {}
  TK.F = "internal.sendAdsHit";
  function UK(a, b, c, d) {}
  UK.F = "internal.sendGtagEvent";
  function VK(a, b, c) {}
  VK.R = "sendPixel";
  function WK(a, b) {}
  WK.F = "internal.setAnchorHref";
  function XK(a) {}
  XK.F = "internal.setContainerConsentDefaults";
  function YK(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  YK.R = "setCookie";
  function ZK(a) {}
  ZK.F = "internal.setCorePlatformServices";
  function $K(a, b) {}
  $K.F = "internal.setDataLayerValue";
  function aL(a) {}
  aL.R = "setDefaultConsentState";
  function bL(a, b) {}
  bL.F = "internal.setDelegatedConsentType";
  function cL(a, b) {}
  cL.F = "internal.setFormAction";
  function dL(a, b, c) {}
  dL.F = "internal.setInCrossContainerData";
  function eL(a, b, c) {
    J(
      this.getName(),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    L(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = ub(d, [A, E]),
      f = d.pop();
    if (e && (e[f] === void 0 || c)) return (e[f] = I(b, this.D, 2)), !0;
    return !1;
  }
  eL.R = "setInWindow";
  function fL(a, b, c) {}
  fL.F = "internal.setProductSettingsParameter";
  function gL(a, b, c) {}
  gL.F = "internal.setRemoteConfigParameter";
  function hL(a, b, c, d) {
    var e = this;
  }
  hL.R = "sha256";
  function iL(a, b, c) {}
  iL.F = "internal.sortRemoteConfigParameters";
  function jL(a, b) {
    var c = void 0;
    return c;
  }
  jL.F = "internal.subscribeToCrossContainerData";
  var kL = {},
    lL = {};
  kL.getItem = function (a) {
    var b = null;
    return b;
  };
  kL.setItem = function (a, b) {};
  kL.removeItem = function (a) {};
  kL.clear = function () {};
  kL.R = "templateStorage";
  function mL(a, b) {
    var c = !1;
    return c;
  }
  mL.F = "internal.testRegex";
  function nL(a) {
    var b;
    return b;
  }
  function oL(a) {
    var b;
    return b;
  }
  oL.F = "internal.unsiloId";
  function pL(a, b) {
    var c;
    return c;
  }
  pL.F = "internal.unsubscribeFromCrossContainerData";
  function qL(a) {}
  qL.R = "updateConsentState";
  var rL;
  function sL(a, b, c) {
    rL = rL || new gh();
    rL.add(a, b, c);
  }
  function tL(a, b) {
    var c = (rL = rL || new gh());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.j[a] = Za(b) ? Dg(a, b) : Eg(a, b);
  }
  function uL() {
    return function (a) {
      var b;
      var c = rL;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.D.j;
          if (f) {
            var g = f.rb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function vL() {
    var a = function (c) {
        return void tL(c.F, c);
      },
      b = function (c) {
        return void sL(c.R, c);
      };
    b(LB);
    b(SB);
    b(fD);
    b(hD);
    b(iD);
    b(pD);
    b(rD);
    b(vD);
    b(xK());
    b(xD);
    b(PG);
    b(QG);
    b(iH);
    b(jH);
    b(kH);
    b(qH);
    b(eK);
    b(gK);
    b(oK);
    b(sK);
    b(BK);
    b(EK);
    b(HK);
    b(IK);
    b(KK);
    b(VK);
    b(YK);
    b(aL);
    b(eL);
    b(hL);
    b(kL);
    b(qL);
    sL("Math", Ig());
    sL("Object", eh);
    sL("TestHelper", ih());
    sL("assertApi", Fg);
    sL("assertThat", Gg);
    sL("decodeUri", Kg);
    sL("decodeUriComponent", Lg);
    sL("encodeUri", Mg);
    sL("encodeUriComponent", Ng);
    sL("fail", Sg);
    sL("generateRandom", Tg);
    sL("getTimestamp", Ug);
    sL("getTimestampMillis", Ug);
    sL("getType", Vg);
    sL("makeInteger", Xg);
    sL("makeNumber", Yg);
    sL("makeString", Zg);
    sL("makeTableMap", $g);
    sL("mock", ch);
    sL("mockObject", dh);
    sL("fromBase64", KG, !("atob" in A));
    sL("localStorage", AK, !zK());
    sL("toBase64", nL, !("btoa" in A));
    a(KB);
    a(OB);
    a(iC);
    a(uC);
    a(BC);
    a(GC);
    a(VC);
    a(dD);
    a(gD);
    a(jD);
    a(kD);
    a(lD);
    a(mD);
    a(nD);
    a(oD);
    a(qD);
    a(sD);
    a(uD);
    a(wD);
    a(yD);
    a(AD);
    a(BD);
    a(CD);
    a(DD);
    a(ED);
    a(JD);
    a(RD);
    a(SD);
    a(cE);
    a(hE);
    a(mE);
    a(vE);
    a(AE);
    a(NE);
    a(PE);
    a(cF);
    a(dF);
    a(fF);
    a(IG);
    a(JG);
    a(LG);
    a(MG);
    a(NG);
    a(RG);
    a(SG);
    a(TG);
    a(UG);
    a(VG);
    a(WG);
    a(XG);
    a(YG);
    a(ZG);
    a($G);
    a(aH);
    a(cH);
    a(dH);
    a(eH);
    a(fH);
    a(gH);
    a(hH);
    a(lH);
    a(mH);
    a(nH);
    a(oH);
    a(pH);
    a(sH);
    a(bK);
    a(iK);
    a(rK);
    a(tK);
    a(uK);
    a(vK);
    a(wK);
    a(yK);
    a(TC);
    a(CK);
    a(DK);
    a(FK);
    a(GK);
    a(JK);
    a(LK);
    a(MK);
    a(OK);
    a(PK);
    a(QK);
    a(SK);
    a(TK);
    a(UK);
    a(WK);
    a(XK);
    a(ZK);
    a($K);
    a(bL);
    a(cL);
    a(dL);
    a(fL);
    a(gL);
    a(iL);
    a(jL);
    a(mL);
    a(oL);
    a(pL);
    tL("internal.CrossContainerSchema", zD());
    tL("internal.GtagSchema", cK());
    tL("internal.IframingStateSchema", fK());

    return uL();
  }
  var IB;
  function wL() {
    IB.j.j.H = function (a, b, c) {
      Li.SANDBOXED_JS_SEMAPHORE = Li.SANDBOXED_JS_SEMAPHORE || 0;
      Li.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Li.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function xL(a) {
    a &&
      gb(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          aj[e] = aj[e] || [];
          aj[e].push(b);
        }
      });
  }
  function yL(a) {
    Wz(Rz("developer_id." + a, !0), 0, {});
  }
  var zL = Array.isArray;
  function AL(a, b) {
    return Rc(a, b || null);
  }
  function X(a) {
    return window.encodeURIComponent(a);
  }
  function BL(a, b, c) {
    pc(a, b, c);
  }
  function CL(a, b) {
    if (!a) return !1;
    var c = Aj(Gj(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
        if (f >= 0 && c.indexOf(e, f) === f) return !0;
      }
    }
    return !1;
  }
  function DL(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  }
  var ML = A.clearTimeout,
    NL = A.setTimeout;
  function OL(a, b, c) {
    if (ip()) {
      b && H(b);
    } else return lc(a, b, c);
  }
  function PL() {
    return A.location.href;
  }
  function QL(a, b) {
    return nj(a, b || 2);
  }
  function RL(a, b) {
    A[a] = b;
  }
  function SL(a, b, c) {
    b && (A[a] === void 0 || (c && !A[a])) && (A[a] = b);
    return A[a];
  }
  function TL(a, b) {
    if (ip()) {
      b && H(b);
    } else nc(a, b);
  }

  var UL = {};
  var Y = { securityGroups: {} };
  (Y.securityGroups.f = ["google"]),
    (Y.__f = function (a) {
      var b = QL("gtm.referrer", 1) || E.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? Aj(
              Gj(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : Dj(Gj(String(b)))
        : String(b);
    }),
    (Y.__f.o = "f"),
    (Y.__f.isVendorTemplate = !0),
    (Y.__f.priorityOverride = 0),
    (Y.__f.isInfrastructure = !0),
    (Y.__f.runInSiloedMode = !1);

  (Y.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Y.__access_globals = b;
        Y.__access_globals.o = "access_globals";
        Y.__access_globals.isVendorTemplate = !0;
        Y.__access_globals.priorityOverride = 0;
        Y.__access_globals.isInfrastructure = !1;
        Y.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!z(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.o = "u";
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
        Y.__u.isInfrastructure = !0;
        Y.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : QL("gtm.url", 1)) || PL();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Dj(Gj(String(c)));
        var e = Gj(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = Aj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Aj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Y.securityGroups.v = ["google"]),
    (Y.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = QL(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (Y.__v.o = "v"),
    (Y.__v.isVendorTemplate = !0),
    (Y.__v.priorityOverride = 0),
    (Y.__v.isInfrastructure = !0),
    (Y.__v.runInSiloedMode = !1);

  (Y.securityGroups.get_referrer = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Y.__get_referrer = b;
        Y.__get_referrer.o = "get_referrer";
        Y.__get_referrer.isVendorTemplate = !0;
        Y.__get_referrer.priorityOverride = 0;
        Y.__get_referrer.isInfrastructure = !1;
        Y.__get_referrer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urlParts === "any" ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"));
        var d =
            c && b.vtp_queriesAllowed !== "any" ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, k) {
            if (g) {
              if (!z(g)) throw e(f, {}, "URL component must be a string.");
              if (c && c.indexOf(g) < 0)
                throw e(f, {}, "Prohibited URL component: " + g);
              if (g === "query" && d) {
                if (!k)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!z(k)) throw e(f, {}, "Query key must be a string.");
                if (d.indexOf(k) < 0)
                  throw e(f, {}, "Prohibited query key: " + k);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Y.__read_event_data = b;
        Y.__read_event_data.o = "read_event_data";
        Y.__read_event_data.isVendorTemplate = !0;
        Y.__read_event_data.priorityOverride = 0;
        Y.__read_event_data.isInfrastructure = !1;
        Y.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !z(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && hg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        Y.__gclidw = b;
        Y.__gclidw.o = "gclidw";
        Y.__gclidw.isVendorTemplate = !0;
        Y.__gclidw.priorityOverride = 100;
        Y.__gclidw.isInfrastructure = !1;
        Y.__gclidw.runInSiloedMode = !1;
      })(function (b) {
        H(b.vtp_gtmOnSuccess);
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          (f = b.vtp_cookieFlags));
        var g = QL(N.g.la);
        g = g != void 0 && g !== !1;
        if (R(22)) {
          var k = {},
            m =
              ((k[N.g.Fa] = e),
              (k[N.g.lb] = c),
              (k[N.g.Na] = d),
              (k[N.g.cb] = f),
              (k[N.g.la] = g),
              k);
          b.vtp_enableUrlPassthrough && (m[N.g.fb] = !0);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var n = {};
            m[N.g.sa] =
              ((n[N.g.Nc] = b.vtp_acceptIncoming),
              (n[N.g.X] = b.vtp_linkerDomains
                .toString()
                .replace(/\s+/g, "")
                .split(",")),
              (n[N.g.Sb] = b.vtp_urlPosition),
              (n[N.g.Cb] = b.vtp_formDecoration),
              n);
          }
          var p = $m(
            Zm(
              Ym(
                Xm(Qm(new Pm(b.vtp_gtmEventId, b.vtp_gtmPriorityId), m), Ya),
                Ya
              ),
              !0
            )
          );
          p.eventMetadata.hit_type_override = "page_view";
          jF("", N.g.da, Date.now(), p);
        } else {
          var q = { prefix: e, path: c, domain: d, flags: f };
          if (!b.vtp_enableCrossDomain || b.vtp_acceptIncoming !== !1)
            if (b.vtp_enableCrossDomain || jq()) xr(a, q), wq(q);
          (R(101) || R(133)) && ko() !== 2 ? vr(q) : tr(q);
          Dr(["aw", "dc"], q);
          Yr(q, void 0, void 0, g);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var r = b.vtp_linkerDomains
              .toString()
              .replace(/\s+/g, "")
              .split(",");
            Br(a, r, b.vtp_urlPosition, !!b.vtp_formDecoration, q.prefix);
            xq(pq(q.prefix), r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
            xq("FPAU", r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
          }
          !hj() && !Ti && R(119) && bv(void 0, Math.round(nb()), R(118));
          Rs({
            m: $m(new Pm(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
            Nh: !1,
            Wd: g,
            yc: q,
            sg: !0,
          });
          ml = !0;
          b.vtp_enableUrlPassthrough && Gr(["aw", "dc", "gb"]);
          Ir(["aw", "dc", "gb"]);
        }
      });
    })();
  (Y.securityGroups.read_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Y.__read_data_layer = b;
        Y.__read_data_layer.o = "read_data_layer";
        Y.__read_data_layer.isVendorTemplate = !0;
        Y.__read_data_layer.priorityOverride = 0;
        Y.__read_data_layer.isInfrastructure = !1;
        Y.__read_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedKeys || "specific",
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Keys must be strings.");
            if (c !== "any") {
              try {
                if (hg(g, d)) return;
              } catch (k) {
                throw e(f, {}, "Invalid key filter.");
              }
              throw e(
                f,
                {},
                "Prohibited read from data layer variable: " + g + "."
              );
            }
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.detect_element_visibility_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__detect_element_visibility_events = b;
        Y.__detect_element_visibility_events.o =
          "detect_element_visibility_events";
        Y.__detect_element_visibility_events.isVendorTemplate = !0;
        Y.__detect_element_visibility_events.priorityOverride = 0;
        Y.__detect_element_visibility_events.isInfrastructure = !1;
        Y.__detect_element_visibility_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Y.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Y.__load_google_tags = b;
        Y.__load_google_tags.o = "load_google_tags";
        Y.__load_google_tags.isVendorTemplate = !0;
        Y.__load_google_tags.priorityOverride = 0;
        Y.__load_google_tags.isInfrastructure = !1;
        Y.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!z(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!z(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (yg(Gj(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();

  (Y.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Y.__inject_script = b;
        Y.__inject_script.o = "inject_script";
        Y.__inject_script.isVendorTemplate = !0;
        Y.__inject_script.priorityOverride = 0;
        Y.__inject_script.isInfrastructure = !1;
        Y.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!z(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (yg(Gj(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          M: a,
        };
      });
    })();

  (Y.securityGroups.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g, k) {
          k = k === void 0 ? !1 : k;
          var m = d === "DATA_LAYER" ? QL(g) : b[f];
          (k && m == null) || (c[e] = m);
        };
      }
      (function (b) {
        Y.__awct = b;
        Y.__awct.o = "awct";
        Y.__awct.isVendorTemplate = !0;
        Y.__awct.priorityOverride = 0;
        Y.__awct.isInfrastructure = !1;
        Y.__awct.runInSiloedMode = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = DL(b.vtp_customVariables, "varName", "value") || {},
          f = b.vtp_conversionCookiePrefix;
        R(129) && f === "_gcl" && (f = void 0);
        var g = {},
          k =
            ((g[N.g.ra] = b.vtp_conversionValue || 0),
            (g[N.g.Ca] = b.vtp_currencyCode),
            (g[N.g.Da] = b.vtp_orderId),
            (g[N.g.jb] = f),
            (g[N.g.Aa] = c),
            (g[N.g.je] = d),
            (g[N.g.la] = QL(N.g.la)),
            (g[N.g.ia] = QL("developer_id")),
            g);
        (k[N.g.Ea] = QL(N.g.Ea)),
          (k[N.g.qa] = QL(N.g.qa)),
          (k[N.g.jc] = QL(N.g.jc)),
          (k[N.g.Oa] = QL(N.g.Oa));
        b.vtp_rdp && (k[N.g.Tb] = !0);
        if (b.vtp_enableCustomParams)
          for (var m in e) wh.hasOwnProperty(m) || (k[m] = e[m]);
        if (b.vtp_enableProductReporting) {
          var n = a(b, k, b.vtp_productReportingDataSource);
          n(N.g.oe, "vtp_awMerchantId", "aw_merchant_id");
          n(N.g.me, "vtp_awFeedCountry", "aw_feed_country");
          n(N.g.ne, "vtp_awFeedLanguage", "aw_feed_language");
          R(103) &&
            (n(N.g.Sf, "vtp_awMerchantId", "merchant_id", !0),
            n(N.g.Qf, "vtp_awFeedCountry", "merchant_feed_label", !0),
            n(N.g.Rf, "vtp_awFeedLanguage", "merchant_feed_language", !0));
          n(N.g.ke, "vtp_discount", "discount");
          n(N.g.fa, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((k[N.g.Fd] = b.vtp_deliveryPostalCode),
          (k[N.g.we] = b.vtp_estimatedDeliveryDate),
          (k[N.g.Ic] = b.vtp_deliveryCountry),
          (k[N.g.wd] = b.vtp_shippingFee));
        b.vtp_transportUrl && (k[N.g.Db] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var p = a(b, k, b.vtp_newCustomerReportingDataSource);
          p(N.g.Bd, "vtp_awNewCustomer", "new_customer");
          p(N.g.pe, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var q;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var r =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (r) {
              q = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: r,
              };
              break a;
            }
          }
          q = void 0;
        }
        var u = q;
        if (u) {
          var v = {};
          k[N.g.ve] = ((v[b.vtp_conversionLabel] = u), v);
        }
        var t = "AW-" + b.vtp_conversionId,
          w = t + "/" + b.vtp_conversionLabel,
          x = R(129) && Ek(t) === 1;
        x ||
          oy(t, b.vtp_transportUrl, {
            source: 7,
            fromContainerExecution: !0,
            siloed: !0,
          });
        var y = {},
          B = {
            eventMetadata: ((y.hit_type_override = "conversion"), y),
            noGtmEvent: !0,
            isGtmEvent: !0,
            onSuccess: b.vtp_gtmOnSuccess,
            onFailure: b.vtp_gtmOnFailure,
          };
        Wz(Uz(x ? w : kk(w), N.g.Ma, k), b.vtp_gtmEventId, B);
      });
    })();

  (Y.securityGroups.unsafe_inject_arbitrary_html = ["google"]),
    (function () {
      function a(b, c, d) {
        return { useIframe: c, supportDocumentWrite: d };
      }
      (function (b) {
        Y.__unsafe_inject_arbitrary_html = b;
        Y.__unsafe_inject_arbitrary_html.o = "unsafe_inject_arbitrary_html";
        Y.__unsafe_inject_arbitrary_html.isVendorTemplate = !0;
        Y.__unsafe_inject_arbitrary_html.priorityOverride = 0;
        Y.__unsafe_inject_arbitrary_html.isInfrastructure = !1;
        Y.__unsafe_inject_arbitrary_html.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (e && f)
              throw c(
                d,
                {},
                "Only one of useIframe and supportDocumentWrite can be true."
              );
            if (e !== void 0 && typeof e !== "boolean")
              throw c(d, {}, "useIframe must be a boolean.");
            if (f !== void 0 && typeof f !== "boolean")
              throw c(d, {}, "supportDocumentWrite must be a boolean.");
          },
          M: a,
        };
      });
    })();

  (Y.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__logging = b;
        Y.__logging.o = "logging";
        Y.__logging.isVendorTemplate = !0;
        Y.__logging.priorityOverride = 0;
        Y.__logging.isInfrastructure = !1;
        Y.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (Y.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Y.__configure_google_tags = b;
        Y.__configure_google_tags.o = "configure_google_tags";
        Y.__configure_google_tags.isVendorTemplate = !0;
        Y.__configure_google_tags.priorityOverride = 0;
        Y.__configure_google_tags.isInfrastructure = !1;
        Y.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  var VL = {
    dataLayer: oj,
    callback: function (a) {
      $i.hasOwnProperty(a) && Za($i[a]) && $i[a]();
      delete $i[a];
    },
    bootstrap: 0,
  };
  (VL.onHtmlSuccess = qB(!0)), (VL.onHtmlFailure = qB(!1));
  function WL() {
    Li[nk()] = Li[nk()] || VL;
    xk();
    Bk() ||
      gb(Ck(), function (d, e) {
        oy(d, e.transportUrl, e.context);
        U(92);
      });
    qb(aj, Y.securityGroups);
    var a = rk(sk()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    Sl(c, a == null ? void 0 : a.parent);
    (c !== 2 && c !== 4 && c !== 3) || U(142);
    mB(),
      of({
        Qm: function (d) {
          return d === kB;
        },
        gm: function (d) {
          return new nB(d);
        },
        Rm: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        nn: function (d) {
          var e;
          if (d === kB) e = d;
          else {
            var f = bj();
            lB[f] = d;
            e = 'google_tag_manager["rm"]["' + pk() + '"](' + f + ")";
          }
          return e;
        },
      });
    qf = { bm: Hf };
  }
  var XL = !1;
  (function (a) {
    function b() {
      n = E.documentElement.getAttribute("data-tag-assistant-present");
      Dl(n) && (m = k.Pj);
    }
    function c() {
      m && fc ? g(m) : a();
    }
    if (!A["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (E.referrer) {
        var e = Gj(E.referrer);
        d = Cj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = np("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((A["__TAGGY_INSTALLED"] = !0),
        lc("https://cct.google/taggy/agent.js"));
    }
    var g = function (v) {
        var t = "GTM",
          w = "GTM";
        Ri && ((t = "OGT"), (w = "GTAG"));
        var x = A["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (A["google.tagmanager.debugui2.queue"] = x),
          lc(
            "https://" +
              Ki.Ef +
              "/debug/bootstrap?id=" +
              Nf.ctid +
              "&src=" +
              w +
              "&cond=" +
              v +
              "&gtm=" +
              kp()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: fc,
            containerProduct: t,
            debug: !1,
            id: Nf.ctid,
            targetRef: { ctid: Nf.ctid, isDestination: gk() },
            aliases: jk(),
            destinations: hk(),
          },
        };
        y.data.resume = function () {
          a();
        };
        Ki.bl && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { Dl: 1, Rj: 2, hk: 3, Ri: 4, Pj: 5 };
    k[k.Dl] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Rj] = "GTM_DEBUG_PARAM";
    k[k.hk] = "REFERRER";
    k[k.Ri] = "COOKIE";
    k[k.Pj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = Aj(A.location, "query", !1, void 0, "gtm_debug");
    Dl(p) && (m = k.Rj);
    if (!m && E.referrer) {
      var q = Gj(E.referrer);
      Cj(q, "host") === "tagassistant.google.com" && (m = k.hk);
    }
    if (!m) {
      var r = np("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.Ri);
    }
    m || b();
    if (!m && Cl(n)) {
      var u = !1;
      qc(
        E,
        "TADebugSignal",
        function () {
          u || ((u = !0), b(), c());
        },
        !1
      );
      A.setTimeout(function () {
        u || ((u = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = XL)) {
        var b;
        a: {
          for (var c = bk(), d = l(ik()), e = d.next(); !e.done; e = d.next())
            if (c.injectedFirstPartyContainers[e.value]) {
              b = !0;
              break a;
            }
          b = !1;
        }
        a = !b;
      }
      if (a) {
        var f = ej.Va,
          g = Ji.Kn;
        f.j = new Set();
        if (g !== "")
          for (var k = l(g.split("~")), m = k.next(); !m.done; m = k.next()) {
            var n = Number(m.value);
            isNaN(n) || f.j.add(n);
          }
        ej.K = "";
        ej.Eb = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        ej.aa = "ad_storage|analytics_storage|ad_user_data";
        ej.P = "5190";
        ej.P = "51f0";
        vk();
        if (R(93)) {
        }
        Wh[8] = !0;
        var p = Nf.ctid,
          q = gk();
        R(110) &&
          ((Ml = !0),
          (El = ""),
          (Fl = p),
          (Hl = Ri),
          (Gl = { ctid: p, isDestination: q }),
          Rl());
        if (!fm) {
          fm = !0;
          for (var r = gm.length - 1; r >= 0; r--) gm[r]();
          gm = [];
        }
        Lo();
        pm();
        var u = pk();
        if (bk().canonical[u]) {
          var v = Li.zones;
          v && v.unregisterChild(ik());
          $x().removeExternalRestrictions(pk());
        } else {
          uv();
          ky();
          for (
            var t = data.resource || {}, w = t.macros || [], x = 0;
            x < w.length;
            x++
          )
            ff.push(w[x]);
          for (var y = t.tags || [], B = 0; B < y.length; B++) jf.push(y[B]);
          for (var C = t.predicates || [], D = 0; D < C.length; D++)
            hf.push(C[D]);
          for (var G = t.rules || [], K = 0; K < G.length; K++) {
            for (var F = G[K], S = {}, M = 0; M < F.length; M++) {
              var T = F[M][0];
              S[T] = Array.prototype.slice.call(F[M], 1);
              (T !== "if" && T !== "unless") || pf(S[T]);
            }
            gf.push(S);
          }
          lf = Y;
          mf = sB;
          Jf = new Qf();
          var ca = data.sandboxed_scripts,
            da = data.security_groups;
          a: {
            var Z = data.runtime || [],
              Q = data.runtime_lines;
            IB = new ye();
            wL();
            ef = HB();
            var pa = IB,
              oa = vL(),
              ja = new Wc("require", oa);
            ja.Ia();
            pa.j.j.set("require", ja);
            for (var Ba = [], Ma = 0; Ma < Z.length; Ma++) {
              var ua = Z[Ma];
              if (!Array.isArray(ua) || ua.length < 3) {
                if (ua.length === 0) continue;
                break a;
              }
              Q && Q[Ma] && Q[Ma].length && Af(ua, Q[Ma]);
              try {
                IB.execute(ua), R(108) && Uj && ua[0] === 50 && Ba.push(ua[1]);
              } catch (yo) {}
            }
            R(108) && (rf = Ba);
          }
          if (ca && ca.length)
            for (var Ta = ["sandboxedScripts"], cb = 0; cb < ca.length; cb++) {
              var Hc = ca[cb].replace(/^_*/, "");
              aj[Hc] = Ta;
            }
          xL(da);
          WL();
          if (!Vi)
            for (
              var Te = yl() ? ij(ej.aa) : ij(ej.Eb), Ue = 0;
              Ue < Tl.length;
              Ue++
            ) {
              var rz = Tl[Ue],
                YL = rz,
                ZL = Te[rz] ? "granted" : "denied";
              Uk().implicit(YL, ZL);
            }
          NA();
          py = !1;
          qy = 0;
          if (
            (E.readyState === "interactive" && !E.createEventObject) ||
            E.readyState === "complete"
          )
            sy();
          else {
            qc(E, "DOMContentLoaded", sy);
            qc(E, "readystatechange", sy);
            if (E.createEventObject && E.documentElement.doScroll) {
              var sz = !0;
              try {
                sz = !A.frameElement;
              } catch (yo) {}
              sz && ty();
            }
            qc(A, "load", sy);
          }
          tA = !1;
          E.readyState === "complete" ? vA() : qc(A, "load", vA);
          Uj &&
            (cn(qn),
            A.setInterval(pn, 864e5),
            cn(vB),
            cn(Ty),
            cn(ww),
            cn(tn),
            cn(EB),
            cn(dz),
            R(108) && (cn(Yy), cn(Zy), cn($y)),
            zB());
          if (Vj) {
            Tk();
            Jm();
            var tz,
              uz = Gj(A.location.href);
            (tz = uz.hostname + uz.pathname) &&
              Kk("dl", encodeURIComponent(tz));
            var zo;
            var vz = Nf.ctid;
            if (vz) {
              var aM = ek.Ke ? 1 : 0,
                Lh,
                wz = rk(sk());
              Lh = wz && wz.context;
              zo =
                vz +
                ";" +
                Nf.canonicalContainerId +
                ";" +
                (Lh && Lh.fromContainerExecution ? 1 : 0) +
                ";" +
                ((Lh && Lh.source) || 0) +
                ";" +
                aM;
            } else zo = void 0;
            var xz = zo;
            xz && Kk("tdp", xz);
            var yz = ko(!0);
            yz !== void 0 && Kk("frm", String(yz));
            var Ao;
            var Mh = rk(sk());
            if (Mh) {
              for (; Mh.parent; ) {
                var zz = rk(Mh.parent);
                if (!zz) break;
                Mh = zz;
              }
              Ao = Mh;
            } else Ao = void 0;
            var Ve = Ao;
            if (!Ve) U(144);
            else if (R(55) || Ve.canonicalContainerId) {
              var Bo;
              a: {
                var Az,
                  Bz = (Az = Ve.scriptElement) == null ? void 0 : Az.src;
                if (Bz) {
                  var Co;
                  try {
                    var Cz;
                    Co =
                      (Cz = Ec()) == null
                        ? void 0
                        : Cz.getEntriesByType("resource");
                  } catch (yo) {}
                  if (Co) {
                    for (
                      var Dz = -1, Ez = l(Co), Do = Ez.next();
                      !Do.done;
                      Do = Ez.next()
                    ) {
                      var Fz = Do.value;
                      if (Fz.initiatorType === "script") {
                        Dz += 1;
                        var Eo = Fz.name,
                          Fo = Bz;
                        R(54) &&
                          ((Eo = Eo.replace(OA, "")),
                          (Fo = Fo.replace(OA, "")));
                        if (Eo === Fo) {
                          Bo = Dz;
                          break a;
                        }
                      }
                    }
                    U(146);
                  } else U(145);
                }
                Bo = void 0;
              }
              var Gz = Bo;
              Gz !== void 0 &&
                (Ve.canonicalContainerId &&
                  Kk("rtg", String(Ve.canonicalContainerId)),
                Kk("slo", String(Gz)),
                Kk("hlo", Ve.htmlLoadOrder || "-1"),
                Kk("lst", String(Ve.loadScriptType || "0")));
            }
            var mk;
            var Nh = qk();
            if (Nh)
              if (Nh.canonicalContainerId) mk = Nh.canonicalContainerId;
              else {
                var Hz,
                  Iz =
                    Nh.scriptContainerId ||
                    ((Hz = Nh.destinations) == null ? void 0 : Hz[0]);
                mk = Iz ? "_" + Iz : void 0;
              }
            else mk = void 0;
            var Jz = mk;
            Jz && Kk("pcid", Jz);
            R(36) &&
              (Kk("bt", String(ej.C ? 2 : Ti ? 1 : 0)),
              Kk("ct", String(ej.C ? 0 : Ti ? 1 : ip() ? 2 : 3)));
          }
          iB();
          tl(1);
          RC();
          Zi = nb();
          VL.bootstrap = Zi;
          ej.H && MA();
          if (R(93)) {
          }
          R(123) &&
            (typeof A.name === "string" &&
            sb(A.name, "web-pixel-sandbox-CUSTOM") &&
            Fc()
              ? yL("dMDg0Yz")
              : A.Shopify && Fc() && yL("dNTU0Yz"));
        }
      }
    } catch (yo) {
      if ((tl(4), Uj)) {
        var bM = kn(!0, !0);
        pc(bM);
      }
    }
  });
})();
