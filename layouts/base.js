import Link from 'next/link'

export default ({ children }) => (
	<div className = "main">
		<div className="logo">
			<h2><Link href="/"><a>Home</a></Link></h2>
		</div>

		{ children }
	</div>
)