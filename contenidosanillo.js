 // recorro el objeto flores
    let textoArticulos = '';
    for (items of cartItems) {
        textoArticulos += `
            <div class="ficha">
                <p>${items.marka}</p>

                <div id="imagenMarco">
                    <img src="${items.img_url}" alt="Producto">
                </div>
                
                <button onclick="verModal('${items.marka}','${items.img_url}')">VER DETALLE</button>
                <button id="anadir" onclick="anyadirProductoAlCarrito(${items.urun_id})">AÑADIR CARRITO</button>

                </div>`;
    }
    document.getElementById('articulos').innerHTML = textoArticulos;

    function verModal(marka, img_url) {
        console.log(document.querySelector('#modalH2'));
        console.log(marka);
        console.log(img_url);
        document.querySelector('#modalH2').innerHTML = marka.id;
        document.querySelector('#articuloImagen').src = img_url;
       
       
        modalArticulo.showModal();
    }