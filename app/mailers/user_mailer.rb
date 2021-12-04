class UserMailer < ApplicationMailer
  default from: 'neareats@gmail.com'

  def signup_before_email
    @user
    @url
    mail(to: @user.email, subject: 'ユーザー登録を完了させましょう！')
  end

  def signup_complete_email
    @user
    @url
    mail(to: @user.email, subject: 'ユーザー登録が完了しました！')
  end

  def signin_mail
    @user
    @url
    @auth_code
    mail(to: @user.email, subject: '認証コードでログインしましょう！')
  end

  def change_emailaddress_email
    @user = params[:user]
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'メールアドレス変更を完了させましょう')
  end

  def change_password_email
    @user
    @url
    mail(to: @user.email, subject: 'パスワードを変更しました')
  end

end
