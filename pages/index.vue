<template>
	<section class="container-fluid">
		<ul class="nav nav-tabs nav-fill mb-3" id="myTab" role="tablist">
			<li class="nav-item" role="presentation">
				<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Einrichtung</a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Aufnahme</a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Archivierung</a>
			</li>
		</ul>
		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade show active text-center" id="home" role="tabpanel" aria-labelledby="home-tab">
				<img width="256" src="~/assets/img/icon.png">
				<h1>Obed</h1>
				<h2>GUI für Aufnahmescripte</h2>
				<a href="https://nuxtjs.org/" target="_blank" class="btn btn-primary">Documentation</a>
				<a href="https://github.com/nuxt/nuxt.js" target="_blank" class="btn btn-primary">GitHub</a>
				<a href="https://electronjs.org/" target="_blank" class="btn btn-secondary">Electron</a>
				<a href="https://github.com/electron-userland/electron-builder" target="_blank" class="btn btn-secondary">Electron Builder</a>
			</div>
			<div class="tab-pane fade text-center" id="profile" role="tabpanel" aria-labelledby="profile-tab">
				Hier wird die Aufnahme verwaltet
			</div>
			<div class="tab-pane fade text-center" id="contact" role="tabpanel" aria-labelledby="contact-tab">
				Hier wird die Aufnahme archiviert
			</div>
		</div>
	</section>
</template>

<script>
import 'popper.js/dist/popper.min.js';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export default {
}
</script>

<style scoped>
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.btn {
	margin: 0 8px;
}
</style>
