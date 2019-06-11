people = ["Sally", "James", "Becky", "Harold", "Mark", "Jenn", "Alex", "Carl", "Jimmy"]
people_present = ["Sally", "James", "Becky", "Mark", "Jenn", "Alex", "Jimmy"]

def check_attendance(names, names_present)
  names.each do |name|
    names_present.each{|name_present| p "#{name} is present" if name_present == name}
  end
end

check_attendance(people, people_present)
