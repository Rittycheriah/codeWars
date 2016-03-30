class String
  def letter?
    return !!/\A[a-z]\z/i.match(self) 
  end
end

#This extends the string class, and gives you a way to tell if 
# one character is a letter or not. 
