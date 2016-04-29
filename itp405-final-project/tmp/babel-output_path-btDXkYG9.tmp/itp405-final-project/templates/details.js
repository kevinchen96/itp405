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
                "line": 48,
                "column": 16
              },
              "end": {
                "line": 50,
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
          statements: [["content", "model.description", ["loc", [null, [49, 17], [49, 38]]]]],
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
              "line": 46,
              "column": 8
            },
            "end": {
              "line": 53,
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
        statements: [["block", "if", [["get", "model.description", ["loc", [null, [48, 22], [48, 39]]]]], [], 0, null, ["loc", [null, [48, 16], [50, 23]]]], ["inline", "unless", [["get", "model.description", ["loc", [null, [51, 25], [51, 42]]]], "No Description provided."], [], ["loc", [null, [51, 16], [51, 71]]]]],
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
                  "line": 67,
                  "column": 13
                },
                "end": {
                  "line": 73,
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
            statements: [["content", "player.first_name", ["loc", [null, [69, 23], [69, 44]]]], ["content", "player.last_name", ["loc", [null, [70, 23], [70, 43]]]], ["content", "player.rating", ["loc", [null, [71, 23], [71, 40]]]]],
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
                "line": 56,
                "column": 12
              },
              "end": {
                "line": 76,
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
          statements: [["block", "each", [["get", "model.users", ["loc", [null, [67, 21], [67, 32]]]]], [], 0, null, ["loc", [null, [67, 13], [73, 23]]]]],
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
              "line": 54,
              "column": 8
            },
            "end": {
              "line": 79,
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
        statements: [["block", "if", [["get", "model.users", ["loc", [null, [56, 18], [56, 29]]]]], [], 0, null, ["loc", [null, [56, 12], [76, 19]]]], ["inline", "unless", [["get", "model.users", ["loc", [null, [77, 21], [77, 32]]]], "No participants at this time"], [], ["loc", [null, [77, 12], [77, 65]]]]],
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
                "line": 82,
                "column": 20
              },
              "end": {
                "line": 86,
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
          statements: [["attribute", "disabled", ["get", "isJoined", ["loc", [null, [84, 85], [84, 93]]]]], ["element", "action", ["joinEvent"], [], ["loc", [null, [84, 96], [84, 118]]]], ["inline", "if", [["get", "isJoined", ["loc", [null, [84, 124], [84, 132]]]], "Joined"], [], ["loc", [null, [84, 119], [84, 143]]]], ["inline", "unless", [["get", "isJoined", ["loc", [null, [84, 153], [84, 161]]]], "Join Event"], [], ["loc", [null, [84, 144], [84, 176]]]]],
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
              "line": 81,
              "column": 16
            },
            "end": {
              "line": 87,
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
        statements: [["block", "unless", [["get", "isUser", ["loc", [null, [82, 30], [82, 36]]]]], [], 0, null, ["loc", [null, [82, 20], [86, 31]]]]],
        locals: [],
        templates: [child0]
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
            "line": 91,
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
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row event-row");
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12 event-details");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "row");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-sm-9 event-description");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "row");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-sm-12");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h3");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h5");
        var el9 = dom.createTextNode("Created By: ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode(" ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("hr");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "row");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-sm-3 col-xs-6");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h4");
        var el9 = dom.createTextNode("Date");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-sm-3 col-xs-6");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h4");
        var el9 = dom.createTextNode("Time");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-sm-3 col-xs-6");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h4");
        var el9 = dom.createTextNode("Address");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-sm-3 col-xs-6");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h4");
        var el9 = dom.createTextNode("City");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          					");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-sm-3 col-xs-6");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h4");
        var el9 = dom.createTextNode("State");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                           ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-sm-3 col-xs-6");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h4");
        var el9 = dom.createTextNode("Zip");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" /.event-description ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-10");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "nav nav-tabs");
        var el6 = dom.createTextNode("\n    				  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        var el8 = dom.createTextNode("Description");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    				  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        var el8 = dom.createTextNode("Current Players");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.event-details ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.event-row ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" /.container, .main ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [1, 1, 1]);
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
      statements: [["content", "model.name", ["loc", [null, [8, 36], [8, 50]]]], ["content", "creator.first_name", ["loc", [null, [9, 48], [9, 70]]]], ["content", "creator.last_name", ["loc", [null, [9, 71], [9, 92]]]], ["content", "date", ["loc", [null, [16, 35], [16, 45]]]], ["content", "time", ["loc", [null, [20, 35], [20, 45]]]], ["content", "model.address", ["loc", [null, [24, 35], [24, 54]]]], ["content", "model.city", ["loc", [null, [28, 35], [28, 51]]]], ["content", "model.state", ["loc", [null, [32, 35], [32, 52]]]], ["content", "model.zip", ["loc", [null, [36, 35], [36, 50]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "description", ["loc", [null, [43, 26], [43, 37]]]], "active"], [], ["loc", [null, [43, 21], [43, 48]]]]]]], ["element", "action", ["setDescription"], [], ["loc", [null, [43, 53], [43, 80]]]], ["attribute", "class", ["concat", [["subexpr", "unless", [["get", "description", ["loc", [null, [44, 30], [44, 41]]]], "active"], [], ["loc", [null, [44, 21], [44, 52]]]]]]], ["element", "action", ["setCurrent"], [], ["loc", [null, [44, 57], [44, 81]]]], ["block", "if", [["get", "description", ["loc", [null, [46, 14], [46, 25]]]]], [], 0, null, ["loc", [null, [46, 8], [53, 15]]]], ["block", "unless", [["get", "description", ["loc", [null, [54, 18], [54, 29]]]]], [], 1, null, ["loc", [null, [54, 8], [79, 19]]]], ["block", "if", [["get", "notOver", ["loc", [null, [81, 22], [81, 29]]]]], [], 2, null, ["loc", [null, [81, 16], [87, 23]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});