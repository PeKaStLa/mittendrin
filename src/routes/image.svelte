<script lang="ts">
    export let src: string;
    export let alt: string = "Ferienwohnung";
    
    // 	import Image from './image.svelte';
    // <Image src={images[counter]} alt={alt} />
    
    </script>
	<img class="2xl5:w-50/100  
    2xl3:w-60/100 2xl:w-70/100 
    xl:w-80/100 lg:w-90/100  
    md:w-90/100 w-95/100 my-4
     m-auto rounded-xl
    border-2 border-gray-300
    shadow-lg
    "
      src={src} alt={alt} />
