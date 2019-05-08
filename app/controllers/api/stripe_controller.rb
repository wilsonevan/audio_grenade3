class Api::StripeController < ApplicationController
  def token
    render json: ENV['STRIPE_PUBLIC_KEY']
  end

  def payment
  end
end
