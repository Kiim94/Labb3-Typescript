import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Converter } from './converter/converter';
import { About } from './about/about';



export const routes: Routes = [
    { path: "", component: Home },
    { path: "converter", component: Converter },
    { path: "about", component: About },
];
