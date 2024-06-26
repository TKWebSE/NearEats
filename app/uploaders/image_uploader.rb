class ImageUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog
  # process resize_to_fit: [200, 200]

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
    # "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.user_id}"
  end
  
  # def default_url
  #   'sample.jpg'
  # end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url(*args)
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # 画像の上限を700pxにする
  # process :resize_to_limit => [400, 400]

  # 保存形式をJPGにする
  # process :convert => 'jpg'

  # Create different versions of your uploaded files:
  # version :thumb do
  #   # image = MiniMagick::Image.open(uri)
  #   # image.resize "300x300"
  #   process resize_to_fit: [300, 300]
  # end

  # Add an allowlist of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  # def extension_allowlist
  #   %w(jpg jpeg gif png)
  # end

  #
  def extension_whitelist
    %w(jpg jpeg gif png)
  end
  # version :middle do
    # process resize_to_fill: [188, 188]
  # end
  # MiniMagick.configure do |config|
  #   config.whiny = false
  # end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  def filename
    # ここをユーザーIDが時間で条件分岐を入れたい。ユーザーIDならいけそう。時間はCreatedTimeの時間を考える必要あり。
    # おそらく、ここに来たん時点ではFoodモデルが作成されていない説がある
    # インスタンスは作ったけど、データベースには保存してないから、idが採番されてない説
    if model.user_id < 8
      # if model.name == "クロワッサン"
      # name = 'sample' && model.name  && '.jpg'
      # name = 'sample.jpg'
      # end
      # if model.user_id == 1
        name = '20221029181542.jpg'
      # # end
      # if model.user_id == 2
      #   name = '20221029181542.jpg'
      # end
      # if model.user_id == 3
      #   name = '20221029181542.jpg'
      # end
      # if model.user_id == 4
      #   name = '20221029181542.jpg'
      # end
      # if model.user_id == 5
      #   name = '20221029181542.jpg'
      # end
      # if model.user_id == 6
      #   name = '20221029181542.jpg'
      # end
      # if model.user_id == 7
      #   name = '20221029181542.jpg'
      # end
      # if model.user_id == 8
      #   name = '20221029181542.jpg'
      # end
    else
      time = Time.now
      name = time.strftime('%Y%m%d%H%M%S') + '.jpg'
      name.downcase
    end
  end
end
