// ==UserScript==
// @name         TamperMonkey UI
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @author       Ori
// @description  Let's make checkboxes / selectable in TamperMonkey
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

(() => {
    window.UI = class {
        static Selectable = class {
            constructor(displayName, storageKey, values, defaultValue, callback) {
                this.displayName = displayName;
                this.storageKey = storageKey;
                this.values = values;
                this.defaultValue = defaultValue;
                this.callback = callback;

                GM_registerMenuCommand(this.displayName, () => {
                    const keys = Object.keys(this.values);
                    const options = prompt(`${this.displayName} (current: ${this.get()}) \n\n${keys.map(key => this.values[key]).join('\n')}`);
                    
                    this.set(options);
                    this.callback();
                });
            }

            get = () => {
                return GM_getValue(this.storageKey, this.defaultValue);
            }

            set = (value) => {
                const keys = Object.keys(this.values);
                GM_setValue(this.storageKey, keys.find(key => this.values[key] === value));
            }
        }

        static Checkbox = class {
            constructor(displayName, storageKey, defaultValue, callback) {
                this.displayName = displayName;
                this.storageKey = storageKey;
                this.defaultValue = defaultValue;
                this.callback = callback;

                GM_registerMenuCommand(this.displayName, () => {
                    this.toggle();
                    this.callback();
                });
            }

            get = () => {
                return GM_getValue(this.storageKey, this.defaultValue);
            }

            set = (state) => {
                GM_setValue(this.storageKey, state);
            }

            toggle = () => {
                GM_setValue(this.storageKey, !this.get());
            }
        }
    }
})();
