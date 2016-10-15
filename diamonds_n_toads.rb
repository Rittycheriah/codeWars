nd_toads(sentence, fairy) 
  answer = {};
  
  if (fairy == :good)
    ruby_total = 0 
    crystal_total = 0
    
    sentence.each_char do |c|
      if (c == "R")
        ruby = ruby + 2
      elsif(c == "C")
        crystal = crystal + 2
      elsif(c == "r")
        ruby = ruby + 1
      elsif(c == "c")
        crystal = crystal + 1
      end
    end
    
    answer = {ruby: ruby_total, crystal: crystal_total }
  elsif(fairy == :evil)
    python_total = 0
    squirrel_total = 0
    
    sentence.each_char do |c|
      if (c == "p")
        python = python + 1
      elsif(c == "P")
        python = python + 2
      elsif(c == "s")
        squirrel = squirrel + 1
      elsif(c == "S")
        squirrel = squirrel + 2
      end
    end

    answer = {python: python_total, squirrel: squirrel_total }
  end
  
  return answer;
end
