import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from './store'
import Toaster from "@meforma/vue-toaster";
import LaravelVuePagination from 'laravel-vue-pagination';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import VueGoogleMaps from '@fawmi/vue-google-maps'



















import { loadFonts } from './plugins/webfontloader'
export default {
  components: {
      'Pagination': LaravelVuePagination
  }
}

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueSweetalert2)
  .use(store)
  .use(Toaster)
  .use(LaravelVuePagination)
  .use(Toast)
  .use(VueGoogleMaps, {
    load: {
        key: 'YOUR_API_KEY_COMES_HERE',
        // language: 'de',
    },
}).mount('#app')
  

  
  

  .mount('#app')
  document.getElementById('calorie-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none';
  
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(calculateCalories, 2000);
  
    e.preventDefault();
  });
  
  function calculateCalories() {
    
    const age = document.getElementById('age');
    const gender = document.querySelector('input[name="customRadioInline1"]:checked');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const activity = document.getElementById('list').value;
    const totalCalories = document.getElementById('total-calories');
    
    
    if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
      errorMessage('Please make sure the values you entered are correct')
    } else if(gender.id === 'male' && activity === "1") {
      totalCalories.value = 1.2 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "2") {
      totalCalories.value = 1.375 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if (gender.id === 'male' && activity === "3") {
      totalCalories.value = 1.55 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "4") {
      totalCalories.value = 1.725 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "5") {
      totalCalories.value = 1.9 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)))
      ;
    } else if(gender.id === 'female' && activity === "1") {
      totalCalories.value = 1.2 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "2") {
      totalCalories.value = 1.375 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "3") {
      totalCalories.value = 1.55 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "4") {
      totalCalories.value = 1.725* (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else {
      totalCalories.value = 1.9 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age.value)));
    } 
  
    document.getElementById('results').style.display = 'block';
  
    document.getElementById('loading').style.display = 'none';
  }
  
  function errorMessage(error) {
    document.getElementById('results').style.display = 'none';
  
    document.getElementById('loading').style.display = 'none';
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
  
    card.insertBefore(errorDiv, heading);
  
    setTimeout(clearError, 4000);
  }
  
  function clearError() {
    document.querySelector('.alert').remove();
  }
  
  