const slider = document.getElementById('slider-ui');

if (slider) {
   noUiSlider.create(slider, {
      start: [20, 99000],
      connect: true,
      step: 1,
      range: {
         'min': 0,
         'max': 99999
      },
   });

   const input0 = document.getElementById('start');
   const input1 = document.getElementById('end');
   const inputs = [input0, input1];

   slider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
     
   });

   const setSlider = (i, value) => {
      let arr = [null, null]
      arr[i] = value;

      slider.noUiSlider.set(arr);
   };

   inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
         setSlider(index, e.currentTarget.value);
      });
   });
}