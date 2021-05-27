import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../../models/Comment";
import {CommentService} from "../../../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
@Input()
postId: number
  comments: Comment[] = []
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  this.commentService.getCommentsByPostId(this.postId).subscribe(value => {
    this.comments = value
  })
  }

}
