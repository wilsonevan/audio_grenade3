class Api::UsersController < ApplicationController
  # before_action :authorize_admin, only: [:index, ]
  before_action :set_user, only: [:show, ]


  # def show
  #   render json: @user
  # end

  def index
    users = User.all
    render json: users
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors, status: 422
    end
  end

  def add_to_cart

    current_user.cart.push(new_item)
    binding.pry
    if current_user.save
      render json: current_user 
    else
      render json: @user.errors, status: 422
    end

  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def new_item
    binding.pry
    # params[:product]
  end
  
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :admin)
  end
  
end
