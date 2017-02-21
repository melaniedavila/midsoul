class Api::FriendRequestsController < ApplicationController

  def index
    @friend_requests = FriendRequest.where(requestee_id: current_user.id)
    render :index
  end

  def create
    @friend_request = FriendRequest.new(friend_request_params)

    if @friend_request.save
      render json: @friend_request
    else
      render json: @friend_request.errors, status: 422
    end
  end

  def update
    @friend_request = FriendRequest.find(params[:id])

    if @friend_request.update(friend_request_params)
      if @friend_request.accepted?
        @friendships = [
          requestor.friendships.create!(friend: requestee),
          requestee.friendships.create!(friend: requestor),
        ]
      end

      render json: @friendships
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end

  private

  def friend_request_params
    params.require(:friend_request).permit(:requestor_id, :requestee_id, :status)
  end

  def requestor
    @requestor ||= User.find(params[:requestor_id])
  end

  def requestee
    @requestee ||= User.find(params[:requestee_id])
  end
end
