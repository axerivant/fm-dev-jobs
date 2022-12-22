<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte'
	// assets
	import HeaderSVG from '@/assets/desktop/bg-pattern-header.svg'
	import LogoSVG from '@/assets/desktop/logo.svg'
</script>

<div class="px-36 pt-24 flex justify-between">
	<!-- logo /-->
	<img src={LogoSVG} alt="" />
	<ThemeToggle />
</div>

<div class="fixed w-screen -z-10 top-0 left-0">
	<!-- bg graphic /-->
	<img src={HeaderSVG} alt="" class="w-full" />
</div>
