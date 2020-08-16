require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end


desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    system "robocopy _site #{tmp} /move /e"
	system "git stash"
    system "git checkout master"
	system "git pull origin master"
    system "robocopy #{tmp} . /move /e"
    message = "Site updated at #{Time.now.utc}"
    system "git add ."
    system "git commit -am published"
    system "git push origin master --force"
    system "git checkout gh-pages"
    system "echo yolo"
  end
end

task :default => :publish