export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 2
            }
          },
          "moduleName": "itp405-final-project/templates/player.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","error");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","error",["loc",[null,[5,20],[5,29]]]]
        ],
        locals: ["error"],
        templates: []
      };
    }());
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
            "column": 1
          }
        },
        "moduleName": "itp405-final-project/templates/player.hbs"
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
        var el2 = dom.createTextNode("	");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","error.id",["loc",[null,[4,10],[4,18]]]]],[],0,null,["loc",[null,[4,2],[6,11]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.5",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 35,
                    "column": 16
                  },
                  "end": {
                    "line": 41,
                    "column": 19
                  }
                },
                "moduleName": "itp405-final-project/templates/player.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("							                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
                dom.setAttribute(el1,"href","");
                dom.setAttribute(el1,"style","height: 120px; width = 500px;");
                var el2 = dom.createTextNode("\n							                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("h4");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("  \n							                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("p");
                var el3 = dom.createTextNode("Location: ");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode(", ");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n							                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("span");
                dom.setAttribute(el2,"class","clearfix");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n							                 ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element6 = dom.childAt(fragment, [1]);
                var element7 = dom.childAt(element6, [3]);
                var morphs = new Array(3);
                morphs[0] = dom.createMorphAt(dom.childAt(element6, [1]),0,0);
                morphs[1] = dom.createMorphAt(element7,1,1);
                morphs[2] = dom.createMorphAt(element7,3,3);
                return morphs;
              },
              statements: [
                ["content","event.name",["loc",[null,[37,31],[37,45]]]],
                ["content","event.city",["loc",[null,[38,40],[38,56]]]],
                ["content","event.state",["loc",[null,[38,58],[38,73]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 33,
                  "column": 8
                },
                "end": {
                  "line": 43,
                  "column": 8
                }
              },
              "moduleName": "itp405-final-project/templates/player.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("									");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","results row-event");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("						            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
              return morphs;
            },
            statements: [
              ["block","link-to",["details",["get","event.id",["loc",[null,[35,37],[35,45]]]]],[],0,null,["loc",[null,[35,16],[41,31]]]]
            ],
            locals: ["event"],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 7
              },
              "end": {
                "line": 44,
                "column": 7
              }
            },
            "moduleName": "itp405-final-project/templates/player.hbs"
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
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","each",[["get","currentEvents",["loc",[null,[33,16],[33,29]]]]],[],0,null,["loc",[null,[33,8],[43,17]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 5
            },
            "end": {
              "line": 47,
              "column": 5
            }
          },
          "moduleName": "itp405-final-project/templates/player.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("						");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","event-description");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("							");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n						");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element8 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element8,1,1);
          morphs[1] = dom.createMorphAt(element8,3,3);
          return morphs;
        },
        statements: [
          ["block","if",[["get","currentEvents",["loc",[null,[32,13],[32,26]]]]],[],0,null,["loc",[null,[32,7],[44,14]]]],
          ["inline","unless",[["get","currentEvents",["loc",[null,[45,16],[45,29]]]],"No Events scheduled. Go explore!"],[],["loc",[null,[45,7],[45,66]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.5",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 53,
                    "column": 16
                  },
                  "end": {
                    "line": 59,
                    "column": 19
                  }
                },
                "moduleName": "itp405-final-project/templates/player.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("							                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
                dom.setAttribute(el1,"href","");
                dom.setAttribute(el1,"style","height: 120px; width = 500px;");
                var el2 = dom.createTextNode("\n							                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("h4");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("  \n							                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("p");
                var el3 = dom.createTextNode("Location: ");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode(", ");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n							                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("span");
                dom.setAttribute(el2,"class","clearfix");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n							                 ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element3 = dom.childAt(fragment, [1]);
                var element4 = dom.childAt(element3, [3]);
                var morphs = new Array(3);
                morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
                morphs[1] = dom.createMorphAt(element4,1,1);
                morphs[2] = dom.createMorphAt(element4,3,3);
                return morphs;
              },
              statements: [
                ["content","event.name",["loc",[null,[55,31],[55,45]]]],
                ["content","event.city",["loc",[null,[56,40],[56,56]]]],
                ["content","event.state",["loc",[null,[56,58],[56,73]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 51,
                  "column": 8
                },
                "end": {
                  "line": 61,
                  "column": 11
                }
              },
              "moduleName": "itp405-final-project/templates/player.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("									");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","results row-event");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("						            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("							\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
              return morphs;
            },
            statements: [
              ["block","link-to",["details",["get","event.id",["loc",[null,[53,37],[53,45]]]]],[],0,null,["loc",[null,[53,16],[59,31]]]]
            ],
            locals: ["event"],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 50,
                "column": 7
              },
              "end": {
                "line": 62,
                "column": 7
              }
            },
            "moduleName": "itp405-final-project/templates/player.hbs"
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
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","each",[["get","createdEvents",["loc",[null,[51,16],[51,29]]]]],[],0,null,["loc",[null,[51,8],[61,20]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 5
            },
            "end": {
              "line": 65,
              "column": 5
            }
          },
          "moduleName": "itp405-final-project/templates/player.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("						");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","event-description");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("							");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n						");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element5,1,1);
          morphs[1] = dom.createMorphAt(element5,3,3);
          return morphs;
        },
        statements: [
          ["block","if",[["get","createdEvents",["loc",[null,[50,13],[50,26]]]]],[],0,null,["loc",[null,[50,7],[62,14]]]],
          ["inline","unless",[["get","createdEvents",["loc",[null,[63,16],[63,29]]]],"No Events created. Create an event!"],[],["loc",[null,[63,7],[63,69]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.5",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 71,
                    "column": 16
                  },
                  "end": {
                    "line": 77,
                    "column": 19
                  }
                },
                "moduleName": "itp405-final-project/templates/player.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("							                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
                dom.setAttribute(el1,"href","");
                dom.setAttribute(el1,"style","height: 120px; width = 500px;");
                var el2 = dom.createTextNode("\n							                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("h4");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("  \n							                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("p");
                var el3 = dom.createTextNode("Location: ");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode(", ");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n							                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("span");
                dom.setAttribute(el2,"class","clearfix");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n							                 ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var element1 = dom.childAt(element0, [3]);
                var morphs = new Array(3);
                morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
                morphs[1] = dom.createMorphAt(element1,1,1);
                morphs[2] = dom.createMorphAt(element1,3,3);
                return morphs;
              },
              statements: [
                ["content","event.name",["loc",[null,[73,31],[73,45]]]],
                ["content","event.city",["loc",[null,[74,40],[74,56]]]],
                ["content","event.state",["loc",[null,[74,58],[74,73]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 69,
                  "column": 8
                },
                "end": {
                  "line": 79,
                  "column": 8
                }
              },
              "moduleName": "itp405-final-project/templates/player.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("									");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","results row-event");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("						            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
              return morphs;
            },
            statements: [
              ["block","link-to",["details",["get","event.id",["loc",[null,[71,37],[71,45]]]]],[],0,null,["loc",[null,[71,16],[77,31]]]]
            ],
            locals: ["event"],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 68,
                "column": 7
              },
              "end": {
                "line": 80,
                "column": 7
              }
            },
            "moduleName": "itp405-final-project/templates/player.hbs"
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
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","each",[["get","pastEvents",["loc",[null,[69,16],[69,26]]]]],[],0,null,["loc",[null,[69,8],[79,17]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 66,
              "column": 5
            },
            "end": {
              "line": 83,
              "column": 5
            }
          },
          "moduleName": "itp405-final-project/templates/player.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("						");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","event-description");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("							");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n						");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element2,1,1);
          morphs[1] = dom.createMorphAt(element2,3,3);
          return morphs;
        },
        statements: [
          ["block","if",[["get","pastEvents",["loc",[null,[68,13],[68,23]]]]],[],0,null,["loc",[null,[68,7],[80,14]]]],
          ["inline","unless",[["get","pastEvents",["loc",[null,[81,16],[81,26]]]],"No Events played. Go explore!"],[],["loc",[null,[81,7],[81,60]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 9,
            "column": 1
          },
          "end": {
            "line": 87,
            "column": 5
          }
        },
        "moduleName": "itp405-final-project/templates/player.hbs"
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
        dom.setAttribute(el1,"class","row event-row");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-xs-12 event-details");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-9 event-description");
        var el5 = dom.createTextNode("\n                        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","row");
        var el6 = dom.createTextNode("\n                            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","col-sm-12");
        var el7 = dom.createTextNode("\n                                ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                                ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("NTRP Rating: ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
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
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-10");
        var el4 = dom.createTextNode("\n	                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","nav nav-tabs");
        var el5 = dom.createTextNode("\n					  ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("Current Events");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n					  ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("Created Events");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n					  ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("Past Events");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n					");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("	            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.event-details ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" /.event ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element9 = dom.childAt(fragment, [1, 1]);
        var element10 = dom.childAt(element9, [1, 1, 1, 1]);
        var element11 = dom.childAt(element10, [1]);
        var element12 = dom.childAt(element9, [5]);
        var element13 = dom.childAt(element12, [1]);
        var element14 = dom.childAt(element13, [1]);
        var element15 = dom.childAt(element14, [0]);
        var element16 = dom.childAt(element13, [3]);
        var element17 = dom.childAt(element16, [0]);
        var element18 = dom.childAt(element13, [5]);
        var element19 = dom.childAt(element18, [0]);
        var morphs = new Array(13);
        morphs[0] = dom.createMorphAt(element11,0,0);
        morphs[1] = dom.createMorphAt(element11,2,2);
        morphs[2] = dom.createMorphAt(dom.childAt(element10, [3]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(element10, [5]),0,0);
        morphs[4] = dom.createAttrMorph(element14, 'class');
        morphs[5] = dom.createElementMorph(element15);
        morphs[6] = dom.createAttrMorph(element16, 'class');
        morphs[7] = dom.createElementMorph(element17);
        morphs[8] = dom.createAttrMorph(element18, 'class');
        morphs[9] = dom.createElementMorph(element19);
        morphs[10] = dom.createMorphAt(element12,3,3);
        morphs[11] = dom.createMorphAt(element12,4,4);
        morphs[12] = dom.createMorphAt(element12,5,5);
        return morphs;
      },
      statements: [
        ["content","model.first_name",["loc",[null,[16,36],[16,56]]]],
        ["content","model.last_name",["loc",[null,[16,57],[16,76]]]],
        ["content","model.rating",["loc",[null,[17,48],[17,64]]]],
        ["content","user.email",["loc",[null,[18,35],[18,49]]]],
        ["attribute","class",["concat",[["subexpr","if",[["get","current",["loc",[null,[26,23],[26,30]]]],"active"],[],["loc",[null,[26,18],[26,41]]]]]]],
        ["element","action",["setCurrent"],[],["loc",[null,[26,46],[26,69]]]],
        ["attribute","class",["concat",[["subexpr","if",[["get","created",["loc",[null,[27,23],[27,30]]]],"active"],[],["loc",[null,[27,18],[27,41]]]]]]],
        ["element","action",["setCreated"],[],["loc",[null,[27,46],[27,69]]]],
        ["attribute","class",["concat",[["subexpr","if",[["get","past",["loc",[null,[28,23],[28,27]]]],"active"],[],["loc",[null,[28,18],[28,38]]]]]]],
        ["element","action",["setPast"],[],["loc",[null,[28,43],[28,64]]]],
        ["block","if",[["get","current",["loc",[null,[30,11],[30,18]]]]],[],0,null,["loc",[null,[30,5],[47,12]]]],
        ["block","if",[["get","created",["loc",[null,[48,11],[48,18]]]]],[],1,null,["loc",[null,[48,5],[65,12]]]],
        ["block","if",[["get","past",["loc",[null,[66,11],[66,15]]]]],[],2,null,["loc",[null,[66,5],[83,12]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.5",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 89,
          "column": 0
        }
      },
      "moduleName": "itp405-final-project/templates/player.hbs"
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
      dom.setAttribute(el1,"class","container main");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createComment(" /.container, .main ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element20 = dom.childAt(fragment, [1]);
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(element20,1,1);
      morphs[1] = dom.createMorphAt(element20,2,2);
      return morphs;
    },
    statements: [
      ["block","if",[["get","error",["loc",[null,[2,10],[2,15]]]]],[],0,null,["loc",[null,[2,4],[8,8]]]],
      ["block","unless",[["get","error",["loc",[null,[9,11],[9,16]]]]],[],1,null,["loc",[null,[9,1],[87,16]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));