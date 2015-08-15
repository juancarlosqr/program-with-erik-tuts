import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        facebookLogin() {
            this.get('session')
                .authenticate('simple-auth-authenticator:torii', 'facebook-oauth2')
                .then(() => {
                    this.transitionTo('protected');
                });
            return;
        }
    }
});
