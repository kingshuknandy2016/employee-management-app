export const storageKeys = {
  auth: ['token'],
  userPreferences: ['theme'],
};

class BrowserStorageServiceImplementation {
  browserStorage: Storage;
  static instance: BrowserStorageServiceImplementation;

  static getInstance() {
    if (!BrowserStorageServiceImplementation.instance) {
      BrowserStorageServiceImplementation.instance =
        new BrowserStorageServiceImplementation();
    }
    return BrowserStorageServiceImplementation.instance;
  }

  constructor() {
    this.browserStorage = window.localStorage;
  }

  /**
   * Methods puts the value in local storage
   * @param key : The key to be stored
   * @param value : The value to be stored
   * @param module : Optional the module name. So that the key would be module_key
   */
  put(key: string, value: string | null, module?: string) {
    const keyToBeSet =
      module && module?.trim() != '' ? `${module}_${key}` : key;
    value = JSON.stringify(value);
    this.browserStorage.setItem(keyToBeSet, value);
  }

  /**
   * Methods gets the value in local storage
   * @param key : The key to be stored
   * @param module : Optional the module name. So that the key would be module_key
   */
  get(key: string, module?: string) {
    const keyToBeGet =
      module && module?.trim() != '' ? `${module}_${key}` : key;
    let value = this.browserStorage.getItem(keyToBeGet);
    if (value == null) return value;
    value = JSON.parse(value);
    return value;
  }

  /**
   * Clears the value from local storage
   */
  clear() {
    this.browserStorage.clear();
    sessionStorage.clear();
  }
}

export const BrowserStorageService =
  BrowserStorageServiceImplementation.getInstance();
