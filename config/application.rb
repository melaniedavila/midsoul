require File.expand_path('../boot', __FILE__)

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

class RangeFilter
  def initialize(app)
    @app = app
  end

  def call(env)
    dup._call(env)
  end

  def _call(env)
    @status, @headers, @response = @app.call(env)
    range = env["HTTP_RANGE"]
    if @status == 200 and range and /\Abytes=(\d*)-(\d*)\z/ =~ range
      @first_byte, @last_byte = $1, $2


      @data = "".encode("BINARY")
      @response.each do |s|
        @data << s
      end
      @length = @data.bytesize if @length.nil?
      if @last_byte.empty?
        @last_byte = @length - 1
      else
        @last_byte = @last_byte.to_i
      end
      if @first_byte.empty?
        @first_byte = @length - @last_byte
        @last_byte = @length - 1
      else
        @first_byte = @first_byte.to_i
      end
      @range_length = @last_byte - @first_byte + 1
      @headers["Content-Range"] = "bytes #{@first_byte}-#{@last_byte}/#{@length}"
      @headers["Content-Length"] = @range_length.to_s
      [@status, @headers, self]
    else
      [@status, @headers, @response]
    end
  end

  def each(&block)
    block.call(@data[@first_byte..@last_byte])
    @response.close if @response.respond_to?(:close)
  end

end

module Midsoul
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true
    Dir.glob("#{Rails.root}/app/assets/images/**/").each do |path|
      config.assets.paths << path
    end

    config.paperclip_defaults = {
      storage: :s3,
      s3_protocol: 'http',
      url: 's3_domain_url',
      path: 'images/:class/:id.:style.:extension',
      s3_host_name: ENV.fetch('AWS_S3_HOSTNAME'),
      s3_credentials: {
        bucket: "midsoul-#{Rails.env}",
        access_key_id: ENV.fetch('AWS_ACCESS_KEY_ID'),
        secret_access_key: ENV.fetch('AWS_SECRET_ACCESS_KEY'),
        s3_region: ENV.fetch('AWS_REGION')
      }
    }

    Rails.application.middleware.use RangeFilter
  end
end
