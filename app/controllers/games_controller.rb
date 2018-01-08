class GamesController < ApplicationController
  before_action :require_current_user


  def index
    @user = current_user
  end

  def show
  end

end
