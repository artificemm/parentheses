#!usr/local/ruby

def check_parentheses(argument)
  data = argument.chars
  return result(false) if argument.size > 100
  stack = 0
  data.each do |current_char|
    return result(false) if current_char == ')' && stack.zero?
    stack += 1 if current_char == '('
    stack -= 1 if current_char == ')'
  end
  result(stack.zero?)
end

def result(object)
  puts object
end
