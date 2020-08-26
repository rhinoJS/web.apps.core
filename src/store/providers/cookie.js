import Provider from './provider';
import VueCookie from "vue-cookie";

class Cookie extends Provider
{
    constructor() {
        super();
    }

    /**
     * Verifica se chave existe.
     * 
     * @param {string} key Chave para acesso
     * @return bool
     */
    has(key) {
        let value = VueCookie.get(key);
        return (value);
    };

    /**
     * Recuperar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @return mixed|string|null
     */
    get(key) {
        return VueCookie.get(key);
    };

    /**
     * Guardar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @param {mixed} value Valor a guardar
     * @param {mixed} opts Options do set
     */
    set(key, value, opts) {
        VueCookie.set(key, value, opts);
    };

    /**
     * Remover valor no store.
     * 
     * @param {string} key Nome da chave
     */
    remove(key) {
        VueCookie.delete(key);
    };
};

export default Cookie;