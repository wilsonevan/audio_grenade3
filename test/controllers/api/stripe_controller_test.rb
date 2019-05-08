require 'test_helper'

class Api::StripeControllerTest < ActionDispatch::IntegrationTest
  test "should get token" do
    get api_stripe_token_url
    assert_response :success
  end

  test "should get payment" do
    get api_stripe_payment_url
    assert_response :success
  end

end
