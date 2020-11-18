let testimonyBlock = document.getElementsByClassName("testimony")[0];

/* TEXT BLOC ELEMENTS */
	let testimonyBlockText = document.createElement("div");
	let blockTextText = document.createElement("p");
	let blockTextIdentity = document.createElement("div");
	let identityName = document.createElement("h3");
	let identityProfession = document.createElement("h4");
	
	testimonyBlockText.classList.add("testimony__block_text", "testimony__block_text--layout");
	blockTextText.classList.add("block_text__text", "block_text__text--layout");
	blockTextIdentity.classList.add("block_text__identity", "block_text__identity--layout");
	identityName.classList.add("identity__name", "identity__name--layout");
	identityProfession.classList.add("identity__profession", "identity__profession--layout");

/* IMAGE BLOC ELEMENTS */
	let testimonyBlockImage = document.createElement("div");
	let blockImageProfilePicture = document.createElement("img");
	let blockImageNavigation = document.createElement("div");
	let previousBlock = document.createElement("div");
	let navigationPrevious = document.createElement("img");
		navigationPrevious.src = "./images/icon-prev.svg";
		navigationPrevious.alt = "Button Previous";
	let nextBlock = document.createElement("div");
	let navigationNext = document.createElement("img");
		navigationNext.src = "./images/icon-next.svg";
		navigationNext.alt = "Button Next";

	testimonyBlockImage.classList.add("testimony__block_image", "testimony__block_image--layout");
	blockImageProfilePicture.classList.add("block_image__profile_picture", "block_image__profile_picture--layout");
	blockImageNavigation.classList.add("block_image__navigation", "block_image__navigation--layout");
	navigationPrevious.classList.add("navigation__previous", "navigation__previous--layout");
	navigationNext.classList.add("navigation__next", "navigation__next--layout");

/* MODIFICATION OF THE DOM */

	testimonyBlock.append(testimonyBlockText, testimonyBlockImage);
		testimonyBlockText.append( blockTextText, blockTextIdentity);
			blockTextIdentity.append(identityName, identityProfession);
		testimonyBlockImage.append(blockImageProfilePicture, blockImageNavigation);
			blockImageNavigation.append(previousBlock, nextBlock);
				previousBlock.append(navigationPrevious);
				nextBlock.append(navigationNext);
	

/* EASY WAY TO ADD AND PUBLISH DIFFERENT TESTIMONIES */
	class Testimony 
	{
		constructor(testimonyText, name, profession, profilPicture)
		{
			this.testimonyText = testimonyText;
			this.name = name;
			this.profession = profession;
			this.profilPicture = profilPicture;
		}

		publishTestimony()
		{
			let blockTextText = document.getElementsByClassName("block_text__text")[0];
			let identityName = document.getElementsByClassName("identity__name")[0];
			let identityProfession = document.getElementsByClassName("identity__profession")[0];
			let blockImageProfilePicture = document.getElementsByClassName("block_image__profile_picture")[0];

			blockTextText.innerHTML = this.testimonyText;
			identityName.innerHTML = this.name;
			identityProfession.innerHTML = this.profession;
			blockImageProfilePicture.src = this.profilPicture;
			blockImageProfilePicture.alt = this.name;
		}
	}

/* BIBLIOTEQUE OF TESTIMONIES */
	
	let testimonyTab = [];
	testimonyTab.push(new Testimony('“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”', 'Tanya Sinclair', 'UX Engineer', "./images/image-tanya.jpg"));
	testimonyTab.push(new Testimony('“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”', 'John Tarkpor', 'Junior Front-end Developer', "./images/image-john.jpg"));

	testimonyTab[0].publishTestimony();
	let profilNumero = 0;

/* NAVIGATION */

	let previous = document. getElementsByClassName("navigation__previous")[0];
	let next = document. getElementsByClassName("navigation__next")[0];
	let testimonyLength = testimonyTab.length;

	previous.addEventListener("click", function(){
		if (profilNumero > 0){
			--profilNumero;
		}
		testimonyTab[profilNumero].publishTestimony();
	});

	next.addEventListener("click", function(){	
		if (profilNumero < (testimonyLength-1))
		{
			++profilNumero;
		}
		testimonyTab[profilNumero].publishTestimony();
	});



