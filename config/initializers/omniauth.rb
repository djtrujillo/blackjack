OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '974880505637-7spepft5o6lpq027l2499e096ns0e9m1.apps.googleusercontent.com', '-ErkiAzkbvaf6t0r9Q_bOBss', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
