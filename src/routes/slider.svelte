<script lang="ts">
	let alt = 'Ferienwohnung_Mittendrin';

	const images: string[] = [
		"./hof2.jpg",
        "./fuss1.jpg",
        "./stadt.jpg",
        "./sz.jpg",
        "./wz.jpg",
        "./berg.jpg"
	];
    
	let counter: number = 0;
	$: counter = counter;

	//seconds the first image is visible
	let _FIRST_TIMER: number = 6;

	//seconds every other image is visible
	let _OTHER_TIMERS: number = 4;

    //Countdown function for 1000 Milli-Seconds:
	setInterval(() => {
		if (_FIRST_TIMER >= 1) {
            //Count down the the timer here. 
			_FIRST_TIMER--;
		} else {
            //When 0 is reached the image-carousel continues to the next image.
			_continue();
		}
	}, 1000);

	function _continue() {
        //Reset timer
		_FIRST_TIMER = _OTHER_TIMERS;

        //If last image is reached, go to the first image again.
		if (counter == images.length - 1) {
			counter = 0;
		} else {
			counter += 1;
		}
	}

	function _goback() {
        //Reset timer
		_FIRST_TIMER = _OTHER_TIMERS;

        //If first image is reached, go to the last image again.
		if (counter == 0) {
			counter = images.length - 1;
		} else {
			counter -= 1;
		}
	}

	function _showslide(n: number) {
        //Reset timer
		_FIRST_TIMER = _OTHER_TIMERS;

        //Set counter to the image-number in the buttons's function.
		counter = n;
	}
</script>

<div name="slider" class=" relative pt-2 m-4 lg:m-4 sm:m-2 md:m-2">
	<div class="text-center pb-2">
		{#each images as image}
			<span
				class="{counter == images.indexOf(image) ? 'animate-bounce  bg-[#717171]' : 'bg-[#bbb]'}
             md:h-6 sm:h-6 md:w-6 sm:w-6 h-10 
             w-10 mx-1  transition  ease-in-out hover:duration-500
              hover:bg-[#717171] cursor-pointer rounded-full inline-block "
				on:click={() => {
					_showslide(images.indexOf(image));
				}}
			/>
		{/each}
	</div>

	<button
		class="absolute top-[40%] 
            rounded-md 2xl:rounded-lg
            bg-white text-black hover:text-white hover:bg-gray-500 
             transition ease-in-out hover:duration-500
             sm:pb-6  sm:pl-2 sm:pr-2 sm:pt-6 sm:text-3xl 
             lg:pb-7  lg:pl-3 lg:pr-2 lg:pt-7  lg:text-5xl 
             2xl:pb-8  2xl:pl-4 2xl:pr-4 2xl:pt-8  2xl:text-5xl 
            2xl4:pb-10  2xl4:pl-8 2xl4:pr-8 2xl4:pt-10  2xl4:text-7xl 
                 "
		on:click={() => {
			_goback();
		}}>&#10094;</button
	>
	<button
		class=" absolute top-[40%] 
            rounded-md 2xl:rounded-lg
            bg-white text-black hover:text-white hover:bg-gray-500 
            transition ease-in-out hover:duration-500
            sm:pb-6  sm:pl-2 sm:pr-2 sm:pt-6 sm:text-3xl 
            lg:pb-7  lg:pl-2 lg:pr-3 lg:pt-7  lg:text-5xl 
            2xl:pb-8  2xl:pl-4 2xl:pr-4 2xl:pt-8  2xl:text-5xl 
            2xl4:pb-10  2xl4:pl-8 2xl4:pr-8 2xl4:pt-10  2xl4:text-7xl 
 
            right-0  "
		on:click={() => {
			_continue();
		}}>&#10095;</button
	>

	<img
		class="
        sm:max-w-90/100
        md:max-w-90/100 
        2xl:max-w-85/100 
        2xl2:max-w-85/100 
        2xl3:max-w-80/100 
        2xl4:max-w-70/100 
        2xl5:max-w-65/100  
        2xl6:max-w-55/100  
        2xl7:max-w-50/100  
        2xl8:max-w-50/100  
        m-auto
        rounded-xl 
          "
		src={images[counter]}
		{alt}
	/>

	<div class="text-center pt-4">
		{#each images as image}
			<span
				class="{counter == images.indexOf(image) ? 'animate-bounce  bg-[#717171]' : 'bg-[#bbb]'}
         md:h-6 sm:h-6 md:w-6 sm:w-6 h-10 
         w-10 mx-1  transition  ease-in-out hover:duration-500
          hover:bg-[#717171] cursor-pointer rounded-full inline-block "
				on:click={() => {
					_showslide(images.indexOf(image));
				}}
			/>
		{/each}
	</div>
</div>
