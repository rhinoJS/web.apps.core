import StoreProvider from './store';
import LocalProvider from './providers/local';
import CookieProvider from './providers/cookie';
import SessionProvider from './providers/session';

class Store
{
    /**
     * Construtor.
     * 
     * @param {Object} cripto Objeto de criptografia caso precisa mascarar.
     */
    constructor (cripto = null) {
        this.local   = StoreProvider(new LocalProvider(), cripto);
        this.cookie  = StoreProvider(new CookieProvider(), cripto);
        this.session = StoreProvider(new SessionProvider(), cripto);
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