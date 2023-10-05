### Describe the bug

I have a WebComponent that manages its state on the client side and changes the value that was initially initialized from the server using Blazor. As a result, everything works fine until we change the routing. For example, if we navigate to Page1 using the NavBar and then click on Page1 again, the page will reset to the state initialized by the server.

The issue is that within blazor.web.js, when obtaining the layout of the page, a step-by-step comparison of content occurs, and changes are applied. In this case, all page states that were achieved using JS will simply revert to their initial state, while the latest state will still exist in the JS code.

### Expected Behavior

It would be great to have the ability to understand how a component is currently being rendered and mark components that should not change when the routing changes.

### Steps To Reproduce

For reproduce: 
- open /component page
- wait for content 
- click on 'Component' link in navigation

Example: 
script with web component: 

~~~script.js
class MyWebComponent extends HTMLElement {
    loading = true;
    connectedCallback() {
        // wait for initialization
        setTimeout(() => {
            this.classList.remove('loading');
            this.loading = false;
        }, 2000)
    }
}

customElements.define('my-web-component', MyWebComponent)
~~~

page: 

~~~
@page "/component"

<my-web-component id="component" class="loading">
    ...some dynamic content here
</my-web-component>

<input type="button" onclick="alert(document.getElementById('component').loading)" value="GetState" />

@code {

}
~~~