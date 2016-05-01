define("itp405-final-project/templates/details", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 8
              }
            },
            "moduleName": "itp405-final-project/templates/details.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "error");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "error", ["loc", [null, [5, 26], [5, 35]]]]],
          locals: ["error"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 8,
              "column": 4
            }
          },
          "moduleName": "itp405-final-project/templates/details.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "error.id", ["loc", [null, [4, 16], [4, 24]]]]], [], 0, null, ["loc", [null, [4, 8], [6, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 56,
                  "column": 16
                },
                "end": {
                  "line": 58,
                  "column": 16
                }
              },
              "moduleName": "itp405-final-project/templates/details.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            					");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "model.description", ["loc", [null, [57, 17], [57, 38]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 54,
                "column": 8
              },
              "end": {
                "line": 61,
                "column": 8
              }
            },
            "moduleName": "itp405-final-project/templates/details.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-9 event-description");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("            				");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element3, 1, 1);
            morphs[1] = dom.createMorphAt(element3, 3, 3);
            return morphs;
          },
          statements: [["block", "if", [["get", "model.description", ["loc", [null, [56, 22], [56, 39]]]]], [], 0, null, ["loc", [null, [56, 16], [58, 23]]]], ["inline", "unless", [["get", "model.description", ["loc", [null, [59, 25], [59, 42]]]], "No Description provided."], [], ["loc", [null, [59, 16], [59, 71]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.5",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 75,
                    "column": 13
                  },
                  "end": {
                    "line": 81,
                    "column": 14
                  }
                },
                "moduleName": "itp405-final-project/templates/details.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        					    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("tr");
                var el2 = dom.createTextNode("\n        					      ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("td");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n        					      ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("td");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n        					      ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("td");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n        					    ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element1 = dom.childAt(fragment, [1]);
                var morphs = new Array(3);
                morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
                morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
                morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]), 0, 0);
                return morphs;
              },
              statements: [["content", "player.first_name", ["loc", [null, [77, 23], [77, 44]]]], ["content", "player.last_name", ["loc", [null, [78, 23], [78, 43]]]], ["content", "player.rating", ["loc", [null, [79, 23], [79, 40]]]]],
              locals: ["player"],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 64,
                  "column": 12
                },
                "end": {
                  "line": 84,
                  "column": 12
                }
              },
              "moduleName": "itp405-final-project/templates/details.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("table");
              dom.setAttribute(el1, "class", "table");
              var el2 = dom.createTextNode("\n        					  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("thead");
              var el3 = dom.createTextNode("\n        					    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("tr");
              var el4 = dom.createTextNode("\n        					      ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("th");
              var el5 = dom.createTextNode("First Name");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n        					      ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("th");
              var el5 = dom.createTextNode("Last Name");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n        					      ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("th");
              var el5 = dom.createTextNode("NTRP");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n        					    ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n        					  ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        					  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("tbody");
              var el3 = dom.createTextNode("\n\n");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("        					  ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        					");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
              return morphs;
            },
            statements: [["block", "each", [["get", "model.users", ["loc", [null, [75, 21], [75, 32]]]]], [], 0, null, ["loc", [null, [75, 13], [81, 23]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 62,
                "column": 8
              },
              "end": {
                "line": 87,
                "column": 8
              }
            },
            "moduleName": "itp405-final-project/templates/details.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    				    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-9 event-description");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    				    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    				    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element2, 1, 1);
            morphs[1] = dom.createMorphAt(element2, 3, 3);
            return morphs;
          },
          statements: [["block", "if", [["get", "model.users", ["loc", [null, [64, 18], [64, 29]]]]], [], 0, null, ["loc", [null, [64, 12], [84, 19]]]], ["inline", "unless", [["get", "model.users", ["loc", [null, [85, 21], [85, 32]]]], "No participants at this time"], [], ["loc", [null, [85, 12], [85, 65]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 90,
                  "column": 20
                },
                "end": {
                  "line": 94,
                  "column": 20
                }
              },
              "moduleName": "itp405-final-project/templates/details.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "col-xs-2");
              var el2 = dom.createTextNode("\n                            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("button");
              dom.setAttribute(el2, "type", "button");
              dom.setAttribute(el2, "class", "btn btn-primary");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode(" ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1, 1]);
              var morphs = new Array(4);
              morphs[0] = dom.createAttrMorph(element0, 'disabled');
              morphs[1] = dom.createElementMorph(element0);
              morphs[2] = dom.createMorphAt(element0, 0, 0);
              morphs[3] = dom.createMorphAt(element0, 2, 2);
              return morphs;
            },
            statements: [["attribute", "disabled", ["get", "isJoined", ["loc", [null, [92, 85], [92, 93]]]]], ["element", "action", ["joinEvent"], [], ["loc", [null, [92, 96], [92, 118]]]], ["inline", "if", [["get", "isJoined", ["loc", [null, [92, 124], [92, 132]]]], "Joined"], [], ["loc", [null, [92, 119], [92, 143]]]], ["inline", "unless", [["get", "isJoined", ["loc", [null, [92, 153], [92, 161]]]], "Join Event"], [], ["loc", [null, [92, 144], [92, 176]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 89,
                "column": 16
              },
              "end": {
                "line": 95,
                "column": 16
              }
            },
            "moduleName": "itp405-final-project/templates/details.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "unless", [["get", "isUser", ["loc", [null, [90, 30], [90, 36]]]]], [], 0, null, ["loc", [null, [90, 20], [94, 31]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 98,
              "column": 8
            }
          },
          "moduleName": "itp405-final-project/templates/details.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row event-row");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-12 event-details");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-sm-9 event-description");
          var el5 = dom.createTextNode("\n                        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "row");
          var el6 = dom.createTextNode("\n                            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "col-sm-12");
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("h3");
          var el8 = dom.createComment("");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("h5");
          var el8 = dom.createTextNode("Created By: ");
          dom.appendChild(el7, el8);
          var el8 = dom.createComment("");
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode(" ");
          dom.appendChild(el7, el8);
          var el8 = dom.createComment("");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                        ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("hr");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "row");
          var el6 = dom.createTextNode("\n                            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "col-sm-3 col-xs-6");
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("h4");
          var el8 = dom.createTextNode("Date");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("p");
          var el8 = dom.createComment("");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "col-sm-3 col-xs-6");
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("h4");
          var el8 = dom.createTextNode("Time");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("p");
          var el8 = dom.createComment("");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "col-sm-3 col-xs-6");
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("h4");
          var el8 = dom.createTextNode("Address");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("p");
          var el8 = dom.createComment("");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "col-sm-3 col-xs-6");
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("h4");
          var el8 = dom.createTextNode("City");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("p");
          var el8 = dom.createComment("");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          					");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "col-sm-3 col-xs-6");
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("h4");
          var el8 = dom.createTextNode("State");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("p");
          var el8 = dom.createComment("");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                           ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "col-sm-3 col-xs-6");
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("h4");
          var el8 = dom.createTextNode("Zip");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("p");
          var el8 = dom.createComment("");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                        ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createComment(" /.event-description ");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "col-xs-10");
          var el4 = dom.createTextNode("\n                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          dom.setAttribute(el4, "class", "nav nav-tabs");
          var el5 = dom.createTextNode("\n    				  ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createElement("a");
          var el7 = dom.createTextNode("Description");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n    				  ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createElement("a");
          var el7 = dom.createTextNode("Current Players");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n    				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" /.event-details ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" /.event-row ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1, 1]);
          var element5 = dom.childAt(element4, [1, 1]);
          var element6 = dom.childAt(element5, [1, 1]);
          var element7 = dom.childAt(element6, [3]);
          var element8 = dom.childAt(element5, [5]);
          var element9 = dom.childAt(element4, [3]);
          var element10 = dom.childAt(element9, [1]);
          var element11 = dom.childAt(element10, [1]);
          var element12 = dom.childAt(element11, [0]);
          var element13 = dom.childAt(element10, [3]);
          var element14 = dom.childAt(element13, [0]);
          var morphs = new Array(16);
          morphs[0] = dom.createMorphAt(dom.childAt(element6, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(element7, 1, 1);
          morphs[2] = dom.createMorphAt(element7, 3, 3);
          morphs[3] = dom.createMorphAt(dom.childAt(element8, [1, 3]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element8, [3, 3]), 0, 0);
          morphs[5] = dom.createMorphAt(dom.childAt(element8, [5, 3]), 0, 0);
          morphs[6] = dom.createMorphAt(dom.childAt(element8, [7, 3]), 0, 0);
          morphs[7] = dom.createMorphAt(dom.childAt(element8, [9, 3]), 0, 0);
          morphs[8] = dom.createMorphAt(dom.childAt(element8, [11, 3]), 0, 0);
          morphs[9] = dom.createAttrMorph(element11, 'class');
          morphs[10] = dom.createElementMorph(element12);
          morphs[11] = dom.createAttrMorph(element13, 'class');
          morphs[12] = dom.createElementMorph(element14);
          morphs[13] = dom.createMorphAt(element9, 3, 3);
          morphs[14] = dom.createMorphAt(element9, 4, 4);
          morphs[15] = dom.createMorphAt(element4, 6, 6);
          return morphs;
        },
        statements: [["content", "model.name", ["loc", [null, [16, 36], [16, 50]]]], ["content", "creator.first_name", ["loc", [null, [17, 48], [17, 70]]]], ["content", "creator.last_name", ["loc", [null, [17, 71], [17, 92]]]], ["content", "date", ["loc", [null, [24, 35], [24, 45]]]], ["content", "time", ["loc", [null, [28, 35], [28, 45]]]], ["content", "model.address", ["loc", [null, [32, 35], [32, 54]]]], ["content", "model.city", ["loc", [null, [36, 35], [36, 51]]]], ["content", "model.state", ["loc", [null, [40, 35], [40, 52]]]], ["content", "model.zip", ["loc", [null, [44, 35], [44, 50]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "description", ["loc", [null, [51, 26], [51, 37]]]], "active"], [], ["loc", [null, [51, 21], [51, 48]]]]]]], ["element", "action", ["setDescription"], [], ["loc", [null, [51, 53], [51, 80]]]], ["attribute", "class", ["concat", [["subexpr", "unless", [["get", "description", ["loc", [null, [52, 30], [52, 41]]]], "active"], [], ["loc", [null, [52, 21], [52, 52]]]]]]], ["element", "action", ["setCurrent"], [], ["loc", [null, [52, 57], [52, 81]]]], ["block", "if", [["get", "description", ["loc", [null, [54, 14], [54, 25]]]]], [], 0, null, ["loc", [null, [54, 8], [61, 15]]]], ["block", "unless", [["get", "description", ["loc", [null, [62, 18], [62, 29]]]]], [], 1, null, ["loc", [null, [62, 8], [87, 19]]]], ["block", "if", [["get", "notOver", ["loc", [null, [89, 22], [89, 29]]]]], [], 2, null, ["loc", [null, [89, 16], [95, 23]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 100,
            "column": 0
          }
        },
        "moduleName": "itp405-final-project/templates/details.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container main");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" /.container, .main ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element15 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element15, 1, 1);
        morphs[1] = dom.createMorphAt(element15, 2, 2);
        return morphs;
      },
      statements: [["block", "if", [["get", "error", ["loc", [null, [2, 10], [2, 15]]]]], [], 0, null, ["loc", [null, [2, 4], [8, 11]]]], ["block", "unless", [["get", "error", ["loc", [null, [9, 14], [9, 19]]]]], [], 1, null, ["loc", [null, [9, 4], [98, 19]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});