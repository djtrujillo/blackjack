class Api::UsersController < ApplicationController
  protect_from_forgery with: :null_session
  def show

    @user = User.find(params[:id])
  end

  def update
    # binding.pry
    @user = User.find(params[:id])

    @user.update_attributes(user_params)

  end

  private
    def user_params
      params.require(:user).permit(:chips)
    end
end
