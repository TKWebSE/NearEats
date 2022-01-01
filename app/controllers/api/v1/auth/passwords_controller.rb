class Api::V1::Auth::PasswordsController < DeviseTokenAuth::PasswordsController

  def update
    logger.debug("こめんとだよ～＝＝＝＝")
    logger.debug(params)
    
    super
  end
end
