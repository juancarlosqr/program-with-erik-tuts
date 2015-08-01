import Ember from 'ember';

export default Ember.Service.extend({
    isAuthenticated: true,
    thisistest: function() {
        return "This is the bot";
    }
});
