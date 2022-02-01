module Api
  module V1 
      class StripesController < ApplicationController

        def product_index 
          product_list = Stripe::Product.list({limit: 3})
          price_list = Stripe::Price.list({limit: 3})

          products = [];
          i = 0
          product_list.each do |product|
            sss = {price_id:"",name:"",price:"",imageUrl:""}
            sss[:name] = product.name;
            sss[:imageUrl] = product.images[0];
            # [:name].push(product.name)
            products.push(sss)
            logger.debug("こめんとだよ～＝＝＝＝")
            # logger.debug(price_list.data)
            logger.debug(sss)
            logger.debug("こめんとだよ～＝＝＝＝")
          end     

          render json: {
            product_list:product_list,
            price_list: price_list,
          }
        end

        def checkout
            def self.register_customer(card_token)
              Stripe::Customer.create({
                source: card_token,
              })
            end
            session = Stripe::Checkout::Session.create({
              line_items: [{
                # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                price: params[:priceID],
                quantity: 1,
              }],
              mode: 'payment',
                success_url: params[:buyPointfrontendURL] + '?success=true',
                cancel_url: params[:buyPointfrontendURL] + '?canceled=true',
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

          case event.type
          when 'payment_intent.succeeded'
              payment_intent = event.data.object
          # ... handle other event types
              fulfill_order
          else
              puts "Unhandled event type: #{event.type}"
          end

          render json: { }
        end
        
        private

          def fulfill_order()
            # TODO: fill in with your own logic
            # logger.debug(current_api_v1_user)
            logger.debug("fulfill_order")
            logger.debug(current_api_v1_user == nil)
            logger.debug("fulfill_order")
          end

      end
    end
end
