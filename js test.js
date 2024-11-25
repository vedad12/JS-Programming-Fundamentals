
        function calculateVolume() {
            // Uzimanje unetih vrednosti
            const radius = parseFloat(document.getElementById("radius").value);
            const height = parseFloat(document.getElementById("height").value);
            
            // Provera da li su uneti ispravni brojevi
            if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
                alert("Molimo unesite validne vrednosti za poluprečnik i visinu.");
                return;
            }

            // Konstanta Pi
            const pi = 3.14;
            
            // Formula za zapreminu valjka: V = r^2 * π * H
            const volume = Math.pow(radius, 2) * pi * height;

            // Prikaz rezultata
            document.getElementById("result").innerHTML = `Zapremina valjka je: ${volume.toFixed(2)} kubnih jedinica.`;
        }