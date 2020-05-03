<!DOCTYPE html>
<html>
  <head>
    <title>&#x7B2C;&#x5341;&#x4E00;&#x5468;&#x4F5C;&#x4E1A;</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      rel="stylesheet"
      href="file:///c:\Users\Administrator\.vscode\extensions\shd101wyy.markdown-preview-enhanced-0.5.3\node_modules\@shd101wyy\mume\dependencies\katex\katex.min.css"
    />

    <style>
      /**
 * prism.js Github theme based on GitHub's theme.
 * @author Sam Clarke
 */
      code[class*='language-'],
      pre[class*='language-'] {
        color: #333;
        background: none;
        font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.4;

        -moz-tab-size: 8;
        -o-tab-size: 8;
        tab-size: 8;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
      }

      /* Code blocks */
      pre[class*='language-'] {
        padding: 0.8em;
        overflow: auto;
        /* border: 1px solid #ddd; */
        border-radius: 3px;
        /* background: #fff; */
        background: #f5f5f5;
      }

      /* Inline code */
      :not(pre) > code[class*='language-'] {
        padding: 0.1em;
        border-radius: 0.3em;
        white-space: normal;
        background: #f5f5f5;
      }

      .token.comment,
      .token.blockquote {
        color: #969896;
      }

      .token.cdata {
        color: #183691;
      }

      .token.doctype,
      .token.punctuation,
      .token.variable,
      .token.macro.property {
        color: #333;
      }

      .token.operator,
      .token.important,
      .token.keyword,
      .token.rule,
      .token.builtin {
        color: #a71d5d;
      }

      .token.string,
      .token.url,
      .token.regex,
      .token.attr-value {
        color: #183691;
      }

      .token.property,
      .token.number,
      .token.boolean,
      .token.entity,
      .token.atrule,
      .token.constant,
      .token.symbol,
      .token.command,
      .token.code {
        color: #0086b3;
      }

      .token.tag,
      .token.selector,
      .token.prolog {
        color: #63a35c;
      }

      .token.function,
      .token.namespace,
      .token.pseudo-element,
      .token.class,
      .token.class-name,
      .token.pseudo-class,
      .token.id,
      .token.url-reference .token.variable,
      .token.attr-name {
        color: #795da3;
      }

      .token.entity {
        cursor: help;
      }

      .token.title,
      .token.title .token.punctuation {
        font-weight: bold;
        color: #1d3e81;
      }

      .token.list {
        color: #ed6a43;
      }

      .token.inserted {
        background-color: #eaffea;
        color: #55a532;
      }

      .token.deleted {
        background-color: #ffecec;
        color: #bd2c00;
      }

      .token.bold {
        font-weight: bold;
      }

      .token.italic {
        font-style: italic;
      }

      /* JSON */
      .language-json .token.property {
        color: #183691;
      }

      .language-markup .token.tag .token.punctuation {
        color: #333;
      }

      /* CSS */
      code.language-css,
      .language-css .token.function {
        color: #0086b3;
      }

      /* YAML */
      .language-yaml .token.atrule {
        color: #63a35c;
      }

      code.language-yaml {
        color: #183691;
      }

      /* Ruby */
      .language-ruby .token.function {
        color: #333;
      }

      /* Markdown */
      .language-markdown .token.url {
        color: #795da3;
      }

      /* Makefile */
      .language-makefile .token.symbol {
        color: #795da3;
      }

      .language-makefile .token.variable {
        color: #183691;
      }

      .language-makefile .token.builtin {
        color: #0086b3;
      }

      /* Bash */
      .language-bash .token.keyword {
        color: #0086b3;
      }

      /* highlight */
      pre[data-line] {
        position: relative;
        padding: 1em 0 1em 3em;
      }
      pre[data-line] .line-highlight-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        background-color: transparent;
        display: block;
        width: 100%;
      }

      pre[data-line] .line-highlight {
        position: absolute;
        left: 0;
        right: 0;
        padding: inherit 0;
        margin-top: 1em;
        background: hsla(24, 20%, 50%, 0.08);
        background: linear-gradient(
          to right,
          hsla(24, 20%, 50%, 0.1) 70%,
          hsla(24, 20%, 50%, 0)
        );
        pointer-events: none;
        line-height: inherit;
        white-space: pre;
      }

      pre[data-line] .line-highlight:before,
      pre[data-line] .line-highlight[data-end]:after {
        content: attr(data-start);
        position: absolute;
        top: 0.4em;
        left: 0.6em;
        min-width: 1em;
        padding: 0 0.5em;
        background-color: hsla(24, 20%, 50%, 0.4);
        color: hsl(24, 20%, 95%);
        font: bold 65%/1.5 sans-serif;
        text-align: center;
        vertical-align: 0.3em;
        border-radius: 999px;
        text-shadow: none;
        box-shadow: 0 1px white;
      }

      pre[data-line] .line-highlight[data-end]:after {
        content: attr(data-end);
        top: auto;
        bottom: 0.4em;
      }
      html body {
        font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans,
          sans-serif;
        font-size: 16px;
        line-height: 1.6;
        color: #333;
        background-color: #fff;
        overflow: initial;
        box-sizing: border-box;
        word-wrap: break-word;
      }
      html body > :first-child {
        margin-top: 0;
      }
      html body h1,
      html body h2,
      html body h3,
      html body h4,
      html body h5,
      html body h6 {
        line-height: 1.2;
        margin-top: 1em;
        margin-bottom: 16px;
        color: #000;
      }
      html body h1 {
        font-size: 2.25em;
        font-weight: 300;
        padding-bottom: 0.3em;
      }
      html body h2 {
        font-size: 1.75em;
        font-weight: 400;
        padding-bottom: 0.3em;
      }
      html body h3 {
        font-size: 1.5em;
        font-weight: 500;
      }
      html body h4 {
        font-size: 1.25em;
        font-weight: 600;
      }
      html body h5 {
        font-size: 1.1em;
        font-weight: 600;
      }
      html body h6 {
        font-size: 1em;
        font-weight: 600;
      }
      html body h1,
      html body h2,
      html body h3,
      html body h4,
      html body h5 {
        font-weight: 600;
      }
      html body h5 {
        font-size: 1em;
      }
      html body h6 {
        color: #5c5c5c;
      }
      html body strong {
        color: #000;
      }
      html body del {
        color: #5c5c5c;
      }
      html body a:not([href]) {
        color: inherit;
        text-decoration: none;
      }
      html body a {
        color: #08c;
        text-decoration: none;
      }
      html body a:hover {
        color: #00a3f5;
        text-decoration: none;
      }
      html body img {
        max-width: 100%;
      }
      html body > p {
        margin-top: 0;
        margin-bottom: 16px;
        word-wrap: break-word;
      }
      html body > ul,
      html body > ol {
        margin-bottom: 16px;
      }
      html body ul,
      html body ol {
        padding-left: 2em;
      }
      html body ul.no-list,
      html body ol.no-list {
        padding: 0;
        list-style-type: none;
      }
      html body ul ul,
      html body ul ol,
      html body ol ol,
      html body ol ul {
        margin-top: 0;
        margin-bottom: 0;
      }
      html body li {
        margin-bottom: 0;
      }
      html body li.task-list-item {
        list-style: none;
      }
      html body li > p {
        margin-top: 0;
        margin-bottom: 0;
      }
      html body .task-list-item-checkbox {
        margin: 0 0.2em 0.25em -1.8em;
        vertical-align: middle;
      }
      html body .task-list-item-checkbox:hover {
        cursor: pointer;
      }
      html body blockquote {
        margin: 16px 0;
        font-size: inherit;
        padding: 0 15px;
        color: #5c5c5c;
        border-left: 4px solid #d6d6d6;
      }
      html body blockquote > :first-child {
        margin-top: 0;
      }
      html body blockquote > :last-child {
        margin-bottom: 0;
      }
      html body hr {
        height: 4px;
        margin: 32px 0;
        background-color: #d6d6d6;
        border: 0 none;
      }
      html body table {
        margin: 10px 0 15px 0;
        border-collapse: collapse;
        border-spacing: 0;
        display: block;
        width: 100%;
        overflow: auto;
        word-break: normal;
        word-break: keep-all;
      }
      html body table th {
        font-weight: bold;
        color: #000;
      }
      html body table td,
      html body table th {
        border: 1px solid #d6d6d6;
        padding: 6px 13px;
      }
      html body dl {
        padding: 0;
      }
      html body dl dt {
        padding: 0;
        margin-top: 16px;
        font-size: 1em;
        font-style: italic;
        font-weight: bold;
      }
      html body dl dd {
        padding: 0 16px;
        margin-bottom: 16px;
      }
      html body code {
        font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
        font-size: 0.85em !important;
        color: #000;
        background-color: #f0f0f0;
        border-radius: 3px;
        padding: 0.2em 0;
      }
      html body code::before,
      html body code::after {
        letter-spacing: -0.2em;
        content: '\00a0';
      }
      html body pre > code {
        padding: 0;
        margin: 0;
        font-size: 0.85em !important;
        word-break: normal;
        white-space: pre;
        background: transparent;
        border: 0;
      }
      html body .highlight {
        margin-bottom: 16px;
      }
      html body .highlight pre,
      html body pre {
        padding: 1em;
        overflow: auto;
        font-size: 0.85em !important;
        line-height: 1.45;
        border: #d6d6d6;
        border-radius: 3px;
      }
      html body .highlight pre {
        margin-bottom: 0;
        word-break: normal;
      }
      html body pre code,
      html body pre tt {
        display: inline;
        max-width: initial;
        padding: 0;
        margin: 0;
        overflow: initial;
        line-height: inherit;
        word-wrap: normal;
        background-color: transparent;
        border: 0;
      }
      html body pre code:before,
      html body pre tt:before,
      html body pre code:after,
      html body pre tt:after {
        content: normal;
      }
      html body p,
      html body blockquote,
      html body ul,
      html body ol,
      html body dl,
      html body pre {
        margin-top: 0;
        margin-bottom: 16px;
      }
      html body kbd {
        color: #000;
        border: 1px solid #d6d6d6;
        border-bottom: 2px solid #c7c7c7;
        padding: 2px 4px;
        background-color: #f0f0f0;
        border-radius: 3px;
      }
      @media print {
        html body {
          background-color: #fff;
        }
        html body h1,
        html body h2,
        html body h3,
        html body h4,
        html body h5,
        html body h6 {
          color: #000;
          page-break-after: avoid;
        }
        html body blockquote {
          color: #5c5c5c;
        }
        html body pre {
          page-break-inside: avoid;
        }
        html body table {
          display: table;
        }
        html body img {
          display: block;
          max-width: 100%;
          max-height: 100%;
        }
        html body pre,
        html body code {
          word-wrap: break-word;
          white-space: pre;
        }
      }
      .markdown-preview {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
      .markdown-preview .pagebreak,
      .markdown-preview .newpage {
        page-break-before: always;
      }
      .markdown-preview pre.line-numbers {
        position: relative;
        padding-left: 3.8em;
        counter-reset: linenumber;
      }
      .markdown-preview pre.line-numbers > code {
        position: relative;
      }
      .markdown-preview pre.line-numbers .line-numbers-rows {
        position: absolute;
        pointer-events: none;
        top: 1em;
        font-size: 100%;
        left: 0;
        width: 3em;
        letter-spacing: -1px;
        border-right: 1px solid #999;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .markdown-preview pre.line-numbers .line-numbers-rows > span {
        pointer-events: none;
        display: block;
        counter-increment: linenumber;
      }
      .markdown-preview pre.line-numbers .line-numbers-rows > span:before {
        content: counter(linenumber);
        color: #999;
        display: block;
        padding-right: 0.8em;
        text-align: right;
      }
      .markdown-preview .mathjax-exps .MathJax_Display {
        text-align: center !important;
      }
      .markdown-preview:not([for='preview']) .code-chunk .btn-group {
        display: none;
      }
      .markdown-preview:not([for='preview']) .code-chunk .status {
        display: none;
      }
      .markdown-preview:not([for='preview']) .code-chunk .output-div {
        margin-bottom: 16px;
      }
      .scrollbar-style::-webkit-scrollbar {
        width: 8px;
      }
      .scrollbar-style::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: transparent;
      }
      .scrollbar-style::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: rgba(150, 150, 150, 0.66);
        border: 4px solid rgba(150, 150, 150, 0.66);
        background-clip: content-box;
      }
      html body[for='html-export']:not([data-presentation-mode]) {
        position: relative;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        overflow: auto;
      }
      html
        body[for='html-export']:not([data-presentation-mode])
        .markdown-preview {
        position: relative;
        top: 0;
      }
      @media screen and (min-width: 914px) {
        html
          body[for='html-export']:not([data-presentation-mode])
          .markdown-preview {
          padding: 2em calc(50% - 457px + 2em);
        }
      }
      @media screen and (max-width: 914px) {
        html
          body[for='html-export']:not([data-presentation-mode])
          .markdown-preview {
          padding: 2em;
        }
      }
      @media screen and (max-width: 450px) {
        html
          body[for='html-export']:not([data-presentation-mode])
          .markdown-preview {
          font-size: 14px !important;
          padding: 1em;
        }
      }
      @media print {
        html
          body[for='html-export']:not([data-presentation-mode])
          #sidebar-toc-btn {
          display: none;
        }
      }
      html
        body[for='html-export']:not([data-presentation-mode])
        #sidebar-toc-btn {
        position: fixed;
        bottom: 8px;
        left: 8px;
        font-size: 28px;
        cursor: pointer;
        color: inherit;
        z-index: 99;
        width: 32px;
        text-align: center;
        opacity: 0.4;
      }
      html
        body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
        #sidebar-toc-btn {
        opacity: 1;
      }
      html
        body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
        .md-sidebar-toc {
        position: fixed;
        top: 0;
        left: 0;
        width: 300px;
        height: 100%;
        padding: 32px 0 48px 0;
        font-size: 14px;
        box-shadow: 0 0 4px rgba(150, 150, 150, 0.33);
        box-sizing: border-box;
        overflow: auto;
        background-color: inherit;
      }
      html
        body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
        .md-sidebar-toc::-webkit-scrollbar {
        width: 8px;
      }
      html
        body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
        .md-sidebar-toc::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: transparent;
      }
      html
        body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
        .md-sidebar-toc::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: rgba(150, 150, 150, 0.66);
        border: 4px solid rgba(150, 150, 150, 0.66);
        background-clip: content-box;
      }
      html
        body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
        .md-sidebar-toc
        a {
        text-decoration: none;
      }
      html
        body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
        .md-sidebar-toc
        ul {
        padding: 0 1.6em;
        margin-top: 0.8em;
      }
      html
        body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
        .md-sidebar-toc
        li {
        margin-bottom: 0.8em;
      }
      html
        body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
        .md-sidebar-toc
        ul {
        list-style-type: none;
      }
      html
        body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
        .markdown-preview {
        left: 300px;
        width: calc(100% - 300px);
        padding: 2em calc(50% - 457px - 150px);
        margin: 0;
        box-sizing: border-box;
      }
      @media screen and (max-width: 1274px) {
        html
          body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
          .markdown-preview {
          padding: 2em;
        }
      }
      @media screen and (max-width: 450px) {
        html
          body[for='html-export']:not([data-presentation-mode])[html-show-sidebar-toc]
          .markdown-preview {
          width: 100%;
        }
      }
      html
        body[for='html-export']:not([data-presentation-mode]):not([html-show-sidebar-toc])
        .markdown-preview {
        left: 50%;
        transform: translateX(-50%);
      }
      html
        body[for='html-export']:not([data-presentation-mode]):not([html-show-sidebar-toc])
        .md-sidebar-toc {
        display: none;
      }
      /* Please visit the URL below for more information: */
      /*   https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css */
    </style>
  </head>
  <body for="html-export">
    <div class="mume markdown-preview">
      <h1
        class="mume-header"
        id="%E7%AC%AC%E5%8D%81%E4%B8%80%E5%91%A8%E4%BD%9C%E4%B8%9A"
      >
        &#x7B2C;&#x5341;&#x4E00;&#x5468;&#x4F5C;&#x4E1A;
      </h1>

      <p><strong>2020.04.27 - 2020.05.03</strong></p>
      <div class="code-chunk" data-id="code-chunk-id-0" data-cmd="toc">
        <div class="input-div">
          <div class="btn-group">
            <div class="run-btn btn"><span>&#x25B6;&#xFE0E;</span></div>
            <div class="run-all-btn btn">all</div>
          </div>
          <div class="status">running...</div>
        </div>
        <div class="output-div"></div>
      </div>
      <ul>
        <li>
          <a href="#%E7%AC%AC%E5%8D%81%E4%B8%80%E5%91%A8%E4%BD%9C%E4%B8%9A"
            >&#x7B2C;&#x5341;&#x4E00;&#x5468;&#x4F5C;&#x4E1A;</a
          >
          <ul>
            <li>
              <a href="#%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%8B%B1%E8%AF%AD"
                >&#x8BA1;&#x7B97;&#x673A;&#x82F1;&#x8BED;</a
              >
            </li>
            <li>
              <a
                href="#%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F"
                >&#x8BA1;&#x7B97;&#x673A;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;</a
              >
            </li>
            <li>
              <a
                href="#web-%E6%8A%80%E6%9C%AF%E5%BC%80%E5%8F%91%E4%B8%8E%E5%BA%94%E7%94%A8"
                >Web &#x6280;&#x672F;&#x5F00;&#x53D1;&#x4E0E;&#x5E94;&#x7528;</a
              >
            </li>
            <li>
              <a href="#%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B"
                >&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;</a
              >
            </li>
            <li>
              <a
                href="#%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8E%A5%E5%8F%A3%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1"
                >&#x8BA1;&#x7B97;&#x673A;&#x63A5;&#x53E3;&#x8BFE;&#x7A0B;&#x8BBE;&#x8BA1;</a
              >
            </li>
            <li>
              <a href="#html5-%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BA%94%E7%94%A8"
                >HTML5 &#x6280;&#x672F;&#x4E0E;&#x5E94;&#x7528;</a
              >
            </li>
            <li>
              <a href="#%E5%8D%95%E7%89%87%E6%9C%BA%E5%BA%94%E7%94%A8"
                >&#x5355;&#x7247;&#x673A;&#x5E94;&#x7528;</a
              >
            </li>
            <li>
              <a
                href="#%E4%B8%B2%E8%A1%8C%E5%8F%A3%E6%A6%82%E8%BF%B0%E4%BD%9C%E4%B8%9A"
                >&#x4E32;&#x884C;&#x53E3;&#x6982;&#x8FF0;&#x4F5C;&#x4E1A;</a
              >
            </li>
            <li>
              <a
                href="#%E4%B8%B2%E8%A1%8C%E5%8F%A3%E6%8E%A7%E5%88%B6%E5%99%A8%E4%BD%9C%E4%B8%9A"
                >&#x4E32;&#x884C;&#x53E3;&#x63A7;&#x5236;&#x5668;&#x4F5C;&#x4E1A;</a
              >
            </li>
          </ul>
        </li>
      </ul>
      <h3
        class="mume-header"
        id="%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%8B%B1%E8%AF%AD"
      >
        &#x8BA1;&#x7B97;&#x673A;&#x82F1;&#x8BED;
      </h3>

      <p><strong>5-6 &#x5B66;&#x65F6;</strong></p>
      <pre data-role="codeBlock" data-info class="language-"><code>CDBC
instructions
bug
operating
disk
needle
Personal
</code></pre>
      <h3
        class="mume-header"
        id="%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F"
      >
        &#x8BA1;&#x7B97;&#x673A;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;
      </h3>

      <p><strong>&#x4F5C;&#x4E1A;&#xFF1A;</strong></p>
      <p>
        <code>AB</code>&#xFF0C;<code
          >&#x4FC3;&#x4F7F;&#x76EE;&#x6807;&#x4E3B;&#x673A;&#x7684;&#x786C;&#x4EF6;&#x6216;&#x8F6F;&#x4EF6;&#x53D1;&#x751F;&#x762B;&#x75EA;&#x7684;&#x60C5;&#x51B5;&#xFF0C;&#x4F7F;&#x6B63;&#x5F53;&#x7684;&#x7528;&#x6237;&#x65E0;&#x6CD5;&#x6B63;&#x5E38;&#x4F7F;&#x7528;&#x8BE5;&#x4E3B;&#x673A;&#x63D0;&#x4F9B;&#x7684;&#x670D;&#x52A1;&#x3002;</code
        >
      </p>
      <h3
        class="mume-header"
        id="web-%E6%8A%80%E6%9C%AF%E5%BC%80%E5%8F%91%E4%B8%8E%E5%BA%94%E7%94%A8"
      >
        Web &#x6280;&#x672F;&#x5F00;&#x53D1;&#x4E0E;&#x5E94;&#x7528;
      </h3>

      <p><strong>&#x8BFE;&#x540E;&#xFF1A;</strong></p>
      <p>
        <strong><code>BAA&#x3001;AC&#x3001;BC</code></strong>
      </p>
      <p><strong>&#x4F5C;&#x4E1A;&#xFF1A;</strong></p>
      <p><code>DABB</code>,<code>AD</code></p>
      <h3 class="mume-header" id="%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B">
        &#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;
      </h3>

      <p><strong>39-40 &#x5B66;&#x65F6;&#xFF1A;</strong></p>
      <pre
        data-role="codeBlock"
        data-info
        class="language-"
      ><code>DD&#x3001;&#x8FDE;&#x9501;&#x578B;&#x3001;&#x7B80;&#x5355;&#x3001;&#x7BAD;&#x5934;&#x3001;&#x5355;&#x4E2A;&#x6761;&#x4EF6;&#x3001;&#x9519;&#x5BF9;&#x9519;&#x5BF9;
</code></pre>
      <p><strong>41-42 &#x5B66;&#x65F6;&#xFF1A;</strong></p>
      <pre
        data-role="codeBlock"
        data-info
        class="language-"
      ><code>ABBC&#x3001;&#x76F4;&#x89C9;&#x3001;&#x5224;&#x5B9A;&#x8868;&#x3001;&#x786E;&#x8BA4;&#x6D4B;&#x8BD5;&#x3001;&#x4E00;&#x6B21;&#x6027;&#x3001;&#x5BF9;&#x9519;
</code></pre>
      <p><strong>&#x4F5C;&#x4E1A;&#xFF1A;</strong></p>
      <p>&#x4E00;&#x3001;</p>
      <pre data-role="codeBlock" data-info class="language-"><code>    C
    B
</code></pre>
      <p>&#x4E8C;&#x3001;</p>
      <pre
        data-role="codeBlock"
        data-info
        class="language-"
      ><code>    &#x7B49;&#x4E8E;10&#x4E2A;&#x5B57;&#x7B26;&#xFF0C;&#x82F1;&#x6587;&#x5B57;&#x6BCD;&#xFF0C;&#x4E0B;&#x5212;&#x7EBF;&#xFF0C;5&#xFF0C;6&#xFF0C;8
    &#x5355;&#x5143;&#x6D4B;&#x8BD5;
    &#x7CFB;&#x7EDF;&#x6D4B;&#x8BD5;
</code></pre>
      <h3
        class="mume-header"
        id="%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8E%A5%E5%8F%A3%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1"
      >
        &#x8BA1;&#x7B97;&#x673A;&#x63A5;&#x53E3;&#x8BFE;&#x7A0B;&#x8BBE;&#x8BA1;
      </h3>

      <p><strong>7.1</strong></p>
      <pre data-role="codeBlock" data-info class="language-"><code>ABAAB
</code></pre>
      <p><strong>6:</strong></p>
      <pre
        data-role="codeBlock"
        data-info="assembly"
        class="language-assembly"
      ><code>MOV DX,290H
MOV AL,0
OUT DX,AL
</code></pre>
      <p><strong>7:</strong></p>
      <pre
        data-role="codeBlock"
        data-info="assembly"
        class="language-assembly"
      ><code>MOV DX,290H
IN AL,DX
</code></pre>
      <p><strong>8:</strong></p>
      <pre
        data-role="codeBlock"
        data-info="assembly"
        class="language-assembly"
      ><code>L1:MOV DX,28AH
   IN AL,DX
   TEST AL,10H
   JZ L1
</code></pre>
      <p><strong>9:</strong></p>
      <p><code>3FH</code></p>
      <p><strong>10:</strong></p>
      <p><code>06H</code></p>
      <h3
        class="mume-header"
        id="html5-%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BA%94%E7%94%A8"
      >
        HTML5 &#x6280;&#x672F;&#x4E0E;&#x5E94;&#x7528;
      </h3>

      <p><strong>&#x7B80;&#x5355;&#x6D4B;&#x8BD5;&#xFF1A;</strong></p>
      <pre data-role="codeBlock" data-info="html" class="language-html">
1&#x3001;B 2&#x3001; none&#xFF1A;&#x9ED8;&#x8BA4;&#x3002;&#x5B9A;&#x4E49;&#x6807;&#x51C6;&#x7684;&#x6587;&#x672C; underline&#xFF1A;&#x5B9A;&#x4E49;&#x6587;&#x672C;&#x4E0B;&#x7684;&#x4E00;&#x6761;&#x7EBF;&#x3002;
overline&#xFF1A;&#x5B9A;&#x4E49;&#x6587;&#x672C;&#x4E0A;&#x7684;&#x4E00;&#x6761;&#x7EBF; line-through&#xFF1A;&#x5B9A;&#x4E49;&#x7A7F;&#x8FC7;&#x6587;&#x672C;&#x4E0B;&#x7684;&#x4E00;&#x6761;&#x7EBF;&#x3002;
blink&#xFF1A;&#x5B9A;&#x4E49;&#x95EA;&#x70C1;&#x7684;&#x6587;&#x672C;&#x3002;
</pre
      >
      <p><strong>5.3&#xFF1A;</strong></p>
      <p><strong>1~3&#xFF1A;CBD</strong></p>
      <p><strong>4&#x3001;</strong></p>
      <pre
        data-role="codeBlock"
        data-info="html"
        class="language-html"
      ><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
      <span class="token selector">a</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">a<span class="token pseudo-class">:link</span></span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">a<span class="token pseudo-class">:hover</span></span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">a<span class="token pseudo-class">:active</span></span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">a<span class="token pseudo-class">:visited</span></span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> while<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>2.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>&#x70B9;&#x51FB;&#x8DF3;&#x8F6C;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</pre>
      <p><strong>2.html</strong></p>
      <pre
        data-role="codeBlock"
        data-info="html"
        class="language-html"
      ><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      &#x65B0;&#x95FB;1
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      &#x65B0;&#x95FB;2
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      &#x65B0;&#x95FB;3
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</pre>
      <p><strong>5.4&#xFF1A;ACC</strong></p>
      <p>
        <strong
          >4&#x3001;(&#x56FE;&#x7247; img.png &#x81EA;&#x5DF1;&#x52A0;)</strong
        >
      </p>
      <pre
        data-role="codeBlock"
        data-info="html"
        class="language-html"
      ><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
      <span class="token selector"><span class="token class">.father</span></span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector"><span class="token class">.child</span></span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>father<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>img.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>&#x5B9A;&#x4F4D;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</pre>
      <p><strong>&#x4F5C;&#x4E1A;&#xFF1A;css2</strong></p>
      <p><strong>BDA</strong></p>
      <p><strong>&#x4E8C;&#x3001;</strong></p>
      <pre
        data-role="codeBlock"
        data-info="html"
        class="language-html"
      ><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
      <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">;</span>
        <span class="token property">animation</span><span class="token punctuation">:</span> w <span class="token number">2</span><span class="token unit">s</span> infinite alternate<span class="token punctuation">;</span>
        <span class="token comment">/* infinite: &#x65E0;&#x9650;&#x64AD;&#x653E;&#xFF1B;alternate&#xFF1A;&#x53CD;&#x5411;&#x64AD;&#x653E;*/</span>
      <span class="token punctuation">}</span>

      <span class="token atrule"><span class="token rule">@keyframes</span> w</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
          <span class="token property">background-color</span><span class="token punctuation">:</span> crimson<span class="token punctuation">;</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token unit">px</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">25%</span> <span class="token punctuation">{</span>
          <span class="token property">background-color</span><span class="token punctuation">:</span> cadetblue<span class="token punctuation">;</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token unit">px</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">50%</span> <span class="token punctuation">{</span>
          <span class="token property">background-color</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token unit">px</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">75%</span> <span class="token punctuation">{</span>
          <span class="token property">background-color</span><span class="token punctuation">:</span> darkkhaki<span class="token punctuation">;</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token unit">px</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">to</span> <span class="token punctuation">{</span>
          <span class="token property">background-color</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">700</span><span class="token unit">px</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</pre>
      <h3
        class="mume-header"
        id="%E5%8D%95%E7%89%87%E6%9C%BA%E5%BA%94%E7%94%A8"
      >
        &#x5355;&#x7247;&#x673A;&#x5E94;&#x7528;
      </h3>

      <h3
        class="mume-header"
        id="%E4%B8%B2%E8%A1%8C%E5%8F%A3%E6%A6%82%E8%BF%B0%E4%BD%9C%E4%B8%9A"
      >
        &#x4E32;&#x884C;&#x53E3;&#x6982;&#x8FF0;&#x4F5C;&#x4E1A;
      </h3>

      <p><strong>1&#x3001;</strong></p>
      <pre
        data-role="codeBlock"
        data-info
        class="language-"
      ><code>C&#x3001;&#x65B9;&#x5F0F;2
</code></pre>
      <p><strong>2&#x3001;</strong></p>
      <p>
        <code
          >&#x5355;&#x5DE5;&#x3001;&#x534A;&#x53CC;&#x5DE5;&#x3001;&#x5168;&#x53CC;&#x5DE5;</code
        >
      </p>
      <p><strong>3&#x3001;</strong></p>
      <pre data-role="codeBlock" data-info class="language-"><code>0023H
</code></pre>
      <p><strong>4&#x3001;</strong></p>
      <pre
        data-role="codeBlock"
        data-info
        class="language-"
      ><code>&#x5E76;&#x884C;&#x901A;&#x4FE1;
&#x4E32;&#x884C;&#x901A;&#x4FE1;
&#x5E76;&#x884C;&#x901A;&#x4FE1;
&#x4E32;&#x884C;&#x901A;&#x4FE1;
</code></pre>
      <p><strong>5&#x3001;6</strong></p>
      <p><code>&#x5BF9;&#x3001;&#x5BF9;</code></p>
      <p><strong>7&#x3001;</strong></p>
      <pre
        data-role="codeBlock"
        data-info
        class="language-"
      ><code>&#x5E76;&#x884C;&#x901A;&#x4FE1;&#xFF1A;&#x662F;&#x6307;&#x6570;&#x636E;&#x7684;&#x5404;&#x4F4D;&#x540C;&#x65F6;&#x8FDB;&#x884C;&#x4F20;&#x9001;&#x7684;&#x901A;&#x4FE1;&#x65B9;&#x5F0F;&#x3002;

&#x4E32;&#x884C;&#x901A;&#x4FE1;&#xFF1A;&#x662F;&#x6307;&#x6570;&#x636E;&#x4E00;&#x4F4D;&#x4E00;&#x4F4D;&#x987A;&#x5E8F;&#x4F20;&#x9001;&#x7684;&#x901A;&#x4FE1;&#x65B9;&#x5F0F;&#x3002;

&#x540C;&#x6B65;&#x901A;&#x4FE1;&#x548C;&#x5F02;&#x6B65;&#x901A;&#x4FE1;&#xFF1B;

&#x5F02;&#x6B65;&#x901A;&#x4FE1;&#x6240;&#x4F20;&#x8F93;&#x7684;&#x6570;&#x636E;&#x5E27;&#x683C;&#x5F0F;&#x662F;&#x7531;1&#x4E2A;&#x8D77;&#x59CB;&#x4F4D;&#x3001;1&#xFF5E;9&#x4E2A;&#x6570;&#x636E;&#x4F4D;&#x3001;1&#xFF5E;2&#x4E2A;&#x505C;&#x6B62;&#x4F4D;&#x7EC4;&#x6210;&#xFF0C;&#x4F9D;&#x9760;&#x8D77;&#x59CB;&#x4F4D;&#x548C;&#x505C;&#x6B62;&#x4F4D;&#x4FDD;&#x6301;&#x540C;&#x6B65;&#xFF1B;

&#x540C;&#x6B65;&#x6240;&#x4F20;&#x8F93;&#x6570;&#x636E;&#x5E27;&#x683C;&#x5F0F;&#x662F;&#x7531;&#x591A;&#x4E2A;&#x5B57;&#x8282;&#x7EC4;&#x6210;&#x7684;&#x4E00;&#x4E2A;&#x5E27;&#xFF0C;&#x6BCF;&#x4E2A;&#x5E27;&#x90FD;&#x6709;&#x4E24;&#x4E2A;&#xFF08;&#x6216;&#x4E00;&#x4E2A;&#xFF09;&#x540C;&#x6B65;&#x5B57;&#x7B26;&#x4F5C;&#x4E3A;&#x8D77;&#x59CB;&#x4F4D;&#x4EE5;&#x89E6;&#x53D1;&#x540C;&#x6B65;&#x65F6;&#x949F;&#x5F00;&#x59CB;&#x53D1;&#x9001;&#x6216;&#x63A5;&#x6536;&#x6570;&#x636E;&#x3002;

&#x6CE2;&#x7279;&#x7387;&#x662F;&#x6307;&#x6BCF;&#x79D2;&#x949F;&#x4F20;&#x9001;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x7801;&#x7684;&#x4F4D;&#x6570;&#xFF08;bit&#xFF09;&#xFF0C;&#x5355;&#x4F4D;bps&#xFF0C;bit/s&#x3002;
</code></pre>
      <p><strong>8&#x3001;</strong></p>
      <pre
        data-role="codeBlock"
        data-info
        class="language-"
      ><code>&#x5355;&#x5DE5;&#x65B9;&#x5F0F;:&#x53EA;&#x5141;&#x8BB8;&#x6570;&#x636E;&#x5411;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#x4F20;&#x9001;(A&#x2192;B)&#x3002;
&#x534A;&#x53CC;&#x5DE5;&#x65B9;&#x5F0F;:&#x5141;&#x8BB8;&#x6570;&#x636E;&#x5411;&#x4E24;&#x4E2A;&#x65B9;&#x5411;&#x4E2D;&#x5F97;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#x4F20;&#x9001;&#xFF0C;&#x4F46;&#x6BCF;&#x6B21;&#x53EA;&#x80FD;&#x4E00;&#x4E2A;&#x7AD9;&#x53D1;&#x9001;
&#x5168;&#x53CC;&#x5DE5;&#x65B9;&#x5F0F;: &#x5141;&#x8BB8;&#x6570;&#x636E;&#x540C;&#x65F6;&#x53CC;&#x5411;&#x4F20;&#x9001;
</code></pre>
      <h3
        class="mume-header"
        id="%E4%B8%B2%E8%A1%8C%E5%8F%A3%E6%8E%A7%E5%88%B6%E5%99%A8%E4%BD%9C%E4%B8%9A"
      >
        &#x4E32;&#x884C;&#x53E3;&#x63A7;&#x5236;&#x5668;&#x4F5C;&#x4E1A;
      </h3>

      <pre data-role="codeBlock" data-info class="language-"><code>CAADB;
1;
0;
&#x540C;&#x6B65;&#x79FB;&#x4F4D;&#x5BC4;&#x5B58;&#x5668;;
&#x5730;&#x5740;/&#x6570;&#x636E;;
</code></pre>
    </div>
  </body>
</html>
