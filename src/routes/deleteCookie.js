import { serialize } from 'cookie';

export async function post() {
	return {
		status: 200,
		headers: {
			'Set-Cookie': serialize('session_id', '', {
				path: '/',
				expires: new Date(0)
			})
		}
	};
}
