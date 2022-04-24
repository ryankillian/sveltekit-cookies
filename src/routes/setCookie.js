import { serialize } from 'cookie';
import { v4 as uuidv4 } from 'uuid';

export async function post() {
	return {
		status: 200,
		headers: {
			'Set-Cookie': serialize('session_id', uuidv4(), {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7 // one week
			})
		}
	};
}
