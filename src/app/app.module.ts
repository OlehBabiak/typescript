import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/users/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/albums/album/album.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { CommentsComponent } from './components/posts/post/comments/comments.component';
import { CommentComponent } from './components/posts/post/comments/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    AlbumsComponent,
    AlbumComponent,
    TodosComponent,
    TodoComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
