module Api
  module V1 
      class StripesController < ApplicationController
        # require 'stripe'
        # require 'sinatra'

        def customerCreate
          Stripe.api_key = ENV['STRIPE_TEST_SECRET_KEY']
          # Stripe::Customer.create(description: 'My First Test Customer')
        end

        def checkout
          # This is your test secret API key.
          Stripe.api_key =  ENV['STRIPE_TEST_SECRET_KEY']
          
          # set :static, true
          # set :port, 3000
          
          post '/create-checkout-session' do
            content_type 'application/json'
          
            session = Stripe::Checkout::Session.create({
              line_items: [{
                # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
              }],
              mode: 'payment',
                success_url: YOUR_DOMAIN + '?success=true',
                cancel_url: YOUR_DOMAIN + '?canceled=true',
                # success_url: params[:success_url],
                # cancel_url:  params[:cancel_url],
            })
            redirect session.url, 303
          end
        end

      end
    end
end
