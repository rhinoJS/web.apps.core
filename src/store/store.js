import Crypto from './crypto';

class StoreProvider
{
    /**
     * Construtor.
     * 
     * @param {Object} provider Objeto provider para manipulacao
     * @param {Object} cripto Objeto de criptografia caso precisa mascarar.
     */
    constructor (provider, cripto = null) {
        this.$provider = provider;
        this.$cripto = (cripto == null) ? Crypto.noCrypto : cripto;
    }

    /**
     * Verifica se existe.
     * 
     * @param {string} key Nome do campo no localStorage
     * @return bool
     */
    has(key) {
        return this.$provider.has(key);
    };

    /**
     * Recuperar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @param {mixed} def Valor padrao
     * @return mixed|string|null
     */
    get(key, def = null) {
        var value = this.$provider.get(key, def);

        // Passar o valor pelo cripto
        if (value) {
            value = this.$cripto.decrypt(value);
        }

        return value ? value : def;
    };

    /**
     * Guardar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @param {mixed} value Valor a guardar
     */
    set(key, value) {

        // Passar valor pelo cripto
        value = this.$cripto.encrypt(value);

        this.$provider.set(key, value);
    };

    /**
     * Remover valor no store.
     * 
     * @param {string} key Nome da chave
     */
    remove(key) {
        this.$provider.remove(key);
    };
};

export default StoreProvider;