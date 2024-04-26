fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById('products-container');

        for (const product of data.products) {
            const discountedPrice = product.price - (product.price * (product.discountPercentage / 100));
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col');

            cardDiv.innerHTML = `
                    <div class="card h-100">
                        <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">
                                    <span class="discounted-price">₹${discountedPrice.toFixed(2)}</span>
                                    <span class="original-price">₹${product.price}</span> 
                                    <span class="discount-percentage">(${product.discountPercentage}% Off)</span>
                                </p>
                            <p>
                            <span class="card-text product-rating-star Stars" style="--rating: ${product.rating}"></span>
                            <span class="card-text product-rating pt-1">(${product.rating})</span>
                            </p>
                            <td class="actions" data-th="" style="width:10%;">  
                                <button class="btn btn-info btn-sm"><i class="fa-solid fa-cart-plus"></i> ADD TO CART</button>  
                                <button class="btn btn-danger btn-sm"><i class="fa-solid fa-bolt-lightning"> BUY NOW</i></button>                               
                            </td>
                        </div>
                    </div>
                `;

            productsContainer.appendChild(cardDiv);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
