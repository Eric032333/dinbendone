class CommentsController < ApplicationController
  def create
    @item = Item.find(params[:item_id])

    @comment = @item.comments.build(comment_params.merge(user: current_user))
    
    if @comment.save
      # render json: {name:"herry" , age: 19}  JSON 畫面輸入值後 不會跳轉 但重整後資料會新增
      # redirect_to item_path(params[:item_id]), notice: 'ok'
    else
      render 'items/show'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end
end

