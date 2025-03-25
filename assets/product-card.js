class ProductCard extends HTMLElement {
  variantSwatches = [];
  handle = undefined;

  constructor() {
    super();
  }

  connectedCallback() {
    this.handle = this.querySelector("[data-product-handle]").value;
    this.variantSwatches = this.querySelectorAll("[data-variant-swatch]");
    this.renderProductCard = this.renderProductCard.bind(this);

    this.variantSwatches.forEach((swatch) => {
      swatch.addEventListener("click", () => {
        const { variantSwatch } = swatch.dataset;
        this.renderProductCard(variantSwatch);
      });
    });
  }

  async renderProductCard(variantId) {
    const url = `${window.Shopify.routes.root}products/${this.handle}?view=product-card&variant=${variantId}`;

    try {
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "text/html",
        },
      });

      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');

      this.outerHTML = doc.querySelector('product-card').outerHTML;
    } catch (e) {
      console.error("Product fetch error: ", error);
    }
  }
}

if (!customElements.get("product-card")) {
  customElements.define("product-card", ProductCard);
}
