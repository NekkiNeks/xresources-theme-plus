import * as Color from 'color';

export default (colorMap: Record<string, Color>, bordered: boolean) => ({
	type: 'dark',
	colors: {
		// Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference

		// CONTRAST COLOURS
		// --

		// BASE COLOURS
		focusBorder: colorMap.color1.hex() + '77',
		foreground: colorMap.foreground.hex() + '99',
		'widget.shadow': colorMap.background.darken(0.25).hex(),
		'selection.background': colorMap.foreground.hex() + '77',

		// TEXT COLOURS
		'textBlockQuote.background': colorMap.background.lighten(0.2).hex(),
		'textLink.foreground': colorMap.color1.hex(),
		'textLink.activeForeground': colorMap.color1.hex(),
		'textPreformat.foreground': colorMap.foreground.hex(),

		// BUTTON CONTROL
		'button.background': colorMap.color1.hex(),
		'button.foreground': colorMap.background.hex(),
		//'button.hoverBackground': '',

		// DROPDOWN CONTROL
		'dropdown.background': colorMap.background.lighten(0.2).hex(),
		'dropdown.foreground': colorMap.foreground.hex() + '99',
		'dropdown.border': colorMap.color0.hex() + '77',

		// INPUT CONTROL
		'input.background': colorMap.background.lighten(0.2).hex(),
		'input.border': colorMap.color0.hex() + '55',
		'input.foreground': colorMap.foreground.hex(),
		'input.placeholderForeground': colorMap.color0.hex() + '77',
		'inputOption.activeBorder': colorMap.color1.hex(),
		'inputValidation.errorBackground': colorMap.background.hex(),
		'inputValidation.errorBorder': colorMap.color4.hex(),
		'inputValidation.infoBackground': colorMap.background.hex(),
		'inputValidation.infoBorder': colorMap.color2.hex(),
		'inputValidation.warningBackground': colorMap.background.hex(),
		'inputValidation.warningBorder': colorMap.color3.hex(),

		// SCROLLBAR CONTROL
		'scrollbar.shadow': colorMap.background.darken(0.3).hex() + 55,
		'scrollbarSlider.background': colorMap.foreground.hex() + '44',
		'scrollbarSlider.hoverBackground': colorMap.foreground.hex() + '77',
		'scrollbarSlider.activeBackground': colorMap.foreground.hex() + '92',

		// BADGE
		'badge.background': colorMap.color1.hex(),
		'badge.foreground': colorMap.background.hex(),

		// PROGRESS BAR
		'progressBar.background': colorMap.color1.hex(),

		// LISTS AND TREES
		'list.activeSelectionBackground': colorMap.color0.hex() + '33',
		'list.activeSelectionForeground': colorMap.foreground.hex(),
		'list.focusBackground': colorMap.color0.hex() + '33',
		'list.focusForeground': colorMap.foreground.hex() + '99',
		'list.highlightForeground': colorMap.color1.hex(),
		'list.hoverBackground': colorMap.color0.hex() + '33',
		'list.hoverForeground': colorMap.foreground.hex() + '99',
		'list.inactiveSelectionBackground': colorMap.color0.hex() + '33',
		'list.inactiveSelectionForeground': colorMap.foreground.hex() + '99',
		'list.invalidItemForeground': colorMap.foreground.hex() + '77',

		// ACTIVITY BAR
		'activityBar.background': colorMap.background.hex(),
		'activityBar.foreground': colorMap.color0.hex(),
		'activityBar.border': bordered ? colorMap.color0.hex() + '33' : colorMap.background.hex(),
		'activityBarBadge.background': colorMap.color1.hex(),
		'activityBarBadge.foreground': colorMap.background.hex(),

		// SIDE BAR
		'sideBar.background': colorMap.background.hex(),
		'sideBar.border': bordered ? colorMap.color0.hex() + '33' : colorMap.background.hex(),
		'sideBarTitle.foreground': colorMap.foreground.hex() + '99',
		'sideBarSectionHeader.background': colorMap.background.hex(),
		'sideBarSectionHeader.foreground': colorMap.foreground.hex() + '99',

		// EDITOR GROUPS & TABS
		'editorGroup.border': colorMap.color0.hex() + '33',
		//'editorGroup.background': colorMap.background.lighten(0.20).hex(), // deprecated
		'editorGroupHeader.noTabsBackground': colorMap.background.hex(),
		'editorGroupHeader.tabsBackground': colorMap.background.hex(),
		'editorGroupHeader.tabsBorder': bordered ? colorMap.color0.hex() + '33' : colorMap.background.hex(),
		'tab.activeBackground': bordered ? colorMap.background.lighten(0.2).hex() : colorMap.background.hex(),
		'tab.activeForeground': colorMap.foreground.hex(),
		'tab.border': bordered ? colorMap.color0.hex() + '33' : colorMap.background.hex(),
		'tab.activeBorder': bordered ? undefined : colorMap.color1.hex(),
		'tab.activeBorderTop': bordered ? colorMap.color1.hex() : undefined,
		'tab.unfocusedActiveBorder': bordered ? undefined : colorMap.foreground.hex() + '99',
		'tab.unfocusedActiveBorderTop': bordered ? colorMap.foreground.hex() + '99' : undefined,
		'tab.inactiveBackground': colorMap.background.hex(),
		'tab.inactiveForeground': colorMap.foreground.hex() + '99',
		'tab.unfocusedActiveForeground': colorMap.foreground.hex() + '99',
		'tab.unfocusedInactiveForeground': colorMap.foreground.hex() + '99',

		// EDITOR
		'editor.background': bordered ? colorMap.background.lighten(0.05).hex() : colorMap.background.hex(),
		'editor.foreground': colorMap.foreground.hex(),
		'editorLineNumber.foreground': colorMap.color0.hex() + '92',
		'editorLineNumber.activeForeground': colorMap.color0.hex(),
		'editorCursor.foreground': colorMap.cursorColor.hex(),

		// Editor sticky header under tabs
		'editorStickyScroll.background': colorMap.background.hex(),
		'editorStickyScrollHover.background': colorMap.background.lighten(0.2).hex(),

		'editor.selectionBackground': colorMap.color0.hex() + '77',
		'editor.inactiveSelectionBackground': colorMap.color0.hex() + '44',
		'editor.selectionHighlightBackground': colorMap.color0.hex() + '44',
		'editor.selectionHighlightBorder': colorMap.color0.hex(),

		'editor.wordHighlightBackground': colorMap.color0.hex() + '44',
		'editor.wordHighlightStrongBackground': colorMap.color2.hex() + '77',

		'editor.findMatchBackground': colorMap.color1.hex() + '0e',
		'editor.findMatchBorder': colorMap.color1.hex(),
		'editor.findMatchHighlightBackground': colorMap.color1.hex() + '0e',
		'editor.findMatchHighlightBorder': colorMap.color1.hex() + '66',
		'editor.findRangeHighlightBackground': colorMap.color0.hex() + '44',
		'editor.findRangeHighlightBorder': colorMap.background.hex() + '00',

		// 'editor.hoverHighlightBackground': '',

		'editor.lineHighlightBackground': colorMap.foreground.hex() + '22',
		// 'editor.lineHighlightBorder': '',

		'editorLink.activeForeground': colorMap.color1.hex(),

		'editor.rangeHighlightBackground': colorMap.color0.hex() + '33',

		'editorWhitespace.foreground': colorMap.color0.hex() + '66',

		'editorIndentGuide.background': colorMap.color0.hex() + '44',
		'editorIndentGuide.activeBackground': colorMap.color0.hex() + '77',

		'editorRuler.foreground': colorMap.color0.hex() + '44',
		'editorCodeLens.foreground': colorMap.color0.hex() + 'b0',

		'editorBracketMatch.background': colorMap.color0.hex() + '33',
		'editorBracketMatch.border': colorMap.color0.hex() + '55',

		// OVERVIEW RULER
		'editorOverviewRuler.border': colorMap.color0.hex() + '33',
		'editorOverviewRuler.modifiedForeground': colorMap.color3.hex() + 'bb',
		'editorOverviewRuler.addedForeground': colorMap.color2.hex() + 'bb',
		'editorOverviewRuler.deletedForeground': colorMap.color4.hex() + 'bb',
		'editorOverviewRuler.errorForeground': colorMap.color4.hex(),
		'editorOverviewRuler.warningForeground': colorMap.color1.hex(),

		// ERRORS AND WARNINGS
		'editorError.foreground': colorMap.color4.hex(),
		'editorWarning.foreground': colorMap.color1.hex(),

		// GUTTER
		'editorGutter.modifiedBackground': colorMap.color3.hex() + 'bb',
		'editorGutter.addedBackground': colorMap.color2.hex() + 'bb',
		'editorGutter.deletedBackground': colorMap.color4.hex() + 'bb',

		// DIFF EDITOR
		'diffEditor.insertedTextBackground': colorMap.color10.hex() + '33',
		'diffEditor.removedTextBackground': colorMap.color3.hex() + '33',

		// EDITOR WIDGET
		'editorWidget.background': colorMap.background.lighten(0.2).hex(),
		'editorSuggestWidget.background': colorMap.background.lighten(0.2).hex(),
		'editorSuggestWidget.border': colorMap.color0.hex() + '22',
		'editorSuggestWidget.highlightForeground': colorMap.color1.hex(),
		'editorSuggestWidget.selectedBackground': colorMap.color0.hex() + '33',
		'editorHoverWidget.background': colorMap.background.lighten(0.2).hex(),
		'editorHoverWidget.border': colorMap.color0.hex() + '22',

		// DEBUG EXCEPTION
		'debugExceptionWidget.border': colorMap.color0.hex() + '33',
		'debugExceptionWidget.background': colorMap.background.lighten(0.2).hex(),

		// EDITOR MARKER
		'editorMarkerNavigation.background': colorMap.background.lighten(0.2).hex(),

		// PEEK VIEW
		'peekView.border': colorMap.color0.hex() + '33',
		'peekViewEditor.background': colorMap.background.lighten(0.2).hex(),
		'peekViewEditor.matchHighlightBackground': colorMap.color1.hex() + '44',
		'peekViewResult.background': colorMap.background.lighten(0.2).hex(),
		'peekViewResult.fileForeground': colorMap.foreground.hex() + '99',
		'peekViewResult.matchHighlightBackground': colorMap.color1.hex() + '44',
		'peekViewTitle.background': colorMap.background.lighten(0.2).hex(),
		'peekViewTitleDescription.foreground': colorMap.foreground.hex() + '99',
		'peekViewTitleLabel.foreground': colorMap.foreground.hex() + '99',

		// Merge Conflicts
		// 'merge.currentHeaderBackground': '?',
		// 'merge.currentContentBackground': '?',
		// 'merge.incomingHeaderBackground': '?',
		// 'merge.incomingContentBackground': '?',
		// 'merge.border': '?',
		// 'merge.commonContentBackground': '?',
		// 'merge.commonHeaderBackground': '?',
		// 'editorOverviewRuler.currentContentForeground': '?',
		// 'editorOverviewRuler.incomingContentForeground': '?',
		// 'editorOverviewRuler.commonContentForeground': '?',

		// Panel
		'panel.background': colorMap.background.hex(),
		'panel.border': colorMap.color0.hex() + '33',
		'panelTitle.activeBorder': colorMap.color1.hex(),
		'panelTitle.activeForeground': colorMap.foreground.hex(),
		'panelTitle.inactiveForeground': colorMap.foreground.hex() + '99',

		// STATUS BAR
		'statusBar.background': colorMap.background.hex(),
		'statusBar.foreground': colorMap.foreground.hex(),
		'statusBar.border': bordered ? colorMap.color0.hex() + '33' : colorMap.background.hex(),
		'statusBar.debuggingBackground': colorMap.color3.hex(),
		'statusBar.debuggingForeground': colorMap.background.hex() + 'dd',
		'statusBar.noFolderBackground': colorMap.background.lighten(0.2).hex(),
		'statusBarItem.activeBackground': '#00000050',
		'statusBarItem.hoverBackground': '#00000030',
		'statusBarItem.prominentBackground': colorMap.color0.hex() + '33',
		'statusBarItem.prominentHoverBackground': '#00000030',

		// TITLE BAR
		'titleBar.activeBackground': colorMap.background.hex(),
		'titleBar.activeForeground': colorMap.foreground.hex(),
		'titleBar.inactiveBackground': colorMap.background.hex(),
		'titleBar.inactiveForeground': colorMap.foreground.hex(),
		'titleBar.border': bordered ? colorMap.color0.hex() + '33' : colorMap.background.hex(),

		// MENU BAR
		// 'menubar.selectionForeground': '?',
		// 'menubar.selectionBackground': '?',
		// 'menubar.selectionBorder': '?',
		// 'menu.foreground': '?',
		// 'menu.background': '?',
		// 'menu.selectionForeground': '?',
		// 'menu.selectionBackground': '?',
		// 'menu.selectionBorder': '?',

		// NOTIFICATION
		// 'notificationCenter.border': '?',
		// 'notificationCenterHeader.foreground': '?',
		// 'notificationCenterHeader.background': '?',
		// 'notificationToast.border': '?',
		// 'notifications.foreground': '?',
		// 'notifications.background': '?',
		// 'notifications.border': '?',
		// 'notificationLink.foreground': '?',

		// EXTENSIONS
		'extensionButton.prominentForeground': colorMap.background.hex(),
		'extensionButton.prominentBackground': colorMap.color1.hex(),
		'extensionButton.prominentHoverBackground': colorMap.color1.hex() + 'b3',

		// QUICK PICKER
		'pickerGroup.border': colorMap.color0.hex() + '33',
		'pickerGroup.foreground': colorMap.foreground.hex() + 'b3',

		// DEBUG
		'debugToolBar.background': colorMap.background.hex(),
		// 'debugToolBar.border': '',

		// WELCOME PAGE
		// 'welcomePage.buttonBackground': '?'
		// 'welcomePage.buttonHoverBackground': '?'
		'walkThrough.embeddedEditorBackground': colorMap.background.lighten(0.2).hex(),

		// GIT
		'gitDecoration.modifiedResourceForeground': colorMap.color3.hex() + 'cc',
		'gitDecoration.deletedResourceForeground': colorMap.color4.hex() + 'cc',
		'gitDecoration.untrackedResourceForeground': colorMap.color2.hex() + 'cc',
		'gitDecoration.ignoredResourceForeground': colorMap.foreground.hex() + '66',
		// 'gitDecoration.conflictingResourceForeground': '?',
		'gitDecoration.submoduleResourceForeground': colorMap.color13.hex() + 'b0',

		// Settings
		'settings.headerForeground': colorMap.foreground.hex(),
		'settings.modifiedItemIndicator': colorMap.color2.hex(),

		// TERMINAL
		'terminal.background': colorMap.background.hex(),
		'terminal.foreground': colorMap.foreground.hex(),
		'terminal.ansiBlack': colorMap.background.hex(),

		'terminal.ansiRed': colorMap.color1.hex(),
		'terminal.ansiGreen': colorMap.color2.hex(),
		'terminal.ansiYellow': colorMap.color3.hex(),
		'terminal.ansiBlue': colorMap.color4.hex(),
		'terminal.ansiMagenta': colorMap.color5.hex(),
		'terminal.ansiCyan': colorMap.color6.hex(),
		'terminal.ansiWhite': colorMap.foreground.hex(),
		'terminal.ansiBrightBlack': colorMap.color0.hex(),
		'terminal.ansiBrightRed': colorMap.color9.hex(),
		'terminal.ansiBrightGreen': colorMap.color10.hex(),
		'terminal.ansiBrightYellow': colorMap.color11.hex(),
		'terminal.ansiBrightBlue': colorMap.color12.hex(),
		'terminal.ansiBrightMagenta': colorMap.color13.hex(),
		'terminal.ansiBrightCyan': colorMap.color14.hex(),
		'terminal.ansiBrightWhite': colorMap.color15.hex(),
	},
	tokenColors: [
		{
			settings: {
				background: colorMap.background.hex(),
				foreground: colorMap.foreground.hex(),
			},
		},
		{
			name: 'Comment',
			scope: ['comment'],
			settings: {
				foreground: colorMap.color0.hex() + 'b0',
			},
		},

		{
			name: 'String',
			scope: ['string', 'constant.other.symbol'],
			settings: {
				foreground: colorMap.color2.hex(),
			},
		},
		{
			name: 'Regular Expressions and Escape Characters',
			scope: ['string.regexp', 'constant.character', 'constant.other'],
			settings: {
				foreground: colorMap.color14.hex(),
			},
		},

		{
			name: 'Number',
			scope: ['constant.numeric'],
			settings: {
				foreground: colorMap.color1.hex(),
			},
		},
		{
			name: 'Built-in constants',
			scope: ['constant.language'],
			settings: {
				foreground: colorMap.foreground.hex(),
			},
		},
		{
			name: 'Variable Declaration',
			scope: ['variable.other.declaration'],
			settings: {
				foreground: colorMap.foreground.hex(),
			},
		},
		{
			name: 'Variable Usage',
			scope: ['variable.other.readwrite', 'variable.other.object'],
			settings: {
				foreground: colorMap.color14.hex(),
			},
		},
		{
			name: 'Member Variable',
			scope: ['variable.member'],
			settings: {
				foreground: colorMap.color1.hex(),
			},
		},
		{
			name: 'Object Property Key (general)',
			scope: ['meta.object-literal.key', 'meta.object.member', 'entity.name.property', 'support.property'],
			settings: {
				foreground: colorMap.color11.hex(), // цвет для ключей свойств объекта
			},
		},
		{
			name: 'Language variable',
			scope: ['variable.language'],
			settings: {
				fontStyle: 'italic',
				foreground: colorMap.color2.hex(),
			},
		},

		// ------
		// Keywords
		{
			name: 'Storage',
			scope: ['storage'],
			settings: {
				foreground: colorMap.color11.hex(),
			},
		},
		{
			name: 'Keyword',
			scope: ['keyword'],
			settings: {
				foreground: colorMap.color5.hex(),
			},
		},

		// ------
		// Operators
		{
			name: 'Operators',
			scope: ['keyword.operator'],
			settings: {
				foreground: colorMap.color1.hex(),
			},
		},
		{
			name: 'Storage Modifier',
			scope: ['storage.modifier'],
			settings: {
				foreground: colorMap.color5.hex(),
			},
		},

		// ------
		// Punctuation
		{
			name: 'Separators like ; or ,',
			scope: ['punctuation.separator', 'punctuation.terminator'],
			settings: {
				foreground: colorMap.foreground.hex() + 'b0',
			},
		},
		{
			name: 'Punctuation',
			scope: ['punctuation.section'],
			settings: {
				foreground: colorMap.foreground.hex(),
			},
		},
		{
			name: 'Accessor',
			scope: ['punctuation.accessor'],
			settings: {
				foreground: colorMap.color3.hex(),
			},
		},

		// ------
		// Types
		{
			name: 'Types fixes',
			scope: ['source.java storage.type', 'source.haskell storage.type', 'source.c storage.type'],
			settings: {
				foreground: colorMap.color12.hex(),
			},
		},
		{
			name: 'Inherited class type',
			scope: ['entity.other.inherited-class'],
			settings: {
				foreground: colorMap.color2.hex(),
			},
		},
		// Fixes
		{
			name: 'Lambda arrow',
			scope: ['storage.type.function'],
			settings: {
				foreground: colorMap.color5.hex(),
			},
		},
		{
			name: 'Java primitive variable types',
			scope: ['source.java storage.type.primitive'],
			settings: {
				foreground: colorMap.color2.hex(),
			},
		},

		// ------
		// Function/method names in definitions
		// and calls
		{
			name: 'Function name',
			scope: ['entity.name.function'],
			settings: {
				foreground: colorMap.foreground.hex(),
			},
		},
		{
			name: 'Function arguments',
			scope: ['variable.parameter', 'meta.parameter'],
			settings: {
				foreground: colorMap.color13.hex(),
			},
		},
		{
			name: 'Function call',
			scope: ['variable.function', 'variable.annotation', 'meta.function-call.generic', 'support.function.go'],
			settings: {
				foreground: colorMap.color11.hex(),
			},
		},
		{
			name: 'Library function',
			scope: ['support.function', 'support.macro'],
			settings: {
				foreground: colorMap.color1.hex(),
			},
		},

		// ------
		// Import/export paths
		{
			name: 'Imports and packages',
			scope: ['entity.name.import', 'entity.name.package'],
			settings: {
				foreground: colorMap.color10.hex(),
			},
		},
		{
			name: 'Entity name',
			scope: ['entity.name'],
			settings: {
				foreground: colorMap.color12.hex(),
			},
		},

		// Tag and their attributes
		{
			name: 'Tag',
			scope: ['entity.name.tag', 'meta.tag.sgml'],
			settings: {
				foreground: colorMap.color2.hex(),
			},
		},
		{
			name: 'Tag start/end',
			scope: ['punctuation.definition.tag.end', 'punctuation.definition.tag.begin', 'punctuation.definition.tag'],
			settings: {
				foreground: colorMap.color2.hex() + '77',
			},
		},
		{
			name: 'Tag attribute',
			scope: ['entity.other.attribute-name'],
			settings: {
				foreground: colorMap.color11.hex(),
			},
		},

		{
			name: 'Library constant',
			scope: ['support.constant'],
			settings: {
				fontStyle: 'italic',
				foreground: colorMap.color3.hex(),
			},
		},
		{
			name: 'Library class/type',
			scope: ['support.type', 'support.class', 'source.go storage.type'],
			settings: {
				foreground: colorMap.color2.hex(),
			},
		},
		{
			name: 'Decorators/annotation',
			scope: ['meta.decorator variable.other', 'meta.decorator punctuation.decorator', 'storage.type.annotation'],
			settings: {
				foreground: colorMap.color13.hex(),
			},
		},
		{
			name: 'Invalid',
			scope: ['invalid'],
			settings: {
				foreground: colorMap.color4.hex(),
			},
		},
		{
			name: 'diff.header',
			scope: ['meta.diff', 'meta.diff.header'],
			settings: {
				foreground: colorMap.color13.hex(),
			},
		},
		{
			name: 'Ruby class methods',
			scope: ['source.ruby variable.other.readwrite'],
			settings: {
				foreground: colorMap.color11.hex(),
			},
		},
		{
			name: 'CSS tag names',
			scope: [
				'source.css entity.name.tag',
				'source.sass entity.name.tag',
				'source.scss entity.name.tag',
				'source.less entity.name.tag',
				'source.stylus entity.name.tag',
			],
			settings: {
				foreground: colorMap.color12.hex(),
			},
		},
		{
			name: 'CSS browser prefix',
			scope: [
				'source.css support.type',
				'source.sass support.type',
				'source.scss support.type',
				'source.less support.type',
				'source.stylus support.type',
			],
			settings: {
				foreground: colorMap.color0.hex() + 'b0',
			},
		},
		{
			name: 'CSS Properties',
			scope: ['support.type.property-name'],
			settings: {
				fontStyle: 'normal',
				foreground: colorMap.color2.hex(),
			},
		},
		{
			name: 'Search Results Nums',
			scope: ['constant.numeric.line-number.find-in-files - match'],
			settings: {
				foreground: colorMap.color0.hex() + 'b0',
			},
		},
		{
			name: 'Search Results Match Nums',
			scope: ['constant.numeric.line-number.match'],
			settings: {
				foreground: colorMap.color11.hex(),
			},
		},
		{
			name: 'Search Results Lines',
			scope: ['entity.name.filename.find-in-files'],
			settings: {
				foreground: colorMap.color10.hex(),
			},
		},
		{
			scope: ['message.error'],
			settings: {
				foreground: colorMap.color4.hex(),
			},
		},
		{
			name: 'Markup heading',
			scope: ['markup.heading', 'markup.heading entity.name'],
			settings: {
				fontStyle: 'bold',
				foreground: colorMap.color10.hex(),
			},
		},
		{
			name: 'Markup links',
			scope: ['markup.underline.link', 'string.other.link'],
			settings: {
				foreground: colorMap.color2.hex(),
			},
		},
		{
			name: 'Markup Italic',
			scope: ['markup.italic'],
			settings: {
				fontStyle: 'italic',
				foreground: colorMap.color1.hex(),
			},
		},
		{
			name: 'Markup Bold',
			scope: ['markup.bold'],
			settings: {
				fontStyle: 'bold',
				foreground: colorMap.color1.hex(),
			},
		},
		{
			name: 'Markup Bold/italic',
			scope: ['markup.italic markup.bold', 'markup.bold markup.italic'],
			settings: {
				fontStyle: 'bold italic',
			},
		},
		{
			name: 'Markup Code',
			scope: ['markup.raw'],
			settings: {
				background: colorMap.foreground.hex() + '06',
			},
		},
		{
			name: 'Markup Code Inline',
			scope: ['markup.raw.inline'],
			settings: {
				background: colorMap.foreground.hex() + '10',
			},
		},
		{
			name: 'Markdown Separator',
			scope: ['meta.separator'],
			settings: {
				fontStyle: 'bold',
				background: colorMap.foreground.hex() + '10',
				foreground: colorMap.color0.hex() + 'b0',
			},
		},
		{
			name: 'Markup Blockquote',
			scope: ['markup.quote'],
			settings: {
				foreground: colorMap.color14.hex(),
				fontStyle: 'italic',
			},
		},
		{
			name: 'Markup List Bullet',
			scope: ['markup.list punctuation.definition.list.begin'],
			settings: {
				foreground: colorMap.color11.hex(),
			},
		},
		{
			name: 'Markup added',
			scope: ['markup.inserted'],
			settings: {
				foreground: colorMap.color2.hex(),
			},
		},
		{
			name: 'Markup modified',
			scope: ['markup.changed'],
			settings: {
				foreground: colorMap.color3.hex(),
			},
		},
		{
			name: 'Markup removed',
			scope: ['markup.deleted'],
			settings: {
				foreground: colorMap.color4.hex(),
			},
		},
		{
			name: 'Markup Strike',
			scope: ['markup.strike'],
			settings: {
				foreground: colorMap.color13.hex(),
			},
		},
		{
			name: 'Markup Table',
			scope: ['markup.table'],
			settings: {
				background: colorMap.foreground.hex() + '10',
				foreground: colorMap.color2.hex(),
			},
		},
		{
			name: 'Markup Raw Inline',
			scope: ['text.html.markdown markup.inline.raw'],
			settings: {
				foreground: colorMap.color3.hex(),
			},
		},
		{
			name: 'Markdown - Line Break',
			scope: ['text.html.markdown meta.dummy.line-break'],
			settings: {
				background: colorMap.color0.hex() + 'b0',
				foreground: colorMap.color0.hex() + 'b0',
			},
		},
		{
			name: 'Markdown - Raw Block Fenced',
			scope: ['punctuation.definition.markdown'],
			settings: {
				background: colorMap.foreground.hex(),
				foreground: colorMap.color0.hex() + 'b0',
			},
		},
	],
});
