$(document).ready(function() {
    let isAnimating = false;
    const container = $('#box');
    let num = 0; //utk tau sdh ada brpa shape yg di add, stiap kli shape ada num jg brtmbh
    const size = 50; //ukuran shape
    const margin = 50; //margin antr shape yg di add

    //function utk tmbh shape
    function addShape() {
        const shape = $('#shape').val(); //ambil id shape yg ad di file index.html
        const shapeColor = $('#shapeColor').val(); //ambil id warna shape yg ad di file index.html
        const newShape = $('<div></div>').addClass('shape').addClass(shape).css('background-color', shapeColor); //saat tmbl add shape di pencet kode ini buat div/container utk shapenya. addclass(shape) utk ambil id shape spy bsa ditahu shape apa mau dpakai (circle/square). id shapeColor diambil spy bs ditau shapenya warna apa  
        
        //hitung brpa shape max bsa dlm container
        const containerWidth = container.width();
        const maxShapesPerRow = Math.floor(containerWidth / (size + margin)); 
        
        //utk tentukan row dan col brpa shape keluar
        const row = Math.floor(num / maxShapesPerRow);
        const col = num % maxShapesPerRow;
        
        newShape.css({
            top: row * (size + margin) //spya klau bnyk shape dibuat dilanjut di row bwh
        });

        container.append(newShape); //utk taruh shape yg dibuat di dlm container

        //animasi pas shape di add
        newShape.show().animate({
            left: col * (size + margin)
        }, 500, function(){
            isAnimating = false;
        });

        num++; //klau ada shape baru dibuat numnya brtmbh
    }

    //function utk remove shape
    function removeShape() {
        num--; //utk kurangi num pas shape diremove
        const lastShape = $('.shape').last();

        //animasi saat remove shape
        lastShape.fadeOut(500, function() {
            lastShape.remove();
            isAnimating = false;
        });
    }
    $('#addShape').click(addShape); //saat tmbol addshape dri index.html dipencet bkal ke function addSHape
    $('#removeShape').click(removeShape);//saat tmbol removeshape dri index.html dipencet bkal ke function removeSHape
});
