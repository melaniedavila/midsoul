class Api::UsersController < ApplicationController
  def index
    users = User.all
    if (params[:searchString])
      searchString = params[:searchString].downcase
      users = users.where('lower(f_name) LIKE ?', "#{searchString}%")
      users += users.where('lower(l_name) LIKE ?', "#{searchString}%")
      users += users.where('lower(email) LIKE ?', "#{searchString}%")
      users.uniq!
    end

    @users = users
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
