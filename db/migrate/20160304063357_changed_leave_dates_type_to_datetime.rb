class ChangedLeaveDatesTypeToDatetime < ActiveRecord::Migration
  def change
    change_column :leaves, :leave_date_from, 'text using leave_date_from::date'
  	change_column :leaves, :leave_date_to, 'text using  leave_date_to::date'
  end
end
