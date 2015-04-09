class MainController < ApplicationController

  def index
  end

  def login
    if(params[:email] == Carecontrol::USERNAME && params[:password] == Carecontrol::PASSWORD)
      redirect_to(dashboard_url(:key => Carecontrol::REQUEST_KEY, :login => 'true'))
    else
      redirect_to root_path
    end
  end

end
