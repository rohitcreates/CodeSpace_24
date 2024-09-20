// Select the container
const container = document.querySelector('.container');
const preButton = document.querySelector('.pre-button');
const nextButton = document.querySelector('next-button');


const images = [
	'https://images.pexels.com/photos/28125553/pexels-photo-28125553/free-photo-of-a-white-ball-on-a-stick-in-front-of-a-black-tiled-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
];

container.style.backgroundImage = images;


// firstImage.addEventListener('click', () => {
// 		for (let i = 0; i <= 3; i++) {
// 			container.style.backgroundImage = images
			
// 		}
// 	})
	

	// for (let i = 0; i < 10; i++) {
	// 	container.style.backgroundImage = `url('img\ ${i}.jpg')`
	// 	console.log(i);
		
	// }