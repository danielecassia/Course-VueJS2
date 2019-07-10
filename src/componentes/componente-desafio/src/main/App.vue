<template>
	<v-app>
		<Menu />
		<Toolbar />

		<v-content>
			<Carousel />
		</v-content>

		<Footer />
	</v-app>
</template>

<script>
import Menu from '@/components/template/Menu.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'

export default {
	components: { Menu, Toolbar, Carousel, Footer }
}
</script>
