import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGear, faSave, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGear, faSave, faXmark, faGithub);

Vue.component("font-awesome-icon", FontAwesomeIcon);
