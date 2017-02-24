class Api::CommentsController < ApplicationController
  before_action :require_log_in!
  
  def index
    @comments = Comment.
      order(created_at: 'DESC').
      where(
        commentable_id: commentable_id,
        commentable_type: commentable_type
      )
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author = current_user
    @comment.commentable_id = commentable_id
    @comment.commentable_type = commentable_type
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private
    def comment_params
      params.require(:comment).permit(:body)
    end

    def commentable_id
      params[:run_id] || params[:route_id]
    end

    def commentable_type
      if request.path =~ /route/
        'Route'
      elsif request.path =~ /run/
        'Run'
      end
    end
end
