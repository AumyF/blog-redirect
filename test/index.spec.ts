// test/index.spec.ts
import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect, test } from 'vitest';
import worker from '../src/index';

// For now, you'll need to do something like this to get a correctly-typed
// `Request` to pass to `worker.fetch()`.
const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

// なんかテストしようとしたけど無理やったわ
const routes = [
	'/posts/2021/10/01-touhi/index.html',
	'/posts/2021/12/31-furikaeri/index.html',
	'/posts/2022/02/15-next-blog/index.html',
	'/posts/2022/02/17-koka-lang/index.html',
	'/posts/2022/02/18-chikuji/index.html',
	'/posts/2022/03/15-strtol-rust/index.html',
	'/posts/2022/04/05-return-to-zsh/index.html',
	'/posts/2022/10/11-mukiai/index.html',
	'/posts/2022/11/24-astro/index.html',
	'/posts/2022/12/29/furikaeri/index.html',
	'/posts/2023/01/05/hige-shitara-korosu/index.html',
	'/posts/2023/01/07/2023-hofu/index.html',
	'/posts/2023/02/11/dotstingray/index.html',
	'/posts/2023/05/02/riscv-emu/index.html',
	'/posts/2024/02/15/music-2023/index.html',
	'/posts/2024/04/21/music-2024-q1/index.html',
	'/posts/2024/04/23/sanabi/index.html',
	'/index.html',
];

// describe('Hello World worker', async () => {
// 	for (const route of routes) {
// 		test('404ではない', async () => {
// 			const response = await SELF.fetch(`http://blog.fuku.day${route}`, { redirect: 'follow' });

// 			console.log(response);
// 			console.log(await response.text());
// 			expect(response.status).toBe(200);
// 		});
// 	}
// });
