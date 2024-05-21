document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.responsive-table');
    const rows = table.querySelectorAll('td');

    rows.forEach(row => {
        const imgCell = row.querySelector('td img');
        const imgId = imgCell.getAttribute('data-id');

        // Ver Detalle ve Comprar butonlarını oluşturma
        const detailButton = document.createElement('button');
        detailButton.innerText = 'Ver Detalle';
     detailButton.setAttribute('data-action', 'detail');
        detailButton.setAttribute('data-id', imgId);
        
        

        const buyButton = document.createElement('button');
        buyButton.innerText = 'Añadir';
        buyButton.setAttribute('data-action', 'buy');
        buyButton.setAttribute('data-id', imgId);
        

        // Butonları hücrelere ekleme
        const buttonCell = document.createElement('td');
        buttonCell.appendChild(detailButton);
        buttonCell.appendChild(buyButton);

        // İlk satırdaki son hücreye butonları ekleyin
        row.appendChild(buttonCell);
    });

    
    // Sepet sayacı
    const cartCount = document.getElementById('cart-count');
    let itemCount = 0;

    // Butonlara tıklama event'lerini ekleme
    table.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const action = event.target.getAttribute('data-action');
            const imgId = event.target.getAttribute('data-id');

            if (action === 'detail') {
                // Ver Detalle butonuna tıklandığında yapılacak işlemler
                alert(`Detalle del producto con ID: ${imgId}`);
            } else if (action === 'buy') {
                // Comprar butonuna tıklandığında yapılacak işlemler
                itemCount++;
                cartCount.textContent = itemCount;

                // Sepet resminin rengini değiştirme (örnek olarak)
                const cartIcon = document.getElementById('cart-icon');

            }
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.responsive-table');
    const cartButton = document.getElementById('cart-icon');
    const modal = document.getElementById('cart-modal');
    const closeButton = document.querySelector('.close-button');
    const cartContent = document.getElementById('cart-content');
    const cartCount = document.getElementById('cart-count');
    
    let itemCount = 0;

    // Butonlara tıklama event'lerini ekleme
    table.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON' && event.target.getAttribute('data-action') === 'buy') {
            // Comprar (Añadir) butonuna tıklandığında yapılacak işlemler
            itemCount++;
            cartCount.textContent = itemCount;
        }
    });

    // Sepet içeriğini gösterme
    cartButton.addEventListener('click', () => {
        modal.style.display = 'block';
        cartContent.textContent = `Sepetinizde ${itemCount} ürün bulunmaktadır.`;
    });

    // Modalı kapatma
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.responsive-table');
    const cartButton = document.getElementById('cart-icon');
    const modal = document.getElementById('cart-modal');
    const closeButton = document.querySelector('.close-button');
    const cartContent = document.getElementById('cart-content');
    
    let cartItems = [
        {
            "urun_id": "yuzuk_001",
            "marka": "plataPro",
            "model": "",
            "renk": "Altin",
            "tasarim": "Yildiz",
            "fiyat": 1500,
            "detay": {
                "malzeme": "Altin",
                "tasarim_detayi": "Yildiz şeklinde tasarım",
                "tasima_ozelligi": "Kutusunda güvenli bir şekilde taşınabilir"
            },
            "img_url": "IMG/yuzuka.jpeg"
        },
        {
            "urun_id": "yuzuk_002",
            "marka": "Marka2",
            "model": "Model2",
            "renk": "Gumus",
            "tasarim": "Kalp",
            "fiyat": 1200,
            "detay": {
                "malzeme": "Gümüş",
                "tasarim_detayi": "Kalp şeklinde tasarım",
                "tasima_ozelligi": "Özel kolye kutusunda güvenli bir şekilde taşınabilir"
            },
            "img_url": "IMG/yuzukb.jpeg"
        }
    ];


    // Butonlara tıklama event'lerini ekleme
    table.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON' && event.target.getAttribute('data-action') === 'buy') {
            // Comprar (Añadir) butonuna tıklandığında yapılacak işlemler
            event.preventDefault();
          
            const productId = event.target.getAttribute('data-id');
            const product = cartItems.find(item => item.urun_id === productId);
            if (!product) {
                const selectedProduct = cartItems.find(item => item.urun_id === productId);
                if (selectedProduct) {
                    cartItems.push(selectedProduct);
                   
                    
                }
                
            
            }
        }
   
        
    
    });

    // Sepet içeriğini gösterme
   
    cartButton.addEventListener('click', () => {
        modal.style.display = 'block';
        renderCartItems();
    });

    // Modalı kapatma
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Sepet ürünlerini render etme
    function renderCartItems() {
        cartContent.innerHTML = '';

        cartItems.forEach((item) => {
            const itemElement = document.createElement('div');
            
            // Ürün resmini oluşturma
            const imgElement = document.createElement('img');
            imgElement.src = item.img_url;
            imgElement.alt = item.urun_id;
            imgElement.width = 50; // Resim genişliğini ayarlayabilirsiniz
            
            // Ürün bilgilerini oluşturma
            const textElement = document.createElement('div');
            textElement.textContent = `Ürün ID: ${item.urun_id}, Marka: ${item.marka}, Fiyat: ${item.fiyat}`;
    
            // Elementleri ana div'e ekleme
            itemElement.appendChild(imgElement);
            itemElement.appendChild(textElement);
            
            cartContent.appendChild(itemElement);
            
        });
    }


});

document.getElementById("palabras").addEventListener("keypress", function(event) {
     // Enter tuşu basıldığında (keyCode 13)
     if (event.keyCode === 13) {
         arama(); // Arama işlevini çağır
     }
 });



function arama() {
 let buscar = document.getElementById('palabras').value.toLowerCase();
 let found = false; // Eşleşme bulunduğunda true olacak bir değişken tanımlayalım
 
 switch (true) {
     case buscar.startsWith("ani"):
         window.location.href = "anillornek.html"; // Yüzükler sayfasına yönlendirme
         found = true;
         break;
     case buscar.startsWith("pul"):
         window.location.href = "pulserasornek.html"; // Bilezikler sayfasına yönlendirme
         found = true;
         break;
     case buscar.startsWith("col"):
         window.location.href = "collaresornek.html"; // Kolyeler sayfasına yönlendirme
         found = true;
         break;
     case buscar.startsWith("pen"):
         window.location.href = "ornekpendientes.html"; // Küpeler sayfasına yönlendirme
         found = true;
         break;
 }
 
 if (!found) {
     alert("Aranan ürün bulunamadı!"); // Eşleşme bulunamazsa uyarı göster
 }
}
document.getElementById('numProductos').innerHTML= carrito.length;