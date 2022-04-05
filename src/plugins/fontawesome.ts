import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGear, faSave, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGear, faSave, faXmark);

Vue.component("font-awesome-icon", FontAwesomeIcon);
