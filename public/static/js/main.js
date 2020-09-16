var window_width = document.documentElement.clientHeight;

function header()
{
    var element = document.getElementById('header');
    var image_background = "url(../headerbackground.svg)";
    element.style.backgroundImage = image_background;
    element.style.height = window_width + "px";
}

function about()
{
    var block = document.getElementById('about');
    var image = "url(../test-one.svg)";
    block.style.backgroundImage = image;
}

var first_block_image = {
    doors() 
    {
        var back = document.getElementById('image-doors');
        var image = "url(../doors.jpg)";
        back.style.backgroundImage = image;
        back.style.backgroundSize = "250px 250px";
    },
    bench()
    {
        var mint = document.getElementById('image-bench');
        var image = "url(../bench.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
    balcony()
    {
        var mint = document.getElementById('image-balcony');
        var image = "url(../balcony.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
    visor()
    {
        var mint = document.getElementById('image-visor');
        var image = "url(../visor.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
};

var second_block_image = {
    swing() 
    {
        var back = document.getElementById('image-swing');
        var image = "url(../swing.jpg)";
        back.style.backgroundImage = image;
        back.style.backgroundSize = "250px 250px";
    },
    railing()
    {
        var mint = document.getElementById('image-railing');
        var image = "url(../railing.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
    fence()
    {
        var mint = document.getElementById('image-fence');
        var image = "url(../fence.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
    gate()
    {
        var mint = document.getElementById('image-gate');
        var image = "url(../gates.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
};

var three_block_image = {
    chargrill() 
    {
        var back = document.getElementById('image-chargrill');
        var image = "url(../chargrill.jpg)";
        back.style.backgroundImage = image;
        back.style.backgroundSize = "250px 250px";
    },
    fireplace()
    {
        var mint = document.getElementById('image-fireplace');
        var image = "url(../fireplace.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
    furniture()
    {
        var mint = document.getElementById('image-furniture');
        var image = "url(../furniture.jpeg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
    gazebo()
    {
        var mint = document.getElementById('image-gazebo');
        var image = "url(../gazebo.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
};

var four_block_image = {
    lattice() 
    {
        var back = document.getElementById('image-lattice');
        var image = "url(../lattice.jpg)";
        back.style.backgroundImage = image;
        back.style.backgroundSize = "250px 250px";
    },
    mirror()
    {
        var mint = document.getElementById('image-mirror');
        var image = "url(../mirror.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
    tandyr()
    {
        var mint = document.getElementById('image-tandyr');
        var image = "url(../tandyr.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
    bed()
    {
        var mint = document.getElementById('image-bed');
        var image = "url(../Bed.jpg)";
        mint.style.backgroundImage = image;
        mint.style.backgroundSize = "250px 250px";
    },
};

function initMap() {
    var coordinates = {lat: 47.212325, lng: 38.933663},
    
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates

        });
}

header();
about();
first_block_image.doors();
first_block_image.bench();
first_block_image.balcony();
first_block_image.visor();

second_block_image.swing();
second_block_image.railing();
second_block_image.fence();
second_block_image.gate();

three_block_image.chargrill();
three_block_image.fireplace();
three_block_image.furniture();
three_block_image.gazebo();

four_block_image.lattice();
four_block_image.mirror();
four_block_image.tandyr();
four_block_image.bed();

initMap();
contacts();
map();