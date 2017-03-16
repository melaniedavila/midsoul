class Api::UsersController < ApplicationController
  before_action :require_log_in!

  def index
    @users =
      if params[:searchString]
        search_string = params[:searchString].downcase
        friend_ids = current_user.friends.pluck(:id)
        received_friend_request_user_ids = current_user.
          received_friend_requests.
          pluck(:requestor_id)

        users_to_filter_out = received_friend_request_user_ids.
          concat(
            friend_ids.concat([current_user.id])
          )

        User.
          where(
            'lower(f_name) LIKE ? OR lower(l_name) LIKE ? OR lower(email) LIKE ?',
            "#{search_string}%",
            "#{search_string}%",
            "#{search_string}%"
          ).
          where.not(id: users_to_filter_out).
          uniq

      else
        User.all
      end

    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: { base: @user.errors.full_messages }, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render :show
    else
      render json: ['User does not exist'], status: 404
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def friends
    @friends = current_user.friends
    render :friends
  end

  private
    def user_params
      params.require(:user).
        permit(
          :email,
          :f_name,
          :l_name,
          :password,
          :image_url,
          :profile_picture
        )
    end
end
