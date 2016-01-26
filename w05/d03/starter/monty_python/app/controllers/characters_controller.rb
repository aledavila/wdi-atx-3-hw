class CharactersController < ApplicationController
  def index
    @characters = Character.all
  end

  def show
    @Character = Character.find(params[:id])
  end
end
