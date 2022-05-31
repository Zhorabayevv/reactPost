import React, { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import MyModal from "./components/UI/MyModal/MyModal";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {

	const [posts, setPosts] = useState(
		[
			{ id: 1, title: 'JavaScript', body: 'Nurzhan' },
			{ id: 2, title: 'Python 2', body: 'Bekz' },
			{ id: 3, title: 'Java 3', body: 'Nurila' }
		]
	)

	const [searchQuary, setSearchQuary] = useState('')
	const [selectedSort, setSelectedSort] = useState('')
	const [model, setModel] = useState(false)

	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			return ([...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])))
		}
		return posts
	}, [selectedSort, posts])

	const sortedAndSearchPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuary))
	}, [searchQuary, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModel(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}



	const sortPosts = (sort) => {
		setSelectedSort(sort);
	}

	return (
		<div className="App">
			<MyButton onClick={() => setModel(true)} >Создать пост</MyButton>
			<MyModal
				visible={model}
				setVisible={setModel}
			>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: "15px" }} />
			<MyInput
				value={searchQuary}
				onChange={e => setSearchQuary(e.target.value)}
				placeholder='Search'
			/>
			<MySelect
				value={selectedSort}
				onChange={sortPosts}
				defaultValue="Сортировка"
				options={[
					{ value: 'title', name: 'По названию' },
					{ value: 'body', name: 'По описанию' }
				]}
			/>

			{sortedAndSearchPosts.length !== 0
				? <PostList remove={removePost} posts={sortedAndSearchPosts} title="Посты про JS" />
				: <div style={{ textAlign: "center" }}><h1>Посты не найдены!</h1></div>
			}

		</div>
	);
}

export default App;