let testimonyBloc = document.getElementsByClassName("testimony")[0];

/* TEXT BLOC ELEMENTS */
	let testimonyBlocText = document.createElement("div");
	let blocTextQuotes = document.createElement("img");
		blocTextQuotes.src = "./images/pattern-quotes.svg";
		blocTextQuotes.alt = "Beautiful quotes illustration";
	let blocTextText = document.createElement("p");
	let blocTextIdentity = document.createElement("div");
	let identityName = document.createElement("h3");
	let identityProfession = document.createElement("h4");
	
	testimonyBlocText.classList.add("testimony__bloc_text", "testimony__bloc_text--layout");
	blocTextQuotes.classList.add("bloc_text__quotes", "bloc_text__quotes--layout");
	blocTextText.classList.add("bloc_text__text", "bloc_text__text--layout");
	blocTextIdentity.classList.add("bloc_text__identity", "bloc_text__identity--layout");
	identityName.classList.add("identity__name", "identity__name--layout");
	identityProfession.classList.add("identity__profession", "identity__profession--layout");

/* IMAGE BLOC ELEMENTS */
	let testimonyBlocImage = document.createElement("div");
	let blocImageProfilePicture = document.createElement("img");
	let blocImageBackground = document.createElement("img");
		blocImageBackground.src = "./images/pattern-bg.svg";
	let blocImageNavigation = document.createElement("div");
	let navigationPrevious = document.createElement("img");
		navigationPrevious.src = "./images/icon-prev.svg";
		navigationPrevious.alt = "Button Previous";
	let navigationNext = document.createElement("img");
		navigationNext.src = "./images/icon-next.svg";
		navigationNext.alt = "Button Next";

	testimonyBlocImage.classList.add("testimony__bloc_image", "testimony__bloc_image--layout");
	blocImageProfilePicture.classList.add("bloc_image__profile_picture", "bloc_image__profile_picture--layout");
	blocImageBackground.classList.add("bloc_image__background", "bloc_image__background--layout");
	blocImageNavigation.classList.add("bloc_image__navigation", "bloc_image__navigation--layout");
	navigationPrevious.classList.add("navigation__previous", "navigation__previous--layout");
	navigationNext.classList.add("navigation__next", "navigation__next--layout");

/* MODIFICATION OF THE DOM */

	testimonyBloc.append(testimonyBlocText, testimonyBlocImage);
		testimonyBlocText.append(blocTextQuotes, blocTextText, blocTextIdentity);
			blocTextIdentity.append(identityName, identityProfession);
		testimonyBlocImage.append(blocImageBackground , blocImageProfilePicture, blocImageNavigation);
			blocImageNavigation.append(navigationPrevious, navigationNext);
	

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
			let blocTextText = document.getElementsByClassName("bloc_text__text")[0];
			let identityName = document.getElementsByClassName("identity__name")[0];
			let identityProfession = document.getElementsByClassName("identity__profession")[0];
			let blocImageProfilePicture = document.getElementsByClassName("bloc_image__profile_picture")[0];

			blocTextText.innerHTML = this.testimonyText;
			identityName.innerHTML = this.name;
			identityProfession.innerHTML = this.profession;
			blocImageProfilePicture.src = this.profilPicture;
			blocImageProfilePicture.alt = this.name;
		}
	}

/* BIBLIOTEQUE OF TESTIMONIES */
	
	let testimonyTab = [];
	testimonyTab.push(new Testimony('“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”', 'Tanya Sinclair', 'UX Engineer', "./images/image-tanya.jpg"));
	testimonyTab.push(new Testimony('“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”', 'John Tarkpor', 'Junior Front-end Developer', "./images/image-john.jpg"));

	testimonyTab[0].publishTestimony();


