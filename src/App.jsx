import { useEffect, useState } from 'react'
import { API_KEY } from '../config.json'
import style from './App.module.scss'
import ScrollBar from './components/scrollbar'

function App() {
	const [posts, setPosts] = useState(null)

	const getPosts = async value => {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${API_KEY}`
		)
		let { articles } = await response.json()
		if (value) {
			articles = articles.slice(0, value)
		}
		setPosts(articles)
	}

	const changeSize = async value => {
		await getPosts(value)
	}

	useEffect(() => {
		const loadPage = async () => {
			await getPosts(4)
		}
		loadPage()
	}, [])

	return (
		<>
			<div className='title'>
				<h1 className={style.title}>Новости</h1>
			</div>
			<div className={style.ScrollBar_container}>
				<ScrollBar
					className={style.ScrollBar}
					from={4}
					to={20}
					step={1}
					changeSize={changeSize}
				/>
			</div>
			<div className={style.container}>
				{posts &&
					posts.map(({ title, url }) => {
						return (
							<div key={url} className={style.card}>
								<h2 className={style.card_title}>{title}</h2>
							</div>
						)
					})}
			</div>
		</>
	)
}

export default App
