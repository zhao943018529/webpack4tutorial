import React from 'react';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import katex from 'katex';
import Quill from 'quill';
import "./index.scss";

export default class Editor extends React.Component{
	constructor(props){
		super(props);
		this.editorRef =null;
		this.quill = null;
	}

	componentDidMount(){
		window.katex = katex;
		let fonts = ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu'];
		let Font = Quill.import('formats/font');
		Font.whitelist = fonts;
		Quill.register(Font, true);
	    let toolbarOptions  = [
		  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
		  ['blockquote', 'code-block'],

		  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
		  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
		  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
		  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
		  [{ 'direction': 'rtl' }],                         // text direction

		  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
		  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

		  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
		  [{ 'font': fonts},{'size':[]}],
		  [{ 'align': [] }],
		  ['formula','image','video'],
		  ['clean']                                         // remove formatting button
		];

		this.quill = new Quill(this.editorRef, {
			modules: {
				'formula': true,
				'syntax':{
					highlight:text=>hljs.highlightAuto(text).value,
				},
				'toolbar': toolbarOptions,
			},
			placeholder: 'Enter your notes',
			theme: 'snow'
		});
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