import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/json'
import ReactLogo from './assets/react-logo'
import xml from './assets/data.xml'
import './styles/styles.css'
import './styles/scss.scss'
import './babel.js'

const post = new Post('webpack post title')

$('pre').addClass('code').html(post.toString())

console.log('Post to string', post.toString())
console.log('JSON', json)
console.log('XML', xml)