class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :item

  validates :content, presence: true, length: { minimum: 2 }
  default_scope { order(id: :desc).where(deleted_at: nil)}
end

