<script>
	import '../app.postcss';

  String.prototype.slugify = function() {
		return this.toString().toLowerCase()
			.replace(/\s+/g, '-')           // Replace spaces with -
			.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
			.replace(/\-\-+/g, '-')         // Replace multiple - with single -
			.replace(/^-+/, '')             // Trim - from start of text
			.replace(/-+$/, '');            // Trim - from end of text
	};
</script>

<main class="bg-white px-6 py-32 lg:px-8">
	<div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
		<slot />
	</div>
</main>
