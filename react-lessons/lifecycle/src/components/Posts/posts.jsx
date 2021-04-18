import React from 'react';
import {Post} from '../Post/post';

const inputFakeData = [1,2,3,4,5,6,7,8,9];

export class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			postsData: {
				posts: [],
				isLoading: true,
				checkedIds: [],
				// checkedIds: [{1: true, 2: false}],
				isChecked: false
			}
		}
	}

	componentDidMount() {
		this.getPosts();
	}

	getPosts = () => {
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((posts) => {
				console.log(posts, 'posts');
				this.setState({ postsData: { posts: posts, isLoading: false, checkedIds: [ ...this.state.postsData.checkedIds ]} });
				localStorage.setItem('posts', JSON.stringify(posts));
			})
		}, 1000);
	}

	handleCheck = (e) => {
		let posts = JSON.parse(localStorage.getItem('posts'));
		if(e.target.checked) {
			let filteredPosts = posts.filter(item => {
				return this.state.postsData.checkedIds.includes(item.userId.toString()) || e.target.id === item.userId.toString();
			});
			this.setState({ postsData: { posts: filteredPosts, isLoading: false, checkedIds: [ e.target.id, ...this.state.postsData.checkedIds ]} });
			// TODO Change to this
			// this.setState({ postsData: { posts: filteredPosts, isLoading: false, checkedIds: [ {[e.target.id]: true}, ...this.state.postsData.checkedIds ]} });
		} else {
			let filteredPosts = posts.filter(item => item.userId.toString() !== e.target.id);
			let newIds = this.state.postsData.checkedIds.filter(item => item !== e.target.id);
			this.setState({ postsData: { posts: filteredPosts, isLoading: false, checkedIds: newIds} });
		}
	}

    // TODO generate function by yourself
	defineInputData = () => {
		// [userId1, userId2, ....]
	}

	render() {
		console.log(this.state);
		const { postsData } = this.state;

		return (
			<div>
				{postsData.isLoading ? <div>Loading ...</div> :
				<>
					<h1>All posts</h1>
					{inputFakeData.map(item =>
						<span key={item}>
							User {item}<input id={item} onChange={this.handleCheck} type='checkbox' /> <br/>
						</span> )
					}
					{
						postsData.posts.map(({ body, title, userId, id }) => {
							// if(postsData.checkedIds.includes(userId)) {
								return(
									<Post key={id} body={body} title={title} userId={userId} />
								)
							// }
						})
					}
				</>
				}
			</div>
		);
	}
}
