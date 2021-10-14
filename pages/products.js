import Link from 'next/link';

const Products = ({ products }) => {
  const truncate = (str) => {
    return str.length > 100 ? str.substring(0, 100) + '...' : str;
  };

  const priceFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      <div className="head">
        <div className="container">
          <h1>Products</h1>
        </div>
      </div>
      <div className="container">
        <div className="mt-2 mb-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{truncate(product.description)}</p>
                  <div>{priceFormat.format(product.price)}</div>
                  <Link href={`/product/${product.id}`}>Link</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .head {
          background-color: blue;
          padding: 15px;
          color: white;
        }
        .card-img-top {
          width: 100%;
          height: 15vw;
          object-fit: contain;
        }
        .card {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

export default Products;

export async function getStaticProps(context) {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 120,
  };
}
