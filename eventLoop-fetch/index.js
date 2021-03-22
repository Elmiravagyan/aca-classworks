const getButton = document.querySelector('.getButton');
const container = document.querySelector('.container');
const getCommits = async () => {
	let res = await fetch('https://api.github.com/repos/HarutQanaqaryan/Homework-11-DOM/commits');
	res = await res.json();
		res.forEach((item) => {
			console.log(item);
			let li = document.createElement('li');
			li.textContent = item.commit.message;
			container.append(li);
		})
};

const getUsers = async (userNames) => {
	let users = [];
	// ['taron0', 'aregmashinyan', 'mara2t']
	for(let user of userNames) {
		let userData = fetch(`https://api.github.com/users/${user}`).then((res) => {
			console.log(res.status);
			if(res.status !== 200) {
				return null;
			} else {
				return res.json();
			}
		})
		users.push(userData);
	}
	console.log('users', users);
	let finalResults = await Promise.all(users);
	finalResults = finalResults.filter(elem => !!elem);
	finalResults.forEach(({ login, avatar_url }) => {
		let li = document.createElement('li');
		let div = document.createElement('div');
		let img = document.createElement('img');
		img.setAttribute('src', avatar_url)
		img.style.width = '30px';
		div.textContent = login;
		li.append(div,img);
		container.append(li);
	})
}

getButton.addEventListener('click', () => getUsers(['elmiravagyan', 'lkjlkjasdasdkjlkjdalskjlaskdjlaskdj']));
