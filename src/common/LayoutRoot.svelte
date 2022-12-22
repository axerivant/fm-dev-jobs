<script lang="ts">
	import Theme from './theme.store'
	Theme
</script>

<div class="{$Theme === 'dark' && 'dark'} ">
	<slot />
</div>
