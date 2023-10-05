### Describe the bug

In non-interactive mode, if you open a page that contains a <script>, it will load. However, if you navigate to that page from another one using navigation, the script will not be loaded on the page.

### Expected Behavior

_No response_

### Steps To Reproduce

Page:
~~~
@page "/import"

<div id="test"></div>

<script type="module" src="./script.module.js"></script>
<script type="text/javascript" src="./script.js"></script>

@code {

}
~~~

Scripts: 

~~~script.js
//script.js
console.log('global is loaded');
~~~

~~~script.module.js
//script.module.js
console.log('module is loaded');
~~~

If I open localhost/import, everything is fine, and I can see messages in the console. However, if I open localhost and navigate using the NavBar, the scripts are not loaded.