class Api::OrdersController < ApplicationController
  # before_action :authorize_admin, only: [:index, ]
  before_action :set_order, only: [:show, :update, ]

  def index
    orders = Order.all
    render json: orders
  end

  def show
    render json: @order
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render json: @order
    else
      render json: @order.errors, status: 422
    end
  end

  def update
    @order = @order.update(order_params)

    if order.save
      render json: order
    else
      render json: order.errors, status: 422
    end
  end

  private

    def set_order
      @order = Order.find(params[:id])
    end
    
    def order_params
      params.require(:order).permit(:name, :description, :price, :image, :inventory_count)
    end
  
  
end
