## Liquid tag 'cite' used to add an epigraph
## in the main text area of the layout
## Usage {% cite 'author-of-citation' 'citation' 'extra-details_optional' %}
#
module Jekyll
  class RenderCiteTag < Liquid::Tag

  	require "shellwords"
	require "kramdown"

    def initialize(tag_name, text, tokens)
      super
      @text = text.shellsplit
    end

    def render(context)
	# Gather settings
      site = context.registers[:site]
      converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
	  
      label1 = Kramdown::Document.new(@text[0],{remove_span_html_tags:true}).to_html # render markdown in caption
      label1 = converter.convert(label1).gsub(/<\/?p[^>]*>/, "").chomp # remove <p> tags from render output
	  
	   label2 = Kramdown::Document.new(@text[1],{remove_span_html_tags:true}).to_html # render markdown in caption
      label2 = converter.convert(label2).gsub(/<\/?p[^>]*>/, "").chomp # remove <p> tags from render output
	  
	   label3 = Kramdown::Document.new(@text[2],{remove_span_html_tags:true}).to_html # render markdown in caption
      label3 = converter.convert(label3).gsub(/<\/?p[^>]*>/, "").chomp # remove <p> tags from render output
	  
        "<footer> <strong>#{label1}, </strong>"+" <em>#{label2}</em> "+"#{label3}"+""
    end
  end
end

Liquid::Template.register_tag('cite', Jekyll::RenderCiteTag)