document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide('#splide-baner', {
        type: 'loop',
        fixedHeight: "100vh",
        cover: true,
        arrows: false,
        paginationDirection: 'ttb',
        autoplay: true,
        interval: 5000,
        fixedWidth: '100vw',
    });
    splide.mount();
});

document.addEventListener( 'DOMContentLoaded', function() {
    let newSplide = new Splide('#splide-news', {
        type: 'loop',
        fixedHeight: "100vh",
        cover: true,
        autoplay: true,
        interval: 5000,
        width: '100vw',
        perPage: 3,
        perMove: 1,
    });
    newSplide.mount();
});


const displayMap = document.getElementById('map');

function initMap(newLat, newLng) {
	const uluru = { lat: newLat, lng: newLng };

	const map = new google.maps.Map(displayMap, {
		zoom: 10,
		center: uluru,
		disableDefaultUI: true,
		styles: [
			{
				stylers: [
					{
						saturation: -90,
					},
				],
			},
		],
	});

	const image = new google.maps.MarkerImage(
		'../img/purple-dot.png',
		null, 
		null, 
		new google.maps.Point(8, 8),
		new google.maps.Size(16, 16) 
	);

	const marker = new google.maps.Marker({
		flat: true,
		optimized: false,
		position: uluru,
		map: map,
		icon: image,
		title: 'We are here!',
	});
}

window.initMap = initMap(46.48811798529199, 30.74121463237711);







// let modal = document.getElementById('myModal');

// let img = document.getElementsByClassName('.images__link');
// let modalImg = document.querySelector("#img01");
// let captionText = document.querySelector("#caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// let span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//   modal.style.display = "none";
// }



// let openBtn = document.querySelector('.images__photo');
// let closeBtn = document.querySelector('.mymodal__close');
// let modal = document.querySelector('.mymodal');

// openBtn.addEventListener('click', function() {
//     modal.classList.add('active');
// });

// closeBtn.addEventListener('click', function() {
//     modal.classList.remove('active');
// });




// let chooseElement;
// let galleryImg = document.querySelectorAll(`.images__link`);
// let body = document.querySelector(`body`);
// let imgNum;
// let splide3;
// galleryImg.forEach((e) => {
//     e.addEventListener(`click`, openModal);
//     function openModal() {
//         imgNum = Number(e.id);
//         chooseElement = document.querySelector(`.modal`);
//         chooseElement.classList.toggle(`active`);
//         body.style.overflow = `hidden`;

//         splide3 = new Splide(`#splide__modal`, {
//             type: "loop",
//             perPage: 1,
//             start: imgNum,
//             perMove: 1,
//             fixedHeight: `60vh`,
//             width: `60vh`,
//             cover: true,
//         });
//         splide3.mount();
//     }
// });

// function closeModal() {
//     chooseElement = document.querySelector(`.modal`);
//     chooseElement.classList.toggle(`active`);
//     body.style.overflow = `visible`;
//     splide3.destroy();
// }