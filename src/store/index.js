import StoreProvider from './store';
import LocalProvider from './providers/local';
import CookieProvider from './providers/cookie';
import SessionProvider from './providers/session';

class Store
{
    /**
     * Construtor.
     * 
     * @param {Object} crypto Objeto de criptografia caso precisa mascarar.
     */
    constructor (crypto = null) {
        this.local   = new StoreProvider(new LocalProvider(), crypto);
        this.cookie  = new StoreProvider(new CookieProvider(), crypto);
        this.session = new StoreProvider(new SessionProvider(), crypto);
    }

    /**
     * Instalar use no Vue.
     * 
     * @param {Vue} Instancia do Vue
     */
    install(Vue) {
        Vue.prototype.$store = this;
        Vue.store = this;
    }
};

export default Store;