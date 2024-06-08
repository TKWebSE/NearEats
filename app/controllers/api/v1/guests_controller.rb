module Api
  module V1 
      class GuestsController < ApplicationController

        def create
          if User.find_by(email: params[:email])
            throw "すでに登録されています"
          end

          guest = Guest.find_by(email: params[:email]);
          auth_code = get_six_string_number

          if guest
            guest.update!(
              name:params[:name],
              email: params[:email],
              auth_code:auth_code
            )
          else
            guest = Guest.new(
              name: params[:name],
              email: params[:email],
              auth_code:auth_code,
              confirmation_email_sent_at: Time.current
            )

            logger.debug(params[:name])
            logger.debug(guest)
            # logger.debug(params[:params][:name])
            guest.save
          end

          UserMailer.with(
            user: guest,
            email: guest.email,
            auth_code: auth_code
          ).sign_up_email.deliver_later

          render json: {
            guest:guest
          }
        end

        def show
          guest = Guest.find(params[:id])
          
          if guest
            render json: {
              guest: guest
            }
          else
            render json: {}
          end
        end

        def activate
          guest = Guest.find(params[:guestId]);

          if !(guest)
            raise RuntimeError
            render json: { message: "ユーザーが存在しません" }
          end

          if (Time.current - guest.confirmation_email_sent_at) >= 10.minute
            raise RuntimeError
        end
        logger.debug(params[:auth_code])

          if guest.auth_code == params[:auth_code]
            render json: {
              guest: guest
            }
          else
            raise RuntimeError,"認証コードが違います"
          end
        end      

        def delete
          guest = Guest.find(params[:guest])
          guest.delete
        end

      end
    end
end
