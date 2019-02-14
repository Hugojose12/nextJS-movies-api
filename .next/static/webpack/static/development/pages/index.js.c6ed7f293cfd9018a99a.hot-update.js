webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OmdbMovies; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _layouts_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layouts/base */ "./layouts/base.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _component_movie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../component/movie */ "./component/movie.js");
/* harmony import */ var _component_FormMovies__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../component/FormMovies */ "./component/FormMovies.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_17__);









var _jsxFileName = "C:\\Users\\Gustavo Ortiz\\Desktop\\Proyect React\\peliculas\\pages\\index.jsx";










var OmdbMovies =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(OmdbMovies, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(OmdbMovies, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
        var query, page, responde, movies;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                page = query.page ? Number(query.page) : 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("http://www.omdbapi.com/?apikey=c9d02680&s=superman&page=".concat(page));

              case 4:
                responde = _context.sent;
                movies = responde.data.Search;
                return _context.abrupt("return", {
                  movies: movies,
                  page: page
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function OmdbMovies(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, OmdbMovies);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(OmdbMovies).call(this, props));
    _this.state = {
      movies: null,
      search: null,
      page: 1
    };
    _this.handleAddMovies = _this.handleAddMovies.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)));
    _this.handleToggleClick = _this.handleToggleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(OmdbMovies, [{
    key: "handleToggleClick",
    value: function () {
      var _handleToggleClick = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
        var page, responde, movies;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(e.target.name == "next")) {
                  _context2.next = 11;
                  break;
                }

                page = 4;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("http://www.omdbapi.com/?apikey=c9d02680&s=".concat(this.state.search, "&").concat(page));

              case 4:
                responde = _context2.sent;
                movies = responde.data.Search;
                console.log(movies);
                this.setState({
                  movies: movies,
                  page: this.state.page + 1
                });
                console.log(this.state);
                _context2.next = 12;
                break;

              case 11:
                this.setState({
                  page: this.state.page - 1
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleToggleClick(_x2) {
        return _handleToggleClick.apply(this, arguments);
      }

      return handleToggleClick;
    }()
  }, {
    key: "renderPagination",
    value: function renderPagination() {
      if (this.state.movies) {
        var previous_state = this.state.page > 1 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "page-item",
          name: "previous",
          onClick: this.handleToggleClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Previous") : null;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("nav", {
          "aria-label": "Page navigation example",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
          className: "pagination",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, previous_state, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: "page-item",
          name: "next",
          onClick: this.handleToggleClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "Next")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("style", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, "\n\t\t\t\t\t\t.pagination {\n\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t}\n\t\t\t\t\t"));
      } else {
        var previous_props = this.props.page > 1 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          className: "page-item",
          href: "/?page=".concat(this.props.page - 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          className: "page-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "Previous")) : null;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("nav", {
          "aria-label": "Page navigation example",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
          className: "pagination",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, previous_props, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          className: "page-item",
          href: "/?page=".concat(this.props.page + 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          className: "page-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Next"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("style", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "\n\t\t\t\t\t\t.pagination {\n\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t}\n\t\t\t\t\t"));
      }
    }
  }, {
    key: "handleAddMovies",
    value: function handleAddMovies(movies, search) {
      this.setState({
        movies: movies,
        page: 2,
        search: search
      });
      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_layouts_base__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "App Movie")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_component_FormMovies__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onAddMovies: this.handleAddMovies,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "movies",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, this.state.movies ? this.state.movies.map(function (movie) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_component_movie__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: movie.imdbID
        }, movie, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }));
      }) : this.props.movies.map(function (movie) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_component_movie__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: movie.imdbID
        }, movie, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "\n\t\t\t\t\t\t.movies {\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t}\n\t\t\t\t\t")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, this.renderPagination()));
    }
  }]);

  return OmdbMovies;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c6ed7f293cfd9018a99a.hot-update.js.map