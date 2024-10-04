<script lang="ts">
	import { client } from '$lib/client';
	const session = client.useSession();
</script>

<div>
	{#if $session.data}
		<div>
			<p>
				{$session?.data?.user.name}
			</p>
			<button
				onclick={async () => {
					await client.signOut();
				}}
			>
				Signout
			</button>
		</div>
	{:else}
		<button
			onclick={async () => {
				await client.signIn.social({
					provider: 'github'
				});
			}}
		>
			Continue with github
		</button>
	{/if}
</div>
