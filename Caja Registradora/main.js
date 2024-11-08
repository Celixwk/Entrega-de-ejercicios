document.addEventListener('DOMContentLoaded', function () {
    const productSelect = document.getElementById('product');
    const priceField = document.getElementById('price');
    const quantityField = document.getElementById('quantity');
    const addProductBtn = document.getElementById('addProduct');
    const productList = document.getElementById('listItems');
    const totalField = document.getElementById('total');
    let total = 0;
    let productId = 0;
    let editingRow = null;  

    
    productSelect.addEventListener('change', function () {
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        const price = selectedOption.getAttribute('data-price');
        priceField.value = price;
    });

    
    addProductBtn.addEventListener('click', function () {
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        const productName = selectedOption.text;
        const price = parseFloat(priceField.value);
        const quantity = parseInt(quantityField.value);
        const subtotal = price * quantity;
        if (productName == null || quantity==0) {
            Swal.fire({
                icon: "Error",
                title: "Oops...",
                text: "Tienes que agregar un producto",
              });
        }
        
        if (editingRow) {
            editingRow.cells[1].textContent = productName;
            editingRow.cells[2].textContent = quantity;
            editingRow.cells[3].textContent = price.toFixed(2);
            editingRow.cells[4].textContent = subtotal.toFixed(2);

            
            const oldSubtotal = parseFloat(editingRow.cells[4].textContent);
            total -= oldSubtotal;
            total += subtotal;
            totalField.textContent = total.toFixed(2);

           
            editingRow = null;
        } else {
           
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${productId}</td>
                <td>${productName}</td>
                <td>${quantity}</td>
                <td>${price.toFixed(2)}</td>
                <td>${subtotal.toFixed(2)}</td>
                <td>
                    <button class="btn btn-warning edit-btn">Editar</button>
                    <button class="btn btn-danger delete-btn">Eliminar</button>
                </td>
            `;

            productList.appendChild(row);
            productId++;

            total += subtotal;
            totalField.textContent = total.toFixed(2);
        }

        quantityField.value = 0;
    });

    
    productList.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-btn')) {
            const row = e.target.closest('tr');
            const productName = row.cells[1].textContent;
            const quantity = row.cells[2].textContent;
            const price = row.cells[3].textContent;

            
            const options = productSelect.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].text === productName) {
                    productSelect.selectedIndex = i;
                    break;
                }
            }

            
            priceField.value = price;
            quantityField.value = quantity;

            
            editingRow = row;
        }

        if (e.target.classList.contains('delete-btn')) {
            
            const row = e.target.closest('tr');
            const subtotal = parseFloat(row.cells[4].textContent);

            
            total -= subtotal;
            totalField.textContent = total.toFixed(2);

            
            row.remove();
        }

    });

    
    document.getElementById('reset').addEventListener('click', function () {
        productSelect.selectedIndex = 0;
        priceField.value = '';
        quantityField.value = 0;
        total = 0;                          
        totalField.textContent = total.toFixed(2);
    });
});
