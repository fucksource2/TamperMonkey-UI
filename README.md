## API Reference

### `UI.Selectable`

A class for creating a selectable option in the TamperMonkey menu.

#### Constructor

```javascript
new UI.Selectable(displayName, storageKey, values, defaultValue, callback)
```

- **displayName**: `string` — The name displayed in the menu.
- **storageKey**: `string` — The key used for storing the selected value.
- **values**: `object` — An object containing key-value pairs for options.
- **defaultValue**: `string` — The default value if no selection has been made.
- **callback**: `function` — A function to execute when the selection changes.

#### Methods

- `get()`: Returns the currently selected value.
- `set(value)`: Sets the selected value.

---

### `UI.Checkbox`

A class for creating a checkbox in the TamperMonkey menu.

#### Constructor

```javascript
new UI.Checkbox(displayName, storageKey, defaultValue, callback)
```

- **displayName**: `string` — The name displayed in the menu.
- **storageKey**: `string` — The key used for storing the checkbox state.
- **defaultValue**: `boolean` — The default state of the checkbox (true/false).
- **callback**: `function` — A function to execute when the checkbox state changes.

#### Methods

- `get()`: Returns the current state of the checkbox.
- `toggle()`: Toggles the checkbox state.