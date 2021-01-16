module.exports = {
	displayName: 'drag demo',
	hook: 'contextmenu',
   	className: 'plugin-lhpane plugin-mobile-fullscreen-no-header'

    //classNameMobile:

    //You can use the default mobile class:
    //'plugin-mobile-fullscreen'

    //or create your own:
    //'plugin-dragdemo-mobile'

    //but no longer necessary,  just use built in class:   plugin-mobile-fullscreen-no-header.

    ,dependencies: [
       // 'https://unpkg.com/windyplugin-module-infobox@0.0.8/dist/infobox.js'
    ],
    exclusive: 'lhpane',
}
