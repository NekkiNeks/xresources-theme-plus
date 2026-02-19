import { ColorMap } from './colors';

export default (colorMap: ColorMap, bordered: boolean) => {
	return {
		type: 'dark',
		colors: {
			// Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference

			// CONTRAST COLOURS
			// --

			// BASE COLOURS
			focusBorder: colorMap.xres.color1.hex() + '77',
			foreground: colorMap.xres.foreground.hex() + '99',
			'widget.shadow': colorMap.xres.background.darken(0.25).hex(),
			'selection.background': colorMap.xres.foreground.hex() + '77',

			// TEXT COLOURS
			'textBlockQuote.background': colorMap.xres.background.lighten(0.2).hex(),
			'textLink.foreground': colorMap.xres.color1.hex(),
			'textLink.activeForeground': colorMap.xres.color1.hex(),
			'textPreformat.foreground': colorMap.xres.foreground.hex(),

			// BUTTON CONTROL
			'button.background': colorMap.xres.color1.hex(),
			'button.foreground': colorMap.xres.background.hex(),
			//'button.hoverBackground': '',

			// DROPDOWN CONTROL
			'dropdown.background': colorMap.xres.background.lighten(0.2).hex(),
			'dropdown.foreground': colorMap.xres.foreground.hex() + '99',
			'dropdown.border': colorMap.xres.color8.hex() + '77',

			// INPUT CONTROL
			'input.background': colorMap.xres.background.lighten(0.2).hex(),
			'input.border': colorMap.xres.color8.hex() + '55',
			'input.foreground': colorMap.xres.foreground.hex(),
			'input.placeholderForeground': colorMap.xres.color8.hex() + '77',
			'inputOption.activeBorder': colorMap.xres.color1.hex(),
			'inputValidation.errorBackground': colorMap.xres.background.hex(),
			'inputValidation.errorBorder': colorMap.xres.color4.hex(),
			'inputValidation.infoBackground': colorMap.xres.background.hex(),
			'inputValidation.infoBorder': colorMap.xres.color2.hex(),
			'inputValidation.warningBackground': colorMap.xres.background.hex(),
			'inputValidation.warningBorder': colorMap.xres.color3.hex(),

			// SCROLLBAR CONTROL
			'scrollbar.shadow': colorMap.xres.background.darken(0.3).hex() + 55,
			'scrollbarSlider.background': colorMap.xres.foreground.hex() + '44',
			'scrollbarSlider.hoverBackground': colorMap.xres.foreground.hex() + '77',
			'scrollbarSlider.activeBackground': colorMap.xres.foreground.hex() + '92',

			// BADGE
			'badge.background': colorMap.xres.color1.hex(),
			'badge.foreground': colorMap.xres.background.hex(),

			// PROGRESS BAR
			'progressBar.background': colorMap.xres.color1.hex(),

			// LISTS AND TREES
			'list.activeSelectionBackground': colorMap.xres.color8.hex() + '33',
			'list.activeSelectionForeground': colorMap.xres.foreground.hex(),
			'list.focusBackground': colorMap.xres.color8.hex() + '33',
			'list.focusForeground': colorMap.xres.foreground.hex() + '99',
			'list.highlightForeground': colorMap.xres.color1.hex(),
			'list.hoverBackground': colorMap.xres.color8.hex() + '33',
			'list.hoverForeground': colorMap.xres.foreground.hex() + '99',
			'list.inactiveSelectionBackground': colorMap.xres.color8.hex() + '33',
			'list.inactiveSelectionForeground': colorMap.xres.foreground.hex() + '99',
			'list.invalidItemForeground': colorMap.xres.foreground.hex() + '77',

			// ACTIVITY BAR
			'activityBar.background': colorMap.xres.background.hex(),
			'activityBar.foreground': colorMap.xres.color8.hex(),
			'activityBar.border': bordered ? colorMap.xres.color8.hex() + '33' : colorMap.xres.background.hex(),
			'activityBarBadge.background': colorMap.xres.color1.hex(),
			'activityBarBadge.foreground': colorMap.xres.background.hex(),

			// SIDE BAR
			'sideBar.background': colorMap.xres.background.hex(),
			'sideBar.border': bordered ? colorMap.xres.color8.hex() + '33' : colorMap.xres.background.hex(),
			'sideBarTitle.foreground': colorMap.xres.foreground.hex() + '99',
			'sideBarSectionHeader.background': colorMap.xres.background.hex(),
			'sideBarSectionHeader.foreground': colorMap.xres.foreground.hex() + '99',

			// EDITOR GROUPS & TABS
			'editorGroup.border': colorMap.xres.color8.hex() + '33',
			//'editorGroup.background': colorMap.xres.background.lighten(0.20).hex(), // deprecated
			'editorGroupHeader.noTabsBackground': colorMap.xres.background.hex(),
			'editorGroupHeader.tabsBackground': colorMap.xres.background.hex(),
			'editorGroupHeader.tabsBorder': bordered ? colorMap.xres.color8.hex() + '33' : colorMap.xres.background.hex(),
			'tab.activeBackground': bordered ? colorMap.xres.background.lighten(0.2).hex() : colorMap.xres.background.hex(),
			'tab.activeForeground': colorMap.xres.foreground.hex(),
			'tab.border': bordered ? colorMap.xres.color8.hex() + '33' : colorMap.xres.background.hex(),
			'tab.activeBorder': bordered ? undefined : colorMap.xres.color1.hex(),
			'tab.activeBorderTop': bordered ? colorMap.xres.color1.hex() : undefined,
			'tab.unfocusedActiveBorder': bordered ? undefined : colorMap.xres.foreground.hex() + '99',
			'tab.unfocusedActiveBorderTop': bordered ? colorMap.xres.foreground.hex() + '99' : undefined,
			'tab.inactiveBackground': colorMap.xres.background.hex(),
			'tab.inactiveForeground': colorMap.xres.foreground.hex() + '99',
			'tab.unfocusedActiveForeground': colorMap.xres.foreground.hex() + '99',
			'tab.unfocusedInactiveForeground': colorMap.xres.foreground.hex() + '99',

			// EDITOR
			'editor.background': bordered ? colorMap.xres.background.darken(0.05).hex() : colorMap.xres.background.hex(),
			'editor.foreground': colorMap.xres.foreground.hex(),
			'editorLineNumber.foreground': colorMap.xres.color8.hex() + '92',
			'editorLineNumber.activeForeground': colorMap.xres.color8.hex(),
			'editorCursor.foreground': colorMap.xres.cursorColor.hex(),

			// Editor sticky header under tabs
			'editorStickyScroll.background': colorMap.xres.background.hex(),
			'editorStickyScrollHover.background': colorMap.xres.background.lighten(0.2).hex(),

			'editor.selectionBackground': colorMap.xres.color8.hex() + '77',
			'editor.inactiveSelectionBackground': colorMap.xres.color8.hex() + '44',
			'editor.selectionHighlightBackground': colorMap.xres.color8.hex() + '44',
			'editor.selectionHighlightBorder': colorMap.xres.color8.hex(),

			'editor.wordHighlightBackground': colorMap.xres.color8.hex() + '44',
			'editor.wordHighlightStrongBackground': colorMap.xres.color2.hex() + '77',

			'editor.findMatchBackground': colorMap.xres.color1.hex() + '0e',
			'editor.findMatchBorder': colorMap.xres.color1.hex(),
			'editor.findMatchHighlightBackground': colorMap.xres.color1.hex() + '0e',
			'editor.findMatchHighlightBorder': colorMap.xres.color1.hex() + '66',
			'editor.findRangeHighlightBackground': colorMap.xres.color8.hex() + '44',
			'editor.findRangeHighlightBorder': colorMap.xres.background.hex() + '00',

			// 'editor.hoverHighlightBackground': '',

			'editor.lineHighlightBackground': colorMap.xres.foreground.hex() + '22',
			// 'editor.lineHighlightBorder': '',

			'editorLink.activeForeground': colorMap.xres.color1.hex(),

			'editor.rangeHighlightBackground': colorMap.xres.color8.hex() + '33',

			'editorWhitespace.foreground': colorMap.xres.color8.hex() + '66',

			'editorIndentGuide.background': colorMap.xres.color8.hex() + '44',
			'editorIndentGuide.activeBackground': colorMap.xres.color8.hex() + '77',

			'editorRuler.foreground': colorMap.xres.color8.hex() + '44',
			'editorCodeLens.foreground': colorMap.xres.color8.hex() + 'b0',

			'editorBracketMatch.background': colorMap.xres.color8.hex() + '33',
			'editorBracketMatch.border': colorMap.xres.color8.hex() + '55',

			// OVERVIEW RULER
			'editorOverviewRuler.border': colorMap.xres.color8.hex() + '33',
			'editorOverviewRuler.modifiedForeground': colorMap.xres.color3.hex() + 'bb',
			'editorOverviewRuler.addedForeground': colorMap.xres.color2.hex() + 'bb',
			'editorOverviewRuler.deletedForeground': colorMap.xres.color4.hex() + 'bb',
			'editorOverviewRuler.errorForeground': colorMap.xres.color4.hex(),
			'editorOverviewRuler.warningForeground': colorMap.xres.color1.hex(),

			// ERRORS AND WARNINGS
			'editorError.foreground': colorMap.xres.color1.hex(),
			'editorWarning.foreground': colorMap.xres.color3.hex(),
			'editorInfo.foreground': colorMap.xres.color4.hex(),
			'editorHint.foreground': colorMap.xres.color2.hex(),

			// GUTTER
			'editorGutter.modifiedBackground': colorMap.xres.color3.hex() + 'bb',
			'editorGutter.addedBackground': colorMap.xres.color2.hex() + 'bb',
			'editorGutter.deletedBackground': colorMap.xres.color4.hex() + 'bb',

			// DIFF EDITOR
			'diffEditor.insertedTextBackground': colorMap.xres.color10.hex() + '33',
			'diffEditor.removedTextBackground': colorMap.xres.color3.hex() + '33',

			// EDITOR WIDGET
			'editorWidget.background': colorMap.xres.background.lighten(0.2).hex(),
			'editorSuggestWidget.background': colorMap.xres.background.lighten(0.2).hex(),
			'editorSuggestWidget.border': colorMap.xres.color8.hex() + '22',
			'editorSuggestWidget.highlightForeground': colorMap.xres.color1.hex(),
			'editorSuggestWidget.selectedBackground': colorMap.xres.color8.hex() + '33',
			'editorHoverWidget.background': colorMap.xres.background.lighten(0.2).hex(),
			'editorHoverWidget.border': colorMap.xres.color8.hex() + '22',

			// DEBUG EXCEPTION
			'debugExceptionWidget.border': colorMap.xres.color8.hex() + '33',
			'debugExceptionWidget.background': colorMap.xres.background.lighten(0.2).hex(),

			// EDITOR MARKER
			'editorMarkerNavigation.background': colorMap.xres.background.lighten(0.2).hex(),

			// PEEK VIEW
			'peekView.border': colorMap.xres.color8.hex() + '33',
			'peekViewEditor.background': colorMap.xres.background.lighten(0.2).hex(),
			'peekViewEditor.matchHighlightBackground': colorMap.xres.color1.hex() + '44',
			'peekViewResult.background': colorMap.xres.background.lighten(0.2).hex(),
			'peekViewResult.fileForeground': colorMap.xres.foreground.hex() + '99',
			'peekViewResult.matchHighlightBackground': colorMap.xres.color1.hex() + '44',
			'peekViewTitle.background': colorMap.xres.background.lighten(0.2).hex(),
			'peekViewTitleDescription.foreground': colorMap.xres.foreground.hex() + '99',
			'peekViewTitleLabel.foreground': colorMap.xres.foreground.hex() + '99',

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
			'panel.background': bordered ? colorMap.xres.background.darken(0.05).hex() : colorMap.xres.background.hex(),
			'panel.border': colorMap.xres.color8.hex() + '33',
			'panelTitle.activeBorder': colorMap.xres.color1.hex(),
			'panelTitle.activeForeground': colorMap.xres.foreground.hex(),
			'panelTitle.inactiveForeground': colorMap.xres.foreground.hex() + '99',

			// STATUS BAR
			'statusBar.background': colorMap.xres.background.hex(),
			'statusBar.foreground': colorMap.xres.foreground.hex(),
			'statusBar.border': bordered ? colorMap.xres.color8.hex() + '33' : colorMap.xres.background.hex(),
			'statusBar.debuggingBackground': colorMap.xres.color3.hex(),
			'statusBar.debuggingForeground': colorMap.xres.background.hex() + 'dd',
			'statusBar.noFolderBackground': colorMap.xres.background.lighten(0.2).hex(),
			'statusBarItem.activeBackground': '#00000050',
			'statusBarItem.hoverBackground': '#00000030',
			'statusBarItem.prominentBackground': colorMap.xres.color8.hex() + '33',
			'statusBarItem.prominentHoverBackground': '#00000030',

			// TITLE BAR
			'titleBar.activeBackground': colorMap.xres.background.hex(),
			'titleBar.activeForeground': colorMap.xres.foreground.hex(),
			'titleBar.inactiveBackground': colorMap.xres.background.hex(),
			'titleBar.inactiveForeground': colorMap.xres.foreground.hex(),
			'titleBar.border': bordered ? colorMap.xres.color8.hex() + '33' : colorMap.xres.background.hex(),

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
			'extensionButton.prominentForeground': colorMap.xres.background.hex(),
			'extensionButton.prominentBackground': colorMap.xres.color1.hex(),
			'extensionButton.prominentHoverBackground': colorMap.xres.color1.hex() + 'b3',

			// QUICK PICKER
			'pickerGroup.border': colorMap.xres.color8.hex() + '33',
			'pickerGroup.foreground': colorMap.xres.foreground.hex() + 'b3',

			// DEBUG
			'debugToolBar.background': colorMap.xres.background.hex(),
			// 'debugToolBar.border': '',

			// WELCOME PAGE
			// 'welcomePage.buttonBackground': '?'
			// 'welcomePage.buttonHoverBackground': '?'
			'walkThrough.embeddedEditorBackground': colorMap.xres.background.lighten(0.2).hex(),

			// GIT
			'gitDecoration.modifiedResourceForeground': colorMap.xres.color3.hex() + 'cc',
			'gitDecoration.deletedResourceForeground': colorMap.xres.color4.hex() + 'cc',
			'gitDecoration.untrackedResourceForeground': colorMap.xres.color2.hex() + 'cc',
			'gitDecoration.ignoredResourceForeground': colorMap.xres.foreground.hex() + '66',
			// 'gitDecoration.conflictingResourceForeground': '?',
			'gitDecoration.submoduleResourceForeground': colorMap.xres.color13.hex() + 'b0',

			// Settings
			'settings.headerForeground': colorMap.xres.foreground.hex(),
			'settings.modifiedItemIndicator': colorMap.xres.color2.hex(),

			// TERMINAL
			'terminal.background': bordered ? colorMap.xres.background.darken(0.05).hex() : colorMap.xres.background.hex(),
			'terminal.foreground': colorMap.xres.foreground.hex(),
			'terminal.ansiBlack': colorMap.xres.background.hex(),

			'terminal.ansiRed': colorMap.xres.color1.hex(),
			'terminal.ansiGreen': colorMap.xres.color2.hex(),
			'terminal.ansiYellow': colorMap.xres.color3.hex(),
			'terminal.ansiBlue': colorMap.xres.color4.hex(),
			'terminal.ansiMagenta': colorMap.xres.color5.hex(),
			'terminal.ansiCyan': colorMap.xres.color6.hex(),
			'terminal.ansiWhite': colorMap.xres.color7.hex(), // was foreground?
			'terminal.ansiBrightBlack': colorMap.xres.color8.hex(),
			'terminal.ansiBrightRed': colorMap.xres.color9.hex(),
			'terminal.ansiBrightGreen': colorMap.xres.color10.hex(),
			'terminal.ansiBrightYellow': colorMap.xres.color11.hex(),
			'terminal.ansiBrightBlue': colorMap.xres.color12.hex(),
			'terminal.ansiBrightMagenta': colorMap.xres.color13.hex(),
			'terminal.ansiBrightCyan': colorMap.xres.color14.hex(),
			'terminal.ansiBrightWhite': colorMap.xres.color15.hex(),
		},
		tokenColors: [
			{
				settings: {
					background: colorMap.xres.background.hex(),
					foreground: colorMap.xres.foreground.hex(),
				},
			},
			{
				name: 'Comment',
				scope: ['comment'],
				settings: {
					foreground: colorMap.xres.color8.hex() + 'b0',
				},
			},

			{
				name: 'String',
				scope: ['string', 'constant.other.symbol'],
				settings: {
					foreground: colorMap.xres.color2.hex(),
				},
			},
			{
				name: 'Regular Expressions and Escape Characters',
				scope: ['string.regexp', 'constant.character', 'constant.other'],
				settings: {
					foreground: colorMap.xres.color14.hex(),
				},
			},

			{
				name: 'Number',
				scope: ['constant.numeric'],
				settings: {
					foreground: colorMap.xres.color13.hex(), // was color 1
				},
			},
			{
				name: 'Built-in constants',
				scope: ['constant.language'],
				settings: {
					foreground: colorMap.xres.foreground.hex(),
				},
			},
			{
				name: 'Variable Declaration',
				scope: ['variable.other.declaration'],
				settings: {
					foreground: colorMap.xres.foreground.hex(),
				},
			},
			{
				name: 'Variable Usage',
				scope: ['variable.other.readwrite', 'variable.other.object'],
				settings: {
					foreground: colorMap.xres.color14.hex(),
				},
			},
			{
				name: 'Member Variable',
				scope: ['variable.member'],
				settings: {
					foreground: colorMap.xres.color1.hex(),
				},
			},
			{
				name: 'Object Property Key (general)',
				scope: ['meta.object-literal.key', 'meta.object.member', 'entity.name.property', 'support.property'],
				settings: {
					foreground: colorMap.xres.color11.hex(),
				},
			},
			{
				name: 'Language variable',
				scope: ['variable.language'],
				settings: {
					fontStyle: 'italic',
					foreground: colorMap.xres.color2.hex(),
				},
			},

			// ------
			// Keywords
			{
				name: 'Storage',
				scope: ['storage'],
				settings: {
					foreground: colorMap.xres.color11.hex(),
				},
			},
			{
				name: 'Keyword',
				scope: ['keyword'],
				settings: {
					foreground: colorMap.xres.color5.hex(),
				},
			},

			// ------
			// Operators
			{
				name: 'Operators',
				scope: ['keyword.operator'],
				settings: {
					foreground: colorMap.xres.color1.hex(),
				},
			},
			{
				name: 'Storage Modifier',
				scope: ['storage.modifier'],
				settings: {
					foreground: colorMap.xres.color5.hex(),
				},
			},

			// ------
			// Punctuation
			{
				name: 'Separators like ; or ,',
				scope: ['punctuation.separator', 'punctuation.terminator'],
				settings: {
					foreground: colorMap.xres.foreground.hex() + 'b0',
				},
			},
			{
				name: 'Punctuation',
				scope: ['punctuation.section'],
				settings: {
					foreground: colorMap.xres.foreground.hex(),
				},
			},
			{
				name: 'Accessor',
				scope: ['punctuation.accessor'],
				settings: {
					foreground: colorMap.xres.color3.hex(),
				},
			},

			// ------
			// Types
			{
				name: 'Types fixes',
				scope: ['source.java storage.type', 'source.haskell storage.type', 'source.c storage.type'],
				settings: {
					foreground: colorMap.xres.color12.hex(),
				},
			},
			{
				name: 'Inherited class type',
				scope: ['entity.other.inherited-class'],
				settings: {
					foreground: colorMap.xres.color2.hex(),
				},
			},
			// Fixes
			{
				name: 'Lambda arrow',
				scope: ['storage.type.function'],
				settings: {
					foreground: colorMap.xres.color5.hex(),
				},
			},
			{
				name: 'Java primitive variable types',
				scope: ['source.java storage.type.primitive'],
				settings: {
					foreground: colorMap.xres.color2.hex(),
				},
			},

			// ------
			// Function/method names in definitions
			// and calls

			{
				name: 'Function name',
				scope: [
					'entity.name.function',
					'entity.name.function.declaration',
					'meta.function entity.name.function',
					'meta.function.declaration entity.name.function',
				],
				settings: {
					foreground: colorMap.xres.foreground.hex(),
				},
			},
			{
				name: 'Function arguments',
				scope: ['variable.parameter', 'meta.parameter'],
				settings: {
					foreground: colorMap.xres.foreground.hex(),
				},
			},
			{
				name: 'Function call',
				scope: ['variable.function', 'variable.annotation', 'meta.function-call', 'source.function-call', 'support.function.go'],
				settings: {
					foreground: colorMap.xres.color11.hex(),
				},
			},
			{
				name: 'Function call',
				scope: ['meta.function-call variable.function', 'meta.function-call support.function', 'meta.function-call entity.name.function'],
				settings: {
					foreground: colorMap.xres.color11.hex(),
				},
			},
			{
				name: 'Library function',
				scope: ['support.function', 'support.macro'],
				settings: {
					foreground: colorMap.xres.color11.hex(),
				},
			},

			// ------
			// Import/export paths
			{
				name: 'Imports and packages',
				scope: ['entity.name.import', 'entity.name.package'],
				settings: {
					foreground: colorMap.xres.color10.hex(),
				},
			},
			{
				name: 'Entity name',
				scope: ['entity.name'],
				settings: {
					foreground: colorMap.xres.color12.hex(),
				},
			},

			// Tag and their attributes
			{
				name: 'Tag',
				scope: ['entity.name.tag', 'meta.tag.sgml'],
				settings: {
					foreground: colorMap.xres.color2.hex(),
				},
			},
			{
				name: 'Tag start/end',
				scope: ['punctuation.definition.tag.end', 'punctuation.definition.tag.begin', 'punctuation.definition.tag'],
				settings: {
					foreground: colorMap.xres.color2.hex() + '77',
				},
			},
			{
				name: 'Tag attribute',
				scope: ['entity.other.attribute-name'],
				settings: {
					foreground: colorMap.xres.color11.hex(),
				},
			},

			{
				name: 'Library constant',
				scope: ['support.constant'],
				settings: {
					fontStyle: 'italic',
					foreground: colorMap.xres.color3.hex(),
				},
			},
			{
				name: 'Library class/type',
				scope: ['support.type', 'support.class', 'source.go storage.type'],
				settings: {
					foreground: colorMap.xres.color2.hex(),
				},
			},
			{
				name: 'Decorators/annotation',
				scope: ['meta.decorator variable.other', 'meta.decorator punctuation.decorator', 'storage.type.annotation'],
				settings: {
					foreground: colorMap.xres.color13.hex(),
				},
			},
			{
				name: 'Invalid',
				scope: ['invalid'],
				settings: {
					foreground: colorMap.xres.color4.hex(),
				},
			},
			{
				name: 'diff.header',
				scope: ['meta.diff', 'meta.diff.header'],
				settings: {
					foreground: colorMap.xres.color13.hex(),
				},
			},
			{
				name: 'Ruby class methods',
				scope: ['source.ruby variable.other.readwrite'],
				settings: {
					foreground: colorMap.xres.color11.hex(),
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
					foreground: colorMap.xres.color12.hex(),
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
					foreground: colorMap.xres.color8.hex() + 'b0',
				},
			},
			{
				name: 'CSS Properties',
				scope: ['support.type.property-name'],
				settings: {
					fontStyle: 'normal',
					foreground: colorMap.xres.color2.hex(),
				},
			},
			{
				name: 'Search Results Nums',
				scope: ['constant.numeric.line-number.find-in-files - match'],
				settings: {
					foreground: colorMap.xres.color8.hex() + 'b0',
				},
			},
			{
				name: 'Search Results Match Nums',
				scope: ['constant.numeric.line-number.match'],
				settings: {
					foreground: colorMap.xres.color11.hex(),
				},
			},
			{
				name: 'Search Results Lines',
				scope: ['entity.name.filename.find-in-files'],
				settings: {
					foreground: colorMap.xres.color10.hex(),
				},
			},
			{
				scope: ['message.error'],
				settings: {
					foreground: colorMap.xres.color4.hex(),
				},
			},
			// ------
			// Markups
			{
				name: 'Markup heading',
				scope: ['markup.heading', 'markup.heading entity.name'],
				settings: {
					fontStyle: 'bold',
					foreground: colorMap.xres.color10.hex(),
				},
			},
			{
				name: 'Markup links',
				scope: ['markup.underline.link', 'string.other.link'],
				settings: {
					foreground: colorMap.xres.color2.hex(),
				},
			},
			{
				name: 'Markup Italic',
				scope: ['markup.italic'],
				settings: {
					fontStyle: 'italic',
					foreground: colorMap.xres.color1.hex(),
				},
			},
			{
				name: 'Markup Bold',
				scope: ['markup.bold'],
				settings: {
					fontStyle: 'bold',
					foreground: colorMap.xres.color1.hex(),
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
					background: colorMap.xres.foreground.hex() + '06',
				},
			},
			{
				name: 'Markup Code Inline',
				scope: ['markup.raw.inline'],
				settings: {
					background: colorMap.xres.foreground.hex() + '10',
				},
			},
			{
				name: 'Markdown Separator',
				scope: ['meta.separator'],
				settings: {
					fontStyle: 'bold',
					background: colorMap.xres.foreground.hex() + '10',
					foreground: colorMap.xres.color8.hex() + 'b0',
				},
			},
			{
				name: 'Markup Blockquote',
				scope: ['markup.quote'],
				settings: {
					foreground: colorMap.xres.color14.hex(),
					fontStyle: 'italic',
				},
			},
			{
				name: 'Markup List Bullet',
				scope: ['markup.list punctuation.definition.list.begin'],
				settings: {
					foreground: colorMap.xres.color11.hex(),
				},
			},
			{
				name: 'Markup added',
				scope: ['markup.inserted'],
				settings: {
					foreground: colorMap.xres.color2.hex(),
				},
			},
			{
				name: 'Markup modified',
				scope: ['markup.changed'],
				settings: {
					foreground: colorMap.xres.color3.hex(),
				},
			},
			{
				name: 'Markup removed',
				scope: ['markup.deleted'],
				settings: {
					foreground: colorMap.xres.color4.hex(),
				},
			},
			{
				name: 'Markup Strike',
				scope: ['markup.strike'],
				settings: {
					foreground: colorMap.xres.color13.hex(),
				},
			},
			{
				name: 'Markup Table',
				scope: ['markup.table'],
				settings: {
					background: colorMap.xres.foreground.hex() + '10',
					foreground: colorMap.xres.color2.hex(),
				},
			},
			{
				name: 'Markup Raw Inline',
				scope: ['text.html.markdown markup.inline.raw'],
				settings: {
					foreground: colorMap.xres.color3.hex(),
				},
			},
			{
				name: 'Markdown - Line Break',
				scope: ['text.html.markdown meta.dummy.line-break'],
				settings: {
					background: colorMap.xres.color8.hex() + 'b0',
					foreground: colorMap.xres.color8.hex() + 'b0',
				},
			},
			{
				name: 'Markdown - Raw Block Fenced',
				scope: ['punctuation.definition.markdown'],
				settings: {
					background: colorMap.xres.foreground.hex(),
					foreground: colorMap.xres.color8.hex() + 'b0',
				},
			},
		],
	};
};
