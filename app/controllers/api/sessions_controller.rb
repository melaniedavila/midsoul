class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: { base: ['Invalid email/password combination'] }, status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render 'api/users/show'
    else
      render json: { base: ['Not logged in'] }, status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
