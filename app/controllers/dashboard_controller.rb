class DashboardController < ApplicationController
  before_filter :verify_credentials

  layout "dashboard"
  def index
  end

  def interactions
  end

  def patients
  end

  def patientprofile
  end

  def behindthecode
  end

  private

  def verify_credentials
    if(params[:key] == "GLC6vQrubTiacu")
      return true
    else
      redirect_to root_path
    end
  end
end
