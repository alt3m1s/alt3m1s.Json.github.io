
fetch('menu.json')
    .then(response => response.json()) // Convierte la respuesta en un objeto JSON
    .then(data => {
        const menuElement = document.getElementById('menu');
        // Itera a través de los elementos del menú en el objeto JSON
        data.menuItems.forEach(item => { 
            // Anida el enlace dentro del elemento de lista
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = item.url;  
            link.textContent = item.text;
            listItem.appendChild(link);
        // Comprueba si el elemento del menú tiene un submenú
            if (item.subMenu) {  
                const subMenu = document.createElement('ul');
                item.subMenu.forEach(subItem => {  
                    // Crea elementos de lista (li) y enlaces (a) para cada elemento del submenú
                    const subListItem = document.createElement('li');
                    const subLink = document.createElement('a');
                    subLink.href = subItem.url;  
                    subLink.textContent = subItem.text;
                    subListItem.appendChild(subLink);
                    subMenu.appendChild(subListItem);
                });
                listItem.appendChild(subMenu);
            }

            menuElement.appendChild(listItem);
        });
    });