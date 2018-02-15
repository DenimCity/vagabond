class Api::PostsController < ApplicationController
    # skip_before_action :verify_authenticity_token
    
    def index
        @city = City.find(params[:city_id])
        @posts = City.find(params[:city_id]).posts

    @response = {city: @city, posts: @posts}
    
    render json: @response

    end

    def show
        @city = City.find(params[:city_id])
        @post = Post.find(params[:id])

        @response = {city: @city, post: @post}

        render json: @response
    end

    def create
        # puts "POST PARAMS" + post_params
        @city = City.find(params[:city_id])
        @post = Post.create!(post_params)

        render json: @post
    end

    def update
        @post = Post.find(params[:id])
        @post.update!(post_params)

        render json: @post
    end

    def destroy
        @post = Post.find(params[:id]).destroy
        @posts = City.find(params[:city_id]).posts
        render json: @posts
    end

    private
    def post_params
        params.require(:post).permit(:title, :body, :post_photo, :city_id, :user_id)
    end

end
