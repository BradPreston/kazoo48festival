import Head from 'next/head';

const Snipcart = () => {
  return (
    <>
      <Head>
        <title>Checkout with Snipcart</title>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css"
        />
      </Head>

      <button
        className="snipcart-add-item"
        data-item-id="kazoo-48-ticket"
        data-item-price="25.00"
        data-item-name="Kazoo 48 ticket"
      >
        Add to cart
      </button>

      <script
        async
        src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"
      ></script>
      <div
        hidden
        id="snipcart"
        data-api-key="Mjk5MGY0YzQtMjA1Mi00MTRiLWJlMjktNGQwZDg1NWYxYmM4NjM3ODM2NjI0MjQ4ODgwMjEx"
      ></div>
    </>
  );
};

export default Snipcart;
