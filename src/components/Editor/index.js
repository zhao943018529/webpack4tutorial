import React from 'react';
import Quill from 'quill';
import katex from 'katex';
import "./index.scss";

export default class Editor extends React.Component{
	constructor(props){
		super(props);
		this.editorRef =null;
		this.editor = null;
	}

	componentDidMount(){
		window.katex=katex;
	let fonts = ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu'];
    let Font = Quill.import('formats/font');
    Font.whitelist = fonts;
    Quill.register(Font, true);
		this.editor = new Quill(this.editorRef, {
			bounds: '.editor-container .editor',
		modules: {
		        'formula': true,
		        'toolbar': [
		          [{ 'font': fonts }, { 'size': [] }],
		          [ 'bold', 'italic', 'underline', 'strike' ],
		          [{ 'color': [] }, { 'background': [] }],
		          [{ 'script': 'super' }, { 'script': 'sub' }],
		          [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
		          [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
		          [ 'direction', { 'align': [] }],
		          [ 'link', 'image', 'video', 'formula' ],
		          [ 'clean' ]
		        ],
		      },
			placeholder: 'Enter your notes',
			theme: 'snow'
		})
	}

	render(){

		return (
			<div className="editor-container">
				<div className="editor" ref={element=>{
					if(element){
						this.editorRef= element;
					}
				}} />
			</div>
			);
	}
}