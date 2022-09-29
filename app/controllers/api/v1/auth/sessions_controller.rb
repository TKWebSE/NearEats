class Api::V1::Auth::SessionsController < ApplicationController
  # before_action :authenticate_api_v1_user!

  def create 
    logger.debug(params)
  endaaaaaaaaaaa
  
  def index
    user = current_api_v1_user

    if current_api_v1_user
      tasks = Order.where(make_user: current_api_v1_user.id)

      render json: { 
        is_login: true, 
        user: current_api_v1_user,
        tasks:tasks 
      }
    else
      render json: { is_login: false, user: current_api_v1_user }
    end
  end

  def show
    if current_user
      render json: { is_login: true, data: current_user }
    else
      render json: { is_login: false, message: "ユーザーが存在しません" }
    end
  end

  # def notification_tasks
  #   user = current_user
    
  #   tasks = Order.where(make_user: user.id)

  #   render json {tasks: tasks}
  # end

end
