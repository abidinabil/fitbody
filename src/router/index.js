import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import TeamView from '../views/TeamView.vue'
import PopupView from '@/components/PopupView.vue'
import BoutiqueView from '../views/BoutiqueView.vue'
import exampleView from '@/views/exampleView.vue'
import SignUp from '@/views/SignUp.vue'
import CoachView from '@/views/CoachView.vue'
import SignIn from '@/views/SignIn.vue'
import UserView from '@/views/UserView'
import AddCoach from '@/views/AddCoach'
import SideBar from '@/components/SideBar.vue'
import DashbordView from '@/views/Admin/DashbordView.vue'

import NutritionView from '@/views/NutritionView.vue'
import GestionNutrition from '@/views/Admin/GestionNutrition.vue'
import EditNutrition from '@/views/Admin/EditNutrition.vue'
import EntrainementView from '@/views/EntrainementView'
import SignIn1 from '@/views/SignIn1.vue'
import ArticleNutrition from '../views/ArticleNutrition.vue'
import BlogView from '@/views/BlogView.vue'
import GestionExercice from '../views/Admin/GestionExercice.vue'
import NutritionnisteView from '@/views/NutritionnisteView.vue'
import GestionNutritionniste from '../views/Admin/GestionNutritionniste.vue'
import GestionCoach from '../views/Admin/GestionCoach.vue'
import GestionGym from '../views/Admin/GestionGym.vue'
import CoachView1 from '@/views/CoachView1.vue'
import ProfileView from '@/views/ProfileView.vue'
import GymView from '@/views/GymView.vue'
import store from '@/store'
import CreateWorkout from '@/views/CreateWorkout.vue'
import CalorieView from '@/views/CalorieView.vue'
import WorkoutDetails from '@/views/WorkoutDetails.vue'
import ExerciceView from '@/views/ExerciceView.vue'
import SideBarExercice from '@/components/SideBarExercice.vue'
import MensView from '../views/Boutique/MensView.vue'
import GestionBoutique from '@/views/Admin/GestionBoutique.vue'
import WomensView from '../views/Boutique/WomensView.vue'
import AccessoiresView from '@/views/Boutique/AccessoiresView.vue'
import ProteinView from  '@/views/Boutique/ProteinView.vue'
import ProductDetails from '@/views/Boutique/ProductDetails.vue'
import AddToCart from '../views/AddToCart.vue'
import PanierView from '@/views/PanierView.vue'
import ExerciceDetails from '../views/ExerciceDetails.vue'
import GestionAliment from '@/views/Admin/GestionAliment.vue'
import CreateRegime from '../views/CreateRegime.vue'
import ArticleDetails from '../views/ArticleDetails.vue'
import searchAliment from '../views/searchAliment.vue'
import posteView from '../views/posteView.vue'
import EnregistrementView from '@/views/EnregistrementView.vue'
import GestionUser from '@/views/Admin/GestionUser.vue'
import PosteUser from '@/views/PosteUser.vue'
import GestionPoste from '../views/Admin/GestionPoste.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component:AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/GestionPoste',
    name: 'GestionPoste',
    component:GestionPoste
    
  },

  {
    path: '/TeamView',
    name: 'TeamView',
    component:TeamView
    
  },
  {
    path: '/exampleView',
    name: 'exampleView',
    component:exampleView,
    
    
  },
  {
    path: '/PopupView',
    name: 'PopupView',
    component:PopupView
    
  },
  {
    path: '/BoutiqueView',
    name: 'BoutiqueView',
    component:BoutiqueView,
   
    
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component:SignUp,
    meta: { guest: true }
    
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component:SignIn,
      meta: { guest: true }
    
  },
  {
    path: '/CoachView',
    name: 'CoachView',
    component:CoachView,
     meta: { guest: true }
    
  },
  {
    path: '/UserView',
    name: 'UserView',
    component:UserView,
       meta: { guest: true }
    
  },
  {
    path: '/AddCoach',
    name: 'AddCoach',
    component:AddCoach
    
  },
   {
    path: '/SideBar',
    name: 'SideBar',
    component:SideBar
    
  },
  {
    path: '/DashbordView',
    name: 'DashbordView',
    component:DashbordView
    
  },

  {
    path: '/GestionNutrition',
    name: 'GestionNutrition',
    component:GestionNutrition
    
  },
  {
    path: '/GestionGym',
    name: 'GestionGym',
    component:GestionGym
    
  },
  {
    path: '/NutritionView',
    name: 'NutritionView',
    component:NutritionView
    
  },
  {
    path: '/EntrainementView',
    name: 'EntrainementView',
    component:EntrainementView
    
  },
  {
    path: '/EditNutrition/:id?',
    name: 'EditNutrition',
    component:EditNutrition
    
  },
  {
    path: '/SignIn1',
    name: 'SignIn1',
    component:SignIn1,
  },
  {
    path: '/ArticleNutrition',
    name: 'ArticleNutrition',
    component:ArticleNutrition,
  },
  {
    path: '/BlogView',
    name: 'BlogView',
    component:BlogView,
  },
  {
    path: '/GestionExercice',
    name: 'GestionExercice',
    component:GestionExercice,
  },
  {
    path: '/NutritionnisteView',
    name: 'NutritionnisteView',
    component:NutritionnisteView,
  },
  {
    path: '/GestionNutritionniste',
    name: 'GestionNutritionniste',
    component:GestionNutritionniste,
  },
  {
    path: '/GestionCoach',
    name: 'GestionCoach',
    component:GestionCoach,
  },
  {
    path: '/CoachView1',
    name: 'CoachView1',
    component:CoachView1,
  },
  {
    path: '/ProfileView',
    name: 'ProfileView',
    component:ProfileView,
     meta: { secure: true }
  },
  {
    path: '/GymView',
    name: 'GymView',
    component:GymView,

  },
  {
    path: '/CreateWorkout',
    name: 'CreateWorkout',
    component:CreateWorkout,

  },
  {
    path: '/CalorieView',
    name: 'CalorieView',
    component:CalorieView,

  },
  {
    path: '/WorkoutDetails/:id?',
    name: 'WorkoutDetails',
    component:WorkoutDetails,

  },
  {
    path: '/ExerciceView',
    name: 'ExerciceView',
    component:ExerciceView,

  },
  {
    path: '/SideBarExercice',
    name: 'SideBarExercice',
    component:SideBarExercice,

  },
  {
    path: '/MensView',
    name: 'MensView',
    component:MensView,

  },
  {
    path: '/WomensView',
    name: 'WomensView',
    component:WomensView,

  },
  {
    path: '/AccessoiresView',
    name: 'AccessoiresView',
    component:AccessoiresView,

  },
  {
    path: '/ProteinView',
    name: 'ProteinView',
    component:ProteinView,

  },
  {
    path: '/ProductDetails/:id?',
    name: 'ProductDetails',
    component:ProductDetails,

  },
  {
    path: '/GestionBoutique',
    name: 'GestionBoutique',
    component:GestionBoutique,
  },
  {
    path: '/AddToCart',
    name: 'AddToCart',
    component:AddToCart,
  },
  {
    path: '/PanierView',
    name: 'PanierView',
    component:PanierView,
  },
  {
    path: '/ExerciceDetails/:id?',
    name: 'ExerciceDetails',
    component:ExerciceDetails,
  },
  {
    path: '/GestionAliment',
    name: 'GestionAliment',
    component:GestionAliment,
  },
  {
    path: '/CreateRegime',
    name: 'CreateRegime',
    component:CreateRegime,
  },
  {
    path: '/ArticleDetails/:id?',
    name: 'ArticleDetails',
    component:ArticleDetails,
  },
  {
    path: '/searchAliment',
    name: 'searchAliment',
    component:searchAliment,
  },
  {
    path: '/posteView',
    name: 'posteView',
    component:posteView,
  },
  {
    path: '/PosteUser',
    name: 'PosteUser',
    component:PosteUser,
  },
  {
    path: '/EnregistrementView',
    name: 'EnregistrementView',
    component:EnregistrementView,
  },
  {
    path: '/GestionUser',
    name: 'GestionUser',
    component:GestionUser,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.secure)) {
    // if no token
    if (!store.state.loggedIn) {
      //console.log("no token");
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!store.state.loggedIn) {
      next();
    } else {
      //console.log("no token");
      next({
        path: "/profile"
      });
    }
  } else {
    next();
  }
});


export default router
