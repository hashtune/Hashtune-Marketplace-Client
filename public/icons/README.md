# **Hashtune Marketplace . SVG Icons Pack**

The *icons/svg* folder inside the *public* folder contains the icons we have in our design as separate SVG files, `demo.html` lists the icons that we've used so far.

---

- To insert your icons as inline SVGs with the `<use>` element
- copy the `<svg>` element that contains symbol definitions from the source of the demo.html file
- After copying this SVG, you can reference your glyphs like the following:

```html
<svg><use xlink:href="{path_to_our_assets}/icons/sprite.svg#hashtune-close"></use></svg>
```

> **sprite.svg**'s size is 39 KB and it has all the icons compressed and callable.