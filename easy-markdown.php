<?php
/*
Plugin Name: Easy Markdown
Plugin URI: http://davidwells.io/
Description: Write in Markdown, publish in WordPress
Version: 0.1
Author: David Wells
Author URI: http://davidwells.io
*/

define('EASY_MARKDOWN_URLPATH', plugins_url('/', __FILE__));
define('EASY_MARKDOWN_PATH',WP_PLUGIN_DIR.'/'.dirname(plugin_basename(__FILE__)).'/');

include_once( EASY_MARKDOWN_PATH . 'load-scripts.php');
include_once( EASY_MARKDOWN_PATH . 'includes/markdown-extra.php');
include_once( EASY_MARKDOWN_PATH . 'includes/github-flavored-markdown.php');
include_once( EASY_MARKDOWN_PATH . 'includes/wpcom-markdown.php');

add_filter('the_content', 'easy_markdown_prism_code_pre_tag');
/**
 * Wraps all pre tags with the language specified
 */
function easy_markdown_prism_code_pre_tag($content) {
  $content = preg_replace('/\<code class="(.*?)"\>/s', '<code class="language-$1">', $content);
  //$content = preg_replace('/\<pre(.*?)\><code class="(.*?)"\>/s', '<pre class="line-numbers"><code class="language-$2">', $content);
  //$content = preg_replace('/\<\/pre(.*?)\>/s', '</code></pre>', $content);
  return $content;
}