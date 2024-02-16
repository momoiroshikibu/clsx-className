# clsx-className

## About the extension

Using this extension, you can convert space concatenated class names to `clsx` style.

```
<!-- example -- >
<div className="a b c d" />

<!-- converted -->
<div className={clsx("a", "b", "c", "d")} />
```

## Command Pallete

| Name    | Command ID             | Description                                                      |
| ------- | ---------------------- | ---------------------------------------------------------------- |
| convert | clsx-className.convert | convert `className="a b c"` to `className={clsx("a", "b", "c")}` |
