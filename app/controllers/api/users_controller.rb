class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      default_profile_pic!(@user) unless @user.image_url
      log_in!(@user)
      render :show
    else
      render json: { base: @user.errors.full_messages }, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :f_name, :l_name, :password, :image_url)
  end

  def default_profile_pic!(user)
    user.image_url = '../../assets/images/profile_pic/default_prof_pic.png'
  end
end
