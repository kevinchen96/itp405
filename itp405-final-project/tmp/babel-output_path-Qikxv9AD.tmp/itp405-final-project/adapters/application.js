define('itp405-final-project/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].RESTAdapter.extend({
        namespace: 'api'
    });
});