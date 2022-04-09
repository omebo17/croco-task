import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./posts/posts.component";
import { UserInfoComponent } from "./user-info/user-info.component";

const routes: Routes =[
    {
        path: ':id/posts',
        component: PostsComponent
    },
    {
        path: ':id',
        component: UserInfoComponent
    }
];

@NgModule({
    declarations: [
        UserInfoComponent,
        PostsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})
export class UserModule{}