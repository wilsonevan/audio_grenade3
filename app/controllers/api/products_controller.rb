class Api::ProductsController < ApplicationController
  # before_action :authorize_admin, only: [:index, ]
  before_action :set_product, only: [:show, :update, ]

  def index
    products = Product.all
    render json: products
  end

  def show
    product = @product
    product[:inventory_count] = nil # Hide inventory count from API request. Only accessible by admin.
    render json: product
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product
    else
      render json: @product.errors, status: 422
    end
  end

  def update
    @product = @product.update(product_params)

    if product.save
      render json: product
    else
      render json: product.errors, status: 422
    end
  end

  private

    def set_product
      @product = Product.find(params[:id])
    end
    
    def product_params
      params.require(:product).permit(:order_date, :ship_date, :products_list, :shipping_address, :order_price, :order_number, :order_status)
    end

end
