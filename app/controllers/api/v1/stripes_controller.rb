module Api
  module V1 
      class StripesController < ApplicationController

        def checkout
            def self.register_customer(card_token)
              Stripe::Customer.create({
                source: card_token,
              })
            end
          
            session = Stripe::Checkout::Session.create({
              line_items: [{
                # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                price: 'price_1KGNUJLVJytCiVtmq477brLC',
                quantity: 1,
              }],
              mode: 'payment',
                success_url: YOUR_DOMAIN + '?success=true',
                cancel_url: YOUR_DOMAIN + '?canceled=true',
            })
            # redirect_to session.url
            render json: { url:session.url}
        end

        def webhook
          event = nil

          # Verify webhook signature and extract the event
          # See https://stripe.com/docs/webhooks/signatures for more information.
          begin
            sig_header = request.env['HTTP_STRIPE_SIGNATURE']
            payload = request.body.read
            endpoint_secret=ENV['STRIPE_ENDPOINT_SECRET']
            event = Stripe::Webhook.construct_event(payload, sig_header, endpoint_secret)
          rescue JSON::ParserError => e
            # Invalid payload
            return status 400
          rescue Stripe::SignatureVerificationError => e
            # Invalid signature
            return status 400
          end
          fulfill_order
          render json: { }
        end
        
        private

          def fulfill_order(checkout_session)
            # TODO: fill in with your own logic
            puts "Fulfilling order for #{checkout_session.inspect}"
            logger.debug(current_api_v1_user)
          end

      end
    end
end
