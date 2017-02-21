class Api::FriendshipsController < ApplicationController

  def index
    @friends = current_user.friends
    render :index
  end

  def create
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      render json: @friendship
    else
      render json: @friendship.errors, status: 422
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render json: @friendship
  end

  private

    def friendship_params
      params.require(:friendship).permit(:user_id, :friend_id)
    end
end
