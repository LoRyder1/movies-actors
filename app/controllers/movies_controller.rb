class MoviesController < ApplicationController
  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find(params[:id])
  end

  def new
    @movie = Movie.new
  end

  def edit
    @movie = Movie.find(params[:id])
  end

  def create
    @movie = Movie.new(movie_params)

    if @movie.save
      render json: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  def update
    @movie = Movie.find(params[:id])

    if @movie.update(movie_params)
      render json: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy

    head :no_content
  end

  private
  def movie_params
    params.require(:movie).permit(:title, :text)
  end
end
