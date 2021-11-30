class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def create_user_email
  end

  def signup_mail
  end

  def signin_mail
  end

  def change_emailaddress_email
    @user = params[:user]
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: '私の素敵なサイトへようこそ')
  end

  def change_password_email
    
  end

end
