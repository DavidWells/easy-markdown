# Easy Markdown

<img src="http://davidwells.io/wp-content/uploads/2016/05/easy-markdown-logo-300x110.png" alt="easy-markdown-logo" width="300" height="110" class="aligncenter size-medium wp-image-5280" />

Blogging about code in WordPress has historically been a **HUGE** pain in the ass.

TinyMCE and the WordPress visual editor garble your code like it's their job.

I've tried every single syntax highlighter plugin in existence.

They all fell short in one way or another.

So like any good developer. I rolled my own.

# Easy Markdown WordPress Plugin

http://www.youtube.com/watch?v=dRMow19g0VU

[Download Easy Markdown Plugin](https://github.com/davidwells/easy-markdown)

Syntax highlighting is handled by [Prism](http://prismjs.com/).

The Markdown parser was shamelessly gutted from [JetPack](https://wordpress.org/plugins/jetpack/) and [Evan Solomon](https://github.com/evansolomon)'s GitHub flavored markdown script

# Examples:

```js
// JavaScript!
var greeting = 'What up G'
alert(greeting)

console.log('log');
```

```html
// HTML!
<a href="http://davidwells.io">
  Wowza!!!!
</a>
```

```css
/* CSS! */
.ninja {
 visibility: hidden;
}
```

```php
// PHP!
<?php
  echo 'Derp';
?>
```

```bash
// Bash!
# Bash script
mkdir lololol && cd lololol
```

# Customizing it

I'm not supporting custom use cases and styles.

You can fork the plugin and do this yourself!

To change CSS, edit the `prism.css` [file](https://github.com/DavidWells/easy-markdown/blob/master/css/prism.css)

To change/customize prism edit the `prism.js` [file](https://github.com/DavidWells/easy-markdown/blob/master/js/prism.js).

To [add support for more custom post types alter these lines](https://github.com/DavidWells/easy-markdown/blob/master/includes/wpcom-markdown.php#L356-L360).

# Happy Blogging!

# Troubleshooting

Don't install with JetPack. It will probably cause problems