<script>
	async function setCookie() {
		return await fetch('setCookie', {
			method: 'POST',
			body: null
		});
	}

	async function deleteCookie() {
		return await fetch('deleteCookie', {
			method: 'POST',
			body: null
		});
	}
</script>

<button on:click={setCookie}>Set Cookie</button>
<button on:click={deleteCookie}>Delete Cookie</button>
