class UserMailer < ApplicationMailer
  default from: 'neareats@gmail.com'

  def signup_before_email
    @user
    @url
    mail(to: @user.email, subject: 'ユーザー登録を完了させましょう')
  end

  def signup_complete_email
    @user
    @url
    mail(to: @user.email, subject: 'ユーザー登録が完了しました')
  end

  def signin_mail
    @user
    @url
    @auth_code
    mail(to: @user.email, subject: '認証コードでログインしましょう')
  end

  def change_emailaddress_email
    @user = params[:user]
    @url  = params[:url]
    @auth_code = params[:auth_code]
    @new_email = params[:new_email]
    mail(to: @new_email, subject: 'メールアドレス変更を完了させましょう')
  end

  def change_password_email
    @user = params[:user]
    @url  = params[:url]
    @auth_code = params[:auth_code]
    mail(to: @user.email, subject: 'パスワードを変更させましょう')
  end

end
