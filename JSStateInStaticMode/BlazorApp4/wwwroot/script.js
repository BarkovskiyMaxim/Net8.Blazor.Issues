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