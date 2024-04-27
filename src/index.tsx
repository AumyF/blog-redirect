import { Hono } from 'hono';

const app = new Hono();

app.notFound((c) => {
	return c.html(
		<html lang="ja">
			<head>
				<meta charset="utf-8"></meta>
			</head>
			<body>
				<h1>404 Not Found</h1>
				<p>
					https://blog.fuku.dayは<a href="https://fuku.day/blog">https://fuku.day/blog</a>
					に移行しました。俺がリダイレクトの設定をミスったか、お前が変なURLにアクセスしたかです。
				</p>
			</body>
		</html>,
		404
	);
});

app.on('GET', ['/', '/index.html'], (c) => c.redirect('https://fuku.day/blog', 301));

app.get('/posts/:slug{.+}', (c) => {
	const { slug } = c.req.param();
	const sl = /(\d{4})\/(\d{2})\/(\d{2})[\/\-](.+)\//.exec(slug);
	if (sl !== null) {
		const [_, yyyy, mm, dd, title] = sl;
		return c.redirect(`https://fuku.day/blog/${yyyy}-${mm}-${dd}-${title}`, 301);
	}
	return c.notFound();
});

export default app;
