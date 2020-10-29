import auth         from './auth';
import middlewares  from './middlewares';
import store        from './store';
import url          from './router/url';
import router       from './router/router';
import EventEmitter from 'events';

export default {
    auth,
    middlewares,
    store,
    url,
    router,
    events: new EventEmitter(),
};