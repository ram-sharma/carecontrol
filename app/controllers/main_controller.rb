class MainController < ApplicationController

  def index
  end

  def login
    if(params[:email] == "nurse@example.com" && params[:password] == "wellframe")
      redirect_to(dashboard_url(:key => 'GLC6vQrubTiacu'))
    else
      redirect_to root_path
    end
  end

end
