class MainController < ApplicationController
  def index
    redirect_to dashboard_url
  end
end
